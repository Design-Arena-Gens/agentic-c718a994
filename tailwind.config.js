/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0a1628',
        'brand-blue': '#1e40af',
        'brand-cyan': '#06b6d4',
        'brand-gold': '#fbbf24',
      },
    },
  },
  plugins: [],
}
