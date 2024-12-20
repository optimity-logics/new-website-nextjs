import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import Image from 'next/image';
import { howWeWorkData } from '../utils/Constant';
import msgframe from '../../../public/images/msgframe.png';

const HowWeWork = () => {
  return (
    <Container className="bg-sectionBg bg-cover bg-right bg-no-repeat py-10 md:mb-10 xl:mb-16 3xl:mb-[120px] 3xl:px-[244.5px] 3xl:py-20">
      <div className="flex flex-col gap-10 lg:gap-[50px] 3xl:gap-[70px]">
        <SectionHeading
          heading="How We <span>Work</span>"
          description="Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all."
          className="max-w-[735px]"
        />
        <div className="flex flex-col items-center justify-between gap-[50px] lg:flex-row">
          <div className="flex w-full max-w-[691px] flex-col gap-5 md:gap-6 2xl:py-[32.5px] 3xl:gap-11">
            {howWeWorkData &&
              howWeWorkData.map((item, index) => (
                <div key={index} className="flex items-center gap-[25px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-center font-Inter text-2xl leading-7 text-white 2xl:text-3xl 3xl:h-20 3xl:w-20 3xl:text-[37.71px] 3xl:leading-[47.71px]">
                    {`0${index + 1}`}
                  </div>
                  <p className="font-Inter text-2xl font-medium leading-[29.05px] text-black">
                    {item}
                  </p>
                </div>
              ))}
          </div>
          <div>
            <Image
              src={msgframe}
              alt="chat-msg-image"
              width={550}
              height={649}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowWeWork;
