// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  app: {
      pageTransition
  : { name
  : 'page', mode
  : 'out-in' }
    },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
    '@nuxt/icon',
    "@nuxtjs/apollo",
    "@nuxtjs/google-fonts",
    '@vee-validate/nuxt',
    '@primevue/nuxt-module',
    '@vee-validate/nuxt',
    '@pinia/nuxt'
    
  ],
  
 
  primevue: {
    autoImport:true,
    options: {
        theme: {
            preset: Aura
        }
    }
},
  colorMode:{
    classSuffix:""
  },
  apollo: {
    autoImports: true,
    clients: {
      default: {
        httpEndpoint: 'http://localhost:8080/v1/graphql', 
      },
      // authClient:'./apollo/authoClient.js'
    },
  },
  
  ssr:false,
  runtimeConfig:{
    public:{mode:import.meta.env.MODE}
  }

})