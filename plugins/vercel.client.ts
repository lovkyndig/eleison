import { inject } from '@vercel/analytics'

export default defineNuxtPlugin((/*nuxtApp*/) => {
  // nuxtApp.provide('inject', () => inject() ) 
  // This method not working, using return instead.

  // You can alternatively use this format, which comes with automatic type support
  return {
    provide: {
      inject: inject(),
      /*
      vercel_src_script: 'https://vercel.com/_vercel/insights/script.js'
      in node_modules/@vercel/analytics/analytics/dist/index.js, line 81
      change "_vercel/insights/script.js" with "https://vercel.com/_vercel/insights/script.js"
      */
    }
  }
})

/*
source:
https://vercel.com/docs/concepts/analytics/quickstart
https://vercel.com/blog/nuxt-analytics-on-vercel // inject()
https://vercel.com/lovkyndig/eleison/analytics // login for this
https://nuxt.com/docs/migration/plugins-and-middleware
*/