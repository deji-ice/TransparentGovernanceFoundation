import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom left, rgba(209, 250, 229, 1) 1%, rgba(255, 255, 255, 1) 97%, rgba(209, 250, 229, 1) 99%)',
      },
    },
  },
  plugins: [],
};
export default config;
