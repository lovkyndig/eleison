<script setup lang="ts">
// source: https://github.com/damien-hl/nuxt3-auth-example

const props = defineProps({
  footerCatalog: {
    type: Boolean,
    default: false
  },
})

const route = useRoute()

/**
 *
 * listen page resize (onMounted1)
 *
 */
let resizeTimer:(null | ReturnType<typeof setTimeout>) = null
const windowSize = useWindowSize()
onMounted(() => {
  if (document) {
    windowSize.value.width = document.documentElement.clientWidth
    windowSize.value.height = document.documentElement.clientHeight
  }

  window.addEventListener('resize', () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer)
    }

    resizeTimer = setTimeout(() => {
      windowSize.value.width = document.documentElement.clientWidth
      windowSize.value.height = document.documentElement.clientHeight

      resizeTimer = null
    }, 300)
  })
})

/**
 * listen page scroll (onMounted2)
 */
const pageScrollTop = usePageScrollTop()
let scrollTimer:(null | ReturnType<typeof setTimeout>)
onMounted(() => {
  if (document) {
    // get the init page scroll top value
    pageScrollTop.value = document.body.scrollTop || document.documentElement.scrollTop

    document.addEventListener('scroll', () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer)
        scrollTimer = null
      }
      scrollTimer = setTimeout(() => {
        pageScrollTop.value = document.body.scrollTop || document.documentElement.scrollTop

        scrollTimer = null
      }, 100)
    })
  }
})



// keyboard shortcuts for search modal
const showSearchModal = useState('showSearchModal')
const ModalKeyListener = function (event: KeyboardEvent) {
  if(event.ctrlKey && event.key ==='k') {
    event.preventDefault()
    showSearchModal.value = !showSearchModal.value
  } else if (showSearchModal.value && event.key === 'Escape') {
    showSearchModal.value = false
  }
}

// const showLoginModal = useState('showLoginModal')
/*
// keyboard shortcuts for login modal
const LoginKeyListener = function (event: KeyboardEvent) {
  if(event.ctrlKey && event.key ==='l') {
    event.preventDefault()
    showLoginModal.value = !showLoginModal.value
  } else if (showLoginModal.value && event.key === 'Escape') {
    showLoginModal.value = false
  }
}
*/

onMounted(() => {
  if (document) {
    document.addEventListener('keydown', ModalKeyListener)
    // document.addEventListener('keydown', LoginKeyListener)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', ModalKeyListener)
  // document.removeEventListener('keydown', LoginKeyListener)
})
const gtm_src = `https://www.googletagmanager.com/ns.html?id=GTM-${process.env.GTM_ID}`
</script>

<template>
  <div 
    name="base-layout" 
    class="pb-20 sm:pb-0 bg-gray-50 flex flex-col min-h-screen"
  >
    <iframe 
      :src="gtm_src"
      height="0" 
      width="0" 
      style="display:none; visibility:hidden" 
    />
    <header
      class="hidden sm:block shrink-0"
      :class="route.path === '/' ? 'sm:sticky top-0 inset-x-0 z-30' : 'relative z-40'"
    >
      <HeaderNav>
        <template #header-nav-right>
          <slot name="header-nav-right" />
        </template>
      </HeaderNav>
    </header>
    <div class="grow flex flex-col">
      <slot />
    </div>
    <hr class="p-4 w-1/5 mx-auto">
    <FooterContent />

    <Transition
      enter-from-class="translate-y-36 md:translate-y-10"
      enter-active-class="transition-transform duration-500 ease"
      enter-to-class="translate-y-0"
      leave-from-class="translate-y-0"
      leave-active-class="transition-transform duration-75 ease"
      leave-to-class="translate-y-36 md:translate-y-10"
    >
      <BackToTop v-show="pageScrollTop > 600" />
    </Transition>

    <nav class="sm:hidden fixed bottom-0 left-0 right-0 z-50">
      <FooterNav
        :footer-catalog="props.footerCatalog"
      >
        <template #footer-nav-right>
          <slot name="footer-nav-right" />
        </template>
      </FooterNav>
    </nav>

    <ClientOnly>
      <!-- <LoginModal v-show="showLoginModal" /> -->
      <SearchModal v-show="showSearchModal" />
    </ClientOnly>
  </div>
</template>

<style lang="scss">
</style>
