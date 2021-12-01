// https://github.com/kentcdodds/kentcdodds.com

const path = require('path')
const fromRoot = (p) => path.join(__dirname, p)

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
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
        colors: {
            // color scheme is defined in /app.css
            transparent: 'transparent',
            current: 'currentColor',
            white: 'var(--color-white)',
            black: 'var(--color-black)',

            gray: {
                100: 'var(--color-gray-100)',
                200: 'var(--color-gray-200)',
                300: 'var(--color-gray-300)',
                400: 'var(--color-gray-400)',
                500: 'var(--color-gray-500)',
                600: 'var(--color-gray-600)',
                700: 'var(--color-gray-700)',
                800: 'var(--color-gray-800)',
                900: 'var(--color-gray-900)',
            },
            blueGray: {
                500: 'var(--color-blueGray-500)',
            },
            team: {
                unknown: 'var(--color-team-unknown)',
                current: 'var(--color-team-current)',
                yellow: 'var(--color-team-yellow)',
                blue: 'var(--color-team-blue)',
                red: 'var(--color-team-red)',
            },
            yellow: {
                500: 'var(--color-yellow-500)',
            },
            blue: {
                100: 'var(--color-blue-100)',
                500: 'var(--color-blue-500)',
            },
            red: {
                500: 'var(--color-red-500)',
            },
            green: {
                100: 'var(--color-green-100)',
                500: 'var(--color-green-500)',
                600: 'var(--color-green-600)',
            },
        },

        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/line-clamp'),
        // line clamp: >  https://www.youtube.com/watch?v=klh-jMTm5PU&ab_channel=TailwindLabs
        // require('@tailwindcss/line-clamp'),
        // require('@tailwindcss/typography'),
    ],
}
