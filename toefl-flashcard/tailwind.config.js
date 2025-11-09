export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'green-accent': {
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          800: '#065f46',
        },
        'blue-accent': {
          400: '#3b82f6',
          600: '#2563eb',
        },
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        'teal-blue-gradient': 'linear-gradient(to bottom right, #5cc9a4, #4a8bcf)',
      },
      borderRadius: {
        'card': '15px',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        spin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
}
