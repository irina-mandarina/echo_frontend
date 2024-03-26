// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/axios', 'nuxt-graphql-request'],
  css: [
    '@/assets/main.css'
  ],
  build: {
    transpile: ['nuxt-graphql-request'],
  },
  graphql: {
    clients: {
      default: {
        endpoint: 'http://localhost:8080/graphql',
        options: {
          // headers: {
          //   authorization: 'Bearer MY_TOKEN',
          // },
        },
      },
    },
  },
})
