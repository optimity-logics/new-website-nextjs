'use client';
import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import styled from 'styled-components';

const HighlitedHeading = styled.h1`
  span {
    color: #e94e25;
  }
`;

const statsData = [
  { value: '5 +', label: 'Years of Excellence' },
  { value: '500 +', label: 'Happy Clients' },
  { value: '20 +', label: 'AI Specialists' },
  { value: '1000 +', label: 'Successful Projects' },
  { value: '50%', label: 'Client Retention' },
  { value: '20%', label: 'Faster Product Delivery' },
];

const WhyOptimityLogics = () => {
  return (
    <Container className="mb-10 flex flex-col items-center justify-between gap-10 md:mb-12 md:gap-12 lg:flex-row xl:mb-16 5xl:mb-[120px]">
      <div className="flex w-full flex-col items-center gap-6 md:gap-[46px] lg:max-w-[898px] lg:items-start">
        <div className="flex flex-col items-center gap-[15px] lg:items-start">
          <Button
            btnName="Why optimity logics"
            className="w-max !rounded-[42px] bg-herobtnbg bg-cover bg-no-repeat !py-2.5 px-[23px] !text-2xl !font-normal !leading-[29.05px] !text-black"
          />
          <HighlitedHeading
            className="text-center font-Inter text-[40px] font-bold leading-[44px] text-lightBlack lg:text-start 4xl:text-[60px] 4xl:leading-[65px]"
            dangerouslySetInnerHTML={{
              __html: `An <span>AI development company</span> trusted by clients across the globe!`,
            }}
          />
        </div>
        <p className="text-center font-Inter text-xl font-normal leading-7 text-primaryGray lg:text-start 4xl:pr-5">
          We&apos;re a dynamic team of millennials and Gen-Z, witnessing the
          digital era&apos;s evolution. With a cohesive approach, we develop
          fully integrated digital products, build brand identities, and drive
          marketing campaigns for optimal business growth. From concept to
          scalable solution, we bring your ideas to life with effectiveness.
        </p>
        <Button btnName="Get in Touch" className="w-max bg-orange px-[30px]" />
      </div>
      <div className="w-full max-w-[688px] rounded-[10px] bg-teambg bg-cover bg-no-repeat">
        <div className="grid w-full grid-cols-2 place-items-center justify-center gap-4 p-4 sm:py-11 lg:px-11 4xl:px-[80px] 4xl:py-[110px] 5xl:px-[122px] 5xl:py-[156px]">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="h-full w-full max-w-[214px] rounded-[16px] border-[8px] border-[#ffffffcc]"
            >
              <div className="flex h-full flex-col items-center justify-center gap-[9.39px] bg-white p-3 sm:pb-[17.39px] sm:pl-[22.81px] sm:pr-[21.92px] sm:pt-[15px]">
                <h3 className="font-Inter text-2xl font-bold leading-[38.04px] text-[#212529] sm:text-[32px]">
                  {stat.value}
                </h3>
                <span className="text-center font-Inter text-base font-semibold leading-[22.4px] text-black">
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
