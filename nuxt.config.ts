// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
// Umami Konfiguration (Host & ID bleiben gleich)
  umami: {
    id: "13d17051-d310-4ca4-ae6a-ebe72b37580f",
    host: "https://cloud.umami.is",
    autoTrack: true,
  },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxtjs/seo", "@nuxt/content", "nuxt-umami"],
  content: {
    experimental: { nativeSqlite: true },
  },
  colorMode: {
    preference: "light",
  },
  site: {
    url: "https://thomasreifer.com",
    name: "Dr. Thomas Reifer",
    description: "Psychologe in Bozen (Südtirol). Psychologische Beratung, Diagnostik und psychotherapeutische Begleitung für Erwachsene und Jugendliche – vor Ort oder online.",
    defaultLocale: "de",
  },
  robots: {
    sitemap: 'https://thomasreifer.com/sitemap.xml',
  },
  ogImage: {
    defaults: {
      component: 'OgImageTemplate'
    }
  },
  security: {
    headers: {
      strictTransportSecurity: {
        maxAge: 31536000,
        includeSubdomains: true,
        preload: true
 	}
      }
    }
});
