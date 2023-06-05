<script setup lang="ts">
// console.log('LoginContent calling LoginModal')
const showLoginModal = useState('showLoginModal')
showLoginModal.value = true
</script>
<template>
  <div 
    class="p-6 border bg-white dark:bg-black dark:border-gray-700 rounded"
  >
    <ClientOnly>
      <LoginModal v-show="showLoginModal" />
    </ClientOnly>
    <div 
      id="logincontent" 
      class="hidelogincontent"
    >
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.hidelogincontent {
  display: none;
  visibility: hidden
}
/* display none not working */
</style>