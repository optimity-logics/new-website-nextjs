'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import { menuData } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import logo from '../../../../public/svg/logo.svg';
import mobileScreenLogo from '../../../../public/svg/mobileScreenLogo.svg';
import hamburger from '../../../../public/svg/hamburger-menu.svg';
import MenuSidebar from '@/components/model-&-Drawer/MenuSidebar';
import useOutsideClick from '@/components/hooks/useClickOutSide/page';
import { useRouter } from 'next/navigation';
import phone from '../../../../public/svg/call.svg';
import mail from '../../../../public/svg/mail.svg';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOnMenuItem = (
    menuTitle: string,
    megaMenuItemLength: number,
  ) => {
    const redirectPages = ['blog', 'about us'];
    const normalizedTitle = menuTitle.trim().toLowerCase();

    if (redirectPages.includes(normalizedTitle)) {
      const formattedPath = `/${normalizedTitle.split(' ').join('-')}`;
      router.push(formattedPath);
      return;
    }

    if (megaMenuItemLength === 0) return; // Prevent opening empty mega menu

    setActiveMenu((prev) => (prev === menuTitle ? null : menuTitle));
  };

  useOutsideClick(megaMenuRef, () => {
    setActiveMenu(null);
  });

  const handleOpenMenuDrawer = () => {
    setIsOpen(true);
  };

  return (
    <div className="sticky top-0 z-[9999] border-b border-b-lightGray bg-white">
      <div className="relative max-w-full bg-white px-4 py-4 sm:px-6 md:px-8 lg:py-0 xl:px-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-5 lg:hidden">
            <div
              onClick={handleOpenMenuDrawer}
              className="block cursor-pointer lg:hidden"
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
          <div className="hidden lg:block">
            <Link href="/">
              <Image
                src={logo}
                alt="nav-logo"
                width={202}
                height={57.09}
                className="w-full max-w-[130px] xl:max-w-[140px] 5xl:max-w-[170px]"
              />
            </Link>
          </div>

          <ul className="relative hidden items-center gap-3 lg:flex lg:gap-4 xl:gap-[30px]">
            {menuData?.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px] ${activeMenu?.toLowerCase() === item.menuTitle.toLowerCase() && 'text-lightBlue'}`}
                onClick={() =>
                  handleClickOnMenuItem(
                    item?.menuTitle,
                    item?.megaMenuItem?.length,
                  )
                }
              >
                {item.menuTitle}
              </li>
            ))}
            <AnimatePresence>
              {activeMenu && (
                <motion.div
                  ref={megaMenuRef}
                  initial={{ opacity: 0, y: -20, x: '-50%' }}
                  animate={{ opacity: 1, y: 0, x: '-50%' }}
                  exit={{ opacity: 0, y: -20, x: '-50%' }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute left-1/2 top-full"
                >
                  <div className="hide-scrollbar flex max-h-[70vh] w-[750px] flex-col gap-8 overflow-y-scroll rounded-b-xl border-t-4 border-lightBlue bg-white p-5 shadow-lg lg:w-[1000px] xl:max-h-max xl:w-[1200px] 3xl:w-[1320px] 4xl:w-[1449px]">
                    <div className="flex flex-wrap justify-between gap-5 xl:flex-nowrap">
                      {menuData
                        .find((menu) => menu.menuTitle === activeMenu)
                        ?.megaMenuItem.map((item, index, array) => (
                          <React.Fragment key={index}>
                            <div className="flex w-full flex-col gap-6">
                              <div
                                className="flex items-center gap-3 rounded-[15px] px-3 py-2.5"
                                style={{
                                  backgroundColor: item.backgroundColor,
                                }}
                              >
                                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                                  <Image
                                    src={item.img}
                                    alt={item.img}
                                    width={24}
                                    height={24}
                                  />
                                </div>
                                <h4 className="font-Poppins text-lg font-medium capitalize leading-6 text-[#192020]">
                                  {item.title}
                                </h4>
                              </div>
                              <ul className="flex flex-col gap-4">
                                {item.items.map((items, idx) => (
                                  <li
                                    key={idx}
                                    onClick={() => setActiveMenu(null)}
                                    className="group w-full cursor-pointer pl-2 font-Poppins text-[15px] font-normal capitalize leading-[18px] text-gray transition-all duration-300 hover:text-charcoalBlue"
                                  >
                                    <Link
                                      href={items.techLink}
                                      className="flex items-center gap-2"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="12"
                                        viewBox="0 0 12 18"
                                        fill="currentColor"
                                        className="transition-all duration-300 group-hover:text-charcoalBlue"
                                      >
                                        <path d="M1.51749 0.782258C1.98612 0.313629 2.74592 0.313629 3.21455 0.782258L9.96455 7.53226C10.4332 8.00089 10.4332 8.76069 9.96455 9.22932L3.21455 15.9793C2.74592 16.4479 1.98612 16.4479 1.51749 15.9793C1.04886 15.5106 1.04886 14.7509 1.51749 14.2822L7.41896 8.38079L1.51749 2.47932C1.04886 2.01069 1.04886 1.25089 1.51749 0.782258Z" />
                                      </svg>
                                      {items.techName}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {index < array.length - 1 && (
                              <div className="w-[0.5px] bg-[#f0f0f0]"></div>
                            )}
                          </React.Fragment>
                        ))}
                    </div>
                    <div className="flex items-center justify-evenly gap-5 border-t border-t-[#f0f0f0] px-2 pt-5">
                      <div className="flex items-center gap-[15px]">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-lightBlue">
                          <Image src={phone} alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-Inter text-sm font-normal capitalize leading-4 text-gray">
                            India
                          </h6>
                          <span className="font-Inter text-[15px] font-medium lowercase leading-4 text-black">
                            {' '}
                            +91 1234567890
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-[15px]">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-lightBlue">
                          <Image src={mail} alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-Inter text-sm font-normal capitalize leading-4 text-gray">
                            hr enquiries
                          </h6>
                          <span className="font-Inter text-[15px] font-medium lowercase leading-4 text-black">
                            {' '}
                            hr@optimitylogics.com
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-[15px]">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-lightBlue">
                          <Image src={mail} alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-Inter text-sm font-normal capitalize leading-4 text-gray">
                            sales enquiries
                          </h6>
                          <span className="font-Inter text-[15px] font-medium lowercase leading-4 text-black">
                            {' '}
                            sales@optimitylogics.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {activeMenu && (
              <div className="fixed left-0 top-[92px] -z-10 h-screen w-screen bg-[#19202033] backdrop-blur-sm"></div>
            )}
          </ul>
          <Button
            btnName="Contact Us"
            className="bg-lightBlue px-4 lg:px-6 xl:px-[30px]"
            onClick={() => router.push('/contact-us')}
          />
        </div>
        <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default NavBar;
