module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lavender: '#E6E6FA',
        'lavender-dark': '#B57EDC',
        'lavender-light': '#F5F5FD',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
