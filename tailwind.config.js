/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container : {
      center : true,
      padding: "1.6rem"  
    },
    
    extend: {
      fontFamily : {
        poppins: ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
