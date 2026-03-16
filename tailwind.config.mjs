/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'tripcket': {
          orange: '#FF6B35',
          gold: '#F7B538',
          'gold-dark': '#C4913B',
          cream: '#FFF8F0',
          'light-tan': '#F5E6D3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
