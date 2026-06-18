"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CrossMark } from "@/components/decor/CrossMark";
import { EASE_BLUR } from "@/lib/utils";

interface Leader {
  num: string;
  name: string;
  role: string;
  bio: string;
}

const LEADERS: Leader[] = [
  {
    num: "I",
    name: "Rev. Nelson “Bernie” Dorsey Jr.",
    role: "Founder · Executive Director",
    bio: "Duke · GWU Law · ordained 2012. A teacher of the apostolic, healing, deliverance, and Spirit-led ministry across Washington, DC and the nations.",
  },
  {
    num: "II",
    name: "Rev. Jed Robyn",
    role: "West Africa · Europe · Israel",
    bio: "Director of Pilgrim Way Ministries. Prophetic teacher, leader of pilgrim journeys, and trainer of pastors across the Mediterranean basin.",
  },
  {
    num: "III",
    name: "Bishop Patrick Owuor",
    role: "East Africa",
    bio: "Bishop in Kisumu, Kenya — consecrated 2024. Oversees six churches and the operations of the Eta Prime Wing center.",
  },
  {
    num: "IV",
    name: "Pastor Joel Isaac Kakembo",
    role: "Assistant Director · East Africa",
    bio: "Worship leader and teacher of teachers based in Uganda. Trains pastors and tends to the growing East African network.",
  },
];

export function LeadershipTimeline() {
  return (
    <section className="relative bg-ivory py-28 md:py-40 overflow-hidden" data-navbar="light">
      <div aria-hidden className="absolute top-12 left-0 right-0 h-px bg-crimson/20" />
      <div className="container relative">
        <div className="text-center mb-16 md:mb-24">
          <p className="label-spaced text-orange mb-3">Leadership</p>
          <h2 className="font-display text-[clamp(2.25rem,4vw,3.75rem)] text-charcoal leading-tight">
            The pillars walking with us.
          </h2>
        </div>

        {/* Center vertical line */}
        <div aria-hidden className="absolute left-1/2 top-40 bottom-12 w-px bg-crimson/40 -translate-x-1/2 hidden md:block" />

        <ol className="space-y-20 md:space-y-32 max-w-6xl mx-auto">
          {LEADERS.map((l, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.li
                key={l.num}
                initial={{ opacity: 0, x: isLeft ? -32 : 32, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.7, delay: 0.05, ease: EASE_BLUR }}
                className={`relative md:grid md:grid-cols-2 md:gap-16 items-center ${
                  isLeft ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* Side content */}
                <div className={`md:[direction:ltr] ${isLeft ? "md:text-right md:pr-6" : "md:text-left md:pl-6"}`}>
                  <span className="font-display text-flame text-7xl md:text-8xl lg:text-9xl font-black leading-none block">
                    {l.num}
                  </span>
                  <h3 className="mt-3 font-display text-balance text-charcoal text-3xl md:text-4xl leading-tight">
                    {l.name}
                  </h3>
                  <p className="mt-3 label-spaced text-crimson">{l.role}</p>
                  <p className="mt-5 font-italic italic text-charcoal/85 leading-relaxed text-base md:text-lg max-w-md md:inline-block">
                    {l.bio}
                  </p>
                </div>

                {/* Center cross decoration on the other side */}
                <div className="hidden md:flex md:[direction:ltr] items-center justify-center">
                  <CrossMark className="h-32 w-auto text-crimson/35" strokeWidth={1.5} />
                </div>

                {/* Center node on the line */}
                <div
                  aria-hidden
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-flame-linear ring-4 ring-ivory"
                />
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
