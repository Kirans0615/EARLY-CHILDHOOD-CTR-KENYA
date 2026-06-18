"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ASSETS, SCRIPTURE, EASE_BLUR } from "@/lib/utils";

const TITLE_WORDS = ["TRANSFORMING", "SPIRIT", "MINISTRIES"];
const EMBER_COUNT = 40;

/**
 * Full-bleed hero. Group photo as background.
 * Horizontal gradient overlay: dark charcoal on the left, fading clear over the photo on the right.
 * Tiny embers drift up only on the left dark half.
 * Logo image as a huge low-opacity decorative watermark behind text.
 */
export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-charcoal text-ivory"
      data-navbar="dark"
      style={{ minHeight: "100dvh" }}
    >
      {/* Preload the hero AVIF — hoisted into <head> by Next 14. */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preload" as="image" href={ASSETS.hero} />

      {/* Background photo */}
      <div className="absolute inset-0 -z-30" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ASSETS.hero}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Horizontal gradient overlay — dark on left, clear on right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,16,8,0.95) 0%, rgba(26,16,8,0.92) 28%, rgba(26,16,8,0.7) 48%, rgba(26,16,8,0.4) 64%, rgba(26,16,8,0.2) 100%)",
        }}
      />

      {/* Soft vignette around photo edges only */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 75% 50%, transparent 35%, rgba(26,16,8,0.4) 100%)",
        }}
      />

      {/* Huge logo watermark behind text — left half only */}
      <div
        aria-hidden
        className="absolute -z-10 pointer-events-none hidden md:flex items-center"
        style={{
          left: "-6%",
          top: "8%",
          bottom: "8%",
          width: "60%",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ASSETS.logo}
          alt=""
          width={400}
          height={400}
          className="h-full w-auto object-contain"
          loading="eager"
          decoding="async"
          style={{ opacity: 0.07, filter: "saturate(1.4)" }}
        />
      </div>

      {/* Embers — confined to left dark half */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-0 pointer-events-none overflow-hidden"
        style={{ width: "55%" }}
      >
        {Array.from({ length: EMBER_COUNT }).map((_, i) => {
          const left = (i * 13) % 100;
          const delay = ((i * 7) % 100) / 10;
          const duration = 11 + ((i * 11) % 70) / 10;
          const size = 1.5 + ((i * 5) % 4) / 2;
          const colors = ["#F5A623", "#D4501A", "#8B1A1A", "#FFC267"];
          const color = colors[i % colors.length];
          return (
            <span
              key={i}
              className="absolute bottom-0 rounded-full animate-emberRise"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                boxShadow: `0 0 ${size * 2.5}px ${color}`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                opacity: 0,
              }}
            />
          );
        })}
      </div>

      {/* Content — left aligned, vertically centered */}
      <div className="container relative z-10 grid lg:grid-cols-[1.35fr_1fr] gap-8 min-h-[100dvh] pt-32 pb-28">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE_BLUR }}
            className="text-orange-soft mb-8 font-sans uppercase font-semibold text-[0.72rem]"
            style={{ letterSpacing: "0.25em" }}
          >
            Washington, DC&nbsp;&nbsp;·&nbsp;&nbsp;501(c)(3)&nbsp;&nbsp;·&nbsp;&nbsp;Founded in Faith
          </motion.p>

          <h1 className="font-display font-bold leading-[0.88] tracking-[0.02em] mb-7 text-ivory">
            <span className="sr-only">Transforming Spirit Ministries</span>
            {TITLE_WORDS.map((word, wi) => (
              <span
                key={word}
                className="block whitespace-nowrap text-[clamp(2.6rem,6.4vw,5.75rem)]"
                aria-hidden="true"
              >
                {word.split("").map((ch, ci) => (
                  <motion.span
                    key={`${wi}-${ci}`}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.25 + wi * 0.18 + ci * 0.028,
                      ease: EASE_BLUR,
                    }}
                    className="inline-block"
                  >
                    {ch}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Orange rule */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2, ease: EASE_BLUR }}
            className="h-[2px] bg-flame-linear mb-6"
            aria-hidden
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.35, ease: EASE_BLUR }}
            className="font-italic italic text-ivory/95 text-2xl md:text-3xl mb-10"
          >
            On Fire for the World
          </motion.p>

          {/* CTA links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.55, ease: EASE_BLUR }}
            className="flex flex-col sm:flex-row gap-x-10 gap-y-4 mb-4"
          >
            <Link
              href="/about/"
              className="group inline-flex items-center label-spaced text-[0.8rem] tracking-cathedral text-orange-soft hover:text-flame transition-colors"
            >
              Explore Our Mission
              <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
            </Link>
            <Link
              href="/donate/"
              className="group inline-flex items-center label-spaced text-[0.8rem] tracking-cathedral text-flame hover:text-flame-soft transition-colors"
            >
              Give Today
              <span className="ml-3 transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right column spacer — keeps photo readable on lg+ */}
        <div className="hidden lg:block" aria-hidden />
      </div>

      {/* Bottom centered scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8, ease: EASE_BLUR }}
        className="absolute inset-x-0 bottom-5 z-10 pointer-events-none flex flex-col items-center gap-2"
      >
        <p className="label-spaced text-ivory/65 text-[0.65rem] hidden md:block">
          Scroll · Be set on fire · {SCRIPTURE.acts18Ref}
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
          className="text-flame/85"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
