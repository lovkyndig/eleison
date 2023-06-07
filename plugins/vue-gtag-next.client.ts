// source: https://nuxt.com/docs/guide/directory-structure/plugins#vue-plugins
import VueGtag, { trackRouter } from "vue-gtag-next" // vue-gtag
const router = useRouter()
const config = useRuntimeConfig()

export default defineNuxtPlugin((nuxtApp) => {
  // if (config.public.production_mode) {
    nuxtApp.vueApp.use(VueGtag, {
      property: { // config
        id: config.gtag_id
      }
    })
    trackRouter(router) // nuxtApp.$router OR router
  // }
  // return { provide: { VueGtag } } 
})
/*
// source: 
https://matteo-gabriele.gitbook.io/vue-gtag/
https://garywoodfine.com/how-to-add-google-analytics-to-nuxt-3/
https://stackoverflow.com/questions/74410533/nuxt-3-how-to-access-plugin-injections-from-components
https://www.npmjs.com/package/vue-gtag
https://matteo-gabriele.gitbook.io/vue-gtag/
https://github.com/nuxt-community/google-analytics-module/issues/127
https://github.com/nuxt/nuxt/discussions/17143
https://stackoverflow.com/questions/71540309/how-to-connect-google-analytics-to-nuxt3-app
https://github.com/nuxt-community/gtm-module/issues/152
https://garywoodfine.com/how-to-add-google-analytics-to-nuxt-3/
https://nuxt.com/docs/guide/directory-structure/plugins#vue-plugins
https://nuxt.com/docs/guide/directory-structure/plugins
https://nuxt.com/docs/guide/directory-structure/plugins#automatically-providing-helpers
*/