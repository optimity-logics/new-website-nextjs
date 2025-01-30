import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import close from '../../../public/svg/close.svg';
import mobileScreenLogo from '../../../public/svg/mobileScreenLogo.svg';
import useWindowSize from '../hooks/useWindowSize';
import { IMenuSidebarProps } from '../type/type';
import { AccordionMenuItemData } from '../utils/Constant';
import React from 'react';

const MenuSidebar = ({ isOpen, setIsOpen }: IMenuSidebarProps) => {
  const { width } = useWindowSize();
  // const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // const handleToggle = (index: number) => {
  //   setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

  useEffect(() => {
    if (width >= 1024) {
      setIsOpen(false); // Close drawer on large screens
    }
  }, [width, setIsOpen]);
  const handleCloseDrower = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div>
      <Drawer
        open={isOpen}
        onClose={handleCloseDrower}
        direction="left"
        style={{ width: '100%', overflowY: 'scroll' }}
      >
        <div>
          <div className="sticky top-0 z-[9999] flex items-center justify-between border-b border-b-bluishGray bg-white p-5">
            <Link href={'/'}>
              <Image
                src={mobileScreenLogo}
                alt="nav-logo"
                width={42}
                height={39}
                onClick={handleCloseDrower}
              />
            </Link>

            <Image
              src={close}
              alt="close-btn"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={handleCloseDrower}
            />
          </div>
          <div className="flex flex-col gap-2 p-5">
            <Accordion variant="splitted">
              {AccordionMenuItemData &&
                AccordionMenuItemData.map((item, index) => {
                  return (
                    <AccordionItem
                      key={index}
                      aria-label={`Accordion ${index + 1}`}
                      title={
                        <div className={`!py-0`}>
                          <span className="font-Poppins text-lg font-medium leading-[21.78px] text-secBlack md:text-xl md:leading-6">
                            {item?.title}
                          </span>
                        </div>
                      }
                      className="accordion-title !rounded-none border-b-0 px-0 !shadow-none"
                    >
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {item?.subMenu.map((itm, ind) => (
                          <React.Fragment key={ind}>
                            <div className="flex w-full flex-col gap-6">
                              <div
                                className="flex items-center gap-3 rounded-[15px] px-3 py-2.5"
                                style={{
                                  backgroundColor: itm?.backgroundColor,
                                }}
                              >
                                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                                  <Image
                                    src={itm?.img}
                                    alt={itm?.img}
                                    width={24}
                                    height={24}
                                  />
                                </div>
                                <h4 className="font-Poppins text-lg font-medium capitalize leading-6 text-[#192020]">
                                  {item.title}
                                </h4>
                              </div>
                              <ul className="flex flex-col gap-5">
                                {itm.items.map((items, idx) => (
                                  <li
                                    key={idx}
                                    onClick={handleCloseDrower}
                                    className="w-full cursor-pointer pl-2 font-Poppins text-[15px] font-normal capitalize leading-[18px] text-gray transition-all duration-300 hover:text-charcoalBlue"
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
                                        className="transition-all duration-300"
                                        fill="currentColor"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M1.51749 0.782258C1.98612 0.313629 2.74592 0.313629 3.21455 0.782258L9.96455 7.53226C10.4332 8.00089 10.4332 8.76069 9.96455 9.22932L3.21455 15.9793C2.74592 16.4479 1.98612 16.4479 1.51749 15.9793C1.04886 15.5106 1.04886 14.7509 1.51749 14.2822L7.41896 8.38079L1.51749 2.47932C1.04886 2.01069 1.04886 1.25089 1.51749 0.782258Z"
                                        />
                                      </svg>

                                      {items?.techName}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </React.Fragment>
                        ))}
                      </div>
                    </AccordionItem>
                  );
                })}
            </Accordion>
            <Link
              href={'/'}
              onClick={handleCloseDrower}
              className="px-2 py-2.5 font-Poppins text-lg font-medium leading-[21.78px] text-secBlack md:text-xl md:leading-6"
            >
              Blog
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuSidebar;
