const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.ts',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            // ...defaultTheme.fontFamily,
            // sans: ['-apple-system', ...defaultTheme.fontFamily.sans],
            // mono: ['Menlo,Monaco', ...defaultTheme.fontFamily.mono],
            // display: [
            //     'Gilroy,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica Neue,Arial,sans-serif',
            // ],
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/line-clamp'),
        // line clamp: >  https://www.youtube.com/watch?v=klh-jMTm5PU&ab_channel=TailwindLabs
        // require('@tailwindcss/typography'),
    ],
}
