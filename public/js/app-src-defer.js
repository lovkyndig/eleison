// JavaScript from Eleison

// const body = document.getElementsByTagName('body')[0]
// console.log('testing if ' + body.tagName)
/*
const noscript = document.createElement('noscript')
const htmlcode = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JN2RKR" height="0" width="0" style="display:none;visibility:hidden" />'
noscript.insertAdjacentHTML('afterbegin', htmlcode)
// noscript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5JN2RKR" height="0" width="0" style="display:none;visibility:hidden" />'
// document.body.prepend(noscript)
document.body.insertAdjacentElement('afterbegin', noscript)
*/
document.body.onload = (function(){ })()


/*
sources:
10.03.23/lovkyndig/kirkepostille-v/v0.1.0-/v0.1.15
body-script: https://github.com/nuxt/nuxt/issues/13069
https://www.simoahava.com/gtm-tips/datalayer-declaration-vs-push/

*/

 /**
   * If there is users with Javascript disabled, an iframe have to be Inserted iframe after body-tag.
   * See the code for this in layout template.
   */

/*
function addNoscriptTag () {
  console.log('Creating gtm-noscript and moving iframe into it.')
  const firstel = document.getElementById('__nuxt')
  firstel.insertAdjacentHTML('beforebegin', '<noscript id="gtm_noscript">')
  const noscript = document.querySelector('#gtm_noscript')
  const iframe = document.getElementsByTagName('iframe')[0]
  noscript.appendChild(iframe)
}
*/

/*
// Insert gtm-code if javascript is deactivated:
const gtm_id = useRuntimeConfig().public.gtm // "GTM-" added
<iframe
    :src="`https://www.googletagmanager.com/ns.html?id=${gtm_id}`"
    height="0" 
    width="0" 
    style="display:none;visibility:hidden" 
  />
*/

