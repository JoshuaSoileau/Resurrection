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
      fields: [
        {
          default: 'This is a string',
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          default: 'This is a string',
          label: 'Slug',
          name: 'slug',
          widget: 'string',
        },
        {
          label: 'Sections',
          label_singular: 'new',
          name: 'sections',
          types: [...SECTIONS],
          widget: 'list',
        },
      ],
      folder: 'src/content/pages',
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
              fields: [
                { label: 'Text', name: 'text', widget: 'string' },
                { label: 'URL', name: 'url', widget: 'string' },
              ],
              label: 'Links',
              name: 'links',
              widget: 'list',
            },
          ],
          file: 'src/content/navigation/header.md',
          label: 'Header links',
          name: 'header',
        },
        {
          fields: [
            {
              fields: [
                { label: 'Text', name: 'text', widget: 'string' },
                { label: 'URL', name: 'url', widget: 'string' },
              ],
              label: 'Links',
              name: 'links',
              widget: 'list',
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
