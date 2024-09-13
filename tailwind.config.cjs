/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#baddff",
          300: "#7cc2ff",
          400: "#3aa1ff",
          500: "#0077ff",
          600: "#005fdb",
          700: "#004bb7",
          800: "#003a93",
          900: "#002970",
        },
        secondary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        future: ["Orbitron", "sans-serif"], // Dijital ve gelecek temalı bir font
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
