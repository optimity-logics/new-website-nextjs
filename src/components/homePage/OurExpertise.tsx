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

const OurExpertise = () => {
  return (
    <Container className="!px-0">
      <div className="mb-10 ml-4 flex flex-col items-center gap-[30px] overflow-x-hidden sm:ml-6 md:mb-12 md:ml-8 lg:flex-row xl:mb-16 xl:ml-10 3xl:ml-20 4xl:mb-[140px] 4xl:ml-[100px]">
        <div className="flex w-full flex-col gap-5 lg:max-w-[375px] lg:gap-[100px]">
          <div className="flex flex-col gap-5 lg:gap-[25px]">
            <h3 className="font-Inter text-[45px] font-semibold leading-[50px] text-charcoalBlue 4xl:text-[60px] 4xl:leading-[65px]">
              Our <span className="text-red lg:block">Expertise</span>
            </h3>
            <p className="font-Inter text-lg font-normal leading-[26px] text-lavenderGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
          <Button btnName="View All" className="w-max bg-orange px-[30px]" />
        </div>
        <div className="relative w-full max-w-[1520px] overflow-x-hidden pr-4 lg:px-0">
          <Swiper
            spaceBetween={26}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 26,
              },
              1836: {
                slidesPerView: 4,
                spaceBetween: 26,
              },
            }}
            className="w-full"
          >
            {ourExpertiseData &&
              ourExpertiseData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div
                    className="flex flex-col gap-[35px] rounded-[18.91px] bg-cover bg-right-top bg-no-repeat pb-[21px] pl-[23px] pr-[22.67px] pt-[31px]"
                    style={{ backgroundImage: `url(${item.techbg})` }}
                  >
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-full 4xl:h-[100px] 4xl:w-[100px]"
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
                    <div className="flex flex-col gap-[50px]">
                      <div className="flex flex-col gap-5">
                        <h5 className="font-Inter text-2xl font-semibold leading-[29.05px] text-charcoalBlue">
                          {item.techHeading}
                        </h5>
                        <p className="font-Inter text-lg font-normal leading-[21.78px] text-lavenderGray">
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
