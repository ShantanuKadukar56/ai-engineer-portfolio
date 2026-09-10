/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#f8fafc',
          soft: '#eef2f7',
          card: '#ffffff',
        },
        border: {
          DEFAULT: 'rgba(15,23,42,0.10)',
          soft: 'rgba(15,23,42,0.06)',
        },
        accent: {
          cyan: '#0e7490',
          violet: '#6d28d9',
          gold: '#b8860b',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        script: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(37,99,235,0.35)',
        'glow-violet': '0 0 40px -10px rgba(124,58,237,0.35)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        'dash-travel': {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        twinkle: 'twinkle 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
