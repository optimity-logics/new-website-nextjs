'use client';
import Container from '@/components/ui/Container';
import { siteMapData } from '@/components/utils/Constant';
import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedArrow from '@/components/common/AnimatedArrow';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import SectionHeader from '@/components/ui/SectionHeader';

const Sitemap = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  return (
    <>
      <div
        className="bg-siteMap bg-cover bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Container className="py-16 md:py-24">
          <HeroSectionHeading heading="Sitemap" />
        </Container>
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
                          className="group flex items-center gap-1.5 text-nowrap rounded-[30px] border border-dashed border-[#192020] px-[18px] py-2.5 text-base font-normal capitalize transition-all duration-400 ease-in-out hover:border-[#1A6AA3] hover:bg-[#1A6AA3] hover:text-white"
                        >
                          {tech?.techName}
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
