/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "primary":"#fdfcfb",
        "primary-dark":"#010101",
        "paragraph":"#594a4e",
        "accentOrange":"#b6152a",
        "accentGreen":"#188a0e",
        "accentAqua":"#3958a2",
        "accentRed":"#881a45",
      },
      fontFamily:{
        "poppins":['Poppins',"sans-serif"],
      },
    },
  },
  plugins: [],
}
