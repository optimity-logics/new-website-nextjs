'use client';

import AnimatedArrow from '@/components/common/AnimatedArrow';
import Container from '@/components/ui/Container';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ourWorkPage } from '../utils/page-data/ourWork';

const OurWorks = () => {
  const [selectedCategories, setSelectedCategories] = useState('All');
  const [selectedSubCategories, setSelectedSubCategories] = useState('');
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };

  const filteredArticles =
    selectedCategories === 'All'
      ? ourWorkPage.ourWorks.flatMap((cat) =>
          cat.subcategories.flatMap((sub) => sub.articles),
        )
      : ourWorkPage.ourWorks
          .find((cat) => cat.categories === selectedCategories)
          ?.subcategories.find((sub) => sub.name === selectedSubCategories)
          ?.articles || [];
  useEffect(() => {
    if (selectedCategories === 'All') {
      setSelectedSubCategories('');
      return;
    }

    const category = ourWorkPage?.ourWorks.find(
      (cat) => cat.categories === selectedCategories,
    );

    if (category?.subcategories?.length) {
      setSelectedSubCategories(category.subcategories[0].name);
    }
  }, [selectedCategories]);
  return (
    <>
      <div
        className="-mt-20 bg-aboutUsHeroBg bg-cover bg-fixed bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Container className="mx-auto flex w-full max-w-[1000px] flex-col items-center justify-between gap-12 pb-[100px] pt-[150px] lg:h-screen lg:flex-row">
          <HeroSectionHeading
            heading={ourWorkPage?.headingTitle}
            description={ourWorkPage?.headingDescription}
            className="w-full"
          />

          <div className="relative aspect-[5/4] h-full w-full max-w-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: 'easeIn',
              }}
              className="relative h-full w-full"
            >
              <Image
                src={ourWorkPage?.heroRightImage || ''}
                alt=""
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </div>
      <Container className="-mt-[30px] mb-[60px] flex flex-col gap-[60px] 3xl:mb-[100px]">
        <div className="flex flex-col gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key="category-tabs"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.35,
                ease: 'easeOut',
              }}
              className="flex items-center justify-center"
            >
              <div className="flex gap-5 overflow-auto whitespace-pre rounded-full border border-black-100-alpha bg-snowWhite p-2 scrollbar-hide">
                {ourWorkPage?.ourWorks &&
                  ourWorkPage?.ourWorks.map((categories, index) => (
                    <div
                      key={index}
                      className="relative w-full cursor-pointer rounded-full"
                    >
                      {selectedCategories === categories?.categories && (
                        <motion.div
                          layoutId="active-category-tab"
                          className="play-button pointer-events-none absolute inset-0 h-full w-full rounded-full border-[1.591px] border-dustyBlue"
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}

                      <div
                        onClick={() =>
                          setSelectedCategories(categories?.categories)
                        }
                        className={`flex h-full items-center justify-center rounded-full px-6 py-2 font-opt text-base font-normal text-optDesc ${
                          selectedCategories === categories?.categories
                            ? 'bg-whiteSmoke'
                            : 'border border-iceGray bg-white'
                        }`}
                      >
                        {categories?.categories}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {selectedCategories !== 'All' && (
              <motion.div
                key="sub-tabs"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.35,
                  ease: 'easeOut',
                }}
                className="flex items-center justify-center"
              >
                <div className="flex gap-5 overflow-auto whitespace-pre rounded-full border border-black-100-alpha bg-snowWhite p-2 scrollbar-hide">
                  {ourWorkPage?.ourWorks
                    ?.find((cat) => cat.categories === selectedCategories)
                    ?.subcategories.map((subCate, ind) => (
                      <div
                        key={ind}
                        className="relative w-full cursor-pointer rounded-full"
                      >
                        {selectedSubCategories === subCate?.name && (
                          <motion.div
                            layoutId="active-sub-tab"
                            className="play-button pointer-events-none absolute inset-0 h-full w-full rounded-full border-[1.591px] border-dustyBlue"
                          />
                        )}

                        <div
                          onClick={() =>
                            setSelectedSubCategories(subCate?.name)
                          }
                          className={`flex h-full items-center justify-center rounded-full px-6 py-2.5 font-opt text-base font-normal leading-5 text-optDesc ${
                            selectedSubCategories === subCate?.name
                              ? 'bg-whiteSmoke'
                              : 'border border-iceGray bg-white'
                          }`}
                        >
                          {subCate?.name}
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="grid grid-cols-1 gap-6 gap-x-0 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          <div className="col-span-2">
            {filteredArticles.length ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredArticles.map((item, idx) => (
                  <Link
                    href={`https://new-website-nextjs.vercel.app/our-work/${item.redirectlink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.03 }}
                      transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                      }}
                      className="group"
                    >
                      <div className="rounded-xl border border-black/10 bg-primarySnowGray p-2">
                        <div className="flex flex-col gap-4 rounded-md bg-white p-2">
                          <div className="relative">
                            <Image
                              src={item?.image}
                              alt=""
                              width={322}
                              height={182}
                              className="w-full rounded-md object-cover"
                            />
                          </div>

                          <div className="flex flex-col gap-1.5 px-2 pb-2">
                            <h3 className="font-opt text-lg font-semibold leading-6 text-primary group-hover:text-lightBlue">
                              {item?.title}
                            </h3>
                            {/* <p className="font-opt text-base font-normal leading-5 text-optDesc">
                              {item?.description}
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
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
              <h4 className="font-opt text-xl font-medium leading-6 text-white">
                Looking to re-imagine your business operations?
              </h4>
              <p className="lea font-opt text-base font-light leading-5 text-white">
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
                className="flex w-max items-center gap-1 rounded-[50px] border border-transparent bg-white px-[16px] py-[8px] pr-[14px] font-opt text-sm font-normal leading-5 text-lightBlue transition-all duration-200 ease-in hover:border-white hover:bg-transparent hover:text-white"
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
