const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false,
    content: ['./components/**/*.vue', './pages/**/*.vue'],
  },
   darkMode: 'class',
   theme: {
     extend: {
      fontFamily: {
        'heading': [
          'Rubik',
          'sans-serif'
        ],
        'body': [
          'Poppins',
          'sans-serif'
        ],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGrey,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      }
     },
   },
   variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.blur-xs': {
          backdropFilter: 'blur(2px)'
        },
        '.blur-sm': {
          backdropFilter: 'blur(10px)'
        },
        '.blur-md': {
          backdropFilter: 'blur(25px)'
        },
        '.blur-lg': {
          backdropFilter: 'blur(50px)'
        },
        '.blur-xl': {
          backdropFilter: 'blur(100px)'
        },
      }

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    })
  ],
 };
