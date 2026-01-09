import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          950: "#0b1220",
          900: "#0f172a",
          800: "#16233b"
        },
        gold: {
          400: "#f3c969",
          500: "#e8b53a",
          600: "#d49a1a"
        },
        brand: {
          red: "#e82735",
          coral: "#fc7655",
          green: "#1e8d3e",
          yellow: "#f6fe51",
          forest: "#245134"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"]
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          lg: "1024px",
          xl: "1200px",
          "2xl": "1400px"
        }
      }
    }
  },
  plugins: []
};

export default config;

