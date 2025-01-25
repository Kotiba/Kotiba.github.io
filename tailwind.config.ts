/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@tailus/themer-**/dist/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter Tight', 'sans-serif'], // Add Inter font here
      },
    },
  },
  plugins: [
    themer({
      palette: {
        extend: "oz",
      },
      radius: "smoothest",
      background: "light",
      border: "light",
      padding: "large",
    }),
  ],
};
