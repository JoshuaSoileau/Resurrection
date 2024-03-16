import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import tw from 'twin.macro';
import getNavigationItems from 'utils/getNavigationItems';

const bgColors = {
  Charcoal: tw`bg-gray-900`,
  Green: tw`bg-green-600`,
  None: '',
  Orange: tw`bg-orange-500`,
  Red: tw`bg-red-600`,
  Yellow: tw`bg-yellow-300`,
};

export default function Footer1({
  anchor,
  background_color,
  disclaimer,
  hide,
  logo_url,
}) {
  if (hide) return '';

  const bgColor = bgColors[background_color] || '';
  const links = getNavigationItems('footer');

  return (
    <footer css={[tw`p-4 md:px-6 md:py-8`, bgColor]} id={anchor}>
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
      <div tw="sm:flex sm:items-center sm:justify-between">
        <span tw="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {disclaimer}
        </span>
        <div tw="flex mt-4 space-x-6 sm:justify-center sm:mt-0 px-4">
          <a
            href="https://www.facebook.com/resurrectionrockhill/"
            tw="text-gray-500 hover:text-white"
          >
            <FaFacebook tw="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/resurrectionrockhill/"
            tw="text-gray-500 hover:text-white"
          >
            <FaInstagram tw="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCKAPTHGrY1Wb5zHQKdsbAeg"
            tw="text-gray-500 hover:text-white"
          >
            <FaYoutube tw="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
