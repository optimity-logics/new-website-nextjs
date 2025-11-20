import React from 'react';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

export default Layout;
