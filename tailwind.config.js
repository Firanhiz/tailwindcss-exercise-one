/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },

    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },

      colors: {
        'my-green': '#AFD83A',
        'my-aqua': '#9FE2BF',
        'my-lilac': '#E9B7EE'
      }
    },
  },
  plugins: [],
}

