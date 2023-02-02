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
        const { image_url, link_url, text } = item;

        if (link_url)
          return (
            <div key={link_url} tw="p-8 lg:p-12">
              <a
                href={link_url}
                tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 text-white uppercase tracking-widest hover:opacity-75"
              >
                <div tw="relative z-10">{text}</div>
                <img
                  css={[
                    tw`absolute inset-0 w-full h-full object-cover`,
                    text && tw`opacity-50`,
                    !text && tw`opacity-90`,
                  ]}
                  src={image_url}
                />
              </a>
            </div>
          );

        return (
          <div key={image_url} tw="p-8 lg:p-12">
            <div tw="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-64 text-white uppercase tracking-widest">
              <div tw="relative z-10">{text}</div>
              <img
                css={[
                  tw`absolute inset-0 w-full h-full object-cover`,
                  text && tw`opacity-50`,
                  !text && tw`opacity-90`,
                ]}
                src={image_url}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}
