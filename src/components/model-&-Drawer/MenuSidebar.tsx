import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import add from '../../../public/svg/add.svg';
import minus from '../../../public/svg/minus.svg';
import mobileScreenLogo from '../../../public/svg/mobileScreenLogo.svg';
import useWindowSize from '../hooks/useWindowSize';
import { IMenuSidebarProps } from '../type/type';
import { AccordionMenuItemData } from '../utils/Constant';

const MenuSidebar = ({ isOpen, setIsOpen }: IMenuSidebarProps) => {
  const { width } = useWindowSize();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (width >= 768) {
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
        style={{ width: '75%' }}
      >
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between p-2">
            <Link href={'/'}>
              <Image
                src={mobileScreenLogo}
                alt="nav-logo"
                width={42}
                height={39}
                onClick={handleCloseDrower}
              />
            </Link>
          </div>
          <Accordion variant="splitted">
            {AccordionMenuItemData &&
              AccordionMenuItemData.map((item, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <AccordionItem
                    key={index}
                    aria-label={`Accordion ${index + 1}`}
                    title={
                      <div
                        className={` ${isExpanded ? 'py-0' : '2xl:py-1 3xl:py-5'} `}
                      >
                        <span className="font-Inter text-xl font-medium leading-6 text-charcoalBlue md:text-2xl md:leading-[29.05px]">
                          {item?.title}
                        </span>
                      </div>
                    }
                    indicator={
                      <Image
                        src={isExpanded ? minus : add}
                        alt={isExpanded ? 'Collapse' : 'Expand'}
                        width={24}
                        height={24}
                        className={`${isExpanded && 'rotate-90'}`}
                      />
                    }
                    className="!rounded-none border-b !border-b-[#1110221a] px-0 !shadow-none"
                    onPress={() => handleToggle(index)}
                  >
                    {item?.subMenu.map((items, ind) => (
                      <p
                        key={ind}
                        className="w-full max-w-[619px] pb-3 font-Inter text-base font-normal leading-[19.36px] text-charcoalBlue opacity-50 lg:ml-[72px] xl:ml-20"
                      >
                        {items}
                      </p>
                    ))}
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
      </Drawer>
    </div>
  );
};

export default MenuSidebar;
