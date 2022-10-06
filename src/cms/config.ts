import Contact1 from 'sections/Contact1/Contact1.field.json';
console.log(Contact1);

const HEROS = [
  {
    label: 'Hero 1',
    name: 'Hero1',
    widget: 'object',
    fields: [
      {
        label: 'Hero Title',
        name: 'title',
        widget: 'string',
        default: 'This is a string',
      },
      {
        label: 'Hero Description',
        name: 'description',
        widget: 'markdown',
        default:
          'This is a default markdown string. It is longer than most strings because it is multiple sentences.',
      },
      {
        label: 'Hero Image',
        name: 'image',
        widget: 'image',
        default: 'https://placehold.co/1200x600',
      },
    ],
  },
  {
    label: 'Hero 2',
    name: 'Hero2',
    widget: 'object',
    fields: [
      {
        label: 'Hero Title',
        name: 'title',
        widget: 'string',
        default: 'This is a string',
      },
      {
        label: 'Hero Description',
        name: 'description',
        widget: 'markdown',
        default:
          'This is a default markdown string. It is longer than most strings because it is multiple sentences.',
      },
      {
        label: 'Hero Image',
        name: 'image',
        widget: 'image',
        default: 'https://placehold.co/1200x600',
      },
    ],
  },
  {
    label: 'Hero 3',
    name: 'Hero3',
    widget: 'object',
    fields: [
      {
        label: 'Hero Title',
        name: 'title',
        widget: 'string',
        default: 'This is a string',
      },
      {
        label: 'Hero Description',
        name: 'description',
        widget: 'markdown',
        default:
          'This is a default markdown string. It is longer than most strings because it is multiple sentences.',
      },
      {
        label: 'Hero Image',
        name: 'image',
        widget: 'image',
        default: 'https://placehold.co/1200x600',
      },
    ],
  },
];

const TEAMS = [
  {
    label: 'Team 1',
    name: 'Team1',
    widget: 'object',
    fields: [
      {
        label: 'Team members',
        name: 'team',
        widget: 'list',
        fields: [
          {
            label: 'Name',
            name: 'name',
            widget: 'string',
            default: 'This is a string',
          },
          {
            label: 'Description',
            name: 'description',
            widget: 'text',
            default:
              'This is the default text. It is a little longer than a title because it is a description and should be longer.',
          },
          {
            label: 'Position',
            name: 'position',
            widget: 'string',
            default: 'This is a string',
          },
          {
            label: 'Image',
            name: 'image',
            widget: 'image',
            default: 'https://placehold.co/600x400',
          },
        ],
      },
    ],
  },
  {
    label: 'Team 2',
    name: 'Team2',
    widget: 'object',
    fields: [
      {
        label: 'Team members',
        name: 'team',
        widget: 'list',
        fields: [
          {
            label: 'Name',
            name: 'name',
            widget: 'string',
            default: 'This is a string',
          },
          {
            label: 'Description',
            name: 'description',
            widget: 'text',
            default:
              'This is the default text. It is a little longer than a title because it is a description and should be longer.',
          },
          {
            label: 'Position',
            name: 'position',
            widget: 'string',
            default: 'This is a string',
          },
          {
            label: 'Image',
            name: 'image',
            widget: 'image',
            default: 'https://placehold.co/600x400',
          },
        ],
      },
    ],
  },
  {
    label: 'Team 3',
    name: 'Team3',
    widget: 'object',
    fields: [
      {
        label: 'Team members',
        name: 'team',
        widget: 'list',
        fields: [
          {
            label: 'Name',
            name: 'name',
            widget: 'string',
            default: 'This is a string',
          },
          {
            label: 'Description',
            name: 'description',
            widget: 'text',
            default:
              'This is the default text. It is a little longer than a title because it is a description and should be longer.',
          },
          {
            label: 'Position',
            name: 'position',
            widget: 'string',
            default: 'This is a string',
          },
          {
            label: 'Image',
            name: 'image',
            widget: 'image',
            default: 'https://placehold.co/600x400',
          },
        ],
      },
    ],
  },
];

const REPEATABLE_SECTIONS = [...HEROS, ...TEAMS, Contact1];

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
  logo_url: 'https://demo.serverless.page/img/logo-cms.jpg',
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
          types: [...REPEATABLE_SECTIONS],
        },
      ],
    },
  ],
};
