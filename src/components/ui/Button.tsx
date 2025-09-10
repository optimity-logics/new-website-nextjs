import React from 'react';

interface ButtonProps {
  btnName: string;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const Button = ({ btnName, className, onClick, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer rounded-[5px] py-[14px] font-base text-base leading-[19.36px] text-white 5xl:text-lg ${className}`}
    >
      {btnName}
    </button>
  );
};

export default Button;
