<script lang="ts" setup>
// source: https://github.com/damien-hl/nuxt3-auth-example
const emit = defineEmits(['success'])

const { login } = useAuth()

const form = reactive({
  data: {
    email: useFormEmail(),
    password: useFormPassword(),
    rememberMe: false,
  },
  error: '',
  pending: false,
})

async function onLoginClick() {
  try {
    form.error = ''
    form.pending = true

    await login(form.data.email, form.data.password, form.data.rememberMe)
    
    emit('success')
  }
  catch (error: any) {
    console.error(error)

    if (error.data.message)
      form.error = error.data.message
  }
  finally {
    form.pending = false
  }
}
// console.log('Transfer values to LoginModal, from content/LoginForm')
const email = ref(form.data.email)
const password = ref(form.data.password)
defineExpose({
  email,
  password,
})
</script>

<template>
  <p
    v-if="form.error"
    class="mb-3 text-red-500"
  >
    {{ form.error }}
  </p>
  <form @submit.prevent="onLoginClick">
    <div class="px-4 py-4 flex items-center gap-4 bg-white rounded-t-lg">
      <button
        type="submit"
        :disabled="form.pending"
        class="btn text-purple-500 hover:bg-purple-100 opacity-90 transition-opacity duration-300"
      >
        Login
      </button>
      <input
        v-model="form.data.email"
        type="email"
        placeholder="Email"
        required
        maxlength="20" 
        size="14"
      >
      <input
        v-model="form.data.password"
        type="password"
        placeholder="Password"
        required
        maxlength="10" 
        size="8"
      >
      <button
        class="flex justify-center items-center"
      >
        <IconCustom
          name="solar:lock-password-unlocked-outline"
          class="shrink-0 w-6 h-6 text-gray-600"
        />
      </button>
    </div>
  </form>
</template>
