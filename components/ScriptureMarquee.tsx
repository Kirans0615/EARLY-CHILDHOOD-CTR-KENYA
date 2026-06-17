"use client";

import { FlameMark } from "@/components/decor/FlameMark";
import { SCRIPTURE } from "@/lib/utils";

/** Full-width scrolling Acts 1:8 ticker — crimson bg, white text, flame separators. */
export function ScriptureMarquee() {
  const piece = (k: number) => (
    <span key={k} className="inline-flex items-center gap-6 shrink-0">
      <span className="label-spaced text-ivory text-[0.78rem] tracking-cathedral">
        {SCRIPTURE.acts18Ref} — to the ends of the earth
      </span>
      <FlameMark className="h-3.5 w-2.5 shrink-0" fill="#FFC267" />
    </span>
  );

  return (
    <section className="bg-crimson overflow-hidden border-y border-orange/35">
      <div className="flex whitespace-nowrap py-3.5 animate-marquee">
        <div className="flex items-center gap-10 pr-10">
          {Array.from({ length: 8 }).map((_, i) => piece(i))}
        </div>
        <div className="flex items-center gap-10 pr-10" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => piece(i + 100))}
        </div>
      </div>
    </section>
  );
}
