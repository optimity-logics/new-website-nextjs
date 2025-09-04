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
      <div className="relative mx-auto w-full max-w-[1920px] px-[100px] py-[154px]">
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
              <h2 className="whitespace-pre-line font-Inter text-[80px] font-bold uppercase leading-tight text-black">
                Bring Your
                <br />
                <span className="text-red">App Vision </span>to Life, Anytime
                with AI.
              </h2>
              <p className="font-Inter text-[18px] font-normal leading-tight text-[#5E5E5E]">
                We&#39;re a full-stack agency specializing in digital
                transformation. Crafting experiences for startups, SMEs, and
                Fortune 500 companies.
              </p>
            </div>
            <button className="w-max rounded-[50px] bg-[#1A6AA3] px-[30px] py-[14px] font-Inter text-[20px] font-normal leading-tight text-white">
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
        <h3 className="mx-auto w-full max-w-[1920px] px-[100px] font-Inter text-[60px] font-bold leading-[70px] text-black">
          {' '}
          Our Expertise
        </h3>
        <div className="w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
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
                      <div className="felx flex-col gap-[28px]">
                        <h5 className="font-Inter text-[38px] font-bold leading-[70px] text-[#1B1B1B]">
                          {item?.title}
                        </h5>
                        <p className="font-Inter text-[28px] font-normal leading-[46px] text-[#5E5E5E]">
                          {item?.description}
                        </p>
                      </div>
                      <button className="max-w-[211px] rounded-[50px] bg-[#1A6AA3] px-[30px] py-[14px] font-Inter text-[20px] font-medium leading-tight text-white">
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
      <div className="max-w-[1920px] px-[100px] py-[120px]">
        <div className="grid grid-cols-3 gap-[45px]">
          <div className="rounded-[38px] bg-white px-[32px] pb-[20px] pt-[8px] shadow-work-card">
            <div className="flex flex-col gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-1 bg-cover bg-no-repeat py-[40px] font-Inter text-[60px] font-semibold leading-[70px] text-black"
              >
                20+
              </div>
              <span className="text-center font-Inter text-[26px] font-semibold leading-[38px] text-black">
                Happy Clients
              </span>
            </div>
          </div>
          <div className="rounded-[38px] bg-white px-[32px] pb-[20px] pt-[8px] shadow-work-card">
            <div className="flex flex-col gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-2 bg-cover bg-no-repeat py-[40px] font-Inter text-[60px] font-semibold leading-[70px] text-black"
              >
                50+
              </div>
              <span className="text-center font-Inter text-[26px] font-semibold leading-[38px] text-black">
                Finished Projects
              </span>
            </div>
          </div>
          <div className="rounded-[38px] bg-white px-[32px] pb-[20px] pt-[8px] shadow-work-card">
            <div className="flex flex-col gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-3 bg-cover bg-no-repeat py-[40px] font-Inter text-[60px] font-semibold leading-[70px] text-black"
              >
                10+
              </div>
              <span className="text-center font-Inter text-[26px] font-semibold leading-[38px] text-black">
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
        <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-[60px] p-[100px]">
          <h3 className="font-Inter text-[60px] font-bold leading-[70px] text-white">
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
                    <span className="mt-auto p-[14px] font-Inter text-[24px] font-medium leading-[26px] text-white">
                      {item?.heading}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* section-6 */}
      <div className="mx-auto w-full max-w-[1920px] px-[100px] py-[120px]">
        <div className="flex flex-col gap-10 lg:gap-[50px] 4xl:gap-[70px]">
          <div className="flex flex-col justify-between gap-[50px] md:flex-row md:items-center">
            <div className="flex w-full max-w-[691px] flex-col 3xl:py-[32.5px]">
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
      <div className="bg-project-bg bg-cover bg-no-repeat py-[120px]">
        <div className="flex flex-col gap-[80px]">
          <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-[100px]">
            <h4 className="font-Inter text-[60px] font-bold leading-[70px] text-white">
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
      <div className="relative py-[120px]">
        <div
          style={{
            backgroundImage: "url('/images/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="absolute inset-y-0 left-[100px] w-[1px] bg-cover"
        ></div>
        <div
          style={{
            backgroundImage: "url('/images/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="-0 absolute inset-y-0 right-[100px] w-[1px] bg-cover"
        ></div>
        <div className="relative mx-auto w-full max-w-[1920px] px-[100px]">
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
            <div className="col-start-3 row-span-2 row-start-1">
              <div className="flex h-full flex-col justify-between rounded-[17px] bg-black px-[28px] py-[32px]">
                <p className="font-Inter text-[58px] font-extrabold leading-[76px] text-white">
                  Let’s Build Something Great Together
                </p>
                <button className="w-max rounded-[50px] bg-white px-[51px] py-[14px] font-Inter text-[20px] font-semibold leading-tight text-black">
                  Contact Us
                </button>
              </div>
            </div>
            {client &&
              client.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[17px] p-[45px] ${item?.id === 1 ? 'bg-white shadow-card' : 'bg-[#F7F7F8] shadow-custom'} flex flex-col gap-[42px]`}
                >
                  <p className="font-Inter text-[20px] font-normal leading-[33px] text-black">
                    {item?.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[3px]">
                      <p className="font-Inter text-[18px] font-medium leading-[33px] text-black">
                        {item?.name}
                      </p>
                      <span className="font-Inter text-[18px] font-normal leading-[33px] text-[#5E5E5E]">
                        {item?.role}
                      </span>
                    </div>
                    <Image
                      src={item?.avatar}
                      alt="client"
                      width={67}
                      height={67}
                      className="rounded-[12px]"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* section- 9 */}
      <div className="bg-[#E5F4FF] py-[120px]">
        <div className="mx-auto w-full max-w-[1920px] px-[100px]">
          <Faqs />
        </div>
      </div>
      {/* section - 10 */}
      <div
        style={{ backgroundSize: '100% 100%' }}
        className="bg-contact bg-contain bg-no-repeat"
      >
        <div className="mx-auto w-full max-w-[1920px] px-[100px] py-[210px]">
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
    </>
  );
};

export default HomePageV2;
