import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { IPropsDataTypes } from '../type/type';
import arrow from '../../../public/svg/fat-arrow.svg';
import Marquee from 'react-fast-marquee';
import { logoIcons } from '../utils/Constant';
import SectionHeading from './SectionHeading';
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IPropsType {
  data: IPropsDataTypes;
}

const AllPageContent = ({ data }: IPropsType) => {
  // console.log(data);
  return (
    <>
      <Container className="mb-10 pt-[100px] md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:px-[150px]">
        <div className="flex w-full items-center gap-8">
          <div className="flex w-full max-w-[780px] flex-col gap-12">
            <div className="flex flex-col gap-8">
              <h2 className="font-Inter text-[26px] font-medium capitalize leading-[2.3rem] text-lightBlack md:text-4xl md:leading-10 lg:text-start 3xl:text-[40px] 3xl:leading-[44px] 4xl:text-[55px] 4xl:leading-[60px] 5xl:text-[60px] 5xl:font-semibold 5xl:leading-[64px]">
                {data?.HeroSectionData?.heading}
              </h2>
              <p className="font-Inter text-lg font-normal leading-[29px] text-[#7c7676]">
                {data?.HeroSectionData?.description}
              </p>
            </div>
            <Link
              href={data?.HeroSectionData?.btnLink}
              className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-[21.71px] py-[19.56px] font-Inter text-[21px] font-medium capitalize leading-[26.27px] text-white"
            >
              {data?.HeroSectionData?.btnName}{' '}
              <Image src={arrow} alt={arrow} width={32} height={32} />
            </Link>
            <div className="grid grid-cols-4 gap-10">
              {data?.HeroSectionData?.workWithTechnology &&
                data?.HeroSectionData?.workWithTechnology.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <span className="font-Poppins text-[40px] font-bold leading-[44.8px] text-red">
                      {item?.title}
                    </span>
                    <p
                      className={`text-center font-Poppins text-xl font-medium leading-[28.8px] text-[#212529] ${
                        index ===
                        data?.HeroSectionData?.workWithTechnology.length - 1
                          ? 'px-2.5'
                          : ''
                      }`}
                    >
                      {item?.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="mx-auto max-w-full">
            <Image
              src={data?.HeroSectionData?.techImg || ''}
              alt=""
              width={346}
              height={517}
              className="w-max"
            />
          </div>
        </div>
      </Container>
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center gap-[25px] rounded-2xl border border-darkGray bg-black px-5 pb-[22px] pt-[30px] 5xl:rounded-[24px]">
          <span className="text-center font-Poppins text-base font-normal leading-[1.6rem] text-white md:text-lg md:leading-7">
            Trusted BY 1400+ Happy Clients, Including Fortune 400 Companies
          </span>
          <Marquee gradient={true} gradientColor="black" speed={55}>
            <div className="!last-of-type:4xl:mr-[69px] flex items-center justify-between last-of-type:mr-5 md:last-of-type:mr-[45px] last-of-type:xl:mr-[34px]">
              {logoIcons &&
                logoIcons.map((item, index) => (
                  <div
                    key={index}
                    className="flex h-[66px] w-[153px] items-center justify-center sm:w-[193px]"
                  >
                    <Image
                      src={item}
                      alt="icon"
                      width={60}
                      height={38}
                      className="h-[38px] w-[90px] object-contain"
                    />
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
      </div>
      <Container className="mb-10 pt-[100px] md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:px-[150px]">
        <div className="flex flex-col items-center gap-7 md:gap-10 4xl:gap-[60px]">
          <SectionHeading
            heading={data?.AppDevelopment?.heading}
            description={data?.AppDevelopment?.description}
            className="max-w-[1474px] gap-5"
            headingStyle="px-6"
          />
          <div className="grid grid-cols-1 gap-x-[34px] gap-y-10 sm:grid-cols-2">
            {data?.AppDevelopment?.typesOfApplication?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2.5 rounded-[26.89px] bg-[#B5B5B51a] p-[30px]"
              >
                <h3 className="font-Inter text-[30px] font-semibold leading-[36.31px] text-black">
                  {item?.heading}
                </h3>
                <p className="font-Inter text-xl font-normal leading-7 text-[#504C4C]">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href={data?.AppDevelopment?.btnLink}
            className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-[21.71px] py-[19.56px] font-Inter text-[21px] font-medium capitalize leading-[26.27px] text-white"
          >
            {data?.AppDevelopment?.btnName}{' '}
            <Image src={arrow} alt={arrow} width={32} height={32} />
          </Link>
        </div>
      </Container>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:px-[150px]">
        <div className="flex items-center justify-between gap-6 rounded-[40px] bg-technologbg bg-cover bg-center bg-no-repeat pl-16 pr-[42px]">
          <div className="xxl :py-0 flex w-full flex-col gap-[30px] py-10 xl:max-w-[759px]">
            <div className="flex flex-col gap-5">
              <h3 className="font-Inter text-4xl font-semibold leading-[43.57px] text-white">
                {data?.NextGen?.heading}
              </h3>
              <p className="font-Inter text-xl font-normal leading-7 text-white">
                {data?.NextGen?.description}
              </p>
            </div>
            <Link
              href={data?.NextGen?.btnLink}
              className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-[21.71px] py-4 font-Inter text-[21px] font-medium capitalize leading-[26.27px] text-white"
            >
              {data?.NextGen?.btnName}
              <Image src={arrow} alt={arrow} width={32} height={32} />
            </Link>
          </div>

          <div className="hidden w-full max-w-[820px] xl:flex">
            <ul className="-ml-[135px] mt-auto space-y-3 3xl:mb-10">
              {data?.NextGen?.accuracey?.map(
                (item, index) =>
                  index >= 2 &&
                  index <= 3 && (
                    <li
                      key={index}
                      className={`flex items-center gap-2 text-nowrap rounded-[30px] border border-[#192020] p-3 font-Poppins text-sm font-normal leading-[25.6px] text-white backdrop-blur-3xl ${index === 2 ? '' : '-ml-5'} w-max`}
                    >
                      <Image
                        src={item?.accuraceyImg}
                        alt=""
                        width={15}
                        height={15}
                      />
                      {item?.accuraceyTitle}
                    </li>
                  ),
              )}
            </ul>
            <div className="-mt-[77px]">
              <Image src={data?.NextGen?.img} alt="" width={525} height={590} />
            </div>
            <ul className="-ml-[100px] mt-[35px] space-y-3">
              {data?.NextGen?.accuracey?.map(
                (item, index) =>
                  index <= 1 && (
                    <li
                      key={index}
                      className={`flex items-center gap-2 text-nowrap rounded-[30px] border border-[#192020] p-3 font-Poppins text-sm font-normal leading-[25.6px] text-white backdrop-blur-3xl ${index === 0 ? '' : '-ml-5'} w-max`}
                    >
                      <Image
                        src={item?.accuraceyImg}
                        alt=""
                        width={15}
                        height={15}
                      />
                      {item?.accuraceyTitle}
                    </li>
                  ),
              )}
            </ul>
          </div>
        </div>
      </Container>
      <div className="mb-10 flex flex-col gap-7 md:mb-12 md:gap-10 xl:mb-16 4xl:mb-[100px] 4xl:gap-[60px] 5xl:gap-[64px]">
        <div className="mx-auto max-w-[1564px] px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-20 4xl:px-0">
          <SectionHeading
            heading={data?.TechnologiesIntegrations?.heading}
            description={data?.TechnologiesIntegrations?.description}
            className="gap-6"
          />
        </div>
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
              640: {
                slidesPerView: 1.5,
              },

              1280: {
                slidesPerView: 1.8,
              },
              1440: {
                slidesPerView: 3.8,
              },
            }}
            className="h-full !w-full"
          >
            {data?.TechnologiesIntegrations &&
              data?.TechnologiesIntegrations?.integrations?.map(
                (item, index) => (
                  <SwiperSlide key={index} className="mt-[35px] !h-auto">
                    <div className="group flex min-h-full cursor-pointer flex-col gap-4 rounded-3xl bg-[#b5b5b51a] px-[30px] py-[37px] transition-all duration-300 hover:bg-[#02ade11a]">
                      <div className="-mt-[63px] flex w-max items-center gap-2 rounded-full border-2 border-[#000] bg-white p-2 transition-all duration-300 group-hover:border-lightBlue">
                        {item?.images?.map((image, index) => (
                          <React.Fragment key={index}>
                            <Image src={image} alt="" width={34} height={34} />
                            {index < item.images.length - 1 && (
                              <span className="font-Poppins text-3xl font-medium">
                                +
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4">
                        <h5 className="font-Inter text-[26px] font-semibold leading-8 text-black group-hover:text-lightBlue">
                          {item?.heading}
                        </h5>
                        <p className="font-Inter text-lg font-light leading-[28.8px] text-[#504C4C]">
                          {item?.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ),
              )}
          </Swiper>
        </div>
        <div className="mx-auto w-full max-w-[1620px] px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-20 5xl:px-0">
          <Link
            href={data?.TechnologiesIntegrations?.btnLink}
            className="float-left flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-[21.71px] py-[19.56px] font-Inter text-[21px] font-medium uppercase leading-[26.27px] text-white"
          >
            {data?.TechnologiesIntegrations?.btnName}{' '}
            <Image src={arrow} alt={arrow} width={32} height={32} />
          </Link>
        </div>
      </div>
      <Container className="mb-10 pt-[100px] md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:px-[150px]">
        <div className="flex flex-col items-center gap-7 md:gap-10 4xl:gap-[60px]">
          <SectionHeading
            heading={data?.WhyOptimityForDevelopment?.heading}
            description={data?.WhyOptimityForDevelopment?.description}
            className="max-w-[1474px] gap-5"
            descriptionStyle="max-w-[1180px]"
          />
          <div className="grid grid-cols-1 gap-x-[34px] gap-y-10 sm:grid-cols-2">
            {data?.WhyOptimityForDevelopment?.typesOfApplication.map(
              (item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 rounded-[26.89px] bg-[#B5B5B51a] p-[30px]"
                >
                  <h3 className="font-Inter text-[30px] font-semibold leading-[36.31px] text-black">
                    {item?.heading}
                  </h3>
                  <p className="font-Inter text-xl font-normal leading-7 text-[#504C4C]">
                    {item?.description}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default AllPageContent;
