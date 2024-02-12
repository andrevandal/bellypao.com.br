/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      fields: ['fields', ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '375px',
        // sm: '640px',
        // lg: '1024px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      colors: {
        brown: {
          700: '#503C2D',
          800: '#423024',
        },
      },
    },
  },
  plugins: [],
}
