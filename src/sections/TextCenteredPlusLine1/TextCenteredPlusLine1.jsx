import Markdown from '../../components/Markdown/Markdown';
import tw from 'twin.macro';

export default function Hero1({
  alignment,
  hide,
  include_line,
  markdown_content,
  isAdmin,
}) {
  if (hide) return '';

  const lineAlignment = {
    left: tw`text-left`,
    center: tw`text-center`,
    right: tw`text-right`,
  };

  const textAlignment = {
    left: tw`text-left`,
    center: tw`text-center`,
    right: tw`text-right`,
  };

  return (
    <section tw="bg-white">
      <div
        css={[tw`max-w-xl mx-auto  py-24 md:py-32`, textAlignment[alignment]]}
      >
        {include_line ? (
          <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
        ) : (
          ''
        )}
        <div tw="w-full prose prose-lg mx-auto">
          <Markdown content={markdown_content} isAdmin={isAdmin} />
        </div>
      </div>
    </section>
  );
}
