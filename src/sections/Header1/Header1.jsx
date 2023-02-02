import { useRef, useState } from 'react';
import tw from 'twin.macro';

const links = [
  { url: '/', text: 'Home' },
  { url: '/leadership', text: 'leadership' },
  { url: '/about-us', text: 'About' },
  { url: '/contact-us', text: 'Contact us' },
];

export default function Header1() {
  const menu = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div tw="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
      <div tw="flex items-center" x-data="{showMenu: false}">
        <button onClick={onClick}>
          <svg
            fill="none"
            stroke="currentColor"
            tw="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
        <div
          css={[
            tw`fixed inset-0 w-full h-full bg-white z-50 text-emerald-900`,
            !isOpen && tw`hidden`,
          ]}
          ref={menu}
        >
          <div tw="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
            <button tw="absolute top-0 left-0 mt-8 ml-6" onClick={onClick}>
              <svg
                fill="none"
                stroke="currentColor"
                tw="w-8 h-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
            {links.map(link => (
              <a
                href={link.url}
                key={link.url}
                tw="inline-block border-b-4 border-transparent hover:border-emerald-900"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div tw="absolute inset-0 w-full h-full bg-emerald-900 bg-opacity-20"></div>
        </div>
      </div>
      <div tw="flex items-center justify-center"></div>
      <div tw="flex items-center justify-end">
        <a href="/contact">
          <svg
            fill="none"
            stroke="currentColor"
            tw="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
