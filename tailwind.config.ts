import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Newsreader", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        "headline-hero": [
          "4rem",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
        "headline-section": [
          "2.75rem",
          { lineHeight: "1.08", letterSpacing: "-0.025em" },
        ],
        "card-title": ["1.5rem", { lineHeight: "1.25" }],
      },
      colors: {
        primary: {
          DEFAULT: "#00C3E9",
          dark: "#00ADE3",
          light: "#E0F8FC",
        },
        secondary: "#C620F5",
        success: "#88D800",
        warning: "#F5CE00",
        error: "#E53935",
        accent: "#E05A1E",
        "card-brown": {
          DEFAULT: "#521200",
          dark: "#1F0300",
        },
        "background-light": "#F5F5F5",
        "background-dark": "#0D0D0D",
        "surface-light": "#FFFFFF",
        "surface-dark": "#181818",
        "text-primary-light": "#0D0D0D",
        "text-secondary-light": "#6B6B6B",
        "text-secondary-dark": "#A3A3A3",
        "border-light": "#E8E8E8",
      },
    },
  },
} satisfies Config
