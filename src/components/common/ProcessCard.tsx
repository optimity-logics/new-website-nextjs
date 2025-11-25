import React from 'react';

type processCardTtype = {
  index: number;
  data: { title: string; description: string };
};

const ProcessCard = ({ index, data }: processCardTtype) => {
  return (
    <div className="flex flex-col gap-[30px] rounded-[20px] bg-white/50 p-5 shadow-howWorkCard backdrop-blur-sm">
      <span className="flex h-[60px] max-w-[60px] items-center justify-center rounded-md bg-[#05ADE1] font-opt text-xl font-medium text-white">
        0{index + 1}
      </span>
      <div className="flex flex-col gap-3">
        <h5 className="font-opt text-xl font-medium leading-6 text-primary">
          {data?.title}
        </h5>
        <p className="font-opt text-base font-normal leading-5 text-optDesc">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default ProcessCard;
