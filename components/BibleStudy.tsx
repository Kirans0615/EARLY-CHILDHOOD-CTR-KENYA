"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScriptureWatermark } from "@/components/decor/ScriptureWatermark";
import { SCRIPTURE, EASE_BLUR } from "@/lib/utils";

export function BibleStudy() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  return (
    <section className="relative bg-crimson-deep text-ivory py-28 md:py-36 overflow-hidden">
      <ScriptureWatermark text={SCRIPTURE.acts18} className="text-ivory/[0.04]" />
      <div className="container relative z-10 max-w-3xl text-center">
        <p className="label-spaced text-flame mb-5">Online Fellowship</p>
        <h2 className="font-display text-balance text-flame leading-[0.95]" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
          A global Bible study,
          <span className="block italic font-italic text-ivory/95">on fire each week.</span>
        </h2>
        <p className="mt-7 font-italic italic text-ivory/85 text-lg md:text-xl max-w-xl mx-auto">
          Every week, believers from four continents gather online to read Scripture together.
          Spirit-led, Scripture-grounded, open to all who would join.
        </p>
        <p className="mt-3 label-spaced text-flame">
          <a href="https://touroftruth.com" target="_blank" rel="noreferrer" className="hover:text-ivory transition-colors">
            touroftruth.com
          </a>
        </p>

        {sent ? (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: EASE_BLUR }}
            className="mt-10 font-italic italic text-flame text-lg"
          >
            Thank you. The next study schedule is on its way.
          </motion.p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            aria-label="Bible study subscribe"
          >
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address"
              className="bg-charcoal/40 border-orange/40 text-ivory placeholder:text-ivory/55"
            />
            <Button type="submit" variant="flame">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
