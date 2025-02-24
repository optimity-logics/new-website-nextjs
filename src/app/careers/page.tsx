'use client';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  careerBenefites,
  jobOpenings,
  orangeSocialMediaIcons,
} from '@/components/utils/Constant';
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
import ClientReview from '@/components/homePage/ClientReview';
import styled from 'styled-components';
import fatArrow from '../../../public/svg/fat-arrow.svg';
import christmasTree from '../../../public/webp/careers/followUs/christmasTree.webp';
import design from '../../../public/webp/careers/followUs/design.webp';
import developer from '../../../public/webp/careers/followUs/developer.webp';
import dots from '../../../public/webp/careers/followUs/dots.webp';
import team from '../../../public/webp/careers/followUs/team.webp';

const HighlitedDescription = styled.h1`
  span {
    color: #e94e25;
  }
`;

const Career = () => {
  const [isSelectPositions, setIsSelectPositions] =
    useState<string>('all positions (17)');
  return (
    <>
      <div className="bg-careerBanner bg-cover bg-no-repeat">
        <div className="mx-auto mb-10 flex max-w-[1217px] flex-col items-center gap-[22px] px-4 py-12 sm:px-6 md:mb-12 md:px-8 xl:mb-16 4xl:mb-[100px]">
          <h2 className="text-center font-Poppins text-4xl font-medium leading-[40px] tracking-[-0.16px] text-black md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:leading-[50px] 4xl:text-[50px] 4xl:font-semibold 5xl:text-[55px] 5xl:leading-[60px]">
            Join the team
          </h2>
          <p className="text-center font-Inter text-lg font-light leading-[29px] text-[#727265]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <Link
            href={'/'}
            className="flex items-center gap-1.5 rounded-[40px] bg-red p-3 font-Poppins text-base font-normal leading-5 text-white xl:gap-2.5 xl:p-5 xl:text-[21px] xl:leading-[26px]"
          >
            <span>Join the team</span>
            <Image src={fatArrow} alt="arrow icon" width={24} height={24} />
          </Link>
        </div>
      </div>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex flex-col items-center gap-7 md:gap-10 4xl:gap-[60px]">
          <SectionHeading
            heading="What <span>benefits</span> are waiting for you?"
            description={
              'Visioncraft offers a variety of hand-picked benefits that you can take advantage of!'
            }
            className="4xl:gap-[30px]"
          />
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5">
            {careerBenefites &&
              careerBenefites.map((items, index) => (
                <div
                  key={index}
                  className="flex h-full items-center gap-2.5 rounded-[10px] bg-[#b5b5b51a] px-5 py-4"
                >
                  <Image
                    src={items?.benefitesIcon}
                    alt={items?.benefitesIcon}
                    width={45}
                    height={45}
                    className="w-8 object-contain"
                  />
                  <span className="font-Poppins text-lg font-normal leading-6 text-black md:text-xl md:leading-6">
                    {items?.benefitesName}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <div
        className="bg-projectSectionBg bg-cover bg-right bg-no-repeat"
        style={{ backgroundColor: '#192020' }}
      >
        <Container className="mb-10 py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20">
          <div className="flex flex-col items-center gap-10 3xl:gap-[50px] 4xl:gap-[80px]">
            <SectionHeading
              heading="Get a <span>glimpse of the magic happening</span>   at optimity logics!"
              isDark={true}
              className="max-w-[1000px]"
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
                    <span className="font-Poppins text-base font-medium leading-5 text-white lg:text-[28px] lg:leading-[32px]">
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
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex flex-col items-center gap-[60px]">
          <SectionHeading heading="We have 17 open <span>positions</span> now!" />
          <div className="flex w-full flex-col items-start gap-10 md:flex-row">
            <div className="flex w-full flex-col gap-11 md:sticky md:top-24 md:max-w-[389px]">
              <ul className="no-scrollbar flex flex-row overflow-x-scroll md:flex-col">
                {jobOpenings.map((item, index) => (
                  <li
                    key={index}
                    className={`flex w-full cursor-pointer items-center gap-3 text-nowrap px-4 py-3 md:border-l-4 lg:px-8 lg:py-[18px] ${
                      item?.positionName.toLowerCase() === isSelectPositions
                        ? 'rounded bg-orange md:border-l-orange md:bg-transparent'
                        : 'md:border-l-transparent'
                    }`}
                    onClick={() =>
                      setIsSelectPositions(item.positionName.toLowerCase())
                    }
                  >
                    <span
                      className={`font-Poppins text-lg leading-5 md:text-xl lg:text-[22px] lg:leading-[35px] ${
                        item?.positionName.toLowerCase() === isSelectPositions
                          ? 'font-normal text-white md:font-medium md:text-black'
                          : 'font-normal text-[#504c4c]'
                      }`}
                    >
                      {item?.positionName}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="font-Poppins text-base font-normal leading-6 text-[#504c4c] xl:text-[21px] xl:leading-[27px]">
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile
                and give us your contact information. We will be in touch.
              </span>
            </div>
            {jobOpenings.map((item, index) =>
              item?.positionName.toLowerCase() === isSelectPositions ? (
                <div
                  key={index}
                  className="no-scrollbar flex w-full flex-row gap-8 overflow-x-scroll md:flex-col"
                >
                  {item?.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="w-full min-w-[350px] rounded-[15px] bg-[#F8F8F8] px-5 py-[28px] md:px-[46px]"
                    >
                      <div className="flex h-full flex-col justify-between gap-3 md:gap-5 lg:gap-8">
                        <div className="flex flex-col gap-2.5">
                          <h3 className="font-Poppins text-2xl leading-6 text-black md:leading-7 xl:text-4xl xl:leading-[43px]">
                            {detail?.title}
                          </h3>
                          <ul className="flex flex-wrap items-center gap-2.5">
                            {detail?.workModes.map((mode, modeIndex) => (
                              <li
                                key={modeIndex}
                                className="rounded-[40px] border-1.5 border-black px-3 py-2 font-Poppins text-sm font-medium leading-5 text-[#090808] md:px-5 md:py-2.5 md:text-lg"
                              >
                                {mode}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-2.5 font-Poppins text-base font-normal leading-5 text-[#504c4c] md:text-lg md:leading-6 lg:text-xl lg:leading-7">
                            {detail?.description}
                          </p>
                        </div>
                        <div className="ml-auto">
                          <Link
                            href={'/positions'}
                            className="flex items-center gap-1.5 rounded-[40px] bg-red p-3 font-Poppins text-base font-normal leading-5 text-white xl:gap-2.5 xl:p-5 xl:text-[21px] xl:leading-[26px]"
                          >
                            <span>See positions</span>
                            <Image
                              src={arrow}
                              alt="arrow icon"
                              width={22}
                              height={22}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null,
            )}
          </div>
        </div>
      </Container>
      <ClientReview />
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="grid grid-cols-3 items-center gap-5 lg:grid-cols-5 4xl:gap-[38px]">
          <div className="col-span-2 flex h-full flex-col justify-between gap-5 4xl:gap-[38px]">
            <HighlitedDescription
              dangerouslySetInnerHTML={{
                __html: `<span>Follow us</span> on social to see what we're up to!`,
              }}
              className="max-w-[482px] font-Poppins text-[25px] font-medium capitalize leading-[2rem] text-charcoalBlue sm:text-4xl sm:leading-10 xl:text-[40px] xl:leading-[40px] 3xl:font-semibold 5xl:text-[50px] 5xl:leading-[54px]"
            />
            <Image
              src={team}
              alt="Team working together"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="col-span-1 flex h-full flex-col justify-between gap-5 4xl:gap-[38px]">
            <Image
              src={christmasTree}
              alt="Decorated Christmas tree"
              className="h-full w-full rounded-lg object-cover"
            />
            <Image
              src={dots}
              alt="Colorful dots design"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="col-span-2 grid h-full grid-cols-2 gap-5 4xl:gap-[38px]">
            <div className="col-span-2 grid grid-cols-2 gap-5 4xl:gap-[38px]">
              <Image
                src={developer}
                alt="Developer working"
                className="h-full w-full rounded-lg object-cover"
              />
              <Image
                src={design}
                alt="Creative design graphic"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-3 lg:mt-5 lg:gap-7">
              <h4 className="font-Poppins text-lg font-medium leading-[1.6rem] text-charcoalBlue md:text-xl md:leading-6 3xl:text-[30px] 3xl:leading-8">
                Follow Us
              </h4>
              <ul className="flex items-center gap-3">
                {orangeSocialMediaIcons?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.icon}
                        alt={`${item.link} icon`}
                        width={28}
                        height={28}
                        className="object-scale-down"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Career;
