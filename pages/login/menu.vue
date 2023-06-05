<script lang="ts" setup>
// source: https://github.com/damien-hl/nuxt3-auth-example
const currentUser = useAuthUser()
const isAdmin = useAdmin()
const { logout } = useAuth()

const form = reactive({
  pending: false,
})

async function onLogoutClick() {
  try {
    form.pending = true

    await logout()

    await navigateTo('/')
  }
  catch (error) {
    console.error(error)
  }
  finally {
    form.pending = false
  }
}

/**
 *
 * listen page resize
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
 * listen page scroll
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

const showLoginModal = useState('showLoginModal')

// keyboard shortcuts for search modal
const LoginKeyListener = function (event: KeyboardEvent) {
  if(event.ctrlKey && event.key ==='k') {
    event.preventDefault()
    showLoginModal.value = !showLoginModal.value
  } else if (showLoginModal.value && event.key === 'Escape') {
    showLoginModal.value = false
  }
}

onMounted(() => {
  if (document) {
    document.addEventListener('keydown', LoginKeyListener)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', LoginKeyListener)
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-900">
    <NuxtLayout name="base">
      <header class="p-3 mx-auto w-full max-w-4xl">
        <nav class="flex gap-3">
          <NuxtLink to="/">
            Home
          </NuxtLink>

          <template v-if="currentUser">
            <NuxtLink to="/login/user">
              User
            </NuxtLink>

            <NuxtLink 
              v-if="isAdmin" 
              to="/login/admin"
            >
              Admin
            </NuxtLink>

            <button
              class="mb-3 ml-auto py-1 px-2 rounded bg-light-100 transition-colors hover='bg-light-700'"
              :disabled="form.pending"
              @click="onLogoutClick"
            >
              Logout
            </button>
          </template>

          <template v-else>
            <NuxtLink to="/login/guest">
              Guest
            </NuxtLink>

            <NuxtLink
              to="/login"
              class="ml-auto py-1 px-2 rounded bg-light-100 transition-colors hover='bg-light-700'"
            >
              Login
            </NuxtLink>
          </template>
        </nav>
      </header>

      <main class="p-3 mx-auto w-full max-w-4xl">
        <slot />
      </main>

      <ClientOnly>
        <LoginModal v-show="showLoginModal" />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>
