import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        crimson:  { DEFAULT: "#8B1A1A", deep: "#6B1212", glow: "#A82A2A" },
        orange:   { DEFAULT: "#D4501A", soft: "#E07F4A" },
        flame:    { DEFAULT: "#F5A623", soft: "#FFC267" },
        ivory:    { DEFAULT: "#FDF6EC", dim: "#F4ECDD" },
        charcoal: { DEFAULT: "#1A1008", deep: "#0C0704" },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
        serif:   ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        italic:  ["var(--font-eb)", "EB Garamond", "serif"],
        sans:    ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        cathedral: "0.3em",
        ember:     "0.18em",
      },
      backgroundImage: {
        "flame-linear":  "linear-gradient(135deg, #8B1A1A 0%, #D4501A 50%, #F5A623 100%)",
        "flame-vertical":"linear-gradient(180deg, #F5A623 0%, #D4501A 55%, #8B1A1A 100%)",
        "flame-radial":  "radial-gradient(ellipse at center, #F5A623 0%, #D4501A 35%, #8B1A1A 75%, #1A1008 100%)",
        "ember-glow":    "radial-gradient(ellipse at bottom, rgba(212,80,26,0.35), transparent 65%)",
      },
      keyframes: {
        emberRise: {
          "0%":   { transform: "translateY(0) scale(0.6)", opacity: "0" },
          "10%":  { opacity: "0.9" },
          "100%": { transform: "translateY(-110vh) scale(0.2)", opacity: "0" },
        },
        flameGlowPulse: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(245,166,35,0.55), 0 0 24px rgba(212,80,26,0.45)" },
          "50%":     { boxShadow: "0 0 0 12px rgba(245,166,35,0.0), 0 0 48px rgba(212,80,26,0.7)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        candleFlicker: {
          "0%,100%": { opacity: "1", transform: "scaleY(1)" },
          "45%":     { opacity: "0.85", transform: "scaleY(0.97)" },
          "70%":     { opacity: "1", transform: "scaleY(1.03)" },
        },
        fadeBlurUp: {
          from: { opacity: "0", transform: "translateY(18px)", filter: "blur(8px)" },
          to:   { opacity: "1", transform: "translateY(0)",    filter: "blur(0)" },
        },
      },
      animation: {
        emberRise:        "emberRise 8s linear infinite",
        flameGlowPulse:   "flameGlowPulse 2.4s ease-in-out infinite",
        marquee:          "marquee 38s linear infinite",
        candleFlicker:    "candleFlicker 2.6s ease-in-out infinite",
        fadeBlurUp:       "fadeBlurUp 0.9s cubic-bezier(0.2, 0.9, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
