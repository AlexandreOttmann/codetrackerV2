/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  fontFamily: {
    sans: ['poppins', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  theme: {
    extend: {
      colors: {
        custom: {
          dark: '#242242',
          gray: '#81818c',
          blue: '#515fea',
          cyan: '#f1fdff',
          mustard: '#f9fedd',
          purple: '#f3f1fe',
          lightgray: '#f9f9f9',
          green: '#d6f084',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
