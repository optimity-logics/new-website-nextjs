'use client';
import Container from '@/components/common/Container';
import { blogData } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Tabs, Tab } from '@nextui-org/tabs';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonForBlogContent from '@/components/skeleton/SkeletonForBlogContent';

const Blog = () => {
  const [activeKey, setActiveKey] = useState<string>(
    blogData[0]?.blogHeading || '',
  );
  const [loading, setLoading] = useState<boolean>(false);
  // Handle tab change
  const handleTabChange = async (activetab: string) => {
    setActiveKey(activetab);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
  };

  const selectedblog = blogData.find((item) => item.blogHeading === activeKey);

  useEffect(() => {
    setLoading(true);
    handleTabChange(activeKey);
  }, [activeKey]);
  return (
    <>
      <div className="bg-careerBanner bg-cover bg-center bg-no-repeat py-[120px]">
        <Container>
          <h2 className="text-center font-Poppins text-4xl font-medium leading-[40px] tracking-[-0.16px] text-white md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:leading-[50px] 4xl:text-[50px] 4xl:font-semibold 5xl:text-[55px] 5xl:leading-[60px]">
            Blog
          </h2>
        </Container>
      </div>
      <div className="mb-8 bg-[#f38f0230] py-[13.01px] 3xl:mb-10 4xl:mb-[60px]">
        <div className="no-scrollbar mx-auto w-full max-w-[1920px] overflow-x-auto px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-20 5xl:px-[100px]">
          <Tabs
            aria-label="Blog Tabs"
            aria-labelledby="blog-tabs"
            className="!w-full"
            variant="underlined"
            selectedKey={activeKey}
            onSelectionChange={(e) => handleTabChange(e as string)}
          >
            {blogData.map((item) => (
              <Tab
                key={item.blogHeading}
                title={item?.blogHeading}
                className="!w-full font-Inter text-base font-semibold leading-6 text-[#04121F]"
              />
            ))}
          </Tabs>
        </div>
      </div>
      {loading ? (
        <SkeletonForBlogContent selectedblog={selectedblog} />
      ) : selectedblog ? (
        <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
          <div className="grid grid-cols-1 gap-[46px] md:grid-cols-2 lg:grid-cols-3">
            {selectedblog &&
              selectedblog?.data?.map((item, index) => (
                <div
                  key={index}
                  className="group flex h-full min-h-full cursor-pointer flex-col gap-6 xl:gap-8"
                >
                  <div>
                    <Image
                      src={item?.img}
                      alt={item?.img}
                      width={542}
                      height={230}
                    />
                  </div>
                  <div className="flex h-full flex-col justify-between gap-[17.39px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-Poppins text-xl font-medium leading-6 text-[#192020] 5xl:text-[26px] 5xl:leading-8">
                        {item?.title}
                      </h3>
                      <p className="font-Poppins text-base font-light leading-[1.6rem] text-[#192020] 5xl:text-lg 5xl:leading-[1.8rem]">
                        {item?.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href={'/'}
                        className="font-Poppins text-sm font-medium leading-[19.6px] text-red"
                      >
                        Continue Reading
                      </Link>
                      <div className="relative mt-[5px] h-0.5 w-full bg-lightSilver">
                        <span className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-300 ease-out group-hover:w-full"></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      ) : (
        <p>No data found for the selected tab.</p>
      )}
    </>
  );
};

export default Blog;
