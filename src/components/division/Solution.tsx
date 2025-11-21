'use client';
import React, { useState } from 'react';
import Container from '../ui/Container';
import HeroSectionHeading from '../ui/HeroSectionHeading';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';
import { homePageData } from '../utils/Constant';
import OurWorkCard from '../common/OurWorkCard';
import Link from 'next/link';
import AnimatedArrow from '../common/AnimatedArrow';
import ProjectCard from '../common/ProjectCard';
import Faqs from '../homePage/Faqs';

const Solution = () => {
  const healthcareData = {
    title: 'Healthcare Software Development',
    description:
      "Whether you're looking to build a custom cross-platform app from the ground up using Flutter or upgrade an existing app to match current technology trends, we've got you covered. As a leading Flutter mobile app development company, we provide comprehensive Flutter app development services to support you through every stage of the development lifecycle.",
    services: [
      'Healthcare IT Consultants',
      'UI/UX Designers',
      'DevOps Engineers',
      'Software Engineers',
      'QA & Testing Specialists',
      'Cloud Architects',
      'Database Administrators',
    ],
    icon: '/svg/services/health.svg',
    images: [
      '/images/solution/health1.jpg',
      '/images/solution/health2.jpg',
      '/images/solution/health3.jpg',
    ],
    exploreProjects: {
      heading: `Explore Projects`,
      description: `Here’s an overview of some of the projects we’ve worked on.
                These case studies showcase how we thoughtfully address our
                clients’ needs with attention to detail and care.`,
      buttonName: 'View All',
      buttonLink: '',
      deployProjects: [
        {
          projectImg: '/webp/project/riskbeach.webp',
          projectName: 'Ricks Beach Rentals',
          projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
        },
        {
          projectImg: '/webp/project/hts.webp',
          projectName: 'HTS',
          projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
        },
        {
          projectImg: '/webp/project/hopper.webp',
          projectName: 'Hopper',
          projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
        },
        {
          projectImg: '/webp/project/riskbeach.webp',
          projectName: 'Ricks Beach',
          projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
        },
        {
          projectImg: '/webp/project/riskbeach.webp',
          projectName: 'Ricks Beach',
          projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
        },
        {
          projectImg: '/webp/project/riskbeach.webp',
          projectName: 'Ricks Beach',
          projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since`,
        },
      ],
    },
  };
  const [hoverViewAll, setHoverViewAll] = useState<boolean>(false);
  const handleMouseEnterViewAll = () => setHoverViewAll(true);
  const handleMouseLeaveViewAll = () => {
    setHoverViewAll(false);
  };
  return (
    <>
      <div className="-mt-20 overflow-hidden bg-aboutUsHeroBg bg-full bg-fixed bg-no-repeat">
        <div className="flex h-full min-h-screen items-center justify-center">
          <Container className="relative z-20 flex h-full flex-col items-center justify-end gap-5 py-20 pt-[150px] lg:min-h-screen lg:flex-row lg:justify-between lg:pt-20">
            <HeroSectionHeading
              className="items-start justify-center !gap-10"
              heading="Healthcare & Life Sciences"
              description="Whether it is a B2B or B2C app development requirement, our Flutter developers have the competencies to build you a custom cross-platform app that is scalable, aesthetically pleasing, runs seamlessly across Android and iOS devices, and exceeds your expectations."
              btnName="Let’s Connect"
              link=""
            />
            <div className="relative aspect-[5/4] h-auto w-full max-w-[450px] 3xl:aspect-[5/6]">
              <Image
                src="/images/solution/healthCare.png"
                alt="solution"
                fill
                priority
                fetchPriority="high"
                className="object-contain"
              />
            </div>
            <span className="absolute -bottom-[4%] left-1/2 z-0 block -translate-x-1/2 whitespace-pre text-center font-opt text-[75px] font-medium text-[#161616] opacity-10 md:-bottom-[6%] md:text-[100px] lg:-bottom-[8%] 3xl:-bottom-[6%]">
              Healthcare
            </span>
          </Container>
        </div>
      </div>
      <div className="relative mb-[60px] bg-bgHealthCare bg-cover bg-fixed bg-center bg-no-repeat after:absolute after:inset-0 after:max-h-[500px] after:w-full after:bg-[#0000008F] 3xl:mb-[100px]">
        <Container className="relative z-30 py-[150px]">
          <HeroSectionHeading
            heading="Ready to optimize your healthcare operations?"
            btnName="Connect Us"
            link="/contact-us"
            headingStyle="text-white"
            className="max-w-[800px]"
          />
        </Container>
      </div>
      <Container className="mb-[60px] w-full max-w-[1680px] 4xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          {homePageData?.OurWork &&
            homePageData?.OurWork.map((item, i) => (
              <OurWorkCard key={i} data={item} />
            ))}
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-[60px] 3xl:mb-[100px]">
        <SectionHeader
          headingText='<span class="text-red">Our Services </span>Revolutioning Your 
Healthcare Operations'
          descriptionText={`Whether you're looking to build a custom cross-platform app from the ground up using Flutter or upgrade an existing app to match current technology trends, we’ve got you covered. As a leading Flutter mobile app development company, we provide comprehensive Flutter app development services to support you through every stage of the development lifecycle.`}
          className="items-center"
          headingStyle="max-w-[800px] mx-auto text-center"
        />
        <div className="flex flex-col gap-10 xl:flex-row">
          <div className="flex w-full max-w-[600px] flex-col gap-6">
            <h2 className="font-opt text-3xl font-semibold leading-8 text-primary">
              {healthcareData?.title}
            </h2>
            <p className="font-opt text-base font-normal leading-6 text-optDesc">
              {healthcareData?.description}
            </p>
            <ul className="space-y-3">
              {healthcareData?.services &&
                healthcareData?.services.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 font-opt text-base font-medium leading-5 text-primary"
                  >
                    <Image
                      src={healthcareData?.icon}
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
            {healthcareData?.images.map((item, i) => (
              <div
                key={i}
                className="relative aspect-[6/5] h-full w-full max-w-[340px] rounded-2xl after:absolute after:inset-0 after:rounded-2xl after:bg-[#00000070]"
              >
                <Image src={item} alt="health" fill className="rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="mb-[60px] bg-black bg-tech-we-work bg-full py-[80px] 4xl:mb-[100px]">
        <Container className="flex flex-col gap-11">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <SectionHeader
              headingText={healthcareData?.exploreProjects?.heading}
              descriptionText={healthcareData?.exploreProjects?.description}
              headingStyle="!text-red"
              className="max-w-[800px] items-start"
              isSectionDark={true}
              descriptionStyle="text-start "
            />

            <Link
              href={healthcareData?.exploreProjects?.buttonLink}
              onMouseEnter={handleMouseEnterViewAll}
              onMouseLeave={handleMouseLeaveViewAll}
              onMouseUp={handleMouseEnterViewAll}
              onMouseDown={handleMouseLeaveViewAll}
              className="flex w-max items-center gap-1 rounded-[50px] font-opt text-base font-normal leading-tight text-white"
            >
              {healthcareData?.exploreProjects?.buttonName}
              <AnimatedArrow hover={hoverViewAll} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-0 xl:grid-cols-3">
            {healthcareData?.exploreProjects?.deployProjects &&
              healthcareData?.exploreProjects?.deployProjects.map((item, i) => (
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
