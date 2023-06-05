<script setup lang="ts">
// Login modal
const isAdmin = useAdmin() // only in use if calling LoginModal from layout
console.log('~/components/LoginModal.vue is launching!')
const router = useRouter()

async function onLoginSuccess() {
  showLoginModal.value = false
  console.log('Echo from onLoginSuccess in LoginModal!')
  // const redirect = isAdmin.value ? '/login/admin' : '/login/user'
  // await navigateTo(redirect)
  // document.getElementById('escapeBtn').click()
}

const showLoginModal = useState('showLoginModal')
onMounted(() => {
  if (document) {
    // console.log('loading onMounted LoginModal')
    const element = document.getElementById('logincontent')
    element.classList.toggle("hidelogincontent") //removing this class
  }
})

onUnmounted(() => {
  // console.log('Godby from LoginModal!')
})

</script>

<template>
  <div class="expand-window p-4 fixed inset-0 z-[80] flex justify-center items-start">
    <div
      class="expand-window absolute inset-0 -z-10 flex justify-center items-center bg-black/5 backdrop-blur"
      @click="showLoginModal=true"
    />
    <div class="modal-container flex flex-col w-full max-w-prose">
      <div class="px-4 py-4 flex items-center gap-4 bg-white border-b rounded-t-lg">
        <LoginForm @success="onLoginSuccess" />
      </div>

      <div class="modal-content-container px-4 overflow-y-auto bg-white rounded-b-lg">
        <div
          v-show="!inputText"
          class="p-16 flex flex-col justify-center items-center gap-y-8 text-purple-400"
        >
          <p>
            Guest only!
            <br>
            Email: user@gmail.com / admin@gmail.com
          </p>
          <button
            id="escapeBtn"
            class="shrink-0 sm:block px-2 py-1 text-xs text-gray-400 hover:text-gray-600 font-mono font-bold hover:bg-gray-50 border border-gray-400 hover:border-gray-600 rounded transition-colors duration-300"
            title="Hide the login modal"
            @click="router.back()"
          >
            Esc
          </button>
          <!--
          <router-link
            v-slot="{ navigate }"
            to="/"
            custom
          >
            <button
              role="link"
              @click="navigate"
               class="shrink-0 sm:block px-2 py-1 text-xs text-gray-400 hover:text-gray-600 font-mono font-bold hover:bg-gray-50 border border-gray-400 hover:border-gray-600 rounded transition-colors duration-300"
              title="Hide the login modal"
            >
              Esc
            </button>
          </router-link>
          -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-container {
  max-height: 90dvh;
}

.modal-content-container::-webkit-scrollbar {
  display: none;
}
</style>