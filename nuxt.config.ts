// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@nuxt/eslint",
  ],
});
