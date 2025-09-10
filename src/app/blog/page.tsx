'use client';
import Container from '@/components/ui/Container';
import { blogData } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
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
      <Container className="py-10 3xl:py-14 5xl:py-20">
        <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
          <span className="rounded-[32px] bg-orange px-[14px] py-2.5 font-base text-base font-normal leading-6 text-white">
            Blogs
          </span>
          <h2 className="text-center font-base text-4xl font-medium leading-[40px] tracking-[-0.16px] text-primary md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:leading-[50px] 4xl:text-[60px] 4xl:font-semibold 4xl:leading-[64px] 5xl:text-[75px] 5xl:leading-[80px]">
            The Optimity Logics Blogs
          </h2>
          <p className="font-base text-xl font-normal leading-7 text-[#504C4C]">
            Where innovation meets progress.
          </p>
        </div>
      </Container>
      {loading ? (
        <SkeletonForBlogContent selectedblog={selectedblog} />
      ) : selectedblog ? (
        <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
          <div className="grid grid-cols-1 gap-[46px] md:grid-cols-2 lg:grid-cols-3">
            {selectedblog &&
              selectedblog?.data?.map((item, index) => (
                <div
                  key={index}
                  className="group flex h-full min-h-full cursor-pointer flex-col gap-[11.21px]"
                >
                  <div>
                    <Image
                      src={item?.img}
                      alt={item?.img}
                      width={542}
                      height={230}
                    />
                  </div>
                  <div className="flex h-full flex-col justify-between gap-[15px]">
                    <div className="flex flex-col gap-2.5">
                      <h5 className="font-base text-xl font-semibold leading-[25.56px] text-[#E94E25]">
                        {item?.projectName}
                      </h5>
                      <div className="flex flex-col gap-4">
                        <h3 className="font-base text-xl font-bold leading-6 text-primary 5xl:text-[22px] 5xl:leading-7">
                          {item?.title}
                        </h3>
                        <p className="font-base text-base font-light leading-[1.6rem] text-[#504C4C] 5xl:text-lg 5xl:font-normal 5xl:leading-[25.56px]">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <Link
                        href={'/'}
                        className="font-base text-sm font-medium leading-[19.6px] text-red"
                      >
                        Continue Reading
                      </Link>
                      <div className="relative h-0.5 w-full bg-lightSilver">
                        <span className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-300 ease-out group-hover:w-full"></span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-[13px]">
                          <Image
                            src={item?.projectManager || ''}
                            alt="pm-img"
                            width={45}
                            height={45}
                          />
                          <span className="font-base text-base font-medium leading-[22.36px] text-[#0c0c0c]">
                            {item?.projectManagerName}
                          </span>
                        </div>
                        <span className="font-base text-base font-medium leading-[22.36px] text-[#0c0c0c]">
                          {item?.projectReleaseDate}
                        </span>
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
      <div className="bg-[#F8F8F8]">
        <Container className="py-10 3xl:py-14 5xl:py-20">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <h5 className="font-base text-[26px] font-medium leading-8 text-primary">
                Sign Up for the Latest Insights
              </h5>
              <p className="text-center font-base text-lg font-normal leading-6 text-primary">
                Get a free access of our exclusive research and tech strategies
                to level up your knowledge about the digital realm.
              </p>
            </div>

            <form className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-5 rounded-[30px] border-2 border-[#D4D4D4] pr-1.5">
                {' '}
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full rounded-[30px] border-none bg-transparent p-3 font-base text-base font-normal leading-6 focus:outline-none sm:min-w-[450px] md:py-4 md:pl-5 md:text-lg"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-[30px] bg-lightBlue px-[15px] py-2.5 font-base text-sm font-semibold uppercase leading-4 text-white md:py-3.5 md:text-lg md:leading-5"
                >
                  subscribe
                </button>
              </div>
              <div className="flex items-start gap-1 lg:items-center">
                <input type="checkbox" className="mt-1 lg:mt-0" />
                <span className="font-base text-base font-normal leading-5 text-[#192020] lg:text-lg lg:leading-6">
                  I hereby agree to receive newsletters from Optimity Logics and
                  acknowledge company&#39;s
                  <Link href={''} className="text-lightBlue underline">
                    Privacy Policy.
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;
