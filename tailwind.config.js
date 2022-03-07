module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        yoni: ['Playfair Display'],
        typewriter: ['Syne Mono']
      }
    },
    screen: {
      'md': '1248px'
    },
  },
  plugins: [],
}
