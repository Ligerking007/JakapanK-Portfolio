import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#07111f',
          900: '#0b1728',
          850: '#102238',
          800: '#12304d',
        },
        cyanAccent: '#38d5ff',
      },
      boxShadow: {
        card: '0 18px 55px rgba(8, 31, 55, 0.14)',
      },
    },
  },
  plugins: [],
} satisfies Config;
