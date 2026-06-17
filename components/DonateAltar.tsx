"use client";

import { motion } from "framer-motion";
import { CrossMark } from "@/components/decor/CrossMark";
import { FlameParticles } from "@/components/decor/FlameParticles";
import { Button } from "@/components/ui/button";
import { ZEFFY_URL, EASE_BLUR } from "@/lib/utils";

interface Tier {
  label: string;
  amount: string;
  period: string;
  body: string;
}

const TIERS: Tier[] = [
  { label: "Lit Lamp",    amount: "$10",  period: "/month", body: "A steady, ongoing flame — pooled with other partners and sent where needed most." },
  { label: "Sponsored Child", amount: "$20", period: "/month", body: "Cover a child's early-childhood education at the Eta Prime Wing in Kisumu, Kenya." },
  { label: "Teacher Pillar", amount: "$50", period: "/month", body: "Stand beside a Ugandan teacher — training, materials, monthly support." },
  { label: "Living Sacrifice", amount: "Any", period: "amount",  body: "A one-time gift toward whichever project the Spirit is leading." },
];

/** Altar-rail donate section — stained-glass-style tier slots. */
export function DonateAltar() {
  return (
    <section className="relative bg-charcoal text-ivory py-28 md:py-36 overflow-hidden">
      <FlameParticles count={22} zClass="z-0" />
      <div aria-hidden className="absolute inset-0 bg-ember-glow opacity-50 z-0" />
      {/* Decorative central cross */}
      <CrossMark
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[70vh] w-auto text-crimson opacity-30 pointer-events-none hidden md:block"
        strokeWidth={2}
      />

      <div className="container relative z-10 text-center">
        <p className="label-spaced text-flame mb-6">Give</p>
        <h2
          className="font-display text-balance leading-[0.92] text-flame-vertical"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          Your gift transforms eternity.
        </h2>
        <p className="mt-6 font-italic italic text-orange-soft text-xl max-w-2xl mx-auto">
          Every dollar is sent directly to the field — schools, teachers, medical care, food, and Gospel proclamation.
        </p>

        {/* Altar rail */}
        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIERS.map((t, i) => (
            <motion.li
              key={t.label}
              initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_BLUR }}
              className="glass-slot relative h-[300px] flex flex-col p-7 text-left clip-angle-bottom"
            >
              <span className="label-spaced text-flame mb-3">{t.label}</span>
              <p className="font-display text-flame text-4xl leading-none mb-2">
                {t.amount}
                <span className="text-base text-ivory/60 ml-1 font-sans">{t.period}</span>
              </p>
              <p className="font-italic italic text-ivory/85 leading-relaxed text-sm mt-3 flex-1">
                {t.body}
              </p>
              <a
                href={ZEFFY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center label-spaced text-flame hover:text-flame-soft transition-colors"
              >
                Give Now <span className="ml-2">→</span>
              </a>
            </motion.li>
          ))}
        </ol>

        {/* Central give button */}
        <div className="mt-16 inline-block">
          <Button asChild variant="flame" size="xl" className="animate-flameGlowPulse">
            <a href={ZEFFY_URL} target="_blank" rel="noreferrer">
              Give through Zeffy
            </a>
          </Button>
          <p className="mt-5 label-spaced text-flame/85">
            Zeffy charges 0% — every dollar reaches the field.
          </p>
        </div>
      </div>
    </section>
  );
}
