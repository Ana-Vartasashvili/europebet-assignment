/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background_black_shade_1: '#1C1D1E',
        background_black_shade_2: '#171718',
        background_black_shade_3: '#25292B',
        gray_shade_1: '#2C3234',
        main_orange: '#EF5A21',
      },

      screens: {
        medium: '940px',
      },

      fontFamily: {
        'Helvetica-Neue-55': ['Helvetica Neue LT Std 55 Roman', 'sans-serif'],
        Helvetica: ['Helvetica', 'sans-serif'],
        'Helvetica-bold': ['Helvetica Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
