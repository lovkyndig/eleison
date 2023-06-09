<script setup lang="ts">
import pkg from '~/package.json'
const appConfig = useAppConfig()
const config = useRuntimeConfig()

/**
 * Used in head style below
 */
style.var = 'body { overflow: overlay }'
function style() {
  if (appConfig.basic.scrollSmooth) {
    style.var = 'html, body { scroll-behavior: smooth }'
  }
}
style()

/**
 * useHead Scripts for gtag and gtm
 */
const gtag_id = config.public.gtag // "G-" added
const gtag_script = `window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments) }
gtag('js', new Date());
gtag('config', '${gtag_id}');`

const gtm_id = config.public.gtm // "GTM-" added
const gtm_script = `(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start' : new Date().getTime(), event : 'gtm.js' });
  var f = d.getElementsByTagName(s)[0], 
      j = d.createElement(s), 
      dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j,f);
})(window, document, 'script', 'dataLayer', '${gtm_id}')`


// plugins: ['~/plugins/gtag.client.ts'] // autoregistrated
useHead({
  htmlAttrs: { lang: 'no' },
  script: [
    { src: `https://www.googletagmanager.com/gtag/js?id=${gtag_id}`, async: true },
    { children: gtag_script },
    { children: gtm_script }, // id: 'gtm_head'
    { src: 'js/app-src-defer.js', defer: true }
  ],
  noscript: [{ children: `Denne appen fungerer ikke hvis javascript er deaktivert i browseren!` }],
  link: [
    { rel: 'icon', href: appConfig.basic.favicon },
    { rel: 'apple-touch-icon', href: appConfig.basic.avatar },
    { rel: 'manifest', href: 'manifest.webmanifest', crossorigin: 'use-credentials' }
  ],
  style: [ `${style.var}` ],
  meta: [ { name: 'id', content: `${pkg.version}`,} ],
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

onUnmounted(() => { })

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
