'use client';

import React from 'react';
import Marquee from 'react-fast-marquee';

interface MarqueeWrapperProps {
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  gradient?: boolean;
  className?: string;
  children: React.ReactNode;
}

const MarqueeWrapper: React.FC<MarqueeWrapperProps> = ({
  speed = 40,
  direction = 'left',
  pauseOnHover = true,
  gradient = false,
  className = '',
  children,
}) => {
  return (
    <Marquee
      speed={speed}
      direction={direction}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      className={` ${className}`}
    >
      <div className="flex items-center gap-8">{children}</div>
    </Marquee>
  );
};

export default MarqueeWrapper;
