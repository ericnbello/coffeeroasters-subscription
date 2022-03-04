module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'darkCyan': '#0E8784',
        'lightCyan': '#66D2CF',
        'darkGreyBlue': '#333D4B',
        'paleOrange': '#FDD6BA',
        'gray': '#83888F',
        'lightCream': '#FEFCF7'
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      }
    },
  },
};
