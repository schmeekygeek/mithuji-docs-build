import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Mithuji Backend API docs',
      social: { },
      sidebar: [
        {
          label: 'Getting started',
          link: '/introduction/getting-started'
        },
        {
          label: 'Customer',
          autogenerate: { directory: 'customer' },
        },
        {
          label: 'Suggestion',
          autogenerate: { directory: 'suggestion' },
        },
        {
          label: 'Quotation',
          autogenerate: { directory: 'quotation' },
        },
        {
          label: 'Category',
          autogenerate: { directory: 'category' },
        },
        {
          label: 'Product',
          autogenerate: { directory: 'product' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
