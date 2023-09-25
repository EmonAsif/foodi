// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    }
  ],

  
  build:{},
  buildDir: 'nuxt-dist'

})
