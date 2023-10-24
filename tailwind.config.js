/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        //Primary
        'Linear-gradient': 'hsl(249, 99%, 64%) to hsl(278, 94%, 30%)',
        'Red' : 'hsl(0, 100%, 66%)',
        
        //Neutral
        
        'White': 'hsl(0, 0%, 100%)',
        'Light-grayish-violet': 'hsl(270, 3%, 87%)',
        'Dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'Very-dark-violet': 'hsl(278, 68%, 11%)'
        


      }



    },
  },
  plugins: [],
}

