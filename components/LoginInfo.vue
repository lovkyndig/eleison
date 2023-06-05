<script lang="ts" setup>
// source: https://github.com/damien-hl/nuxt3-auth-example
import type { UserWithoutPassword } from '~/types/types'

defineProps<{ user: UserWithoutPassword | null }>()
</script>

<template>
  <code
    block
    mb-3
    text="lg light-100"
  >
    <pre>current user: {{ JSON.stringify(user, null, 2) }}</pre>
  </code>
</template>
