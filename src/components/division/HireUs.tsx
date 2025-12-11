'use client';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import MarqueeWrapper from '@/components/model-&-Drawer/MarqueeWrapper';
import SectionHeader from '../ui/SectionHeader';
import HeroSectionHeading from '../ui/HeroSectionHeading';
import ClientTestimonial from '../ui/ClientTestimonial';
import { IHireUsPageType } from '../type/hireUs/hireUsType';
type hireUsProps = {
  data: IHireUsPageType;
};
const HireUs = ({ data }: hireUsProps) => {
  const [hover, setHover] = useState<boolean>(false);
  console.log(data);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <Container className="my-[60px] flex flex-col-reverse items-center justify-between gap-10 md:flex-row xxl:my-[100px]">
        <HeroSectionHeading
          heading={data?.heroSection?.heading}
          description={data?.heroSection?.description}
          btnName={data?.heroSection?.btnName}
          link={data?.heroSection?.btnName}
          className="!gap-10"
        />
        <div className="relative">
          <Image
            src={data?.heroSection?.images?.leftImage || ''}
            alt="hire-us"
            width={400}
            height={100}
            priority
            fetchPriority="high"
            className="absolute -left-1/2 bottom-5 hidden h-auto 3xl:block"
          />
          <Image
            src={data?.heroSection?.images?.mainImage || ''}
            alt="hire-us"
            width={600}
            height={100}
            priority
            fetchPriority="high"
            className="h-auto w-full max-w-[500px]"
          />
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-8 4xl:mb-[100px] 4xl:gap-[60px]">
        <SectionHeader
          headingText={data?.hireRequirementSection?.heading}
          headingStyle="text-center"
        />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {data?.hireRequirementSection?.cards.map((item, index) => (
            <div
              key={index}
              className="relative grid rounded-xl shadow-xl ring-4 ring-black/5 grid-stack after:absolute after:inset-0 after:rounded-xl after:bg-black/40"
            >
              <div className="relative z-20 flex h-full flex-col items-start justify-between p-5">
                <span
                  style={{
                    background:
                      'linear-gradient(244.15deg, rgba(255, 255, 255, 0) 13.76%, rgba(255, 255, 255, 0.2) 47.33%, rgba(255, 255, 255, 0.2) 51.96%, rgba(255, 255, 255, 0) 82.84%), #0A1013',
                    boxShadow:
                      '0px 13px 5px rgba(0, 0, 0, 0.03), 0px 7px 4px rgba(0, 0, 0, 0.09), 0px 3px 3px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.18)',
                  }}
                  className="flex items-center justify-center rounded-full bg-no-repeat px-2.5 py-1 font-opt text-xl font-medium capitalize leading-6 text-white lg:px-4 lg:py-2"
                >
                  {item?.label}
                </span>
                <p className="font-opt text-xl font-normal leading-6 text-white">
                  {item?.timing}
                </p>
              </div>
              <Image
                src={item?.image}
                alt="hire-us"
                width={533}
                height={333}
                className="w-full rounded-xl md:w-max"
              />
            </div>
          ))}
        </div>
      </Container>
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="mb-[60px] bg-tech-we-work bg-cover bg-no-repeat 4xl:mb-[100px]"
      >
        <Container className="flex flex-col items-center justify-between gap-10 py-12 lg:flex-row">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h5 className="font-opt text-3xl font-normal leading-8 text-white/45">
                {data?.engagementModel?.subHeading}
              </h5>
              <h3 className="font-opt text-5xl font-medium italic text-red">
                {data?.engagementModel?.heading}
              </h3>
            </div>
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseEnter}
              onMouseDown={handleMouseLeave}
              href={data?.engagementModel?.link}
              className={`flex w-max items-center justify-center gap-1 rounded-[50px] border border-white px-[14px] py-[8px] font-opt text-sm font-normal leading-4 text-white transition-all duration-250 ease-in hover:border-transparent hover:bg-[#1A6AA3] hover:shadow-lg`}
            >
              <span className="mt-0.5">{data?.engagementModel?.button}</span>
              <span className="mt-0.5">
                <AnimatedArrow hover={hover} />
              </span>
            </Link>
          </div>
          <div className="">
            <Image
              src={data?.engagementModel?.image}
              alt=""
              width={550}
              height={400}
              className="h-auto max-w-[350px]"
            />
          </div>
        </Container>
      </div>
      <div className="grid bg-[#F7F7F8] py-10 xxl:py-20">
        <Container className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="absolute -z-10 flex h-full w-full items-center justify-center">
            <Image
              src="/webp/hire-us/circle.webp"
              alt="circle"
              width={550}
              height={500}
            />
          </div>
          <SectionHeader
            headingText={data?.howWeWork?.heading}
            descriptionText={data?.howWeWork?.description}
            className="items-start"
            descriptionStyle="text-start"
          />
          {data?.howWeWork?.steps &&
            data?.howWeWork?.steps.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-[30px] rounded-[20px] bg-white/70 p-[30px] shadow-howWorkCard backdrop-blur-sm"
              >
                <span className="flex h-[60px] max-w-[60px] items-center justify-center rounded-md bg-[#05ADE1] font-opt text-xl font-medium text-white">
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-3">
                  <h5 className="font-opt text-xl font-medium leading-6 text-primary">
                    {item?.title}
                  </h5>
                  <p className="font-opt text-base font-normal leading-5 text-optDesc">
                    {item?.description}
                  </p>
                </div>
              </div>
            ))}
        </Container>
      </div>
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="mb-[60px] bg-tech-we-work bg-cover bg-no-repeat 4xl:mb-[100px]"
      >
        <div className="flex flex-col items-center gap-10 py-12">
          <SectionHeader
            headingText={data?.advantages?.heading}
            className="mx-auto max-w-[800px]"
            isSectionDark={true}
            headingStyle="text-center"
          />

          <div className="flex w-full items-stretch gap-4 overflow-x-auto px-7 scrollbar-hide">
            {data?.advantages?.cards &&
              data?.advantages?.cards.map((item, i) => (
                <div
                  key={i}
                  className="bg flex w-full min-w-[300px] flex-col gap-3 rounded-2xl bg-successFulStepCard p-[30px] sm:min-w-[550px]"
                >
                  <h5 className="font-opt text-xl font-medium leading-6 text-white">
                    {item?.title}
                  </h5>
                  <p className="line-clamp-6 font-opt text-base font-normal leading-5 text-white/70">
                    {item?.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10">
        <h3 className="mx-auto w-full max-w-[800px] text-center font-opt text-[35px] font-medium leading-10 text-primary 4xl:text-[48px] 4xl:leading-[52px]">
          <span className="text-red">Hire Based </span> on Your Requirement
        </h3>

        <MarqueeWrapper speed={100} pauseOnHover direction="right">
          {data?.marqueeOne &&
            data?.marqueeOne.map((item, i) => (
              <div key={i} className="h-auto max-w-[400px] last-of-type:mr-10">
                <Image
                  src={item}
                  alt="img"
                  width={540}
                  height={460}
                  className="h-max w-max rounded-2xl"
                />
              </div>
            ))}
        </MarqueeWrapper>
        <MarqueeWrapper speed={100} pauseOnHover direction="left">
          {data?.marqueeTwo &&
            data?.marqueeTwo.map((item, i) => (
              <div key={i} className="h-auto max-w-[400px] last-of-type:mr-10">
                <Image
                  src={item}
                  alt="img"
                  width={600}
                  height={640}
                  className="h-max w-max rounded-2xl"
                />
              </div>
            ))}
        </MarqueeWrapper>
      </div>
      <ClientTestimonial />
    </>
  );
};

export default HireUs;
