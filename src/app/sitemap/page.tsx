import Container from '@/components/ui/Container';
import { siteMapData } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrow from '../../../public/svg/black-arrow.svg';

const Sitemap = () => {
  return (
    <>
      <div
        className="bg-siteMap bg-cover bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <h2 className="px-4 py-16 font-base text-4xl font-semibold leading-[44px] tracking-[-2%] text-primary sm:px-6 md:px-8 md:py-24 lg:text-[44px] lg:leading-[82.3px] xl:px-10 3xl:px-0 4xl:text-[60px]">
          {' '}
          Privacy Policy
        </h2>
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
                      <Link
                        key={ind}
                        href={tech?.techLink}
                        className="group flex items-center gap-1.5 text-nowrap rounded-[30px] border border-dashed border-[#192020] px-[18px] py-2.5 text-sm font-normal capitalize transition-all duration-300 hover:border-red hover:bg-red hover:text-white"
                      >
                        {tech?.techName}
                        <Image
                          src={arrow}
                          alt="arrow"
                          width={20}
                          height={20}
                          className="transition-all duration-300 group-hover:rotate-45 group-hover:brightness-0 group-hover:contrast-100 group-hover:invert group-hover:filter"
                        />
                      </Link>
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
