/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fdfcfb",
        "primary-dark": "#010101",
        paragraph: "#242ac2",
        accentOrange: "#e81e6b",
        accentGreen: "#188a0e",
        accentAqua: "#242ac2",
        accentRed: "#881a45",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
