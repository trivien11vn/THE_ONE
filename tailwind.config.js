/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat Alternates', 'sans-serif'],
    },
    extend: {
      width:{
        main: '1170px'
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}