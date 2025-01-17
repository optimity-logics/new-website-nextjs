import { ReactNode } from 'react';

export interface IFooterDataType {
  title: string;
  items: string[];
}

export interface IMenuSidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  // toggleDrawer: () => void;
}

// custome drawer type
export interface IDrawerCustomeProps {
  open: boolean;
  onClose: () => void;
  direction: 'left' | 'right' | 'top' | 'bottom';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'full' | number | string;
  className?: string;
  children: ReactNode;
}

export interface IAccordionDataType {
  title: ReactNode;
  content: ReactNode;
}

export interface IBlogType {
  blogHeading: string;
  data: {
    img: string;

    title: string;

    description: string;
  }[];
}
