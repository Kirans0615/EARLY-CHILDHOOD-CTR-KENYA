"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { EASE_BLUR } from "@/lib/utils";

/* Globe is heavy (d3-geo + GeoJSON fetch + canvas rendering).
   Defer it until the section enters the viewport. */
const RotatingEarth = dynamic(
  () => import("@/components/ui/wireframe-dotted-globe"),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full aspect-square rounded-2xl border border-orange/25 bg-charcoal-deep/50">
        <div className="label-spaced text-flame animate-pulse text-[0.7rem]">
          Mapping the nations…
        </div>
      </div>
    ),
  }
);

const REGIONS = [
  { key: "ea", name: "East Africa" },
  { key: "wa", name: "West Africa" },
  { key: "sa", name: "Southern Africa" },
  { key: "as", name: "Asia" },
  { key: "na", name: "North America" },
];

export function GlobalReach() {
  const [active, setActive] = React.useState("ea");
  return (
    <section className="relative bg-charcoal text-ivory py-24 md:py-32 overflow-hidden" data-navbar="dark">
      <div aria-hidden className="absolute inset-0 bg-ember-glow opacity-45 pointer-events-none" />
      <div className="container relative z-10 grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-center">
        <div>
          <p className="label-spaced text-flame mb-6">Global Reach</p>
          <h2
            className="font-display text-balance leading-[0.95]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
          >
            Reaching the
            <span className="block text-flame italic font-italic">nations.</span>
          </h2>
          <p className="mt-6 font-italic italic text-ivory/80 text-lg md:text-xl max-w-lg leading-relaxed">
            From Washington, DC to four continents — Africa, Asia, Europe, and Israel.
          </p>

          <ul className="mt-10 max-w-lg space-y-2">
            {REGIONS.map((r) => {
              const isActive = active === r.key;
              return (
                <li key={r.key}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(r.key)}
                    onFocus={() => setActive(r.key)}
                    onClick={() => setActive(r.key)}
                    className="group w-full flex items-center justify-between py-3 border-b border-orange/30 text-left"
                  >
                    <span
                      className={`font-display tracking-ember transition-colors ${
                        isActive ? "text-flame" : "text-ivory/85 group-hover:text-flame-soft"
                      }`}
                      style={{ fontSize: "clamp(1.4rem, 2.6vw, 2rem)" }}
                    >
                      {r.name}
                    </span>
                    <span
                      className={`label-spaced text-[0.65rem] transition-colors ${
                        isActive ? "text-flame" : "text-ivory/40 group-hover:text-flame-soft"
                      }`}
                    >
                      {isActive ? "Active" : "View →"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE_BLUR }}
          className="relative mx-auto w-full max-w-[520px] aspect-square"
        >
          <RotatingEarth
            scale={300}
            rotateSpeed={5}
            oceanColor="#0C0704"
            landStrokeColor="rgba(253,246,236,0.85)"
            dotColor="rgba(245,166,35,0.75)"
            glowColor="rgba(212,80,26,0.55)"
          />
          <p className="absolute -bottom-1 left-1/2 -translate-x-1/2 label-spaced text-ivory/45 text-[0.6rem]">
            Drag · Scroll · Witness
          </p>
        </motion.div>
      </div>
    </section>
  );
}
