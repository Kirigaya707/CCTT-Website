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
        terracotta: { DEFAULT: "#C85A32", light: "#D96B43", dark: "#A34320" },
        moss: { DEFAULT: "#3A5A40", light: "#588157", dark: "#2A402E" },
        gold: { DEFAULT: "#D4AF37", light: "#F3E5AB", dark: "#AA820A" },
        cream: "#FDFBF7",
        sand: "#F4EFEA",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
    },
  },
  plugins: [],
};
