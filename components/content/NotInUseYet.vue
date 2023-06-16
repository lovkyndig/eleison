<script setup lang="ts">
// This is a copy of TipBox.vue - not in use yet.
const props = defineProps<{
  icon?; string;
  type?: string;
  name?: string;
}>()

const iconValue = ref('')
const nameValue = ref('')

const typeValue = props.type ? props.type.toLowerCase() : ''

if (props.icon) {
  // eslint-disable-next-line vue/no-setup-props-destructure
  iconValue.value = props.icon
}

if (props.name) {
  // eslint-disable-next-line vue/no-setup-props-destructure
  nameValue.value = props.name
}

const containerClass = ref('')

if (!nameValue.value) {
  containerClass.value += ' ' + 'flex items-center gap-4'
}
</script>

<template>
  <div>
    <p
      v-if="nameValue"
      class="font-bold flex items-center gap-2"
    >
      <IconCustom
        v-if="iconValue"
        :name="iconValue"
        class="w-4 h-4"
      />
      <span v-if="nameValue">{{ nameValue }}</span>
    </p>

    <IconCustom
      v-else-if="iconValue && !nameValue"
      :name="iconValue"
      class="w-4 h-4"
    />
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
