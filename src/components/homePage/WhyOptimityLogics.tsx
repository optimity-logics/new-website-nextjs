'use client';
import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import styled from 'styled-components';
import { workingData } from '../utils/Constant';

const HighlitedHeading = styled.h1`
  span {
    color: #e94e25;
  }
`;

const WhyOptimityLogics = () => {
  return (
    <Container className="mb-10 flex flex-col items-center justify-between gap-5 md:mb-12 lg:flex-row xl:mb-16 xl:gap-10 5xl:mb-[120px] 5xl:gap-12">
      <div className="flex w-full flex-col items-center gap-6 md:gap-8 lg:max-w-[898px] lg:items-start 3xl:gap-10">
        <div className="flex flex-col items-center gap-[46px] lg:items-start">
          <Button
            btnName="Why optimity logics"
            className="!rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !px-[23px] !py-[10px] !text-lg font-normal leading-5 !text-primary sm:!text-xl sm:!leading-6 3xl:text-2xl 3xl:leading-7"
          />
          <HighlitedHeading
            className="font-base text-[26px] font-medium capitalize leading-7 text-lightBlack md:text-4xl md:leading-10 lg:text-start 3xl:text-[40px] 3xl:leading-[44px] 5xl:text-[50px] 5xl:font-semibold 5xl:leading-[54px]"
            dangerouslySetInnerHTML={{
              __html: `An <span>AI development company</span> trusted by clients across the globe!`,
            }}
          />
        </div>
        <p className="text-center font-base text-base font-normal leading-[1.6rem] text-[#192020] sm:text-xl sm:leading-7 lg:text-start 4xl:pr-5">
          We&apos;re a dynamic team of millennials and Gen-Z, witnessing the
          digital era&apos;s evolution. With a cohesive approach, we develop
          fully integrated digital products, build brand identities, and drive
          marketing campaigns for optimal business growth. From concept to
          scalable solution, we bring your ideas to life with effectiveness.
        </p>
        <Button btnName="Get in Touch" className="w-max bg-orange px-[30px]" />
      </div>
      <div className="w-full max-w-[688px] rounded-[10px] bg-teambg bg-cover bg-no-repeat">
        <div className="grid w-full grid-cols-2 place-items-center justify-center gap-4 p-4 sm:py-11 lg:px-14 3xl:px-24 4xl:px-[100px] 4xl:py-20">
          {workingData.map((stat, index) => (
            <div
              key={index}
              className="h-full w-full max-w-[214px] rounded-[16px] border-[8px] border-[#ffffffcc]"
            >
              <div className="flex h-full flex-col items-center justify-center gap-1.5 bg-white p-3 md:gap-[9.39px] xl:pb-[17.39px] xl:pl-[22.81px] xl:pr-[21.92px] xl:pt-[15px]">
                <h3 className="font-base text-2xl font-bold text-[#212529] xl:text-3xl xl:leading-8 5xl:text-[32px] 5xl:leading-[38.04px]">
                  {stat.value}
                </h3>
                <span className="text-center font-base text-sm font-semibold leading-4 text-primary md:text-base md:leading-[22.4px]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhyOptimityLogics;
