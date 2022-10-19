import Markdown from '../../components/Markdown/Markdown';
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

export default function Hero1({
  headline,
  hide,
  text,
  button_text,
  button_url,
  image_url,
  markdown_content,
  overlay_color,
  opacity = 0.7,
  isAdmin,
}) {
  if (hide) return '';

  const bgColor = getSectionColor(overlay_color);
  const proseColor = getProseColor(overlay_color);

  // const bgColor = bgColors[overlay_color] || '';
  const opacityValue = opacityValues[opacity] || '';

  return (
    <section className={`relative w-full py-12 px-12 ${bgColor}`}>
      <div className="relative z-10 text-center py-12 md:py-24">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
          {headline}
        </h1>
        <p className="text-white mb-10 text-base md:text-lg font-bold">
          {text}
        </p>
        {button_text ? (
          <a
            href={button_url}
            className="inline-block bg-emerald-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            {button_text}
          </a>
        ) : (
          ''
        )}
      </div>
      <img
        src={image_url}
        className={`w-full h-full absolute inset-0 object-cover ${opacityValue}`}
      />
    </section>
  );
}
