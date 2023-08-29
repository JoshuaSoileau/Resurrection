import { ReactNode } from 'react';
import { NextPage } from 'next';

import Header from 'components/home/Header';
import Footer from 'components/home/Footer';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YD4NZT886Q"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YD4NZT886Q');`}} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
