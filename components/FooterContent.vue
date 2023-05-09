<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div class="py-4 flex justify-center items-center">
    <div class="flex flex-col md:flex-row gap-4 text-xs text-gray-400 text-center">
      <p v-if="appConfig.basic.author">
        Copyright {{ (new Date()).getFullYear() }}

        <a
          v-if="appConfig.basic.email"
          :href="`mailto:${appConfig.basic.email}`"
          class="text-blue-400"
        >{{
          appConfig.basic.author }}</a>
        <span v-else>{{ appConfig.basic.author }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
