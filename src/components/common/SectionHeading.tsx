'use client';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Link from 'next/link';
import arrowBtn from '../../../public/svg/arrow-btn.svg';
import Image from 'next/image';

interface IHeadingProps {
  heading: string;
  description: string;
  className?: string;
  btnName?: string;
  btnStyle?: string;
  LinkName?: string;
  LinkStyle?: string;
  descriptionStyle?: string;
  isDark?: boolean;
}

const HighlitedDescription = styled.h1`
  span {
    color: #e94e25;
  }
`;

const SectionHeading = ({
  heading,
  description,
  className,
  btnName,
  btnStyle,
  LinkName,
  LinkStyle,
  isDark,
  descriptionStyle,
}: IHeadingProps) => {
  return (
    <div className={`mx-auto flex flex-col items-center gap-3 ${className} `}>
      {btnName && <Button btnName={btnName} className={btnStyle} />}
      <HighlitedDescription
        dangerouslySetInnerHTML={{ __html: heading }}
        className={`text-center font-Poppins text-[25px] font-medium capitalize leading-[2.3rem] sm:text-4xl sm:leading-10 xl:text-[40px] xl:leading-[40px] 3xl:font-semibold 5xl:text-[50px] 5xl:leading-[54px] ${isDark ? 'text-white' : 'text-charcoalBlue'}`}
      />
      <p
        className={`text-center font-Poppins text-base font-normal leading-[21.15px] md:text-lg ${isDark ? 'text-white opacity-70' : 'text-primaryGray'} ${descriptionStyle}`}
      >
        {description}
      </p>
      {LinkName && (
        <Link
          href={'/'}
          className={`${LinkStyle} flex items-center gap-[15.32px] font-Poppins text-base font-semibold leading-6 text-red`}
        >
          {' '}
          {LinkName}
          <Image src={arrowBtn} alt="arrow" width={10} height={10} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeading;
