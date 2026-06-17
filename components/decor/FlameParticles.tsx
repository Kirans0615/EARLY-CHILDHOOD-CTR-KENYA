"use client";

import * as React from "react";

interface Particle {
  id: number;
  left: number;     // 0–100
  delay: number;    // seconds
  duration: number; // seconds
  size: number;     // px
  hue: string;
}

const HUES = ["#F5A623", "#D4501A", "#8B1A1A", "#FFC267"];

/**
 * Floating ember particles rising from the bottom of the section.
 * Pure CSS animation. Quantity is deterministic but seeded by ID so
 * SSR/CSR markup match.
 */
export function FlameParticles({
  count = 28,
  className = "",
  zClass = "z-0",
}: {
  count?: number;
  className?: string;
  /** Override z-index utility — default z-0; some sections want z-10 etc. */
  zClass?: string;
}) {
  const particles: Particle[] = React.useMemo(() => {
    const out: Particle[] = [];
    for (let i = 0; i < count; i++) {
      out.push({
        id: i,
        left: (i * 37) % 100,                       // pseudo-random across 0..100
        delay: ((i * 13) % 80) / 10,                // 0..7.9s
        duration: 7 + ((i * 7) % 50) / 10,          // 7..11.9s
        size: 3 + ((i * 11) % 8),                   // 3..10px
        hue: HUES[i % HUES.length],
      });
    }
    return out;
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${zClass} ${className}`}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full blur-[1px] animate-emberRise"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.hue,
            boxShadow: `0 0 ${p.size * 2}px ${p.hue}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
