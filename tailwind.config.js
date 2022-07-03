/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.tsx'],
  darkMode: false, 
  theme: {},
  variants: {
      extend: {},
  },
  plugins: [
    '@tailwindcss/line-clamp'
  ]
}