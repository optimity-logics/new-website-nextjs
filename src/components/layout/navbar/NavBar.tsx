'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/svg/logo.svg';
import mobileScreenLogo from '../../../../public/svg/mobileScreenLogo.svg';
import hamburger from '../../../../public/svg/hamburger-menu.svg';
import MenuSidebar from '@/components/model-&-Drawer/MenuSidebar';
import MegaMenu from './MegaMenu';
import Button from '@/components/ui/Button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [small, setSmall] = useState(false);

  const handleOpenMenuDrawer = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      setSmall(window.scrollY > 0);
    };

    // Set initial value
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`sticky ${small ? 'top-1.5 mx-4 xl:mx-0' : 'top-0'} z-[99]`}
      >
        <div
          className={`easing_func ${small ? 'small rounded-full bg-white py-2 shadow-card md:px-3 xl:py-0' : 'large bg-transparent md:px-8 xl:px-10 xl:py-2'} mx-auto max-w-[1920px]`}
        >
          <div className="navigation">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 xl:hidden">
                <div
                  onClick={handleOpenMenuDrawer}
                  className="block cursor-pointer xl:hidden"
                >
                  <Image
                    src={hamburger}
                    alt="hamburger-menu"
                    width={24}
                    height={24}
                    className="h-auto max-w-[22px]"
                  />
                </div>
                <div>
                  <Link href="/">
                    <Image
                      src={mobileScreenLogo}
                      alt="nav-logo"
                      width={42}
                      height={39}
                      className="h-auto max-w-[30px]"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-10 3xl:gap-32">
                <div className="hidden xl:block">
                  <Link href="/">
                    {small ? (
                      <div className="max-w-max">
                        <Image
                          src={mobileScreenLogo}
                          alt="nav-logo"
                          width={40}
                          height={40}
                          className="max-w-[40px]"
                        />
                      </div>
                    ) : (
                      <div className="max-w-max">
                        <Image
                          src={logo}
                          alt="nav-logo"
                          width={150}
                          height={57.09}
                          className="w-full max-w-[130px] xl:max-w-[140px]"
                        />
                      </div>
                    )}
                  </Link>
                </div>
                <MegaMenu />
              </div>
              <div className="flex items-center gap-4">
                <Button
                  btnName="Book A Call"
                  redirectionLink={'/schedule-a-call'}
                />
                <Button
                  btnName="Contact us"
                  redirectionLink={'/contact-us'}
                  isBackgroung={true}
                  className="hidden lg:flex"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NavBar;
