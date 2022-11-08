/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      denim: '#1C5CC9',
      'bright-grey': '#3E4151',
      grape: '#35153C',
      azure: '#2E5AAA',
      'catskill-white': '#F8FAFC',
      astronaut: '#272870',
      'mine-shaft': '#1F1F1F',
      black: '#262626',
      manatee: '#8992A9',
      'light-white': '#F7F7F7',
      grey: '#64748B',
      'pickled-bluewood': '#334155',
      fiord: '#475569',
      'gull-grey': '#98A2B3',
      'light-grey': '#E6E6E6',
      alabaster: '#F8F8F8',
      white: '#fff',
      orange: '#FF7F51',
      mercury: '#E6E6E6',
      error: '#B91C1C',
      alto: '#D9D9D9',
      'tropical-blue': '#C0D9F7',
      'dove-grey':'#636363',
      'blue':'rgba(46, 90, 170, 0.1)'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      'dm-sans': ['DM Sans', 'sans-serif'],
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
