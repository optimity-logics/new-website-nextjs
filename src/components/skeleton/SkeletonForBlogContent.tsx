import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Container from '../common/Container';
import { IBlogType } from '../type/type';

interface IBlogTypes {
  selectedblog?: IBlogType;
}

const SkeletonForBlogContent = ({ selectedblog }: IBlogTypes) => {
  return (
    <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
      <div className="grid grid-cols-1 gap-[46px] md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: selectedblog?.data.length || 6 }).map(
          (_, index) => (
            <div
              key={index}
              className="group flex h-full min-h-full cursor-pointer flex-col gap-6 xl:gap-7"
            >
              <Skeleton
                height="100%"
                width="100%"
                className="min-h-[190px] xl:min-h-[280ox]"
                borderRadius={11.41}
              />
              <div className="flex h-full flex-col justify-between gap-[17.39px]">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <Skeleton width="95%" height={22} />
                    <Skeleton width="85%" height={22} />
                  </div>
                  <Skeleton width="100%" height={16} />
                  <Skeleton width="83%" height={16} />
                </div>
                <div className="flex flex-col gap-3">
                  <Skeleton width={120} height={20} />
                  <div className="relative mt-[5px] h-0.5 w-full bg-lightSilver">
                    <span className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-300 ease-out group-hover:w-full"></span>
                  </div>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex w-full items-center gap-[13px]">
                      <Skeleton width={45} height={45} borderRadius={50} />
                      <Skeleton width={100} height={16} />
                    </div>
                    <Skeleton width={180} height={16} />
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </Container>
  );
};

export default SkeletonForBlogContent;
