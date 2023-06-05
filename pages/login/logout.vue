<script lang="ts" setup>
// source: https://github.com/damien-hl/nuxt3-auth-example
const currentUser = useAuthUser()
const { logout } = useAuth()

const form = reactive({
  pending: false,
})

async function onLogoutClick() {
  try {
    form.pending = true
    await logout()
  }
  catch (error) {
    console.error(error)
  }
  finally {
    form.pending = false
    await navigateTo('../')
    // await navigateTo({ path: '../' })
  }
}

onMounted(() => {
  if (document) {
    onLogoutClick()
    console.log('Du ble logget ut!')
  }
})
</script>

<template>
  <div>
    <NuxtLayout name="base" />
  </div>
</template>
