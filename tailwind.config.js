/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#05070d',
          soft: '#080b14',
          card: '#0c1019',
        },
        border: {
          DEFAULT: 'rgba(148,163,184,0.14)',
          soft: 'rgba(148,163,184,0.08)',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          gold: '#e8c987',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        script: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34,211,238,0.35)',
        'glow-violet': '0 0 40px -10px rgba(167,139,250,0.35)',
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
