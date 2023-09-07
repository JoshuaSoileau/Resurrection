import { useEffect } from 'react';
import { AppProps } from 'next/app';

import { Analytics } from '@vercel/analytics/react';

import LoadFonts from '../../LoadFonts';

import GlobalStyles from './../components/GlobalStyles';

import 'twin.macro';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <div tw="scroll-smooth">
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TQRZ5MR6');`,
        }}
        id="google-tag-manager"
      />
      <noscript>
        <iframe
          height="0"
          src="https://www.googletagmanager.com/ns.html?id=GTM-TQRZ5MR6"
          style="display:none;visibility:hidden"
          width="0"
        ></iframe>
      </noscript>
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
