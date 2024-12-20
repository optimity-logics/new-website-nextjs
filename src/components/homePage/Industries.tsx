'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../../public/svg/arrow-white.svg';
import SectionHeading from '../common/SectionHeading';
import { industriesData } from '../utils/Constant';

const Industries = () => {
  return (
    <div className="!2xl:px-0 !3xl:px-0 mb-10 flex flex-col items-center gap-[60px] px-4 sm:px-6 md:mb-12 md:px-8 xl:mb-16 xl:px-10 3xl:mb-[120px]">
      <SectionHeading
        heading="Our Industrial <span> Expertise </span>"
        description="Our team of industry experts curates progressive solutions that befit your requirements"
        className="max-w-[1586px] !gap-6"
        btnName="Industries "
        btnStyle=" bg-herobtnbg bg-cover bg-no-repeat !py-2.5 !px-[23px] !rounded-[42px] !text-2xl !font-normal !leading-[29.05px] !text-black"
        LinkName="Connect to know more"
      />
      <div className="relative h-full w-full max-w-[1820px] 3xl:ml-[100px]">
        <Swiper
          spaceBetween={26}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 26,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 26,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 26,
            },
            1836: {
              slidesPerView: 5,
              spaceBetween: 26,
            },
          }}
          className="h-full w-full"
        >
          {industriesData &&
            industriesData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group flex cursor-pointer flex-col items-stretch gap-4 2xl:gap-8">
                  <div className="w-max">
                    <Image
                      src={item?.img}
                      alt="icon"
                      width={100}
                      height={100}
                      className="!h-16 !w-16 object-cover 2xl:h-max 2xl:w-max"
                    />
                  </div>
                  <div className="flex flex-col gap-[17.39px]">
                    <div className="flex flex-col gap-[9px]">
                      <h5 className="font-Inter text-xl font-bold leading-6 text-black">
                        {item?.title}
                      </h5>
                      <p className="font-Inter text-base font-normal leading-[22.4px] text-black">
                        {item?.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href={'#'}
                        className="font-Inter text-sm font-medium leading-[19.6px] text-red"
                      >
                        Find out more
                      </Link>
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

                    <div className="relative mt-2 h-0.5 w-full bg-[#D4D4D4]">
                      <span className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-500 ease-out group-hover:w-full"></span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Industries;
