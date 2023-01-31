import { AppProps } from 'next/app';
import 'css/tailwind.css';
import { useEffect } from 'react';
import LoadFonts from '../../LoadFonts';
import GlobalStyles from './../components/GlobalStyles';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    LoadFonts();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
