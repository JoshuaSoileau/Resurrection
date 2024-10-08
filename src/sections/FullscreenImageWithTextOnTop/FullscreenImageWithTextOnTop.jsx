import 'twin.macro';

import tw from 'twin.macro';

import { getSectionColor } from '../../components/color-utils';

const opacityValues = {
  0.1: 'opacity-10',
  0.2: 'opacity-20',
  0.3: 'opacity-30',
  0.4: 'opacity-40',
  0.5: 'opacity-50',
  0.6: 'opacity-60',
  0.7: 'opacity-70',
  0.8: 'opacity-80',
  0.9: 'opacity-90',
  1: '',
};

export default function Hero1({
  anchor,
  button_text,
  button_url,
  headline,
  hide,
  image_url,
  opacity = 0.7,
  overlay_color,
  text,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(overlay_color);

  // const bgColor = bgColors[overlay_color] || '';
  const opacityValue = opacityValues[opacity] || '';

  return (
    <section css={[tw`relative w-full py-12 px-12`, tw(bgColor)]} id={anchor}>
      <div tw="relative z-10 text-center py-12 md:py-24">
        <h1 tw="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
          {headline}
        </h1>
        <p tw="text-white mb-10 text-base md:text-lg font-bold">{text}</p>
        {button_text ? (
          <a
            href={button_url}
            tw="inline-block border-2 border-white font-light text-white  uppercase tracking-widest py-3 px-8 hover:bg-emerald-800 hover:text-white mt-8"
          >
            {button_text}
          </a>
        ) : (
          ''
        )}
      </div>
      <img
        css={[
          tw`w-full h-full absolute inset-0 object-cover`,
          tw(opacityValue),
        ]}
        src={image_url}
      />
    </section>
  );
}
