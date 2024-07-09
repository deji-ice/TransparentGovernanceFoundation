import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair-display)'],
        montserrat : ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom left, rgba(209, 250, 229, 1) 1%, rgba(255, 255, 255, 1) 97%, rgba(209, 250, 229, 1) 99%)',
      },
    },
  },
  plugins: [],
};
export default config;
