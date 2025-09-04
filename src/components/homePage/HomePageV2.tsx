'use client';
import React, { useRef } from 'react';
import heroImg from '../../../public/images/hero-img.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import shape1 from '../../../public/images/shape-1.png';
import shape2 from '../../../public/images/shape-2.png';
import shape3 from '../../../public/images/shape-3.png';
import shape4 from '../../../public/images/shape-4.png';
import arrow from '../../../public/images/arrow.png';
import LogoAnimation from './LogoAnimation';
import msgframe from '../../../public/webp/msgframe.webp';
import {
  client,
  howWeWorkData,
  logoIcons,
  ourExpertise,
  projectWeDone,
  techWeWork,
} from '../utils/Constant';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import Faqs from './Faqs';

const HomePageV2 = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  return (
    <>
      {/* section-1 */}
      <div className="relative mx-auto w-full max-w-[1920px] px-[50px] py-[154px]">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 1.8,
            ease: 'easeIn',
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          className="absolute left-[10%] top-[50px]"
        >
          <Image src={shape1} alt="shape-1" width={96} height={84} />
        </motion.div>
        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{
            duration: 1.8,
            ease: 'easeIn',
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          className="absolute bottom-[70px] left-[20%]"
        >
          <Image src={shape2} alt="shape-1" width={96} height={84} />
        </motion.div>
        <motion.div
          animate={{ rotate: 90 }} // rotate full circle
          transition={{
            duration: 0.6, // speed (2s per rotation)
            ease: 'linear', // constant speed (no easing)
            repeat: Infinity,
            repeatDelay: 0.6,
          }}
          className="absolute right-[8%] top-[80px]"
        >
          <Image src={shape3} alt="shape-1" width={70} height={64} />
        </motion.div>
        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{
            duration: 1.8,
            ease: 'easeIn',
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
          className="absolute bottom-[50px] right-[3%]"
        >
          <Image src={shape4} alt="shape-1" width={96} height={84} />
        </motion.div>
        <div className="flex items-center gap-[60px]">
          <div className="flex w-full max-w-[860px] flex-col gap-[50px]">
            <div className="flex flex-col gap-[20px]">
              <h2 className="whitespace-pre-line font-Inter text-[60px] font-bold uppercase leading-tight text-black">
                Bring Your
                <br />
                <span className="text-red">App Vision </span>to Life,
                <br /> Anytime with AI.
              </h2>
              <p className="w-full max-w-[800px] font-Inter text-[18px] font-normal leading-[24px] text-[#5E5E5E]">
                We&#39;re a full-stack agency specializing in digital
                transformation. Crafting experiences for startups, SMEs, and
                Fortune 500 companies.
              </p>
            </div>
            <button className="w-max rounded-[50px] bg-[#1A6AA3] px-[30px] py-[14px] font-Inter text-[18px] font-normal leading-[24px] text-white">
              Learn More
            </button>
          </div>
          <div>
            <Image src={heroImg} alt="hero-img" width={510} height={472} />
          </div>
        </div>
      </div>
      {/* logo */}
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center gap-[25px] rounded-2xl border border-darkGray bg-black px-5 pb-[22px] pt-[30px] shadow-lg 5xl:rounded-[24px]">
          <span className="text-center font-Poppins text-base font-normal leading-[1.6rem] text-white md:text-lg md:leading-7">
            Trusted BY 1400+ Happy Clients, Including Fortune 400 Companies
          </span>
          <LogoAnimation logo={logoIcons} />
        </div>
      </div>
      {/* section-3 */}
      <div className="flex flex-col gap-[30px] pt-[125px]">
        <h3 className="mx-auto w-full max-w-[1920px] px-[50px] font-Inter text-[48px] font-bold leading-[52px] text-black">
          {' '}
          Our Expertise
        </h3>
        <div className="w-full">
          <Swiper
            spaceBetween={100}
            slidesPerView={1.8}
            modules={[Autoplay, Mousewheel]}
            centeredSlides={true}
            mousewheel={{
              invert: true,
            }}
            speed={1000}
            loop={false}
          >
            {ourExpertise &&
              ourExpertise.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center gap-[65px]">
                    <div className="flex w-full max-w-[799px] flex-col gap-[40px]">
                      <div className="flex flex-col gap-5">
                        <h5 className="font-Inter text-[28px] font-bold leading-[32px] text-[#1B1B1B]">
                          {item?.title}
                        </h5>
                        <p className="font-Inter text-[18px] font-normal leading-6 text-[#5E5E5E]">
                          {item?.description}
                        </p>
                      </div>
                      <button className="w-max rounded-[50px] bg-[#1A6AA3] px-[30px] py-[14px] font-Inter text-[18px] font-normal leading-tight text-white">
                        {item?.button}
                      </button>
                    </div>
                    <div>
                      <Image
                        src={item?.img}
                        alt="img"
                        width={698}
                        height={600}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      {/* section-4 */}
      <div className="max-w-[1920px] px-[50px] py-[100px]">
        <div className="grid grid-cols-3 gap-[45px]">
          <div className="rounded-[38px] bg-white px-[32px] pb-[20px] pt-[8px] shadow-work-card">
            <div className="flex flex-col gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-1 bg-cover bg-no-repeat py-[40px] font-Inter text-[48px] font-semibold leading-[52px] text-black"
              >
                20+
              </div>
              <span className="text-center font-Inter text-[18px] font-semibold leading-[24px] text-black">
                Happy Clients
              </span>
            </div>
          </div>
          <div className="rounded-[38px] bg-white px-[32px] pb-[20px] pt-[8px] shadow-work-card">
            <div className="flex flex-col gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-2 bg-cover bg-no-repeat py-[40px] font-Inter text-[48px] font-semibold leading-[52px] text-black"
              >
                50+
              </div>
              <span className="text-center font-Inter text-[18px] font-semibold leading-[24px] text-black">
                Finished Projects
              </span>
            </div>
          </div>
          <div className="rounded-[38px] bg-white px-[32px] pb-[20px] pt-[8px] shadow-work-card">
            <div className="flex flex-col gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-3 bg-cover bg-no-repeat py-[40px] font-Inter text-[48px] font-semibold leading-[52px] text-black"
              >
                10+
              </div>
              <span className="text-center font-Inter text-[18px] font-semibold leading-[24px] text-black">
                Skilled Experts
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section-5 */}
      <div
        style={{ backgroundSize: '100% 100%' }}
        className="bg-tech-we-work bg-cover bg-no-repeat"
      >
        <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-[60px] px-[50px] py-[100px]">
          <h3 className="font-Inter text-[48px] font-bold leading-[52px] text-white">
            Technologies we work with
          </h3>
          <div className="grid grid-cols-6 gap-6">
            {techWeWork &&
              techWeWork.map((item, index) => (
                <div
                  className="rounded-[24px] bg-overly bg-cover bg-no-repeat"
                  key={index}
                >
                  <div className="grid h-full w-full rounded-[20px] bg-cover p-[8px] grid-stack">
                    <Image
                      src={item?.img}
                      alt="technology"
                      width={254}
                      height={339}
                    />
                    <span className="mt-auto p-[14px] font-Inter text-[20px] font-medium leading-[24px] text-white">
                      {item?.heading}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* section-6 */}
      <div className="mx-auto w-full max-w-[1280px] px-[50px] py-[100px]">
        <div className="flex flex-col gap-10 lg:gap-[50px] 4xl:gap-[70px]">
          <div className="flex flex-col justify-between gap-[50px] md:flex-row md:items-center">
            <div className="flex w-full max-w-[691px] flex-col">
              {howWeWorkData &&
                howWeWorkData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-[25px]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-center font-Poppins text-xl font-bold leading-6 text-black lg:h-14 lg:w-14 lg:text-2xl">
                        {`0${index + 1}`}
                      </div>
                      <p className="font-Poppins text-base font-medium leading-6 text-black lg:text-xl">
                        {item}
                      </p>
                    </div>
                    <div
                      className={`ml-[19px] h-full min-h-4 w-0.5 bg-[#3e656d] lg:ml-[26px] lg:min-h-7 xl:min-h-10 ${index !== howWeWorkData.length - 1 ? 'block' : 'hidden'} `}
                    ></div>
                  </div>
                ))}
            </div>
            <div>
              <Image
                src={msgframe}
                alt="chat-msg-image"
                width={533}
                height={649}
              />
            </div>
          </div>
        </div>
      </div>
      {/* section-7 */}
      <div className="bg-project-bg bg-cover bg-no-repeat py-[100px]">
        <div className="flex flex-col gap-[80px]">
          <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-[50px]">
            <h4 className="font-Inter text-[48px] font-bold leading-[52px] text-white">
              Successfully deployed projects
            </h4>
            <div className="flex w-max items-center gap-10">
              <button className="custom-prev" ref={prevRef}>
                <Image src={arrow} alt="arrow" width={24} height={24} />
              </button>
              <button className="custom-next" ref={nextRef}>
                <Image
                  src={arrow}
                  alt="arrow"
                  width={24}
                  height={24}
                  className="rotate-180"
                />
              </button>
            </div>
          </div>
          <div className="w-full">
            <Swiper
              spaceBetween={60}
              slidesPerView={1.8}
              modules={[Autoplay, Navigation]}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              centeredSlides={true}
              speed={1000}
              loop={false}
            >
              {projectWeDone &&
                projectWeDone.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-between gap-[30px] rounded-xl bg-white p-[28px]">
                      <h6 className="font-Inter text-[33px] font-bold leading-[38px] text-black">
                        {item?.projectName}
                      </h6>
                      <Image
                        src={item?.img}
                        alt="project"
                        width={663}
                        height={446}
                        className="rounded-[10px]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* ssection - 8 */}
      <div className="relative py-[100px]">
        <div
          style={{
            backgroundImage: "url('/images/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="absolute inset-y-0 left-[50px] w-[1px] bg-cover"
        ></div>
        <div
          style={{
            backgroundImage: "url('/images/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="-0 absolute inset-y-0 right-[50px] w-[1px] bg-cover"
        ></div>
        <div className="relative mx-auto w-full max-w-[1920px] px-[50px]">
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(90deg, rgba(102,102,102,0.11) 0.6%, #666666 50.78%, rgba(102,102,102,0.11) 100%)',
            }}
            className="absolute inset-x-0 -top-[3px] h-[1px] border-1 border-dashed border-gray opacity-30"
          ></div>
          <div
            style={{
              WebkitMaskImage:
                'linear-gradient(90deg, rgba(102,102,102,0.11) 0.6%, #666666 50.78%, rgba(102,102,102,0.11) 100%)',
            }}
            className="absolute inset-x-0 bottom-[-3px] !h-[1px] border-1 border-dashed border-gray opacity-30"
          ></div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-start-3 row-span-2 row-start-2">
              <div className="flex h-full flex-col justify-between rounded-[17px] bg-black px-[28px] py-[32px]">
                <p className="font-Inter text-[50px] font-extrabold leading-[56px] text-white">
                  Let’s Build Something Great Together
                </p>
                <button className="w-max rounded-[50px] bg-white px-[51px] py-[14px] font-Inter text-[18px] font-semibold leading-6 text-black">
                  Contact Us
                </button>
              </div>
            </div>
            {client &&
              client.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[17px] p-[45px] ${item?.id === 1 ? 'bg-white shadow-card' : 'bg-[#F7F7F8] shadow-custom'} flex flex-col justify-between gap-[42px]`}
                >
                  <p className="line-clamp-5 font-Inter text-[20px] font-normal leading-[33px] text-black">
                    {item?.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-Inter text-[18px] font-normal leading-[33px] text-[#5E5E5E]">
                      {item?.role}
                    </p>
                    <Image
                      src={item?.avatar}
                      alt="client"
                      width={67}
                      height={67}
                      className="h-[67px] w-[67px] rounded-[12px] object-cover"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* section- 9 */}

      {/* section - 10 */}
      {/* <div
        style={{ backgroundSize: '100% 100%' }}
        className=" bg-contact my-[100px] bg-contain bg-no-repeat"
      > */}
      <div className="mx-[50px] my-[100px]">
        <div
          style={{ backgroundSize: '100% 100%' }}
          className="mx-auto w-full max-w-[1920px] bg-contact bg-contain bg-no-repeat px-[50px] py-[140px]"
        >
          <div className="flex items-center justify-between">
            <div className="flex w-full max-w-[570px] flex-col gap-5">
              <h4 className="font-Inter text-[60px] font-semibold leading-[65px] text-white">
                We’re Here to <span className="text-red"> Help, Anytime.</span>
              </h4>
              <p className="pr-[76px] font-Inter text-[18px] font-light leading-tight text-white">
                Our support team is ready to provide prompt solutions and
                guidance to ensure your experience with us is seamless and
                satisfying.
              </p>
            </div>
            <form className="flex w-full max-w-[737px] flex-col gap-10 rounded-2xl border border-[#585555] bg-[#1E1E1E] px-[23px] py-[52px]">
              <div className="flex flex-col gap-[26px]">
                <div className="flex items-center gap-[39px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 p-[23px] font-Inter text-[18px] font-normal leading-tight text-white/70"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 p-[23px] font-Inter text-[18px] font-normal leading-tight text-white/70"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 p-[23px] font-Inter text-[18px] font-normal leading-tight text-white/70"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 p-[23px] font-Inter text-[18px] font-normal leading-tight text-white/70"
                />
                <textarea
                  rows={2}
                  placeholder="Description"
                  className="resize-none rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 p-[23px] font-Inter text-[18px] font-normal leading-tight text-white/70"
                />
              </div>
              <button className="w-max rounded-[50px] bg-red px-[71px] py-[14px] font-Inter text-[20px] font-normal leading-tight text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#E5F4FF] py-[100px]"> */}
      <div className="mx-auto w-full max-w-[1920px] px-[50px] pb-[100px]">
        <Faqs />
      </div>
      {/* </div> */}
    </>
  );
};

export default HomePageV2;
