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
      <!-- Bild nur anzeigen, wenn data.image gesetzt ist -->

      <div :class="{'md:w-2/3': page?.meta?.image}">
        <ContentRenderer
          v-if="'body' in page && page.body"
          :value="page.body"
        />
        <div v-else>Not Found</div>
      </div>
      <nuxt-img
        v-if="
          'meta' in page &&
          page.meta &&
          typeof page.meta === 'object' &&
          'image' in page.meta &&
          page.meta.image
        "
        :src="String(page.meta.image)"
        :alt="`Bild zu ${'title' in page ? page.title : ''}`"
        class="rounded-lg w-full md:w-1/2 object-cover"
      />
    </div>
    <div v-else>Not Found</div>
  </u-container>
</template>
