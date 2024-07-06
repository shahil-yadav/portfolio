/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "nav-black": "#222222",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        consolas: ["Source Code Pro", "monospace"],
      },
    },
  },
  plugins: [],
};
