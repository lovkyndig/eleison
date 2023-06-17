// JavaScript in body from Eleison

/**
 * Change flex-direction if screen width < 768
 */

/**
 * Trying to fix cookie-msg with the mutationObserver, 
 * but I did't need to.
 * https://usefulangle.com/post/356/javascript-detect-element-added-to-dom
 */
/*
changeButtonsOnCookieBarAndModal()
function changeButtonsOnCookieBarAndModal() {
  const cookieContainer = document.querySelectorAll(".cookieControl__BarContainer")[0]
  if(!cookieContainer) {
      //The node we need does not exist yet.
      //Wait 500ms and try again
      window.setTimeout(changeButtonsOnCookieBarAndModal,500)
      return
  }
  // The elements is now loaded and can be handled.
  // First program handle bar-buttons
  const cookieBar = document.querySelectorAll(".cookieControl__BarButtons")[0]
  window.addEventListener('resize', resizeFunction)
  resizeFunction.width = window.innerWidth
  function resizeFunction() {
    resizeFunction.width = window.innerWidth
    if(window.innerWidth < 1024) {
      cookieContainer.style.flexDirection = 'row'
      cookieBar.style.flexDirection = 'row'
      cookieBar.style.width = '45%'
    }
  }
  // Second program handle click and modal-buttons
  const infoBtn = cookieBar.children.item(2)
  infoBtn.onclick = () => {
    const modalBtn = document.querySelectorAll(".cookieControl__ModalButtons")[0]
    modalBtn.style.flexDirection = 'row'
  }
}
*/