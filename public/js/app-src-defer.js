// JavaScript from Eleison
document.body.onload = () => {
}
// document.body.onload = moveGtmNoscript

/* 
Code-testing-examples:
function moveGtmNoscript () {
  const nuxt = document.getElementById('__nuxt')
  const noscript = document.querySelector('#gtm_noscript') // with iframe
  document.body.insertBefore(noscript, nuxt)
  console.log('Moved gtm_noscript, as 1.child to body.')
}
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


 

