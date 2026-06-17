import type { Metadata } from "next";
import { Inter, Cinzel, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyDonateBanner } from "@/components/StickyDonateBanner";
import { BackToTop } from "@/components/BackToTop";
import { PageTransition } from "@/components/PageTransition";
import { CandleWidget } from "@/components/CandleWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const eb = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Transforming Spirit Ministries — On Fire for the World",
    template: "%s | Transforming Spirit Ministries",
  },
  description:
    "A 501(c)(3) Christian charitable foundation rooted in Washington, DC — set ablaze across Africa, Asia, Europe, and Israel by the power of the Holy Spirit.",
  openGraph: {
    title: "Transforming Spirit Ministries",
    description: "Transforming lives through the power of the Holy Spirit.",
    type: "website",
    siteName: "Transforming Spirit Ministries",
    images: [
      "https://raw.githubusercontent.com/Kirans0615/EARLY-CHILDHOOD-CTR-KENYA/main/0e3f49_d911cb407c0c4cefb01018a7dc3df823~mv2.avif",
    ],
  },
  twitter: { card: "summary_large_image", title: "Transforming Spirit Ministries" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} ${eb.variable}`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-ivory text-charcoal">
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <CandleWidget />
        <StickyDonateBanner />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
