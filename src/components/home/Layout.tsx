import { ReactNode } from 'react';
import { NextPage } from 'next';
import Footer from 'components/home/Footer';
import Header from 'components/home/Header';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
