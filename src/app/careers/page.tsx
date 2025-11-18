'use client';
import Container from '@/components/ui/Container';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import { aboutUsPage, jobOpenings } from '@/components/utils/Constant';
import Image from 'next/image';
import React, { useState } from 'react';
import first from '../../../public/webp/careers/1.webp';
import second from '../../../public/webp/careers/2.webp';
import third from '../../../public/webp/careers/3.webp';
import four from '../../../public/webp/careers/4.webp';
import five from '../../../public/webp/careers/5.webp';
import six from '../../../public/webp/careers/6.webp';
import arrow from '../../../public/svg/arrow-white.svg';
import Link from 'next/link';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import heroBgRight from '../../../public/svg/about-us/about-shape.svg';
import heroCareer from '../../../public/images/homePagev2/career.png';
import SectionHeader from '@/components/ui/SectionHeader';

const Career = () => {
  const [isSelectPositions, setIsSelectPositions] =
    useState<string>('all positions (17)');
  const [hoverPosition, setHoverPosition] = useState<boolean>(false);

  const handleMouseEnterPosition = () => setHoverPosition(true);
  const handleMouseLeavePosition = () => {
    setHoverPosition(false);
  };
  return (
    <>
      <div className="-mt-20 bg-aboutUsHeroBg bg-full bg-no-repeat">
        <div className="flex flex-col items-center justify-between pt-[150px] sm:pt-[180px] lg:flex-row">
          <div className="relative z-30 mx-auto w-full px-4 sm:px-6 md:px-8 xl:px-10 3xl:ml-1 3xl:pl-[120px]">
            <HeroSectionHeading
              heading="Join the team"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book."
              className="max-w-[910px] !gap-10"
              LinkName="Join the team"
            />
          </div>
          <div className="relative">
            <Image
              src={heroBgRight}
              alt=""
              width={450}
              height={700}
              className="absolute -top-24 left-0 z-10 md:-left-40 md:-rotate-6"
            />
            <Image
              src={heroCareer}
              alt="hero-img"
              width={985}
              height={985}
              className="relative z-20"
            />
          </div>
        </div>
      </div>
      <Container className="relative z-30 -mt-14 mb-[60px] w-full max-w-[1680px] 3xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          {aboutUsPage?.OurWork &&
            aboutUsPage?.OurWork.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white px-[12px] pb-3 pt-[8px] shadow-work-card xl:rounded-[38px] xl:px-[32px] xl:pb-[20px]"
              >
                <div className="flex flex-col gap-3 xl:gap-[20px]">
                  <div
                    style={{ backgroundSize: '100% 100%' }}
                    className={`flex w-full items-center justify-center ${item?.backGrouund} bg-cover bg-no-repeat py-5 font-opt text-[38px] font-medium leading-tight text-primary xl:text-[48px] xl:leading-[52px] 4xl:py-[40px]`}
                  >
                    {item?.title}
                  </div>
                  <span className="text-center font-opt text-base font-normal leading-[24px] text-optDesc xl:text-xl">
                    {item?.description}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </Container>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex flex-col items-center gap-7 md:gap-10 4xl:gap-[60px]">
          <SectionHeader
            headingText="What <span class='text-red'>benefits</span> are waiting for you?"
            descriptionText={
              'Visioncraft offers a variety of hand-picked benefits that you can take advantage of!'
            }
            descriptionStyle="text-center"
            headingStyle="text-center"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-6 xxl:grid-cols-4">
            {aboutUsPage?.benefitesList &&
              aboutUsPage?.benefitesList.map((item, index) => (
                <div
                  key={index}
                  className="flex min-h-[150px] flex-col items-center justify-between gap-9 rounded-[10px] bg-benefits bg-full bg-bottom bg-no-repeat p-12 md:gap-[18px]"
                >
                  <div className="-mt-14 flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-white shadow-card">
                    <Image
                      src={item?.benefitesIcon}
                      alt=""
                      width={50}
                      height={50}
                      className="max-w-7"
                    />
                  </div>
                  <p className="px-10 text-center font-opt text-base font-normal text-primary md:text-base md:leading-7 xl:text-[18px]">
                    {item?.benefitesName}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex flex-col items-center gap-[60px]">
          <SectionHeader headingText="We have 17 open <span class='text-red'>positions</span> now!" />
          <div className="flex w-full flex-col items-start gap-10 md:flex-row">
            <div className="flex w-full flex-col gap-11 md:sticky md:top-24 md:max-w-[389px]">
              <ul className="no-scrollbar flex flex-row overflow-x-scroll md:flex-col">
                {jobOpenings.map((item, index) => (
                  <li
                    key={index}
                    className={`flex w-full cursor-pointer items-center gap-3 text-nowrap px-4 py-3 md:border-l-4 lg:py-4 ${
                      item?.positionName.toLowerCase() === isSelectPositions
                        ? 'rounded bg-orange md:border-l-orange md:bg-transparent'
                        : 'md:border-l-transparent'
                    }`}
                    onClick={() =>
                      setIsSelectPositions(item.positionName.toLowerCase())
                    }
                  >
                    <span
                      className={`font-opt text-base leading-5 md:text-lg md:leading-6 ${
                        item?.positionName.toLowerCase() === isSelectPositions
                          ? 'font-normal text-white md:font-medium md:text-primary'
                          : 'font-normal text-optDesc'
                      }`}
                    >
                      {item?.positionName}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="font-opt text-base font-normal leading-6 text-optDesc xl:text-lg xl:leading-6">
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile
                and give us your contact information. We will be in touch.
              </span>
            </div>
            {jobOpenings.map((item, index) =>
              item?.positionName.toLowerCase() === isSelectPositions ? (
                <div
                  key={index}
                  className="no-scrollbar flex w-full flex-row gap-8 overflow-x-scroll p-5 md:flex-col"
                >
                  {item?.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="w-full min-w-[350px] rounded-[15px] bg-white p-7 shadow-card"
                    >
                      <div className="flex h-full flex-col justify-between gap-3 md:gap-5 lg:gap-8">
                        <div className="flex flex-col gap-2.5">
                          <h3 className="font-opt text-2xl font-medium leading-6 text-primary md:leading-7 xl:text-3xl xl:leading-9">
                            {detail?.title}
                          </h3>
                          <ul className="flex flex-wrap items-center gap-2.5">
                            {detail?.workModes.map((mode, modeIndex) => (
                              <li
                                key={modeIndex}
                                className="rounded-[40px] border-1.5 border-optDesc/20 px-3 py-2 font-opt text-sm font-medium leading-5 text-black-750-alpha"
                              >
                                {mode}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-2.5 font-opt text-lg font-normal leading-6 text-optDesc">
                            Optimity#Logics
                            {detail?.description}
                          </p>
                        </div>
                        <Link
                          onMouseEnter={handleMouseEnterPosition}
                          onMouseLeave={handleMouseLeavePosition}
                          onMouseUp={handleMouseEnterPosition}
                          onMouseDown={handleMouseLeavePosition}
                          href={'/position'}
                          className="flex h-10 w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-opt text-base font-normal leading-tight text-white"
                        >
                          See position
                          <AnimatedArrow hover={hoverPosition} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null,
            )}
          </div>
        </div>
      </Container>
      <div
        className="bg-tech-we-work bg-cover bg-no-repeat"
        style={{ backgroundColor: '#192020' }}
      >
        <Container className="mb-10 py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20">
          <div className="flex flex-col items-center gap-10 3xl:gap-[50px] 4xl:gap-[80px]">
            <SectionHeader
              headingText="Get a <span class='text-red'>glimpse of the magic happening</span>   at optimity logics!"
              isSectionDark={true}
              className="max-w-[800px]"
              headingStyle="text-center"
            />
            <div className="no-scrollbar overflow-x-scroll">
              <div className="grid w-full grid-cols-2 grid-rows-2 gap-[21px] md:grid-cols-4 lg:grid-rows-3">
                <Image
                  src={first}
                  alt=""
                  className="col-span-2 row-span-2 h-full w-full object-contain"
                />
                <Image
                  src={four}
                  alt=""
                  className="col-span-1 row-span-1 h-full w-full object-contain"
                />
                <Image
                  src={six}
                  alt=""
                  className="row-span-2 h-full w-full object-contain"
                />
                <Image
                  src={five}
                  alt=""
                  className="row-span-2 h-full w-full object-contain"
                />
                <Image
                  src={second}
                  alt=""
                  className="h-full w-full object-contain"
                />
                <Image
                  src={third}
                  alt=""
                  className="h-full w-full object-contain"
                />

                <div className="flex h-full cursor-pointer items-end rounded-[15px] bg-[#1a1a1a] p-4 lg:p-8">
                  <div className="flex flex-col gap-3">
                    <span className="font-opt text-base font-medium leading-5 text-white lg:text-[28px] lg:leading-[32px]">
                      Explore more
                    </span>
                    <Image
                      src={arrow}
                      alt={arrow}
                      width={45}
                      height={45}
                      className="w-5 lg:w-max"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Career;
