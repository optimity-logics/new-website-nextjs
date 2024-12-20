'use client';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { NavBarData, servicesMegsmenuDate } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '../../../../public/svg/logo.svg';
import mobileScreenLogo from '../../../../public/svg/mobileScreenLogo.svg';
import hamburger from '../../../../public/svg/hamburger-menu.svg';
import MenuSidebar from '@/components/model-&-Drawer/MenuSidebar';

const NavBar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false); // To check for client-side rendering

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted on the client
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
    <Container className="sticky top-0 z-[9999] max-w-[1920px] border-b border-b-lightGray bg-white py-3 lg:py-[18px]">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-5 lg:hidden">
          <div onClick={handleOpenMenuDrawer} className="cursor-pointer">
            <Image
              src={hamburger}
              alt="hamburger-menu"
              width={24}
              height={24}
              className="block md:hidden"
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
              className="max-w-[130px] xl:max-w-max"
            />
          </Link>
        </div>
        <ul className="hidden items-center gap-3 md:flex lg:gap-4 xl:gap-[30px]">
          {NavBarData &&
            NavBarData.map((item) => (
              <li
                key={item?.id}
                className="relative cursor-pointer font-Inter text-base font-medium leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:text-lg xl:text-xl xl:leading-[24.2px]"
                onMouseEnter={() =>
                  item?.menuItem === 'Services' && handleHover(true)
                }
                onMouseLeave={() =>
                  item?.menuItem === 'Services' && handleHover(false)
                }
              >
                <Link href={''}>{item?.menuItem}</Link>
                {item?.menuItem === 'Services' && showMegaMenu && (
                  <div className="scale-up-ver-bottom">
                    <div
                      className={`megaMenu absolute left-1/2 top-full mt-6 flex flex-col gap-[61.32px] rounded-2xl bg-white p-7 shadow-lg transition-all duration-500 ease-in-out xl:mt-9 xl:rounded-[25.42px] 2xl:px-[49.43px] 2xl:py-[51.31px]`}
                    >
                      <div className="grid grid-cols-3 items-center gap-5 2xl:gap-[50.84px]">
                        {servicesMegsmenuDate.map((item, index) => (
                          <div
                            key={index}
                            className="flex flex-col gap-5 xl:gap-[25.42px]"
                          >
                            <h4 className="font-Inter text-xl font-normal leading-6 text-[#97A3B7] xl:text-2xl xl:leading-9">
                              {item.title}
                            </h4>
                            <ul className="flex flex-col gap-4 xl:gap-[31.77px]">
                              {item.items.map((items, idx) => (
                                <li
                                  key={idx}
                                  className="font-Inter text-base font-normal leading-5 text-charcoalBlue lg:text-lg lg:leading-6 xl:text-2xl xl:leading-9"
                                >
                                  {items}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
