"use client";

import { motion } from "framer-motion";
import { ASSETS, EASE_BLUR, cn } from "@/lib/utils";

interface Block {
  year: string;
  title: string;
  body: string;
  image: string;
  reverse?: boolean;
  dark?: boolean;
  pullQuote?: string;
}

const BLOCKS: Block[] = [
  {
    year: "2025",
    title: "Nine students — Kisumu bound.",
    body: "Three college, six high school. They flew from Washington, DC with one set of clothes and the will to do whatever was asked. They returned with calloused hands and stories the city has been telling for months.",
    image: ASSETS.mission1,
  },
  {
    year: "2025",
    title: "Post holes. Cement. Barbed wire.",
    body: "On the construction site, the work was the work — dug, poured, and built by hand. A fence rose around a future school. A community gathered to watch what the next generation could do when sent.",
    image: ASSETS.mission2,
    reverse: true,
    dark: true,
    pullQuote: "We came to build a fence. We left having been built ourselves.",
  },
  {
    year: "2026",
    title: "The doors open. The classrooms fill.",
    body: "In January, the Eta Prime Wing opened. Children walked into their classrooms for the first time. The students from DC remembered the holes they dug and saw what the holes were always for.",
    image: ASSETS.kenya,
  },
];

export function StudentMagazine() {
  return (
    <section className="bg-ivory">
      {BLOCKS.map((b, i) => (
        <div key={i}>
          {b.pullQuote && (
            <div className={cn("py-14 md:py-20 px-6 text-center", b.dark ? "bg-charcoal text-ivory" : "bg-ivory text-charcoal")}>
              <blockquote
                className="font-italic italic text-balance max-w-5xl mx-auto"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05 }}
              >
                &ldquo;{b.pullQuote}&rdquo;
              </blockquote>
            </div>
          )}

          <section className={cn("relative", b.dark ? "bg-charcoal text-ivory" : "bg-ivory text-charcoal") }>
            <div className={cn("container grid gap-0 lg:grid-cols-2 items-stretch", b.reverse && "lg:[direction:rtl]") }>
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7 }}
                className={cn("relative lg:[direction:ltr]", b.dark ? "" : "")}
                style={{ minHeight: "60vh" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src={b.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
              </motion.div>

              {/* Text side */}
              <motion.div
                initial={{ opacity: 0, x: b.reverse ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, ease: EASE_BLUR }}
                className={cn("relative lg:[direction:ltr] flex flex-col justify-center px-8 md:px-16 py-16 md:py-24")}
              >
                <span
                  className="font-display text-flame leading-[0.8] mb-4 font-black"
                  style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "0.03em" }}
                  aria-hidden
                >
                  {b.year}
                </span>
                <h3 className="font-display text-balance leading-[1.05]" style={{ fontSize: "clamp(1.85rem, 3.4vw, 3rem)" }}>
                  {b.title}
                </h3>
                <p className={cn("mt-6 font-italic italic leading-relaxed text-lg md:text-xl max-w-prose", b.dark ? "text-ivory/85" : "text-charcoal/85") }>
                  {b.body}
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
}
