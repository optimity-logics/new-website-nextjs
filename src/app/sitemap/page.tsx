'use client';
import Container from '@/components/ui/Container';
import { siteMapData } from '@/components/utils/Constant';
import Link from 'next/link';
import React, { useState } from 'react';
import AnimatedArrow from '@/components/common/AnimatedArrow';

const Sitemap = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  return (
    <>
      <div
        className="bg-siteMap bg-cover bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Container>
          <h2 className="px-4 py-16 font-base text-4xl font-semibold leading-[44px] tracking-[-2%] text-primary sm:px-6 md:px-8 md:py-24 lg:text-[44px] lg:leading-[82.3px] xl:px-10 3xl:px-0 4xl:text-[60px]">
            Sitemap
          </h2>
        </Container>
      </div>
      <Container className="py-12 md:py-16 lg:py-20 4xl:py-[100px]">
        <div className="flex flex-col gap-10">
          {siteMapData &&
            siteMapData.map((items, index) => (
              <div key={index} className="flex flex-col gap-6">
                <h3 className="font-base text-[26px] font-medium capitalize leading-[32px] text-[#192020]">
                  {items?.title}
                </h3>
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
                          className="group flex items-center gap-1.5 text-nowrap rounded-[30px] border border-dashed border-[#192020] px-[18px] py-2.5 text-sm font-normal capitalize transition-all duration-400 ease-in-out hover:border-[#1A6AA3] hover:bg-[#1A6AA3] hover:text-white"
                        >
                          {tech?.techName}
                          <AnimatedArrow
                            hover={hoveredTech === tech?.techName}
                          />
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
