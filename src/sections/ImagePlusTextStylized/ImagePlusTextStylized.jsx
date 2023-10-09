import tw from 'twin.macro';

import { getProseColor, getSectionColor } from '../../components/color-utils';
import Markdown from '../../components/Markdown/Markdown';

export default function ImagePlusTextStylized({
  alignment,
  anchor,
  background_color,
  button_text,
  button_url,
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

  const Image = (
    <div tw="bg-white p-12 md:p-24 flex justify-end items-center">
      <a href="/blog/this-is-latest-post/">
        <img src={image_url} tw="w-full max-w-md" />
      </a>
    </div>
  );

  return (
    <section
      css={[
        tw`grid grid-cols-1 lg:grid-cols-2`,
        !max_content ? tw`container mx-auto` : '',
      ]}
      id={anchor}
    >
      {alignment === 'Image on left' ? Image : ''}
      <div
        css={[
          tw`p-6 py-12 md:p-12 md:p-24 flex justify-start items-center`,
          bgColor,
        ]}
      >
        <div tw="max-w-md">
          <div css={[tw`w-full prose-sm md:prose`, proseColor]}>
            {include_line ? (
              <div tw="w-24 h-2 bg-emerald-800 mb-4 inline-block"></div>
            ) : (
              ''
            )}
            <Markdown content={markdown_content} isAdmin={isAdmin} />
          </div>
          {button_text ? (
            <a
              href={button_url}
              tw="inline-block border-2 border-emerald-800 font-light text-emerald-800  uppercase tracking-widest py-3 px-8 hover:bg-emerald-800 hover:text-white mt-8"
            >
              {button_text}
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
      {alignment === 'Image on right' ? Image : ''}
    </section>
  );
}
