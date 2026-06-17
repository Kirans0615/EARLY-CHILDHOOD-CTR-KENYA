import type { Metadata } from "next";
import Link from "next/link";
import { MissionStatement } from "@/components/MissionStatement";
import { LeadershipTimeline } from "@/components/LeadershipTimeline";
import { FlameParticles } from "@/components/decor/FlameParticles";
import { ScriptureWatermark } from "@/components/decor/ScriptureWatermark";
import { Button } from "@/components/ui/button";
import { SCRIPTURE, ASSETS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "The story, the leaders, and the mission of Transforming Spirit Ministries.",
};

const PILLARS = [
  { num: "I",  title: "Holy Spirit, Always",   body: "Every project, every partnership, every prayer flows from one source — the Spirit that empowers the witness." },
  { num: "II", title: "Local Leadership",     body: "The work belongs to the people of the place. We support, train, and serve — never override." },
  { num: "III",title: "Whole-Person Mission", body: "Gospel proclamation and tangible care — schools, food, housing, healing — held together." },
  { num: "IV", title: "Generational Vision",  body: "We invest in children, in pastors, in teachers — because the next generation is already here." },
];

export default function AboutPage() {
  return (
    <>
      {/* Opener */}
      <section className="relative isolate bg-charcoal text-ivory pt-44 md:pt-52 pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ASSETS.mission1} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/70 to-charcoal" />
        </div>
        <FlameParticles count={24} zClass="z-0" />
        <ScriptureWatermark text="ACTS 1:8" className="text-ivory/[0.04]" />
        <div className="container relative z-10 max-w-4xl">
          <p className="label-spaced text-flame mb-6">About TSM</p>
          <h1 className="font-display leading-[0.9] text-balance" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            Sent from <span className="text-flame italic font-italic">Washington</span>
            <span className="block">to the world.</span>
          </h1>
          <p className="mt-8 font-italic italic text-ivory/85 text-xl md:text-2xl max-w-2xl leading-relaxed">
            Transforming Spirit Ministries is a 501(c)(3) charitable foundation rooted in Washington, DC
            and set ablaze across four continents — to be witnesses of Jesus Christ through the
            Holy Spirit&apos;s power.
          </p>
        </div>
      </section>

      <MissionStatement />

      {/* Pillars */}
      <section className="bg-ivory py-28 md:py-32">
        <div className="container">
          <p className="label-spaced text-orange mb-3">Pillars</p>
          <h2 className="font-display text-charcoal text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            What holds the work together.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 gap-12">
            {PILLARS.map((p) => (
              <article key={p.num} className="relative pl-20">
                <span className="absolute left-0 top-0 font-display font-black text-flame leading-none" style={{ fontSize: "clamp(3.5rem, 5vw, 5rem)" }} aria-hidden>
                  {p.num}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-charcoal leading-tight">{p.title}</h3>
                <p className="mt-3 font-italic italic text-charcoal/80 leading-relaxed text-lg">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LeadershipTimeline />

      {/* Closing CTA */}
      <section className="relative bg-crimson-deep text-ivory py-24 overflow-hidden">
        <FlameParticles count={20} zClass="z-0" />
        <div className="container relative z-10 text-center max-w-3xl">
          <p className="label-spaced text-flame mb-3">A Word</p>
          <blockquote className="font-italic italic text-balance leading-snug" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
            &ldquo;{SCRIPTURE.john317}&rdquo;
          </blockquote>
          <p className="label-spaced text-flame mt-4">— {SCRIPTURE.john317Ref}</p>
          <div className="mt-10">
            <Button asChild variant="flame" size="lg">
              <Link href="/donate/">Stand with the mission</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
