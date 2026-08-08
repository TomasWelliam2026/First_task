/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test': "url('/src/assets/img/back.png')"
      }
    },
  },
  plugins: [],
}

