/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Titillium Web"'],
      },
      colors:{
        orange: '#F05E7B',
        white: '#FFFFFF',
      }
    }
  },
  plugins: [],
}
