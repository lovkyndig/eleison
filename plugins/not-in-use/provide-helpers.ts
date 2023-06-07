// https://nuxt.com/docs/guide/directory-structure/plugins
// https://nuxt.com/docs/guide/directory-structure/plugins#automatically-providing-helpers
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}!`
    }
  }
})
/*
Can be used in templates like this:
<template>
  <div>
    {{ $hello('world') }}
  </div>
</template>

<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()
</script>
*/
