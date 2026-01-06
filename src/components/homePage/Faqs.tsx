'use client';
import SectionHeading from '../ui/HeroSectionHeading';
import FaqsAccordion from '../ui/FaqsAccordion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { homePageData } from '../utils/page-data/homePage';

const Faqs = () => {
  return (
    <Container className="py-[60px] 4xl:py-[100px]">
      <div className="flex w-full flex-col gap-8 rounded-xl bg-snowGray px-6 py-[60px] lg:gap-6 xl:flex-row xl:items-center 3xl:gap-10 4xl:gap-[80px] 4xl:px-[60px] 4xl:py-[100px]">
        <div className="flex w-full max-w-[450px] flex-col gap-6">
          <SectionHeading
            heading={homePageData?.faqTitle}
            className="!items-start !gap-3"
            description={homePageData?.faqsDescription}
            descriptionStyle="!text-start"
          />
          <Button
            btnName={homePageData?.getInTouchBtn}
            redirectionLink={homePageData?.getInTouchBtnLink}
          />
        </div>
        <FaqsAccordion data={homePageData?.faqsList} />
      </div>
    </Container>
  );
};

export default Faqs;
