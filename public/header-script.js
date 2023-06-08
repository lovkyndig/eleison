// JavaScript from Eleison

const gtm_header = `<script>window.dataLayer = window.dataLayer || [];</script>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5JN2RKR');</script>
  <!-- End Google Tag Manager -->`
  
//window.addEventListener('load', function() {
// document.onload( {}
  

  // const element = document.getElementsByTagName('head')[0]
  // element.insertAdjacentHTML('afterbegin', gtm_header)
  // console.log('Comment elements added before and after "gtm_header". Look in Developer Elements')
 // )
//})

document.head.onload = (function() {
  console.log('heieee')
  const element = document.getElementsByTagName('head')[0]
  element.insertAdjacentHTML('afterbegin', gtm_header)
  console.log('Comment elements added before and after "gtm_header". Look in Developer Elements')
})()