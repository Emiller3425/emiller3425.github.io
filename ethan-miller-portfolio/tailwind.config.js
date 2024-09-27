module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lavender: '#E6E6FA',
        'lavender-dark': '#B57EDC',
        'lavender-light': '#F5F5FD',
        bone: '#E3DAC9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
