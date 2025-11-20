'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/system';
import Image from 'next/image';
import { useState } from 'react';
import add from '../../../public/svg/add.svg';
import minus from '../../../public/svg/minus.svg';
import { IFaqsData } from '../type/type';

interface IAccordionProps {
  data: IFaqsData[];
}

const FaqsAccordion = ({ data }: IAccordionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <NextUIProvider>
      <Accordion variant="splitted" className="!px-0">
        {data &&
          data.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <AccordionItem
                key={index}
                aria-label={`Accordion ${index + 1}`}
                title={
                  <div
                    className={`flex items-center gap-6 ${isExpanded ? 'py-0' : 'py-0'}`}
                  >
                    <span className="font-dmSans text-lg font-semibold leading-[22px] text-primary">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="font-dmSans text-lg font-normal leading-[22px] text-primary">
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
                className="!rounded-none border-b !border-b-bluishGray !bg-transparent !px-0 !py-0 !shadow-none"
                onPress={() => handleToggle(index)}
              >
                <p className="w-full max-w-[619px] pb-3 font-dmSans text-base font-normal leading-5 text-optDesc lg:ml-[52px]">
                  {item?.answer}
                </p>
              </AccordionItem>
            );
          })}
      </Accordion>
    </NextUIProvider>
  );
};

export default FaqsAccordion;
