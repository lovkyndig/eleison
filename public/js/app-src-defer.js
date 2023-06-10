// JavaScript from Eleison
document.body.onload = () => {
  moveGtmNoscript()
}
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
function moveGtmNoscript () {
  const nuxt = document.querySelector('#__nuxt')
  const noscript = document.querySelector('#gtm_noscript') // with iframe
  document.body.insertBefore(noscript, nuxt)
  console.log('Moved gtm_noscript, as 1.child to body.')
}
// document.body.onload = moveGtmNoscript


/* 
Code-testing-examples:
const noscript = document.createElement('noscript')
const htmlcode = ''
noscript.insertAdjacentHTML('afterbegin', htmlcode)
noscript.innerHTML = ''
document.body.prepend(noscript)
//document.body.insertAdjacentElement('afterbegin', noscript)

const firstel = document.querySelector('#__nuxt')
firstel.insertAdjacentHTML('beforebegin', '<noscript id="gtm_noscript">')
noscript.appendChild(iframe)

*/

/*
sources:
assets/gtag-and-gtm.html
body-script: https://github.com/nuxt/nuxt/issues/13069
https://www.simoahava.com/gtm-tips/datalayer-declaration-vs-push/

*/


 

