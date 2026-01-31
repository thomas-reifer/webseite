// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxtjs/seo", "@nuxt/content"],
  content: {
    experimental: { nativeSqlite: true },
  },
  colorMode: {
    preference: "light",
  },
  site: {
    url: "https://thomasreifer.com",
    name: "Thomas Reifer, MSc.",
    description: "Psychologe in Bozen (Südtirol). Psychologische Beratung, Diagnostik und psychotherapeutische Begleitung für Erwachsene und Jugendliche – vor Ort oder online.",
    defaultLocale: "de",
  },
  robots: {
    groups: [
      { userAgent: ['GPTBot', 'ChatGPT-User'], disallow: ['/'] }
    ],
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