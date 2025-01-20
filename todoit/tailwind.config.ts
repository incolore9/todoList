import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nanum: ["var(--font-nanum-square)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#EDE9FE",
        },
        delete: {
          DEFAULT: "#F43F5E",
        },
        complete: {
          DEFAULT: "#BEF264",
        },
        memoTitle: {
          DEFAULT: "#92400E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
