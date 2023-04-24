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
        gray_shade_3: '#202324',
        gray_shade_4: '#BBBBBB',
        main_orange: '#EF5A21',
        orange_hover: '#ee4c1e',
        orange_shade_1: '#F05A22',
        yellow_shade_1: '#FFBE00',
        yellow_shade_2: '#D7C860',
        brown_shade_1: '#B78648',
        green_shade_1: '#094B3D',
      },

      screens: {
        xxs: '320px',
        xs: '450px',
        mediumSm: '848px',
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

      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },

      animation: {
        'fade-in':
          'fade-in 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;',
      },
    },
  },
  plugins: [],
}
