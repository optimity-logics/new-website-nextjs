'use client';
import SectionHeading from '../ui/HeroSectionHeading';
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
            descriptionStyle="!text-start"
          />
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseEnter}
            onMouseDown={handleMouseLeave}
            href={homePageData?.getInTouchBtnLink}
            className={`flex h-[38px] w-max items-center justify-center gap-1 rounded-[50px] border border-optDesc px-[14px] py-[8px] font-opt text-sm font-normal leading-4 text-optDesc transition-all duration-250 ease-in hover:border-transparent hover:bg-[#1A6AA3] hover:text-white hover:shadow-lg`}
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
