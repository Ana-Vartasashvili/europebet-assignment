/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background_black_shade_1: '#1C1D1E',
        background_black_shade_2: '#171718',
        background_black_shade_3: '#25292B',
        background_black_shade_4: '#1E2122',
        gray_shade_1: '#2C3234',
        gray_shade_2: '#7D7D7D',
        main_orange: '#EF5A21',
        orange_shade_1: '#F05A22',
      },

      screens: {
        xs: '450px',
        medium: '940px',
      },

      boxShadow: {
        'orange-shadow': '0px 0px 10px 0px #EF5A21',
        'gray-shadow': '0px 0px 5px 0px #2C3234',
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
