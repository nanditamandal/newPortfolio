/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'move-circle':{
          '0% , 100%': {transform: 'translateX(100px)'},
          '50%':{transform:'translateX(0)'}
        }

      },
      animation:{
        'move-circle':'move-circle 5s ease-in-out infinite'
      }
    },
  },
  plugins: [require("daisyui")],
};

