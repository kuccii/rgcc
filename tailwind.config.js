/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rwanda: {
          green: {
            50: '#f0f9f0',
            100: '#dcf2dc',
            200: '#bce5bc',
            300: '#8fd18f',
            400: '#5bb55b',
            500: '#2D5A27',
            600: '#234821',
            700: '#1c381c',
            800: '#152a15',
            900: '#0f1f0f',
          },
          gold: {
            50: '#fefbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#F59E0B',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          earth: {
            50: '#faf7f4',
            100: '#f4ece3',
            200: '#e7d5c1',
            300: '#d4b896',
            400: '#c19a6b',
            500: '#8B4513',
            600: '#7a3c10',
            700: '#66320e',
            800: '#52280b',
            900: '#431f09',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-gentle': 'pulseGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};