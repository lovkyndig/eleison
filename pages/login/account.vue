<script lang="ts" setup>
// cource: https://github.com/damien-hl/nuxt3-auth-example
definePageMeta({
})

const currentUser = useAuthUser()
</script>

<template>
  <div>
    <NuxtLayout name="base">
      <LoginInfo :user="currentUser" />
    </NuxtLayout>
  </div>
</template>
