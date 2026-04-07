<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection("content").path(route.path).first();
});

// SEO Meta Tags für die Seite
useHead(page.value?.head || {});
useSeoMeta(page.value?.seo || {});
</script>

<template>
  <u-container class="prose no-underline">
    <div v-if="page" class="flex flex-col md:flex-row gap-6 items-start">
      
      <div :class="{'md:w-2/3': page?.meta?.image}">
        <ContentRenderer
          v-if="'body' in page && page.body"
          :value="page.body"
        />
        <div v-else>Not Found</div>
      </div>

      <nuxt-img
        v-if="page?.meta?.image"
        :src="String(page.meta.image)"
        :alt="page.title ? page.title + ' - Psychologe Dr. Thomas Reifer Bozen' : 'Dr. Thomas Reifer'"
        loading="lazy"
        width="600"
        height="800"
        class="rounded-lg w-full md:w-1/2 object-cover"
      />
      
    </div>
    <div v-else>Not Found</div>
  </u-container>
</template>
