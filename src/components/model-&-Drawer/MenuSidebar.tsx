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

const MenuSidebar = ({ isOpen, setIsOpen }: IMenuSidebarProps) => {
  const { width } = useWindowSize();
  // const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // const handleToggle = (index: number) => {
  //   setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

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
        style={{ width: '75%', overflowY: 'scroll' }}
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
            <Link
              href={'/'}
              onClick={handleCloseDrower}
              className="px-2 py-2.5 font-Poppins text-lg font-medium leading-[21.78px] text-secBlack md:text-xl md:leading-6"
            >
              Home
            </Link>
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
                      {item?.subMenu &&
                        item?.subMenu.map((items, ind) => (
                          <Link
                            href={'/'}
                            key={ind}
                            onClick={handleCloseDrower}
                            className="mb-3 block w-full max-w-[619px] font-Poppins text-base font-normal leading-[19.36px] text-charcoalBlue opacity-50 lg:ml-[72px] xl:ml-20"
                          >
                            {items}
                          </Link>
                        ))}
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
