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
        'xs': '0.75px',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
