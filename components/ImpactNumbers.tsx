"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatRow {
  value: number;
  suffix?: string;
  text?: string;
  label: string;
}

const STATS: StatRow[] = [
  { value: 30, suffix: "+", label: "Missions to Africa" },
  { value: 6,              label: "Churches in Kenya" },
  { value: 0, text: "1000s", label: "Lives Transformed" },
  { value: 4,              label: "Continents Reached" },
];

function Count({ to, suffix, duration = 1.4, text }: { to: number; suffix?: string; duration?: number; text?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    if (inView && !text) mv.set(to);
  }, [inView, to, mv, text]);
  React.useEffect(() => {
    const u = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => u();
  }, [spring]);
  return (
    <span
      ref={ref}
      className="text-flame font-display font-black tabular-nums leading-none"
      style={{ fontSize: "clamp(3.25rem, 6vw, 5.5rem)" }}
    >
      {text ? text : (
        <>
          {display}
          {suffix ?? ""}
        </>
      )}
    </span>
  );
}

/**
 * Horizontal row of four stats on dark charcoal.
 * Vertical orange dividers between each stat.
 */
export function ImpactNumbers() {
  return (
    <section className="relative bg-charcoal text-ivory py-24 md:py-28">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-orange/35">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="px-4 py-6 lg:px-8 text-center"
            >
              <Count to={s.value} suffix={s.suffix} text={s.text} />
              <p className="mt-4 label-spaced text-ivory/75 text-[0.7rem]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
