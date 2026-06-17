import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { KenyaImmersive } from "@/components/KenyaImmersive";
import { ScriptureWatermark } from "@/components/decor/ScriptureWatermark";
import { ASSETS, SCRIPTURE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kenya Center — Eta Prime Wing",
  description: "The Early Childhood Development Center in Kisumu, Kenya.",
};

export default function KenyaPage() {
  return (
    <>
      <KenyaImmersive />

      <section className="relative bg-ivory py-28 overflow-hidden">
        <ScriptureWatermark text="THE LEAST OF THESE" className="text-crimson/5" />
        <div className="container relative z-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="label-spaced text-orange mb-3">The Story</p>
            <h2 className="font-display text-charcoal text-balance leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              More than a building.
            </h2>
            <p className="mt-6 font-italic italic text-charcoal/85 text-lg md:text-xl leading-relaxed max-w-prose">
              The Eta Prime Wing is a daily classroom for the youngest children of Kisumu — many of them
              attending the first organized early-childhood program of their lives. It is also a meeting
              place, a refuge, and a sign of what is possible when DC and Kisumu work together.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="crimson"><Link href="/donate/">Sponsor a child</Link></Button>
              <Button asChild variant="outline" className="text-charcoal border-charcoal/30 hover:bg-charcoal hover:text-ivory">
                <Link href="/student-mission-trips/">Read the student story</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSETS.kenya} alt="Eta Prime Wing — Kisumu, Kenya" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-crimson-deep text-ivory py-20 text-center">
        <blockquote className="font-italic italic text-balance max-w-3xl mx-auto leading-snug" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)" }}>
          &ldquo;{SCRIPTURE.acts18}&rdquo;
        </blockquote>
        <p className="label-spaced text-flame mt-4">— {SCRIPTURE.acts18Ref}</p>
      </section>
    </>
  );
}
