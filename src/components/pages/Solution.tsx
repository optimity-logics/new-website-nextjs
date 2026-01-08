'use client';
import React, { useState } from 'react';
import Container from '../ui/Container';
import HeroSectionHeading from '../ui/HeroSectionHeading';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
import OurWorkCard from '../common/OurWorkCard';
import Link from 'next/link';
import AnimatedArrow from '../common/AnimatedArrow';
import ProjectCard from '../common/ProjectCard';
import Faqs from '../homePage/Faqs';
import { motion } from 'framer-motion';
import { IsolutionsPage } from '../type/solution/solutionType';

type IsolutionSubPageType = {
  data: IsolutionsPage;
};

const Solution = ({ data }: IsolutionSubPageType) => {
  const [hoverViewAll, setHoverViewAll] = useState<boolean>(false);
  const handleMouseEnterViewAll = () => setHoverViewAll(true);
  const handleMouseLeaveViewAll = () => {
    setHoverViewAll(false);
  };
  return (
    <>
      <div className="-mt-20 overflow-hidden bg-aboutUsHeroBg bg-fixed bg-center bg-no-repeat lg:bg-full">
        <div className="flex h-full min-h-screen items-center justify-center">
          <Container className="relative z-20 flex h-full flex-col items-center justify-end gap-5 py-20 pt-[150px] lg:min-h-screen lg:flex-row lg:justify-between lg:pt-20">
            <HeroSectionHeading
              className="items-start justify-center !gap-10"
              heading={data?.heroSection?.title}
              description={data?.heroSection?.description}
              btnName={data?.heroSection?.buttonText}
              link={data?.heroSection?.buttonLink}
            />

            <div className="relative aspect-[5/4] h-auto w-full max-w-[450px] 3xl:aspect-[5/6]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeIn',
                }}
                className="relative h-full w-full"
              >
                <Image
                  src={data?.heroSection?.heroImage}
                  alt="solution"
                  fill
                  priority
                  fetchPriority="high"
                  className="object-contain"
                />
              </motion.div>
            </div>
            <span className="absolute -bottom-[2%] left-1/2 z-0 block -translate-x-1/2 whitespace-pre text-center font-opt text-[45px] font-medium text-primaryRichBlack opacity-10 md:-bottom-[6%] md:text-[100px]">
              {data?.heroSection?.watermark}
            </span>
          </Container>
        </div>
      </div>
      <div
        className={`${data?.ctaSection?.bgClass} relative mb-[60px] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:max-h-[500px] after:w-full after:bg-black-560-alpha lg:bg-full 3xl:mb-[100px]`}
      >
        <Container className="relative z-30 py-[80px] 3xl:py-[150px]">
          <HeroSectionHeading
            heading={data?.ctaSection?.heading}
            btnName={data?.ctaSection?.buttonText}
            link={data?.ctaSection?.buttonLink}
            headingStyle="text-white"
            className="max-w-[800px]"
            isBtnBackgroundLight={true}
          />
        </Container>
      </div>
      <Container className="mb-[60px] w-full max-w-[1680px] 4xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          {data?.ourWork &&
            data?.ourWork.map((item, i) => <OurWorkCard key={i} data={item} />)}
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-[60px] 3xl:mb-[100px]">
        <SectionHeader
          headingText={data?.healthcareServices?.title}
          descriptionText={data?.healthcareServices?.description}
          className="items-center"
          headingStyle="max-w-[800px] mx-auto text-center"
        />
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex w-full max-w-[600px] flex-col gap-6">
            <h2 className="font-opt text-3xl font-semibold leading-8 text-primary">
              {data?.healthcareServices?.serviceTitle}
            </h2>
            <p className="font-opt text-base font-normal leading-6 text-optDesc">
              {data?.healthcareServices?.serviceDescription}
            </p>
            <ul className="space-y-3">
              {data?.healthcareServices?.services &&
                data?.healthcareServices?.services.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 font-opt text-base font-medium leading-5 text-primary"
                  >
                    <Image
                      src={data?.healthcareServices?.serviceIcon}
                      alt="heart"
                      width={26}
                      height={26}
                    />{' '}
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex w-full gap-5 overflow-x-auto rounded-2xl scrollbar-hide">
            {data?.healthcareServices?.images.map((item, i) => (
              <div
                key={i}
                className="rounded-2x relative aspect-[6/5] h-full w-full min-w-[300px] md:min-w-[340px]"
              >
                <Image src={item} alt="health" fill className="rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="bg-black bg-tech-we-work bg-full py-[80px]">
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0 lg:gap-x-16 xl:grid-cols-3">
            {data?.exploreProjects?.deployProjects &&
              data?.exploreProjects?.deployProjects.map((item, i) => (
                <ProjectCard key={i} data={item} i={i} />
              ))}
          </div>
        </Container>
      </div>
      <Faqs />
    </>
  );
};

export default Solution;
