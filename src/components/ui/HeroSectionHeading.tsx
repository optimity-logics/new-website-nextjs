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
      {LinkName && (
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseEnter}
          onMouseDown={handleMouseLeave}
          href={link || ''}
          className={`flex w-max items-center justify-center gap-1 rounded-[50px] border border-optDesc px-[14px] py-[8px] font-opt text-sm font-normal leading-4 text-optDesc transition-all duration-250 ease-in hover:border-transparent hover:bg-[#1A6AA3] hover:text-white hover:shadow-lg ${LinkStyle}`}
        >
          <span className="mt-0.5">{LinkName}</span>
          <span>
            <AnimatedArrow hover={hover} />
          </span>
        </Link>
      )}
    </div>
  );
};

export default HeroSectionHeading;
