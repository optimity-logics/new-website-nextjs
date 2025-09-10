'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../../public/svg/gray-arrow.svg';
import checkmark from '../../../public/svg/check-mark.svg';
import SectionHeading from '../ui/SectionHeading';
import { industriesData } from '../utils/Constant';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { useState } from 'react';

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="!3xl:px-0 !4xl:px-0 mb-10 flex flex-col items-center gap-10 overflow-x-hidden px-4 sm:px-6 md:mb-12 md:px-0 xl:mb-16 3xl:gap-[50px] 4xl:mb-[100px] 4xl:gap-[80px]">
      <SectionHeading
        heading="Our Industrial <span> Expertise </span>"
        description="Our team of industry experts curates progressive solutions that befit your requirements"
        className="max-w-[1586px] 4xl:!gap-5"
        btnName="Industries "
        btnStyle="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg font-normal leading-5 !text-primary sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7"
        LinkName="Connect to know more"
        isDark={false}
      />
      <div className="h-full w-full">
        <Swiper
          modules={[Autoplay, Mousewheel]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          mousewheel={{
            invert: true,
          }}
          speed={1000}
          loop={true}
          breakpoints={{
            540: {
              slidesPerView: 1.3,
            },
            740: {
              slidesPerView: 1.6,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1440: {
              slidesPerView: 3.5,
            },
          }}
          className="h-full !w-full"
        >
          {industriesData &&
            industriesData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="mt-[35px] !h-auto"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="group flex min-h-full cursor-pointer flex-col gap-3 rounded-3xl bg-[#b5b5b51a] p-6 transition-all duration-300 hover:bg-[#02ade11a] sm:p-[30px] lg:gap-4">
                  <div className="-mt-[53px] w-max rounded-full border-2 border-[#192020] bg-white p-3 transition-all duration-300 group-hover:border-lightBlue xl:-mt-[63px] xl:p-3">
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
                      <h4 className="font-base text-xl font-normal leading-6 text-[#192020] transition-all duration-300 group-hover:text-lightBlue xl:text-[26px] xl:leading-8 5xl:font-medium">
                        {item?.industriesName}
                      </h4>
                      <Image src={arrow} alt="arrow" width={24} height={24} />
                    </div>
                    <ul className="flex flex-col gap-1.5 sm:gap-3">
                      {item?.industriesWork.map((items, ind) => (
                        <li
                          key={ind}
                          className="flex items-start gap-4 font-base text-base font-light leading-5 text-[#192020] 4xl:text-lg 4xl:font-normal 4xl:leading-[28.8px]"
                        >
                          <Image
                            src={checkmark}
                            alt="check-mark"
                            width={24}
                            height={25}
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
