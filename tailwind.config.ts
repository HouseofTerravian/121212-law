import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0a',
          card: '#1a1a1a',
          footer: '#050505',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#e8c84a',
          dim: 'rgba(212, 175, 55, 0.15)',
          border: 'rgba(212, 175, 55, 0.3)',
        },
        'brand-red': {
          DEFAULT: '#c41e3a',
          dark: '#8b1528',
          dim: 'rgba(196, 30, 58, 0.15)',
        },
        dim: 'rgba(255, 255, 255, 0.65)',
        muted: 'rgba(255, 255, 255, 0.4)',
        'status-green': '#4ade80',
        'status-red': '#f87171',
        'status-slate': '#94a3b8',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
