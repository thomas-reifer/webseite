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
  title: "Psychologe in Bozen (Südtirol) – Dr. Thomas Reifer",
  description:
    "Psychologe in Bozen (Südtirol): Psychologische Beratung, Diagnostik und psychotherapeutische Behandlung für Jugendliche und Erwachsene. Unterstützung bei Depression, Ängsten, Burnout, ADHS und Trauma – vor Ort in Bozen oder online.",
  keywords: "Psychologe Bozen, Psychologe Südtirol, Psychotherapie Bozen, Psychologische Beratung Südtirol, Therapie Bozen, Depression Bozen, Angsttherapie Südtirol, ADHS Diagnostik Bozen, EMDR Südtirol",
  ogTitle: "Psychologe in Bozen (Südtirol) – Dr. Thomas Reifer",
  ogDescription: "Psychologische Beratung, Diagnostik und Therapie für Jugendliche und Erwachsene in Bozen (Südtirol). Termine vor Ort oder online.",
  ogImage: "https://thomasreifer.com/portrait.jpg",
  ogUrl: "https://thomasreifer.com/",
  ogType: "website",
  ogLocale: "de_IT",
  twitterTitle: "Psychologe in Bozen (Südtirol) – Dr. Thomas Reifer",
  twitterDescription:
    "Psychologische Beratung und Therapie in Bozen (Südtirol) – für Jugendliche und Erwachsene, vor Ort oder online.",
  twitterImage: "https://thomasreifer.com/portrait.jpg",
  twitterCard: "summary_large_image",
});

// Structured Data für LocalBusiness/MedicalBusiness (JSON-LD)
// Finaler, vollständiger Code-Block für Semrush & Google
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      // WICHTIG: Kombiniert Psychologe + Business für maximale Kompatibilität
      '@type': ['Psychologist', 'MedicalBusiness'], 
      '@id': 'https://thomasreifer.com/#organization',
      name: 'Dr. Thomas Reifer',
      alternateName: 'Psychologe Bozen',
      description: 'Psychologe in Bozen (Südtirol) - Psychologische Beratung, Diagnostik und psychotherapeutische Behandlung für Jugendliche und Erwachsene.',
      url: 'https://thomasreifer.com',
      logo: 'https://thomasreifer.com/logo.png',
      image: 'https://thomasreifer.com/portrait.jpg',
      telephone: '+393937070062', 
      email: 'info@thomasreifer.com',
      
      // ✅ Diese beiden Zeilen lösen die Semrush-Fehler auf
      medicalSpecialty: 'Psychology',
      serviceType: 'Psychological Services', 

      memberOf: {
        '@type': 'Organization',
        name: 'Psychologenkammer der Provinz Bozen',
        url: 'https://www.psibz.org/suche-mitglieder/mitgliederverzeichnis/thomas-reifer.html'
      },    
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sparkassenstraße 15', 
        addressLocality: 'Bozen',
        postalCode: '39100',
        addressRegion: 'Südtirol',
        addressCountry: 'IT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '46.49943',  
        longitude: '11.34955',
      },
      areaServed: [
        { '@type': 'City', name: 'Bozen' },
        { '@type': 'City', name: 'Meran' },
        { '@type': 'City', name: 'Brixen' },
        { '@type': 'City', name: 'Sterzing' },
        { '@type': 'State', name: 'Südtirol' }
      ],
      priceRange: '€€',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:30',
        closes: '18:30'
      },
      knowsAbout: [
        'Psychology', 'Psychotherapy', 'Stressmanagement', 'Burnout-Prävention', 
        'Depressionstherapie', 'Angststörungen', 'Zwangsstörungen', 'Traumatherapie', 
        'Persönlichkeitsstörungen', 'Psychosomatik', 'Chronische Schmerzen', 
        'Orientierungshilfe', 'Entscheidungscoaching', 'EMDR', 'ADHS Diagnostik', 
        'Kognitive Verhaltenstherapie', 'Online-Therapie'
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://thomasreifer.com/#person',
      name: 'Thomas Reifer',
      alternateName: 'Dr. Thomas Reifer',
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
              Dr. Thomas Reifer</nuxt-link
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
	  <StickyBooking
        v-if="!['/datenschutz', '/impressum', '/termin'].includes(route.path)"
      />
    </div>

    <footer class="text-white text-left text-sm bg-dark">
      <u-container>
        <div class="flex justify-between">
          <div class="flex flex-col gap-2 p-6 items-start">
            <p class="font-bold text-lg">Dr. Thomas Reifer</p>
         
        <p class="-mt-2">Psychologe · Eingetragen in der <a href="https://www.psibz.org/suche-mitglieder/mitgliederverzeichnis/thomas-reifer.html" target="_blank" rel="noopener" class="underline hover:text-primary transition-colors">Psychologenkammer der Provinz Bozen </a> </p>
        <p class="-mt-2 opacity-90">Psychotherapeut i.A. u. Supervision (KVT mit interpersonalem Schwerpunkt)</p>       

            <div class="mt-2 opacity-80">
              <p class="">+39 393 7070062</p>
              <p>info@thomasreifer.com</p>
				<a href="https://www.linkedin.com/in/thomas-reifer" target="_blank" rel="noopener" class="flex items-center gap-1 mt-1 hover:text-primary transition-colors">
					<Icon name="entypo-social:linkedin-with-circle" size="16" />
					LinkedIn
					</a>
            </div>

            <div class="mt-2 opacity-80">
              <p>Sparkassenstraße 15</p>
              <p>39100 Bozen (BZ), Südtirol, Italien</p>
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
