import { createGtm } from "@gtm-support/vue-gtm"
import { isProduction } from 'std-env'

export default defineNuxtPlugin( (nuxtApp) => {
  // if (!isProduction) return
  const cookieOptional = getCookieOptional()
  nuxtApp.vueApp.use(createGtm({
    id: useRuntimeConfig().public.gtm,
    defer: true, // defer speeds up load-time
    compatibility: false,
    enabled: cookieOptional.value, 
    debug: true, 
    loadScript: true,
    vueRouter: useRouter(),
    trackOnNextTick: false,
  }))
})

/*
source: 

https://www.youtube.com/watch?v=SO-YoOlBnVE&t=1038s
https://www.npmjs.com/package/@gtm-support/vue-gtm
https://stackoverflow.com/questions/71540309/how-to-connect-google-analytics-to-nuxt3-app

// Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
// Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
// defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
// Whether or not display console logs debugs (optional)
// Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
// Pass the router instance to automatically sync with router (optional)
// Whether or not call trackView in Vue.nextTick

Old sources for gtag.client.ts: 

import VueGtag, { trackRouter } from "vue-gtag-next"
// This plugin creats cookies without permission.

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  nuxtApp.vueApp.use(VueGtag, {
    property: { 
      id: useRuntimeConfig().public.gtag // &l=dataLayer
    }
  })
  trackRouter(router)
})

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

// const { data: { value: { google_id, google_sv, yandex_id, privacy_policy} } } = await useMyApi("/api/main/site-metriks/"); 
// useRuntimeConfig().public.gtag // `G-${process.env.GTAG_ID}`
*/