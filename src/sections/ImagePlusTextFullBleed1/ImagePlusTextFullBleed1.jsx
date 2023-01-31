import Markdown from '../../components/Markdown/Markdown';
import tw from 'twin.macro';
import { getSectionColor, getProseColor } from '../../components/color-utils';

export default function Hero1({
  alignment,
  background_color,
  hide,
  image_url,
  markdown_content,
  max_content,
  isAdmin,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(background_color);
  const proseColor = getProseColor(background_color);

  return (
    <section css={[bgColor]}>
      <div
        css={[
          tw`flex justify-center`,
          !max_content ? tw`container mx-auto` : '',
        ]}
      >
        {alignment == 'Image on left' ? (
          <div
            tw="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage: `url('${image_url}')`,
            }}
          ></div>
        ) : (
          ''
        )}
        <div tw="flex items-center w-full max-w-3xl p-32 mx-auto lg:px-12 lg:w-3/5">
          <div css={[tw`w-full prose`, proseColor]}>
            <Markdown content={markdown_content} isAdmin={isAdmin} />
          </div>
        </div>
        {alignment == 'Image on right' ? (
          <div
            tw="hidden bg-cover lg:block lg:w-2/5"
            style={{
              backgroundImage: `url('${image_url}')`,
            }}
          ></div>
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
