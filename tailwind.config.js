import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#0b1220',
        surface2: '#111829',
        accent: '#7c3aed',
        accentSoft: '#8b5cf6',
        glow: '#22c55e',
      },
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        gradientRadial: 'radial-gradient(circle at top, rgba(124,58,237,0.18), transparent 35%)',
      },
    },
  },
  plugins: [forms],
}
