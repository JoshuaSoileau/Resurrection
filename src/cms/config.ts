import SECTIONS from './sections-config';

export default {
  backend: {
    base_url: 'https://netlify-cms-vercel-oath.vercel.app/',
    branch: 'master',
    name: 'github',
    repo: 'JoshuaSoileau/Resurrection',
  },
  cms_manual_init: true,
  collections: [
    {
      create: true,
      folder: 'src/content/pages',
      fields: [
        {
          label: 'Title',
          name: 'title',
          default: 'This is a string',
          widget: 'string',
        },
        {
          label: 'Slug',
          name: 'slug',
          default: 'This is a string',
          widget: 'string',
        },
        {
          label: 'Sections',
          name: 'sections',
          label_singular: 'new',
          widget: 'list',
          types: [...SECTIONS],
        },
      ],
      label: 'Pages',
      name: 'pages',
      preview_path: '{{fields.slug}}',
      slug: '{{slug}}',
    },
    {
      files: [
        {
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
          file: 'src/content/navigation/header.md',
          label: 'Header links',
          name: 'header',
        },
        {
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
          file: 'src/content/navigation/footer.md',
          label: 'Footer links',
          name: 'footer',
        },
      ],
      label: 'Navigation',
      name: 'navigation',
    },
  ],
  local_backend: true,
  logo_url: 'https://resurrection.vercel.app/img/z-logo-favicon-2.jpeg',
  media_folder: 'public/img',
  public_folder: 'img',
  site_url: 'http://resurrection.vercel.app',
};
