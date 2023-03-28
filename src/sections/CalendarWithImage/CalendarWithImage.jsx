import Calendar from '../../components/calendar/Calendar';
import tw from 'twin.macro';
import { getSectionColor, getProseColor } from '../../components/color-utils';
import Markdown from 'components/Markdown/Markdown';

export default function CalendarWithImage({
  alignment,
  anchor,
  background_color,
  hide,
  image_url,
  include_line,
  isAdmin,
  markdown_content,
  max_content,
  text_size,
  url,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(background_color);
  const proseColor = getProseColor(background_color);

  return (
    <section css={[bgColor]} id={anchor}>
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
            tw`max-w-3xl p-12 md:p-24 lg:p-32 mx-auto md:pr-12 md:w-3/5`,
            alignment == 'Image on right' && tw`mr-0`,
            alignment !== 'Image on right' && tw`ml-0`,
          ]}
        >
          <div
            css={[
              tw`w-full prose`,
              proseColor,
              text_size == 'Large' && tw`prose-lg`,
            ]}
          >
            {include_line ? (
              <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
            ) : (
              ''
            )}
            <Markdown content={markdown_content} isAdmin={isAdmin} />
          </div>
          <Calendar url={url} />
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
