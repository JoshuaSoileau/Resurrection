import { map } from 'awaity/esm';
import Builder from 'components/builder/Builder';
import Head from 'next/head';

import convertMarkdownToHtml from '../utils/convertMarkdownToHtml';

const Page = ({ image, sections, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={image} property="og:image" />
      </Head>
      {sections?.map(({ type, ...props }) => {
        return <Builder key={type} type={type} {...props} />;
      })}
    </>
  );
};

export async function getStaticProps({ params }) {
  const content = await import(`../content/pages/${params.slug}.md`);
  const { attributes } = content;
  let { sections } = attributes || {};

  sections = await map(
    sections,
    async (section) => await convertMarkdownToHtml(section)
  );

  return { props: { ...attributes, sections, slug: params.slug } };
}

export const getStaticPaths = async () => {
  const postSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key) => {
      const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);

      return slug;
    });
    return data;
  })(require.context('../content/pages', true, /\.md$/));

  const paths = postSlugs.map((slug) => {
    return `/${slug}`;
  });

  return {
    fallback: false,
    paths,
  };
};

export default Page;
