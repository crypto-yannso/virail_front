/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Couleurs primaires
        primary: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B8DBFF',
          300: '#8AC2FF',
          400: '#5CA8FF',
          500: '#2E8EFF',
          600: '#0074FF',
          700: '#005FD1',
          800: '#004BA3',
          900: '#003775',
        },
        // Couleurs sombres pour le thème dark
        dark: {
          primary: '#0A0A0A',    // Arrière-plan principal (noir quasi pur)
          secondary: '#101215',  // Zones secondaires
          tertiary: '#1A1C20',   // Éléments interactifs
          quaternary: '#22252A', // Éléments actifs/hover
        },
        // Couleurs de texte pour le thème dark
        text: {
          primary: '#FFFFFF',    // Texte principal (blanc)
          secondary: '#C6C6C6',  // Texte secondaire (gris clair)
          tertiary: '#8B8B8B',   // Texte désactivé (gris plus foncé)
        },
        // Couleurs d'accentuation
        accent: {
          blue: '#4A90E2',       // Rappel de la lueur bleue
          purple: '#A78BFA',     // Autres couleurs conservées si besoin
          green: '#34D399',
          red: '#F87171',
          yellow: '#FBBF24',
        },
        // Couleurs de bordure pour le thème dark
        border: {
          dark: '#2B2B2B',       // Bordures principales
          darker: '#3A3A3A',     // Bordures secondaires
        }
      },
      backgroundImage: {
        'dark-gradient': 'radial-gradient(circle at top left, rgba(74, 144, 226, 0.2) 0%, #0A0A0A 80%)',
        'dark-glow': 'radial-gradient(circle at center, rgba(74, 144, 226, 0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'dark-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.6)',
        'dark-md': '0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.6)',
        'dark-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.6), 0 4px 6px -2px rgba(0, 0, 0, 0.6)',
        'dark-glow': '0 0 20px rgba(74, 144, 226, 0.3)',
      }
    }
  },
  plugins: [],
};