<script setup lang="ts">
/*
const showLoginModal = useState('showLoginModal')
showLoginModal.value = true
const props = defineProps({
  email: {
    type: String,
    default: useFormEmail()
  },
  password: {
    type: String,
    default: useFormPassword()
  }
})
*/

</script>

<template>
  <div 
    class="p-6 border bg-white dark:border-gray-700 rounded"
  >
    <!--
    <ClientOnly>
      <LoginModal
        v-show="showLoginModal"
      />
    </ClientOnly>
    -->
    <div 
      id="logincontent" 
      class="hide-content"
    >
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.hide-content {
  display: none;
  visibility: hidden
}
/* 
display none not hiding element in dom
https://vuejs.org/guide/essentials/conditional.html#v-show
*/
</style>