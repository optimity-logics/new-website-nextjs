import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { NextUIProvider } from '@nextui-org/system';
import { IAccordionDataType } from '../type/type';

interface AccordionProps {
  AccordionData: IAccordionDataType[];
}

const Accordiean = ({ AccordionData }: AccordionProps) => {
  return (
    <NextUIProvider>
      <Accordion
        hideIndicator={true}
        selectionMode={'single'}
        selectionBehavior={'replace'}
        defaultExpandedKeys={['1']}
        variant="splitted"
      >
        {AccordionData &&
          AccordionData.map((data, index) => (
            <AccordionItem
              key={index + 1}
              aria-label={`Accordion ${index + 1}`}
              title={data.title}
            >
              {data.content}
            </AccordionItem>
          ))}
      </Accordion>
    </NextUIProvider>
  );
};

export default Accordiean;
