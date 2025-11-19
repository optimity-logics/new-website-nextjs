'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type projectCardProps = {
  key: number;
  data: {
    projectImg: string;
    projectName: string;
    projectDescription: string;
  };
};

const ProjectCard = ({ key, data }: projectCardProps) => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div
      key={key}
      className={` ${width >= 1280 ? ((key + 1) % 3 !== 2 ? 'mt-16' : '') : key % 2 === 0 ? 'md:mt-16' : ''} flex h-max flex-col gap-9`}
    >
      <div>
        <Image
          src={data?.projectImg || ''}
          alt={data?.projectName}
          width={500}
          height={500}
          className="aspect-[19/15] w-full rounded-[20px]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-opt text-2xl font-medium leading-7 text-white">
          {data?.projectName}
        </h3>
        <p className="font-opt text-lg font-normal leading-6 text-white/45">
          {data?.projectDescription}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
