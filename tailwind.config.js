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
        "primary-blue": "#1b6cbb",
        "primary-purple": "#a92e7a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tusker: ["TuskerRegular"],
        "tusker-bold": ["TuskerBold"],
      },
    },
  },
  plugins: [],
}
