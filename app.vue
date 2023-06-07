<script setup lang="ts">
import pkg from '~/package.json'
const appConfig = useAppConfig()

style.var = 'body { overflow: overlay }'
function style() {
  if (appConfig.basic.scrollSmooth) {
    style.var = 'html, body { scroll-behavior: smooth }'
  }
}
style()

/**
 *
 * set head meta for all pages
 * https://nuxt.com/docs/getting-started/seo-meta#useseometa
 */
useServerSeoMeta({
  ogTitle: `${appConfig.basic.meta.name} - v${pkg.version}`,
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
// plugins: ['~/plugins/vue-gtag-next.client.ts']
useHead({
  htmlAttrs: { lang: 'no' },
  link: [
    { rel: 'icon', href: appConfig.basic.favicon },
    { rel: 'apple-touch-icon', href: appConfig.basic.avatar },
    { rel: 'manifest', href: 'manifest.webmanifest', crossorigin: 'use-credentials' }
  ],
  noscript: [{ children: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JN2RKR" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }],
  // source: 10.03.23/lovkyndig/kirkepostille-v/v0.1.0-/v0.1.15
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=G-${process.env.GTAG_ID}`,
      async: true
    },
    {
      innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-${process.env.GTAG_ID}'); (function(w,d,s,l,i){w[l]=w[l]||[]; w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'}); var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:''; j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-5JN2RKR');`
    }
  ],
  style: [ `${style.var}` ],
  meta: [ { name: 'id', content: `${pkg.version}`,} ],
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
