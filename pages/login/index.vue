<script setup lang="ts">
// source: https://github.com/damien-hl/nuxt3-auth-example
definePageMeta({
})

const currentUser = useAuthUser()
</script>

<template>
  <div>
    <NuxtLayout name="base">
      <LoginInfo :user="currentUser" />
      <ClientOnly>
        <LoginModal />
      </ClientOnly>
    </NuxtLayout>
  </div>
</template>
