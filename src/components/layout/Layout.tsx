'use client';
import React from 'react';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';
import { usePathname } from 'next/navigation';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const hideNavbarRoutes = ['/schedule-a-call'];
  const shouldHideNavbar = hideNavbarRoutes.includes(pathname);
  return (
    <>
      {!shouldHideNavbar && <NavBar />}
      {children}
      {!shouldHideNavbar && <Footer />}
    </>
  );
};
export default Layout;
