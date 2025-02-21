'use client';
import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { IPropsDataTypes } from '../type/type';
import arrow from '../../../public/svg/fat-arrow.svg';
import Marquee from 'react-fast-marquee';
import { logoIcons, resourcesData } from '../utils/Constant';
import SectionHeading from './SectionHeading';
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import checkMark from '../../../public/svg/check-mark.svg';
import StarRatings from 'react-star-ratings';
import FaqsAccordion from './FaqsAccordion';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { usePathname } from 'next/navigation';

interface IPropsType {
  data: IPropsDataTypes;
}
const solutionLinks = [
  { path: '/healthcare-solutions', bgClass: 'after:bg-healthcarebg' },
  { path: '/fintech-solutions', bgClass: 'after:bg-finance' },
  { path: '/real-estate-app-development', bgClass: 'after:bg-realEstate' },
  { path: '/ecommerce-solutions', bgClass: 'after:bg-retail' },
  {
    path: '/educational-app-development-solutions',
    bgClass: 'after:bg-education',
  },
  { path: '/logistics-app-development', bgClass: 'after:bg-logistic' },
];

const AllPageContent = ({ data }: IPropsType) => {
  const path = usePathname();
  const solution = solutionLinks.find((link) =>
    path.toLowerCase().includes(link.path.toLowerCase()),
  );
  const bgClass = solution ? solution.bgClass : '';
  const yellowStarPath =
    'M11.1855 16.8198L7.49332 19.044C7.3302 19.1479 7.15968 19.1923 6.98173 19.1774C6.80379 19.1626 6.6481 19.1033 6.51464 18.9996C6.38119 18.8957 6.27739 18.766 6.20324 18.6103C6.1291 18.4545 6.11428 18.2804 6.15876 18.0876L7.13743 13.8838L3.86778 11.059C3.71949 10.9255 3.62682 10.7735 3.58975 10.603C3.55267 10.4325 3.5638 10.2656 3.62312 10.1025C3.68242 9.93941 3.7714 9.80595 3.89003 9.70216C4.00865 9.59836 4.17177 9.53163 4.37936 9.50197L8.69441 9.12386L10.3626 5.16468C10.4367 4.98675 10.5517 4.85329 10.7073 4.76431C10.8631 4.67535 11.0225 4.63086 11.1855 4.63086C11.3487 4.63086 11.5081 4.67535 11.6638 4.76431C11.8195 4.85329 11.9344 4.98675 12.0086 5.16468L13.6768 9.12386L17.9917 9.50197C18.1994 9.53163 18.3625 9.59836 18.4811 9.70216C18.5998 9.80595 18.6887 9.93941 18.7481 10.1025C18.8073 10.2656 18.8185 10.4325 18.7814 10.603C18.7443 10.7735 18.6516 10.9255 18.5033 11.059L15.2337 13.8838L16.2124 18.0876C16.2569 18.2804 16.2421 18.4545 16.1679 18.6103C16.0938 18.766 15.9899 18.8957 15.8565 18.9996C15.723 19.1033 15.5673 19.1626 15.3895 19.1774C15.2115 19.1923 15.041 19.1479 14.8779 19.044L11.1855 16.8198Z';
  return (
    <>
      <Container
        className={`mb-10 pt-10 md:mb-12 xl:mb-16 3xl:pt-[100px] 4xl:mb-[100px] ${solution && ` ${bgClass} relative after:right-0 after:top-0 after:h-full after:w-full after:bg-contain after:bg-right after:bg-no-repeat sm:after:absolute`}`}
      >
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex w-full flex-col gap-6 lg:max-w-[800px] xl:gap-8 4xl:gap-12">
            <div className="flex flex-col gap-3 md:gap-8">
              <h2 className="font-Inter text-[26px] font-medium capitalize leading-[2.3rem] text-lightBlack md:text-4xl md:leading-10 lg:text-start 3xl:text-[40px] 3xl:leading-[44px] 4xl:text-[55px] 4xl:leading-[60px] 5xl:text-[60px] 5xl:font-semibold 5xl:leading-[64px]">
                {data?.HeroSectionData?.heading}
              </h2>
              <p className="font-Inter text-lg font-normal leading-[29px] text-[#7c7676]">
                {data?.HeroSectionData?.description}
              </p>
            </div>
            <Link
              href={data?.HeroSectionData?.btnLink}
              className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-4 py-2.5 font-Inter text-base font-medium capitalize leading-5 text-white sm:px-[21.71px] sm:text-[21px] sm:leading-[26.27px] md:py-3 5xl:py-[19.56px]"
            >
              {data?.HeroSectionData?.btnName}{' '}
              <Image src={arrow} alt={arrow} width={32} height={32} />
            </Link>
            <div className="grid grid-cols-2 gap-4 sm:gap-10 md:grid-cols-4">
              {data?.HeroSectionData?.workWithTechnology &&
                data?.HeroSectionData?.workWithTechnology.map((item, index) => (
                  <div key={index} className="flex flex-col items-start gap-1">
                    <span className="font-Poppins text-2xl font-medium leading-6 text-red md:text-3xl md:leading-[44.8px]">
                      {item?.title}
                    </span>
                    <p
                      className={`font-Poppins text-lg font-normal leading-6 text-[#212529] 5xl:text-xl 5xl:leading-[28.8px]`}
                    >
                      {item?.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          {!solution && (
            <div className="hidden lg:block">
              {' '}
              {data?.HeroSectionData?.techImg ? (
                <div className="mx-auto max-w-full">
                  <Image
                    src={data?.HeroSectionData?.techImg || ''}
                    alt="Technology Image"
                    width={600}
                    height={528}
                    className="h-[528px] object-contain"
                    priority
                  />
                </div>
              ) : (
                <form className="flex w-full max-w-[620px] flex-col gap-[14px] rounded-3xl bg-[#e2f7f8] bg-cover px-[26px] py-[30px]">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-Inter text-[30px] font-semibold leading-[36.31px] text-black">
                      Book a Developer Interview
                    </h3>
                    <p className="font-Inter text-xl font-normal leading-7 text-[#504C4C]">
                      Provide details about the skills you need, and we’ll find
                      the right candidate for you.
                    </p>
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <input
                      type="text"
                      placeholder="Your name.."
                      className="w-full rounded-[10px] border border-[#19202033] bg-white px-[15px] py-[14.59px] font-Inter text-base font-light leading-6 text-[#192020] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Email address.."
                      className="w-full rounded-[10px] border border-[#19202033] bg-white px-[15px] py-[14.59px] font-Inter text-base font-light leading-6 text-[#192020] focus:outline-none"
                    />
                    <PhoneInput
                      className="w-full !space-x-5 border-none"
                      placeholder="Phone number"
                      defaultCountry="in" // Use lowercase 'in' for India
                      inputClassName="w-full !border !border-[#19202033]  !px-[15px] !py-[14.59px] font-Inter !text-base font-light !leading-6 !text-[#192020] focus:outline-none !outline-none !rounded-[10px] !bg-white !min-h-[54px]"
                      countrySelectorStyleProps={{
                        className: '  !z-[99]',
                        buttonClassName:
                          '!border border-[#19202033] !rounded-[10px] !p-[15px] !bg-white !min-h-[54px] !min-w-[100px]',
                      }}
                    />

                    <textarea
                      rows={3}
                      placeholder="Tell us about your project.."
                      className="appearance-[#ffffff4a] w-full rounded-[10px] border border-[#19202033] bg-white px-[15px] py-[14.59px] font-Inter text-base font-light leading-6 text-[#192020] focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="mt-[5px] flex w-max cursor-pointer items-center gap-2.5 rounded-[39px] bg-red px-4 py-3 font-Inter text-sm font-medium uppercase text-white md:px-[21px] md:py-4 md:text-lg md:leading-[24.2px]"
                    >
                      inquire now{' '}
                      <Image src={arrow} alt="Arrow" width={24} height={24} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </Container>
      <div
        className="relative mx-auto px-4 after:absolute after:bottom-0 after:right-0 after:-z-10 after:h-1/2 after:w-full after:bg-technology after:bg-cover after:bg-top after:bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
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
      <div
        className="bg-technology bg-cover bg-center bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Container className="py-10 sm:py-12 lg:py-20 4xl:py-[100px]">
          <div className="flex flex-col items-center gap-7 md:gap-10 4xl:gap-[60px]">
            <SectionHeading
              heading={data?.AppDevelopment?.heading}
              description={data?.AppDevelopment?.description}
              className="max-w-[1210px] gap-5"
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
                  <p className="font-Inter text-xl font-normal leading-7 text-[#504C4C] opacity-70">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href={data?.AppDevelopment?.btnLink}
              className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-4 py-2.5 font-Inter text-base font-medium capitalize leading-5 text-white sm:px-[21.71px] sm:text-[21px] sm:leading-[26.27px] md:py-3 5xl:py-[19.56px]"
            >
              {data?.AppDevelopment?.btnName}{' '}
              <Image src={arrow} alt={arrow} width={32} height={32} />
            </Link>
          </div>
        </Container>
      </div>
      <div
        className="relative after:absolute after:left-0 after:top-0 after:-z-10 after:h-1/2 after:w-full after:bg-EllipseTechnology after:bg-cover after:bg-bottom after:bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
          <div className="flex justify-between gap-6 rounded-2xl bg-technologbg bg-cover bg-center bg-no-repeat px-5 md:rounded-[40px] md:pl-16 md:pr-[42px] 5xl:items-center">
            <div className="xxl :py-0 flex w-full flex-col gap-[30px] py-5 md:py-10 xl:max-w-[759px]">
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
                className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-4 py-2.5 font-Inter text-base font-medium capitalize leading-5 text-white sm:px-[21.71px] sm:text-[21px] sm:leading-[26.27px] md:py-3 5xl:py-[19.56px]"
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
              <div className="5xl:-mt-[77px]">
                <Image
                  src={data?.NextGen?.img}
                  alt=""
                  width={525}
                  height={590}
                />
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
      </div>

      <div className="mb-10 flex flex-col gap-7 md:mb-12 md:gap-10 xl:mb-16 4xl:mb-[100px] 4xl:gap-[60px] 5xl:gap-[64px]">
        <SectionHeading
          heading={data?.TechnologiesIntegrations?.heading}
          description={data?.TechnologiesIntegrations?.description}
          className="max-w-[1200px] gap-6 px-4 sm:px-6 md:px-8"
        />
        <div className="h-full w-full px-4 sm:px-0">
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
            className="float-left flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-4 py-2.5 font-Inter text-base font-medium capitalize leading-5 text-white sm:px-[21.71px] sm:text-[21px] sm:leading-[26.27px] md:py-3 5xl:py-[19.56px]"
          >
            {data?.TechnologiesIntegrations?.btnName}{' '}
            <Image src={arrow} alt={arrow} width={32} height={32} />
          </Link>
        </div>
      </div>
      {data?.deployProject && (
        <div className="mb-10 bg-technologbg bg-cover bg-no-repeat py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20">
          <Container className="flex flex-col items-center gap-8 3xl:gap-10 4xl:gap-[80px]">
            <SectionHeading
              heading={data?.deployProject?.heading}
              description={data?.deployProject?.description}
              className="max-w-[1170px]"
              descriptionStyle="max-w-[950px]"
              isDark={true}
            />
            <div className="h-full w-full">
              <Swiper
                spaceBetween={33}
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
                loop={false}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  // 820: {
                  //   slidesPerView: 2,
                  // },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  // 1660: {
                  //   slidesPerView: 4,
                  //   spaceBetween: 40,
                  // },
                }}
                className="w-full"
              >
                {data?.deployProject?.deployProjectItem &&
                  data?.deployProject?.deployProjectItem.map((item, index) => (
                    <SwiperSlide
                      key={index}
                      className={` ${index % 2 === 0 ? 'pt-[78px]' : 'pb-[78px]'} !h-auto`}
                    >
                      <div
                        className={`flex ${index % 2 === 0 ? 'flex-col' : 'flex-col-reverse gap-2.5'} items-center rounded-[40px] bg-white`}
                      >
                        <div
                          className={`${index % 2 === 0 ? 'mt-[-78px]' : 'mb-[-78px]'}`}
                        >
                          <Image
                            src={item?.deployProjectImg}
                            alt="deploy-project-img"
                            width={487}
                            height={281}
                          />
                        </div>
                        <div
                          className={`flex flex-col gap-4 px-6 py-5 ${index % 2 === 0 ? 'bg-[#02ade11a]' : 'rounded-t-[40px] bg-[#e94e2540]'} `}
                        >
                          <h3 className="font-Inter text-[34px] font-semibold leading-8 text-black">
                            {item?.deployProjectHeading}
                          </h3>
                          <p className="font-Inter text-lg font-light leading-7 text-black">
                            {item?.deployProjectDescription}
                          </p>
                          <Link
                            href={item?.caseStudyLink}
                            className="mt-2 flex w-max items-center gap-2.5 rounded-[39.35px] bg-[#02ADE1] px-[21.29px] py-[19.5px] font-Inter text-[21px] font-medium capitalize leading-[26px] text-white"
                          >
                            {' '}
                            case study{' '}
                            <Image
                              src={arrow}
                              alt="arrow"
                              width={24}
                              height={24}
                            />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </Container>
        </div>
      )}
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex flex-col items-center gap-7 md:gap-10 4xl:gap-[60px]">
          <SectionHeading
            heading={data?.WhyOptimityForDevelopment?.heading}
            description={data?.WhyOptimityForDevelopment?.description}
            className="max-w-[1000px] gap-5"
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

      <div className="mb-10 flex flex-col items-center gap-8 bg-technologbg bg-cover bg-no-repeat px-4 py-10 sm:px-0 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:gap-[60px] 4xl:py-20">
        <SectionHeading
          heading={data?.TechnologiesFeatured?.heading}
          description={data?.TechnologiesFeatured?.description}
          className="max-w-[1290px]"
          descriptionStyle="max-w-[950px]"
          isDark={true}
        />
        <div className="h-full w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
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
              640: {
                slidesPerView: 2,
              },
              820: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 2.9,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              },
              1660: {
                slidesPerView: 3.8,
                spaceBetween: 40,
              },
            }}
            className="h-full w-full"
          >
            {data?.TechnologiesFeatured?.expertiseInFeacture &&
              data?.TechnologiesFeatured?.expertiseInFeacture.map(
                (item, index) => (
                  <SwiperSlide key={index} className="!h-auto">
                    <div className="group flex h-full min-h-full cursor-pointer flex-col gap-[15px] xl:gap-8">
                      <div>
                        <Image
                          src={item?.img}
                          alt={item?.title}
                          width={446}
                          height={230}
                        />
                      </div>
                      <div className="flex h-full flex-col gap-[17.39px]">
                        <span className="font-Inter text-sm font-medium leading-5 text-red">
                          {item?.label}
                        </span>
                        <div className="flex flex-col gap-3">
                          <h3 className="font-Poppins text-xl font-medium leading-6 text-[#fff]">
                            {item?.title}
                          </h3>
                          <p className="font-Poppins text-base font-light leading-[1.6rem] text-[#fff]">
                            {item?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ),
              )}
          </Swiper>
        </div>
      </div>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex flex-col items-center gap-7 md:gap-10 4xl:gap-[60px]">
          <SectionHeading
            heading={data?.TechnologyWeUseInDevelopment?.heading}
            description={data?.TechnologyWeUseInDevelopment?.description}
            className="max-w-[900px]"
          />
          <div className="flex flex-col gap-[33px]">
            {data?.TechnologyWeUseInDevelopment?.technologyServices &&
              data?.TechnologyWeUseInDevelopment?.technologyServices.map(
                (item, index) => (
                  <div
                    key={index}
                    className="gradient-border flex flex-col gap-5 !rounded-[33.11px] bg-[#f8f8f8] p-[33.61px] xl:flex-row xl:items-center"
                  >
                    <div className="flex items-center gap-[15px] lg:min-w-[270px]">
                      <div
                        className="flex h-[60px] min-w-[60px] items-center justify-center rounded-full"
                        style={{ backgroundColor: item?.bgColor }}
                      >
                        <Image
                          src={item?.servicesImg}
                          alt={item?.servicesImg}
                          width={31}
                          height={31}
                        />
                      </div>
                      <span className="font-Inter text-[28px] font-medium leading-[35px] text-[#192020]">
                        {item?.servicesName}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-[11px]">
                      {item?.servicesItems?.map((items, ind) => (
                        <div
                          key={ind}
                          className="gradient-border flex items-center gap-2 rounded-[33.61px] p-[14px]"
                        >
                          <div>
                            <Image
                              src={checkMark}
                              alt="check-mark"
                              width={24}
                              height={24}
                            />
                          </div>
                          <span className="line-clamp-1 font-Inter text-base font-medium leading-7 text-[#192020] sm:line-clamp-none">
                            {items}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              )}
          </div>
          <Link
            href={data?.TechnologyWeUseInDevelopment?.btnLink}
            className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-4 py-2.5 font-Inter text-base font-medium capitalize leading-5 text-white sm:px-[21.71px] sm:text-[21px] sm:leading-[26.27px] md:py-3 5xl:py-[19.56px]"
          >
            {data?.TechnologyWeUseInDevelopment?.btnName}{' '}
            <Image src={arrow} alt={arrow} width={32} height={32} />
          </Link>
        </div>
      </Container>
      <div className="mb-10 flex flex-col items-center gap-8 px-4 sm:px-0 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:gap-[60px]">
        <SectionHeading
          heading={data?.Resources?.heading}
          description={data?.Resources?.description}
          btnName={data?.Resources?.btnName}
          className="4xl:!gap-5"
          btnStyle="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg font-normal leading-5 !text-charcoalBlue sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7"
          LinkName={data?.Resources?.linkName}
        />
        <div className="h-full w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay, Mousewheel]}
            speed={1000}
            mousewheel={{
              invert: true,
            }}
            loop={false}
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
                slidesPerView: 4,
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
      <div className="mb-10 bg-technologbg bg-cover bg-no-repeat py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20">
        <Container className="flex flex-col gap-7 md:gap-10 4xl:gap-[60px]">
          <div className="grid grid-cols-1 gap-[29px] sm:grid-cols-2 xl:grid-cols-4">
            {data?.Achievements?.aboutUs?.map((item, index) => (
              <div
                key={index}
                className={`flex h-full justify-between gap-5 rounded-[15px] ${index % 2 !== 0 ? 'flex-col-reverse pt-5' : 'flex-col pb-5'}`}
                style={{ backgroundColor: item?.bgColor }}
              >
                <Image
                  src={item?.Img}
                  alt="about-us"
                  width={408}
                  height={241}
                  className={`w-full object-cover ${index % 2 !== 0 ? 'rounded-b-[15px]' : 'rounded-t-[15px]'}`}
                />
                <div className="flex flex-col items-center justify-center gap-[18px]">
                  <h5 className="font-Inter text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-black md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
                    {item?.basicInfo}
                  </h5>
                  <span className="text-nowrap font-Inter text-[26px] font-normal leading-[52px] text-black">
                    {item?.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <SectionHeading heading={data?.Achievements?.heading} isDark={true} />
        </Container>
        <div className="mt-7 h-full w-full px-4 sm:px-0 md:mt-10 4xl:mt-[60px]">
          <Swiper
            modules={[Autoplay, Mousewheel]}
            spaceBetween={22.42}
            centeredSlides={true}
            slidesPerView={1}
            mousewheel={{
              invert: true,
            }}
            speed={1000}
            loop={true}
            breakpoints={{
              540: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.8,
              },
              800: {
                slidesPerView: 2.5,
              },

              1280: {
                slidesPerView: 3.8,
              },
              1440: {
                slidesPerView: 4.6,
              },
            }}
            className="h-full !w-full"
          >
            {data?.Achievements?.achievementsData &&
              data?.Achievements?.achievementsData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto rounded-[16.82px] bg-[#F8F8F8] p-6 5xl:px-[33.63px] 5xl:pb-[28.94px] 5xl:pt-[33.63px]"
                >
                  <div className="flex h-full flex-col items-center gap-[22.42px]">
                    <div>
                      <Image
                        src={item?.logoImg || ''}
                        alt=""
                        width={100}
                        height={24}
                        className="w-full"
                      />
                    </div>
                    <div className="flex h-full flex-col items-center gap-[15.69px]">
                      <div className="flex items-center gap-[16.01px]">
                        {' '}
                        <StarRatings
                          rating={item?.rating || 0}
                          starRatedColor="#FFB300"
                          starHoverColor="#FFB300"
                          numberOfStars={5}
                          starDimension="32px"
                          starSpacing="4px"
                          svgIconViewBox="0 0 22 22"
                          svgIconPath={yellowStarPath}
                        />{' '}
                        <p className="mt-1.5 font-Inter text-lg font-normal leading-6 text-[#212529]">
                          {item?.rating || 0}
                        </p>
                      </div>
                      <span className="text-center font-Inter text-xl font-light leading-[32.29px] text-[#212529]">
                        {item?.title}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex flex-col gap-8 lg:gap-6 3xl:gap-10 4xl:gap-[80px]">
          <SectionHeading
            heading={data?.Faqs?.heading}
            className="4xl:!gap-5"
            description={data?.Faqs?.description}
          />
          <FaqsAccordion data={data?.Faqs?.faqs} />
        </div>
      </Container>
    </>
  );
};

export default AllPageContent;
