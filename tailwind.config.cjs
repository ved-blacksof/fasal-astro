/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#00613C",
        yellow: "#FFE366",
        blue: "#469AE3",
        mint: "#EBFFF8",
      },
      fontFamily: {
        hellix: ["Hellix"],
      },
      screens: {
        sm: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
        "2xl": "1640px",
      },
    },
  },
  plugins: [],
};
