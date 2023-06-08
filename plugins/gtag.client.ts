import VueGtag, { trackRouter } from "vue-gtag-next"
// import VueGtag from "vue-gtag"

export default defineNuxtPlugin(nuxtApp => {
  const router = useRouter()
  nuxtApp.vueApp.use(VueGtag, {
    property: { // property / config
      id: 'GTM-5JN2RKR' // useRuntimeConfig().gtag // `G-${process.env.GTAG_ID}`
    }
  })
  trackRouter(router) // trackRouter(router) / router
})
// const { data: { value: { google_id, google_sv, yandex_id, privacy_policy} } } = await useMyApi("/api/main/site-metriks/"); 

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
https://www.simoahava.com/gtm-tips/datalayer-declaration-vs-push/
*/