import React from 'react';
import Button from '../common/Button';
import { logoIcons } from '../utils/Constant';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col bg-homepagebg bg-cover bg-no-repeat pb-[50px] sm:pb-[100px]">
      <div className="absolute bottom-0 left-0 h-[50px] w-full bg-gradient-to-t from-white/100 to-transparent backdrop-blur-sm sm:h-[100px]"></div>

      <div className="mx-auto flex max-w-[1251px] flex-col items-center gap-5 px-4 py-8 sm:px-6 sm:py-11 md:gap-[26px] md:px-8 lg:px-10 xl:py-16 3xl:gap-[30px] 3xl:py-[100px] 4xl:py-[155px]">
        <Button
          btnName="24/7 optimity.AI"
          className="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg !font-normal leading-5 !text-charcoalBlue sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7 4xl:!text-[28px] 4xl:!leading-[33.89px]"
        />
        <div className="flex flex-col items-center gap-3 sm:gap-4 3xl:gap-[25px]">
          <h1 className="4xl:[70px] text-center font-Inter text-[45px] font-bold leading-[50px] tracking-[-0.16px] text-darkBlack sm:text-[50px] sm:leading-[55px] md:text-[60px] md:leading-[65px] 3xl:text-[65px] 3xl:leading-[70px] 4xl:leading-[76px] 5xl:text-[90px] 5xl:leading-[100px]">
            Bring Your <span className="text-gradient">App Vision</span> to
            Life, Anytime with <span className="text-gradient">AI.</span>
          </h1>
          <p className="max-w-[927px] text-center font-Inter text-xl font-normal leading-6 text-charcoalBlue 4xl:text-[22px] 4xl:leading-[33px]">
            We&nbsp;re a full-stack agency specializing in digital
            transformation. Crafting experiences for startups&apos; SMEs&apos;
            and Fortune 500 companies.
          </p>
        </div>
        <Button
          btnName="Learn More"
          className="bg-lightBlue px-[30px] lg:px-10 3xl:px-12 4xl:px-[54px]"
        />
      </div>
      {/* 
      <div className="mx-auto flex w-full max-w-[1587px] flex-wrap items-center rounded-[20px] border border-darkGray bg-white p-6 py-8 sm:px-8 lg:px-12 xl:py-10 4xl:flex-nowrap 4xl:rounded-[200px] 4xl:px-[60px] 4xl:py-[53px]"> */}
      <Marquee gradient={false} speed={65}>
        <div className="flex items-center justify-between gap-5 last-of-type:mr-5 md:gap-[45px] md:last-of-type:mr-[45px] xl:gap-[34px] last-of-type:xl:mr-[34px] 4xl:gap-[69px] last-of-type:4xl:mr-[69px]">
          {logoIcons &&
            logoIcons.map((item, index) => (
              <div
                key={index}
                className={`aspect-w-1 aspect-h-1 w-[100px] max-w-max sm:w-[120px] xxl:w-[170px] 3xl:w-full`}
              >
                <Image src={item} alt="icon" className="h-auto w-max" />
              </div>
            ))}
        </div>
      </Marquee>
    </div>
    // </div>
  );
};

export default HeroSection;
