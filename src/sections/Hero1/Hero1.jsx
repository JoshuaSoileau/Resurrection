import Header1 from '../Header1/Header1';

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

export default function Hero1({
  headline,
  hide,
  text,
  button_text,
  button_url,
  image_url,
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
      <div className={`-mt-24 relative w-full py-12 px-12 ${bgColor}`}>
        <div className="relative z-10 text-center py-24 md:py-48">
          {logo_url ? (
            <img src={logo_url} className="max-w-2/3 md:max-w-600px mx-auto" />
          ) : (
            ''
          )}
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
            {headline}
          </h1>
          <p className="text-white text-center text-l md:text-xl lg:text-2xl xl:text-3xl font-display mb-12">
            {text}
          </p>
          {button_text ? (
            <a
              href={button_url}
              className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
            >
              {button_text}
            </a>
          ) : (
            ''
          )}
        </div>
        <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
          <a href="/pages/about-us" className="border-b border-white">
            Find out more
          </a>{' '}
          <a href="/contact" className="border-b border-white">
            Get in touch
          </a>
        </div>
        <img
          src={image_url}
          className={`w-full h-full absolute inset-0 object-cover ${opacityValue}`}
        />
      </div>
    </section>
  );
}
