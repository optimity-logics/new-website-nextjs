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
    <div className="mb-10 flex flex-col gap-10 md:mb-12 xl:mb-16 xl:gap-[60px] 4xl:mb-[120px]">
      <SectionHeading
        heading="Know what’s <span> trending in AI </span>"
        description="Insights on the global impact of artificial intelligence across multiple domains"
        btnName="Resources"
        btnStyle="bg-herobtnbg bg-cover bg-no-repeat !py-2.5 !px-[23px] !rounded-[42px] !text-2xl !font-normal !leading-[29.05px] !text-black"
        LinkName="Explore all blogs"
        className="!gap-6"
      />
      <div className="mx-auto w-full max-w-[1418px] px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-20 4xl:px-0">
        <Swiper
          spaceBetween={40}
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
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full"
        >
          {resourcesData &&
            resourcesData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group flex cursor-pointer flex-col gap-8">
                  <div>
                    <Image
                      src={item?.img}
                      alt={item?.title}
                      width={446}
                      height={230}
                    />
                  </div>
                  <div className="flex flex-col gap-[17.39px]">
                    <div className="flex flex-col gap-[9px]">
                      <h3 className="font-Inter text-xl font-bold leading-6 text-graphite">
                        {item?.title}
                      </h3>
                      <p className="font-Inter text-base font-normal leading-[22.4px] text-graphite">
                        {item?.description}
                      </p>
                    </div>
                    <Link
                      href={'/'}
                      className="font-Inter text-sm font-medium leading-[19.6px] text-red"
                    >
                      Continue Reading
                    </Link>
                    <div className="relative mt-[5px] h-0.5 w-full bg-lightSilver">
                      <span className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-300 ease-out group-hover:w-full"></span>
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
