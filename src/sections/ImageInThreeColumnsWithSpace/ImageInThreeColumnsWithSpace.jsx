import tw from 'twin.macro';

export default function ImageInThreeColumnsWithSpace({
  hide,
  items,
  max_content,
}) {
  if (hide) return '';

  return (
    <section
      css={[
        tw`grid grid-cols-1 md:grid-cols-3`,
        max_content ? tw`container mx-auto` : '',
      ]}
    >
      {items.map(item => {
        const { text, image_url, link_url } = item;

        if (link_url)
          return (
            <div tw="p-8 lg:p-12" key={link_url}>
              <a
                href={link_url}
                tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 text-white uppercase tracking-widest hover:opacity-75"
              >
                <div tw="relative z-10">{text}</div>
                <img
                  src={image_url}
                  css={[
                    tw`absolute inset-0 w-full h-full object-cover`,
                    text && tw`opacity-50`,
                    !text && tw`opacity-90`,
                  ]}
                />
              </a>
            </div>
          );

        return (
          <div tw="p-8 lg:p-12" key={image_url}>
            <div tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-64 text-white uppercase tracking-widest">
              <div tw="relative z-10">{text}</div>
              <img
                src={image_url}
                css={[
                  tw`absolute inset-0 w-full h-full object-cover`,
                  text && tw`opacity-50`,
                  !text && tw`opacity-90`,
                ]}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
