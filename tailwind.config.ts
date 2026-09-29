import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#051424",
        "surface-dim": "#051424",
        "surface-bright": "#2c3a4c",
        "surface-container-lowest": "#010f1f",
        "surface-container-low": "#0d1c2d",
        "surface-container": "#122131",
        "surface-container-high": "#1c2b3c",
        "surface-container-highest": "#273647",
        "on-surface": "#d4e4fa",
        "on-surface-variant": "#cfc2d6",
        outline: "#988d9f",
        "outline-variant": "#4d4354",
        primary: "#ddb7ff",
        "on-primary": "#490080",
        "primary-container": "#b76dff",
        "on-primary-container": "#400071",
        "inverse-primary": "#842bd2",
        secondary: "#c0c1ff",
        "secondary-container": "#3131c0",
        "secondary-fixed": "#e1e0ff",
        tertiary: "#ffb0cd",
        "tertiary-container": "#f751a1",
        "tertiary-fixed-dim": "#ffb0cd",
        "primary-fixed": "#f0dbff",
        background: "#051424",
        "on-background": "#d4e4fa",
        error: "#ffb4ab",
        obsidian: "#050507",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
        margin: "1.25rem",
        "margin-md": "2.5rem",
        "margin-lg": "4rem",
        gutter: "1.5rem",
        "gutter-lg": "2rem",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "system-ui", "sans-serif"],
        geist: ["var(--font-geist)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-hero": [
          "4.5rem",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.035em",
            fontWeight: "800",
          },
        ],
        "display-hero-mobile": [
          "2.75rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.025em",
            fontWeight: "800",
          },
        ],
        "headline-lg": [
          "3rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.03em",
            fontWeight: "700",
          },
        ],
        "headline-md": [
          "2rem",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "headline-sm": [
          "1.375rem",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.015em",
            fontWeight: "600",
          },
        ],
      },
      maxWidth: {
        canvas: "1280px",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "draw-line": {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      boxShadow: {
        glass: "0 8px 32px -4px rgba(0, 0, 0, 0.5)",
        "glow-primary": "0 0 24px -2px rgba(168, 85, 247, 0.35)",
        "glow-primary-lg": "0 0 35px rgba(183, 109, 255, 0.45)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
