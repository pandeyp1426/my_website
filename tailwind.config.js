/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101522',
        mist: '#eef2f7',
        ocean: '#2563eb',
        coral: '#f9735b',
        mint: '#2dd4bf',
        plum: '#7c3aed',
      },
      boxShadow: {
        glow: '0 22px 70px rgba(37, 99, 235, 0.18)',
        lift: '0 18px 45px rgba(15, 23, 42, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35', transform: 'scaleX(0.75)' },
          '50%': { opacity: '1', transform: 'scaleX(1)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseLine: 'pulseLine 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
