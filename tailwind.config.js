/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#E6F0FF',
          200: '#CCE0FF',
          300: '#99C2FF',
          400: '#66A3FF',
          500: '#3385FF',
          600: '#0066FF',
          700: '#0052CC',
          800: '#003D99',
        },
        success: '#1DD098',
        error: '#FF5C5C',
        dark: {
          primary: '#000000',    // Noir pur
          secondary: '#0A0A0A',  // Noir très foncé
          tertiary: '#1A1A1A',   // Gris très foncé pour plus de contraste
          quaternary: '#242424', // Gris foncé pour les éléments interactifs
        },
        text: {
          primary: '#FFFFFF',     // Blanc pur
          secondary: '#CCCCCC',   // Gris clair
          tertiary: '#999999',    // Gris moyen
        },
        accent: {
          blue: '#0066FF',       // Bleu royal
          lightBlue: '#3385FF',  // Bleu clair
          darkBlue: '#0052CC',   // Bleu foncé
          skyBlue: '#66A3FF',    // Bleu ciel
        },
        border: {
          dark: '#242424',       // Gris foncé pour les bordures
          darker: '#363636',     // Gris moyen foncé pour les bordures au hover
        }
      },
      backgroundImage: {
        'dark-gradient': 'radial-gradient(circle at top left, rgba(0, 102, 255, 0.1) 0%, #000000 80%)',
        'dark-glow': 'radial-gradient(circle at center, rgba(0, 102, 255, 0.05) 0%, transparent 70%)',
        'blue-gradient': 'linear-gradient(135deg, #3385FF 0%, #0052CC 100%)',
      },
      boxShadow: {
        'dark-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
        'dark-xl': '0 15px 25px -5px rgba(0, 0, 0, 0.5)',
        'dark-glow': '0 0 20px rgba(0, 102, 255, 0.15)',
        'dark-glow-strong': '0 0 30px rgba(0, 102, 255, 0.25)',
      }
    }
  },
  plugins: [],
};