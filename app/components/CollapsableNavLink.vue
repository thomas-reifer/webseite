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
    <UCollapsible v-if="children && children.length > 0">
      <div class="flex justify-between group my-1">
      <a-link class="" >
        <slot />
      </a-link>
      <UIcon name="heroicons-chevron-down" class="group-data-[state=open]:rotate-180 transition-transform duration-200"></UIcon>
      </div>
      <template #content>
        <div class="p-4 pt-0">
          <a-link
            v-for="child in children"
            :key="child.title"
            :to="child.path"
            class="block w-full my-1"
            >{{ child.title }}</a-link
          >
        </div>
      </template>
    </UCollapsible>
    <div v-else class="my-1">
    <a-link :to="to">
      <slot />
    </a-link>
    </div>
  </div>
</template>
