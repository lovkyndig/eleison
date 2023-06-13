import { inject } from '@vercel/analytics'

export default defineNuxtPlugin((/*nuxtApp*/) => {
  // nuxtApp.provide('inject', () => inject() ) 
  // This method not working, using return instead.

  // You can alternatively use this format, which comes with automatic type support
  return {
    provide: {
      inject: inject()
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