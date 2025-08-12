/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      colors: {
        brand: {
          50: '#f2f7ff',
          100: '#e6f0ff',
          200: '#c8dcff',
          300: '#a3c2ff',
          400: '#6f9dff',
          500: '#3b82f6',
          600: '#2f6ad3',
          700: '#2554aa',
          800: '#1f458b',
          900: '#1b3a73'
        },
        surface: '#0b1020',
        elev1: '#0f162d',
        elev2: '#131a33',
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444'
      },
      boxShadow: {
        glow: '0 0 40px rgba(59,130,246,0.35)'
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};