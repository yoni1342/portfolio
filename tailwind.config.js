module.exports = {
  mode: 'jit',
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
  },
  plugins: [],
}
