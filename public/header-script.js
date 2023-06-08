// JavaScript from Eleison

const gtm_header = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JN2RKR');</script>
<!-- End Google Tag Manager -->`
  
window.addEventListener('load', function() {
// run everytime inside here
})

/*
document.html.onload = (function(){
  const list1 = document.getElementsByTagName('html')[0].firstChild.innerHTML
  console.log('asdf ' + list1)
})()
*/

document.head.onload = (function(){
  // const element = document.getElementsByTagName('head')[0]
  // element.insertAdjacentHTML('afterbegin', gtm_header)
  const element = document.getElementById('gtm_head');
  element.insertAdjacentHTML('beforebegin', '<!-- Google Tag Manager -->');
  element.insertAdjacentHTML('afterend', '<!-- End Google Tag Manager -->');
})()

