import { defineField, defineType } from 'sanity';

export const heroSectionType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the hero section.',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The subtitle of the hero section.',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      description: 'The text for the call-to-action button.',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      description: 'The link for the call-to-action button.',
      type: 'url',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'The image for the hero section.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: rule => rule.required(),
    }),
  ],
});
