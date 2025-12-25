'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../../public/svg/logo.svg';
import mobileScreenLogo from '../../../../public/svg/mobileScreenLogo.svg';
import hamburger from '../../../../public/svg/hamburger-menu.svg';

import MenuSidebar from '@/components/model-&-Drawer/MenuSidebar';
import MegaMenu from './MegaMenu';
import Button from '@/components/ui/Button';
import { useScrollDirection } from '@/components/hooks/use-scroll-direction';

const navbarVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 0.8,
    },
  },
  hidden: {
    y: '-100%',
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.6,
      ease: 'easeIn',
    },
  },
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { isVisible, isScrolled } = useScrollDirection();

  const shouldShowNavbar = isMegaMenuOpen || isVisible;

  return (
    <>
      <AnimatePresence>
        {shouldShowNavbar && (
          <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="sticky top-0 z-[99]"
          >
            <div
              className={`mx-auto max-w-[1920px] ${isMegaMenuOpen ? 'border-b border-b-primaryGrayishBlue bg-white' : isScrolled ? 'bg-white' : 'bg-transparent'} px-4 py-2 md:px-8 xl:px-10`}
            >
              <div className="navigation">
                <div className="flex items-center justify-between">
                  {/* Mobile Left */}
                  <div className="flex items-center gap-5 xl:hidden">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="cursor-pointer"
                      aria-label="Open menu"
                    >
                      <Image
                        src={hamburger}
                        alt="hamburger-menu"
                        width={24}
                        height={24}
                        className="max-w-[22px]"
                      />
                    </button>

                    <Link href="/">
                      <Image
                        src={mobileScreenLogo}
                        alt="nav-logo"
                        width={42}
                        height={39}
                        className="max-w-[30px]"
                      />
                    </Link>
                  </div>

                  {/* Desktop Center */}
                  <div className="flex items-center gap-10 3xl:gap-32">
                    <div className="hidden xl:block">
                      <Link href="/">
                        <Image
                          src={logo}
                          alt="nav-logo"
                          width={150}
                          height={57}
                          className="max-w-[140px]"
                        />
                      </Link>
                    </div>
                    <MegaMenu setIsMegaMenuOpen={setIsMegaMenuOpen} />
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-4">
                    <Button
                      btnName="Book A Call"
                      redirectionLink="/schedule-a-call"
                    />
                    <Button
                      btnName="Contact us"
                      redirectionLink="/contact-us"
                      isBackgroung
                      className="hidden lg:flex"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default NavBar;
