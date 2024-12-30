'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../../public/svg/gray-arrow.svg';
import checkmark from '../../../public/svg/check-mark.svg';
import SectionHeading from '../common/SectionHeading';
import { industriesData } from '../utils/Constant';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="!3xl:px-0 !4xl:px-0 mb-10 flex flex-col items-center gap-8 overflow-x-hidden px-4 sm:px-6 md:mb-12 md:px-8 xl:mb-16 xl:px-10 3xl:gap-10 4xl:mb-[120px] 4xl:gap-[60px]">
      <SectionHeading
        heading="Our Industrial <span> Expertise </span>"
        description="Our team of industry experts curates progressive solutions that befit your requirements"
        className="max-w-[1586px]"
        btnName="Industries "
        btnStyle=" bg-herobtnbg bg-cover bg-no-repeat !py-2.5 !px-[23px] !rounded-[42px] !text-2xl !font-normal !leading-[29.05px] !text-black"
        LinkName="Connect to know more"
        isDark={false}
      />
      <div className="swiper-container relative h-full w-full max-w-[1820px] 4xl:ml-20">
        <Swiper
          spaceBetween={70}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          speed={900}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 2.5,
            },
            1836: {
              slidesPerView: 3.2,
            },
          }}
          className="mySwiper h-full !w-full"
        >
          {industriesData &&
            industriesData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="mt-[35px] !h-auto"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="group flex cursor-pointer flex-col gap-4 rounded-3xl bg-[#b5b5b51a] p-[30px] transition-all duration-300 hover:bg-[#02ade11a] sm:gap-[25px]">
                  <div className="-mt-[63px] w-max rounded-full border-2 border-[#192020] bg-white p-4 transition-all duration-300 group-hover:border-lightBlue">
                    <Image
                      src={
                        hoveredIndex === index
                          ? item?.industriesHoverIcon
                          : item?.industriesIcon
                      }
                      alt={item?.industriesIcon}
                      width={28}
                      height={28}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <h4 className="font-Poppins text-xl font-semibold leading-6 text-[#192020] transition-all duration-300 group-hover:text-lightBlue xl:text-[26px] xl:leading-8">
                        {item?.industriesName}
                      </h4>
                      <Image src={arrow} alt="arrow" width={24} height={24} />
                    </div>
                    <ul className="flex flex-col gap-1.5 sm:gap-3">
                      {item?.industriesWork.map((items, ind) => (
                        <li
                          key={ind}
                          className="flex items-start gap-4 font-Poppins text-base font-normal leading-5 text-[#192020] sm:text-lg sm:leading-[28.8px]"
                        >
                          <Image
                            src={checkmark}
                            alt="check-mark"
                            width={20}
                            height={20}
                            // className="mt-0.5"
                          />
                          {items}
                        </li>
                      ))}
                    </ul>
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
