/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c5c7cb',
          300: '#9b9ea4',
          400: '#6d7077',
          500: '#4d5057',
          600: '#3d3f45',
          700: '#2e3034',
          800: '#1f2123',
          900: '#131415',
          950: '#0a0b0c',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5ecd6',
          200: '#ead7ad',
          300: '#ddbd76',
          400: '#d4a84f',
          500: '#c6933a',
          600: '#a9762f',
          700: '#875929',
          800: '#6f4827',
          900: '#5d3c24',
        },
        cream: '#faf8f4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
