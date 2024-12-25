import React from 'react';
import Button from '../common/Button';
import { logoIcons } from '../utils/Constant';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Container from '../common/Container';

const HeroSection = () => {
  return (
    // <div className="h-[calc(100vh-80px)]">
    <Container className="mb-4 flex h-full w-full flex-col bg-herobg bg-cover bg-no-repeat px-4 pb-[50px] sm:mb-[100px] sm:px-6 sm:pb-5 md:px-8 lg:px-10">
      {/* <div className="absolute bottom-0 left-0 h-[50px] w-full bg-gradient-to-t from-white/100 to-transparent backdrop-blur-sm sm:h-[100px]"></div> */}

      <div className="mx-auto flex h-full max-w-[1251px] flex-col items-center gap-5 py-8 sm:py-11 md:gap-[26px] xl:pb-[237px] xl:pt-16 3xl:gap-[30px] 3xl:pt-[100px] 4xl:pt-[147px]">
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

      <div className="-mt-[35px] flex flex-col items-center gap-[35px] rounded-[30px] border border-darkGray bg-black p-6 py-[35.5px] 3xl:px-8 5xl:px-[60px]">
        <span className="text-center font-Poppins text-[22px] font-medium leading-[33px] text-white">
          Trusted BY 1400+ Happy Clients, Including Fortune 400 Companies
        </span>
        <Marquee gradient={false} speed={65}>
          <div className="flex items-center justify-between gap-5 last-of-type:mr-5 md:gap-[45px] md:last-of-type:mr-[45px] xl:gap-[34px] last-of-type:xl:mr-[34px] 4xl:gap-[69px] last-of-type:4xl:mr-[69px]">
            {logoIcons &&
              logoIcons.map((item, index) => (
                <div
                  key={index}
                  className={`aspect-w-1 aspect-h-1 w-[100px] max-w-max sm:w-[120px] 4xl:w-[170px] 5xl:w-full`}
                >
                  <Image src={item} alt="icon" className="h-auto w-max" />
                </div>
              ))}
          </div>
        </Marquee>
      </div>
    </Container>
    // </div>
  );
};

export default HeroSection;
