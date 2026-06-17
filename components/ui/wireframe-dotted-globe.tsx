"use client";

import * as React from "react";
import {
  geoOrthographic,
  geoPath,
  geoGraticule10,
  geoContains,
} from "d3-geo";
import * as topojson from "topojson-client";

type WorldTopology = {
  type: "Topology";
  objects: Record<string, unknown>;
  arcs: unknown;
  bbox?: number[];
  transform?: unknown;
};

interface RotatingEarthProps {
  className?: string;
  /** World scale in pixels (default 280) */
  scale?: number;
  /** Auto-rotation speed in degrees per second */
  rotateSpeed?: number;
  /** Dot grid spacing in degrees */
  dotSpacing?: number;
  /** Ocean (sphere) fill color */
  oceanColor?: string;
  /** Land outline stroke color */
  landStrokeColor?: string;
  /** Halftone dot color */
  dotColor?: string;
  /** Outer ring glow color */
  glowColor?: string;
  /** Cap rendering FPS — default 30 */
  maxFps?: number;
}

const WORLD_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";

export function RotatingEarth({
  className,
  scale = 280,
  rotateSpeed = 4,
  dotSpacing = 4,
  oceanColor = "#0a0d14",
  landStrokeColor = "rgba(255, 250, 235, 0.85)",
  dotColor = "rgba(225, 220, 200, 0.55)",
  glowColor = "rgba(201,168,76,0.25)",
  maxFps = 30,
}: RotatingEarthProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;
    let raf = 0;
    let landFeature: GeoJSON.Feature | null = null;
    /* Pre-filtered dots that sit on land — populated ONCE after world data loads.
       This eliminates the per-frame geoContains call, which was the single hottest
       hot spot. After this, per-frame work is just projection + a batched fill. */
    let landDots: Array<[number, number]> = [];
    const projection = geoOrthographic().clipAngle(90).rotate([0, -20, 0]);
    const path = geoPath(projection, ctx);
    const frameInterval = 1000 / maxFps;

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      width = Math.max(280, r.width);
      height = Math.max(280, r.height);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const s = Math.min(width, height) / 2 - 8;
      projection.scale(s).translate([width / 2, height / 2]);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    /* Pre-compute the full halftone dot grid (lng,lat). Cheap, ~3k points. */
    const dotGrid: Array<[number, number]> = [];
    for (let lat = -80; lat <= 80; lat += dotSpacing) {
      const ringSpacing = dotSpacing / Math.cos((lat * Math.PI) / 180);
      for (let lon = -180; lon <= 180; lon += ringSpacing) {
        dotGrid.push([lon, lat]);
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const r = projection.scale();

      /* Ocean sphere */
      ctx.fillStyle = oceanColor;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      /* Subtle outer glow ring */
      const grad = ctx.createRadialGradient(cx, cy, r * 0.97, cx, cy, r * 1.05);
      grad.addColorStop(0, "rgba(0,0,0,0.0)");
      grad.addColorStop(1, glowColor);
      ctx.strokeStyle = grad as unknown as string;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.01, 0, Math.PI * 2);
      ctx.stroke();

      /* Graticule */
      const graticule = geoGraticule10();
      ctx.beginPath();
      path(graticule);
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      if (landFeature && landDots.length > 0) {
        /* Halftone dots on land — BATCHED into a single path.
           One beginPath, many moveTo/arc, ONE fill. Massive win vs the
           prior per-dot beginPath+fill cycle. */
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        const r2 = r * r;
        for (let i = 0; i < landDots.length; i++) {
          const p = projection(landDots[i]);
          if (!p) continue; // culled by clipAngle (back hemisphere)
          const dx = p[0] - cx;
          const dy = p[1] - cy;
          if (dx * dx + dy * dy > r2) continue;
          /* moveTo first so each arc starts a new sub-path that doesn't
             connect to the previous dot. */
          ctx.moveTo(p[0] + 1, p[1]);
          ctx.arc(p[0], p[1], 1, 0, Math.PI * 2);
        }
        ctx.fill();

        /* Land outlines on top */
        ctx.beginPath();
        path(landFeature);
        ctx.strokeStyle = landStrokeColor;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }
    };

    let lastDrawAt = 0;
    let lastTs = performance.now();
    const tick = (ts: number) => {
      raf = requestAnimationFrame(tick);
      if (ts - lastDrawAt < frameInterval) return;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;
      lastDrawAt = ts;
      const [lambda, phi, gamma] = projection.rotate();
      projection.rotate([lambda + rotateSpeed * dt, phi, gamma]);
      draw();
    };

    /* Drag to rotate */
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      const [lambda, phi, gamma] = projection.rotate();
      projection.rotate([lambda + dx * 0.35, Math.max(-80, Math.min(80, phi - dy * 0.35)), gamma]);
      draw();
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      try { canvas.releasePointerCapture(e.pointerId); } catch {}
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    /* Wheel to zoom */
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const k = e.deltaY < 0 ? 1.08 : 0.92;
      const s = Math.max(80, Math.min(900, projection.scale() * k));
      projection.scale(s);
      draw();
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });

    /* Boot: fetch world topology, pre-filter dots on land, start loop. */
    fetch(WORLD_URL)
      .then((r) => r.json() as Promise<WorldTopology>)
      .then((world) => {
        // @ts-expect-error topojson objects shape comes from CDN file
        landFeature = topojson.feature(world, world.objects.land) as GeoJSON.Feature;
        /* Filter the dot grid ONCE — keep only dots over land. ~70% reduction. */
        const onLand: Array<[number, number]> = [];
        for (let i = 0; i < dotGrid.length; i++) {
          if (geoContains(landFeature, dotGrid[i])) onLand.push(dotGrid[i]);
        }
        landDots = onLand;
        raf = requestAnimationFrame(tick);
      })
      .catch(() => {
        /* Even without land data, draw the sphere so the section is never empty. */
        draw();
      });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
      canvas.removeEventListener("wheel", onWheel);
    };
  }, [scale, rotateSpeed, dotSpacing, oceanColor, landStrokeColor, dotColor, glowColor, maxFps]);

  return (
    <div ref={wrapRef} className={className} style={{ width: "100%", aspectRatio: "1 / 1" }}>
      <canvas ref={canvasRef} style={{ touchAction: "none", cursor: "grab" }} />
    </div>
  );
}

/** Default export for next/dynamic — lazy loaded from GlobalReach. */
export default RotatingEarth;
