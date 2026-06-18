"use client";

import { motion } from "framer-motion";
import { CrossMark } from "@/components/decor/CrossMark";
import { SCRIPTURE, EASE_BLUR } from "@/lib/utils";

/**
 * Asymmetric devotional section.
 * Left ~40%: oversized outline cross. Right: 1 John 3:17 as the visual centerpiece
 * with the organization description in a small overlaid block at the bottom.
 */
export function MissionStatement() {
  return (
    <section className="relative bg-ivory py-32 md:py-44 overflow-hidden">
      {/* Thin horizontal rules */}
      <div aria-hidden className="absolute left-0 right-0 top-12 h-px bg-crimson/15" />
      <div aria-hidden className="absolute left-0 right-0 bottom-12 h-px bg-crimson/15" />

      <div className="container grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-center">
        {/* Left — outline cross */}
        <div className="relative flex justify-center lg:justify-start">
          <CrossMark className="h-[60vh] w-auto text-crimson/45 mt-10" strokeWidth={1.5} />
          <span aria-hidden className="absolute -top-2 left-1/2 -translate-x-1/2 label-spaced text-orange/70 whitespace-nowrap">
            One Spirit · One Mission
          </span>
        </div>

        {/* Right — verse + org block */}
        <div className="relative">
          <p className="label-spaced text-orange mb-8">Scripture as Foundation</p>
          <motion.blockquote
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.9, ease: EASE_BLUR }}
            className="font-italic italic text-charcoal leading-[1.1] text-balance"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
          >
            &ldquo;{SCRIPTURE.john317}&rdquo;
          </motion.blockquote>
          <p className="mt-8 label-spaced text-crimson tracking-cathedral">— {SCRIPTURE.john317Ref}</p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE_BLUR }}
            className="mt-12 max-w-md p-6 border border-crimson/15 bg-ivory/70"
          >
            <p className="label-spaced text-orange mb-2">About TSM</p>
            <p className="font-italic italic text-charcoal leading-relaxed text-lg">
              A 501(c)(3) Christian charitable foundation rooted in Washington, DC —
              set on fire for the witness of Christ across Africa, Asia, Europe, and
              Israel.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
