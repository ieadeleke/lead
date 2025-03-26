import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        accent: "var(--accent)"
      },
      gridTemplateColumns: {
        "1/2/1": "1fr 2fr 1fr",
        "1.5/1": "1.5fr 1fr",
        "1/1.5": "1fr 1.5fr",
        ".5/1.5/1": ".4fr 2fr 1fr"
      },
      fontFamily: {
        ClashSemi: "Clash Display Semi Bold",
        ClashMedium: "Clash Display Medium",
        ClashRegular: "Clash Display Regular"
    }
  },
},
plugins: [],
} satisfies Config;
