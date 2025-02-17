'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import arrow from '../../../../public/svg/fat-arrow.svg';
import Container from '@/components/common/Container';
import {
  insightsPageData,
  latestBlog,
  latestIndustryInsightsData,
  latestPodcast,
  latestVideo,
} from '@/components/utils/Constant';
import { Tabs, Tab } from '@nextui-org/tabs';
import SectionHeading from '@/components/common/SectionHeading';

const Insights = () => {
  const [activeKey, setActiveKey] = useState<string>(
    insightsPageData[0]?.technologyName,
  );
  const [activeKeyForLatest, setActiveKeyForLatest] = useState<string>(
    latestIndustryInsightsData[0]?.technologyName,
  );
  // const [loading, setLoading] = useState<boolean>(false);
  const handlChangeTechnology = (activetab: string) => {
    // setLoading(true);
    setActiveKey(activetab);
    // setTimeout(() => setLoading(false), 900);
  };
  const handlChangeLatestInsights = (activetabForInsights: string) => {
    // setLoading(true);
    setActiveKeyForLatest(activetabForInsights);
    // setTimeout(() => setLoading(false), 900);
  };

  const selectedTechnology = insightsPageData.find(
    (tech) => tech.technologyName === activeKey,
  );
  const selectedTechnologyForLatest = latestIndustryInsightsData.find(
    (tech) => tech.technologyName === activeKeyForLatest,
  );
  return (
    <>
      <div
        className="bg-PrivacyPolicy bg-cover bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <div className="mx-auto flex max-w-[1217px] flex-col items-center gap-2 px-4 py-20 sm:px-6 md:px-8 xl:px-10 3xl:px-0">
          <h2 className="font-Inter text-4xl font-semibold leading-[44px] tracking-[-2%] text-black lg:text-[44px] lg:leading-[82.3px] 4xl:text-[60px]">
            Discover Your Space for Tech Insights
          </h2>
          <p className="text-center font-Inter text-lg font-normal leading-[29px] text-[#727265] 4xl:px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <Link
            href="/"
            className="mt-5 flex items-center gap-2.5 rounded-[39px] bg-red px-[21px] py-4 font-Inter text-lg font-medium leading-[22px] text-white"
          >
            View Blogs <Image src={arrow} alt="arrow" width={24} height={24} />
          </Link>
        </div>
      </div>
      <Container className="mb-10 pt-10 xl:mb-20 5xl:mb-[120px] 5xl:px-[150px]">
        <div className="flex flex-col items-center gap-8 xxl:gap-10 5xl:gap-[55px]">
          <div className="no-scrollbar mx-auto max-w-full !overflow-x-scroll">
            <Tabs
              aria-label="Technology Tabs"
              color="default"
              aria-labelledby="technology-tabs"
              radius="full"
              selectedKey={activeKey}
              className="!font-Poppins !text-base !font-normal !leading-[28.8px]"
              onSelectionChange={(e) => handlChangeTechnology(e as string)}
            >
              {insightsPageData.map((tech) => (
                <Tab
                  key={tech.technologyName}
                  title={tech.technologyName}
                  className="h-11 !px-[22px] !py-4 !font-Poppins !text-base !font-normal !leading-5"
                ></Tab>
              ))}
            </Tabs>
          </div>
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {selectedTechnology &&
              selectedTechnology?.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 rounded-[10px] bg-[#f8f8f8] p-5"
                >
                  <div>
                    <Image
                      src={item?.technologyImage}
                      alt="tech-img"
                      width={478}
                      height={268}
                      className="w-full rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2.5">
                      <span className="font-Inter text-lg font-medium leading-6 text-red">
                        {item?.technologyWeWorkOn}
                      </span>
                      <h3 className="font-Inter text-[21px] font-medium leading-[26px] text-black">
                        {item?.techHeading}
                      </h3>
                    </div>
                    <p className="line-clamp-2 font-Inter text-xl font-light leading-6 text-[#524c4c]">
                      {item?.techDescription}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <div
        className="bg-projectSectionBg bg-contain bg-right bg-no-repeat"
        style={{ backgroundColor: '#192020', backgroundSize: '100% 100%' }}
      >
        <Container className="mb-10 py-10 md:mb-12 xl:mb-16 4xl:mb-[120px] 4xl:py-20 5xl:px-[150px]">
          <div className="flex flex-col items-center gap-7 lg:gap-10">
            <SectionHeading
              heading="Get the Latest  <span> Industry Insights </span> "
              description="Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all."
              className="max-w-[1299px] 4xl:!gap-5"
              isDark={true}
            />
            <div className="no-scrollbar mx-auto max-w-full !overflow-x-scroll">
              <Tabs
                aria-label="Technology Tabs"
                color="default"
                aria-labelledby="technology-tabs"
                radius="full"
                selectedKey={activeKeyForLatest}
                className="latest !font-Poppins !text-base !font-normal !leading-[28.8px]"
                onSelectionChange={(e) =>
                  handlChangeLatestInsights(e as string)
                }
              >
                {latestIndustryInsightsData.map((tech) => (
                  <Tab
                    key={tech.technologyName}
                    title={tech.technologyName}
                    className="h-11 !px-[22px] !py-4 !font-Poppins !text-base !font-normal !leading-5"
                  ></Tab>
                ))}
              </Tabs>
            </div>
            <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
              {selectedTechnologyForLatest &&
                selectedTechnologyForLatest?.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-5 rounded-[10px] bg-white/10 p-5"
                  >
                    <div>
                      <Image
                        src={item?.technologyImage}
                        alt="tech-img"
                        width={478}
                        height={268}
                        className="w-full rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2.5">
                        <span className="font-Inter text-lg font-medium leading-6 text-white">
                          {item?.technologyWeWorkOn}
                        </span>
                        <h3 className="font-Inter text-[21px] font-medium leading-[26px] text-white">
                          {item?.techHeading}
                        </h3>
                      </div>
                      <p className="line-clamp-2 font-Inter text-xl font-light leading-6 text-white">
                        {item?.techDescription}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </div>
      <Container className="mb-10 pt-10 xl:mb-20 5xl:mb-[120px] 5xl:px-[150px]">
        <div className="flex flex-col items-center gap-7 lg:gap-10">
          <SectionHeading
            heading="Latest  <span> Blogs </span> "
            description="Explore our latest research on cutting-edge tech trends and discoveries to stay ahead in this digital-first landscape!"
            className="max-w-[1299px]"
          />
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {latestBlog &&
              latestBlog?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 rounded-[10px] bg-[#f8f8f8] p-5"
                >
                  <div>
                    <Image
                      src={item?.technologyImage}
                      alt="tech-img"
                      width={478}
                      height={268}
                      className="w-full rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2.5">
                      <span className="font-Inter text-lg font-medium leading-6 text-red">
                        {item?.technologyWeWorkOn}
                      </span>
                      <h3 className="font-Inter text-[21px] font-medium leading-[26px] text-black">
                        {item?.techHeading}
                      </h3>
                    </div>
                    <p className="line-clamp-2 font-Inter text-xl font-light leading-6 text-[#524c4c]">
                      {item?.techDescription}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <div
        className="bg-projectSectionBg bg-contain bg-right bg-no-repeat"
        style={{ backgroundColor: '#192020', backgroundSize: '100% 100%' }}
      >
        <Container className="mb-10 py-10 md:mb-12 xl:mb-16 4xl:mb-[120px] 4xl:py-20 5xl:px-[150px]">
          <div className="flex flex-col items-center gap-7 lg:gap-10">
            <SectionHeading
              heading="Latest   <span>Podcasts </span> "
              description="Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all."
              className="max-w-[1299px] 4xl:!gap-5"
              isDark={true}
            />
            <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
              {latestPodcast &&
                latestPodcast?.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-5 rounded-[10px] bg-white/10 p-5"
                  >
                    <div>
                      <Image
                        src={item?.technologyImage}
                        alt="tech-img"
                        width={478}
                        height={268}
                        className="w-full rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2.5">
                        <span className="font-Inter text-lg font-medium leading-6 text-white">
                          {item?.technologyWeWorkOn}
                        </span>
                        <h3 className="font-Inter text-[21px] font-medium leading-[26px] text-white">
                          {item?.techHeading}
                        </h3>
                      </div>
                      <p className="line-clamp-2 font-Inter text-xl font-light leading-6 text-white">
                        {item?.techDescription}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </div>
      <Container className="mb-10 pt-10 xl:mb-20 5xl:mb-[120px] 5xl:px-[150px]">
        <div className="flex flex-col items-center gap-7 lg:gap-10">
          <SectionHeading
            heading="Latest  <span> Videos </span> "
            description="Explore our latest research on cutting-edge tech trends and discoveries to stay ahead in this digital-first landscape!"
            className="max-w-[1299px]"
          />
          <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
            {latestVideo &&
              latestVideo?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 rounded-[10px] bg-[#f8f8f8] p-5"
                >
                  <div>
                    <Image
                      src={item?.technologyImage}
                      alt="tech-img"
                      width={478}
                      height={268}
                      className="w-full rounded-[10px]"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2.5">
                      <span className="font-Inter text-lg font-medium leading-6 text-red">
                        {item?.technologyWeWorkOn}
                      </span>
                      <h3 className="font-Inter text-[21px] font-medium leading-[26px] text-black">
                        {item?.techHeading}
                      </h3>
                    </div>
                    <p className="line-clamp-2 font-Inter text-xl font-light leading-6 text-[#524c4c]">
                      {item?.techDescription}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <div className="bg-[#F8F8F8]">
        <Container className="py-10 3xl:py-14 5xl:py-20">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <h5 className="font-Inter text-[26px] font-medium leading-8 text-black">
                Sign Up for the Latest Insights
              </h5>
              <p className="text-center font-Inter text-lg font-normal leading-6 text-black">
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
                  className="w-full rounded-[30px] border-none bg-transparent py-4 pl-5 focus:outline-none sm:min-w-[450px]"
                />
                <button
                  type="submit"
                  className="cursor-pointer rounded-[30px] bg-lightBlue px-[15px] py-2.5 font-Inter text-base font-semibold uppercase text-white"
                >
                  subscribe
                </button>
              </div>
              <div className="flex items-start gap-1 lg:items-center">
                <input type="checkbox" className="mt-1 lg:mt-0" />
                <span className="font-Inter text-lg font-normal leading-6 text-[#192020]">
                  I hereby agree to receive newsletters from Optimity Logics and
                  acknowledge company&#39;s
                  <Link href={''} className="text-lightBlue underline">
                    &nbsp;Privacy Policy.
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

export default Insights;
