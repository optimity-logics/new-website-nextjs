import React from 'react';
import Button from '../common/Button';
import { logoIcons } from '../utils/Constant';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col bg-homepagebg bg-cover bg-no-repeat px-4 pb-[50px] sm:px-6 sm:pb-[100px] md:px-8 lg:px-10">
      <div className="absolute -bottom-[1px] left-0 h-[50px] w-full bg-gradient-to-t from-white/100 to-transparent backdrop-blur-sm sm:h-[100px]"></div>

      <div className="mx-auto flex max-w-[1251px] flex-col items-center gap-5 py-8 sm:py-11 md:gap-[26px] xl:py-16 2xl:gap-[30px] 2xl:py-[100px] 3xl:py-[155px]">
        <Button
          btnName="24/7 optimity.AI"
          className="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg !font-normal leading-5 !text-charcoalBlue sm:!text-xl sm:!leading-6 2xl:text-2xl 2xl:leading-7 3xl:!text-[28px] 3xl:!leading-[33.89px]"
        />
        <div className="flex flex-col items-center gap-3 sm:gap-4 2xl:gap-[25px]">
          <h1 className="2xl:[70px] text-center font-Inter text-[45px] font-bold leading-[50px] tracking-[-0.16px] text-darkBlack sm:text-[50px] sm:leading-[55px] md:text-[60px] md:leading-[65px] xl:text-[65px] xl:leading-[70px] 2xl:leading-[76px] 3xl:text-[90px] 3xl:leading-[100px]">
            Bring Your <span className="text-lightBlue">App Vision</span> to
            Life, Anytime with <span className="text-lightBlue">AI.</span>
          </h1>
          <p className="max-w-[927px] text-center font-Inter text-xl font-normal leading-6 text-charcoalBlue 3xl:text-[22px] 3xl:leading-[33px]">
            We&nbsp;re a full-stack agency specializing in digital
            transformation. Crafting experiences for startups&apos; SMEs&apos;
            and Fortune 500 companies.
          </p>
        </div>
        <Button
          btnName="Learn More"
          className="bg-lightBlue px-[30px] lg:px-10 2xl:px-12 3xl:px-[54px]"
        />
      </div>

      <div className="mx-auto flex w-full max-w-[1587px] flex-wrap items-center gap-5 rounded-[20px] border border-darkGray bg-white p-6 py-8 sm:px-8 md:gap-[45px] lg:px-12 xl:gap-[34px] xl:py-10 3xl:flex-nowrap 3xl:gap-[69px] 3xl:rounded-[200px] 3xl:px-[60px] 3xl:py-[53px]">
        {logoIcons &&
          logoIcons.map((item, index) => (
            <div
              key={index}
              className="aspect-w-1 aspect-h-1 w-[100px] max-w-max sm:w-[120px] 2xl:w-full"
            >
              <Image src={item} alt="icon" className="h-auto w-max" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeroSection;
