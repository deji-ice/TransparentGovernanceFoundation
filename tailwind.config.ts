import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
      clipPath: {
        'ellipse-top': 'ellipse(50% 30% at center top)',
      },
      fontFamily: {
        playfair: ['var(--font-playfair-display)'],
        montserrat: ['var(--font-montserrat)'],
        dm_sans: ['var(--font-dm-sans)'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom left, rgba(209, 250, 229, 1) 1%, rgba(255, 255, 255, 1) 97%, rgba(209, 250, 229, 1) 99%)',
      },
    },
  },
  plugins: [daisyui],
  variants: {
    clipPath: ['responsive'],
  },
};
export default config;
