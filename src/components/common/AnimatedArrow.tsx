import React from 'react';

type AnimatedArrowProps = {
  hover?: boolean;
};

const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ hover = false }) => {
  return (
    <span>
      <svg
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`animated-arrow ${hover ? 'focus' : ''}`}
          d="M3 10H10.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          className={`animated-arrow-2 ${hover ? 'focus' : ''}`}
          d="M7.25 13.5L10.75 10L7.25 6.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default AnimatedArrow;
