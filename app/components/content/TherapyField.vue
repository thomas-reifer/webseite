<template>
  <div :class="['grid grid-cols-1 md:grid-cols-2 gap-4 items-center']">
    <div
      :style="`--image-url: url(${props.src})`"
      class="bg-[image:var(--image-url)] md:h-full bg-center bg-cover rounded-lg h-30"
      :class="{ 'md:order-2': reverse }"
    ></div>
    <info-card
      :title="title"
      :description="description"
      :to="to"
      :class="{ 'md:order-1': reverse }"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  title: string;
  description: string;
  to?: string;
  reverse?: string;
}>();
</script>
