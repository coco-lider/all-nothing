/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 row grid
        '3': 'repeat(3, minmax(3, auto-fill))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      },

      gridTemplateColumns: {
        // Simple 16 row grid
        '16': 'repeat(auto-fill, minmax(550px, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
  
}

