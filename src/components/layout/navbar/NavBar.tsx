'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/svg/logo.svg';
import mobileScreenLogo from '../../../../public/svg/mobileScreenLogo.svg';
import hamburger from '../../../../public/svg/hamburger-menu.svg';
import MenuSidebar from '@/components/model-&-Drawer/MenuSidebar';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import MegaMenu from './MegaMenu';

const NavBar = () => {
  // const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [small, setSmall] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
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
        style={{
          backgroundImage: !small
            ? 'radial-gradient(154.86% 76.83% at 50% 22.26%,rgb(247 247 248/.4) 8.98%,#F7F7F8 45.99%)'
            : '',
        }}
        className={`sticky ${small ? 'top-1.5 mx-4 xl:mx-0' : 'top-0'} z-[99]`}
      >
        <div
          className={`easing_func ${small ? 'small rounded-full bg-white shadow-card md:px-4 xl:py-0' : 'large bg-transparent md:px-8 lg:py-2 xl:px-10'} mx-auto max-w-[1920px] px-4 py-4 sm:px-6`}
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
                  />
                </div>
                <div>
                  <Link href="/">
                    <Image
                      src={mobileScreenLogo}
                      alt="nav-logo"
                      width={42}
                      height={39}
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

              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseEnter}
                onMouseDown={handleMouseLeave}
                type="button"
                className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] px-[16px] py-[8px] pr-[14px] font-base text-[14px] font-normal leading-tight text-white"
              >
                Contact us
                <AnimatedArrow hover={hover} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NavBar;
