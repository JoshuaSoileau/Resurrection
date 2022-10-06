import Header1 from '../Header1/Header1';

export default function Hero1({
  headline,
  hide,
  text,
  button_text,
  button_url,
  image_url,
}) {
  if (hide) return '';

  return (
    <section>
      <Header1 />
      <div className="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>
      <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
        <div className="relative z-10 text-center py-24 md:py-48">
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
        <img
          src={image_url}
          className="w-full h-full absolute inset-0 object-cover opacity-70"
        />
      </div>
    </section>
  );
}
