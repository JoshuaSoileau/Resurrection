import Markdown from '../../components/Markdown/Markdown';
import tw from 'twin.macro';
import {
  getOpacityValue,
  getProseColor,
  getSectionColor,
} from 'components/color-utils';

export default function Hero1({
  alignment,
  anchor,
  hide,
  image_url,
  include_line,
  isAdmin,
  markdown_content,
  opacity,
  overlay_color,
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

  const bgColor = getSectionColor(overlay_color);
  const proseColor = getProseColor(overlay_color);
  const opacityValue = getOpacityValue(opacity);

  return (
    <section css={[tw`relative`, bgColor]} id={anchor}>
      {image_url && (
        <img
          css={[tw`w-full h-full absolute inset-0 object-cover`, opacityValue]}
          src={image_url}
        />
      )}
      <div
        css={[
          tw`max-w-xl mx-auto  px-4 md:px-0 py-24 md:py-32`,
          textAlignment[alignment],
        ]}
      >
        <div
          css={[
            tw`w-full prose prose-sm md:prose lg:prose-lg mx-auto relative`,
            proseColor,
          ]}
        >
          {include_line ? (
            <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
          ) : (
            ''
          )}
          <Markdown content={markdown_content} isAdmin={isAdmin} />
        </div>
      </div>
    </section>
  );
}