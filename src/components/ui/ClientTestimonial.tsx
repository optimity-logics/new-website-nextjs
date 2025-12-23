import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { homePageData } from '../utils/page-data/homePage';

type ClientTestimonialProps = {
  isDark?: boolean;
};

const ClientTestimonial = ({ isDark }: ClientTestimonialProps) => {
  return (
    <div
      style={
        isDark
          ? { backgroundSize: '100% 100%', backgroundColor: '#000' }
          : undefined
      }
      className="bg-tech-we-work bg-cover bg-no-repeat"
    >
      <div className="relative mx-auto max-w-[1680px] py-[60px] 4xl:py-[100px]">
        {isDark ? (
          <>
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
          </>
        ) : (
          <>
            <div
              style={{
                backgroundImage: "url('/images/homePagev2/Line1.png')",
                WebkitMaskImage:
                  'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
              }}
              className="absolute inset-y-0 left-[15px] w-[1px] bg-cover sm:left-[22px] md:left-[31px] xl:left-[39px] 3xl:left-[119px]"
            ></div>
            <div
              style={{
                backgroundImage: "url('/images/homePagev2/Line1.png')",
                WebkitMaskImage:
                  'linear-gradient(90deg, rgba(102, 102, 102, 0.11) 0.6%, #666666 50.78%, rgba(102, 102, 102, 0.11) 100%)',
              }}
              className="-0 absolute inset-y-0 right-[15px] w-[1px] bg-cover sm:right-[22px] md:right-[31px] xl:right-[39px] 3xl:right-[119px]"
            ></div>
          </>
        )}
        <div className="relative px-4 sm:px-6 md:px-8 xl:px-10 3xl:px-[120px]">
          {isDark ? (
            <>
              <div className="absolute inset-x-0 -top-[3px] h-[1px] border-1 border-dashed border-gray opacity-30"></div>
              <div className="absolute inset-x-0 bottom-[-3px] !h-[1px] border-1 border-dashed border-gray opacity-30"></div>
            </>
          ) : (
            <>
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
            </>
          )}

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
              className="group relative row-start-3 overflow-hidden md:col-start-2 md:row-span-2 md:row-start-4 xl:col-start-3 xl:row-start-2"
            >
              <div className="pointer-events-none absolute inset-0 left-1/2 top-0 z-40 hidden lg:block">
                <div
                  className={`absolute bottom-1 h-[30vw] w-[30vw] scale-100 rounded-full border-1 transition-transform delay-0 duration-500 ease-out group-hover:scale-[0.95] ${isDark ? 'border-white/100' : 'border-optDesc/80'}`}
                ></div>
                <div
                  className={`absolute bottom-1 h-[30vw] w-[30vw] scale-[1.1] rounded-full border-1 transition-transform delay-100 duration-500 ease-out group-hover:scale-[1.05] ${isDark ? 'border-white/75' : 'border-optDesc/60'}`}
                ></div>
                <div
                  className={`absolute bottom-1 h-[30vw] w-[30vw] scale-[1.2] rounded-full border-1 transition-transform delay-200 duration-500 ease-out group-hover:scale-[1.15] ${isDark ? 'border-white/50' : 'border-optDesc/50'}`}
                ></div>
                <div
                  className={`absolute bottom-1 h-[30vw] w-[30vw] scale-[1.3] rounded-full border-1 transition-transform delay-300 duration-500 ease-out group-hover:scale-[1.25] ${isDark ? 'border-white/25' : 'border-optDesc/25'}`}
                ></div>
                <div
                  className={`absolute bottom-1 h-[30vw] w-[30vw] scale-[1.4] rounded-full border-1 transition-transform delay-500 duration-500 ease-out group-hover:scale-[1.35] ${isDark ? 'border-white/10' : 'border-optDesc/10'}`}
                ></div>
              </div>
              <div
                className={`flex h-full flex-col justify-between gap-14 rounded-[17px] md:px-[28px] md:py-[32px] ${isDark ? 'bg-white/10 p-5 shadow-lg backdrop-blur-lg' : 'bg-snowGray'}`}
              >
                <p
                  className={`${isDark ? 'text-white' : 'text-optDesc'} font-opt text-2xl font-extrabold leading-8 md:text-3xl md:leading-9 4xl:text-[50px] 4xl:leading-[56px]`}
                >
                  {homePageData?.contactUsCardTitle}
                </p>
                <Button
                  btnName={homePageData?.contactUsCardBtn}
                  redirectionLink={homePageData?.contactUsCardBtnLink}
                  isBackgroundLight={isDark ? true : false}
                />
              </div>
            </motion.div>
            {homePageData?.clientReview &&
              homePageData?.clientReview.map((item, index) => (
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
                    className={`flex h-full flex-col justify-between gap-6 rounded-[17px] bg-snowGray p-5 shadow-custom md:p-[25px]`}
                  >
                    <p className="line-clamp-6 font-opt text-sm font-normal text-optDesc">
                      {item?.message}
                    </p>
                    <div className="flex items-center justify-between gap-2.5">
                      <p className="font-opt text-base font-normal text-iconSubtle">
                        {item?.role}
                      </p>
                      <Image
                        src={item?.avatar}
                        alt="client"
                        width={67}
                        height={67}
                        loading="lazy"
                        className="h-[67px] w-[67px] rounded-[12px] object-cover outline outline-[2px] -outline-offset-1 outline-black-150-alpha"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
