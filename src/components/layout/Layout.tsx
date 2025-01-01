import React from 'react';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
