export const theme = {
  colors: {
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.7)',
      muted: 'rgba(0, 0, 0, 0.5)',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F8F9FA',
      dark: '#12121F',
    },
    accent: {
      primary: '#00F0FF',
      secondary: '#FF00FF',
    },
  },
  fonts: {
    sans: 'Space Grotesk, system-ui, sans-serif',
    display: 'Orbitron, system-ui, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
};

export type Theme = typeof theme;