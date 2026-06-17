"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, X } from "lucide-react";
import { EASE } from "@/lib/utils";

export function StickyDonateBanner() {
  const [visible, setVisible] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("tsm-donate-dismissed") === "1") setDismissed(true);
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-40"
        >
          <div className="rounded-full bg-flame-linear text-ivory shadow-2xl px-5 py-3 flex items-center gap-4 animate-flameGlowPulse">
            <Flame className="h-5 w-5 shrink-0" aria-hidden />
            <div className="flex-1 min-w-0 leading-tight">
              <p className="font-display tracking-ember text-sm">Help us transform lives.</p>
              <p className="text-xs text-ivory/80">Every gift becomes Gospel work.</p>
            </div>
            <Link
              href="/donate/"
              className="inline-flex items-center label-spaced px-4 py-1.5 rounded-full bg-charcoal text-flame hover:bg-charcoal-deep transition-colors"
            >
              Donate
            </Link>
            <button
              type="button"
              onClick={() => {
                sessionStorage.setItem("tsm-donate-dismissed", "1");
                setDismissed(true);
              }}
              aria-label="Dismiss"
              className="text-ivory/70 hover:text-ivory p-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
