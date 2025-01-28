'use client';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { technologyData } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import logo from '../../../../public/svg/logo.svg';
import mobileScreenLogo from '../../../../public/svg/mobileScreenLogo.svg';
import hamburger from '../../../../public/svg/hamburger-menu.svg';
import MenuSidebar from '@/components/model-&-Drawer/MenuSidebar';
import useOutsideClick from '@/components/hooks/useClickOutSide/page';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
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

  if (!isClient) {
    return null; // Don't render the menu on the server side
  }
  return (
    <div className="sticky top-0 z-[9999] border-b border-b-lightGray bg-white">
      <Container className="relative max-w-[1920px] bg-white">
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
            <li className="cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px]">
              <Link href={'/'}>Home</Link>
            </li>
            <li className="cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px]">
              <Link href={'/'}>Services</Link>
            </li>
            <li
              className="group cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px]"
              // onMouseEnter={handleMouseEnter}
              // onMouseLeave={handleMouseLeave}
              onClick={() => setShowMegaMenu(!showMegaMenu)}
            >
              Technology
              {showMegaMenu && (
                <div
                  ref={megaMenuRef}
                  className={`absolute left-1/2 top-full -translate-x-1/2 transition-all duration-500 ease-in-out ${showMegaMenu ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="scale-up-ver-top flex w-[750px] flex-col gap-[61.32px] border-t-4 border-lightBlue bg-white p-7 shadow-lg lg:w-[1000px] xl:w-[1200px] 3xl:px-[49.43px] 3xl:py-[51.31px] 4xl:w-[1449px]">
                    <div className="flex flex-col justify-between gap-8 4xl:flex-row">
                      <div className="grid w-full grid-cols-4 gap-5 3xl:gap-8">
                        {technologyData.map((item, index) => (
                          <div key={index} className="flex flex-col gap-4">
                            <h4 className="font-Poppins text-lg font-normal leading-6 text-[#97A3B7]">
                              {item.title}
                            </h4>
                            <ul className="flex flex-col gap-4">
                              {item.items.map((items, idx) => (
                                <li
                                  key={idx}
                                  className="w-full cursor-pointer text-nowrap font-Poppins text-base font-normal leading-5 text-charcoalBlue transition-all duration-300 hover:text-lightBlue"
                                >
                                  <Link
                                    href={`${items.techLink}/${items.techName.toLowerCase().replace(/\s+/g, '')}`}
                                  >
                                    {items?.techName}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex w-full max-w-[389px] flex-col gap-4 rounded-2xl border border-[#e4e4e4] bg-[#fafbfd] p-6 4xl:p-[35px]">
                        <h3 className="font-Poppins text-base leading-5 text-[#212529] 4xl:font-semibold">
                          An AI development company trusted by clients
                        </h3>
                        <span className="pr-4 font-Poppins text-sm font-normal leading-5 text-[#696969]">
                          We&apos;re a dynamic team of millennials and Gen-Z,
                          witnessing the digital era&apos;s evolution.{' '}
                        </span>
                        <Button
                          btnName="Explore Blog"
                          className="w-max rounded-md bg-orange px-[20px] py-[10px] font-Poppins text-base font-medium leading-5 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px]">
              <Link href={'/about-us'}>About Us</Link>
            </li>
            <li className="cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px]">
              <Link href={'/about-us'}>our works</Link>
            </li>
            <li className="cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px]">
              <Link href={'/about-us'}>hire us</Link>
            </li>
            <li className="cursor-pointer py-7 font-Poppins text-base font-normal uppercase leading-6 text-darkBlack transition-all duration-300 hover:text-lightBlue lg:py-[34px]">
              <Link href={'/blog'}>blog</Link>
            </li>
          </ul>

          <Button
            btnName="Contact Us"
            className="bg-lightBlue px-4 lg:px-6 xl:px-[30px]"
            onClick={() => router.push('/contact-us')}
          />
        </div>
        <MenuSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </div>
  );
};

export default NavBar;
