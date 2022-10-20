import { getSectionColor, getProseColor } from '../../components/color-utils';

const bgColors = {
  None: '',
  Charcoal: 'bg-gray-900',
  Orange: 'bg-orange-500',
  Red: 'bg-red-600',
  Green: 'bg-green-600',
  Yellow: 'bg-yellow-300',
};

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
    <section className={`relative z-10 w-full ${bgColor}`}>
      <div className="relative z-10 text-center py-12 md:py-18 container mx-auto">
        <div className="text-gray-600 body-font">
          <div className="container px-2 mx-auto flex items-center md:flex-row flex-col">
            <div className="flex flex-col w-full md:w-auto md:text-left text-center">
              <h2 className="text-xs text-white tracking-widest font-medium title-font mb-1">
                {subheadline}
              </h2>
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold">
                {headline}
              </h1>
            </div>
            <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 w-1/2">
              <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                <div className="relative flex-grow w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="JaneDoe@gmail.com"
                    className="w-full bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-12"
                  />
                </div>
                <button className="inline-block border-2 border-white font-light text-white text-sm uppercase tracking-widest py-3 px-8 hover:bg-emerald-800 hover:text-white mt-8">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={image_url}
        className={`w-full h-full absolute inset-0 object-cover ${opacityValue}`}
      />
    </section>
  );
}
