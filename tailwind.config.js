const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './safelist.txt'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      brand: {
        50: '#eefbfc',
        100: '#e0f7fb',
        200: '#b9eef8',
        300: '#74daf6',
        400: '#1bc1f8',
        500: '#009ad6',
        600: '#007ab3',
        700: '#005e94',
        800: '#004c80',
        900: '#00457a',
        DEFAULT: '#00adee',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
