<script setup>
const { data } = await useAsyncData("termin", () =>
  queryCollection("content").path(`/termin`).first()
);

const route = useRoute();
const services = computed(() => data.value.meta.services);
const showAppointmentMaker = computed(() => {
  return route.query.dev === "true" && services.value.length > 0;
});

// SEO Meta Tags für die Seite
useHead(data.value?.head || {})
useSeoMeta(data.value?.seo || {})
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
  <u-container class="prose no-underline">
    <ContentRenderer v-if="data" :value="data" />
    <div v-if="showAppointmentMaker">
      <iframe src="https://schedulify-app.netlify.app/book/xmlntebu" class="mb-10" width="100%" height="600" frameborder="0"></iframe>
    </div>
    <!-- <AppointmentMaker v-if="showAppointmentMaker" :services="services" class="mt-6" /> -->
  </u-container>
</template>
