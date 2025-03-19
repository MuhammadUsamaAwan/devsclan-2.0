import { type SchemaTypeDefinition } from 'sanity';

import { heroSectionType } from './heroSection';
import { pageType } from './page';
import { seoType } from './seo';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [seoType, pageType, heroSectionType],
};
