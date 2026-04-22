import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        cream: "#F5F1E8",
        bone: "#ECE6D6",
        turf: "#1A1A1A",
        chalk: "#FAFAFA",
        athletic: {
          50: "#F4F4F5",
          100: "#E4E4E7",
          200: "#D4D4D8",
          300: "#A1A1AA",
          400: "#71717A",
          500: "#52525B",
          600: "#3F3F46",
          700: "#27272A",
          800: "#18181B",
        },
        safety: "#FF4D12",
        field: "#C8FF2C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        mega: ["clamp(3rem, 11vw, 10rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        giant: ["clamp(2.25rem, 7vw, 6rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
