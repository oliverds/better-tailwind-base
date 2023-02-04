const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
        colors: {
            gray: {...colors.gray, 950: '#111111' },
        }
    }
  },
  plugins: [],
}
