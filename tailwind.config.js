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
        nunito: ['nunito', 'sans-serif'],
      }, 
      borderRadius: {
        '8xl': '2rem', 
        '9xl': '9rem', 
      },
      colors:{
        secondPurple: '#e0c0df',
        darkPurple: '#632e7c',
        lightPurple: '#fdfefc', 
        purple2: '#aa8db0',
        bgku : '#faf8fd',
      },
      screens: {
        '2xl': '1320px',
      },
      
    
  
    },
  },
  
}

