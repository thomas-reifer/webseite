<script setup lang="ts">
const props = defineProps<{
  link: string
  text: string
}>()
</script>
<template>
  <NuxtLink class="flex items-center" :to="link">
    {{ text }} <u-icon class="mt-0.5" name="heroicons-chevron-right" />
  </NuxtLink>
</template>
