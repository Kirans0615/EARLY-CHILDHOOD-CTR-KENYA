"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_BLUR } from "@/lib/utils";

const LEADERS = [
  { name: "Rev. Nelson “Bernie” Dorsey Jr.", role: "Founder · Executive Director" },
  { name: "Rev. Jed Robyn",                  role: "West Africa · Europe · Israel" },
  { name: "Bishop Patrick Owuor",            role: "East Africa" },
  { name: "Pastor Joel Isaac Kakembo",       role: "Assistant · East Africa" },
];

export function LeadershipPreview() {
  return (
    <section className="relative bg-ivory py-24 md:py-32">
      <div className="container text-center">
        <p className="label-spaced text-orange mb-3">Leadership</p>
        <h2
          className="font-display text-charcoal text-balance leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          Servant Leaders
        </h2>
        <p className="mt-4 font-italic italic text-charcoal/70 text-lg max-w-2xl mx-auto">
          A small team — apostolic, pastoral, prophetic — sent and trusted.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-14 max-w-4xl mx-auto">
          {LEADERS.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: EASE_BLUR }}
              className="group"
            >
              <h3
                className="font-display text-charcoal text-balance leading-tight transition-all group-hover:text-flame"
                style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
              >
                {l.name}
              </h3>
              <p className="mt-3 label-spaced text-orange tracking-cathedral text-[0.7rem]">
                {l.role}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            href="/about/"
            className="group inline-flex items-center label-spaced text-[0.78rem] text-crimson hover:text-orange transition-colors"
          >
            Meet the Full Team
            <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
