/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "1rem",
            screens: {
               sm: "512px",
               md: "720px",
               lg: "1024px",
               xl: "1060px",
               "1440px": "1220px",
            },
         },
         fontFamily: {
            poppins: ["poppins", "sans-serif"],
         },
         backgroundImage: {
            "hero-pattern": "url('/assets/images/bg-image.png')",
            banner: "url('/assets/images/bg-image.webp')",
         },
      },
   },
   plugins: [],
};
