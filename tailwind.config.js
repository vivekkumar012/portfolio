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
        'yellow-main': 'var(--yellow-theme-main-color)',
        'yellow-sub': 'var(--yellow-theme-sub-text-color)',
      },
      animation: {
        typing: 'typingEffectAnimation 2.5s steps(20, end)',
       },
      keyframes: {
        typingEffectAnimation: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      height: {
        'screen-minus-80': 'calc(100% - 80px)',
      },
    },
  },
  plugins: [],
}