/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: 'jit',

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
    //   colors: {
    //     transparent: 'transparent',
    //     current: 'currentColor',
    //     black: colors.black,
    //     white: colors.white,
    //     emerald: colors.emerald,
    //     indigo: colors.indigo,
    //     yellow: colors.yellow,
    //     stone: colors.warmGray,
    //     sky: colors.lightBlue,
    //     neutral: colors.trueGray,
    //     gray: colors.coolGray,
    //     slate: colors.blueGray,
    //     lime: colors.lime, 
    //     rose: colors.rose, 
    // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
  ],
})
