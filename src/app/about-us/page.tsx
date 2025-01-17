'use client';
import Container from '@/components/common/Container';
import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from '@/components/common/SectionHeading';
import { Autoplay, Mousewheel, Pagination } from 'swiper/modules';
import dynamic from 'next/dynamic';
import {
  achievementsData,
  blackLogoIcon,
  exportTeamData,
} from '@/components/utils/Constant';
import first from '../../../public/webp/careers/1.webp';
import second from '../../../public/webp/careers/2.webp';
import third from '../../../public/webp/careers/3.webp';
import four from '../../../public/webp/careers/4.webp';
import five from '../../../public/webp/careers/5.webp';
import six from '../../../public/webp/careers/6.webp';
import arrow from '../../../public/svg/arrow-white.svg';
import Image from 'next/image';
import ClientReview from '@/components/homePage/ClientReview';
import Marquee from 'react-fast-marquee';

const StarRatings = dynamic(() => import('react-star-ratings'), { ssr: false });

const HighlitedDescription = styled.h1`
  span {
    color: #e94e25;
  }
`;

const AboutUs = () => {
  const yellowStarPath =
    'M11.1855 16.8198L7.49332 19.044C7.3302 19.1479 7.15968 19.1923 6.98173 19.1774C6.80379 19.1626 6.6481 19.1033 6.51464 18.9996C6.38119 18.8957 6.27739 18.766 6.20324 18.6103C6.1291 18.4545 6.11428 18.2804 6.15876 18.0876L7.13743 13.8838L3.86778 11.059C3.71949 10.9255 3.62682 10.7735 3.58975 10.603C3.55267 10.4325 3.5638 10.2656 3.62312 10.1025C3.68242 9.93941 3.7714 9.80595 3.89003 9.70216C4.00865 9.59836 4.17177 9.53163 4.37936 9.50197L8.69441 9.12386L10.3626 5.16468C10.4367 4.98675 10.5517 4.85329 10.7073 4.76431C10.8631 4.67535 11.0225 4.63086 11.1855 4.63086C11.3487 4.63086 11.5081 4.67535 11.6638 4.76431C11.8195 4.85329 11.9344 4.98675 12.0086 5.16468L13.6768 9.12386L17.9917 9.50197C18.1994 9.53163 18.3625 9.59836 18.4811 9.70216C18.5998 9.80595 18.6887 9.93941 18.7481 10.1025C18.8073 10.2656 18.8185 10.4325 18.7814 10.603C18.7443 10.7735 18.6516 10.9255 18.5033 11.059L15.2337 13.8838L16.2124 18.0876C16.2569 18.2804 16.2421 18.4545 16.1679 18.6103C16.0938 18.766 15.9899 18.8957 15.8565 18.9996C15.723 19.1033 15.5673 19.1626 15.3895 19.1774C15.2115 19.1923 15.041 19.1479 14.8779 19.044L11.1855 16.8198Z';
  return (
    <>
      <div className="bg-careerBanner bg-cover bg-center bg-no-repeat">
        <Container className="mb-10 py-[120px] md:mb-12 xl:mb-16 4xl:mb-[100px]">
          <h2 className="text-center font-Poppins text-4xl font-medium leading-[40px] tracking-[-0.16px] text-white md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:leading-[50px] 4xl:text-[50px] 4xl:font-semibold 5xl:text-[55px] 5xl:leading-[60px]">
            About Us
          </h2>
        </Container>
      </div>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:mb-[120px]">
        <div className="flex flex-col items-center gap-[73px] md:flex-row">
          <div className="w-full"></div>
          <div className="flex max-w-[752px] flex-col gap-[22px]">
            <span className="font-Inter text-[26px] font-bold leading-[37.13px] tracking-[-0.26px] text-lightBlue">
              Who we are
            </span>
            <div className="flex flex-col gap-[15px]">
              <HighlitedDescription
                dangerouslySetInnerHTML={{
                  __html: `Highly Tailored <span> IT Design, Management & Support </span>Services.`,
                }}
                className="font-Inter text-[25px] font-medium capitalize leading-[2rem] text-charcoalBlue sm:text-4xl sm:leading-10 xl:text-[40px] xl:leading-[40px] 3xl:font-semibold 4xl:text-[50px] 4xl:leading-[54px] 5xl:text-[60px] 5xl:leading-[65px]"
              />
              <p className="font-Inter text-lg font-normal leading-[29px] text-[#7C7676]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:mb-[120px]">
        <div className="grid grid-cols-1 gap-[29px] sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex h-full min-h-[350px] flex-col items-center justify-center gap-[18px] rounded-[15px] bg-[#FFD9CF] px-[70.5px] py-5 sm:justify-end 5xl:min-h-[403px]">
            <h5 className="font-Inter text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-black md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
              354+
            </h5>
            <span className="text-nowrap font-Inter text-[26px] font-normal leading-[52px] text-black">
              Completed Projects
            </span>
          </div>
          <div className="flex h-full min-h-[350px] flex-col items-center justify-center gap-[18px] rounded-[15px] bg-[#92E6FF] px-[70.5px] py-5 sm:justify-start 5xl:min-h-[403px]">
            <h5 className="font-Inter text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-black md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
              15+
            </h5>
            <span className="text-nowrap font-Inter text-[26px] font-normal leading-[52px] text-black">
              Employees
            </span>
          </div>
          <div className="flex h-full min-h-[350px] flex-col items-center justify-center gap-[18px] rounded-[15px] bg-[#FFD9CF] px-[70.5px] py-5 sm:justify-end sm:bg-[#92E6FF] xl:bg-[#FFD9CF] 5xl:min-h-[403px]">
            <h5 className="font-Inter text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-black md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
              02+
            </h5>
            <span className="text-nowrap font-Inter text-[26px] font-normal leading-[52px] text-black">
              Countries Served
            </span>
          </div>
          <div className="flex h-full min-h-[350px] flex-col items-center justify-center gap-[18px] rounded-[15px] bg-[#92E6FF] px-[70.5px] py-5 sm:justify-start sm:bg-[#FFD9CF] xl:bg-[#92E6FF] 5xl:min-h-[403px]">
            <h5 className="font-Inter text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-black md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
              05+
            </h5>
            <span className="text-nowrap font-Inter text-[26px] font-normal leading-[52px] text-black">
              Year Of Experience
            </span>
          </div>
        </div>
      </Container>
      <div className="mb-10 bg-technologbg bg-cover bg-center bg-no-repeat py-10 md:mb-12 xl:mb-16 3xl:py-14 4xl:mb-[100px] 5xl:mb-[120px] 5xl:py-20">
        <Container className="flex flex-col gap-8 3xl:gap-10 4xl:gap-[60px]">
          <h2 className="text-center font-Inter text-[25px] font-medium capitalize leading-[2rem] text-white sm:text-4xl sm:leading-10 xl:text-[40px] xl:leading-[40px] 3xl:font-semibold 4xl:text-[50px] 4xl:leading-[54px] 5xl:text-[60px] 5xl:leading-[65px]">
            Who We are?
          </h2>
          <div className="flex flex-col items-center gap-[30px]">
            <div className="flex flex-col gap-[23px] md:flex-row">
              <div className="flex w-full flex-col gap-5 rounded-[15px] bg-[#FFD9CF] py-[28.49px] pl-[46.13px] pr-[45.87px] md:w-1/2">
                <h3 className="font-Inter text-[37.99px] font-semibold leading-[60.78px] text-black">
                  Our Mission
                </h3>
                <p className="font-Inter text-xl font-normal leading-7 text-[#504C4C]">
                  Our mission is to expedite the integration of new technologies
                  within enterprises, addressing the inevitable challenges that
                  accompany digital expansion and fostering continuous
                  innovation. Whether it&#39;s a consumer-focused application or
                  a game-changing enterprise solution, our company spearheads
                  the journey from inception and conceptualization to final
                  delivery, offering steadfast support throughout the process.
                </p>
              </div>
              <div className="flex w-full flex-col gap-5 rounded-[15px] bg-[#FBFDFF] py-[28.49px] pl-[46.13px] pr-[45.87px] md:w-1/2">
                <h3 className="font-Inter text-[37.99px] font-semibold leading-[60.78px] text-black">
                  Our Vision
                </h3>
                <p className="font-Inter text-xl font-normal leading-7 text-[#504C4C]">
                  We aspire to lead as a top web solutions provider in IT,
                  surpassing our current market standing. Committed to our
                  customers success, we recognize our growth is linked to
                  theirs. Rooted in precision and quality, we aim for
                  trustworthiness, innovation, and user-centricity. Integrity is
                  paramount, expected from all collaborators, with transparency
                  balanced by discretion. Embracing vulnerability, we foster
                  openness among our team, partners, and clients.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 rounded-[15px] bg-[#B1EDFF] py-[28.49px] pl-[46.13px] pr-[45.87px]">
              <h3 className="font-Inter text-[37.99px] font-semibold leading-[60.78px] text-black">
                Our Values
              </h3>
              <p className="font-Inter text-xl font-normal leading-7 text-[#504C4C]">
                Trust is fundamental in our relationships; we prioritize
                empathy, understanding others needs, challenges, and
                aspirations. Through attentive listening and proactive
                responses, we enhance connections. Open dialogue and
                collaboration shape our strategies, fostering mutual respect.
                Together, we establish shared rules, promoting accountability.
                Embracing partnership, we work toward common goals, offering
                support, generating ideas, and sharing experiences.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="!3xl:px-0 !4xl:px-0 mb-10 flex flex-col gap-8 overflow-x-hidden px-4 sm:px-6 md:mb-12 md:px-0 xl:mb-16 3xl:gap-10 4xl:mb-[120px] 4xl:gap-[60px]">
        <HighlitedDescription
          dangerouslySetInnerHTML={{
            __html: `Our <span> Achievements </span>`,
          }}
          className="mx-auto max-w-[1612px] px-4 font-Inter text-[25px] font-medium capitalize leading-[2rem] text-charcoalBlue sm:px-6 sm:text-4xl sm:leading-10 md:px-8 xl:px-10 xl:text-[40px] xl:leading-[40px] 3xl:px-20 3xl:font-semibold 4xl:px-[100px] 4xl:text-[50px] 4xl:leading-[54px] 5xl:text-[60px] 5xl:leading-[65px]"
        />
        <div className="h-full w-full">
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
            {achievementsData &&
              achievementsData.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto rounded-[16.82px] bg-[#F8F8F8] px-[33.63px] py-[28.94px]"
                >
                  <div className="flex h-full flex-col items-center gap-[15.69px] pt-[112px]">
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
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="mb-10 bg-technologbg bg-cover bg-center bg-no-repeat py-10 md:mb-12 xl:mb-16 3xl:py-14 4xl:mb-[100px] 5xl:mb-[120px] 5xl:py-20">
        <Container className="flex flex-col gap-8 3xl:gap-10 4xl:gap-[60px]">
          <SectionHeading
            heading="We have <span> expert team </span>"
            className="text-white"
            isDark={true}
          />
          <div className="export h-full w-full">
            <Swiper
              modules={[Autoplay, Mousewheel, Pagination]}
              spaceBetween={29}
              centeredSlides={true}
              slidesPerView={1}
              mousewheel={{
                invert: true,
              }}
              speed={1000}
              loop={true}
              pagination={{
                clickable: true,
                renderBullet: (index, className) =>
                  `<span class="${className} custom-pagination-bullet relative">
                      <div class="inner-bullet  absolute top-[-3.5px] left-[-4px]"></div>
                   </span>`,
              }}
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
                  slidesPerView: 3,
                },
                1440: {
                  slidesPerView: 4,
                },
              }}
              className="h-full !w-full"
            >
              {exportTeamData &&
                exportTeamData.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="mb-10 !h-auto rounded-[15px] bg-exportTeamBg bg-cover bg-center bg-no-repeat px-[35px] py-[70.48px] pt-[100px]"
                  >
                    <div className="flex items-start gap-[11.85px]">
                      <div className="h-[47px] w-[23px] bg-export-team-gradient"></div>
                      <div className="flex flex-col gap-[22.5px]">
                        <h3 className="max-w-[150px] font-Inter text-[26px] font-semibold leading-[28.42px] tracking-[-0.19px] text-white">
                          {item?.name}
                        </h3>
                        <span className="font-Inter text-sm font-normal leading-7 text-white">
                          {item?.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </Container>
      </div>
      <Container
        className="bg-sectionBg mb-10 bg-cover bg-right bg-no-repeat py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20 5xl:px-[150px]"
        isBackground={false}
      >
        <div className="flex flex-col items-center gap-10 3xl:gap-[50px] 4xl:gap-[80px]">
          <SectionHeading
            heading="Life <span>@OptimityLogics</span>"
            isDark={false}
          />
          <div className="no-scrollbar overflow-x-scroll">
            <div className="grid w-full grid-cols-2 grid-rows-2 gap-[21px] md:grid-cols-4 lg:grid-rows-3">
              <Image
                src={first}
                alt=""
                className="col-span-2 row-span-2 h-full w-full object-contain"
              />
              <Image
                src={four}
                alt=""
                className="col-span-1 row-span-1 h-full w-full object-contain"
              />
              <Image
                src={six}
                alt=""
                className="row-span-2 h-full w-full object-contain"
              />
              <Image
                src={five}
                alt=""
                className="row-span-2 h-full w-full object-contain"
              />
              <Image
                src={second}
                alt=""
                className="h-full w-full object-contain"
              />
              <Image
                src={third}
                alt=""
                className="h-full w-full object-contain"
              />

              <div className="flex h-full cursor-pointer items-end rounded-[15px] bg-[#1a1a1a] p-4 lg:p-8">
                <div className="flex flex-col gap-3">
                  <span className="font-Poppins text-base font-medium leading-5 text-white lg:text-[28px] lg:leading-[32px]">
                    Explore more
                  </span>
                  <Image
                    src={arrow}
                    alt={arrow}
                    width={45}
                    height={45}
                    className="w-5 lg:w-max"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ClientReview />
      <div className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 5xl:mb-[120px]">
        <Marquee gradient={true} gradientColor="white" speed={55}>
          <div className="!last-of-type:4xl:mr-[69px] flex items-center justify-between last-of-type:mr-5 md:last-of-type:mr-[45px] last-of-type:xl:mr-[34px]">
            {blackLogoIcon &&
              blackLogoIcon.map((item, index) => (
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
    </>
  );
};

export default AboutUs;
