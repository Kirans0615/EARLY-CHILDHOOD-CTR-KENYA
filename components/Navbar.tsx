"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ASSETS, NAV_LINKS, EASE, cn } from "@/lib/utils";

type NavTheme = "dark" | "light";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [theme, setTheme] = React.useState<NavTheme>("dark");

  // Detect scroll position AND which section is behind the navbar
  React.useEffect(() => {
    const NAV_H = 80;

    const update = () => {
      setScrolled(window.scrollY > 16);

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-navbar]")
      );
      let current: NavTheme = "dark";
      for (const sec of sections) {
        const { top, bottom } = sec.getBoundingClientRect();
        if (top <= NAV_H && bottom > 0) {
          current = (sec.dataset.navbar as NavTheme) ?? "dark";
        }
      }
      setTheme(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const isLight = theme === "light";

  // Header background
  const headerBg = isLight
    ? "bg-ivory/95 backdrop-blur-md border-b border-charcoal/12 shadow-sm"
    : scrolled
    ? "bg-charcoal/92 backdrop-blur-md border-b border-orange/25 shadow-[0_8px_24px_-12px_rgba(26,16,8,0.6)]"
    : "bg-charcoal/55 backdrop-blur-sm";

  // Text colours
  const logoText = isLight ? "text-charcoal" : "text-ivory";
  const linkClass = isLight
    ? "nav-underline label-spaced text-[0.7rem] text-charcoal/80 hover:text-flame transition-colors px-3 py-2"
    : "nav-underline label-spaced text-[0.7rem] text-ivory/85 hover:text-flame transition-colors px-3 py-2";
  const hamburgerClass = isLight ? "lg:hidden p-2 -mr-2 text-charcoal" : "lg:hidden p-2 -mr-2 text-ivory";

  return (
    <>
      {/* ── Navbar bar — always on top (z-60) ── */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] transition-all duration-300",
          headerBg
        )}
      >
        <div className="container flex h-16 lg:h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 transition-colors duration-300" aria-label="TSM home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.logo}
              alt="Transforming Spirit Ministries"
              className="h-10 w-10 object-contain transition-all duration-300"
            />
            <span className={cn("hidden sm:block font-display text-sm tracking-cathedral uppercase transition-colors duration-300", logoText)}>
              Transforming Spirit
            </span>
          </Link>

          {/* Desktop nav + donate */}
          <div className="hidden lg:flex items-center gap-1">
            <nav className="flex items-center gap-1 mr-2" aria-label="Primary">
              {NAV_LINKS.map((l) => {
                const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    data-active={active}
                    className={linkClass}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/donate/"
              className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-flame-linear text-ivory label-spaced text-[0.7rem] tracking-ember shadow-[0_6px_22px_-6px_rgba(212,80,26,0.65)] hover:-translate-y-0.5 transition-transform"
            >
              Donate
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(hamburgerClass, "transition-colors duration-300")}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* ── Mobile overlay + menu panel ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fog overlay — click anywhere here to close */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Menu panel — solid, above overlay */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#1A1008] shadow-[0_0_40px_rgba(212,80,26,0.3)]"
            >
              <div className="h-16" />

              <div className="container pb-10 pt-4 flex flex-col">
                <nav className="flex flex-col" aria-label="Mobile primary">
                  {NAV_LINKS.map((l, i) => (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.06, duration: 0.3, ease: EASE }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block text-ivory text-xl font-display tracking-ember py-4 border-b border-white/10 hover:text-flame transition-colors"
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + NAV_LINKS.length * 0.06 + 0.05, duration: 0.3 }}
                  className="mt-8 text-center"
                >
                  <Link
                    href="/donate/"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center h-12 px-9 rounded-full bg-flame-linear text-ivory label-spaced tracking-ember animate-flameGlowPulse"
                  >
                    Donate
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
