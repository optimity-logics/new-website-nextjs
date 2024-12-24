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
      <Container className="mb-10 md:mb-12 xl:mb-16 4xl:mb-[176px] 4xl:px-[200px]">
        <div className="flex flex-col gap-5 lg:gap-6 4xl:gap-[60px]">
          <SectionHeading
            heading="Frequently Asked Questions"
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
                        className={`flex items-center gap-5 lg:gap-[45px] ${isExpanded ? 'py-0' : '3xl:py-1 4xl:py-5'}`}
                      >
                        <span className="font-Inter text-2xl font-extrabold leading-7 text-black 4xl:text-[37.71px] 4xl:leading-[47.71px]">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="font-Inter text-xl font-medium leading-6 text-charcoalBlue md:text-2xl md:leading-[29.05px]">
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
                    className="!rounded-none border-b !border-b-bluishGray !shadow-none"
                    onPress={() => handleToggle(index)}
                  >
                    <p className="w-full max-w-[619px] pb-3 font-Inter text-base font-normal leading-[19.36px] text-charcoalBlue opacity-50 lg:ml-[72px] xl:ml-20">
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
