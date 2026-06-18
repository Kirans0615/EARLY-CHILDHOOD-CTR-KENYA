"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ASSETS, EASE_BLUR } from "@/lib/utils";
import { FlameMark } from "@/components/decor/FlameMark";

interface Milestone {
  when: string;
  title: string;
}

const STEPS: Milestone[] = [
  { when: "July 2025", title: "Students from DC prepare the site" },
  { when: "Oct 2025",  title: "Construction begins" },
  { when: "Jan 2026",  title: "The Eta Prime Wing opens" },
];

/** Full-bleed immersive Kenya feature — overlay text on the image. */
export function KenyaImmersive() {
  return (
    <section className="relative isolate text-ivory" data-navbar="dark" style={{ minHeight: "92vh" }}>
      <div className="absolute inset-0 -z-10" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/pexels-lagosfoodbank-9823013.jpg" alt="" className="h-full w-full object-cover object-center" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/85 to-charcoal/98" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-ember-glow opacity-15" />
      </div>

      <div className="container relative pt-44 pb-24" style={{ minHeight: "92vh" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE_BLUR }}
          className="max-w-3xl mt-auto"
        >
          <p className="label-spaced text-flame mb-6">Featured Project · Kisumu, Kenya</p>
          <h2 className="font-display text-balance leading-[0.92]" style={{ fontSize: "clamp(2.5rem, 6.5vw, 6rem)" }}>
            The Eta Prime <span className="text-flame italic font-italic pb-4 inline-block">Wing.</span>
          </h2>
          <p className="mt-6 text-orange-soft font-italic italic text-xl md:text-2xl max-w-2xl">
            Construction complete. Opened January 2026. Built by faith, sweat, and a team of students from Washington, DC.
          </p>

          {/* Flame thermometer */}
          <div className="mt-10 max-w-md">
            <div className="flex items-baseline justify-between mb-2">
              <span className="label-spaced text-ivory">Phase 2 Funding</span>
              <span className="label-spaced text-flame">68%</span>
            </div>
            <div className="relative h-3 w-full bg-charcoal/70 border border-orange/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "68%" }}
                viewport={{ once: true, margin: "-25%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="h-full bg-flame-linear rounded-full shadow-[0_0_24px_rgba(245,166,35,0.6)]"
              />
            </div>
          </div>

          {/* Horizontal milestones */}
          <ol className="mt-12 grid grid-cols-3 gap-3 md:gap-8 max-w-2xl">
            {STEPS.map((s, i) => (
              <li key={s.when} className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <FlameMark className="h-4 w-3 shrink-0" />
                  <span className="label-spaced text-flame">{s.when}</span>
                </div>
                <p className="font-display text-balance text-ivory text-base md:text-lg leading-tight">{s.title}</p>
                {i < STEPS.length - 1 && (
                  <span aria-hidden className="hidden md:block absolute top-3 left-full h-px w-full bg-orange/35" />
                )}
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-col sm:flex-row gap-x-12 gap-y-4 label-spaced">
            <Link href="/donate/" className="group inline-flex items-center text-flame hover:text-flame-soft">
              Sponsor a child <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
            </Link>
            <Link href="/student-mission-trips/" className="group inline-flex items-center text-ivory hover:text-flame">
              Read the student story <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
