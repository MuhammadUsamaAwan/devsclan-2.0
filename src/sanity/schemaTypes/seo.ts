import { defineField, defineType } from 'sanity';

export const seoType = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for search engines (recommended under 60 characters).',
      validation: rule => rule.required().max(60),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'A brief description for SEO (under 160 characters).',
      validation: rule => rule.required().max(160),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Preferred URL to avoid duplicate content issues.',
    }),
    defineField({
      name: 'robotsMeta',
      title: 'Robots Meta Tag',
      type: 'string',
      description: 'Control search engine crawling/indexing behavior.',
      options: {
        list: [
          { title: 'Index & Follow', value: 'index, follow' },
          { title: 'No Index & Follow', value: 'noindex, follow' },
          { title: 'Index & No Follow', value: 'index, nofollow' },
          { title: 'No Index & No Follow', value: 'noindex, nofollow' },
        ],
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social media previews (Facebook, LinkedIn, etc.).',
    }),
    defineField({
      name: 'twitterCard',
      title: 'Twitter Card',
      type: 'string',
      description: 'Card type for Twitter.',
      options: {
        list: [
          { title: 'Summary', value: 'summary' },
          { title: 'Summary Large Image', value: 'summary_large_image' },
        ],
      },
    }),
    defineField({
      name: 'twitterImage',
      title: 'Twitter Card Image',
      type: 'image',
      description: 'Image used when the link is shared on Twitter.',
    }),
    defineField({
      name: 'schemaMarkup',
      title: 'Schema Markup (JSON-LD)',
      type: 'text',
      description: 'Custom JSON-LD for rich snippets.',
    }),
  ],
});
