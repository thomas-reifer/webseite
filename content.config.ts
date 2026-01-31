import { defineContentConfig, defineCollection } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";
import { asSchemaOrgCollection } from 'nuxt-schema-org/content'

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSitemapCollection(
        asSchemaOrgCollection({
          type: "page",
          source: "**/*.md",
        })
      )
    ),
  },
});
