<script setup lang="ts">
onMounted(() => {
  const w = window as any

  if (typeof w.gtag === 'function') {
    w.gtag('event', 'ads_conversion_Terminanfrage_abgeschlo_1', {})
  }
})
</script>

<template>
  <span style="display: none;" aria-hidden="true"></span>
</template>
