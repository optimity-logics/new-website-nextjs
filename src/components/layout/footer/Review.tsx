import { reviewsData } from '@/components/utils/Constant';
import Image from 'next/image';
import React from 'react';
import star from '../../../../public/svg/review-on-site/star.svg';

const Review = () => {
  return (
    <div className="rounded-bl-2xl rounded-tr-2xl border border-[#ffffff4a] p-2 lg:p-3 xl:rounded-bl-3xl xl:rounded-tr-3xl xxl:px-6 xxl:py-9">
      <div className="no-scrollbar flex w-full flex-nowrap items-center gap-5 overflow-x-scroll">
        {reviewsData.map((item, index) => (
          <div
            key={index}
            className="flex w-[344px] min-w-[200px] items-center justify-between gap-5"
          >
            <div>
              <Image
                src={item?.siteIcon}
                alt={item?.siteIcon}
                width={88}
                height={20}
                className="object-scale-down"
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <Image src={star} alt="star" width={15} height={14} />
                <span className="font-opt text-base font-semibold leading-7 text-white">
                  {item?.review}
                </span>
              </div>
              {index !== reviewsData?.length - 1 && (
                <span className="h-7 w-0.5 bg-[#ffffff4a]"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
