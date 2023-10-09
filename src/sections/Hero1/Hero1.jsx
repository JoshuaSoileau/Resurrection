import Link from 'next/link';
import tw from 'twin.macro';

import Header1 from '../Header1/Header1';

const bgColors = {
  Charcoal: tw`bg-gray-900`,
  Green: tw`bg-green-600`,
  None: '',
  Orange: tw`bg-orange-500`,
  Red: tw`bg-red-600`,
  Yellow: tw`bg-yellow-300`,
};

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

export default function Hero1({
  anchor,
  button_text,
  button_url,
  headline,
  hide,
  image_url,
  isAdmin,
  left_text,
  left_url,
  logo_url,
  opacity = 0.7,
  overlay_color,
  right_text,
  right_url,
  text,
}) {
  if (hide) return '';

  const bgColor = bgColors[overlay_color] || '';
  const opacityValue = opacityValues[opacity] || '';

  return (
    <section id={anchor}>
      <Header1 />
      <div css={[tw`-mt-24 relative w-full p-4 md:p-12`, bgColor]}>
        <div tw="relative z-10 text-center py-24 md:py-48">
          {logo_url ? (
            <div tw="container w-full p-4 md:p-12 mx-auto">
              <img
                css={[
                  tw`max-w-full md:max-w-600px mx-auto`,
                  isAdmin ? tw`h-32` : '',
                ]}
                src={logo_url}
              />
            </div>
          ) : (
            ''
          )}
          <h1 tw="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12">
            {headline}
          </h1>
          <p tw="text-white text-center text-lg md:text-xl lg:text-2xl xl:text-3xl mb-12">
            {text}
          </p>
          {button_text ? (
            <a
              href={button_url}
              tw="inline-block bg-emerald-800 text-white uppercase tracking-widest px-8 py-4"
            >
              {button_text}
            </a>
          ) : (
            ''
          )}
        </div>
        <div tw="relative z-10 mx-auto max-w-4xl flex flex-row justify-between uppercase text-white tracking-widest">
          {left_text ? (
            <Link href={left_url}>
              <span tw="border-b border-white cursor-pointer">{left_text}</span>
            </Link>
          ) : (
            <div />
          )}
          {right_text ? (
            <Link href={right_url}>
              <span tw="border-b border-white cursor-pointer">
                {right_text}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
        <img
          css={[tw`w-full h-full absolute inset-0 object-cover`, opacityValue]}
          src={image_url}
        />
      </div>
    </section>
  );
}
