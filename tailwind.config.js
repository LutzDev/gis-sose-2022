module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glassmorphism': 'rgba(255, 255, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '4px',
      },
      keyframes: {
        crossout: {
          '0%': {
            width: '0%',
            opacity: '1',
            background: 'rgba(255, 255, 255, 0.5)'
          },
          '35%': {
            opacity: '1',
            background: 'rgba(255, 255, 255, 0.25)'
          },
          '100%': {
            width: '100%',
            opacity: '0'
          },
        },
        crossoutReverse: {
          '0%': {
            width: '100%',
            opacity: '0',
          },
          '100%': {
            width: '0%',
            opacity: '1',
          },
        },
        fadeout: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0.4'
          },
        },
        fadeoutReverse: {
          '0%': {
            opacity: '0.4',
          },
          '100%': {
            opacity: '1'
          },
        }
      },
      animation: {
        crossout: 'crossout 0.3s ease-out forwards',
        fadeout: 'fadeout 0.3s ease-out forwards',
        crossoutReverse: 'crossoutReverse 0.15s ease-out forwards',
        fadeoutReverse: 'fadeoutReverse 0.15s ease-out forwards',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
