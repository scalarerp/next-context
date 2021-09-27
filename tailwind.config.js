const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['-apple-system', ...defaultTheme.fontFamily.sans],
      mono: ['Menlo,Monaco', ...defaultTheme.fontFamily.mono],
      display: [
        'Gilroy,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica Neue,Arial,sans-serif',
      ],
    },
    extend: {
      colors: {
        ...colors,
        // colors: require('daisyui/colors'),
        grape: '#a65fec',
      },
      // lineClamp: { 10: '10', 12: '12' },

      backgroundColor: (theme) => ({
        ...theme('colors'),
        //DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        //DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        //DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: 'var(--bg-secondary)',
        secondary: 'var(--bg-primary)',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // line clamp: >  https://www.youtube.com/watch?v=klh-jMTm5PU&ab_channel=TailwindLabs

    // require('@tailwindcss/typography'),
    // require('daisyui'),
  ],
}
