'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type projectCardProps = {
  i: number;
  data: {
    projectImg: string;
    projectName: string;
    projectDescription: string;
  };
};

const ProjectCard = ({ i, data }: projectCardProps) => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div
      className={` ${width >= 1280 ? ((i + 1) % 3 !== 2 ? 'mt-16' : '') : i % 2 === 0 ? 'md:mt-16' : ''} flex h-max flex-col gap-9`}
    >
      <div>
        <Image
          src={data?.projectImg || ''}
          alt={data?.projectName}
          width={500}
          height={500}
          className="aspect-[13/15] w-full rounded-[20px]"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-opt text-lg font-medium leading-6 text-white">
          {data?.projectName}
        </h3>
        <p className="font-opt text-base font-normal leading-5 text-white/80">
          {data?.projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
