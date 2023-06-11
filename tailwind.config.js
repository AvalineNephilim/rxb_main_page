/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam-pro': ['"Be Vietnam Pro"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

