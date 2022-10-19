export default function Hero1({ hide, items, max_content }) {
  if (hide) return '';

  // TODO -- figure out recursive "field" markdown parsing.

  return (
    <section
      className={`flex flex-wrap bg-black ${
        !max_content ? 'container mx-auto' : ''
      }`}
    >
      {items.map((item) => {
        const { text, image_url, link_url } = item;

        if (link_url)
          return (
            <a
              href={link_url}
              className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
            >
              <div className="relative z-10">{text}</div>
              <img
                src={image_url}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </a>
          );

        return (
          <div className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-64 font-heading text-white uppercase tracking-widest">
            <div className="relative z-10">{text}</div>
            <img
              src={image_url}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
        );
      })}
    </section>
  );
}
