/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7037e7',
          dark: '#5a28cc',
          light: '#9c6aff'
        },
        secondary: {
          DEFAULT: '#ff4d4d',
          dark: '#e64040',
          light: '#ff8080'
        },
        background: {
          DEFAULT: '#f5f7fa',
          dark: '#1a1d2b',
        },
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        dark: {
          primary: '#a070ff',
          secondary: '#ff7e7e',
          text: '#f8fafc',
          background: '#121620',
          card: '#1e2433',
          border: '#4a5568',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        card: '0 10px 30px 0 rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
} 