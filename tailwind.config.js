/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Mono', 'monospace'],
        roboto: ['Roboto Mono', 'monospace'],
      },
      spacing: {
        "lesson-nav-h": "var(--nav-lesson-h)",
        "lesson-container" : "calc(100vh - var(--nav-lesson-h))"
      }
    },
    
  },
  
  plugins: [],
};
