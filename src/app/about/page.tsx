'use client';
import Container from '@/components/ui/Container';
import React, { useEffect, useState } from 'react';
import { aboutUsPage, homePageData } from '@/components/utils/Constant';
import heroBgRight from '../../../public/svg/about-us/about-shape.svg';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import SectionHeader from '@/components/ui/SectionHeader';
import OurWorkCard from '@/components/common/OurWorkCard';
import ClientTestimonial from '@/components/ui/ClientTestimonial';
const AboutUs = () => {
  const [hoverViewAl, setHoverViewAl] = useState<boolean>(false);

  const handleMouseEnterViewAll = () => setHoverViewAl(true);
  const handleMouseLeaveViewAl = () => {
    setHoverViewAl(false);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        aboutUsPage?.ourProcessList &&
        prev === aboutUsPage.ourProcessList.length - 1
          ? 0
          : prev + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="-mt-20 bg-aboutUsHeroBg bg-full bg-fixed bg-no-repeat">
        <div className="flex h-full flex-col items-center justify-between pt-[150px] lg:h-screen lg:flex-row">
          <HeroSectionHeading
            badgeTitle={aboutUsPage?.surTitle}
            heading={aboutUsPage?.heding}
            description={aboutUsPage?.description}
            btnName={homePageData?.heroContactUsBtn}
            link={aboutUsPage?.aboutUsBtnLink}
            className="relative z-30 ml-auto flex w-full max-w-[900px] flex-col gap-7 px-4 sm:px-6 sm:pb-[120px] md:px-8 xl:px-10 xl:pl-[60px] 3xl:ml-16 4xl:pl-[100px]"
          />

          <div className="relative lg:-mb-[132px]">
            <Image
              src={heroBgRight}
              alt=""
              width={450}
              height={700}
              className="absolute -top-24 left-0 z-10 md:-left-40 md:-rotate-6"
            />
            <Image
              src={aboutUsPage?.hero_image}
              alt="hero-img"
              width={985}
              height={985}
              className="relative z-20 h-auto xl:max-w-[600px]"
            />
          </div>
        </div>
      </div>
      <Container className="relative z-30 -mt-14 mb-[60px] w-full max-w-[1680px] 3xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          {aboutUsPage?.OurWork &&
            aboutUsPage?.OurWork.map((item, index) => (
              <OurWorkCard key={index} data={item} />
            ))}
        </div>
      </Container>
      <Container className="mb-[60px] 3xl:mb-[100px]">
        <div className="flex flex-col gap-10">
          <SectionHeader
            headingText={aboutUsPage?.woWeAre}
            headingStyle="text-center"
          />

          {aboutUsPage?.woWeAreList &&
            aboutUsPage?.woWeAreList.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="">
                  <Image
                    src={item?.bgImg}
                    alt="woWeAre"
                    width={708}
                    height={647}
                    className="rounded-[20px]"
                  />
                </div>
                <div
                  className={`${index % 2 === 0 ? 'lg:-ml-[130px]' : 'relative z-30 lg:-mr-[130px]'} -mt-16 flex w-full max-w-[320px] flex-col gap-4 rounded-[20px] bg-white p-5 shadow-md xss:max-w-[430px] sm:-mt-[100px] sm:max-w-[600px] lg:mt-0 lg:max-w-[1000px]`}
                >
                  <h4 className="font-opt text-2xl font-semibold capitalize leading-7 text-lightBlue">
                    {item?.title}
                  </h4>
                  <p className="font-opt text-base font-normal leading-5 text-optDesc">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          <div className="flex flex-col gap-5">
            <h2 className="font-opt text-[32px] font-semibold capitalize leading-9 text-lightBlue">
              {aboutUsPage?.ourCoreValue?.title}
            </h2>
            <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {aboutUsPage?.ourCoreValue.values &&
                aboutUsPage?.ourCoreValue?.values.map((items, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-[30px] rounded-[20px] bg-white/50 p-5 shadow-howWorkCard backdrop-blur-sm"
                  >
                    <span className="flex h-[60px] max-w-[60px] items-center justify-center rounded-md bg-[#05ADE1] font-opt text-xl font-medium text-white">
                      0{i + 1}
                    </span>
                    <div className="flex flex-col gap-3">
                      <h5 className="font-opt text-xl font-medium leading-6 text-primary">
                        {items?.title}
                      </h5>
                      <p className="font-opt text-base font-normal leading-5 text-optDesc">
                        {items?.description}
                      </p>
                    </div>
                  </div>
                ))}
              <div className="absolute inset-0 -z-10 hidden items-center justify-center overflow-hidden md:flex">
                <motion.div
                  className="w-max"
                  animate={{
                    scale: [1, 1.08, 1],
                    rotate: [0, 3, -3, 0],
                    x: [0, 10, -10, 0],
                    y: [0, -8, 8, 0],
                    opacity: [0.85, 1, 0.9],
                  }}
                  transition={{
                    duration: 6, // slower = smoother
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                >
                  <Image
                    src="/images/about-us/core-value.png"
                    alt="Core Value Background"
                    width={500}
                    height={500}
                    className="max-w-full object-contain drop-shadow-xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-[60px] 4xl:mb-[100px]">
        <SectionHeader
          headingText={aboutUsPage?.whatWeDoTitle}
          headingStyle="text-center"
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {aboutUsPage?.whatWeDo &&
            aboutUsPage?.whatWeDo.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-5 rounded-xl border border-[#F0F3F5] bg-white px-5 py-7 shadow-WhatWeDo"
              >
                <div className="relative aspect-[6/3] w-full">
                  <Image
                    src={item?.img}
                    alt="tech"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <h6 className="font-opt text-xl font-medium leading-6 text-primary">
                    {item?.title}
                  </h6>
                  <p className="font-opt text-base font-normal leading-5 text-optDesc">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </Container>
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="mb-[60px] bg-tech-we-work bg-cover bg-no-repeat py-[60px] 4xl:mb-[100px]"
      >
        <Container className="flex flex-col gap-[60px]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <SectionHeader
              headingText={aboutUsPage?.expertiseTitle}
              isSectionDark={true}
            />
            <Link
              onMouseEnter={handleMouseEnterViewAll}
              onMouseLeave={handleMouseLeaveViewAl}
              onMouseUp={handleMouseEnterViewAll}
              onMouseDown={handleMouseLeaveViewAl}
              href={aboutUsPage?.viewAllBtnLink}
              className="flex h-10 w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-opt text-base font-normal leading-6 text-white"
            >
              {aboutUsPage?.viewAllBtn}
              <AnimatedArrow hover={hoverViewAl} />
            </Link>
          </div>
          <div>
            <Swiper
              spaceBetween={15}
              slidesPerView={1}
              breakpoints={{
                540: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                810: {
                  slidesPerView: 4,
                },
              }}
              speed={1000}
              loop={false}
              className="!h-auto w-full"
            >
              {aboutUsPage?.expertise &&
                aboutUsPage?.expertise.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="!flex !h-auto flex-col items-stretch gap-6 rounded-xl bg-white p-6 shadow-card"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-card">
                      <div className="relative aspect-[6/3] w-full">
                        <Image
                          src={item?.img}
                          alt="tech"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <h5 className="font-opt text-xl font-medium leading-6 text-primary">
                        {item?.title}
                      </h5>
                      <p className="font-opt text-base font-normal leading-5 text-optDesc">
                        {item?.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col gap-[60px] 4xl:mb-[100px]">
        <SectionHeader
          headingText={aboutUsPage?.ourProcess}
          descriptionText={aboutUsPage?.ourProcessDescription}
          className="items-center"
        />
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
          <div className="relative flex flex-col gap-6">
            {aboutUsPage?.ourProcessList?.map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex flex-col gap-5 overflow-hidden rounded-lg px-5 py-6 ${i === activeIndex ? 'border-l border-l-red' : ''} shadow-sm`}
              >
                {/* Background animation (top to bottom) */}
                {i === activeIndex && (
                  <motion.div
                    initial={{ y: '-100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 5, ease: 'easeInOut' }}
                    className="absolute left-0 top-0 z-0 h-full w-full bg-red/5"
                  />
                )}

                {/* Foreground content */}
                <div
                  className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-lg font-opt text-base font-medium leading-5 ${i === activeIndex ? 'bg-red/25 text-red' : 'bg-lightBlue/45 text-white backdrop-blur-sm'}`}
                >
                  {i + 1}
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                  <h4
                    className={`font-opt text-xl font-medium leading-6 transition-colors duration-500 ${
                      i === activeIndex ? 'text-red' : 'text-black'
                    }`}
                  >
                    {item?.title}
                  </h4>
                  <p className="font-opt text-base font-normal leading-5 text-optDesc">
                    {item?.subTitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative aspect-[6/3] w-full">
            <Image
              src={aboutUsPage?.ourProcessImg}
              alt="process"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="mb-[60px] bg-tech-we-work bg-cover bg-no-repeat py-[60px] 4xl:mb-[100px]"
      >
        <Container className="flex flex-col gap-[60px]">
          <SectionHeader
            headingText={aboutUsPage?.whyChooseUsTitle}
            descriptionText={aboutUsPage?.whyChooseUsDescription}
            className="items-center"
            isSectionDark={true}
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aboutUsPage?.whyChooseUsList &&
              aboutUsPage?.whyChooseUsList.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-xl bg-[#f7f9fa] p-6"
                >
                  <h3 className="font-opt text-xl font-medium leading-6 text-black">
                    {item?.title}
                  </h3>
                  <p className="font-opt text-base font-normal leading-5 text-optDesc">
                    {item?.description}
                  </p>
                </div>
              ))}
          </div>
        </Container>
      </div>
      <div className="my-[40px] flex flex-col gap-[60px] 4xl:my-[80px]">
        <SectionHeader
          headingText={aboutUsPage?.ourTeam}
          descriptionText={aboutUsPage?.shortDescription}
          className="items-center"
        />

        <div className="">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              540: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 1.8,
                spaceBetween: 30,
              },
            }}
            speed={1000}
            loop={true}
            centeredSlides={true}
            initialSlide={1}
            className="!h-auto w-full !p-4"
          >
            {aboutUsPage?.ourTeamList &&
              aboutUsPage?.ourTeamList.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!flex !h-auto !flex-col !items-center gap-6 rounded-2xl bg-white !p-5 shadow-lg lg:!flex-row"
                >
                  <div
                    className={`flex w-full max-w-[300px] items-center justify-center rounded-2xl bg-lightBlue/50 p-2 ${index % 2 !== 0 ? 'rounded-[0_100%_100%_100%]' : 'rounded-[100%_100%_0_100%]'}`}
                  >
                    <Image
                      src={item?.img}
                      alt={item?.name || 'team-img'}
                      width={400}
                      height={300}
                      className={`h-full w-full ${index % 2 === 0 ? 'rounded-[0_100%_100%_100%]' : 'rounded-[100%_100%_0_100%]'} `}
                    />
                  </div>
                  <div className="flex w-full max-w-[500px] flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <h2 className="font-opt text-xl font-medium leading-6 text-primary">
                        {item?.name}
                      </h2>
                      <span className="font-opt text-sm font-normal text-black-900-alpha">
                        {item?.position}
                      </span>
                    </div>
                    <p className="font-opt text-base font-normal leading-5 text-optDesc">
                      {item?.aboutUs}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <Container className="flex flex-col gap-[60px]">
        <SectionHeader
          headingText={aboutUsPage?.benefitesTitle}
          descriptionText={aboutUsPage?.benefitesDescription}
          className="items-center"
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
                <p className="px-10 text-center font-opt text-base font-normal leading-5 text-primary xl:text-lg xl:leading-6">
                  {item?.benefitesName}
                </p>
              </div>
            ))}
        </div>
      </Container>
      <ClientTestimonial />
    </>
  );
};

export default AboutUs;
