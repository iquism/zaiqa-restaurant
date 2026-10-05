import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#14100C",
        coal: "#1D1712",
        ember: "#241A10",
        cream: "#F5EDE0",
        sand: "#CBBFAE",
        smoke: "#8F8474",
        saffron: {
          DEFAULT: "#E8A33D",
          light: "#F2C063",
          dark: "#C97B2D",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
export default config;
