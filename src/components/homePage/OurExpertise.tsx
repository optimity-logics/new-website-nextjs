'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '../common/Button';
import Container from '../common/Container';
import { ourExpertiseData } from '../utils/Constant';
import { Autoplay, Mousewheel } from 'swiper/modules';

const OurExpertise = () => {
  return (
    <Container className="md:!px-0">
      <div className="mb-10 flex flex-col items-center gap-[30px] overflow-x-hidden md:mb-12 md:ml-8 lg:flex-row xl:mb-16 xl:ml-10 3xl:ml-20 4xl:mb-[120px] 4xl:ml-[100px]">
        <div className="flex w-full flex-col gap-5 lg:max-w-[375px] lg:gap-[100px]">
          <div className="flex flex-col gap-3 lg:gap-[25px]">
            <h3 className="font-Poppins text-[26px] font-medium leading-[2.3rem] text-charcoalBlue sm:text-4xl sm:leading-10 4xl:text-[45px] 4xl:leading-[48px] 5xl:text-[55px] 5xl:font-semibold 5xl:leading-[60px]">
              Our <span className="text-red lg:block">Expertise</span>
            </h3>
            <p className="font-Poppins text-lg font-normal leading-[26px] text-lavenderGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <Button btnName="View All" className="w-max bg-orange px-[30px]" />
        </div>
        <div className="relative h-full w-full max-w-[1520px] overflow-x-hidden lg:px-0">
          <Swiper
            modules={[Autoplay, Mousewheel]}
            slidesPerView={1}
            spaceBetween={26}
            mousewheel={{
              invert: true,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              540: {
                slidesPerView: 1.3,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 26,
              },
              1666: {
                slidesPerView: 3,
                spaceBetween: 26,
              },
              1836: {
                slidesPerView: 4,
                spaceBetween: 26,
              },
            }}
            className="h-full w-full"
          >
            {ourExpertiseData &&
              ourExpertiseData.map((item) => (
                <SwiperSlide key={item.id} className="!h-auto">
                  <div
                    className="flex h-full min-h-full flex-col gap-[35px] rounded-[18.91px] bg-cover bg-right-top bg-no-repeat pb-[21px] pl-[23px] pr-[22.67px] pt-[31px]"
                    style={{ backgroundImage: `url(${item.techbg})` }}
                  >
                    <div
                      className="flex h-max min-h-16 w-max min-w-16 items-center justify-center rounded-full 4xl:min-h-[100px] 4xl:min-w-[100px]"
                      style={{ backgroundColor: item.techImgBg }}
                    >
                      <Image
                        src={item.techImg}
                        alt={item.techImg}
                        width={40}
                        height={40}
                        className="h-10 w-10 4xl:h-max 4xl:w-max"
                      />
                    </div>
                    <div className="flex h-full flex-col justify-between gap-5">
                      <div className="flex flex-col gap-5">
                        <h5 className="font-Poppins text-2xl font-semibold leading-[29.05px] text-charcoalBlue">
                          {item.techHeading}
                        </h5>
                        <p className="font-Poppins text-lg font-normal leading-[21.78px] text-lavenderGray">
                          {item.techDescription}
                        </p>
                      </div>
                      <div>
                        <Image
                          src="/svg/arrow-right.svg"
                          alt="arrow"
                          width={30}
                          height={30}
                          className="cursor-pointer"
                        />
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

export default OurExpertise;
