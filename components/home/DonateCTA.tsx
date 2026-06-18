"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CrossMark } from "@/components/decor/CrossMark";
import { ZEFFY_URL, EASE_BLUR } from "@/lib/utils";

export function DonateCTA() {
  return (
    <section
      className="relative isolate text-ivory py-28 md:py-36 overflow-hidden"
      data-navbar="dark"
      style={{
        background:
          "linear-gradient(135deg, #6B1212 0%, #8B1A1A 35%, #1A1008 100%)",
      }}
    >
      {/* Central decorative cross */}
      <CrossMark
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[68vh] w-auto text-ivory opacity-[0.08] pointer-events-none hidden md:block"
        strokeWidth={1.5}
      />
      <div aria-hidden className="absolute inset-0 bg-ember-glow opacity-40 pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl">
        <p className="label-spaced text-flame mb-6">Give</p>
        <motion.h2
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: EASE_BLUR }}
          className="font-display text-balance leading-[0.95] text-ivory"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 5rem)" }}
        >
          Your Gift Transforms
          <span className="block text-flame italic font-italic">Eternity.</span>
        </motion.h2>
        <p className="mt-7 font-italic italic text-ivory/85 text-lg md:text-xl max-w-xl mx-auto">
          Every dollar is sent directly to the field — schools, teachers, medical care, food, and Gospel proclamation.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_BLUR }}
          className="mt-12"
        >
          <a
            href={ZEFFY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-3 h-16 px-12 rounded-full bg-flame-linear text-ivory label-spaced text-sm tracking-cathedral shadow-[0_14px_44px_-10px_rgba(245,166,35,0.55)] hover:-translate-y-0.5 transition-transform animate-flameGlowPulse"
          >
            Give Now
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
          <p className="mt-6 label-spaced text-flame/85 text-[0.66rem]">
            Zeffy charges 0% · Tax-deductible · Every dollar reaches the field
          </p>
        </motion.div>
      </div>
    </section>
  );
}
