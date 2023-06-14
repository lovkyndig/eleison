<script setup lang="ts">
import pkg from '~/package.json'
import vue from 'vue'
const appConfig = useAppConfig()

/**
 * constants from plugin/provide-helpers.ts, for use in useHead scripts and style.
 */
const { $gtag_src, $gtag_script, $gtm_script, $gtm_iframe, $scrollSmooth, $moveGtmNoscript } = useNuxtApp()

useHead({
  htmlAttrs: { lang: 'no' },
  script: [
    // Is gtag creating cookies without permission?
    // { src: `${$gtag_src}`, async: true }, 
    // { children: $gtag_script },
    // { children: $gtm_script, body: true },
    { src: 'js/app-src-defer.js', defer: true }
  ],
  noscript: [
    { children: `Denne appen fungerer ikke hvis javascript er deaktivert i browseren!` },
    // { body: true, id: 'gtm_noscript', children: $gtm_iframe }
  ],
  link: [
    { rel: 'icon', href: appConfig.basic.favicon },
    { rel: 'apple-touch-icon', href: appConfig.basic.avatar },
    { rel: 'manifest', href: 'manifest.webmanifest', crossorigin: 'use-credentials' },
  ],
  style: [ `${$scrollSmooth}` ],
  meta: [ { name: 'id', content: `${pkg.version}` } ]
})

/**
 *
 * set head meta for all pages
 * https://nuxt.com/docs/getting-started/seo-meta#useseometa
 */
useServerSeoMeta({
  ogType: 'website',
  ogUrl: pkg.homepage,
  ogImage: `${pkg.homepage}${appConfig.seo_meta.listview}`,
  ogImageAlt: pkg.name,
  twitterImage: `${pkg.homepage}${appConfig.seo_meta.frontpage}`,
  twitterSite: '@nuxt_js',
  twitterCreator: '@nuxt_js',
  twitterCard: 'summary_large_image',
  googleSiteVerification: process.env.GSITE_VERIFICATION,
  themeColor: '#f9fafb'
})

onBeforeMount(() => { 
  // $moveGtmNoscript()
})
onMounted(() => {
  // pwa - Content is sized correctly for the viewport
  const widthCheck = () => {
    if (window) {
      if (window.innerWidth > window.outerWidth) {
        window.innerWidth = window.outerWidth
        return innerWidth
      }
    }
  }
  if (window) {
    window.addEventListener('load', () => { widthCheck() })
    window.addEventListener('resize', () => { widthCheck() })
  }
})

// onServerPrefetch(async () => {
  // component is rendered as part of the initial request
  // pre-fetch data on server as it is faster than on the client
  // data.value = await fetchOnServer(/* ... */)
// })


</script>

<script lang="ts">
export default {
  // data() { return { document: document } },
  beforeCreate() { },
  created() { /* Elements created, but document isn't defined yet. */ },
  beforeMount() { /* Document isn't defined before onMount. */ },
}
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
::-webkit-scrollbar {
  width: 16px;
  height: 16px;
  background-color: #f5ecec; /* or add it to the track */
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(156, 163, 175, 1);
  border: 3px solid transparent;
  background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(107, 114, 128, 1);
}
</style>
