// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon"],
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
  ssr: false,
});
