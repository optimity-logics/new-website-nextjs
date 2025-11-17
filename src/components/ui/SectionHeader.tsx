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
            className={`font-opt text-[40px] font-bold leading-tight ${isSectionDark ? 'text-white' : 'text-primary'} ${headingStyle}`}
          />
        )}
        {descriptionText && (
          <p
            className={`w-full max-w-[900px] text-center font-opt text-xl font-normal leading-7 ${isSectionDark ? 'text-white/40' : 'text-subtle'} ${descriptionStyle}`}
          >
            {descriptionText}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionHeader;
