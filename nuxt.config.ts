// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: [
    '@/assets/main.css'
  ],
  runtimeConfig: {

    graphqlEndpoint: 'http://localhost:8080/graphql'
  }
  // build: {
  //   transpile: ['nuxt-graphql-request'],
  // },
  // graphql: {
  //   clients: {
  //     default: {
  //       endpoint: 'http://localhost:8080/graphql',
  //       options: {
  //         // headers: {
  //         //   authorization: 'Bearer MY_TOKEN',
  //         // },
  //       },
  //     },
  //   },
  // },
})
