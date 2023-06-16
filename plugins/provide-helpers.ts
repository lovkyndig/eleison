// https://nuxt.com/docs/guide/directory-structure/plugins
// https://nuxt.com/docs/guide/directory-structure/plugins#automatically-providing-helpers


export default defineNuxtPlugin(() => {
  const appConfig = useAppConfig()
  const { cookiesEnabledIds } = useCookieControl()

  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`,
      scrollSmooth: appConfig.basic.scrollSmooth ? 'html, body { scroll-behavior: smooth }' : 'body { overflow: overlay }',
      anotherhelper: () => {},
      // cookieOptional: cookiesEnabledIds.value.includes('auth') ? false : true,
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

/*
// const config = useRuntimeConfig()
// const gtag_id = config.public.gtag // "G-" added
// const gtm_id = config.public.gtm // "GTM-" added
// const cookieOptional = useCookieOptional()
// providing constants for use in app.vue useHead({})
gtag_src: `https://www.googletagmanager.com/gtag/js?id=${gtag_id}`, // "&l=dataLayer" added
gtag_script: () => `window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments) };
gtag('js', new Date()); 
gtag('config', '${gtag_id}' );
gtag('page', { // added by Eleison
  path: document.location.pathname, 
  title: document.title
} );`,
// The following two functions is taken out of use 13.juni 2023
// don't want to use cookies
gtm_script: () => `(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 
    event : 'gtm.js',
    'gtm.start' : new Date().getTime(), 
    'page' : { // added by Eleison
      path: document.location.pathname, 
      title: document.title
    }
  });
  var f = d.getElementsByTagName(s)[0], 
      j = d.createElement(s), 
      dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', '${gtm_id}')`,
gtm_iframe: () => `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtm_id}"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
moveGtmNoscript: () => {
  const nuxt = document.querySelector('#__nuxt')
  const noscript = document.querySelector('#gtm_noscript') // with iframe
  document.body.insertBefore(noscript, nuxt)
  console.log('Moved gtm_noscript, as 1.child to body.')
},
*/

/**
  * 
   * If there is users with Javascript disabled, an iframe have to be Inserted after body-tag.
   * This code snippet can be used to "Ownership Verification" from Settings in (GCS), 
   * Google Search Console, "Additional verification methods"; "Google Tag Manager".
   * 
   * NB! Verification will fail since this noscript-content isn't the first child of body 
   * (on the serverside).
   * There isn't a way (I know about) to fix this on the serverside, with nuxt or vue.
   * 
   */
