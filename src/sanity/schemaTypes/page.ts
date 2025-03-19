import { defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'The URL path for this page (e.g. /about).',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      description: 'SEO settings for this page.',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      description: 'Sections for this page.',
      type: 'array',
      of: [{ type: 'heroSection' }],
    }),
  ],
});
