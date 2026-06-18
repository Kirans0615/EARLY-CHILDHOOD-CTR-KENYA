import Link from "next/link";
import { Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { ASSETS, NAV_LINKS, SCRIPTURE } from "@/lib/utils";
import { CrossMark } from "@/components/decor/CrossMark";

/**
 * Cathedral-inspired centered footer.
 * Thin orange top border · centered cross · centered Cinzel name · centered link rows · italic scripture.
 */
export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory border-t-2 border-orange/70" data-navbar="dark">
      <div className="container py-20 text-center">
        <CrossMark className="h-10 w-auto mx-auto text-flame mb-8" strokeWidth={2} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ASSETS.logo} alt="TSM" className="h-20 w-auto max-w-[160px] object-contain mx-auto mb-5 opacity-90" loading="lazy" decoding="async" />
        <p className="font-display text-2xl md:text-3xl tracking-ember mb-3">
          Transforming Spirit Ministries
        </p>
        <p className="label-spaced text-orange mb-12">
          Washington, DC · 501(c)(3) Charitable Foundation
        </p>

        {/* Centered nav rows */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10" aria-label="Footer primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-underline label-spaced text-ivory/80 hover:text-flame transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/donate/" className="nav-underline label-spaced text-flame hover:text-flame-soft">
            Donate
          </Link>
        </nav>

        {/* Social icon placeholders — kept visually, intentionally inert.
            Swap each to <a href="..." aria-label="..."> when real social
            URLs are available. */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { Icon: Facebook,  label: "Facebook (coming soon)" },
            { Icon: Instagram, label: "Instagram (coming soon)" },
            { Icon: Youtube,   label: "YouTube (coming soon)" },
          ].map(({ Icon, label }, i) => (
            <span
              key={i}
              role="img"
              aria-label={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-orange/35 text-flame/85"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </span>
          ))}
          <a
            href="mailto:contact@transformingspiritministries.org"
            className="ml-2 inline-flex items-center gap-2 label-spaced text-ivory/75 hover:text-flame transition-colors"
          >
            <Mail className="h-4 w-4" aria-hidden />
            contact@transformingspiritministries.org
          </a>
        </div>

        {/* Centered italic scripture */}
        <blockquote className="font-italic italic text-ivory/85 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          &ldquo;{SCRIPTURE.acts18}&rdquo;
        </blockquote>
        <p className="label-spaced text-flame mt-2">— {SCRIPTURE.acts18Ref}</p>

        <div className="mt-12 pt-6 border-t border-ivory/10">
          <p className="text-xs text-ivory/45">
            © 2024 Transforming Spirit Ministries · From DC to the ends of the earth.
          </p>
        </div>
      </div>
    </footer>
  );
}
