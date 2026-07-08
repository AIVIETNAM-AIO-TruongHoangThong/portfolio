import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3366", // Crimson
        secondary: "#18181B", // Zinc 900
        accent: "#E11D48", // Rose 600
        "background-light": "#FAFAFA", // Zinc 50
        "background-dark": "#09090B", // Zinc 950
        "surface-light": "#FFFFFF",
        "surface-dark": "#18181B", // Zinc 900
        "text-light": "#27272A", // Zinc 800
        "text-dark": "#E4E4E7", // Zinc 200
        "tech-border": "#27272A", // Zinc 800
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-newsreader)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
