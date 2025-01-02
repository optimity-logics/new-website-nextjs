import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ITechnologyType {
  selectedTechnology?: string[];
}

const SkeletonForTechnologyWeWork = ({
  selectedTechnology = [],
}: ITechnologyType) => {
  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row lg:gap-8">
      <div className="w-full lg:max-w-[400px] 5xl:max-w-[500px]">
        <Skeleton height={457} width="100%" borderRadius={16} />
      </div>
      <div className="flex w-full flex-col gap-3 lg:gap-8">
        <div className="flex w-full flex-col gap-2 lg:gap-7">
          <Skeleton height={52} width={214} borderRadius={6} />
          <div className="flex flex-col gap-2 lg:gap-7">
            <Skeleton count={4} />
            <Skeleton count={4} />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {Array.from({
            length: (selectedTechnology && selectedTechnology?.length) || 12,
          }).map((_, index) => (
            <Skeleton key={index} width={100} height={29} borderRadius={4} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonForTechnologyWeWork;
