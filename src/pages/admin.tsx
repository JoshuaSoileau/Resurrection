/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic';
import config from 'cms/config';
import Preview from 'cms/previews/Preview';
import Spinner from 'components/icons/Spinner';

import withStyledComponentsRendered from './../../withStyledComponentsRendered';

const CMS = dynamic(
  (): any =>
    import('netlify-cms-app').then((cms: any) => {
      cms.init({ config });
      // cms.registerPreviewStyle('../css/tailwind.css');
      // cms.registerPreviewStyle(
      //   'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css'
      // );
      // cms.registerPreviewStyle(
      //   'https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css'
      // );
      cms.registerPreviewTemplate(
        'home',
        withStyledComponentsRendered(Preview)
      );
      cms.registerPreviewTemplate(
        'pages',
        withStyledComponentsRendered(Preview)
      );
    }),
  {
    // eslint-disable-next-line react/display-name
    loading: () => <Spinner className="animate-spin" fill="white" width="20" />,

    ssr: false,
  }
);

const AdminPage: React.FC = () => {
  return <CMS />;
};

export default AdminPage;
