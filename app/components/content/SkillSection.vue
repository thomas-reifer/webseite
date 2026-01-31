<template>
  <section class="my-30">
    <u-container>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-3 md:grid-rows-2 gap-4 sm:max-h-120 md:max-h-110"
      >
        <template v-for="(vnode, index) in skillChildren" :key="index">
          <component :is="vnode" :class="getOrder(index)" />
        </template>
        <div
          v-if="imageSrc"
          class="colspan-1 sm:col-span-2 md:col-span-1 md:row-span-2 order-3 md:order-2"
        >
          <NuxtImg
            fit="fill"
            :src="imageSrc"
            class="rounded-lg w-full h-full object-cover m-0!"
          />
        </div>
      </div>
    </u-container>
  </section>
</template>

<script setup lang="ts">
import { useSlots, computed, type VNode } from "vue";
const props = defineProps<{
  imageSrc: string;
}>();

const slots = useSlots();

// nur direkte Kinder des Default-Slots nehmen
const skillChildren = computed<VNode[]>(() => {
  return slots.default ? slots.default() : [];
});

function getOrder(index: number): string {
  switch (index) {
    case 0:
      return "order-1";
    case 1:
      return "order-2 md:order-3";
    case 2:
      return "order-4";
    case 3:
      return "order-5";
    default:
      return "";
  }
  return `order-${index + 1}`;
}
</script>
