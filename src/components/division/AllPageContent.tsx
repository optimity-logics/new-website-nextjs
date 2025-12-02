'use client';
import React, { useEffect, useRef, useState } from 'react';
import Container from '../ui/Container';
import checkMark from '../../../public/svg/check-mark.svg';
import Link from 'next/link';
import { homePageData, logoIcons } from '../utils/Constant';
import 'react-international-phone/style.css';
import AnimatedArrow from '../common/AnimatedArrow';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import LogoAnimation from '../homePage/LogoAnimation';
import { IPropsDataTypes } from '../type/type';
import HeroSectionHeading from '../ui/HeroSectionHeading';
import SectionHeader from '../ui/SectionHeader';
import OurWorkCard from '../common/OurWorkCard';
import ProjectCard from '../common/ProjectCard';
import Button from '../ui/Button';
import Contact from '../ui/Contact';
import { motion } from 'framer-motion';

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
  const [hoverServicesTab, setHoverServicesTab] = useState<
    Record<number, boolean>
  >({
    0: false,
    1: false,
  });
  const [hoverViewAll, setHoverViewAll] = useState<boolean>(false);
  const [processDevInd, setProcessDevInd] = useState<number>(0);
  const [activeTab, setActiveTab] = useState(1);

  const activeContent =
    data?.WhyOptimityForDevelopment?.developmentServicesStep.find(
      (tab) => tab.id === activeTab,
    )?.content;

  const handleMouseEnterServicesTab = (i: number) =>
    setHoverServicesTab((prev) => ({ ...prev, [i]: true }));
  const handleMouseLeaveServicesTab = (i: number) => {
    setHoverServicesTab((prev) => ({ ...prev, [i]: false }));
  };
  const handleMouseEnterViewAll = () => setHoverViewAll(true);
  const handleMouseLeaveViewAll = () => {
    setHoverViewAll(false);
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      <div className="-mt-20 overflow-hidden bg-aboutUsHeroBg bg-full bg-fixed bg-no-repeat">
        <div className="flex h-full min-h-screen items-center justify-center">
          <Container className="relative z-20 flex h-full flex-col items-center justify-end gap-5 py-20 pt-[150px] lg:min-h-screen lg:flex-row lg:justify-between lg:pt-20">
            <HeroSectionHeading
              className="!gap-10"
              heading={data?.HeroSectionData?.heading}
              description={data?.HeroSectionData?.description}
              btnName={data?.HeroSectionData?.btnName}
              link={data?.HeroSectionData?.btnLink}
            />
            <div className="relative aspect-[5/4] h-auto w-full max-w-[450px] 3xl:aspect-[5/6]">
              {data?.HeroSectionData?.techImg && (
                <motion.div
                  key={
                    typeof data?.HeroSectionData?.techImg === 'string'
                      ? data.HeroSectionData.techImg
                      : data.HeroSectionData.techImg?.src
                  }
                  className="relative h-full w-full" // ADD THIS
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeIn',
                  }}
                >
                  <Image
                    src={data?.HeroSectionData?.techImg || ''}
                    alt="technology"
                    fill
                    priority
                    fetchPriority="high"
                    className="object-contain"
                  />
                </motion.div>
              )}
            </div>

            {data?.HeroSectionData?.techName && (
              <span className="absolute -bottom-[4%] left-1/2 z-0 block -translate-x-1/2 whitespace-pre text-center font-opt text-[75px] font-medium text-[#161616] opacity-10 md:-bottom-[6%] md:text-[100px] lg:-bottom-[8%] 3xl:-bottom-[13.7%] 3xl:text-[200px]">
                {data?.HeroSectionData?.techName}
              </span>
            )}
          </Container>
        </div>
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
            <span className="max-w-[400px] text-center font-opt text-base font-normal leading-[1.6rem] text-optDesc md:text-lg md:leading-7 xl:text-start">
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
            <span className="max-w-[400px] text-center font-opt text-base font-normal leading-[1.6rem] text-optDesc md:text-lg md:leading-7 xl:text-start">
              {homePageData?.trustedClient}
            </span>
            <LogoAnimation logo={logos} />
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col items-center gap-[60px] 4xl:mb-[100px]">
        <SectionHeader
          headingText={data?.development?.heading}
          descriptionText={data?.development?.description}
          headingStyle="text-center"
          className="max-w-[900px] items-center"
        />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {data?.development?.developmentServices &&
            data?.development?.developmentServices.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-[15px] p-5 shadow-devCardShadow md:p-[30px]"
              >
                <h5 className="font-opt text-xl font-medium leading-6 text-primary">
                  {item?.title}
                </h5>
                <p className="font-opt text-base font-normal leading-5 text-optDesc">
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
          <SectionHeader
            headingText={data?.WhyOptimityForDevelopment?.heading}
            className="max-w-[900px]"
            headingStyle="text-center"
            isSectionDark={true}
          />

          <div className="flex w-full flex-col gap-10 md:flex-row">
            <div className="flex w-full flex-col gap-4 md:max-w-[400px]">
              {data?.WhyOptimityForDevelopment?.developmentServicesStep &&
                data?.WhyOptimityForDevelopment?.developmentServicesStep.map(
                  (tab, i) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      onMouseEnter={() => handleMouseEnterServicesTab(i)}
                      onMouseLeave={() => handleMouseLeaveServicesTab(i)}
                      onMouseUp={() => handleMouseEnterServicesTab(i)}
                      onMouseDown={() => handleMouseLeaveServicesTab(i)}
                      // ⭐ Framer Motion Animations
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.06 }}
                      className={`group relative flex items-center justify-between overflow-hidden rounded-full px-6 py-4 font-opt text-lg font-normal transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-white/80 text-primary shadow-lg backdrop-blur-sm'
                          : 'bg-[#f0f3f5]/10 text-white backdrop-blur-sm'
                      } `}
                    >
                      {/* ✨ Glass Glow Overlay */}
                      <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 transition-all duration-500 group-hover:opacity-20" />

                      {/* ✨ Sweep Shine Animation */}
                      <span className="absolute left-[-100%] top-0 h-full w-[60%] rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-all duration-[850ms] ease-in group-hover:left-[100%] group-hover:opacity-100" />

                      {tab.title}
                      <AnimatedArrow hover={hoverServicesTab[i]} />
                    </motion.button>
                  ),
                )}
            </div>

            {activeContent && (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="flex w-full max-w-[1000px] flex-col gap-5 rounded-2xl bg-[#FFFFFF24] p-6 backdrop-blur-md"
              >
                <div className="flex flex-col gap-4">
                  <h2 className="font-opt text-xl font-normal leading-6 text-white">
                    {activeContent.heading}
                  </h2>
                  <p className="font-opt text-base font-normal leading-6 text-white/45">
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
                      <p className="font-opt text-base font-normal leading-5 text-white">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] 4xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          {data?.OurWork &&
            data?.OurWork.map((item, index) => (
              <OurWorkCard key={index} data={item} />
            ))}
        </div>
      </Container>
      <Container className="mb-[60px] 4xl:mb-[100px]">
        <div
          ref={sectionRef}
          className="flex flex-col gap-5 rounded-3xl bg-black bg-tech-we-work bg-full bg-no-repeat p-7 md:flex-row md:items-end md:gap-14 md:rounded-[40px] lg:gap-10 lg:px-14 lg:py-20"
        >
          <div className="flex w-full max-w-[990px] flex-col gap-[38px]">
            <SectionHeader
              headingText={data?.crossPlatformBenefitsTitle}
              headingStyle="3xl:text-[55px] 3xl:leading-[60px]"
              isSectionDark={true}
            />
            <ul className="flex flex-wrap items-center gap-5">
              {data?.crossPlatformBenefits &&
                data?.crossPlatformBenefits.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 rounded-full border-[1px] border-[#192020] p-3 font-opt text-sm font-normal text-white backdrop-blur-[44px]"
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
            <Button
              btnName={data?.crossPlatformBenefitsContactBtn}
              redirectionLink={data?.crossPlatformBenefitsContactBtnLink}
              isBackgroundLight={true}
            />
          </div>
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-[60px] 4xl:mb-[100px]">
        <SectionHeader
          headingText={data?.developmentProcess?.heading}
          descriptionText={data?.developmentProcess?.description}
          descriptionStyle="text-start"
          className="max-w-full lg:max-w-[506px]"
        />
        <div className="flex w-full flex-col gap-5 xl:flex-row xl:gap-0">
          <ul className="flex w-full max-w-[600px] flex-col">
            {data?.developmentProcess?.developmentProcessStep &&
              data?.developmentProcess?.developmentProcessStep.map(
                (item, index) => (
                  <li
                    key={index}
                    onClick={() => setProcessDevInd(index)}
                    className="relative flex cursor-pointer items-center pb-8 pl-5 font-opt text-lg font-medium leading-5 text-primary last-of-type:pb-0 3xl:pb-16 3xl:text-[22px] 3xl:leading-7"
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
                      <h4 className="font-opt text-[22px] font-medium leading-7 text-primary">
                        {items?.title}
                      </h4>
                      <p className="font-opt text-base font-normal leading-5 text-optDesc">
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
            <SectionHeader
              headingText={data?.exploreProjects?.heading}
              descriptionText={data?.exploreProjects?.description}
              headingStyle="!text-red"
              className="max-w-[800px] items-start"
              isSectionDark={true}
              descriptionStyle="text-start "
            />

            <Link
              href={data?.exploreProjects?.buttonLink}
              onMouseEnter={handleMouseEnterViewAll}
              onMouseLeave={handleMouseLeaveViewAll}
              onMouseUp={handleMouseEnterViewAll}
              onMouseDown={handleMouseLeaveViewAll}
              className="flex w-max items-center gap-1 rounded-[50px] font-opt text-base font-normal leading-tight text-white"
            >
              {data?.exploreProjects?.buttonName}
              <AnimatedArrow hover={hoverViewAll} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-0 xl:grid-cols-3">
            {data?.exploreProjects?.deployProjects &&
              data?.exploreProjects?.deployProjects.map((item, i) => (
                <ProjectCard key={i} data={item} i={i} />
              ))}
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col gap-[60px] 4xl:mb-[100px]">
        <SectionHeader
          headingText={data?.technologyWeUse?.heading}
          descriptionText={data?.technologyWeUse?.description}
          className="mx-auto max-w-[800px] items-center"
          headingStyle="text-center"
          descriptionStyle="text-center"
        />
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
                    <span className="font-opt text-xl font-medium leading-6 text-optDesc">
                      {item?.servicesName}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-[11px] p-5 xl:col-span-5">
                  {item?.servicesItems?.map((items, ind) => (
                    <div
                      key={ind}
                      className="flex items-center gap-2 rounded-[33.61px] border-1.5 border-optDesc/20 px-4 py-2"
                    >
                      <Image
                        src={checkMark}
                        alt="check-mark"
                        width={24}
                        height={24}
                        className="!w-5 sm:w-max"
                      />
                      <span className="line-clamp-1 font-opt text-sm font-medium leading-4 text-optDesc sm:line-clamp-none sm:text-base sm:leading-6">
                        {items}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Container>
      <Contact />
    </>
  );
};

export default AllPageContent;
