/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        brown: {
          700: '#503C2D',
        },
      },
    },
  },
  plugins: [],
}
