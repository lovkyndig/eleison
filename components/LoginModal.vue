<script setup lang="ts">
// import props from './content/LoginContent.vue'

// Login modal
// const isAdmin = useAdmin() // only in use if calling LoginModal from layout
const router = useRouter()

async function onLoginSuccess() {
  showLoginModal.value = false
  // const redirect = isAdmin.value ? '/login/admin' : '/login/user'
  // await navigateTo(redirect)
  // document.getElementById('escapeBtn').click()
}

const showLoginModal = useState('showLoginModal')
onMounted(() => {
  if (process.client) {
    toggleElement('logincontent')
  }
})

onUnmounted(() => {
  // console.log('Godby from LoginModal!')
})

const form2modal = ref(null)
/* source:
https://vuejs.org/api/sfc-script-setup.html#defineexpose
https://stackoverflow.com/questions/73344760/defineexpose-from-components-script-setup-not-working-in-vue-3
https://mokkapps.de/vue-tips/expose-properties-in-a-script-setup-component/
*/

// stop body scroll when Login modal show up
watch(showLoginModal, () => {
  if (!document?.body) { return }

  if (showLoginModal.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
})

function toggleElement(id) {
  const element = document.getElementById(id)
  element.classList.toggle("hide-content") //removing this class
}
function sponseInfo() {
  // Hiding all toggle-elements on start
  toggleElement('sponseInfo')
  toggleElement('emailPassord')
  toggleElement('vippsInfo')
}
// "sm:block" removed from elements below 
</script>

<template>
  <div class="expand-window p-4 fixed inset-0 z-[80] flex justify-center items-start">
    <div
      class="expand-window absolute inset-0 -z-10 flex justify-center items-center bg-black/5 backdrop-blur"
      @click="showLoginModal=true"
    />
    <div class="modal-container flex flex-col w-full max-w-prose">
      <div class="px-4 py-4 flex items-center gap-4 bg-white border-b rounded-t-lg">
        <LoginForm 
          ref="form2modal"
          @success="onLoginSuccess"
        />
      </div>

      <div class="modal-content-container px-4 overflow-y-auto bg-white rounded-b-lg">
        <div
          v-show="!inputText"
          class="p-16 flex flex-col justify-center items-center gap-y-8 text-purple-400"
        >
          <h6>En kaffe? ... Takk!</h6>
          <p>
            Spons dette prosjektet og få tilgang til de mest omtalte sidene.
          </p>
          <span>
            <button
              id="escapeBtn"
              class="shrink-0 px-2 py-1 text-xs text-gray-400 hover:text-gray-600 font-mono font-bold hover:bg-gray-50 border border-gray-400 hover:border-gray-600 rounded transition-colors duration-300"
              title="Går tilbake ett steg!"
              @click="router.back()"
            >
              Esc
            </button>
            &nbsp;
            <button
              class="shrink-0 px-2 py-1 text-xs text-gray-400 hover:text-gray-600 font-mono font-bold hover:bg-gray-50 border border-gray-400 hover:border-gray-600 rounded transition-colors duration-300"
              title="Info om sponsing!"
              @click="sponseInfo"
            >
              Spons
            </button>
          </span>
          <div
            id="sponseInfo" 
            class="hide-content"
          >
            <p>
              Takk for at du vil gi!
              <br>
              Gud velsigne deg!
            </p>
            <span>
              <button
                class="shrink-0 px-2 py-1 text-xs text-gray-400 hover:text-gray-600 font-mono font-bold hover:bg-gray-50 border border-gray-400 hover:border-gray-600 rounded transition-colors duration-300"
                title="Motta brukernavn og passord!"
                @click="toggleElement('emailPassord')"
              >
                Få login-data
              </button>
              &nbsp;
              <button
                class="shrink-0 px-2 py-1 text-xs text-gray-400 hover:text-gray-600 font-mono font-bold hover:bg-gray-50 border border-gray-400 hover:border-gray-600 rounded transition-colors duration-300"
                title="Info om hvordan du kan gi!"
                @click="toggleElement('vippsInfo')"
              >
                Vipps
              </button>
            </span>
            <p id="vippsInfo">
              Vipps kommer! <br>
              Kontonr.: 1503 78 35835
            </p>
            <p id="emailPassord">
              Login: 
              <br>
              <b>"user@gmail.com"</b><br>
              <b>{{ useFormPassword() }}
              </b>
            </p>
          </div>
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

/*
  visibility: hidden
*/
</style>