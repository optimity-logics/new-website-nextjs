import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  isBackground?: boolean;
  styleClass?: React.CSSProperties;
}

const Container = ({
  className,
  children,
  isBackground,
  styleClass,
}: ContainerProps) => {
  return (
    <div
      className={`${className} mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-10`}
      style={{
        backgroundColor: isBackground ? '#192020' : '',
        ...styleClass,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
