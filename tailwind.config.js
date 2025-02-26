/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,scss,ts}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      base: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '6xl': '5.5rem',
      '7xl': '6rem',
      '8xl': '6.5rem',
      '9xl': '7rem',
      '10xl': '7.5rem',
    },
    screens: {
      sm: '460px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'features-image': "url('/assets/images/features.jpg')",
      },
    }
  },
  plugins: [],
};