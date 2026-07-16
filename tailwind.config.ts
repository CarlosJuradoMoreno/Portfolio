import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0B0B0B", surface: "#141414", line: "#2A2A2A", muted: "#B8B8B8", accent: "#6EE7FF" },
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"], display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"] },
      boxShadow: { glow: "0 0 60px rgba(110,231,255,.10)" },
    },
  },
  plugins: [],
} satisfies Config;
