/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#4285f4',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
}