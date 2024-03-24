/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   
  theme: { 
    
    extend:{
      fontFamily: {
        'sans':['Inter', 'sans-serif'],
        'serif':['Inter', 'serif']
      },
      
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
    
  },
  plugins: [],
}
  }
