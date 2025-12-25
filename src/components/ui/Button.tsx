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
  isLoading?: boolean;
  isSuccess?: boolean;
}

const Button = ({
  btnName,
  className,
  onClick,
  redirectionLink,
  isBackgroung,
  isBackgroundLight,
  isButton,
  isLoading = false,
  isSuccess = false,
}: ButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  const DefaultStyle = `flex w-max items-center justify-center gap-1 rounded-[50px] border px-[14px] py-[8px] font-opt text-sm font-normal leading-4 transition-all duration-250 ease-in hover:shadow-lg ${isBackgroundLight ? 'border-transparent bg-white text-optDesc hover:border-white hover:bg-transparent hover:text-white' : `${isBackgroung ? 'border-transparent bg-lightBlue text-white hover:border-optDesc hover:bg-transparent hover:text-optDesc' : 'border-optDesc bg-transparent text-optDesc hover:border-transparent hover:bg-lightBlue hover:text-white'} ${isLoading ? '!bg-lightBlue text-white border-transparent' : ''}`} ${className}`;

  const Content = (
    <>
      <span className="mt-0.5">
        {isLoading ? 'Submitting…' : isSuccess ? 'Submitted' : btnName}
      </span>
      <span>
        {isLoading ? (
          <svg
            className="animate-spin"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
          </svg>
        ) : isSuccess ? (
          <svg
            className="h-6 w-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <AnimatedArrow hover={hover} />
        )}
      </span>
    </>
  );
  return isButton ? (
    <button
      disabled={isLoading}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={DefaultStyle}
    >
      {Content}
    </button>
  ) : (
    <Link
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={redirectionLink || ''}
      className={DefaultStyle}
      onClick={onClick}
    >
      {Content}
    </Link>
  );
};

export default Button;
