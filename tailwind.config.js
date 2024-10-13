/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#db2777',
        primaryDark: '#be185d',
        foreground: '#fce7f3',
      }
    }
  },
  plugins: []
}
