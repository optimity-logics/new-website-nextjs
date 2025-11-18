'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AnimatedArrow from '../common/AnimatedArrow';

interface IHeadingProps {
  heading: string;
  description?: string;
  className?: string;
  badgeTitle?: string;
  badgeStyle?: string;
  LinkName?: string;
  LinkStyle?: string;
  descriptionStyle?: string;
  isDark?: boolean;
  headingStyle?: string;
  link?: string;
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
  LinkName,
  LinkStyle,
  isDark,
  descriptionStyle,
  headingStyle,
  link,
}: IHeadingProps) => {
  const [hover, setHover] = useState<boolean>(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className={`flex flex-col gap-5 ${className} `}>
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
        className={`font-opt text-4xl font-semibold leading-10 lg:text-[40px] lg:font-bold lg:leading-[48px] 3xl:text-[62px] 3xl:leading-[68px] ${isDark ? 'text-white' : 'text-primary'} ${headingStyle}`}
      />
      {description && (
        <p
          className={`font-opt text-lg font-normal leading-6 3xl:text-xl 3xl:leading-7 ${isDark ? 'text-white opacity-70' : 'text-optDesc'} ${descriptionStyle}`}
        >
          {description}
        </p>
      )}
      {LinkName && (
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseEnter}
          onMouseDown={handleMouseLeave}
          href={link || ''}
          className={`flex h-10 w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-opt text-base font-normal leading-tight text-white ${LinkStyle}`}
        >
          {LinkName}
          <AnimatedArrow hover={hover} />
        </Link>
      )}
    </div>
  );
};

export default HeroSectionHeading;
