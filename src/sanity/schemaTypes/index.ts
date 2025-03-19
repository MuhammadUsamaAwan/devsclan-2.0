import { type SchemaTypeDefinition } from 'sanity';

import { seoType } from './seo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seoType],
};
