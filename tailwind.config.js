/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navbarColor: '#11192D',
        darkBlue: '#172134', // هنا سمينا اللون darkBlue
        default: '#1E293B',
      },
        fontFamily: {
          kanit: ['Kanit', 'sans-serif'],
        },
    },
  },
  plugins: [],
}