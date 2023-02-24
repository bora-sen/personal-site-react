/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "primary":"#eceae3",
        "primary-dark":"#0a0a13",
        "paragraph":"#594a4e",
        "accentOrange":"#b6152a",
        "accentGreen":"#188a0e",
        "accentAqua":"#000257",
        "accentRed":"#881a45",
      },
      fontFamily:{
        "poppins":['Poppins',"sans-serif"],
      },
    },
  },
  plugins: [],
}
