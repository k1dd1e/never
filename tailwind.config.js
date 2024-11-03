/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#161316', 
        foreground: '#0d0d0d',
        primaryText: 'hsl(var(--primary-text) / <alpha-value>)',
        secondaryText: '#a9a9a9',
        hoveredForeground: 'hsl(var(--hovered-foreground) / <alpha-value>)',
        primaryBorder: '#424242',
        secondBg: '#151515',
      },  
    }
  },
  plugins: [],
}