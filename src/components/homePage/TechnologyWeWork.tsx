'use client';
import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import { Tabs, Tab } from '@nextui-org/tabs';
import { technologyWeWorkData } from '../utils/Constant';
import Image from 'next/image';

const TechnologyWeWork = () => {
  const [activeKey, setActiveKey] = useState<string>(
    technologyWeWorkData[0]?.technologyName,
  ); // Default tab is the first technology

  // Handle tab change
  const handlChangeTechnology = (activetab: string) => {
    setActiveKey(activetab);
  };

  // Find the selected technology data based on the active tab key
  const selectedTechnology = technologyWeWorkData.find(
    (tech) => tech.technologyName === activeKey,
  );

  return (
    <Container className="mb-10 flex flex-col items-center gap-10 bg-black py-[60px] md:mb-12 xl:mb-16 3xl:gap-12 4xl:mb-[140px] 4xl:gap-[80px] 5xl:px-[154px]">
      <SectionHeading
        heading={`<span>Technologies</span> we work with`}
        className="max-w-[860px]"
        description={
          'Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all.'
        }
        isDark={true}
      />

      <div className="flex flex-col items-center gap-[60px]">
        {/* Tabs Component from Next UI */}
        <Tabs
          aria-label="Technology Tabs"
          color="default"
          aria-labelledby="technology-tabs"
          radius="full"
          selectedKey={activeKey}
          onSelectionChange={(e) => handlChangeTechnology(e as string)}
        >
          {technologyWeWorkData.map((tech) => (
            <Tab key={tech.technologyName} title={tech.technologyName}>
              {/* Tab content can go here if needed */}
            </Tab>
          ))}
        </Tabs>
        <div
          className="flex gap-[30px] rounded-[20px] bg-footer bg-cover bg-no-repeat py-[43px] pl-[43px] pr-[46px]"
          style={{ backgroundColor: 'white' }}
        >
          <div>
            <Image
              src={selectedTechnology?.technologyImage || ''}
              alt={selectedTechnology?.technologyName || 'technology-img'}
              width={628}
              height={461}
              className="h-[461px] max-w-[628px]"
            />
          </div>
          <div className="flex flex-col gap-[25px]">
            <div className="flex flex-col gap-5">
              <h2 className="font-Inter text-[48px] font-bold leading-[52px] text-red">
                {selectedTechnology?.technologyName}
              </h2>
              <div className="flex flex-col gap-8 font-Inter text-lg font-normal leading-[33px] text-[#2B3857]">
                <p>{selectedTechnology?.techDescription1}</p>
                <p>{selectedTechnology?.techDescription2}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {selectedTechnology?.allTechnology.map((item, index) => (
                <span
                  key={index}
                  className="text-nowrap rounded border border-[#13192433] bg-white px-[19px] py-[5px] font-Inter text-[14.48px] font-normal leading-[17.52px] text-[#2B3857]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TechnologyWeWork;
