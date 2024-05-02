// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Oson-sms",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Platform" },
        { name: "keywords", content: "Sending" },
        { name: "author", content: "Rabiev Nurmuhammad and Nikitin Nikita" },
        { name: "robots", content: "index, follow" },
        { name: "revisit-after", content: "7 days" },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
  modules: ["@pinia/nuxt", 'nuxt-icons'],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
