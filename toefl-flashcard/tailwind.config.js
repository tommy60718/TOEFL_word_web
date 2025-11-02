export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-magoosh': {
          600: '#5b21b6',
          700: '#7c3aed',
        },
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(to bottom right, #5b21b6, #7c3aed)',
      },
    },
  },
  plugins: [],
}
