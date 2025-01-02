'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/system';
import Image from 'next/image';
import { useState } from 'react';
import add from '../../../public/svg/add.svg';
import minus from '../../../public/svg/minus.svg';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { faqsData } from '../utils/Constant';

const Faqs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <NextUIProvider>
      <Container className="4xl:20 mb-10 md:mb-12 xl:mb-16 5xl:mb-[120px]">
        <div className="flex flex-col gap-8 lg:gap-6 3xl:gap-10 4xl:gap-[60px]">
          <SectionHeading
            heading="Frequently Asked Questions"
            className="4xl:!gap-5"
            description="We’ve compiled the answers to your burning questions!"
          />
          <Accordion variant="splitted">
            {faqsData &&
              faqsData.map((item, index) => {
                const isExpanded = expandedIndex === index;

                return (
                  <AccordionItem
                    key={index}
                    aria-label={`Accordion ${index + 1}`}
                    title={
                      <div
                        className={`flex items-center gap-6 ${isExpanded ? 'py-0' : 'py-1'}`}
                      >
                        <span className="font-Inter text-2xl font-semibold leading-7 text-black sm:font-bold">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="font-Poppins text-base font-medium leading-5 text-charcoalBlue sm:text-lg sm:leading-[22px] md:text-xl md:leading-6">
                          {item?.question}
                        </span>
                      </div>
                    }
                    indicator={
                      <Image
                        src={isExpanded ? minus : add}
                        alt={isExpanded ? 'Collapse' : 'Expand'}
                        width={24}
                        height={24}
                        className={`${isExpanded && 'rotate-90'}`}
                      />
                    }
                    className="!rounded-none border-b !border-b-bluishGray !px-0 !py-0 !shadow-none"
                    onPress={() => handleToggle(index)}
                  >
                    <p className="w-full max-w-[619px] pb-3 font-Poppins text-base font-normal leading-5 text-charcoalBlue opacity-50 lg:ml-[52px]">
                      {item?.answer}
                    </p>
                  </AccordionItem>
                );
              })}
          </Accordion>
        </div>
      </Container>
    </NextUIProvider>
  );
};

export default Faqs;
