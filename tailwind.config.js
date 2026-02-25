/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EBE0',
        nude: '#D5BDAF',
        tan: '#A9927D',
        clay: '#8B7355',
        'warm-white': '#FAF7F2',
        'soft-brown': '#6B5B4F',
        'deep-brown': '#4A3F35',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
