/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  // plugins: [require("daisyui")],
  
  theme: {
    container: {
      center : true,
      padding: '16px',
    },
    extend: {
      fontFamily:{
        custom: ['HIROMISAKE'],
        nunito: ['Noto Sans JP', 'sans-serif'],
      }, 
      borderRadius: {
        '8xl': '2rem', 
        '9xl': '9rem', 
      },
      colors:{
        secondPurple: '#e0c0df',
        darkPurple: '#632e7c',
        lightPurple: '#EFEBF5', 
        purple2: '#c9a0dc',
        bgku : '#EFEBF5',
        txt: '#2e2d36',
      },
      screens: {
        '2xl': '1320px',
      },
      
    
  
    },
  },
  
}

