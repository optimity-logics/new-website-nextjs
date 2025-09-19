'use client';
import Container from '@/components/ui/Container';
import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../public/svg/logo.svg';
import { aboutUsPage, homePageData } from '@/components/utils/Constant';
import heroBgRight from '../../../public/svg/about-us/about-shape.svg';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HighlitedDescription = styled.h1`
  span {
    color: #e94e25;
  }
`;

const AboutUs = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [hoverContact, setHoverContact] = useState<boolean>(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseEnterContact = () => setHoverContact(true);
  const handleMouseLeaveContact = () => {
    setHoverContact(false);
  };

  return (
    <>
      <div className="bg-aboutUsHeroBg bg-full bg-no-repeat">
        <div className="flex flex-col items-center justify-between pt-[100px] lg:flex-row">
          <div className="relative z-30 mx-auto w-full px-4 sm:px-6 md:px-8 xl:px-10 3xl:ml-1 3xl:pl-[120px]">
            <div className="mx-auto flex w-full max-w-[910px] flex-col gap-7">
              <HighlitedDescription
                dangerouslySetInnerHTML={{
                  __html: aboutUsPage?.heding,
                }}
                className="font-base text-[40px] font-medium leading-tight text-primary lg:text-[45px] 3xl:text-[60px]"
              />
              <p className="w-full max-w-[800px] font-base text-lg font-normal leading-6 text-primary opacity-50">
                {aboutUsPage?.description}
              </p>
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseEnter}
                onMouseDown={handleMouseLeave}
                href={homePageData?.heroContactUsBtnLink}
                className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-base text-[14px] font-normal leading-tight text-white"
              >
                {homePageData?.heroContactUsBtn}
                <AnimatedArrow hover={hover} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              src={heroBgRight}
              alt=""
              width={450}
              height={700}
              className="absolute -top-24 left-0 z-10 -rotate-6 md:-left-40"
            />
            <Image
              src={aboutUsPage?.hero_image}
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
                    className={`flex w-full items-center justify-center ${item?.backGrouund} bg-cover bg-no-repeat py-5 font-base text-[38px] font-medium leading-tight text-primary xl:text-[48px] xl:leading-[52px] 4xl:py-[40px]`}
                  >
                    {item?.title}
                  </div>
                  <span className="text-center font-base text-base font-normal leading-[24px] text-primary xl:text-[18px]">
                    {item?.description}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </Container>
      <Container className="mb-[60px] 3xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {aboutUsPage?.woWeAreList &&
            aboutUsPage?.woWeAreList.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${item?.bgImg})`,
                }}
                className={`${index === 0 ? 'flex flex-col gap-8 p-7 pt-10 md:col-span-2 xl:gap-24 xl:pb-[127px] xl:pl-7 xl:pt-20' : 'h-full p-7 md:min-h-[500px]'} rounded-2xl bg-full bg-no-repeat`}
              >
                {index === 0 && (
                  <h3 className="text-center font-base text-[35px] font-bold leading-10 text-white 4xl:text-[48px] 4xl:leading-[52px]">
                    {aboutUsPage?.woWeAre}
                  </h3>
                )}
                <div
                  className={`${index === 1 ? 'flex h-full items-end' : ''}`}
                >
                  <div
                    className={`flex flex-col ${index === 0 ? 'w-full max-w-[800px] gap-5 xl:gap-10' : 'gap-5'}`}
                  >
                    <h4 className="font-base text-2xl font-medium leading-7 text-white xl:text-[28px] xl:leading-[32px]">
                      {item?.title}
                    </h4>
                    <p className="font-base text-base font-normal leading-6 text-white opacity-80 xl:text-[18px]">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
      <Container className="flex flex-col gap-[60px]">
        <div className="flex flex-col items-center gap-6">
          <HighlitedDescription
            dangerouslySetInnerHTML={{
              __html: aboutUsPage?.benefitesTitle,
            }}
            className="font-base text-[35px] font-medium leading-10 text-primary 4xl:text-[48px] 4xl:leading-[52px]"
          />
          <p className="font-base text-base font-normal leading-6 text-iconSubtle opacity-50 xl:text-xl xl:leading-7">
            {aboutUsPage?.benefitesDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-10 xl:gap-y-8">
          {aboutUsPage?.benefitesList &&
            aboutUsPage?.benefitesList.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-[18px] rounded-[10px] bg-benefits px-[22px] py-[30px]"
              >
                <Image
                  src={item?.benefitesIcon}
                  alt=""
                  width={50}
                  height={50}
                />
                <p className="font-base text-base font-normal leading-6 text-white xl:text-[18px]">
                  {item?.benefitesName}
                </p>
              </div>
            ))}
        </div>
      </Container>
      <div className="relative mx-auto max-w-[1680px] py-[60px] 4xl:py-[100px]">
        <div
          style={{
            backgroundImage: "url('/images/homePagev2/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="absolute inset-y-0 left-[15px] w-[1px] bg-cover sm:left-[22px] md:left-[31px] xl:left-[39px] 3xl:left-[119px]"
        ></div>
        <div
          style={{
            backgroundImage: "url('/images/homePagev2/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="-0 absolute inset-y-0 right-[15px] w-[1px] bg-cover sm:right-[22px] md:right-[31px] xl:right-[39px] 3xl:right-[119px]"
        ></div>
        <div className="relative px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-[120px]">
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(90deg, rgba(102,102,102,0.11) 0.6%, #666666 50.78%, rgba(102,102,102,0.11) 100%)',
            }}
            className="absolute inset-x-0 -top-[3px] h-[1px] border-1 border-dashed border-gray opacity-30"
          ></div>
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(90deg, rgba(102,102,102,0.11) 0.6%, #666666 50.78%, rgba(102,102,102,0.11) 100%)',
            }}
            className="absolute inset-x-0 bottom-[-3px] !h-[1px] border-1 border-dashed border-gray opacity-30"
          ></div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            <motion.div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(${-y / 60}deg) 
              rotateY(${x / 60}deg) 
              scale(1.02)
            `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(0deg) 
              rotateY(0deg) 
              scale(1)
            `;
              }}
              style={{
                transition: 'transform 0.3s ease-out',
              }}
              className="row-start-3 md:col-start-2 md:row-span-2 md:row-start-4 xl:col-start-3 xl:row-start-2"
            >
              <div className="flex h-full flex-col justify-between gap-14 rounded-[17px] bg-black p-5 backdrop-blur-lg md:px-[28px] md:py-[32px]">
                <p className="font-base text-2xl font-extrabold leading-8 text-white md:text-3xl md:leading-9 4xl:text-[50px] 4xl:leading-[56px]">
                  {homePageData?.contactUsCardTitle}
                </p>
                <Link
                  onMouseEnter={handleMouseEnterContact}
                  onMouseLeave={handleMouseLeaveContact}
                  onMouseUp={handleMouseEnterContact}
                  onMouseDown={handleMouseLeaveContact}
                  href={homePageData?.contactUsCardBtnLink}
                  className="flex w-max items-center gap-1 rounded-[50px] bg-white py-[8px] pl-[16px] pr-[14px] font-base text-[14px] font-normal leading-tight text-primary"
                >
                  {homePageData?.contactUsCardBtn}
                  <AnimatedArrow hover={hoverContact} />
                </Link>
              </div>
            </motion.div>
            {homePageData?.clientReview &&
              homePageData?.clientReview.map((item, index) => (
                <motion.div
                  key={index}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(${-y / 20}deg) 
              rotateY(${x / 20}deg) 
              scale(1.05)
            `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(0deg) 
              rotateY(0deg) 
              scale(1)
            `;
                  }}
                  style={{
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <div
                    className={`rounded-[17px] p-5 md:p-[25px] ${item?.id === 1 ? 'bg-white shadow-card' : 'bg-[#F7F7F8] shadow-custom'} flex flex-col justify-between gap-6`}
                  >
                    <p className="line-clamp-5 font-base text-base font-normal leading-6 text-secondary opacity-80 md:text-lg md:leading-7">
                      {item?.message}
                    </p>
                    <div className="flex items-center justify-between gap-2.5">
                      <p className="font-base text-base font-normal leading-5 text-subtle">
                        {item?.role}
                      </p>
                      <Image
                        src={item?.avatar}
                        alt="client"
                        width={67}
                        height={67}
                        className="h-[67px] w-[67px] rounded-[12px] object-cover outline outline-[2px] -outline-offset-1 outline-[#0000001A]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      <Container className="mb-[60px]">
        <div className="mx-auto flex max-w-[692px] flex-col items-center gap-6 4xl:gap-10">
          <Image
            src={logo}
            alt="nav-logo"
            width={202}
            height={57.09}
            className="w-full max-w-[130px] xl:max-w-[150px]"
          />
          <span className="text-center font-base text-lg font-normal leading-6 text-secondary">
            {homePageData?.companyLocation}
          </span>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
