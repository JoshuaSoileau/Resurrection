import SECTIONS from './sections-config';

export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'JoshuaSoileau/Resurrection',
    branch: 'master',
    base_url: 'https://netlify-cms-vercel-oath.vercel.app/',
  },
  local_backend: true,
  media_folder: 'public/img',
  public_folder: 'img',
  logo_url: 'https://resurrection.vercel.app/img/logo-favicon-2.jpeg',
  site_url: 'http://localhost:3000',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      folder: 'src/content/pages',
      create: true,
      slug: '{{slug}}',
      preview_path: 'pages/{{fields.slug}}',
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          default: 'This is a string',
        },
        {
          label: 'Slug',
          name: 'slug',
          widget: 'string',
          default: 'This is a string',
        },
        {
          label: 'Sections',
          name: 'sections',
          widget: 'list',
          label_singular: 'new',
          types: [...SECTIONS],
        },
      ],
    },
  ],
};
