<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { data } = await useAsyncData("home", () =>
  queryCollection("content").path(`/`).first()
);

// SEO Meta Tags für die Startseite
const pageTitle = computed(() => {
  if (data.value?.meta?.title) return data.value.meta.title
  return 'Psychologe in Bozen (Südtirol) – Thomas Reifer'
})

const pageDescription = computed(() => {
  if (data.value?.meta?.description) return data.value.meta.description
  return 'Psychologe in Bozen (Südtirol). Psychologische Beratung, Diagnostik und psychologische Therapie für Erwachsene und Jugendliche. Termine in Bozen oder online möglich.'
})

const pageUrl = computed(() => 'https://thomasreifer.com/')
const pageImage = computed(() => 'https://thomasreifer.com/portrait.jpg')

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  keywords: 'Psychologe Bozen, Psychologische Therapie Bozen, Psychologische Beratung Bozen, Klinischer Psychologe Bozen, Psychologische Diagnostik Bozen, Depression Bozen, Angststörung Bozen, Burnout Bozen, Stressbewältigung Bozen, Panikattacken Bozen, Zwangsstörung Bozen, EMDR Bozen, Schlafstörungen Bozen, Psychosomatik Bozen, Südtirol Psychologe, Online Therapie Südtirol',
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage: pageImage,
  ogUrl: pageUrl,
  ogType: 'website',
  ogLocale: 'de_IT',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: pageImage,
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
  ],
})

// SEO Meta Tags für die Seite
useHead(data.value?.head || {})
useSeoMeta(data.value?.seo || {})
</script>

<template>
  <div class="no-underline w-screen prose max-w-full">
      <ContentRenderer v-if="data?.body" :value="data.body" class="" />
      <div v-else>Not Found</div>
  </div>
</template>