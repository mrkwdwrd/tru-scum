/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        opensans: ['"Open Sans"', 'sans-serif'],
        abril: ['"Abril Fatface"', 'serif'],
        sourcesans: ['"Source Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

