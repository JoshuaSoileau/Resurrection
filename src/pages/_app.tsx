import { AppProps } from 'next/app';
import 'twin.macro';
import { useEffect } from 'react';
import LoadFonts from '../../LoadFonts';
import GlobalStyles from './../components/GlobalStyles';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <div tw="scroll-smooth">
      <GlobalStyles />
      <Component {...pageProps} />
      <Analytics />
    </div>
  );
}
