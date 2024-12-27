import React from 'react';
import Button from '../common/Button';
import { logoIcons } from '../utils/Constant';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Container from '../common/Container';

const HeroSection = () => {
  return (
    <div className="mb-10 h-full sm:mb-[100px]">
      <Container
        className="h-full w-full bg-homepagebg bg-cover bg-no-repeat px-4 pb-[50px] sm:px-6 sm:pb-5 md:px-8 lg:px-10"
        styleClass={{ backgroundSize: '100% 100%' }}
      >
        <div className="mx-auto flex h-full max-w-[1251px] flex-col items-center justify-center gap-5 py-8 xs:h-[calc(100vh-250px)] sm:h-[calc(100vh-205px)] sm:py-11 md:h-[calc(100vh-240px)] md:gap-[26px] xl:pt-16 3xl:h-[calc(100vh-260px)] 3xl:gap-[30px] 3xl:pt-[100px] 4xl:pt-[147px]">
          <Button
            btnName="24/7 optimity.AI"
            className="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg !font-normal leading-5 !text-charcoalBlue sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7 4xl:!text-[28px] 4xl:!leading-[33.89px]"
          />
          <div className="flex flex-col items-center gap-3 sm:gap-4 3xl:gap-[25px]">
            <h1 className="4xl:[50px] text-center font-Inter text-[35px] font-bold leading-[40px] tracking-[-0.16px] text-darkBlack sm:text-[45px] sm:leading-[50px] 3xl:text-[50px] 3xl:leading-[55px] 5xl:text-[60px] 5xl:leading-[65px]">
              Bring Your <span className="text-gradient">App Vision</span> to
              Life,
              <br /> Anytime with <span className="text-gradient">AI.</span>
            </h1>
            <p className="max-w-[927px] text-center font-Inter text-lg font-normal leading-6 text-charcoalBlue sm:text-xl 4xl:text-[22px] 4xl:leading-[26px]">
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
      <Container>
        <div className="-mt-[37px] flex flex-col items-center gap-5 rounded-[30px] border border-darkGray bg-black p-6 xxl:gap-[35px] xxl:py-[35.5px] 3xl:px-8 5xl:px-[60px]">
          <span className="text-center font-Poppins text-lg font-medium leading-6 text-white md:text-[22px] md:leading-[33px]">
            Trusted BY 1400+ Happy Clients, Including Fortune 400 Companies
          </span>
          <Marquee gradient={false} speed={65}>
            <div className="flex items-center justify-between gap-5 last-of-type:mr-5 md:gap-[45px] md:last-of-type:mr-[45px] xl:gap-[34px] last-of-type:xl:mr-[34px] 4xl:gap-[69px] last-of-type:4xl:mr-[69px]">
              {logoIcons &&
                logoIcons.map((item, index) => (
                  <div key={index}>
                    <Image
                      src={item}
                      alt="icon"
                      width={60}
                      height={38}
                      className="h-[38px] w-[80px] object-contain"
                    />
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
