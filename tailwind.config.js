/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Mono', 'monospace'],
        roboto: ['Roboto Mono', 'monospace'],
      },
    },
    colors: {
      'text-primary': '#150c0f',
      background: '#fcfafb',
      primary: '#b05a77',
      secondary: '#d399ad',
      accent: '#c76c8b',
      black: '#111111',
      white: '#000000',
    },
  },
  plugins: [],
};
