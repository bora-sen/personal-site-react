/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "primary":"#fbfaf1",
        "primary-dark":"#0a0a13",
        "paragraph":"#594a4e",
        "accentOrange":"#b6152a",
        "accentGreen":"#7ea825",
        "accentAqua":"#668d97",
        "accentRed":"#b6152a",
      },
      fontFamily:{
        "poppins":['Poppins',"sans-serif"],
      },
    },
  },
  plugins: [],
}
