import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import Image from 'next/image';
import { howWeWorkData } from '../utils/Constant';
import msgframe from '../../../public/webp/msgframe.webp';

const HowWeWork = () => {
  return (
    <div
      className="mb-10 bg-projectSectionBg bg-cover bg-right bg-no-repeat"
      style={{ backgroundColor: '#192020' }}
    >
      <Container className="py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20">
        <div className="flex flex-col gap-10 lg:gap-[50px] 4xl:gap-[70px]">
          <SectionHeading
            heading="How We <span>Work</span>"
            description="Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all."
            className="max-w-[980px] 4xl:!gap-5"
            isDark={true}
          />
          <div className="flex flex-col items-center justify-between gap-[50px] lg:flex-row">
            <div className="flex w-full max-w-[691px] flex-col 3xl:py-[32.5px]">
              {howWeWorkData &&
                howWeWorkData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-[25px]">
                      <div className="flex w-14 items-center justify-center rounded-full bg-white p-4 text-center font-Poppins text-2xl font-bold leading-6 text-black">
                        {`0${index + 1}`}
                      </div>
                      <p className="font-Poppins text-xl font-light leading-6 text-white">
                        {item}
                      </p>
                    </div>
                    <div
                      className={`ml-[26px] h-full min-h-7 w-0.5 bg-[#3e656d] xl:min-h-10 ${index !== howWeWorkData.length - 1 ? 'block' : 'hidden'} `}
                    ></div>
                  </div>
                ))}
            </div>
            <div>
              <Image
                src={msgframe}
                alt="chat-msg-image"
                width={533}
                height={649}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowWeWork;
