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
        primary: {
          DEFAULT: colors.yellow['500'],
          dark: colors.indigo['500'],
        },
        secondary: {
          DEFAULT: colors.orange['500'],
          dark: colors.violet['500'],
        },
        black: colors.black,
        white: colors.white,
        gray: colors.trueGrey,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.yellow,
      },
      typography: (theme) => ({
        default: {
            css: {
                color: theme('colors.gray.800'),
                a: {
                    color: theme('colors.blue.700'),
                    '&:hover': {
                        color: theme('colors.blue.700'),
                    },
                },
                blockquote: {
                  color: theme('colors.gray.900'),
                },
            },
        },

        dark: {
            css: {
                color: theme('colors.gray.400'),
                a: {
                    color: theme('colors.green.500'),
                    '&:hover': {
                        color: theme('colors.green.500'),
                    },
                },
                blockquote: {
                  color: theme('colors.gray.300'),
                },

                h1: {
                    color: theme('colors.gray.300'),
                },
                h2: {
                    color: theme('colors.gray.300'),
                },
                h3: {
                    color: theme('colors.gray.300'),
                },
                h4: {
                    color: theme('colors.gray.300'),
                },
                h5: {
                    color: theme('colors.gray.300'),
                },
                h6: {
                    color: theme('colors.gray.300'),
                },

                strong: {
                    color: theme('colors.gray.300'),
                },

                code: {
                    color: theme('colors.gray.300'),
                },

                figcaption: {
                    color: theme('colors.gray.500'),
                },
            },
        },
    }),
     },
   },
   variants: {
    extend: {
      typography: ['dark']
    }
  },
   plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
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
          '.stack': {
            gridColumn: '1',
            gridRow: '1'
          }
        }

        addUtilities(newUtilities, {
          variants: ['responsive', 'hover'],
        });
      })
    ],
 };
