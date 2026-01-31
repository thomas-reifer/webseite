// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/ui", "@nuxtjs/seo", "@nuxt/content", "nuxt-studio"],
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
  },
  studio: {
    // Studio admin route (default: '/_studio')
    route: '/_studio',
    
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'thomas-reifer', // your GitHub/GitLab username or organization
      repo: 'thomasreifer-website', // your repository name
      branch: 'main', // the branch to commit to (default: main)
    }
  }
});