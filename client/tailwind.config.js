/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        ysabeau: ['Ysabeau', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        alegreya:['Alegreya Sans','sans-serif']
      },

      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
    },

      colors:{
        "primary-blue":"#025464",
        "primary-orange":"#EB9007",
        "primary-white":"#FFFCF9",
        "secondary-orange":"#FFD256",
        "secondary-blue":"#6596A0",
        "primary-text":"#080202",
        "primary-red":"#B31312",
        "darken-orange":"#C77A06",
        "lighten-black":"rgba(1, 1, 1, 0.5)"
      }
    },
  },
  plugins: [],
}

