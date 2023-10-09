import Markdown from '../../components/Markdown/Markdown';

const Contact1 = ({
  anchor,
  include_line,
  isAdmin,
  map_url,
  markdown_content,
}) => {
  return (
    <section id={anchor} tw="text-gray-600 relative">
      <div tw="absolute inset-0 bg-gray-600">
        <iframe
          frameBorder="0"
          height="100%"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src={map_url}
          title="map"
          tw="pointer-events-none opacity-70"
          width="100%"
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
