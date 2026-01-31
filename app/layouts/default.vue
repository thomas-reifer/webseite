<script setup lang="ts">

var showMenu = ref(false);

const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content")
});
const navItems = data.value?.filter((i) => i.path !== "/") || [];

const route = useRoute();

watch(
  () => route.path,
  (newPath) => {
    showMenu.value = false;
  }
);

useSeoMeta({
  title: "Psychologe in Bozen (Südtirol) – Thomas Reifer, MSc.",
  description:
    "Psychologe in Bozen (Südtirol): Psychologische Beratung, Diagnostik und psychotherapeutische Behandlung für Jugendliche und Erwachsene. Unterstützung bei Depression, Ängsten, Burnout, ADHS und Trauma – vor Ort in Bozen oder online.",
  keywords: "Psychologe Bozen, Psychologe Südtirol, Psychotherapie Bozen, Psychologische Beratung Südtirol, Therapie Bozen, Depression Bozen, Angsttherapie Südtirol, ADHS Diagnostik Bozen, EMDR Südtirol",
  ogTitle: "Psychologe in Bozen (Südtirol) – Thomas Reifer, MSc.",
  ogDescription: "Psychologische Beratung, Diagnostik und Therapie für Jugendliche und Erwachsene in Bozen (Südtirol). Termine vor Ort oder online.",
  ogImage: "https://thomasreifer.com/portrait.jpg",
  ogUrl: "https://thomasreifer.com/",
  ogType: "website",
  ogLocale: "de_IT",
  twitterTitle: "Psychologe in Bozen (Südtirol) – Thomas Reifer, MSc.",
  twitterDescription:
    "Psychologische Beratung und Therapie in Bozen (Südtirol) – für Jugendliche und Erwachsene, vor Ort oder online.",
  twitterImage: "https://thomasreifer.com/portrait.jpg",
  twitterCard: "summary_large_image",
});

// Structured Data für LocalBusiness/MedicalBusiness (JSON-LD)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalBusiness',
      '@id': 'https://thomasreifer.com/#organization',
      name: 'Thomas Reifer, MSc.',
      alternateName: 'Psychologe Bozen',
      description: 'Psychologe in Bozen (Südtirol) - Psychologische Beratung, Diagnostik und psychotherapeutische Behandlung für Jugendliche und Erwachsene.',
      url: 'https://thomasreifer.com',
      logo: 'https://thomasreifer.com/logo.png',
      image: 'https://thomasreifer.com/portrait.jpg',
      telephone: '+4368181100843', // ✅ später ITA Nummer einfügen
      email: 'info@thomasreifer.com',
      /* Hier ausgeklammert weil später noch Praxis-Adresse eingefügt wird!!!!!!!!
	address: {
        '@type': 'PostalAddress',
        streetAddress: '', // ✅ bitte ausfüllen (oder ganz entfernen, wenn du keine Adresse zeigen willst)
        addressLocality: 'Bozen',
        postalCode: '39100',
        addressRegion: 'Südtirol',
        addressCountry: 'IT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '',  // ✅ Koordinaten in Bozen eintragen
        longitude: '',
      },
      */
      
	areaServed: [
        {
          '@type': 'City',
          name: 'Bozen',
        },
        {
          '@type': 'City',
          name: 'Meran',
        },
        {
          '@type': 'City',
          name: 'Brixen',
        },
	{
          '@type': 'City',
          name: 'Sterzing',
        },
        {
          '@type': 'State',
          name: 'Südtirol',
        }
      ],
      priceRange: '€€',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          // 'Monday',
          // 'Tuesday',
          // 'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '18:00',
      },
      medicalSpecialty: [
        'Clinical Psychology',
        'Psychotherapy',
        'Child Psychology',
        'Adult Psychology',
        'Psychological Assessment'
      ],
      serviceType: [
        'Klinisch-psychologische Therapie',
        'Psychologische Diagnostik',
        'Psychologische Beratung',
        'EMDR Therapie',
        'ADHS Diagnostik',
        'Traumatherapie',
        'Angsttherapie',
        'Depressionstherapie'
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://thomasreifer.com/#person',
      name: 'Thomas Reifer',
      alternateName: 'Thomas Reifer, MSc.',
      jobTitle: 'Psychologe',
      worksFor: {
        '@id': 'https://thomasreifer.com/#organization'
      },
      image: 'https://thomasreifer.com/portrait.jpg',
      url: 'https://thomasreifer.com',
    }
  ]
};

useHead({
  htmlAttrs: {
    lang: "de-IT",
  },
  link: [
/*
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
*/
    {
      rel: "canonical",
      href: "https://thomasreifer.com" + useRoute().path,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData),
    },
  ],
});
</script>
<template>
  <div class="min-h-screen flex flex-col justify-between bg-background">
    <div>
      <u-container>
        <nav class="flex justify-between my-6">
          <div class="text-xl flex items-center">
            <nuxt-link to="/" class="flex items-center gap-1 text-primary">
	     <!--
              <NuxtImg
                style=""
                src="/logo.png"
                alt="Thomas Reifer – Psychologe in Bozen (Südtirol)"
                width="60"
                class="inline text-primary"
              />
	     -->
              Thomas Reifer, MSc.</nuxt-link
            >
          </div>
          <div>
            <Icon
              @click="showMenu = true"
              size="20"
              name="heroicons-bars-2"
              class="me-4 cursor-pointer block md:hidden"
            />
          </div>
          <div class="md:flex gap-4 hidden">
            <nav-link
              v-for="navItem in navItems"
              :key="navItem.title"
              :to="navItem.path"
              :children="navItem.children"
              >{{ navItem.title }}</nav-link
            >
          </div>
          <USlideover v-model:open="showMenu" class="bg-background">
            <template #body>
              <List>
                <CollapsableNavLink
                  v-for="navItem in navItems"
                  :key="navItem.title"
                  :to="navItem.path"
                  :children="navItem.children"
                  >{{ navItem.title }}
                </CollapsableNavLink>
              </List>
            </template>
          </USlideover>
        </nav>
      </u-container>
      <slot />
      <Appointment
        v-if="!['/datenschutz', '/impressum', '/termin'].includes(route.path)"
      />
    </div>

    <footer class="text-white text-left text-sm bg-dark">
      <u-container>
        <div class="flex justify-between">
          <div class="flex flex-col gap-2 p-6 items-start">
            <p class="font-bold text-lg">Thomas Reifer, MSc.</p>
            <p class="-mt-2">Psychologe · Eingetragen in der Psychologenkammer der Provinz Bozen</p>
	    <p class="-mt-2">Psychotherapeut in Ausbildung unter Supervision (Schwerpunkt KVT)</p>

            <div class="mt-2 opacity-80">
              <p class="">+43 681 81100843</p>
              <p>info@thomasreifer.com</p>
            </div>

            <div class="mt-2 opacity-80">
              <p>Bozen</p>
              <p>39100 Südtirol, Italien</p>
            </div>
            <p class="mt-6">
              © 2026 |
              <NuxtLink to="/impressum">Impressum</NuxtLink> |
              <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
            </p>
          </div>
        <!--  
	<div class="m-2">
            <div class="p-1 bg-white">
              <a href="https://www.boep.or.at/" target="_blank" rel="noopener">
                <NuxtImg src="boep.jpg" alt="Mitglied-Böp" />
              </a>
            </div>
          </div>
	-->
        </div>
      </u-container>
    </footer>
  </div>
</template>
