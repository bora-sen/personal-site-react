/** @type {import('tailwindcss').Config} */
module.exports = {
  content : ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "primary":"#fafafa",
        "primary-dark":"#171E21",
        "paragraph":"#594a4e",
        "accentOrange":"#ff725e",
        "accentGreen":"#0a9b25",
      },
      fontFamily:{
        "poppins":['Poppins',"sans-serif"],
      },
    },
  },
  plugins: [],
}
