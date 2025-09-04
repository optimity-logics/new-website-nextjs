import SectionHeading from '../ui/SectionHeading';
import { faqsData } from '../utils/Constant';
import FaqsAccordion from '../ui/FaqsAccordion';

const Faqs = () => {
  return (
    // <Container className="4xl:20 mb-10 md:mb-12 xl:mb-16 5xl:mb-[120px]">
    <div className="flex flex-col gap-8 lg:gap-6 3xl:gap-10 4xl:gap-[80px]">
      <SectionHeading
        heading="Frequently Asked Questions"
        className="4xl:!gap-5"
        description="We’ve compiled the answers to your burning questions!"
      />
      <FaqsAccordion data={faqsData} />
    </div>
    // </Container>
  );
};

export default Faqs;
