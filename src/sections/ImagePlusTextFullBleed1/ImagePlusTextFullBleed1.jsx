import Markdown from '../../components/Markdown/Markdown';
import tw from 'twin.macro';
import { getSectionColor, getProseColor } from '../../components/color-utils';

export default function Hero1({
  alignment,
  background_color,
  hide,
  image_url,
  include_line,
  isAdmin,
  markdown_content,
  max_content,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(background_color);
  const proseColor = getProseColor(background_color);

  return (
    <section css={[bgColor]}>
      <div css={[tw`flex justify-center`, !max_content ? tw`mx-auto` : '']}>
        {alignment == 'Image on left' ? (
          <div
            style={{
              backgroundImage: `url('${image_url}')`,
            }}
            tw="hidden bg-cover md:block md:w-2/5"
          ></div>
        ) : (
          ''
        )}
        <div
          css={[
            tw`flex items-center w-full max-w-3xl p-12 md:p-24 lg:p-32 mx-auto md:pr-12 md:w-3/5`,
            alignment == 'Image on right' && tw`mr-0`,
            alignment !== 'Image on right' && tw`ml-0`,
          ]}
        >
          <div css={[tw`w-full prose`, proseColor]}>
            {include_line ? (
              <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
            ) : (
              ''
            )}
            <Markdown content={markdown_content} isAdmin={isAdmin} />
          </div>
        </div>
        {alignment == 'Image on right' ? (
          <div
            style={{
              backgroundImage: `url('${image_url}')`,
            }}
            tw="hidden bg-cover md:block md:w-2/5"
          ></div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
