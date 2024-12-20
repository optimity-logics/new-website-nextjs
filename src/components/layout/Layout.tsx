import React from 'react';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
