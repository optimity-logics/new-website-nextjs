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
      className={`${className} mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-20 5xl:px-[100px]`}
      style={{
        backgroundColor: isBackground ? '#000' : '',
        ...styleClass,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
