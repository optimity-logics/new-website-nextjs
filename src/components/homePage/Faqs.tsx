'use client';
import SectionHeading from '../ui/SectionHeading';
import { homePageData } from '../utils/Constant';
import FaqsAccordion from '../ui/FaqsAccordion';
import { useState } from 'react';
import AnimatedArrow from '../common/AnimatedArrow';
import Container from '../ui/Container';
import Link from 'next/link';

const Faqs = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <Container className="py-[60px] 4xl:py-[100px]">
      <div className="flex w-full flex-col gap-8 rounded-xl bg-[#F7F7F8] px-6 py-[60px] lg:gap-6 xl:flex-row xl:items-center 3xl:gap-10 4xl:gap-[80px] 4xl:px-[60px] 4xl:py-[100px]">
        <div className="flex w-full max-w-[450px] flex-col gap-6">
          <SectionHeading
            heading={homePageData?.faqTitle}
            className="!items-start !gap-3"
            description={homePageData?.faqsDescription}
            descriptionStyle="!text-base !leading-5 !text-start"
          />
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseEnter}
            onMouseDown={handleMouseLeave}
            href={homePageData?.getInTouchBtnLink}
            className="flex w-max items-center gap-1 rounded-[50px] bg-[#1A6AA3] px-[16px] py-[8px] pr-[14px] font-base text-[14px] font-normal leading-tight text-white"
          >
            {homePageData?.getInTouchBtn}
            <AnimatedArrow hover={hover} />
          </Link>
        </div>
        <div className="w-full max-w-full">
          <FaqsAccordion data={homePageData?.faqsList} />
        </div>
      </div>
    </Container>
  );
};

export default Faqs;
