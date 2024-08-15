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
      },
      colors: {
        primary: '#0077FF',
        secondary: '#43467C',
        'text-secondary' : "#6F7072"
      }
    },
    
  },
  
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' })
  ],
};
