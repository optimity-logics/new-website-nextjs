'use client';
import SectionHeading from '../ui/SectionHeading';
import { faqsData } from '../utils/Constant';
import FaqsAccordion from '../ui/FaqsAccordion';
import { useState } from 'react';
import AnimatedArrow from '../common/AnimatedArrow';

const Faqs = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className="mx-auto w-full max-w-[1680px] px-[120px] pb-[100px]">
      <div className="flex w-full items-center gap-8 rounded-xl bg-[#F7F7F8] px-[60px] py-[100px] lg:gap-6 3xl:gap-10 4xl:gap-[80px]">
        <div className="flex w-full max-w-[450px] flex-col gap-7">
          <SectionHeading
            heading="FAQs"
            className="!items-start !gap-5"
            description="We’ve compiled the answers to your burning questions!"
            descriptionStyle="!text-base !leading-5 !text-start"
          />
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseEnter}
            onMouseDown={handleMouseLeave}
            type="button"
            className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] px-[16px] py-[8px] pr-[14px] font-Inter text-[14px] font-normal leading-tight text-white"
          >
            Get In Touch
            <AnimatedArrow hover={hover} />
          </button>
        </div>
        <div className="w-full max-w-full">
          <FaqsAccordion data={faqsData} />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
