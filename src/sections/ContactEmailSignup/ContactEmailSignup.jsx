import tw from 'twin.macro';
import { getSectionColor, getProseColor } from '../../components/color-utils';

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

export default function ContactEmailSignup({
  headline,
  hide,
  subheadline,
  button_text,
  button_url,
  image_url,
  overlay_color,
  opacity = 0.7,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(overlay_color);
  const proseColor = getProseColor(overlay_color);

  // const bgColor = bgColors[overlay_color] || '';
  const opacityValue = opacityValues[opacity] || '';

  return (
    <section css={[tw`relative z-10 w-full`, bgColor]}>
      <div tw="relative z-10 text-center py-12 md:py-6 container mx-auto">
        <div tw="text-gray-600">
          <div tw="container px-2 mx-auto flex items-center md:flex-row flex-col">
            <div tw="flex flex-col w-full md:w-auto md:text-left text-center">
              <h2 tw="text-xs text-white tracking-widest font-medium mb-1">
                {subheadline}
              </h2>
              <h1 tw="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                {headline}
              </h1>
            </div>
            <div tw="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 w-1/2">
              <div tw="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div tw="relative flex-grow w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="JaneDoe@gmail.com"
                    tw="w-full bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-12"
                  />
                </div>
                <button tw="inline-block border-2 border-white font-light text-white  uppercase tracking-widest py-3 px-8 hover:bg-emerald-800 hover:text-white mt-8">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={image_url}
        css={[tw`w-full h-full absolute inset-0 object-cover`, opacityValue]}
      />
    </section>
  );
}
