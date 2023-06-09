// https://nuxt.com/docs/guide/directory-structure/plugins
// https://nuxt.com/docs/guide/directory-structure/plugins#automatically-providing-helpers

export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const config = useRuntimeConfig()
  const gtag_id = config.public.gtag // "G-" added
  const gtm_id = config.public.gtm // "GTM-" added
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
      gtag_src: `https://www.googletagmanager.com/gtag/js?id=${gtag_id}`,
      gtag_script: () => `window.dataLayer = window.dataLayer || [];
      function gtag(){ window.dataLayer.push(arguments) }
      gtag('js', new Date());
      gtag('config', '${gtag_id}');`,
      gtm_script: () => `(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start' : new Date().getTime(), event : 'gtm.js' });
        var f = d.getElementsByTagName(s)[0], 
            j = d.createElement(s), 
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j,f);
      })(window, document, 'script', 'dataLayer', '${gtm_id}')`,
      gtm_noscript: () => `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtm_id}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      scrollSmooth: appConfig.basic.scrollSmooth ? 'html, body { scroll-behavior: smooth }' : 'body { overflow: overlay }'
    }
  }
})

/*
Can be used in templates like this:
<template>
  <div>
    {{ $hello('world') }}
  </div>
</template>

<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()
</script>
*/
