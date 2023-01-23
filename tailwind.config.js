/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "primary":"#fafafa",
        "primary-dark":"#02080e",
        "paragraph":"#594a4e",
        "accentOrange":"#cb5610",
        "accentGreen":"#439a0a",
        "accentAqua":"#67c6d1",
        "accentRed":"#e61049",
      },
      fontFamily:{
        "poppins":['Poppins',"sans-serif"],
      },
    },
  },
  plugins: [],
}
