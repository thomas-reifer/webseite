<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<{
  to: string;
  children?: ContentNavigationItem[];
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
  <div>
    <UPopover v-if="children && children.length > 0">
      <a-link >
        <slot />
      </a-link>
      <template #content>
        <div class="max-w-120 w-screen bg-white rounded-md  p-4">
          <a-link
            v-for="child in children"
            :key="child.title"
            :to="child.path"
            class="block py-1 w-full"
            >{{ child.title }}</a-link
          >
        </div>
      </template>
    </UPopover>
    <a-link v-else :to="to">
      <slot />
    </a-link>
  </div>
</template>
