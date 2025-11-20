import React from 'react';

type cardProps = {
  key: number;
  data: { backGrouund: string; description: string; title: string };
};
const OurWorkCard = ({ key, data }: cardProps) => {
  return (
    <div
      key={key}
      className="rounded-xl bg-white px-[12px] pb-3 pt-[8px] shadow-work-card xl:rounded-[38px] xl:px-[32px] xl:pb-[20px]"
    >
      <div className="flex flex-col gap-3 xl:gap-[20px]">
        <div
          style={{ backgroundSize: '100% 100%' }}
          className={`flex w-full items-center justify-center ${data?.backGrouund} bg-cover bg-no-repeat py-6 font-opt text-[38px] font-medium leading-[42px] text-primary`}
        >
          {data?.title}
        </div>
        <span className="text-center font-opt text-base font-normal leading-5 text-optDesc">
          {data?.description}
        </span>
      </div>
    </div>
  );
};

export default OurWorkCard;
