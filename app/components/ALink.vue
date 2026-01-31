<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  to?: string;
}>();

const hover = ref(false);
const route = useRoute();

const isActive = computed(() => {
  // Check if the current route matches the "to" prop path
  if (typeof props.to === "string") {
    return route.path === props.to;
  } else if (props.to) {
    return route.path === props.to;
  }
  return false;
});
</script>

<style scoped>
/* Initial short underline */
.underline-short {
  text-decoration: none;
}

/* Full underline when active */
.underline-full {
  text-decoration: none;
}
</style>
<template>
  <NuxtLink
    :to="to"
    
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    :aria-current="isActive ? 'page' : null"
  >
    <div :class="[
      'relative inline-block',
      isActive ? 'underline-full text-primary' : 'underline-short',
      hover ? 'underline-full text-primary' : 'underline-short',
    ]">
      <slot />
      <!-- Underline -->
      <span
        class="absolute bottom-0 left-0 h-0.5 rounded transition-all duration-500 ease-in-out"
        :class="{
          'w-full': hover || isActive,
          'w-6': !hover && !isActive,
          'bg-primary': hover || isActive,
        }"
      ></span>
    </div>
  </NuxtLink>
</template>
