'use client';

import AnimatedArrow from '@/components/common/AnimatedArrow';
import Container from '@/components/ui/Container';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import { ourWorkPage } from '@/components/utils/Constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const OurWorks = () => {
  const [selectedCategories, setSelectedCategories] = useState('All');
  const [selectedSubCategories, setSelectedSubCategories] = useState('');
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  const selectedSubCategory = ourWorkPage?.ourWorks
    ?.find((cat) => cat.categories === selectedCategories)
    ?.subcategories?.find((subCat) => subCat?.name === selectedSubCategories);
  return (
    <>
      <div
        className="-mt-20 bg-aboutUsHeroBg bg-cover bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Container className="mx-auto flex w-full max-w-[1000px] flex-col items-center justify-between gap-12 pb-[100px] pt-[150px] lg:h-screen lg:flex-row">
          <HeroSectionHeading
            heading={ourWorkPage?.headingTitle}
            description={ourWorkPage?.headingDescription}
            className="w-full max-w-[800px]"
          />
          <div className="relative aspect-[5/4] h-full w-full max-w-[400px]">
            <Image
              src="/images/our-work/our-work-hero.png"
              alt=""
              fill
              priority
              className="object-contain"
            />
          </div>
        </Container>
      </div>
      <Container className="-mt-[30px] mb-[60px] flex flex-col gap-[60px] 3xl:mb-[100px]">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-center">
            <div className="flex gap-5 overflow-auto whitespace-pre scrollbar-hide">
              {ourWorkPage?.ourWorks &&
                ourWorkPage?.ourWorks.map((categories, index) => (
                  <div
                    key={index}
                    className="relative w-full min-w-[200px] max-w-[200px] cursor-pointer rounded-full"
                  >
                    <div className="play-button pointer-events-none absolute inset-0 h-full w-full rounded-full border-[1.591px] border-[#e26b4b]"></div>
                    <div
                      onClick={() =>
                        setSelectedCategories(categories?.categories)
                      }
                      className={`flex items-center justify-center rounded-full px-6 py-4 font-opt text-base ${selectedCategories === categories?.categories ? 'bg-gray text-white' : 'bg-white text-primary'}`}
                    >
                      {categories?.categories}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex gap-5 overflow-auto whitespace-pre scrollbar-hide">
              {ourWorkPage?.ourWorks
                ?.find((cat) => cat.categories === selectedCategories)
                ?.subcategories.map((subCate, ind) => (
                  <div
                    key={ind}
                    className="relative w-full min-w-[200px] max-w-[200px] cursor-pointer rounded-full"
                  >
                    <div className="play-button pointer-events-none absolute inset-0 h-full w-full rounded-full border-[1.591px] border-[#e26b4b]"></div>
                    <div
                      onClick={() => setSelectedSubCategories(subCate?.name)}
                      className={`flex items-center justify-center rounded-full px-6 py-4 font-opt text-base ${selectedSubCategories === subCate?.name ? 'bg-gray text-white' : 'bg-white text-primary'}`}
                    >
                      {subCate?.name}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 gap-x-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <div className="col-span-2">
            {selectedSubCategory?.articles.length ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {selectedSubCategory.articles.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-black/10 bg-[#F8F8F8] p-2"
                  >
                    <div className="flex flex-col gap-3 rounded-md bg-white p-2">
                      <div className="relative">
                        <Image
                          src={item?.image}
                          alt=""
                          width={322}
                          height={182}
                          className="w-full rounded-md object-cover"
                        />
                        <div className="absolute right-2 top-2 rounded-md bg-white px-2 py-1 font-opt text-sm font-normal leading-5 text-optDesc">
                          {item?.date}
                        </div>
                      </div>
                      <span className="px-2 font-opt text-base font-normal leading-5 text-optDesc">
                        {item?.readTime}
                      </span>
                      <div className="flex flex-col gap-1.5 px-2 pb-2">
                        <h3 className="font-opt text-xl font-semibold leading-7 text-primary">
                          {item?.title}
                        </h3>
                        <p className="font-opt text-lg font-normal leading-6 text-optDesc">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-left font-opt text-2xl text-optDesc">
                No articles found.....
              </div>
            )}
          </div>
          <div className="top-24 flex h-max w-full flex-col gap-16 rounded-xl bg-contactUsBg bg-cover bg-center bg-no-repeat p-8 lg:sticky 3xl:bg-full">
            <div className="flex flex-col gap-5">
              <h4 className="font-opt text-2xl font-medium leading-7 text-white">
                Looking to re-imagine your business operations?
              </h4>
              <p className="lea font-opt text-xl font-light text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseEnter}
              onMouseDown={handleMouseLeave}
              className="w-max"
            >
              <Link
                href="/contact-us"
                className="flex h-10 w-max items-center gap-1 rounded-[50px] bg-white px-[16px] py-[8px] pr-[14px] font-opt text-base font-normal leading-tight text-lightBlue"
              >
                Contact us
                <AnimatedArrow hover={hover} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurWorks;
