'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedArrow from '../common/AnimatedArrow';
import ProjectCard from '../common/ProjectCard';
import Container from '../ui/Container';
import HeroSectionHeading from '../ui/HeroSectionHeading';
import SectionHeader from '../ui/SectionHeader';
import Image from 'next/image';
import { IProjectDetail } from '../type/projectDetail/projectDetailType';

type ProjectDetailsProps = {
  data: IProjectDetail;
};
const ProjectDetails = ({ data }: ProjectDetailsProps) => {
  const [hoverViewAll, setHoverViewAll] = useState<boolean>(false);
  const handleMouseEnterViewAll = () => setHoverViewAll(true);
  const handleMouseLeaveViewAll = () => {
    setHoverViewAll(false);
  };
  return (
    <>
      <div
        className="relative -mt-[74px] mb-[60px] bg-cover bg-fixed bg-center bg-no-repeat 3xl:mb-[100px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) -2.73%, rgba(255, 255, 255) 61.57%),url(${data?.heroSection?.heroBgimg})`,
        }}
      >
        <div className="mx-auto flex w-full max-w-full flex-col justify-between gap-12 overflow-hidden pl-4 pt-[150px] sm:pl-6 md:pl-10 lg:h-screen lg:flex-row xl:pl-20 3xl:pl-24">
          <div className="flex w-full max-w-[580px] flex-col justify-center gap-4 lg:ml-auto lg:pb-[100px]">
            <Image
              src={data?.heroSection?.projectLogo || ''}
              alt="p-logo"
              width={160}
              height={90}
              className="object-contain"
            />
            <HeroSectionHeading
              description={data?.heroSection?.description || ''}
              className="w-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: 'easeIn',
            }}
            className="relative ml-auto mt-auto aspect-[5/4] h-full w-full max-w-[450px] lg:aspect-[unset] lg:max-w-[900px]"
          >
            <Image
              src={data?.heroSection?.heroProjectMockupImg}
              alt="moc-img"
              fill
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="bg-workDetailRight bg-contain bg-left bg-no-repeat">
        <Container className="mb-[60px] flex flex-col gap-10 4xl:mb-[100px] 4xl:gap-[60px]">
          <SectionHeader
            className="mx-auto"
            headingStyle="text-center"
            headingText={data?.aboutTheProject?.title}
            descriptionStyle="3xl:max-w-[1000px]"
            descriptionText={data?.aboutTheProject?.description || ''}
          />

          <div className="relative h-0 w-full pb-[45%]">
            <Image
              src={data?.aboutTheProject?.projectMockupImages || ''}
              alt="image"
              fill
              loading="lazy"
              className="h-full w-full"
            />
          </div>
        </Container>
      </div>
      <div className="bg-workDetailLeft bg-contain bg-right bg-no-repeat">
        <Container className="mb-[60px] flex max-w-[1200px] flex-col gap-10 4xl:mb-[100px] 4xl:gap-[60px]">
          <div className="relative w-full">
            <Image
              src={data?.projectHomePageImage || ''}
              alt="image"
              width={1200}
              height={1200}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col gap-10 4xl:mb-[100px] 4xl:gap-[60px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data?.projectSubMockupImages.map((imgSrc, index) => (
            <div key={index} className="relative h-0 w-full pb-[70%]">
              <Image
                src={imgSrc || ''}
                alt="image"
                fill
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          ))}
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-10 4xl:mb-[100px] 4xl:gap-[60px]">
        <SectionHeader
          headingText={data?.projectSolution?.title}
          className="items-center"
          descriptionText={data?.projectSolution?.description || ''}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data?.projectSolution?.projectSolutionCard.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 rounded-xl border border-lightBlueish bg-lightBlueishGray p-6 md:p-8"
            >
              <h3 className="font-opt text-3xl font-medium leading-8 text-primary">
                {card.solutionTitle}
              </h3>
              <p className="font-opt text-base text-optDesc md:text-lg">
                {card.solutionDescription}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <Container className="mb-[60px] 4xl:mb-[100px]">
        <div className="relative z-[-1] grid overflow-hidden grid-stack after:absolute after:inset-0 after:z-[1] after:rounded-xl after:bg-black-200-alpha lg:after:rounded-[20px]">
          <div className="relative h-0 w-full rounded-xl pb-[100%] lg:rounded-[20px] lg:pb-[60%]">
            <Image
              src={data?.projectSolution?.projectUser || ''}
              alt="image"
              fill
              loading="lazy"
              className="h-full w-full rounded-xl lg:rounded-[20px]"
            />
          </div>
          <div className="relative z-10 m-2 flex w-full flex-col justify-between gap-10 rounded-xl bg-black-450-alpha p-3 sm:m-3 md:m-8 md:max-w-[350px]">
            <Image
              src={data?.projectSolution?.projectLogo || ''}
              alt="p-logo"
              width={160}
              height={90}
              className="object-contain"
            />
            <p className="flex-col font-opt text-xl font-medium leading-6 text-white">
              {data?.projectSolution?.subDescription}
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-black bg-tech-we-work bg-full py-[80px]">
        <Container className="flex flex-col gap-11">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <SectionHeader
              headingText={data?.exploreProjects?.heading}
              descriptionText={data?.exploreProjects?.description}
              headingStyle="!text-red "
              className="max-w-[800px] items-start"
              descriptionStyle="!text-start"
              isSectionDark={true}
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
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0 xl:grid-cols-3">
            {data?.exploreProjects?.deployProjects &&
              data?.exploreProjects?.deployProjects.map((item, i) => (
                <ProjectCard key={i} data={item} i={i} />
              ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProjectDetails;
