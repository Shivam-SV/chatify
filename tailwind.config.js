/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.jsx",
    ],
    theme: {
        fontFamily:{
            'pacifico': ['Pacifico', 'cursive']
        },
        extend: {
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))',
                '12': 'repeat(12, minmax(0, 1fr))'
            },
            gridRow: {
                'span-7': 'span 7 / span 7',
                'span-8': 'span 8 / span 8',
                'span-9': 'span 9 / span 9',
                'span-10': 'span 10 / span 10',
                'span-11': 'span 11 / span 11',
                'span-12': 'span 12 / span 12',
            }
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
          "light",
          "dark",
          "cupcake",
          "bumblebee",
          "emerald",
          "corporate",
          "synthwave",
          "retro",
          "cyberpunk",
          "valentine",
          "halloween",
          "garden",
          "forest",
          "aqua",
          "lofi",
          "pastel",
          "fantasy",
          "wireframe",
          "black",
          "luxury",
          "dracula",
          "cmyk",
          "autumn",
          "business",
          "acid",
          "lemonade",
          "night",
          "coffee",
          "winter",
          "dim",
          "nord",
          "sunset",
        ],
      },
  }

