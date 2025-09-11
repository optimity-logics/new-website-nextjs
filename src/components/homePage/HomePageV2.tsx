'use client';
import React, { useEffect, useRef, useState } from 'react';
import heroImg from '../../../public/images/homePagev2/logov3.svg';
import logo from '../../../public/svg/logo.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import shape1 from '../../../public/images/homePagev2/shape-1.png';
import shape2 from '../../../public/images/homePagev2/shape-2.png';
import shape3 from '../../../public/images/homePagev2/shape-3.png';
import shape4 from '../../../public/images/homePagev2/shape-4.png';
import arrow from '../../../public/images/homePagev2/arrow-black.png';
import ellips1 from '../../../public/images/homePagev2/ellips1.png';
import ellipse2 from '../../../public/images/homePagev2/ellipse2.png';
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
import { Autoplay, Navigation } from 'swiper/modules';
import Faqs from './Faqs';
import AnimatedArrow from '../common/AnimatedArrow';
import Container from '../ui/Container';

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
  const logos = logoIcons.map((image) => image?.src);
  console.log(logoIcons.length);
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
      <div
        style={{
          backgroundImage:
            'radial-gradient(154.86% 76.83% at 50% 22.26%,rgb(247 247 248/.4) 8.98%,#F7F7F8 45.99%)',
        }}
      >
        <div className="bg-heroBg bg-cover bg-center bg-no-repeat lg:bg-full">
          <Container className="relative py-[50px] lg:py-[100px] 3xl:py-[140px] 4xl:py-[184px]">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.8,
                ease: 'easeIn',
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
              className="absolute left-[10%] top-[30px] hidden lg:block 3xl:top-[50px]"
            >
              <Image
                src={shape1}
                alt="shape-1"
                width={96}
                height={84}
                className="max-w-[50px] 3xl:max-w-[65px] 4xl:max-w-max"
              />
            </motion.div>
            <motion.div
              animate={{ x: [0, -20, 0] }}
              transition={{
                duration: 1.8,
                ease: 'easeIn',
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
              className="absolute bottom-[20px] left-[10%] hidden lg:block 3xl:bottom-[70px] 3xl:left-[20%]"
            >
              <Image
                src={shape2}
                alt="shape-1"
                width={96}
                height={84}
                className="max-w-[50px] 3xl:max-w-[65px] 4xl:max-w-max"
              />
            </motion.div>
            <motion.div
              animate={{ rotate: 90 }}
              transition={{
                duration: 0.6,
                ease: 'linear',
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
              className="absolute right-[8%] top-[30px] hidden lg:block 3xl:top-[80px]"
            >
              <Image
                src={shape3}
                alt="shape-1"
                width={70}
                height={64}
                className="max-w-[40px] 3xl:max-w-[60px] 4xl:max-w-max"
              />
            </motion.div>
            <motion.div
              animate={{ x: [0, -20, 0] }}
              transition={{
                duration: 1.8,
                ease: 'easeIn',
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
              className="absolute bottom-[20px] right-[3%] hidden lg:block 3xl:bottom-[50px]"
            >
              <Image
                src={shape4}
                alt="shape-1"
                width={96}
                height={84}
                className="max-w-[50px] 3xl:max-w-[75px] 4xl:max-w-max"
              />
            </motion.div>
            <div className="flex flex-col justify-between gap-10 lg:flex-row xl:items-center 3xl:gap-[60px]">
              <div className="flex w-full max-w-[560px] flex-col gap-[50px] 4xl:max-w-[860px]">
                <div className="flex flex-col gap-[20px]">
                  <h1 className="line-clamp-1 rounded-full border-1 border-[#D6DDE0] bg-[#F7F9FA] px-4 py-1 font-base text-sm leading-7 text-primary shadow-default duration-500 sm:w-max">
                    Top Web and Mobile Application Development Services Company
                  </h1>
                  <h2 className="whitespace-pre-line font-base text-[40px] font-medium leading-tight text-primary lg:text-[45px] 3xl:text-[60px]">
                    Bring Your
                    <br className="hidden xs:block" />
                    <span className="text-red">App Vision </span>to Life,
                    <br className="hidden xs:block" /> Anytime with AI.
                  </h2>
                  <p className="w-full max-w-[800px] font-base text-lg font-normal leading-6 text-primary opacity-50">
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
                  className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-base text-[14px] font-normal leading-tight text-white"
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
                <div className="relative z-30 mx-auto w-max">
                  <Image
                    src={ellips1}
                    alt=""
                    width={300}
                    height={300}
                    className="absolute -left-[17%] -top-[20%] -z-10 max-w-[200px] object-contain xl:max-w-full"
                  />
                  <Image
                    src={ellips1}
                    alt=""
                    width={300}
                    height={300}
                    className="absolute -bottom-[16%] -right-[10%] -z-10 max-w-[200px] object-contain xl:-right-[20%] xl:max-w-full"
                  />
                  <Image
                    src={ellipse2}
                    alt=""
                    width={400}
                    height={400}
                    className="absolute -bottom-[18%] -left-[19%] -z-10 max-w-[200px] object-contain xl:max-w-full"
                  />
                  <Image
                    src={ellipse2}
                    alt=""
                    width={400}
                    height={400}
                    className="absolute -top-[8%] right-[6%] -z-10 max-w-[200px] object-contain xl:max-w-full"
                  />
                  <Image
                    src={heroImg}
                    alt="hero-img"
                    width={450}
                    height={450}
                    className="max-w-[300px] 3xl:max-w-[350px] 4xl:max-w-max"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </div>
      </div>
      {/* logo */}
      <div
        style={{
          boxShadow:
            '0 -6px 11px 0px rgb(0 0 0 / 0.05),0 0 3px -3px rgb(0 0 0 / 0.2)',
        }}
        className="bg-white pt-10"
      >
        <Container>
          <div className="flex flex-col items-center gap-[25px] xl:flex-row 5xl:rounded-[24px]">
            <span className="max-w-[400px] text-center font-base text-base font-normal leading-[1.6rem] text-primary md:text-lg md:leading-7 xl:text-start">
              Trusted BY 1400+ Happy Clients, Including Fortune 400 Companies
            </span>
            <LogoAnimation logo={logos} />
          </div>
        </Container>
      </div>
      {/* section-3 */}
      <div
        style={{ backgroundSize: '100% 100%' }}
        className="my-[60px] bg-our-expertise bg-cover bg-no-repeat 4xl:my-[100px]"
      >
        <div className="flex flex-col gap-8">
          <Container>
            <h3 className="font-base text-[35px] font-medium leading-10 text-primary 4xl:text-[48px] 4xl:leading-[52px]">
              Our Expertise
            </h3>
          </Container>
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.2}
              modules={[Autoplay]}
              centeredSlides={true}
              breakpoints={{
                540: {
                  slidesPerView: 1.6,
                  spaceBetween: 30,
                },
                1439: {
                  slidesPerView: 1.8,
                  spaceBetween: 50,
                },
              }}
              speed={1000}
              loop={false}
            >
              {ourExpertise &&
                ourExpertise.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col-reverse items-center gap-6 xl:flex-row 4xl:gap-[65px]">
                      <div className="flex w-full max-w-[799px] flex-col gap-5 xl:gap-[40px]">
                        <div className="flex flex-col gap-4 xl:gap-5">
                          <h5 className="font-base text-2xl font-medium leading-7 text-primary xl:text-[28px] xl:leading-[32px]">
                            {item?.title}
                          </h5>
                          <p className="font-base text-base font-normal leading-6 text-iconSubtle opacity-50 xl:text-[18px]">
                            {item?.description}
                          </p>
                        </div>
                        <button
                          onMouseEnter={handleMouseEnterViewAll}
                          onMouseLeave={handleMouseLeaveViewAl}
                          onMouseUp={handleMouseEnterViewAll}
                          onMouseDown={handleMouseLeaveViewAl}
                          type="button"
                          className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] py-[8px] pl-[16px] pr-[14px] font-base text-[14px] font-normal leading-tight text-white"
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
      <Container className="mb-[60px] w-full max-w-[1680px] 4xl:mb-[100px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-[45px]">
          <div className="rounded-xl bg-white px-[12px] pb-3 pt-[8px] shadow-work-card xl:rounded-[38px] xl:px-[32px] xl:pb-[20px]">
            <div className="flex flex-col gap-3 xl:gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-1 bg-cover bg-no-repeat py-2.5 font-base text-[38px] font-medium leading-tight text-primary lg:py-5 xl:text-[48px] xl:leading-[52px] 4xl:py-[40px]"
              >
                20+
              </div>
              <span className="text-center font-base text-base font-normal leading-[24px] text-primary xl:text-[18px]">
                Happy Clients
              </span>
            </div>
          </div>
          <div className="rounded-xl bg-white px-[12px] pb-3 pt-[8px] shadow-work-card xl:rounded-[38px] xl:px-[32px] xl:pb-[20px]">
            <div className="flex flex-col gap-3 xl:gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-2 bg-cover bg-no-repeat py-2.5 font-base text-[38px] font-medium leading-tight text-primary lg:py-5 xl:text-[48px] xl:leading-[52px] 4xl:py-[40px]"
              >
                50+
              </div>
              <span className="text-center font-base text-base font-normal leading-[24px] text-primary xl:text-[18px]">
                Finished Projects
              </span>
            </div>
          </div>
          <div className="rounded-xl bg-white px-[12px] pb-3 pt-[8px] shadow-work-card xl:rounded-[38px] xl:px-[32px] xl:pb-[20px]">
            <div className="flex flex-col gap-3 xl:gap-[20px]">
              <div
                style={{ backgroundSize: '100% 100%' }}
                className="flex w-full items-center justify-center bg-card-3 bg-cover bg-no-repeat py-2.5 font-base text-[38px] font-medium leading-tight text-primary lg:py-5 xl:text-[48px] xl:leading-[52px] 4xl:py-[40px]"
              >
                10+
              </div>
              <span className="text-center font-base text-base font-normal leading-[24px] text-primary xl:text-[18px]">
                Skilled Experts
              </span>
            </div>
          </div>
        </div>
      </Container>
      {/* section-5 */}
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="bg-tech-we-work bg-cover bg-no-repeat"
      >
        <Container className="flex flex-col gap-8 py-[60px] 4xl:gap-[60px] 4xl:py-[100px]">
          <h3 className="font-base text-[35px] font-medium leading-10 text-white 4xl:text-[48px] 4xl:leading-[52px]">
            Technologies we work with
          </h3>
          <div
            ref={(el) => addToRefs(el, 0)}
            className="hidden h-full w-full grid-cols-6 gap-6 3xl:grid"
          >
            {techWeWork &&
              techWeWork.map((item, index) => {
                const isOddColumn = index % 2 === 0;
                return (
                  <div
                    className={`w-full rounded-[24px] bg-overly bg-cover bg-no-repeat transition-transform duration-500 ease-out`}
                    data-parallax-group={isOddColumn ? 'odd' : 'even'}
                    key={index}
                  >
                    <div className="parallax-card grid h-full w-full rounded-[20px] bg-cover p-[8px] transition-transform duration-100 ease-out grid-stack">
                      <Image
                        src={item?.img}
                        alt="technology"
                        width={254}
                        height={339}
                        className="aspect-auto"
                      />
                      <span className="mt-auto p-[14px] font-base text-[20px] font-medium leading-[24px] text-white">
                        {item?.heading}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
          <div
            ref={(el) => addToRefs(el, 0)}
            className="hide-scrollbar flex h-full w-full gap-6 overflow-x-auto 3xl:hidden"
          >
            {techWeWork &&
              techWeWork.map((item, index) => (
                <div
                  className={`rounded-[24px] bg-overly bg-cover bg-no-repeat transition-transform duration-500 ease-out ${index % 2 === 0 ? 'mt-4' : ''} h-max`}
                  key={index}
                >
                  <div className="parallax-card grid h-full w-[200px] rounded-[20px] bg-cover p-[8px] transition-transform duration-100 ease-out grid-stack">
                    <Image
                      src={item?.img}
                      alt="technology"
                      width={254}
                      height={339}
                      className="aspect-auto"
                    />
                    <span className="mt-auto p-[14px] font-base text-[20px] font-medium leading-[24px] text-white">
                      {item?.heading}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </div>
      {/* section-6 */}
      <div className="py-[60px] 4xl:py-[100px]">
        <div className="flex flex-col gap-8 3xl:gap-10 4xl:gap-[80px]">
          <Container className="flex items-center justify-between">
            <h4 className="font-base text-[35px] font-medium leading-10 text-primary 4xl:text-[48px] 4xl:leading-[52px]">
              Successfully deployed projects
            </h4>
            <div className="flex w-max items-center gap-10">
              <button className="custom-prev" ref={prevRef}>
                <Image
                  src={arrow}
                  alt="arrow"
                  width={24}
                  height={24}
                  className="max-w-4 rotate-180 xxl:max-w-full"
                />
              </button>
              <button className="custom-next" ref={nextRef}>
                <Image
                  src={arrow}
                  alt="arrow"
                  width={24}
                  height={24}
                  className="max-w-4 xxl:max-w-full"
                />
              </button>
            </div>
          </Container>
          <div className="w-full">
            <Swiper
              spaceBetween={10}
              slidesPerView={1.2}
              modules={[Autoplay, Navigation]}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              centeredSlides={true}
              breakpoints={{
                540: {
                  slidesPerView: 1.6,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 1.9,
                  spaceBetween: 30,
                },
                1439: {
                  slidesPerView: 2.5,
                  spaceBetween: 60,
                },
              }}
              speed={1000}
              loop={false}
            >
              {projectWeDone &&
                projectWeDone.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justify-between gap-[30px] rounded-xl bg-[#f0f3f5]/70 p-4 lg:flex-row xl:p-6">
                      <h6 className="w-max font-base text-xl font-medium leading-6 text-primary 4xl:text-[33px] 4xl:leading-[38px]">
                        {item?.projectName}
                      </h6>
                      <div className="relative h-0 w-full pb-[50%]">
                        <Image
                          src={item?.img}
                          alt="image"
                          fill
                          className="h-full w-full rounded-[10px] object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* ssection - 8 */}
      <div
        style={{ backgroundSize: '100% 100%', backgroundColor: '#000' }}
        className="bg-tech-we-work bg-cover bg-no-repeat"
      >
        <div className="relative mx-auto max-w-[1680px] py-[60px] 4xl:py-[100px]">
          <div
            style={{
              backgroundImage: "url('/images/homePagev2/Line1.png')",
            }}
            className="absolute inset-y-0 left-[15px] w-[1px] bg-cover sm:left-[22px] md:left-[31px] xl:left-[39px] 3xl:left-[119px]"
          ></div>
          <div
            style={{
              backgroundImage: "url('/images/homePagev2/Line1.png')",
            }}
            className="-0 absolute inset-y-0 right-[15px] w-[1px] bg-cover sm:right-[22px] md:right-[31px] xl:right-[39px] 3xl:right-[119px]"
          ></div>
          <div className="relative px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-[120px]">
            <div className="absolute inset-x-0 -top-[3px] h-[1px] border-1 border-dashed border-gray opacity-30"></div>
            <div className="absolute inset-x-0 bottom-[-3px] !h-[1px] border-1 border-dashed border-gray opacity-30"></div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                className="row-start-3 md:col-start-2 md:row-span-2 md:row-start-4 xl:col-start-3 xl:row-start-2"
              >
                <div className="flex h-full flex-col justify-between gap-14 rounded-[17px] bg-white/10 p-5 backdrop-blur-lg md:px-[28px] md:py-[32px]">
                  <p className="font-base text-2xl font-extrabold leading-8 text-white md:text-3xl md:leading-9 4xl:text-[50px] 4xl:leading-[56px]">
                    Let’s Build Something Great Together
                  </p>
                  <button
                    onMouseEnter={handleMouseEnterContact}
                    onMouseLeave={handleMouseLeaveContact}
                    onMouseUp={handleMouseEnterContact}
                    onMouseDown={handleMouseLeaveContact}
                    type="button"
                    className="flex w-max items-center gap-1 rounded-[50px] bg-white py-[8px] pl-[16px] pr-[14px] font-base text-[14px] font-normal leading-tight text-primary"
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
                      className={`rounded-[17px] p-5 md:p-[25px] ${item?.id === 1 ? 'bg-white shadow-card' : 'bg-[#F7F7F8] shadow-custom'} flex flex-col justify-between gap-6`}
                    >
                      <p className="line-clamp-5 font-base text-base font-normal leading-6 text-secondary opacity-80 md:text-lg md:leading-7">
                        {item?.message}
                      </p>
                      <div className="flex items-center justify-between gap-2.5">
                        <p className="font-base text-base font-normal leading-5 text-subtle">
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
      </div>
      {/* section- 9 */}
      <Faqs />
      {/* section - 10 */}
      <div className="xl:mx-[30px]">
        <Container
          styleClass={{ backgroundSize: '100% 100%' }}
          className="mb-[60px] bg-black bg-tech-we-work bg-no-repeat py-[70px] lg:bg-contain xl:mb-0 xl:bg-transparent xl:bg-contact xl:pb-[130px] xl:pt-[140px] 3xl:px-[80px]"
        >
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div className="flex w-full max-w-[570px] flex-col gap-3 xl:gap-5">
              <h4 className="font-base text-[45px] font-medium leading-tight text-white 4xl:text-[60px] 4xl:leading-[65px]">
                We’re Here to <span className="text-red"> Help, Anytime.</span>
              </h4>
              <p className="font-base text-[18px] font-normal leading-tight text-subtle lg:pr-[76px]">
                Our support team is ready to provide prompt solutions and
                guidance to ensure your experience with us is seamless and
                satisfying.
              </p>
            </div>
            <form className="flex w-full max-w-full flex-col gap-10 rounded-2xl bg-[#f0f3f5]/10 p-6 shadow-xl backdrop-blur-sm lg:max-w-[737px] xl:px-[23px] xl:py-[52px] xl:shadow-none">
              <div className="flex flex-col gap-[26px]">
                <div className="flex items-center gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-base text-base font-normal leading-tight text-white/70 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-base text-base font-normal leading-tight text-white/70 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-base text-base font-normal leading-tight text-white/70 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-base text-base font-normal leading-tight text-white/70 focus:outline-none"
                />
                <textarea
                  rows={2}
                  placeholder="Description"
                  className="resize-none rounded-[20px] border border-[#CCCCCC5C] bg-[#CCCCCC5C]/30 px-4 py-5 font-base text-base font-normal leading-tight text-white/70 focus:outline-none"
                />
              </div>
              <button
                onMouseEnter={handleMouseEnterSubmit}
                onMouseLeave={handleMouseLeaveSubmit}
                onMouseUp={handleMouseEnterSubmit}
                onMouseDown={handleMouseLeaveSubmit}
                type="button"
                className="flex w-max items-center gap-1 rounded-[50px] bg-red px-5 py-2 font-base text-base font-normal leading-tight text-white"
              >
                Submit
                <AnimatedArrow hover={hoverSubmit} />
              </button>
            </form>
          </div>
        </Container>
      </div>
      <Container className="mb-[60px]">
        <div className="mx-auto flex max-w-[692px] flex-col items-center gap-6 4xl:gap-10">
          <Image
            src={logo}
            alt="nav-logo"
            width={202}
            height={57.09}
            className="w-full max-w-[130px] xl:max-w-[150px]"
          />
          <span className="text-center font-base text-lg font-normal leading-6 text-secondary">
            426, 4th Floor, Swarnim Business Hub-1, opp. Global International
            school, Godrej Garden City Road, Ahmedabad, Gujarat 382470
          </span>
        </div>
      </Container>
    </>
  );
};

export default HomePageV2;
