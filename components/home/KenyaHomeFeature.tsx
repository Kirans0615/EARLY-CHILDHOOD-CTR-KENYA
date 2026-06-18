"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ASSETS, EASE_BLUR } from "@/lib/utils";

const MILESTONES = [
  { date: "JULY 2025", body: "Site Prep" },
  { date: "OCT 2025",  body: "Construction" },
  { date: "JAN 2026",  body: "Doors Open" },
];

/** Full-bleed Kenya feature. Image background, dark bottom gradient, text overlay. */
export function KenyaHomeFeature() {
  return (
    <section className="relative isolate text-ivory overflow-hidden" data-navbar="dark" style={{ minHeight: "88vh" }}>
      <div className="absolute inset-0 -z-10" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/pexels-alexasfotos-32461462.jpg"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.75 }}
          loading="lazy"
          decoding="async"
        />
        {/* Base darkening pass + reading-side bottom gradient. */}
        <div className="absolute inset-0 bg-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/75 to-charcoal/97" />
      </div>

      <div className="container relative pt-32 pb-24 flex flex-col" style={{ minHeight: "88vh" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE_BLUR }}
          className="max-w-3xl mt-auto"
        >
          <p className="label-spaced text-flame mb-5">Featured Project · Kisumu, Kenya</p>
          <h2
            className="font-display text-balance leading-[0.94] text-ivory"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)" }}
          >
            The Eta Prime
            <span className="block text-flame italic font-italic pb-2">Wing.</span>
          </h2>
          <p className="mt-5 font-italic italic text-orange-soft text-lg md:text-xl max-w-2xl leading-relaxed">
            Construction complete. Opened January 2026. Built by faith, sweat, and a team of students from Washington, DC.
          </p>

          {/* Flame progress */}
          <div className="mt-9 max-w-md">
            <div className="flex items-baseline justify-between mb-2">
              <span className="label-spaced text-ivory text-[0.65rem]">Phase 2 Funding</span>
              <span className="label-spaced text-flame text-[0.65rem]">68%</span>
            </div>
            <div className="relative h-3 w-full bg-charcoal/70 border border-orange/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "68%" }}
                viewport={{ once: true, margin: "-25%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full bg-flame-linear rounded-full shadow-[0_0_22px_rgba(245,166,35,0.6)]"
              />
            </div>
          </div>

          {/* Milestone pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {MILESTONES.map((m) => (
              <span
                key={m.date}
                className="inline-flex items-center gap-2 px-4 py-2 border border-orange/50 rounded-full bg-charcoal/40 backdrop-blur-sm"
              >
                <span className="label-spaced text-flame text-[0.62rem]">{m.date}</span>
                <span className="text-ivory/55 text-xs" aria-hidden>·</span>
                <span className="label-spaced text-ivory text-[0.66rem]">{m.body}</span>
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-x-10 gap-y-3">
            <Link href="/donate/" className="group inline-flex items-center label-spaced text-[0.78rem] text-flame hover:text-flame-soft">
              Sponsor a child <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
            </Link>
            <Link href="/student-mission-trips/" className="group inline-flex items-center label-spaced text-[0.78rem] text-ivory hover:text-flame">
              The student story <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
