/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        // Accent
        'accent-blue': '#3996DB',
        'accent-red': '#E3646E',
        'accent-green': '#82BC4F',
        'accent-purple': '#BB72E9',
        'accent-yellow': '#EABD5F',

        // Base
        'base-gray-100': '#0D0E11',
        'base-gray-200': '#16181D',
        'base-gray-300': '#292C34',
        'base-gray-400': '#878EA1',
        'base-gray-500': '#C0C4CE',
        'base-gray-600': '#E2E4E9',

      },

      fontFamily:{
        asap: ["Asap", "serif"],
        inconsolata: ["Inconsolata", "serif"],
        maven: ["Maven Pro" , "serif"],
        
      }
    },
  },
  plugins: [],
}

