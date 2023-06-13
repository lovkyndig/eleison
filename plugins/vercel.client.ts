import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  inject()
})

/*
source:
https://vercel.com/docs/concepts/analytics/quickstart
https://vercel.com/blog/nuxt-analytics-on-vercel
https://vercel.com/lovkyndig/eleison/analytics // login for this
*/