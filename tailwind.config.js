/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: '#2E5AAA',
      'blue-gray': '#F8FAFC',
      'dark-blue': '#272870',
      dark: '#1F1F1F',
      black: '#262626',
      'dark-grey': '#8992A9',
      'light-white': '#F7F7F7',
      grey: '#64748B',
      'semi-grey': '#334155',
      'medium-grey': '#475569',
      'semi-light-grey': '#98A2B3',
      'light-grey': '#E6E6E6',
      white: '#fff',
      orange: '#FF7F51',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
    screens: {
      xs: '576px',
      // => @media (min-width: 576px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1240px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
