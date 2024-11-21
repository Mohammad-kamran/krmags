/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: "rgb(81, 0, 255)",
      }
    },
  },
  plugins: [],
}