'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '../common/SectionHeading';
import { resourcesData } from '../utils/Constant';
import { Autoplay, Mousewheel } from 'swiper/modules';
import Container from '../common/Container';

const Resources = () => {
  return (
    <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[120px]">
      {/* <div className="mb-10 flex flex-col items-center gap-8 overflow-x-hidden px-4 sm:px-6 md:mb-12 md:px-0 xl:mb-16 3xl:gap-10 3xl:px-0 4xl:mb-[120px] 4xl:gap-[60px] 4xl:px-0"> */}
      <div className="flex flex-col items-center gap-8 4xl:gap-[60px]">
        <SectionHeading
          heading="Know what’s <span> trending in AI </span>"
          description="Insights on the global impact of artificial intelligence across multiple domains"
          btnName="Resources"
          className="4xl:!gap-5"
          // btnStyle="bg-herobtnbg bg-cover bg-no-repeat !py-2.5 !px-[23px] !rounded-[42px] !text-2xl !font-normal !leading-[29.05px] !text-black"
          btnStyle="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg font-normal leading-5 !text-charcoalBlue sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7"
          LinkName="Explore all blogs"
        />
        <div className="h-full w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay, Mousewheel]}
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            speed={1000}
            mousewheel={{
              invert: true,
            }}
            loop={true}
            breakpoints={{
              540: {
                slidesPerView: 1.3,
              },
              640: {
                slidesPerView: 2,
              },
              820: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              },
              1660: {
                slidesPerView: 4.3,
                spaceBetween: 40,
              },
            }}
            className="h-full w-full"
          >
            {resourcesData &&
              resourcesData.map((item, index) => (
                <SwiperSlide key={index} className="!h-auto">
                  <div className="group flex h-full min-h-full cursor-pointer flex-col gap-6 xl:gap-8">
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
                        <h3 className="font-Poppins text-xl font-medium leading-6 text-[#192020]">
                          {item?.title}
                        </h3>
                        <p className="font-Poppins text-base font-light leading-[1.6rem] text-[#192020]">
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

      {/* </div> */}
    </Container>
  );
};

export default Resources;
