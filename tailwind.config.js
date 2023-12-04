/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#333',
          secondary: '#f3f3f3',
        },
        dark: {
          primary: '#f3f3f3',
          secondary: '#333',
        },
      },
    },
  },
  plugins: [],
}