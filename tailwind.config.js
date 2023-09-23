/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      scale: {
        '200': '2'
      },
      screens: {
        'xl': "1500px"
      },
      colors: {
        "light-blue": "#B0D5FC"
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}