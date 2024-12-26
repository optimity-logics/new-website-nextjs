import { reviewsData } from '@/components/utils/Constant';
import Image from 'next/image';
import React from 'react';
import star from '../../../../public/svg/review-on-site/star.svg';

const Review = () => {
  return (
    <div className="rounded-[10px] border border-[#ffffff4a] px-6 py-9">
      <div className="no-scrollbar flex w-full flex-nowrap items-center overflow-x-scroll">
        {reviewsData.map((item, index) => (
          <div
            key={index}
            className="flex w-[344px] min-w-[200px] items-center justify-evenly gap-5"
          >
            <div>
              <Image
                src={item?.siteIcon}
                alt={item?.siteIcon}
                width={88}
                height={24}
              />
            </div>
            <div className="flex items-center gap-1.5">
              <Image src={star} alt="star" width={15} height={14} />
              <span className="font-Poppins text-base font-semibold leading-7 text-white">
                {item?.review}
              </span>
            </div>
            {index !== reviewsData?.length - 1 && (
              <span className="h-7 w-0.5 bg-[#ffffff4a]"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
