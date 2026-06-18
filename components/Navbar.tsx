"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ASSETS, NAV_LINKS, EASE, cn } from "@/lib/utils";

/**
 * Standard horizontal navbar.
 * Logo far left. Nav row right of logo. Donate pill far right.
 * Translucent charcoal w/ blur, intensifies on scroll.
 */
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  React.useEffect(() => setOpen(false), [pathname]);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-charcoal/92 backdrop-blur-md border-b border-orange/25 shadow-[0_8px_24px_-12px_rgba(26,16,8,0.6)]"
          : "bg-charcoal/55 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-16 lg:h-20 items-center justify-between gap-6">
        {/* Logo — far left */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="TSM home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSETS.logo}
            alt="Transforming Spirit Ministries"
            className="h-10 w-10 object-contain"
          />
          <span className="hidden sm:block font-display text-ivory text-sm tracking-cathedral uppercase">
            Transforming Spirit
          </span>
        </Link>

        {/* Right side — nav + donate */}
        <div className="hidden lg:flex items-center gap-1">
          <nav className="flex items-center gap-1 mr-2" aria-label="Primary">
            {NAV_LINKS.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  data-active={active}
                  className="nav-underline label-spaced text-[0.7rem] text-ivory/85 hover:text-flame transition-colors px-3 py-2"
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

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-ivory"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="lg:hidden fixed inset-0 bg-charcoal/60 backdrop-blur-2xl z-40"
          >
            <div className="container h-full pt-24 pb-12 flex flex-col">
              <nav className="flex flex-col items-center gap-3 mt-12 mb-auto" aria-label="Mobile primary">
                {NAV_LINKS.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: EASE }}
                  >
                    <Link
                      href={l.href}
                      className="font-display text-3xl tracking-ember text-ivory hover:text-flame transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-center"
              >
                <Link
                  href="/donate/"
                  className="inline-flex items-center justify-center h-12 px-9 rounded-full bg-flame-linear text-ivory label-spaced tracking-ember animate-flameGlowPulse"
                >
                  Donate
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
