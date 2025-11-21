'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedArrow from '../common/AnimatedArrow';

interface ButtonProps {
  btnName: string;
  className?: string;
  redirectionLink?: string;
  isBackgroung?: boolean;
  isBackgroundLight?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isButton?: boolean;
}

const Button = ({
  btnName,
  className,
  onClick,
  redirectionLink,
  isBackgroung,
  isBackgroundLight,
  isButton,
}: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  const DefaultStyle = `flex w-max items-center justify-center gap-1 rounded-[50px] border px-[14px] py-[8px] font-opt text-sm font-normal leading-4 transition-all duration-250 ease-in hover:shadow-lg ${isBackgroundLight ? 'border-transparent bg-white text-optDesc hover:border-white hover:bg-transparent hover:text-white' : `${isBackgroung ? 'border-transparent bg-[#1A6AA3] text-white hover:border-optDesc hover:bg-transparent hover:text-optDesc' : 'border-optDesc bg-transparent text-optDesc hover:border-transparent hover:bg-[#1A6AA3] hover:text-white'}`} ${className}`;
  return (
    <>
      {isButton ? (
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseEnter}
          onMouseDown={handleMouseLeave}
          onClick={onClick}
          className={DefaultStyle}
        >
          <span className="mt-0.5">{btnName}</span>
          <span>
            <AnimatedArrow hover={hover} />
          </span>
        </button>
      ) : (
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseEnter}
          onMouseDown={handleMouseLeave}
          href={redirectionLink || ''}
          onClick={onClick}
          className={DefaultStyle}
        >
          <span className="mt-0.5">{btnName}</span>
          <span>
            <AnimatedArrow hover={hover} />
          </span>
        </Link>
      )}
    </>
  );
};

export default Button;
