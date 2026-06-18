"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe2, HeartHandshake, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { StudentMagazine } from "@/components/StudentMagazine";
import { ScriptureWatermark } from "@/components/decor/ScriptureWatermark";
import { EASE_BLUR, ASSETS } from "@/lib/utils";

const BENEFITS = [
  { icon: GraduationCap, text: "Graduation service-credit eligible" },
  { icon: Globe2,        text: "International experience under trained leadership" },
  { icon: HeartHandshake, text: "Spiritual formation and faith building" },
];

export default function StudentMissionsPage() {
  const [sent, setSent] = React.useState(false);
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal text-ivory pt-44 md:pt-52 pb-24 overflow-hidden" data-navbar="dark">
        <div className="absolute inset-0 -z-10" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src={ASSETS.mission1} alt="" className="h-full w-full object-cover opacity-30" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/65 to-charcoal" />
        </div>
        <ScriptureWatermark text="GO" className="text-ivory/[0.04]" />
        <div className="container relative z-10 max-w-4xl">
          <p className="label-spaced text-flame mb-6">For Students</p>
          <h1 className="font-display leading-[0.9] text-balance" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
            Sent to <span className="text-flame italic font-italic">build, serve,</span>
            <span className="block">and be set on fire.</span>
          </h1>
          <p className="mt-8 font-italic italic text-ivory/85 text-xl md:text-2xl max-w-2xl leading-relaxed">
            From Washington, DC to Kisumu, Kenya — TSM hosts student teams who serve alongside
            local partners on real construction, real ministry, real relationship-building.
          </p>
        </div>
      </section>

      <StudentMagazine />

      {/* Benefits */}
      <section className="bg-charcoal text-ivory py-24" data-navbar="dark">
        <div className="container max-w-5xl">
          <h2 className="font-display text-balance leading-tight max-w-3xl" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            What students take home from a TSM trip.
          </h2>
          <div className="grid sm:grid-cols-3 gap-5 mt-12">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_BLUR }}
                  className="p-7 border border-orange/30 bg-charcoal-deep clip-angle-bottom"
                >
                  <Icon className="h-7 w-7 text-flame mb-4" aria-hidden />
                  <p className="font-italic italic text-ivory/90 leading-relaxed text-lg">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interest form */}
      <section className="bg-ivory py-28" data-navbar="light">
        <div className="container max-w-2xl">
          <p className="label-spaced text-orange mb-3">Get Involved</p>
          <h2 className="font-display text-charcoal text-balance leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
            Interested in a future team?
          </h2>
          <p className="mt-3 font-italic italic text-charcoal/75 text-lg">
            Tell us a little about you and we&apos;ll be in touch.
          </p>

          {sent ? (
            <div className="mt-10 border border-flame bg-flame/10 p-6 flex items-start gap-3">
              <span className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-full bg-flame-linear text-ivory flex items-center justify-center">
                <Check className="h-3.5 w-3.5" aria-hidden />
              </span>
              <div>
                <p className="font-display text-lg text-charcoal">Thank you.</p>
                <p className="font-italic italic text-charcoal/85">We&apos;ll be in touch soon about the next trip.</p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-10 space-y-5"
              aria-label="Student missions interest form"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="sm-name">Name</Label><Input id="sm-name" name="name" required /></div>
                <div><Label htmlFor="sm-email">Email</Label><Input id="sm-email" name="email" type="email" required /></div>
              </div>
              <div><Label htmlFor="sm-school">School</Label><Input id="sm-school" name="school" placeholder="High school or college" /></div>
              <div><Label htmlFor="sm-message">Message</Label><Textarea id="sm-message" name="message" rows={4} placeholder="A few sentences about why you'd like to join." /></div>
              <Button type="submit" variant="crimson" size="lg" className="w-full sm:w-auto">Send Interest</Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
