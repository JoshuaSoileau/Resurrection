import { AppProps } from 'next/app';
import 'twin.macro';
import { useEffect } from 'react';
import LoadFonts from '../../LoadFonts';
import GlobalStyles from './../components/GlobalStyles';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <div tw="scroll-smooth">
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
