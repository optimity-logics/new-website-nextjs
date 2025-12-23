'use client';
import ProcessCard from '@/components/common/ProcessCard';
import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { aboutUsPage } from '@/components/utils/page-data/aboutUs';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

const page = () => {
  const swiperData = [
    '/images/our-work/Macbook.png',
    '/images/our-work/Macbook.png',
    '/images/our-work/Macbook.png',
    '/images/our-work/Macbook.png',
    '/images/our-work/Macbook.png',
  ];
  return (
    <>
      <div className="relative z-10 mb-[60px] h-screen overflow-hidden after:absolute after:-bottom-[50%] after:left-1/2 after:h-full after:w-[2200px] after:-translate-x-1/2 after:rounded-[100%] after:bg-detailHeroGradient 4xl:mb-[100px]">
        <Container className="mt-auto flex h-full items-center justify-center">
          <div className="relative z-20 h-full w-full max-w-[350px] sm:max-w-[700px] lg:aspect-[4/4] lg:w-max">
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
                src="/images/our-work/Macbook.png"
                alt=""
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </div>
      <Container className="mb-[60px] flex flex-col gap-10 4xl:mb-[100px] 4xl:gap-[60px]">
        <SectionHeader
          className="mx-auto"
          headingStyle="text-center"
          headingText="Lorem Ipsum is simply dummy text."
          descriptionText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.`}
        />
        <div className="relative h-auto w-full max-w-full after:absolute after:inset-0 after:rounded-xl after:bg-black-200-alpha lg:after:rounded-[20px]">
          <Image
            src="/images/our-work/project-details.jpg"
            alt="project-detail"
            loading="lazy"
            width={1200}
            height={200}
            className="h-full w-full rounded-t-xl object-contain"
          />
          <p className="p-5 font-opt text-xl font-medium leading-7 text-optDesc md:p-10 md:text-[44px] md:leading-[46px]">
            Next-level travel tools to grow your business
          </p>
        </div>
      </Container>
      <Container className="mb-[60px] flex flex-col gap-10 4xl:mb-[60px] 4xl:gap-[60px]">
        <SectionHeader headingText='The <span class="text-red">Challenge</span>' />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="col-span-1 row-span-2 flex items-center justify-center bg-frame bg-full bg-no-repeat">
            <Image
              src="/images/our-work/project.png"
              alt="project"
              width={400}
              height={300}
              loading="lazy"
              className="h-auto w-full"
            />
          </div>
          {aboutUsPage?.ourCoreValue.values &&
            aboutUsPage?.ourCoreValue?.values.map((items, i) => (
              <ProcessCard key={i} data={items} index={i} />
            ))}
          <div className="col-span-1 flex items-center justify-center md:col-start-2 md:row-span-2 md:row-start-3">
            <Image
              src="/images/our-work/project-demo.png"
              alt="project-demo"
              width={500}
              height={200}
              loading="lazy"
              className="h-full w-full rounded-[20px]"
            />
          </div>
        </div>
      </Container>
      <div className="project-detail-swiper mb-[60px]">
        <div>
          <Swiper
            spaceBetween={40}
            slidesPerView={1.5}
            centeredSlides={true}
            speed={1000}
            loop={false}
            className="!h-auto w-full !py-14"
            breakpoints={{
              760: { spaceBetween: 60 },
              810: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
            }}
          >
            {swiperData &&
              swiperData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!flex !h-auto flex-col items-stretch gap-6 rounded-xl bg-white p-6 shadow-card"
                >
                  <div className="relative aspect-[6/3] w-full">
                    <Image
                      src={item}
                      alt="tech"
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <Container className="mb-[60px] h-screen 4xl:mb-[100px]">
        <div className="relative z-[-1] grid grid-stack after:absolute after:inset-0 after:z-[1] after:rounded-xl after:bg-black-200-alpha lg:after:rounded-[20px]">
          <Image
            src="/images/our-work/users.jpg"
            alt="user"
            width={600}
            height={500}
            className="w-full rounded-xl md:rounded-[20px]"
          />
          <div className="relative z-10 m-2 flex h-max w-full max-w-[350px] flex-col justify-between gap-10 rounded-xl bg-black-450-alpha p-3 sm:m-3 md:m-8">
            <span className="text-white">Logo</span>
            <p className="flex-col font-opt text-xl font-medium leading-6 text-white">
              Powerful travel platforms engineered for your business success
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
