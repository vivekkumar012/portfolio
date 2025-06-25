/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-theme-main': 'var(--yellow-theme-main-color)',
        'yellow-theme-nav-bg': 'var(--yellow-theme-nav-background-color)',
        'yellow-theme-main-color': 'var(--yellow-theme-main-color)',
        'yellow-theme-main-link': 'var(--yellow-theme-main-color)',
      },
    },
  },
  plugins: [],
}