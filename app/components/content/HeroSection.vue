<template>
  <u-container>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="flex flex-col justify-center gap-6 order-2 md:order-1">
        <div class="flex-1"></div>
        <div>
        <slot name="center"> </slot>
        <div>
          <u-button to="/termin" class="rounded-lg" size="xl"
          >Erstgespräch vereinbaren</u-button
          >
        </div>
        </div>
        <div class="flex flex-1 flex-col justify-end gap-2">
          <slot name="footer" ></slot>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <NuxtImg class="rounded-4xl" :src="image" />
      </div>
    </div>
  </u-container>
</template>

<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  ctaLabel: { type: String, default: "Termin vereinbaren" },
  ctaLink: { type: String, default: "/termin" },
  adultLabel: { type: String, default: "Erwachsene" },
  childLabel: { type: String, default: "Kinder" },
  image: { type: String, required: true },
});
</script>
