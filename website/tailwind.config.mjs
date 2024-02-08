import animations from "../src/index";
import theme from "../src/theme";

const safelist = Object.keys(theme.animation).map((key) => `animate-${key}`);

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [animations],
  safelist,
};
