// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],
  css: ['@/assets/css/tailwind.css', '@/assets/css/main.css'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: '123', // can be overridden by NUXT_API_SECRET environment variable
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: '/api' // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  }
})
