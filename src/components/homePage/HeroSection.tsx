import React from 'react';
import Button from '../common/Button';
import { logoIcons } from '../utils/Constant';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Container from '../common/Container';

const HeroSection = () => {
  return (
    <div className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[100px]">
      <Container
        className="w-full bg-homepagebg bg-cover bg-no-repeat px-4 pb-[50px] pt-4 sm:px-6 sm:pb-5 md:px-8 lg:px-10"
        styleClass={{ backgroundSize: '100% 100%' }}
      >
        <div className="mx-auto flex h-full max-w-[1251px] flex-col items-center gap-5 py-8 sm:py-11 md:gap-[26px] xl:pt-16 3xl:h-[calc(100vh-265px)] 3xl:gap-[30px] 3xl:pt-[100px] 4xl:pt-[147px]">
          <Button
            btnName="24/7 optimity.AI"
            className="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg font-normal leading-5 !text-charcoalBlue sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7"
          />
          <div className="flex flex-col items-center gap-3 sm:gap-4 3xl:gap-[25px]">
            <h1 className="4xl:[50px] text-center font-Poppins text-4xl font-medium leading-[40px] tracking-[-0.16px] text-darkBlack md:text-[40px] md:leading-[44px] 3xl:text-[50px] 3xl:leading-[55px] 4xl:font-bold 5xl:text-[60px] 5xl:leading-[65px]">
              Bring Your <span className="text-gradient">App Vision</span> to
              Life,
              <br /> Anytime with <span className="text-gradient">AI.</span>
            </h1>
            <p className="max-w-[927px] text-center font-Poppins text-lg font-light leading-[1.8rem] text-[#212529] 4xl:text-[22px] 4xl:leading-[26px]">
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
      </Container>
      <div className="mx-auto max-w-[1920px] px-3">
        <div className="-mt-[37px] flex flex-col items-center gap-[25px] rounded-2xl border border-darkGray bg-black px-5 pb-[22px] pt-[30px] 5xl:rounded-[24px]">
          <span className="text-center font-Poppins text-base font-normal leading-[1.6rem] text-white md:text-lg md:leading-7">
            Trusted BY 1400+ Happy Clients, Including Fortune 400 Companies
          </span>
          <Marquee gradient={false} speed={55}>
            <div className="flex items-center justify-between last-of-type:mr-5 md:last-of-type:mr-[45px] last-of-type:xl:mr-[34px] last-of-type:4xl:mr-[69px]">
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
    </div>
  );
};

export default HeroSection;
