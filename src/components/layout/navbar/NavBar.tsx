'use client';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { NavBarData, servicesMegsmenuDate } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import logo from '../../../../public/svg/logo.svg';
import mobileScreenLogo from '../../../../public/svg/mobileScreenLogo.svg';
import hamburger from '../../../../public/svg/hamburger-menu.svg';
import MenuSidebar from '@/components/model-&-Drawer/MenuSidebar';
import useOutsideClick from '@/components/hooks/useClickOutSide/page';

const NavBar = () => {
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useOutsideClick(megaMenuRef, () => {
    setShowMegaMenu(false);
  });
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleOpenMenuDrawer = () => {
    setIsOpen(true);
  };

  const handleHover = (isHovering: boolean) => {
    setShowMegaMenu(isHovering);
  };
  if (!isClient) {
    return null; // Don't render the menu on the server side
  }
  return (
    <Container className="sticky top-0 z-[9999] max-w-[1920px] border-b border-b-lightGray bg-white py-[14px] lg:py-[18px]">
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
              className="max-w-[130px] xl:max-w-[150px] 4xl:max-w-max"
            />
          </Link>
        </div>
        <ul className="hidden items-center gap-3 lg:flex lg:gap-4 xl:gap-[30px]">
          {NavBarData &&
            NavBarData.map((item) => (
              <li
                key={item?.id}
                className="relative cursor-pointer font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue"
                onMouseEnter={() =>
                  item?.menuItem === 'Services' && handleHover(true)
                }
              >
                <Link href={''}>{item?.menuItem}</Link>
                {item?.menuItem === 'Services' && showMegaMenu && (
                  <div ref={megaMenuRef} className="scale-up-ver-top">
                    <div
                      className={`megaMenu absolute left-1/2 top-full mt-6 flex flex-col gap-[61.32px] rounded-xl border-t-4 border-lightBlue bg-white p-7 shadow-lg transition-all duration-500 ease-in-out xl:mt-9 3xl:px-[49.43px] 3xl:py-[51.31px]`}
                    >
                      <div className="flex flex-col justify-between gap-8 4xl:flex-row">
                        <div className="grid w-full grid-cols-3 gap-5 3xl:gap-[50.84px]">
                          {servicesMegsmenuDate.map((item, index) => (
                            <div key={index} className="flex flex-col gap-4">
                              <h4 className="font-Poppins text-lg font-normal leading-6 text-[#97A3B7]">
                                {item.title}
                              </h4>
                              <div className="flex flex-col gap-4">
                                {item.items.map((items, idx) => (
                                  <Link
                                    key={idx}
                                    href="/"
                                    className="w-max cursor-pointer font-Poppins text-base font-normal leading-5 text-charcoalBlue transition-all duration-300 hover:text-lightBlue"
                                  >
                                    {items}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex w-full max-w-[389px] flex-col gap-4 rounded-2xl border border-[#e4e4e4] bg-[#fafbfd] p-6 4xl:p-[35px]">
                          <h3 className="font-Poppins text-lg font-semibold leading-5 text-[#212529] 4xl:text-xl 4xl:leading-6">
                            An AI development company trusted by clients
                          </h3>
                          <span className="pr-4 font-Poppins text-base font-normal leading-5 text-[#696969]">
                            We&apos;re a dynamic team of millennials and Gen-Z,
                            witnessing the digital era&apos;s evolution.{' '}
                          </span>
                          <Button
                            btnName="Explore Blog"
                            className="w-max rounded-md bg-orange px-[30px] py-[14px] font-Poppins text-base font-semibold leading-5 text-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
        </ul>
        <Button
          btnName="Contact Us"
          className="bg-lightBlue px-4 lg:px-6 xl:px-[30px]"
        />
      </div>
      <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </Container>
  );
};

export default NavBar;
