'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import close from '../../../public/svg/close.svg';
import mobileScreenLogo from '../../../public/svg/mobileScreenLogo.svg';
import downArrow from '../../../public/svg/arrow.svg';

import useWindowSize from '../hooks/useWindowSize';
import { menuData } from '../utils/Constant';
import Button from '../ui/Button';

import 'react-modern-drawer/dist/index.css';

// ✅ Disable SSR for Drawer (IMPORTANT)
const Drawer = dynamic(() => import('react-modern-drawer'), {
  ssr: false,
});

interface IMenuSidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const MenuSidebar = ({ isOpen, setIsOpen }: IMenuSidebarProps) => {
  /* -------------------- HOOKS (ORDER MUST NEVER CHANGE) -------------------- */
  const [mounted, setMounted] = useState(false);
  const [selectMenu, setSelectMenu] = useState<string | null>(null);
  const { width } = useWindowSize();

  /* -------------------- EFFECTS -------------------- */

  // ✅ Mount check (prevents hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Close drawer on large screens
  useEffect(() => {
    if (width >= 1024) {
      setIsOpen(false);
    }
  }, [width, setIsOpen]);

  // ✅ Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  /* -------------------- HANDLERS -------------------- */

  const toggleMenu = (menuTitle: string) => {
    setSelectMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
    setSelectMenu(null);
  };

  /* -------------------- SAFE RENDER -------------------- */

  // ✅ Do NOT move hooks below this
  if (!mounted) {
    return null;
  }

  return (
    <Drawer
      open={isOpen}
      onClose={handleCloseDrawer}
      direction="left"
      style={{ width: '100%', overflowY: 'auto' }}
    >
      <div>
        {/* ---------------- HEADER ---------------- */}
        <div className="sticky top-0 z-[9999] flex items-center justify-between border-b border-b-bluishGray bg-white p-5">
          <Link href="/" onClick={handleCloseDrawer}>
            <Image
              src={mobileScreenLogo}
              alt="nav-logo"
              width={42}
              height={39}
            />
          </Link>

          <Image
            src={close}
            alt="close-btn"
            width={24}
            height={24}
            className="cursor-pointer"
            onClick={handleCloseDrawer}
          />
        </div>

        {/* ---------------- MENU ---------------- */}
        <div className="flex flex-col gap-5 p-5">
          <ul className="flex flex-col gap-3">
            {menuData.map((item, index) => {
              const hasMegaMenu = item?.megaMenuItem?.length > 0;

              return (
                <li key={index} className="flex flex-col gap-5 py-2">
                  <div
                    onClick={() => hasMegaMenu && toggleMenu(item.menuTitle)}
                    className="flex w-full cursor-pointer items-center justify-between"
                  >
                    {hasMegaMenu ? (
                      <span className="font-opt text-base font-medium text-optDesc">
                        {item.menuTitle}
                      </span>
                    ) : (
                      <Link
                        href={`/${item.menuTitle
                          .toLowerCase()
                          .replace(/s$/, '')}`}
                        onClick={handleCloseDrawer}
                        className="block w-full font-opt text-base font-medium text-optDesc"
                      >
                        {item.menuTitle}
                      </Link>
                    )}

                    {hasMegaMenu && (
                      <Image
                        src={downArrow}
                        alt="down-arrow"
                        width={22}
                        height={22}
                        className={`transition-transform duration-300 ${
                          selectMenu === item.menuTitle
                            ? '-rotate-90'
                            : 'rotate-90'
                        }`}
                      />
                    )}
                  </div>

                  {hasMegaMenu && (
                    <div
                      className={`${
                        selectMenu === item.menuTitle ? 'grid' : 'hidden'
                      } grid-cols-1 gap-5 sm:grid-cols-2`}
                    >
                      {item.megaMenuItem.map((itm, ind) => (
                        <div key={ind} className="flex flex-col gap-6">
                          <div
                            className="flex items-center gap-3 rounded-[15px] px-3 py-2.5"
                            style={{
                              backgroundColor: itm.backgroundColor,
                            }}
                          >
                            <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                              <Image
                                src={itm.img}
                                alt={itm.title}
                                width={24}
                                height={24}
                              />
                            </div>
                            <h4 className="font-opt text-lg font-medium text-iconSubtle">
                              {itm.title}
                            </h4>
                          </div>

                          <ul className="flex flex-col gap-5">
                            {itm.items.map((items, idx) => (
                              <li
                                key={idx}
                                onClick={handleCloseDrawer}
                                className="cursor-pointer pl-2 font-opt text-base text-optDesc transition-all duration-300 hover:text-primary"
                              >
                                <Link
                                  href={items.techLink}
                                  className="flex items-center gap-2"
                                >
                                  <svg
                                    width="8"
                                    height="14"
                                    viewBox="0 0 11 14"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="mb-1"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M1.51749 0.782258C1.98612 0.313629 2.74592 0.313629 3.21455 0.782258L9.96455 7.53226C10.4332 8.00089 10.4332 8.76069 9.96455 9.22932L3.21455 15.9793C2.74592 16.4479 1.98612 16.4479 1.51749 15.9793C1.04886 15.5106 1.04886 14.7509 1.51749 14.2822L7.41896 8.38079L1.51749 2.47932C1.04886 2.01069 1.04886 1.25089 1.51749 0.782258Z"
                                    />
                                  </svg>
                                  {items.techName}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <Button
            btnName="Contact us"
            redirectionLink="/contact-us"
            onClick={() => handleCloseDrawer()}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default MenuSidebar;
