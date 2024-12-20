import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { IDrawerCustomeProps } from '../type/type';

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
      className={className}
      open={open}
      onClose={onClose}
      direction={direction}
      size={size}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
