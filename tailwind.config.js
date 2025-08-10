export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#c4ff3f'
        },
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6'
        }
      },
      fontFamily: {
        mono: ['Consolas', 'Monaco', 'monospace'],
        serif: ['Georgia', 'Cambria', 'serif']
      },
      animation: {
        'text-slide': 'text-slide 3s infinite'
      },
      keyframes: {
        'text-slide': {
          '0%, 16%': {
            transform: 'translateY(0%)'
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)'
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)'
          },
          '60%, 76%': {
            transform: 'translateY(-50%)'
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          }
        }
      }
    }
  }
}