'use client';

import dynamic from 'next/dynamic';
import 'react-modern-drawer/dist/index.css';
import { IDrawerCustomeProps } from '../type/type';

// 👇 Disable SSR for Drawer
const Drawer = dynamic(() => import('react-modern-drawer'), {
  ssr: false,
});

const CustomDrawer = ({
  open,
  onClose,
  direction,
  size,
  className,
  children,
}: IDrawerCustomeProps) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      direction={direction}
      size={size}
      className={className}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
