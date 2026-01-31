<script setup>
const slug = useRoute().params.slug;
const { data:page } = await useAsyncData(slug, () =>
  queryCollection("content").path(`/blog/${slug}`).first()
);
// SEO Meta Tags für die Seite
useHead(page.value?.head || {})
useSeoMeta(page.value?.seo || {})
</script>

<template>
 <u-container class="prose no-underline">
  {{ page?.head }}
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Not Found</div>
  </u-container>
</template>
