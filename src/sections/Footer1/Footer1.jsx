import tw from 'twin.macro';

const bgColors = {
  None: '',
  Charcoal: tw`bg-gray-900`,
  Orange: tw`bg-orange-500`,
  Red: tw`bg-red-600`,
  Green: tw`bg-green-600`,
  Yellow: tw`bg-yellow-300`,
};

export default function Hero1({
  background_color,
  disclaimer,
  hide,
  links,
  logo_url,
}) {
  if (hide) return '';

  const bgColor = bgColors[background_color] || '';

  return (
    <footer css={[tw`p-4 md:px-6 md:py-8`, bgColor]}>
      <div tw="sm:flex sm:items-center sm:justify-between">
        <a href="/" tw="flex items-center mb-4 sm:mb-0">
          <img src={logo_url} tw="h-8 mr-3" />
        </a>
        <ul tw="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          {links.map(({ text, url }) => (
            <li key={text}>
              <a href={url} tw="mr-4 hover:underline md:mr-6 ">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr tw="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span tw="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {disclaimer}
      </span>
    </footer>
  );
}
