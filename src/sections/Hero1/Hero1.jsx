import Header1 from '../Header1/Header1';
import tw from 'twin.macro';

const bgColors = {
  None: '',
  Charcoal: tw`bg-gray-900`,
  Orange: tw`bg-orange-500`,
  Red: tw`bg-red-600`,
  Green: tw`bg-green-600`,
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
  headline,
  hide,
  text,
  button_text,
  button_url,
  image_url,
  isAdmin,
  logo_url,
  overlay_color,
  opacity = 0.7,
}) {
  if (hide) return '';

  const bgColor = bgColors[overlay_color] || '';
  const opacityValue = opacityValues[opacity] || '';

  return (
    <section>
      <Header1 />
      <div css={[tw`-mt-24 relative w-full p-4 md:p-12`, bgColor]}>
        <div tw="relative z-10 text-center py-24 md:py-48">
          {logo_url ? (
            <div tw="container w-full p-4 md:p-12 mx-auto">
              <img
                src={logo_url}
                css={[
                  tw`max-w-full md:max-w-600px mx-auto`,
                  isAdmin ? tw`h-32` : '',
                ]}
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
        <div tw="relative z-10 mx-auto max-w-4xl flex flex-col xs:flex-row justify-between uppercase text-white tracking-widest">
          <a href="/pages/about-us" tw="border-b border-white">
            Find out more
          </a>{' '}
          <a href="/contact" tw="border-b border-white">
            Get in touch
          </a>
        </div>
        <img
          src={image_url}
          css={[tw`w-full h-full absolute inset-0 object-cover`, opacityValue]}
        />
      </div>
    </section>
  );
}
