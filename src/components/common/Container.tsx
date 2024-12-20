import React from 'react';

interface ContainerProps {
  className?: string; // Optional prop to pass Tailwind classes
  children: React.ReactNode; // For rendering children inside the container
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={`${className} mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-8 xl:px-10 2xl:px-20 3xl:px-[100px]`}
    >
      {children}
    </div>
  );
};

export default Container;
