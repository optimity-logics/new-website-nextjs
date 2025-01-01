'use client';
import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { deployProjects } from '../utils/Constant';
import Image from 'next/image';
import Container from '../common/Container';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import arrow from '../../../public/svg/arrow-white.svg';

const Project = () => {
  return (
    <Container
      className="mb-10 bg-sectionBg bg-cover bg-right bg-no-repeat py-10 md:mb-12 xl:mb-16 4xl:mb-[120px] 4xl:py-20"
      isBackground={true}
    >
      <div className="flex flex-col items-center gap-10 3xl:gap-[50px] 4xl:gap-[80px]">
        <SectionHeading
          heading="Our innovative <span> AI solutions </span> to revolutionize
  your business"
          btnName="Projects"
          // btnStyle="!py-2.5 px-[23px] bg-[#B3B3B3] !rounded-[42px] !text-2xl !font-normal !leading-[29.05px] !text-white bg-opacity-25"
          btnStyle="!rounded-[42px] bg-[#B3B3B3] !px-[23px] !py-[10px] !text-lg font-normal leading-5 !text-white sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7 bg-opacity-25"
          description="Transform and automate processes with enterprise AI solutions tailored to your business requirements"
          LinkName="Connect to know more"
          className="max-w-[1286px] !gap-6"
          isDark={true}
        />
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {deployProjects &&
              deployProjects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="group flex cursor-pointer flex-col gap-[32px]">
                    <div>
                      <Image
                        src={item?.projectImg}
                        alt=""
                        width={776}
                        height={294}
                        className="rounded-[10px]"
                      />
                    </div>
                    <div className="flex flex-col gap-[22px]">
                      <div className="flex flex-col gap-[17px]">
                        <div className="flex items-center gap-[3px]">
                          <h5 className="font-Poppins text-xl font-bold leading-6 text-white">
                            {item?.projectName}
                          </h5>
                          <div className="invisible relative flex h-6 w-6 translate-x-[-30px] items-center justify-center rounded-full bg-red opacity-0 transition-all duration-500 ease-out group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                            <Image
                              src={arrow}
                              alt="arrow"
                              width={12}
                              height={12}
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <p className="font-Poppins text-base font-normal leading-[22.4px] text-white">
                          {item?.projectDescription}
                        </p>
                      </div>
                      <div className="relative h-0.5 w-full bg-lightSilver">
                        <span className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-500 ease-out group-hover:w-full"></span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Project;
