import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: "#0a0a12",
          secondary: "#0f0f1a",
          footer: "#060610",
        },
        neon: {
          purple: "#7C3AFF",
          blue: "#00C2FF",
          green: "#00FF88",
        },
        foreground: "#FFFFFF",
        muted: "rgba(255,255,255,0.6)",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        neonPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        "neon-pulse": "neonPulse 3s ease-in-out infinite",
      },
      boxShadow: {
        "neon-purple": "0 0 30px rgba(124,58,255,0.15)",
        "neon-purple-lg": "0 0 60px rgba(124,58,255,0.2)",
        "neon-green": "0 0 40px rgba(0,255,136,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
