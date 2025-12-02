'use client';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

interface IHeadingProps {
  heading: string;
  description?: string;
  className?: string;
  badgeTitle?: string;
  badgeStyle?: string;
  btnName?: string;
  btnStyle?: string;
  descriptionStyle?: string;
  isDark?: boolean;
  headingStyle?: string;
  link?: string;
  isBtnBackgroundLight?: boolean;
}

const HighlitedDescription = styled.h1`
  span {
    color: #e94e25;
  }
`;

const HeroSectionHeading = ({
  heading,
  description,
  className,
  badgeTitle,
  badgeStyle,
  btnName,
  btnStyle,
  isDark,
  descriptionStyle,
  headingStyle,
  isBtnBackgroundLight,
  link,
}: IHeadingProps) => {
  return (
    <div className={`flex flex-col gap-5 ${className} max-w-[600px]`}>
      {badgeTitle && (
        <div
          className={`w-max rounded-full border-1 border-[#D6DDE0] bg-[#F7F9FA] px-4 py-1 shadow-default ${badgeStyle}`}
        >
          <span className="line-clamp-1 font-opt text-sm leading-7 text-primary">
            {badgeTitle}
          </span>
        </div>
      )}
      <HighlitedDescription
        dangerouslySetInnerHTML={{ __html: heading }}
        className={`font-opt text-4xl font-semibold leading-10 lg:text-[40px] lg:font-bold lg:leading-[48px] 3xl:text-[60px] 3xl:leading-[64px] ${isDark ? 'text-white' : 'text-primary'} ${headingStyle}`}
      />
      {description && (
        <p
          className={`font-opt text-base font-normal leading-6 ${isDark ? 'text-white opacity-70' : 'text-optDesc'} ${descriptionStyle}`}
        >
          {description}
        </p>
      )}
      {btnName && (
        <Button
          btnName={btnName}
          redirectionLink={link}
          className={btnStyle}
          isBackgroundLight={isBtnBackgroundLight}
        />
      )}
    </div>
  );
};

export default HeroSectionHeading;
