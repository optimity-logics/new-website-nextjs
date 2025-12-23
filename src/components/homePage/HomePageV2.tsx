'use client';
import React, { useEffect, useRef, useState } from 'react';
import heroImg from '../../../public/images/homePagev2/logov3.svg';
import logo from '../../../public/svg/logo.svg';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import arrow from '../../../public/images/homePagev2/arrow-black.png';
import ellips1 from '../../../public/images/homePagev2/ellips1.png';
import ellipse2 from '../../../public/images/homePagev2/ellipse2.png';
import mobileRobot from '../../../public/webp/homePagev2/mobile-robot.webp';
import LogoAnimation from './LogoAnimation';
import phone from '../../../public/svg/footer/phone.svg';
import email from '../../../public/svg/footer/mail.svg';
import { logoIcons } from '../utils/Constant';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Faqs from './Faqs';
import Container from '../ui/Container';
import Link from 'next/link';
import styled from 'styled-components';
import Marquee from 'react-fast-marquee';
import SocialMedia from '../layout/footer/SocialMedia';
import HeroSectionHeading from '../ui/HeroSectionHeading';
import SectionHeader from '../ui/SectionHeader';
import OurWorkCard from '../common/OurWorkCard';
import Button from '../ui/Button';
import ClientTestimonial from '../ui/ClientTestimonial';
import ProjectInquiry from '../contact/ProjectInquiry';
import { homePageData } from '../utils/page-data/homePage';

const HighlitedDescription = styled.h2``;
const HomePageV2 = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const logos = logoIcons.map((image) => image?.src);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate if section is in viewport
        const isInViewport = rect.top < windowHeight && rect.bottom > 0;

        if (isInViewport) {
          // Calculate scroll progress within the section
          const scrollProgress =
            (windowHeight - rect.top) / (windowHeight + rect.height);

          // Services section with alternating columns
          const oddGroups = section.querySelectorAll(
            '[data-parallax-group="odd"]',
          );
          const evenGroups = section.querySelectorAll(
            '[data-parallax-group="even"]',
          );

          oddGroups.forEach((group) => {
            const element = group as HTMLElement;
            const parallaxY = scrollProgress * 20;
            element.style.transform = `translateY(${parallaxY - 20}px)`;
          });

          evenGroups.forEach((group) => {
            const element = group as HTMLElement;
            const parallaxY = scrollProgress * -20;
            element.style.transform = `translateY(${parallaxY + 20}px)`;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };
  const [activeTab, setActiveTab] = useState('real-estate');

  const currentTab =
    homePageData?.ourIndustries.find((tab) => tab.id === activeTab) ||
    homePageData?.ourIndustries[0];
  return (
    <>
      <div
        style={{
          backgroundImage:
            'radial-gradient(154.86% 76.83% at 50% 22.26%,rgb(247 247 248/.4) 8.98%,#F7F7F8 45.99%)',
        }}
        className="-mt-20"
      >
        <div className="bg-heroBg bg-cover bg-fixed bg-center bg-no-repeat lg:bg-full">
          <div className="flex h-full items-center justify-center lg:min-h-screen">
            <Container className="relative h-full pb-14 pt-[150px] lg:py-[50px]">
              <div className="flex w-full flex-col justify-between gap-10 lg:flex-row xl:items-center 4xl:gap-[60px]">
                <HeroSectionHeading
                  badgeTitle={homePageData?.baddge}
                  heading={homePageData?.heroTitle}
                  description={homePageData?.heroDescription}
                  btnName={homePageData?.heroContactUsBtn}
                  link={homePageData?.heroContactUsBtnLink}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeIn',
                  }}
                >
                  <div className="relative z-30 mx-auto w-max">
                    <Image
                      src={ellips1}
                      alt=""
                      width={300}
                      height={300}
                      className="absolute -left-[17%] -top-[20%] -z-10 max-w-[200px] object-contain xl:max-w-full"
                    />
                    <Image
                      src={ellips1}
                      alt=""
                      width={300}
                      height={300}
                      className="absolute -bottom-[16%] -right-[10%] -z-10 max-w-[200px] object-contain xl:-right-[20%] xl:max-w-full"
                    />
                    <Image
                      src={ellipse2}
                      alt=""
                      width={400}
                      height={400}
                      className="absolute -bottom-[18%] -left-[19%] -z-10 max-w-[200px] object-contain xl:max-w-full"
                    />
                    <Image
                      src={ellipse2}
                      alt=""
                      width={400}
                      height={400}
                      className="absolute -top-[8%] right-[6%] -z-10 max-w-[200px] object-contain xl:max-w-full"
                    />
                    <Image
                      src={heroImg}
                      alt="hero-img"
                      width={450}
                      height={450}
                      priority
                      className="max-w-[300px] lg:max-w-[350px] 4xl:max-w-max"
                    />
                  </div>
                </motion.div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow:
            '0 -6px 11px 0px rgb(0 0 0 / 0.05),0 0 3px -3px rgb(0 0 0 / 0.2)',
        }}
        className="bg-white pt-10"
      >
        <Container>
          <div className="flex flex-col items-center gap-[25px] lg:hidden xl:flex-row 5xl:rounded-[24px]">
            <span className="max-w-[400px] text-center font-opt text-base font-normal leading-5 text-optDesc xl:text-start">
              {homePageData?.trustedClient}
            </span>
            <Marquee
              speed={55}
              pauseOnHover={true}
              gradient={true}
              gradientColor="white"
            >
              <div className="flex items-center justify-between gap-8 md:gap-10">
                {logoIcons?.map((item, index) => (
                  <div
                    key={index}
                    className="first-of-type::md:ml-10 grid place-items-center justify-center first-of-type:ml-8"
                  >
                    <Image
                      src={item}
                      alt="icon"
                      width={150}
                      height={50}
                      loading="lazy"
                      className="h-[50px] max-w-[100px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="hidden flex-col items-center gap-[25px] lg:flex xl:flex-row xl:justify-between 5xl:rounded-[24px]">
            <span className="max-w-[400px] text-center font-opt text-base font-normal leading-6 text-optDesc xl:text-start">
              {homePageData?.trustedClient}
            </span>
            <LogoAnimation logo={logos} />
          </div>
        </Container>
      </div>
      <div
        style={{ backgroundSize: '100% 100%' }}
        className="my-[60px] bg-our-expertise bg-cover bg-no-repeat 4xl:my-[100px]"
      >
        <div className="flex flex-col gap-8">
          <Container>
            <SectionHeader headingText={homePageData?.ourExpertiseTitle} />
          </Container>
          <div
            className={`ml-auto w-full max-w-[1680px] px-4 sm:pl-6 md:pl-10 xl:pl-16`}
          >
            <Swiper
              spaceBetween={15}
              slidesPerView={1.2}
              breakpoints={{
                540: {
                  slidesPerView: 1.6,
                  spaceBetween: 30,
                },
                1439: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              speed={1000}
              loop={false}
              className="!h-auto w-full"
            >
              {homePageData?.ourExpertise &&
                homePageData?.ourExpertise.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="!flex !h-auto items-stretch"
                  >
                    <div className="flex w-full flex-col-reverse items-center gap-6 xl:flex-row 4xl:gap-[65px]">
                      <div className="flex h-full w-full max-w-[799px] flex-col justify-between gap-5 xl:gap-[40px]">
                        <div className="flex flex-col gap-4">
                          <h5 className="font-opt text-xl font-semibold leading-6 text-primary">
                            {item?.title}
                          </h5>
                          <p className="font-opt text-base font-normal leading-5 text-optDesc">
                            {item?.description}
                          </p>
                          <ul className="ml-10 flex list-disc flex-col gap-3 text-primary">
                            {item?.techBenefits &&
                              item?.techBenefits.map((benefitsItem, idx) => (
                                <li
                                  key={idx}
                                  className="font-opt text-lg font-medium leading-5 text-primary"
                                >
                                  {benefitsItem?.title}
                                  <span className="text-base font-normal leading-5 text-optDesc">
                                    &nbsp;{benefitsItem?.description}
                                  </span>
                                </li>
                              ))}
                          </ul>
                          <p className="font-opt text-base font-normal leading-5 text-optDesc">
                            {item?.subDescription}
                          </p>
                        </div>
                        <Button
                          btnName={item?.button}
                          redirectionLink={item?.buttonLink}
                          isBackgroung={index % 2 === 0 ? true : false}
                        />
                      </div>
                      <div className="xxl:w-[500px]">
                        <Image
                          src={item?.img}
                          alt="img"
                          width={698}
                          height={600}
                          loading="lazy"
                          className="w-full rounded-[14px] object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <Container className="mb-[60px] w-full max-w-[1680px] 4xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          {homePageData?.OurWork &&
            homePageData?.OurWork.map((item, i) => (
              <OurWorkCard key={i} data={item} />
            ))}
        </div>
      </Container>
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="mb-[60px] bg-our-expertise bg-cover bg-no-repeat py-[60px] 4xl:mb-[100px] 4xl:py-[100px]"
      >
        <Container className="flex flex-col gap-10 4xl:gap-[60px]">
          <SectionHeader
            headingText={homePageData?.aiSectionHeqading}
            descriptionText={homePageData?.aiSectionDescription}
            descriptionStyle="md:text-center"
            className="mx-auto max-w-[1000px] items-center"
            isSectionDark={true}
          />
          <div className="flex flex-col gap-6 md:hidden">
            <div className="">
              <Image
                src={mobileRobot}
                alt="robot"
                width={250}
                height={500}
                loading="lazy"
                className="mx-auto"
              />
            </div>
            <div className="hide-scrollbar flex gap-7 overflow-auto">
              {homePageData?.aiServices &&
                homePageData?.aiServices.map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full min-w-[320px] flex-1 flex-col gap-4"
                  >
                    <h4 className="font-opt text-lg font-medium leading-6 text-white">
                      {item?.title}
                    </h4>
                    <p className="font-opt text-base font-normal leading-5 text-subtle">
                      {item?.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="hidden grid-cols-2 gap-8 md:grid lg:grid-cols-3">
            <div className="mx-auto flex w-full max-w-[350px] flex-col gap-10">
              {homePageData?.aiServices &&
                homePageData?.aiServices.slice(0, 3).map((item, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h4 className="font-opt text-lg font-medium leading-6 text-white">
                      {item?.title}
                    </h4>
                    <p className="font-opt text-base font-normal leading-5 text-subtle">
                      {item?.description}
                    </p>
                  </div>
                ))}
            </div>
            <div className="sticky top-[100px] hidden h-min lg:block">
              <Image
                src={mobileRobot}
                alt="robot"
                width={300}
                height={350}
                loading="lazy"
                className="mx-auto h-auto max-w-[180px]"
              />
            </div>
            <div className="mx-auto flex w-full max-w-[350px] flex-col gap-10">
              {homePageData?.aiServices &&
                homePageData?.aiServices.slice(3).map((item, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h4 className="font-opt text-lg font-medium leading-6 text-white">
                      {item?.title}
                    </h4>
                    <p className="font-opt text-base font-normal leading-5 text-subtle">
                      {item?.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 4xl:gap-[60px]">
            <SectionHeader
              headingText={homePageData?.technologyWeWorkTitle}
              isSectionDark={true}
            />
            <div
              ref={(el) => addToRefs(el, 0)}
              className="hidden h-full w-full grid-cols-6 gap-6 3xl:grid"
            >
              {homePageData?.technologyWeWork &&
                homePageData?.technologyWeWork.map((item, index) => {
                  const isOddColumn = index % 2 === 0;
                  return (
                    <div
                      className={`w-full rounded-[24px] bg-overly bg-cover bg-no-repeat transition-transform duration-500 ease-out`}
                      data-parallax-group={isOddColumn ? 'odd' : 'even'}
                      key={index}
                    >
                      <div className="parallax-card relative grid h-full w-full rounded-[20px] bg-cover p-[8px] transition-transform duration-100 ease-out grid-stack">
                        <Image
                          src={item?.techImg}
                          alt="technology"
                          width={254}
                          height={339}
                          loading="lazy"
                          className="aspect-auto !rounded-xl"
                        />
                        <div className="absolute inset-0 rounded-xl bg-techCardGradient"></div>
                        <span className="relative z-30 mt-auto p-[14px] font-opt text-[20px] font-medium leading-[24px] text-white">
                          {item?.techName}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="hide-scrollbar flex h-full w-full gap-6 overflow-x-auto 3xl:hidden">
              {homePageData?.technologyWeWork &&
                homePageData?.technologyWeWork.map((item, index) => (
                  <div
                    className={`rounded-[24px] bg-overly bg-cover bg-no-repeat transition-transform duration-500 ease-out ${index % 2 === 0 ? 'mt-4' : ''} h-max`}
                    key={index}
                  >
                    <div className="parallax-card grid h-full w-[200px] rounded-[20px] bg-cover p-[8px] transition-transform duration-100 ease-out grid-stack">
                      <Image
                        src={item?.techImg}
                        alt="technology"
                        width={254}
                        height={339}
                        loading="lazy"
                        className="aspect-auto rounded-xl"
                      />
                      <span className="mt-auto p-[14px] font-opt text-[20px] font-medium leading-[24px] text-white">
                        {item?.techName}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col gap-8 4xl:mb-[100px] 4xl:gap-10">
        <SectionHeader
          headingText={homePageData?.ourIndustriesTitle}
          headingStyle="text-center"
        />
        <div className="hide-scrollbar flex w-full items-center gap-4 overflow-auto px-2 py-2">
          {homePageData?.ourIndustries &&
            homePageData?.ourIndustries.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveTab(item?.id)}
                className={`flex w-max items-center justify-center gap-1 text-nowrap rounded-[50px] border px-[14px] py-[8px] font-opt text-sm font-normal leading-4 transition-all duration-200 ease-in ${activeTab === item?.id ? 'border-transparent bg-lightBlue text-white' : 'border-optDesc text-optDesc hover:border-transparent hover:bg-lightBlue hover:text-white'}`}
              >
                <span className="mt-0.5">{item?.label}</span>
              </button>
            ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab?.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"
          >
            {/* LEFT CONTENT */}
            <div className="flex w-full max-w-full flex-col gap-6 lg:max-w-[650px] xxl:max-w-[800px]">
              <div className="flex flex-col gap-2.5">
                <h3 className="font-opt text-3xl font-semibold leading-8 text-primary">
                  {currentTab?.title}
                </h3>
                <p className="font-opt text-base font-normal leading-5 text-optDesc">
                  {currentTab?.description}
                </p>
              </div>

              {/* MOBILE IMAGE */}
              <div className="block lg:hidden">
                <Image
                  src={currentTab?.image}
                  alt="industries"
                  width={400}
                  height={400}
                  priority
                  className="mx-auto rounded-xl"
                />
              </div>

              <div className="flex flex-col gap-6 rounded-xl bg-snowGray p-4 md:p-8">
                <h4 className="font-opt text-xl font-medium leading-6 text-lightBlue">
                  {currentTab?.sectionTitle}
                </h4>

                <ul className="flex flex-col gap-3">
                  {currentTab?.features.map((list, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <Image
                        src="/svg/listarrow.svg"
                        alt="tick"
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                      <p className="font-opt text-base font-normal leading-5 text-optDesc">
                        {list}
                      </p>
                    </li>
                  ))}
                </ul>

                <Button
                  btnName={currentTab?.LearnMore}
                  redirectionLink={currentTab?.link}
                  isBackgroung={false}
                />
              </div>
            </div>

            {/* DESKTOP IMAGE */}
            <div className="hidden lg:block">
              <Image
                src={currentTab?.image}
                alt="industries"
                width={400}
                height={400}
                priority
                className="rounded-xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
      <div className="mb-[60px] 4xl:mb-[100px]">
        <div className="flex flex-col gap-8 3xl:gap-10 4xl:gap-[80px]">
          <Container className="flex flex-col items-end justify-between gap-5 md:flex-row md:items-center md:gap-0">
            <SectionHeader headingText={homePageData?.deployedProjectsTitle} />
            <div className="flex w-max items-center gap-4 md:gap-6">
              <button
                ref={prevRef}
                className="custom-prev group flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white shadow-md transition-all duration-300 hover:bg-black-100-alpha hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Image
                  src={arrow}
                  alt="Previous"
                  width={20}
                  height={20}
                  className="rotate-180 transition-transform duration-300 group-hover:scale-110"
                />
              </button>

              <button
                ref={nextRef}
                className="custom-next group flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-white shadow-md transition-all duration-300 hover:bg-black-100-alpha hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Image
                  src={arrow}
                  alt="Next"
                  width={20}
                  height={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </button>
            </div>
          </Container>
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.2}
              modules={[Autoplay, Navigation]}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              centeredSlides={true}
              breakpoints={{
                540: {
                  slidesPerView: 1.6,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 1.9,
                  spaceBetween: 30,
                },
                1439: {
                  slidesPerView: 2.5,
                  spaceBetween: 60,
                },
              }}
              speed={1000}
              loop={false}
            >
              {homePageData?.deployedProjectsList &&
                homePageData?.deployedProjectsList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justify-between gap-[30px] rounded-xl bg-aliceBlue/70 p-4 lg:flex-row xl:p-6">
                      <h6 className="w-max font-opt text-xl font-medium leading-6 text-primary 3xl:text-3xl 4xl:leading-10">
                        {item?.projectName}
                      </h6>
                      <div className="relative h-0 w-full pb-[50%]">
                        <Image
                          src={item?.img}
                          alt="image"
                          fill
                          loading="lazy"
                          className="h-full w-full rounded-[10px] object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      <ClientTestimonial isDark={true} />
      <Faqs />
      <div className="bg-black bg-tech-we-work bg-full bg-no-repeat xl:bg-transparent xl:bg-contact">
        <Container className="mb-[60px] py-[70px] lg:bg-contain xl:mb-0 xl:pb-[130px] xl:pt-[140px] 3xl:px-[80px]">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
            <div className="flex w-full max-w-[570px] flex-col gap-3 xl:gap-5">
              <HighlitedDescription
                dangerouslySetInnerHTML={{
                  __html: homePageData?.contactUsFormTitle,
                }}
                className="font-opt text-[45px] font-bold leading-tight text-white 4xl:text-[64px] 4xl:leading-[68px]"
              />
              <p className="font-opt text-base font-normal leading-normal text-white lg:pr-[76px]">
                {homePageData?.contactUsFormDescription}
              </p>
              <div className="flex flex-col gap-[15px]">
                <div className="flex flex-col gap-1">
                  <Link
                    href={`tel:${homePageData?.contactNumber}`}
                    className="flex items-center gap-2 sm:gap-[15px]"
                  >
                    <div className="w-full max-w-max">
                      <Image
                        src={phone}
                        alt="phone-icon"
                        loading="lazy"
                        width={22}
                        height={22}
                      />
                    </div>
                    <span className="font-opt text-base font-light leading-[1.6rem] text-white 5xl:text-lg 5xl:leading-7">
                      {homePageData?.contactNumber}
                    </span>
                  </Link>
                  <Link
                    href={`mailto: ${homePageData?.contactEmail}`}
                    className="flex items-center gap-2 sm:gap-[15px]"
                  >
                    <div className="w-full max-w-max">
                      <Image
                        src={email}
                        alt="email-icon"
                        loading="lazy"
                        width={22}
                        height={22}
                      />
                    </div>
                    <span className="font-opt text-base font-light leading-[1.6rem] text-white 5xl:text-lg 5xl:leading-7">
                      {homePageData?.contactEmail}
                    </span>
                  </Link>
                </div>
              </div>
              <SocialMedia />
            </div>
            <ProjectInquiry />
          </div>
        </Container>
      </div>
      <Container className="mb-[60px]">
        <div className="mx-auto flex max-w-[692px] flex-col items-center gap-6 4xl:gap-10">
          <Image
            src={logo}
            alt="nav-logo"
            width={202}
            height={57.09}
            loading="lazy"
            className="w-full max-w-[130px] xl:max-w-[150px]"
          />
          <span className="text-center font-opt text-lg font-normal leading-6 text-optDesc">
            {homePageData?.companyLocation}
          </span>
        </div>
      </Container>
    </>
  );
};

export default HomePageV2;
