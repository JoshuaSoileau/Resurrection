import getEitherCmsOrDefaults from '../../utils/getEitherCmsOrDefaults';
import SectionConfig from './Contact1.field.json';
import Markdown from '../../components/Markdown/Markdown';
import tw from 'twin.macro';

const Contact1 = ({ map_url, include_line, isAdmin, markdown_content }) => {
  return (
    <section tw="text-gray-600 relative">
      <div tw="absolute inset-0 bg-gray-600">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src={map_url}
          tw="pointer-events-none opacity-70"
        ></iframe>
      </div>
      <div tw="container px-5 py-24 mx-auto flex">
        <div tw="lg:w-1/3 md:w-1/2 bg-white p-12 lg:p-20 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 min-w-20">
          {include_line ? (
            <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
          ) : (
            ''
          )}
          <div tw="w-full prose-sm md:prose mx-auto">
            <Markdown content={markdown_content} isAdmin={isAdmin} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
