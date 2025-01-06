/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#EDEAFF',
          200: '#D5D1FF',
          300: '#ADA3FF',
          400: '#8C80FF',
          500: '#6B5DFF',
          600: '#5D4EEB',
          700: '#4A3DD1',
          800: '#382DB8',
        },
        success: '#1DD098',
        error: '#FF5C5C',
        dark: {
          primary: '#1F1F1F',    // Gray 900
          secondary: '#262626',   // Gray 800
          tertiary: '#2E2E2E',   // Gray 700
          quaternary: '#555555',  // Gray 600
        },
        text: {
          primary: '#FFFFFF',     // White
          secondary: '#999999',   // Gray 400
          tertiary: '#555555',    // Gray 600
        },
        accent: {
          blue: '#6B5DFF',       // Primary 500
          purple: '#5D4EEB',     // Primary 600
          green: '#1DD098',      // Success
          red: '#FF5C5C',        // Error
        },
        border: {
          dark: '#2E2E2E',       // Gray 700
          darker: '#555555',     // Gray 600
        }
      },
      backgroundImage: {
        'dark-gradient': 'radial-gradient(circle at top left, rgba(107, 93, 255, 0.2) 0%, #1F1F1F 80%)',
        'dark-glow': 'radial-gradient(circle at center, rgba(107, 93, 255, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'dark-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.6)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.6)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.6)',
        'dark-glow': '0 0 20px rgba(107, 93, 255, 0.3)',
      }
    }
  },
  plugins: [],
};