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
  logo_url: 'https://resurrection.vercel.app/img/z-logo-favicon-2.jpeg',
  site_url: 'http://resurrection.vercel.app',
  collections: [
    {
      name: 'pages',
      label: 'Pages',
      folder: 'src/content/pages',
      create: true,
      slug: '{{slug}}',
      preview_path: '{{fields.slug}}',
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
    {
      name: 'navigation',
      label: 'Navigation',
      files: [
        {
          file: 'src/content/navigation/header.md',
          label: 'Header links',
          name: 'header',
          fields: [
            {
              label: 'Links',
              name: 'links',
              widget: 'list',
              fields: [
                { label: 'Text', name: 'text', widget: 'string' },
                { label: 'URL', name: 'url', widget: 'string' },
              ],
            },
          ],
        },
        {
          file: 'src/content/navigation/footer.md',
          label: 'Footer links',
          name: 'footer',
          fields: [
            {
              label: 'Links',
              name: 'links',
              widget: 'list',
              fields: [
                { label: 'Text', name: 'text', widget: 'string' },
                { label: 'URL', name: 'url', widget: 'string' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
