'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { menuData } from '@/components/utils/Constant';
import Image from 'next/image';
import phone from '../../../../public/svg/call.svg';
import mail from '../../../../public/svg/mail.svg';

type IMegaMenuProps = {
  setIsMegaMenuOpen: (val: boolean) => void;
};

export default function MegaMenu({ setIsMegaMenuOpen }: IMegaMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMenuEnter = (menuTitle: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuTitle);
    setActiveCategory(0);
    setIsMegaMenuOpen(true);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveCategory(0);
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const handleMegaMenuEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovering(true);
  };

  const handleMegaMenuLeave = () => {
    setIsHovering(false);

    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
      setActiveCategory(0);
      setIsMegaMenuOpen(false); // ✅ IMPORTANT FIX
    }, 150);
  };

  const activeMenuData = menuData.find((menu) => menu.menuTitle === activeMenu);

  const containerVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] },
    },
    exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 }, // start from right
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.03, // stagger effect
        duration: 0.25,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <nav className="relative hidden xl:block">
      <ul className="flex items-center gap-8">
        {menuData.map((item) => (
          <li
            key={item.menuTitle}
            className="relative py-4"
            onMouseEnter={() =>
              item.megaMenuItem.length > 0 && handleMenuEnter(item.menuTitle)
            }
            onMouseLeave={() => handleMenuLeave()}
          >
            {item.megaMenuItem.length === 0 ? (
              <Link
                href={`/${item.menuTitle.toLowerCase().replace(/s$/, '')}`}
                className={`py-4 font-opt text-base font-medium transition-colors duration-200 ${
                  activeMenu === item.menuTitle
                    ? 'text-lightBlue'
                    : 'text-optDesc hover:text-lightBlue'
                }`}
              >
                {item.menuTitle}
              </Link>
            ) : (
              <span
                className={`cursor-pointer py-4 font-opt text-base font-medium transition-colors duration-200 ${
                  activeMenu === item.menuTitle && isHovering
                    ? 'text-lightBlue'
                    : 'text-optDesc hover:text-lightBlue'
                }`}
              >
                {item.menuTitle}
              </span>
            )}
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {activeMenu &&
          activeMenuData &&
          activeMenuData.megaMenuItem.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute left-0 top-full z-50"
              onMouseEnter={handleMegaMenuEnter}
              onMouseLeave={handleMegaMenuLeave}
            >
              <div
                className={`mt-2 flex w-full overflow-hidden rounded-b-2xl border border-subtleWhite bg-ghostWhite shadow-2xl`}
              >
                {/* Left Sidebar - Category Tabs */}
                <div className="min-w-[120px] border-r border-subtleWhite bg-white py-3">
                  {activeMenuData.megaMenuItem.map((category, index) => (
                    <button
                      onMouseEnter={() => setActiveCategory(index)}
                      style={
                        {
                          '--cat-bg': category.backgroundColor,
                          '--cat-hover-bg': category.backgroundColor,
                        } as React.CSSProperties
                      }
                      key={index}
                      className={`relative w-full max-w-[350px] border-b border-b-subtleWhite px-6 py-3.5 text-left font-opt text-[15px] font-medium transition-all duration-200 last:border-b-0 ${
                        activeCategory === index
                          ? 'bg-[var(--cat-bg)] text-white'
                          : 'text-iconSubtle hover:bg-[var(--cat-hover-bg)]'
                      } `}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>

                {/* Right Panel - Services Grid */}
                <div className="min-w-[550px] flex-1 p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.25, ease: 'easeIn' }}
                    >
                      <h3 className="mb-5 border-b border-b-subtleWhite pb-3 font-opt text-lg font-semibold text-primary">
                        {activeMenuData.megaMenuItem[activeCategory]?.mainTitle}
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        {activeMenuData.megaMenuItem[activeCategory]?.items.map(
                          (item, index) => (
                            <motion.div
                              key={item.techName}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <Link
                                href={item.techLink}
                                onClick={() => setActiveMenu(null)}
                                className="group flex items-center font-opt text-[15px] font-normal text-primary transition-colors duration-200 hover:text-lightBlue"
                              >
                                <span className="transition-transform duration-200 group-hover:translate-x-1">
                                  {item.techName}
                                </span>
                              </Link>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="min-w-[270px] border-l border-subtleWhite bg-white px-3 py-4">
                  <div className="flex flex-col gap-5">
                    <Link
                      href="tel: +91 635 301 5499"
                      className="flex items-center gap-[15px]"
                    >
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-lightBlue">
                        <Image src={phone} alt="" width={18} height={18} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h6 className="font-opt text-sm font-medium leading-4 text-primary">
                          India
                        </h6>
                        <span className="font-opt text-sm font-normal lowercase leading-4 text-gray">
                          +91 635 301 5499
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="mailto:hr@optimitylogics.com"
                      className="flex items-center gap-[15px]"
                    >
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-lightBlue">
                        <Image src={mail} alt="" width={18} height={18} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h6 className="font-opt text-sm font-medium leading-4 text-primary">
                          hr enquiries
                        </h6>
                        <span className="font-opt text-[15px] font-normal lowercase leading-4 text-gray">
                          {' '}
                          hr@optimitylogics.com
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="mailto:info@optimitylogics.com"
                      className="flex items-center gap-[15px]"
                    >
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-lightBlue">
                        <Image src={mail} alt="" width={18} height={18} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h6 className="font-opt text-sm font-medium leading-4 text-primary">
                          sales enquiries
                        </h6>
                        <span className="font-opt text-[15px] font-normal lowercase leading-4 text-gray">
                          info@optimitylogics.com
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </nav>
  );
}
