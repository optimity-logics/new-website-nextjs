'use client';
import React, { useEffect, useRef, useState } from 'react';
import heroImg from '../../../public/images/homePagev2/logov2.svg';
import logo from '../../../public/svg/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import shape1 from '../../../public/images/homePagev2/shape-1.png';
import shape2 from '../../../public/images/homePagev2/shape-2.png';
import shape3 from '../../../public/images/homePagev2/shape-3.png';
import shape4 from '../../../public/images/homePagev2/shape-4.png';
import arrow from '../../../public/images/homePagev2/arrow.png';
import LogoAnimation from './LogoAnimation';

import {
  client,
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
import AnimatedArrow from '../common/AnimatedArrow';
import HowWeWork from './HowWeWork';

const HomePageV2 = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [hover, setHover] = useState<boolean>(false);
  const [hoverSubmit, setHoverSubmit] = useState<boolean>(false);
  const [hoverViewAl, setHoverViewAl] = useState<boolean>(false);
  const [hoverContact, setHoverContact] = useState<boolean>(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseEnterSubmit = () => setHoverSubmit(true);
  const handleMouseLeaveSubmit = () => {
    setHoverSubmit(false);
  };
  const handleMouseEnterViewAll = () => setHoverViewAl(true);
  const handleMouseLeaveViewAl = () => {
    setHoverViewAl(false);
  };
  const handleMouseEnterContact = () => setHoverContact(true);
  const handleMouseLeaveContact = () => {
    setHoverContact(false);
  };

  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate if section is in viewport
        const isInViewport = rect.top < windowHeight && rect.bottom > 0;

        if (isInViewport) {
          // Calculate scroll progress within the section
          const scrollProgress =
            (windowHeight - rect.top) / (windowHeight + rect.height);

          // Services section with alternating columns
          const oddGroups = section.querySelectorAll(
            '[data-parallax-group="odd"]',
          );
          const evenGroups = section.querySelectorAll(
            '[data-parallax-group="even"]',
          );

          oddGroups.forEach((group) => {
            const element = group as HTMLElement;
            const parallaxY = scrollProgress * 20;
            element.style.transform = `translateY(${parallaxY - 20}px)`;
          });

          evenGroups.forEach((group) => {
            const element = group as HTMLElement;
            const parallaxY = scrollProgress * -20;
            element.style.transform = `translateY(${parallaxY + 20}px)`;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToRefs = (el: HTMLElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };

  return (
    <>
      {/* section-1 */}
      <div className="bg-heroBg bg-cover bg-top bg-no-repeat">
        <div className="relative mx-auto w-full max-w-[1680px] px-[120px] py-[154px]">
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
          <div className="flex items-center justify-between gap-[60px]">
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
              <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseEnter}
                onMouseDown={handleMouseLeave}
                type="button"
                className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-Inter text-[14px] font-normal leading-tight text-white"
              >
                Learn more
                <AnimatedArrow hover={hover} />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: 'easeIn',
              }}
            >
              <div className="relative z-30 w-max">
                <Image src={heroImg} alt="hero-img" width={558} height={515} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* logo */}
      <div className="mx-auto mt-[50px] w-full max-w-[1680px] px-[120px]">
        <div className="flex flex-col items-center gap-[25px] rounded-2xl border border-darkGray bg-black px-5 pb-[22px] pt-[30px] shadow-lg 5xl:rounded-[24px]">
          <span className="text-center font-Poppins text-base font-normal leading-[1.6rem] text-white md:text-lg md:leading-7">
            Trusted BY 1400+ Happy Clients, Including Fortune 400 Companies
          </span>
          <LogoAnimation logo={logoIcons} />
        </div>
      </div>
      {/* section-3 */}
      <div
        style={{ backgroundSize: '100% 100%' }}
        className="my-[100px] bg-our-expertise bg-cover bg-no-repeat"
      >
        <div className="flex flex-col gap-8">
          <h3 className="mx-auto w-full max-w-[1680px] px-[120px] font-Inter text-[48px] font-bold leading-[52px] text-black">
            {' '}
            Our Expertise
          </h3>
          <div className="w-full">
            <Swiper
              spaceBetween={50}
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
                        <button
                          onMouseEnter={handleMouseEnterViewAll}
                          onMouseLeave={handleMouseLeaveViewAl}
                          onMouseUp={handleMouseEnterViewAll}
                          onMouseDown={handleMouseLeaveViewAl}
                          type="button"
                          className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-Inter text-[14px] font-normal leading-tight text-white"
                        >
                          {item?.button}
                          <AnimatedArrow hover={hoverViewAl} />
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
      </div>
      {/* section-4 */}
      <div className="mx-auto mb-[100px] w-full max-w-[1680px] px-[120px]">
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
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="bg-tech-we-work bg-cover bg-no-repeat"
      >
        <div className="mx-auto flex w-full max-w-[1680px] flex-col gap-[60px] px-[120px] py-[100px]">
          <h3 className="font-Inter text-[48px] font-bold leading-[52px] text-white">
            Technologies we work with
          </h3>
          <div
            ref={(el) => addToRefs(el, 0)}
            className="grid grid-cols-6 gap-6"
          >
            {techWeWork &&
              techWeWork.map((item, index) => {
                const isOddColumn = index % 2 === 0;
                return (
                  <div
                    className={`rounded-[24px] bg-overly bg-cover bg-no-repeat transition-transform duration-500 ease-out`}
                    data-parallax-group={isOddColumn ? 'odd' : 'even'}
                    key={index}
                  >
                    <div className="parallax-card grid h-full w-full rounded-[20px] bg-cover p-[8px] transition-transform duration-100 ease-out grid-stack">
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
                );
              })}
          </div>
        </div>
      </div>
      {/* section-6 */}
      <HowWeWork />
      {/* section-7 */}
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="bg-tech-we-work bg-cover bg-no-repeat py-[100px]"
      >
        <div className="flex flex-col gap-[80px]">
          <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between px-[120px]">
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
      <div className="relative mx-auto max-w-[1680px] py-[100px]">
        <div
          style={{
            backgroundImage: "url('/images/homePagev2/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="absolute inset-y-0 left-[119px] w-[1px] bg-cover"
        ></div>
        <div
          style={{
            backgroundImage: "url('/images/homePagev2/Line1.png')",
            WebkitMaskImage:
              'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
          }}
          className="-0 absolute inset-y-0 right-[119px] w-[1px] bg-cover"
        ></div>
        <div className="relative px-[120px]">
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

          <div className="grid grid-cols-3 gap-5">
            <motion.div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(${-y / 60}deg) 
              rotateY(${x / 60}deg) 
              scale(1.02)
            `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(0deg) 
              rotateY(0deg) 
              scale(1)
            `;
              }}
              style={{
                transition: 'transform 0.3s ease-out',
              }}
              className="col-start-3 row-span-2 row-start-2"
            >
              <div className="flex h-full flex-col justify-between rounded-[17px] bg-black px-[28px] py-[32px]">
                <p className="font-Inter text-[50px] font-extrabold leading-[56px] text-white">
                  Let’s Build Something Great Together
                </p>
                <button
                  onMouseEnter={handleMouseEnterContact}
                  onMouseLeave={handleMouseLeaveContact}
                  onMouseUp={handleMouseEnterContact}
                  onMouseDown={handleMouseLeaveContact}
                  type="button"
                  className="flex w-max items-center gap-1 rounded-[50px] bg-white py-[8px] pl-[16px] pr-[14px] font-Inter text-[14px] font-normal leading-tight text-black"
                >
                  Contact us
                  <AnimatedArrow hover={hoverContact} />
                </button>
              </div>
            </motion.div>
            {client &&
              client.map((item, index) => (
                <motion.div
                  key={index}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(${-y / 20}deg) 
              rotateY(${x / 20}deg) 
              scale(1.05)
            `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `
              perspective(1000px) 
              rotateX(0deg) 
              rotateY(0deg) 
              scale(1)
            `;
                  }}
                  style={{
                    transition: 'transform 0.3s ease-out',
                  }}
                >
                  <div
                    className={`rounded-[17px] p-[25px] ${item?.id === 1 ? 'bg-white shadow-card' : 'bg-[#F7F7F8] shadow-custom'} flex flex-col justify-between gap-6`}
                  >
                    <p className="line-clamp-5 font-Inter text-lg font-normal leading-7 text-[#2A2A30]">
                      {item?.message}
                    </p>
                    <div className="flex items-center justify-between gap-2.5">
                      <p className="font-Inter text-base font-normal leading-5 text-[#5E5E5E]">
                        {item?.role}
                      </p>
                      <Image
                        src={item?.avatar}
                        alt="client"
                        width={67}
                        height={67}
                        className="h-[67px] w-[67px] rounded-[12px] object-cover outline outline-[2px] -outline-offset-1 outline-[#0000001A]"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      {/* section- 9 */}
      <Faqs />
      {/* section - 10 */}
      <div className="mx-[30px]">
        <div
          style={{ backgroundSize: '100% 100%' }}
          className="mx-auto w-full max-w-[1680px] bg-contact bg-contain bg-no-repeat px-[80px] pb-[130px] pt-[140px]"
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
            <form className="flex w-full max-w-[737px] flex-col gap-10 rounded-2xl bg-[#f0f3f5]/10 px-[23px] py-[52px] backdrop-blur-sm">
              <div className="flex flex-col gap-[26px]">
                <div className="flex items-center gap-[39px]">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-Inter text-base font-normal leading-tight text-white/70 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-Inter text-base font-normal leading-tight text-white/70 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-Inter text-base font-normal leading-tight text-white/70 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-Inter text-base font-normal leading-tight text-white/70 focus:outline-none"
                />
                <textarea
                  rows={2}
                  placeholder="Description"
                  className="resize-none rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-Inter text-base font-normal leading-tight text-white/70 focus:outline-none"
                />
              </div>
              <button
                onMouseEnter={handleMouseEnterSubmit}
                onMouseLeave={handleMouseLeaveSubmit}
                onMouseUp={handleMouseEnterSubmit}
                onMouseDown={handleMouseLeaveSubmit}
                type="button"
                className="flex w-max items-center gap-1 rounded-[50px] bg-red px-5 py-2 font-Inter text-base font-normal leading-tight text-white"
              >
                Submit
                <AnimatedArrow hover={hoverSubmit} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[60px] w-full max-w-[1680px]">
        <div className="mx-auto flex max-w-[692px] flex-col items-center gap-10">
          <Image
            src={logo}
            alt="nav-logo"
            width={202}
            height={57.09}
            className="w-full max-w-[130px] xl:max-w-[150px]"
          />
          <span className="text-center font-Inter text-lg font-light leading-7 text-[#2A2A30]">
            426, 4th Floor, Swarnim Business Hub-1, opp. Global International
            school, Godrej Garden City Road, Ahmedabad, Gujarat 382470
          </span>
        </div>
      </div>
    </>
  );
};

export default HomePageV2;
