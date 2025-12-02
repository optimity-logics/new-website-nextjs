'use client';
import React from 'react';
import styled from 'styled-components';

type sectionProps = {
  headingText?: string;
  descriptionText?: string;
  className?: string;
  isSectionDark?: boolean;
  headingStyle?: string;
  descriptionStyle?: string;
};
const HighlitedDescription = styled.h2``;
const SectionHeader = ({
  headingText,
  descriptionText,
  className,
  isSectionDark,
  headingStyle,
  descriptionStyle,
}: sectionProps) => {
  return (
    <>
      <div className={`flex flex-col gap-5 ${className}`}>
        {headingText && (
          <HighlitedDescription
            dangerouslySetInnerHTML={{
              __html: headingText || '',
            }}
            className={`font-opt text-[44px] font-medium leading-[48px] ${isSectionDark ? 'text-white' : 'text-primary'} ${headingStyle}`}
          />
        )}
        {descriptionText && (
          <p
            className={`w-full max-w-[800px] text-center font-opt text-base font-normal leading-5 ${isSectionDark ? 'text-white/40' : 'text-optDesc'} ${descriptionStyle}`}
          >
            {descriptionText}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
