/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          950: '#0a0e27',
          900: '#0f1419',
          800: '#1a1f2e',
          700: '#252d3d',
          600: '#3a4556',
          500: '#4a5568',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
