'use client';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
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
      <Container className="!5xl:px-[150px] mb-10 bg-contactUsBanner bg-cover bg-no-repeat md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <h2 className="py-[120px] text-center font-Poppins text-4xl font-medium leading-[40px] tracking-[-0.16px] text-white md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:leading-[50px] 4xl:text-[50px] 4xl:font-semibold 5xl:text-[55px] 5xl:leading-[60px]">
          Join the team
        </h2>
      </Container>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:px-[150px]">
        <div className="flex flex-col items-center gap-[60px]">
          <SectionHeading
            heading="What <span>benefits</span> are waiting for you?"
            description={
              'Visioncraft offers a variety of hand-picked benefits that you can take advantage of!'
            }
            className="4xl:gap-[30px]"
          />
          <div className="grid grid-cols-1 items-center gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 4xl:grid-cols-5">
            {careerBenefites &&
              careerBenefites.map((items, index) => (
                <div
                  key={index}
                  className="flex h-full items-center gap-2.5 rounded-[10px] bg-[#b5b5b51a] px-5 py-7"
                >
                  <Image
                    src={items?.benefitesIcon}
                    alt={items?.benefitesIcon}
                    width={54}
                    height={54}
                  />
                  <span className="font-Poppins text-[22px] font-normal leading-[35px] text-black">
                    {items?.benefitesName}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </Container>
      <Container
        className="mb-10 bg-sectionBg bg-cover bg-right bg-no-repeat py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20 5xl:px-[150px]"
        isBackground={true}
      >
        <div className="flex flex-col items-center gap-10 3xl:gap-[50px] 4xl:gap-[80px]">
          <SectionHeading
            heading="Get a <span>glimpse of the magic happening</span>   at optimity logics!"
            isDark={true}
          />
          <div className="grid grid-cols-1 grid-rows-3 gap-[21px] md:grid-cols-2 lg:grid-cols-4">
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

            <div className="flex h-full cursor-pointer items-end rounded-[15px] bg-[#1a1a1a] p-8">
              <div className="flex flex-col gap-3">
                <span className="font-Poppins text-[28px] font-medium leading-[32px] text-white">
                  Explore more
                </span>
                <Image src={arrow} alt={arrow} width={45} height={45} />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:px-[150px]">
        <div className="flex flex-col items-center gap-[60px]">
          <SectionHeading heading="We have 17 open <span>positions</span> now!" />
          <div className="flex w-full items-start gap-10">
            <div className="sticky top-24 flex w-full max-w-[389px] flex-col gap-11">
              <ul className="flex flex-col">
                {jobOpenings.map((item, index) => (
                  <li
                    key={index}
                    className={`flex cursor-pointer items-center gap-3 border-l-4 px-8 py-[18px] ${
                      item?.positionName.toLowerCase() === isSelectPositions
                        ? 'border-l-orange'
                        : 'border-l-transparent'
                    }`}
                    onClick={() =>
                      setIsSelectPositions(item.positionName.toLowerCase())
                    }
                  >
                    <span
                      className={`font-Poppins text-[22px] leading-[35px] ${
                        item?.positionName.toLowerCase() === isSelectPositions
                          ? 'font-medium text-black'
                          : 'font-normal text-[#504c4c]'
                      }`}
                    >
                      {item?.positionName}
                    </span>
                  </li>
                ))}
              </ul>
              <span className="font-Poppins text-[21px] font-normal leading-[27px] text-[#504c4c]">
                We are always seeking talented people. In case you cannot find
                your desired position here, please send us your LinkedIn profile
                and give us your contact information. We will be in touch.
              </span>
            </div>
            {jobOpenings.map((item, index) =>
              item?.positionName.toLowerCase() === isSelectPositions ? (
                <div key={index} className="flex w-full flex-col gap-8">
                  {item?.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="rounded-[15px] bg-[#F8F8F8] px-[46px] py-[28px]"
                    >
                      <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2.5">
                          <h3 className="font-Poppins text-4xl font-medium leading-[43px] text-black">
                            {detail?.title}
                          </h3>
                          <ul className="flex items-center gap-2.5">
                            {detail?.workModes.map((mode, modeIndex) => (
                              <li
                                key={modeIndex}
                                className="rounded-[40px] border-1.5 border-black px-5 py-2.5 font-Poppins text-lg font-medium leading-5 text-[#090808]"
                              >
                                {mode}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-col items-end gap-5">
                          <p className="font-Poppins text-xl font-normal leading-7 text-[#504c4c]">
                            {detail?.description}
                          </p>
                          <Link
                            href={'/positions'}
                            className="flex items-center gap-2.5 rounded-[40px] bg-red p-5 font-Poppins text-[21px] font-normal leading-[26px] text-white"
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
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:px-[150px]">
        <div className="grid grid-cols-3 items-center gap-[38px] 4xl:grid-cols-5">
          <div className="col-span-2 flex h-full flex-col justify-between gap-[38px]">
            <HighlitedDescription
              dangerouslySetInnerHTML={{
                __html: `<span>Follow us</span> on social to see what we're up to!`,
              }}
              className={`w-full max-w-[482px] font-Poppins text-[25px] font-medium capitalize leading-[2.3rem] text-charcoalBlue sm:text-4xl sm:leading-10 xl:text-[40px] xl:leading-[40px] 3xl:font-semibold 5xl:text-[50px] 5xl:leading-[54px]`}
            />
            <Image src={team} alt="" className="w-full object-contain" />
          </div>
          <div className="col-span-1 flex h-full flex-col justify-between gap-[38px]">
            <Image
              src={christmasTree}
              alt=""
              className="w-full object-contain"
            />
            <Image src={dots} alt="" className="object-contain" />
          </div>
          <div className="col-span-2 flex h-full flex-col gap-[38px]">
            <div className="flex gap-[38px]">
              <Image src={developer} alt="" className="object-contain" />
              <Image src={design} alt="" className="object-contain" />
            </div>

            <div className="flex flex-col gap-7">
              <h4 className="font-Poppins text-lg font-normal leading-[1.6rem] text-charcoalBlue md:text-xl md:font-medium md:leading-6 3xl:text-[30px] 3xl:leading-8">
                Follow Us
              </h4>
              <ul className="flex items-center gap-3">
                {orangeSocialMediaIcons &&
                  orangeSocialMediaIcons.map((item, index) => (
                    <li
                      key={index}
                      className="rounded-full bg-[#ee4e2526] p-[14px]"
                    >
                      <Link href={item?.link} target="_blank">
                        <Image
                          src={item?.icon}
                          alt={item?.icon}
                          width={30}
                          height={31}
                          className="object-scale-down align-middle"
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
