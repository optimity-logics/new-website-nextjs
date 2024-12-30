'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../common/SectionHeading';
import { resourcesData } from '../utils/Constant';
import { Autoplay } from 'swiper/modules';

const Resources = () => {
  return (
    <div className="mb-10 flex flex-col gap-8 overflow-x-hidden px-4 sm:px-6 md:mb-12 md:px-8 xl:mb-16 xl:px-10 3xl:gap-10 3xl:px-20 4xl:mb-[120px] 4xl:gap-[60px] 4xl:px-0">
      <SectionHeading
        heading="Know what’s <span> trending in AI </span>"
        description="Insights on the global impact of artificial intelligence across multiple domains"
        btnName="Resources"
        btnStyle="bg-herobtnbg bg-cover bg-no-repeat !py-2.5 !px-[23px] !rounded-[42px] !text-2xl !font-normal !leading-[29.05px] !text-black"
        LinkName="Explore all blogs"
      />
      <div className="mx-auto h-full w-full 4xl:ml-[100px]">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={900}
          loop={true}
          breakpoints={{
            540: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
            1660: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="h-full w-full"
        >
          {resourcesData &&
            resourcesData.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="group flex h-full min-h-full cursor-pointer flex-col gap-8">
                  <div>
                    <Image
                      src={item?.img}
                      alt={item?.title}
                      width={446}
                      height={230}
                    />
                  </div>
                  <div className="flex h-full flex-col justify-between gap-[17.39px]">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-Poppins text-xl font-medium leading-6 text-[#192020] 5xl:text-[26px] 5xl:leading-8">
                        {item?.title}
                      </h3>
                      <p className="font-Poppins text-base font-light leading-[1.6rem] text-[#192020] 5xl:text-lg 5xl:leading-[1.8rem]">
                        {item?.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href={'/'}
                        className="font-Poppins text-sm font-medium leading-[19.6px] text-red"
                      >
                        Continue Reading
                      </Link>
                      <div className="relative mt-[5px] h-0.5 w-full bg-lightSilver">
                        <span className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-300 ease-out group-hover:w-full"></span>
                      </div>
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

export default Resources;
