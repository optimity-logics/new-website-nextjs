'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData } from '@/components/utils/Constant';
import phone from '../../../../public/svg/call.svg';
import mail from '../../../../public/svg/mail.svg';

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (menuTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuTitle);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMegaMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHovering(true);
  };

  const handleMegaMenuLeave = () => {
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.04, 0.62, 0.23, 0.98],
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const activeMenuData = menuData.find((menu) => menu.menuTitle === activeMenu);

  return (
    <nav className="relative hidden xl:block">
      <ul className="flex items-center gap-8">
        {menuData.map((item, index) => (
          <li
            key={index}
            className="relative"
            onMouseEnter={() =>
              item.megaMenuItem.length > 0 && handleMouseEnter(item.menuTitle)
            }
            onMouseLeave={handleMouseLeave}
          >
            {item.megaMenuItem.length === 0 ? (
              <Link
                href={`/${item.menuTitle.toLowerCase().replace(/\s+/g, '-')}`}
                className={`cursor-pointer py-7 font-base font-normal capitalize leading-6 tracking-[0.5px] text-iconSubtle transition-all duration-300 hover:text-lightBlue lg:py-5 ${activeMenu === item.menuTitle && isHovering ? 'text-lightBlue' : ''} `}
              >
                <span className="whitespace-pre text-base tracking-wide">
                  {item.menuTitle}
                </span>
              </Link>
            ) : (
              <div
                className={`cursor-pointer py-7 font-base font-normal capitalize leading-6 tracking-[0.5px] text-iconSubtle transition-all duration-300 hover:text-lightBlue lg:py-5 ${activeMenu === item.menuTitle && isHovering ? 'text-lightBlue' : ''}`}
              >
                <span className="text-base tracking-wide">
                  {item.menuTitle}
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {activeMenu &&
          activeMenuData &&
          activeMenuData.megaMenuItem.length > 0 && (
            <motion.div
              ref={megaMenuRef}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-full z-50 mt-2 w-max"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
                <div className="space-y-3 p-5">
                  <div className="flex flex-wrap justify-between gap-5 xl:flex-nowrap">
                    {activeMenuData.megaMenuItem.map((category, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col gap-6"
                      >
                        <div
                          className="flex items-center gap-3 rounded-[15px] py-2.5 pl-4 pr-5"
                          style={{
                            backgroundColor: category.backgroundColor,
                          }}
                        >
                          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white">
                            <Image
                              src={category.img}
                              alt={category.img}
                              width={24}
                              height={24}
                            />
                          </div>
                          <h4 className="whitespace-pre font-base text-base font-medium capitalize leading-6 text-iconSubtle">
                            {category.title}
                          </h4>
                        </div>
                        <ul className="flex flex-col gap-4">
                          {category.items.map((items, idx) => (
                            <li
                              key={idx}
                              onClick={() => setActiveMenu(null)}
                              className="group cursor-pointer pl-2 font-base text-[15px] font-normal capitalize leading-[18px] text-primarySubtle transition-all duration-300 hover:text-primary"
                            >
                              <Link
                                href={items.techLink}
                                className="flex items-center gap-2 whitespace-pre"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="12"
                                  viewBox="0 0 12 18"
                                  fill="currentColor"
                                  className="transition-all duration-300 group-hover:text-primary"
                                >
                                  <path d="M1.51749 0.782258C1.98612 0.313629 2.74592 0.313629 3.21455 0.782258L9.96455 7.53226C10.4332 8.00089 10.4332 8.76069 9.96455 9.22932L3.21455 15.9793C2.74592 16.4479 1.98612 16.4479 1.51749 15.9793C1.04886 15.5106 1.04886 14.7509 1.51749 14.2822L7.41896 8.38079L1.51749 2.47932C1.04886 2.01069 1.04886 1.25089 1.51749 0.782258Z" />
                                </svg>
                                {items.techName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center justify-evenly gap-5 border-t border-t-[#f0f0f0] px-2 pt-5">
                      <div className="flex items-center gap-[15px]">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-lightBlue">
                          <Image src={phone} alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-base text-sm font-medium capitalize leading-4 text-primary">
                            India
                          </h6>
                          <span className="font-base text-sm font-normal lowercase leading-4 text-gray">
                            +91 635 301 5499
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-[15px]">
                        <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-lightBlue">
                          <Image src={mail} alt="" width={24} height={24} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h6 className="font-base text-sm font-medium capitalize leading-4 text-primary">
                            hr enquiries
                          </h6>
                          <span className="font-base text-[15px] font-normal lowercase leading-4 text-gray">
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
                          <h6 className="font-base text-sm font-medium capitalize leading-4 text-primary">
                            sales enquiries
                          </h6>
                          <span className="font-base text-[15px] font-normal lowercase leading-4 text-gray">
                            info@optimitylogics.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </nav>
  );
}
