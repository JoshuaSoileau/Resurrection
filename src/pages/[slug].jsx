import Head from 'next/head';
import { map } from 'awaity/esm';
import convertMarkdownToHtml from '../utils/convertMarkdownToHtml';

import Builder from 'components/builder/Builder';

const Page = ({ title, image, sections }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={image} />
      </Head>
      {sections?.map(({ type, ...props }) => {
        return <Builder type={type} {...props} />;
      })}
      ;
    </>
  );
};

export async function getStaticProps({ params }) {
  const content = await import(`../content/pages/${params.slug}.md`);
  const { attributes } = content;
  let { sections } = attributes || {};

  sections = await map(
    sections,
    async section => await convertMarkdownToHtml(section),
  );

  return { props: { ...attributes, sections } };
}

export const getStaticPaths = async () => {
  const postSlugs = (context => {
    const keys = context.keys();
    const data = keys.map(key => {
      const slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../content/pages', true, /\.md$/));

  const paths = postSlugs.map(slug => {
    return `/${slug}`;
  });

  return {
    paths,
    fallback: false,
  };
};

export default Page;
