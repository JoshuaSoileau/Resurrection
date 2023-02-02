import Markdown from '../../components/Markdown/Markdown';
import tw from 'twin.macro';

export default function Hero1({
  alignment,
  dark_mode,
  hide,
  include_line,
  isAdmin,
  markdown_content,
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
    <section css={[!dark_mode && tw`bg-white`, dark_mode && tw`bg-gray-900`]}>
      <div
        css={[
          tw`max-w-xl mx-auto  px-4 md:px-0 py-24 md:py-32`,
          textAlignment[alignment],
        ]}
      >
        {include_line ? (
          <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
        ) : (
          ''
        )}
        <div
          css={[
            tw`w-full prose prose-sm md:prose lg:prose-lg mx-auto`,
            dark_mode && tw`prose-invert md:prose-invert lg:prose-invert`,
          ]}
        >
          <Markdown content={markdown_content} isAdmin={isAdmin} />
        </div>
      </div>
    </section>
  );
}
