import getEitherCmsOrDefaults from '../../utils/getEitherCmsOrDefaults';
import SectionConfig from './Contact1.field.json';
import Markdown from '../../components/Markdown/Markdown';

const Contact1 = ({ map_url, include_line, isAdmin, markdown_content }) => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-600">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src={map_url}
          className="pointer-events-none opacity-70"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white p-12 md:p-20 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          {include_line ? (
            <div className="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
          ) : (
            ''
          )}
          <div className="w-full prose prose-l mx-auto">
            <Markdown content={markdown_content} isAdmin={isAdmin} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
