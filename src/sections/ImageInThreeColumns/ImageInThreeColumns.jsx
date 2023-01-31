import tw from 'twin.macro';

export default function Hero1({ hide, items, max_content }) {
  if (hide) return '';

  // TODO -- figure out recursive "field" markdown parsing.

  return (
    <section
      css={[
        tw`flex flex-wrap bg-black`,
        max_content ? tw`container mx-auto` : '',
      ]}
    >
      {items.map(item => {
        const { text, image_url, link_url } = item;

        if (link_url)
          return (
            <a
              key={link_url}
              href={link_url}
              tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 text-white uppercase tracking-widest hover:opacity-75"
            >
              <div tw="relative z-10">{text}</div>
              <img
                src={image_url}
                tw="absolute inset-0 w-full h-full object-cover opacity-50"
              />
            </a>
          );

        return (
          <div
            key={image_url}
            tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-64 text-white uppercase tracking-widest"
          >
            <div tw="relative z-10">{text}</div>
            <img
              src={image_url}
              tw="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
        );
      })}
    </section>
  );
}
