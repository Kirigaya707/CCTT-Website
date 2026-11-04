/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: { DEFAULT: "#665E55", light: "#81786E", dark: "#4D4740" },
        moss: { DEFAULT: "#4A4640", light: "#625D56", dark: "#302E2A" },
        gold: { DEFAULT: "#8A8175", light: "#D8D1C7", dark: "#625B52" },
        cream: "#FAF7F0",
        sand: "#E9E3D9",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
};
