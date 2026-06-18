"use client";

import { DonateAltar } from "@/components/DonateAltar";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ASSETS, EASE_BLUR } from "@/lib/utils";

const WAYS = [
  "A chicken for a family in Malawi or Mozambique",
  "A medical clinic visit in Liberia",
  "Housing for a pastor and their family",
  "A church plant in a remote community",
  "Gospel campaigns that reach thousands at once",
];

export default function DonatePage() {
  return (
    <>
      {/* Hero with donate banner image */}
      <section className="relative bg-charcoal text-ivory pt-44 md:pt-52 pb-20 overflow-hidden" data-navbar="dark">
        <div className="absolute inset-0 -z-10" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src={ASSETS.donate} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/35 via-charcoal/70 to-charcoal" />
        </div>
        <div className="container relative z-10 max-w-4xl">
          <p className="label-spaced text-flame mb-6">Give</p>
          <h1 className="font-display leading-[0.9] text-balance text-flame" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            Transform a life
            <span className="block italic font-italic pb-2">today.</span>
          </h1>
        </div>
      </section>

      <DonateAltar />

      {/* Ways */}
      <section className="bg-ivory py-28" data-navbar="light">
        <div className="container max-w-3xl">
          <p className="label-spaced text-orange mb-3">Practical Impact</p>
          <h2 className="font-display text-charcoal text-balance leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            What your gift becomes, in the field.
          </h2>
          <ul className="mt-10 space-y-4">
            {WAYS.map((w, i) => (
              <motion.li
                key={w}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE_BLUR }}
                className="flex items-start gap-4 border-b border-crimson/15 pb-4"
              >
                <span className="flex-shrink-0 mt-1 h-7 w-7 rounded-full bg-flame-linear flex items-center justify-center text-ivory">
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <span className="font-italic italic text-charcoal/90 text-xl leading-relaxed">{w}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
