// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
     head: {
        charset: "utf-16",
        viewport: " width=500, initial-scale=1",
        title: "Loker SMK",
        meta: [{ name: "description", content: "Penyedia lowongan kerja bagi smk" }],
        link: [
           { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" },
           { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" },
        ],
     },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
     plugins: {
        tailwindcss: {},
        autoprefixer: {},
     },
  },

  compatibilityDate: "2024-08-12",
});