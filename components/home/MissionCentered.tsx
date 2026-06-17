"use client";

import { motion } from "framer-motion";
import { SCRIPTURE, EASE_BLUR } from "@/lib/utils";

export function MissionCentered() {
  return (
    <section className="relative bg-ivory py-24 md:py-32">
      <div aria-hidden className="absolute left-0 right-0 top-12 h-px bg-crimson/20" />
      <div aria-hidden className="absolute left-0 right-0 bottom-12 h-px bg-crimson/20" />

      <div className="container max-w-5xl text-center">
        <p className="label-spaced text-orange mb-6">Mission</p>

        {/* Decorative opening quote mark */}
        <motion.span
          aria-hidden
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.18, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: EASE_BLUR }}
          className="font-serif text-crimson block mx-auto leading-none mb-2"
          style={{ fontSize: "clamp(7rem, 14vw, 13rem)" }}
        >
          “
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: EASE_BLUR }}
          className="font-italic italic text-charcoal text-balance leading-[1.12] -mt-12 max-w-4xl mx-auto"
          style={{ fontSize: "clamp(1.85rem, 4vw, 3.25rem)" }}
        >
          {SCRIPTURE.john317}
        </motion.blockquote>
        <p className="mt-6 label-spaced text-crimson tracking-cathedral">— {SCRIPTURE.john317Ref}</p>

        {/* Two-column description */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left">
          <p className="font-sans text-charcoal/85 leading-relaxed text-base md:text-[1.05rem]">
            <strong className="font-display font-semibold text-charcoal">Transforming Spirit Ministries</strong>{" "}
            is a 501(c)(3) Christian charitable foundation rooted in Washington, DC.
            We exist to be witnesses of Jesus Christ through the Holy Spirit&apos;s power —
            in our city, and to the ends of the earth.
          </p>
          <p className="font-sans text-charcoal/85 leading-relaxed text-base md:text-[1.05rem]">
            Our partners include six Kenyan churches, a Ugandan teacher network, West African medical
            outreach, Asian discipleship efforts, and pilgrim journeys across Europe and Israel. Every
            work is carried by trusted local leaders.
          </p>
        </div>
      </div>
    </section>
  );
}
