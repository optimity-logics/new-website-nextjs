'use client';
import Container from '@/components/ui/Container';
import { siteMapData } from '@/components/utils/Constant';
import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import SectionHeader from '@/components/ui/SectionHeader';
import { formatTechName } from '@/components/utils/helper/formatTechName';
import { homePageData } from '@/components/utils/page-data/homePage';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Sitemap = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  return (
    <>
      <div
        style={{
          backgroundImage:
            'radial-gradient(154.86% 76.83% at 50% 22.26%,rgb(247 247 248/.4) 8.98%,#F7F7F8 45.99%)',
        }}
        className="-mt-20"
      >
        <div className="bg-aboutUsHeroBg bg-full bg-fixed bg-center bg-no-repeat">
          <div className="flex h-full items-center justify-center lg:min-h-screen">
            <Container className="relative h-full pb-14 pt-[150px] lg:py-[50px]">
              <div className="flex w-full flex-col justify-between gap-10 lg:flex-row xl:items-center 4xl:gap-[60px]">
                <HeroSectionHeading
                  badgeTitle="Site Map"
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
                      src={'/webp/sitemap.webp'}
                      alt="hero-img"
                      width={550}
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
      <Container className="py-12 md:py-16 lg:py-20 4xl:py-[100px]">
        <div className="flex flex-col gap-10">
          {siteMapData &&
            siteMapData.map((items, index) => (
              <div key={index} className="flex flex-col gap-6">
                {items?.items.length > 0 && (
                  <SectionHeader
                    headingText={items?.title}
                    headingStyle="capitalize"
                  />
                )}
                {items?.items.length > 0 && (
                  <div className="flex flex-wrap items-center gap-5">
                    {items?.items.map((tech, ind) => (
                      <div
                        key={ind}
                        onMouseEnter={() => setHoveredTech(tech?.techName)}
                        onMouseLeave={() => setHoveredTech(null)}
                        onMouseDown={() => setHoveredTech(null)}
                        onMouseUp={() => setHoveredTech(tech?.techName)}
                        className="w-max"
                      >
                        <Link
                          href={tech?.techLink}
                          className="group flex items-center gap-1.5 text-nowrap rounded-[30px] border border-dashed border-[#192020] px-[18px] py-2.5 text-base font-normal transition-all duration-400 ease-in-out hover:border-[#1A6AA3] hover:bg-[#1A6AA3] hover:text-white"
                        >
                          {formatTechName(tech?.techName)}
                          <span className="mt-0.5">
                            <AnimatedArrow
                              hover={hoveredTech === tech?.techName}
                            />
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Sitemap;
