'use client';
import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import checkMark from '../../../public/svg/check-mark.svg';
import Link from 'next/link';
import { flutterCrossApp, homePageData, logoIcons } from '../utils/Constant';
import 'react-international-phone/style.css';
import AnimatedArrow from '../common/AnimatedArrow';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import LogoAnimation from '../homePage/LogoAnimation';
import { IPropsDataTypes } from '../type/type';
import styled from 'styled-components';

interface IPropsType {
  data: IPropsDataTypes;
}
// const solutionLinks = [
//   { path: '/healthcare-solutions', bgClass: 'after:bg-healthcarebg' },
//   { path: '/fintech-solutions', bgClass: 'after:bg-finance' },
//   { path: '/real-estate-app-development', bgClass: 'after:bg-realEstate' },
//   { path: '/ecommerce-solutions', bgClass: 'after:bg-retail' },
//   {
//     path: '/educational-app-development-solutions',
//     bgClass: 'after:bg-education',
//   },
//   { path: '/logistics-app-development', bgClass: 'after:bg-logistic' },
// ];

// const AllPageContent = () => {
const AllPageContent = ({ data }: IPropsType) => {
  // const solution = solutionLinks.find((link) =>
  //   path.toLowerCase().includes(link.path.toLowerCase()),
  // );
  const logos = logoIcons.map((image) => image?.src);
  const [hover, setHover] = useState<boolean>(false);
  const [hoverServicesTab, setHoverServicesTab] = useState<
    Record<number, boolean>
  >({
    0: false,
    1: false,
  });
  const HighlitedDescriptionHero = styled.h3``;
  const HighlitedDescription = styled.h1``;
  const [hoverViewAll, setHoverViewAll] = useState<boolean>(false);
  const [hoverContact, setHoverContact] = useState<boolean>(false);
  const [processDevInd, setProcessDevInd] = useState<number>(0);
  const [activeTab, setActiveTab] = useState(1);

  const activeContent =
    data?.WhyOptimityForDevelopment?.developmentServicesStep.find(
      (tab) => tab.id === activeTab,
    )?.content;
  const [width, setWidth] = useState(0);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseEnterServicesTab = (i: number) =>
    setHoverServicesTab((prev) => ({ ...prev, [i]: true }));
  const handleMouseLeaveServicesTab = (i: number) => {
    setHoverServicesTab((prev) => ({ ...prev, [i]: false }));
  };
  const handleMouseEnterViewAll = () => setHoverViewAll(true);
  const handleMouseLeaveViewAll = () => {
    setHoverViewAll(false);
  };
  const handleMouseEnterContact = () => setHoverContact(true);
  const handleMouseLeaveContact = () => {
    setHoverContact(false);
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);

    const currentSection = sectionRef.current; // ✅ Copy the ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) observer.unobserve(currentSection); // ✅ Use the copied ref
    };
  }, []);

  return (
    <>
      <div className="-mt-20 overflow-hidden bg-aboutUsHeroBg bg-full bg-no-repeat pt-20">
        <Container className="relative flex flex-col items-center justify-between gap-5 py-20 md:flex-row">
          <div className="flex w-full max-w-[877px] flex-col gap-10">
            <div className="flex flex-col gap-[30px]">
              <HighlitedDescription
                dangerouslySetInnerHTML={{
                  __html: data?.HeroSectionData?.heading,
                }}
                className="font-base text-[40px] font-medium leading-tight text-primary lg:text-[45px] 3xl:text-[60px]"
              />
              <p className="w-full max-w-[800px] font-base text-lg font-normal leading-6 text-primary opacity-50">
                {data?.HeroSectionData?.description}
              </p>
            </div>
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseEnter}
              onMouseDown={handleMouseLeave}
              href={data?.HeroSectionData?.btnLink}
              className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-base text-[14px] font-normal leading-tight text-white"
            >
              {data?.HeroSectionData?.btnName}
              <AnimatedArrow hover={hover} />
            </Link>
          </div>
          <div className="w-full max-w-[400px]">
            {data?.HeroSectionData?.techImg && (
              <Image
                src={data?.HeroSectionData?.techImg || ''}
                alt="technology"
                width={512}
                height={512}
              />
            )}
          </div>
          {data?.HeroSectionData?.techName && (
            <span className="absolute -bottom-[5%] left-1/2 block -translate-x-1/2 text-center font-base text-[100px] font-medium text-[#161616] opacity-10 md:-bottom-[18%] md:text-[200px] xl:-bottom-[25%] xl:text-[280px]">
              {data?.HeroSectionData?.techName}
            </span>
          )}
        </Container>
      </div>
      <div
        style={{
          boxShadow:
            '0 -6px 11px 0px rgb(0 0 0 / 0.05),0 0 3px -3px rgb(0 0 0 / 0.2)',
        }}
        className="mb-[60px] bg-white pt-10 4xl:mb-[100px]"
      >
        <Container>
          <div className="flex flex-col items-center gap-[25px] lg:hidden xl:flex-row 5xl:rounded-[24px]">
            <span className="max-w-[400px] text-center font-base text-base font-normal leading-[1.6rem] text-primary md:text-lg md:leading-7 xl:text-start">
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
                      className="h-[50px] max-w-[100px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
          <div className="hidden flex-col items-center gap-[25px] lg:flex xl:flex-row xl:justify-between 5xl:rounded-[24px]">
            <span className="max-w-[400px] text-center font-base text-base font-normal leading-[1.6rem] text-primary md:text-lg md:leading-7 xl:text-start">
              {homePageData?.trustedClient}
            </span>
            <LogoAnimation logo={logos} />
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col items-center gap-[60px] 4xl:mb-[100px]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-5">
          <HighlitedDescriptionHero
            dangerouslySetInnerHTML={{
              __html: data?.development?.heading,
            }}
            className="text-center font-base text-[35px] font-medium leading-10 text-primary 4xl:text-[48px] 4xl:leading-[52px]"
          />
          <p className="w-full text-center font-base text-lg font-normal leading-6 text-black-750-alpha">
            {data?.development?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {data?.development?.developmentServices &&
            data?.development?.developmentServices.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-[15px] p-5 shadow-devCardShadow md:p-[30px]"
              >
                <h5 className="font-base text-2xl font-medium leading-8 text-primary">
                  {item?.title}
                </h5>
                <p className="font-base text-base font-light text-black-750-alpha">
                  {item?.description}
                </p>
              </div>
            ))}
        </div>
      </Container>
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="mb-[60px] bg-tech-we-work bg-cover bg-no-repeat 4xl:mb-[100px]"
      >
        <Container className="flex flex-col items-center gap-[60px] py-[60px] 4xl:py-[100px]">
          <HighlitedDescriptionHero
            dangerouslySetInnerHTML={{
              __html: data?.WhyOptimityForDevelopment?.heading,
            }}
            className="mx-auto max-w-[1000px] text-center font-base text-[35px] font-medium leading-10 text-white 4xl:text-[48px] 4xl:leading-[52px]"
          />
          <div className="flex w-full flex-col gap-10 md:flex-row">
            <div className="flex w-full flex-col gap-4 md:max-w-[400px]">
              {data?.WhyOptimityForDevelopment?.developmentServicesStep &&
                data?.WhyOptimityForDevelopment?.developmentServicesStep.map(
                  (tab, i) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      onMouseEnter={() => handleMouseEnterServicesTab(i)}
                      onMouseLeave={() => handleMouseLeaveServicesTab(i)}
                      onMouseUp={() => handleMouseEnterServicesTab(i)}
                      onMouseDown={() => handleMouseLeaveServicesTab(i)}
                      className={`flex items-center justify-between rounded-full px-6 py-4 font-base text-base font-normal transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-white text-black shadow-lg'
                          : 'bg-[#f0f3f5]/10 text-white backdrop-blur-sm'
                      }`}
                    >
                      {tab.title}
                      <AnimatedArrow
                        hover={hoverServicesTab[i] ? true : false}
                      />
                    </button>
                  ),
                )}
            </div>
            <div className="w-full max-w-[1000px] rounded-2xl bg-[#FFFFFF24] p-6 backdrop-blur-md">
              {activeContent && (
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    <h2 className="font-base text-2xl font-normal leading-7 text-white">
                      {activeContent.heading}
                    </h2>
                    <p className="font-base text-sm font-normal leading-5 text-subtle">
                      {activeContent.desc}
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {activeContent.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Image
                          src="/svg/point.svg"
                          alt="point"
                          width={25}
                          height={25}
                        />
                        <p className="font-base text-base font-normal leading-5 text-white">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] 4xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          {data?.OurWork &&
            data?.OurWork.map((item, index) => (
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
      <Container className="mb-[60px] 4xl:mb-[100px]">
        <div
          ref={sectionRef}
          className="flex flex-col gap-5 rounded-3xl bg-black bg-tech-we-work bg-full bg-no-repeat p-7 md:flex-row md:items-end md:gap-14 md:rounded-[40px] lg:gap-10 lg:px-14 lg:py-20"
        >
          <div className="flex w-full max-w-[990px] flex-col gap-[38px]">
            <h4 className="mx-auto font-base text-[35px] font-medium leading-10 text-white xxl:text-[60px] xxl:leading-[72px]">
              Want to build a cross platform
              <span className="capitalize text-red"> mobile app </span> using
              Flutter?
            </h4>
            <ul className="flex flex-wrap items-center gap-5">
              {flutterCrossApp &&
                flutterCrossApp.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 rounded-full border-[1px] border-[#192020] p-3 font-base text-sm font-normal text-white backdrop-blur-[44px]"
                  >
                    <Image src={item?.img} alt="" width={15} height={15} />{' '}
                    {item?.title}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex w-full max-w-[250px] flex-col gap-4">
            <div className="mx-auto">
              <svg
                width="219"
                height="131"
                viewBox="0 0 219 131"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-full max-w-[180px] stroke-white ${isVisible ? 'animate-svg' : ''}`}
              >
                <path
                  d="M216 28.1006C205.615 18.0512 198.568 15.0557 188 13.6006C177.432 12.1455 169.5 13.6006 156 19.1006C150.874 21.1892 145.819 24.8642 141.521 28.6195C132.853 36.1928 124.212 47.8132 125.895 59.1996V59.1996C127.843 72.3748 145.371 76.4986 155.507 67.8597C160.518 63.5893 164.249 57.6943 165 52.1006C166.559 40.4858 165 35.6006 161.5 28.1006C158 20.6006 150.122 13.2343 141.5 8.60069C132.879 3.96706 119.5 3.10075 119.5 3.10075C106.542 2.61201 94.3167 3.81594 81.5 8.6006C69.8894 13.5288 61.571 18.5113 51.5 28.1006C44.9678 35.8305 41.0005 39.6007 36.5002 48.1007C32 56.6007 29 64.1007 29 64.1007"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="path-1"
                />
                <path
                  d="M38 76.5L56 60.5"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="path-2"
                />
                <path
                  d="M10 47L17 70"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="path-3"
                />
                <path
                  d="M3.00009 84.4939L16.6532 121.185C17.5522 123.601 18.7045 125.963 20.4949 127.817V127.817M3.00009 83C2.96338 83.2281 14.1525 84.3191 25.255 85.7426M25.255 85.7426C36.3344 87.163 47.3275 88.9145 46.9925 90.4696C46.4554 92.9627 28.7908 116.135 23.9526 124.69C23.1638 126.085 21.6077 128.97 20.4949 127.817V127.817M25.255 85.7426L20.4949 127.817"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="path-4"
                />
              </svg>
            </div>
            <Link
              onMouseEnter={handleMouseEnterContact}
              onMouseLeave={handleMouseLeaveContact}
              onMouseUp={handleMouseEnterContact}
              onMouseDown={handleMouseLeaveContact}
              href="/"
              className="flex w-max items-center gap-1 rounded-[50px] bg-white py-[8px] pl-[16px] pr-[14px] font-base text-[14px] font-normal leading-tight text-primary"
            >
              Contact Us
              <AnimatedArrow hover={hoverContact} />
            </Link>
          </div>
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-[60px] 4xl:mb-[100px]">
        <div className="mx-auto flex max-w-full flex-col gap-8 lg:mx-0 lg:max-w-[506px]">
          <HighlitedDescriptionHero
            dangerouslySetInnerHTML={{
              __html: data?.developmentProcess?.heading,
            }}
            className="text-center font-base text-[35px] font-medium leading-10 text-primary lg:text-start 4xl:text-[48px] 4xl:leading-[52px]"
          />
          <p className="w-full text-center font-base text-lg font-normal leading-6 text-black-750-alpha lg:text-start">
            {data?.developmentProcess?.description}
          </p>
        </div>
        <div className="flex w-full flex-col gap-5 xl:flex-row xl:gap-0">
          <ul className="flex w-full max-w-[600px] flex-col">
            {data?.developmentProcess?.developmentProcessStep &&
              data?.developmentProcess?.developmentProcessStep.map(
                (item, index) => (
                  <li
                    key={index}
                    onClick={() => setProcessDevInd(index)}
                    className="relative flex cursor-pointer items-center pb-8 pl-5 font-base text-lg font-medium leading-5 text-primary last-of-type:pb-0 3xl:pb-16 3xl:text-[22px] 3xl:leading-7"
                  >
                    <div
                      className={`absolute left-[0px] h-4 w-4 rounded-full transition-all duration-300 ease-in-out md:-left-1.5 md:h-5 md:w-5 xl:top-1 ${processDevInd === index || index <= processDevInd ? 'bg-[#1A6AA3]' : 'bg-[#E2E2E2]'}`}
                    ></div>
                    {item?.procesDataList.length - 1 !== index && (
                      <div
                        className={`absolute left-1.5 top-2 mb-1 block h-12 w-1 transition-all duration-300 ease-in-out md:left-0.5 3xl:h-24 ${processDevInd === index || index <= processDevInd ? 'bg-[#1A6AA3]' : 'bg-[#E2E2E2]'}`}
                      ></div>
                    )}

                    {item?.processHeading}
                  </li>
                ),
              )}
          </ul>
          <div className="hide-scrollbar flex w-full flex-row gap-5 overflow-auto p-4 xl:flex-col xl:overflow-hidden xxl:max-w-[800px]">
            {data?.developmentProcess?.developmentProcessStep &&
              data?.developmentProcess?.developmentProcessStep.map(
                (item, index) =>
                  processDevInd === index &&
                  item?.procesDataList.map((items, ind) => (
                    <div
                      key={ind}
                      className={`flex w-full min-w-[400px] flex-col gap-3 rounded-xl border-l-2 border-l-transparent bg-white p-6 shadow-devCardShadow scrollbar-hide first:border-l-red md:max-w-full lg:min-w-full`}
                    >
                      <h4 className="font-base text-[22px] font-medium leading-7 text-primary">
                        {items?.title}
                      </h4>
                      <p className="font-base text-base font-normal leading-6 text-black-750-alpha">
                        {items?.description}
                      </p>
                    </div>
                  )),
              )}
          </div>
        </div>
      </Container>
      <div className="mb-[60px] bg-black bg-tech-we-work bg-full py-[80px] 4xl:mb-[100px]">
        <Container className="flex flex-col gap-11">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex w-full max-w-[800px] flex-col gap-5">
              <h4 className="font-base text-[35px] font-medium leading-10 text-red 4xl:text-[48px] 4xl:leading-[52px]">
                {data?.exploreProjects?.heading}
              </h4>
              <p className="w-full font-base text-lg font-normal leading-6 text-subtle">
                {data?.exploreProjects?.description}
              </p>
            </div>
            <Link
              href={data?.exploreProjects?.buttonLink}
              onMouseEnter={handleMouseEnterViewAll}
              onMouseLeave={handleMouseLeaveViewAll}
              onMouseUp={handleMouseEnterViewAll}
              onMouseDown={handleMouseLeaveViewAll}
              className="flex w-max items-center gap-1 rounded-[50px] font-base text-[14px] font-normal leading-tight text-white"
            >
              {data?.exploreProjects?.buttonName}
              <AnimatedArrow hover={hoverViewAll} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-0 xl:grid-cols-3">
            {data?.exploreProjects?.deployProjects &&
              data?.exploreProjects?.deployProjects.map((item, index) => (
                <div
                  key={index}
                  className={` ${width >= 1280 ? ((index + 1) % 3 !== 2 ? 'mt-16' : '') : index % 2 === 0 ? 'md:mt-16' : ''} flex h-max flex-col gap-9`}
                >
                  <div>
                    <Image
                      src={item?.projectImg}
                      alt={item?.projectName}
                      width={500}
                      height={500}
                      className="aspect-[19/15] w-full rounded-[20px]"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-base text-2xl font-medium leading-7 text-white">
                      {item?.projectName}
                    </h3>
                    <p className="font-base text-base font-normal leading-6 text-white opacity-50">
                      {item?.projectDescription}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col gap-[60px] 4xl:mb-[100px]">
        <div className="mx-auto flex max-w-[760px] flex-col gap-8">
          <HighlitedDescriptionHero
            dangerouslySetInnerHTML={{
              __html: data?.technologyWeUse?.heading,
            }}
            className="text-center font-base text-[35px] font-medium leading-10 text-primary 4xl:text-[48px] 4xl:leading-[52px]"
          />
          <p className="w-full text-center font-base text-lg font-normal leading-6 text-primary opacity-50">
            {data?.technologyWeUse?.description}
          </p>
        </div>
        <div className="flex flex-col gap-5 3xl:gap-2">
          {data?.technologyWeUse?.technologyServices &&
            data?.technologyWeUse?.technologyServices.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 bg-white/80 shadow-devCardShadow xl:grid-cols-7 ${index % 2 === 0 ? 'rounded-br-[35px] rounded-tl-[35px]' : 'rounded-br-[35px] rounded-tl-[35px] xl:!rounded-br-[0px] xl:rounded-bl-[35px] xl:rounded-tl-[0px] xl:rounded-tr-[35px]'}`}
              >
                <div
                  className={`col-span-2 h-full min-h-full w-full p-5 md:p-7 ${index % 2 === 0 ? 'rounded-tl-[35px] bg-[#f38f01]/40' : 'rounded-tl-[35px] bg-[#05ADE1]/40 xl:rounded-bl-[35px] xl:rounded-tl-[0px]'}`}
                >
                  <div className="flex h-full items-center justify-start gap-[15px]">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full 3xl:h-[50px] 3xl:w-[50px]"
                      style={{ backgroundColor: item?.bgColor }}
                    >
                      <Image
                        src={item?.servicesImg}
                        alt={item?.servicesImg}
                        width={31}
                        height={31}
                      />
                    </div>
                    <span className="font-base text-xl font-medium leading-6 text-iconSubtle sm:text-2xl sm:leading-[30px]">
                      {item?.servicesName}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-[11px] p-5 md:p-7 xl:col-span-5">
                  {item?.servicesItems?.map((items, ind) => (
                    <div
                      key={ind}
                      className="flex items-center gap-2 rounded-[33.61px] border-1.5 border-[#EEEEEE] p-3.5"
                    >
                      <Image
                        src={checkMark}
                        alt="check-mark"
                        width={24}
                        height={24}
                        className="!w-5 sm:w-max"
                      />
                      <span className="line-clamp-1 font-base text-sm font-normal leading-4 text-iconSubtle sm:line-clamp-none sm:text-base sm:leading-6">
                        {items}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default AllPageContent;
