/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/js/**/*.{js,jsx,ts,tsx}",
    "./resources/**/*.blade.php"
  ],
  theme: {
    extend: {
        fontFamily:{
            poppins : ['Poppins', 'sans-serif'],
            pacifico: ['Pacifico', 'cursive']
          }
    },
  },
  plugins: [],
}
