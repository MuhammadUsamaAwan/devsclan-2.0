import { defineField, defineType } from 'sanity';

export const textBlockType = defineType({
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'The title of the text block.',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'The body of the text block.',
      type: 'string',
      validation: rule => rule.required(),
    }),
  ],
});
