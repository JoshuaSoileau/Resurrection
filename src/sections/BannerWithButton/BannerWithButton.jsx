import tw from 'twin.macro';

import { getSectionColor } from '../../components/color-utils';

const opacityValues = {
  0.1: tw`opacity-10`,
  0.2: tw`opacity-20`,
  0.3: tw`opacity-30`,
  0.4: tw`opacity-40`,
  0.5: tw`opacity-50`,
  0.6: tw`opacity-60`,
  0.7: tw`opacity-70`,
  0.8: tw`opacity-80`,
  0.9: tw`opacity-90`,
  1: '',
};

export default function ContactEmailSignup({
  anchor,
  button_text,
  button_url,
  headline,
  hide,
  image_url,
  opacity = 0.7,
  overlay_color,
  subheadline,
  text_alignment,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(overlay_color);
  const opacityValue = opacityValues[opacity] || '';

  return (
    <section css={[tw`relative z-10 w-full`, bgColor]} id={anchor}>
      <div tw="relative z-10 text-center py-12 md:py-6 container mx-auto">
        <div tw="text-gray-600">
          <div tw="container px-2 mx-auto flex items-center md:flex-row flex-col">
            {text_alignment === 'Left' ? (
              <div tw="flex flex-col flex-grow w-full md:w-auto md:text-left text-center">
                <h2 tw="text-xs text-white tracking-widest font-medium mb-1">
                  {subheadline}
                </h2>
                <h1 tw="text-white">{headline}</h1>
              </div>
            ) : (
              ''
            )}
            <a
              href={button_url}
              tw="inline-flex text-white text-sm border-b border-white  uppercase tracking-widest hover:text-white mt-4 md:mt-0"
            >
              {button_text}
            </a>
            {text_alignment !== 'Left' ? (
              <div tw="flex flex-col flex-grow w-full md:w-auto md:text-right text-center">
                <h2 tw="text-xs text-white tracking-widest font-medium mb-1">
                  {subheadline}
                </h2>
                <h1 tw="text-white">{headline}</h1>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      {image_url && (
        <img
          css={[tw`w-full h-full absolute inset-0 object-cover`, opacityValue]}
          src={image_url}
        />
      )}
    </section>
  );
}
