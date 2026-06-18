import type { Metadata } from "next";
import Link from "next/link";
import { ASSETS, SCRIPTURE } from "@/lib/utils";
import { ScriptureWatermark } from "@/components/decor/ScriptureWatermark";
import { FlameMark } from "@/components/decor/FlameMark";

export const metadata: Metadata = {
  title: "Projects",
  description: "Active and completed mission projects across four continents.",
};

interface Project {
  region: string;
  title: string;
  body: string;
  image: string;
}

const PROJECTS: Project[] = [
  { region: "East Africa",     title: "Eta Prime Wing — Kisumu, Kenya",       body: "Construction complete. Doors opened January 2026. Ongoing teacher and operations support.", image: ASSETS.kenya },
  { region: "West Africa",     title: "Liberia medical clinic & Gospel work", body: "Community-based medical care paired with Gospel preaching in cities recovering from instability.", image: ASSETS.mission1 },
  { region: "Southern Africa", title: "A chicken for a family",               body: "Tangible food relief for hungry families — alongside pastor housing and rural church planting.",      image: ASSETS.mission2 },
  { region: "Asia",            title: "India discipleship & pastor training", body: "Leadership formation and direct pastor support across India's under-resourced regions.",                image: ASSETS.hero },
  { region: "Europe & Israel", title: "Pilgrim Way Ministries journeys",      body: "Mission tours and prophetic teaching travels connecting believers to the lands of Scripture.",         image: ASSETS.mission1 },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative bg-charcoal text-ivory pt-44 md:pt-52 pb-20 overflow-hidden" data-navbar="dark">
        <ScriptureWatermark text="THE NATIONS" className="text-ivory/[0.04]" />
        <div className="container relative z-10">
          <p className="label-spaced text-flame mb-6">Projects</p>
          <h1 className="font-display leading-[0.9] text-balance" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            The work, <span className="text-flame italic font-italic">right now.</span>
          </h1>
          <p className="mt-8 font-italic italic text-ivory/85 text-xl max-w-2xl">
            Every project is carried by trusted local leaders, prayed over from DC, and held together by the same Spirit.
          </p>
        </div>
      </section>

      {/* Editorial alternating rows */}
      <section className="bg-ivory" data-navbar="light">
        {PROJECTS.map((p, i) => {
          const reverse = i % 2 === 1;
          return (
            <article key={i} className={`relative ${i > 0 ? "border-t border-crimson/10" : ""}`}>
              <div className={`container grid lg:grid-cols-2 gap-0 items-stretch ${reverse ? "lg:[direction:rtl]" : ""}`}>
                <div className="relative lg:[direction:ltr]" style={{ minHeight: "55vh" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                   <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="relative lg:[direction:ltr] flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
                  <p className="label-spaced text-flame mb-3 flex items-center gap-2">
                    <FlameMark className="h-3 w-2" /> {p.region}
                  </p>
                  <h2 className="font-display text-charcoal text-balance leading-[1.05]" style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}>
                    {p.title}
                  </h2>
                  <p className="mt-6 font-italic italic text-charcoal/85 text-lg leading-relaxed max-w-prose">
                    {p.body}
                  </p>
                  <Link
                    href="/donate/"
                    className="mt-7 inline-flex items-center label-spaced text-crimson hover:text-orange transition-colors"
                  >
                    Support this work <span className="ml-3">→</span>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="bg-charcoal text-ivory py-24 text-center" data-navbar="dark">
        <p className="font-italic italic text-ivory/85 text-xl max-w-2xl mx-auto">
          &ldquo;{SCRIPTURE.acts18}&rdquo;
        </p>
        <p className="label-spaced text-flame mt-4">— {SCRIPTURE.acts18Ref}</p>
      </section>
    </>
  );
}
