"use client";

import { usePathname } from "next/navigation";
import { SCRIPTURE } from "@/lib/utils";

/**
 * Small floating devotional candle card.
 * Only renders on the home page to avoid clutter on inner routes.
 */
export function CandleWidget() {
  const path = usePathname();
  if (path !== "/") return null;
  return (
    <div
      aria-label="Daily Scripture"
      className="fixed bottom-10 left-8 z-30 hidden lg:flex items-start gap-3 max-w-[260px] p-5 rounded-md bg-charcoal/95 backdrop-blur text-ivory border border-orange/45 shadow-[0_14px_42px_-12px_rgba(212,80,26,0.5)]"
    >
      {/* Candle */}
      <div className="flex flex-col items-center pt-1">
        {/* Flame */}
        <span className="block h-4 w-2.5 origin-bottom rounded-t-full bg-flame-vertical animate-candleFlicker shadow-[0_0_12px_#F5A623]" aria-hidden />
        {/* Wick */}
        <span className="block h-1 w-px bg-charcoal-deep" aria-hidden />
        {/* Candle body */}
        <span className="block h-8 w-2 bg-ivory rounded-sm" aria-hidden />
      </div>
      <div className="leading-snug">
        <p className="label-spaced text-flame mb-1">Daily Scripture</p>
        <p className="font-italic italic text-ivory/90 text-sm leading-snug">
          &ldquo;{SCRIPTURE.acts18}&rdquo;
        </p>
        <p className="label-spaced text-orange mt-1">— {SCRIPTURE.acts18Ref}</p>
      </div>
    </div>
  );
}
