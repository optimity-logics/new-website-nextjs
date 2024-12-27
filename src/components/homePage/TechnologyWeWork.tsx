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
    <Container className="mb-10 flex flex-col items-center gap-10 bg-technologbg bg-cover bg-no-repeat py-[60px] md:mb-12 xl:mb-16 3xl:gap-12 4xl:mb-[140px] 4xl:gap-[80px] 5xl:px-[154px]">
      <SectionHeading
        heading={`<span>Technologies</span> we work with`}
        className="max-w-[860px]"
        description={
          'Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all.'
        }
        isDark={true}
      />

      <div className="no-scrollbar max-w-full !overflow-x-scroll">
        <Tabs
          aria-label="Technology Tabs"
          color="default"
          aria-labelledby="technology-tabs"
          radius="full"
          selectedKey={activeKey}
          className="!font-Inter !text-base !font-medium !leading-[28.8px]"
          onSelectionChange={(e) => handlChangeTechnology(e as string)}
        >
          {technologyWeWorkData.map((tech) => (
            <Tab
              key={tech.technologyName}
              title={tech.technologyName}
              className="!px-[22px] !py-4 !font-Inter !text-base !font-medium !leading-5"
            >
              {/* Tab content can go here if needed */}
            </Tab>
          ))}
        </Tabs>
      </div>
      <div
        className="flex w-full flex-col items-center gap-[30px] rounded-[20px] bg-tectnologyContentbg bg-cover bg-no-repeat p-5 lg:flex-row 4xl:items-start 4xl:p-[43px]"
        style={{ backgroundColor: 'white' }}
      >
        <div>
          <Image
            src={
              selectedTechnology?.technologyImage ||
              '/images/technologyWeWork/mobile.png'
            }
            alt={selectedTechnology?.technologyName || 'technology-img'}
            width={628}
            height={461}
            className="max-h-[461px] md:max-w-[400px] 5xl:max-w-[628px]"
          />
        </div>
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col gap-5">
            <h2 className="font-Inter text-4xl font-bold leading-10 text-red md:text-[48px] md:leading-[52px]">
              {selectedTechnology?.technologyName}
            </h2>
            <div className="flex flex-col gap-4 font-Inter text-base font-normal leading-5 text-[#2B3857] sm:gap-8 3xl:text-lg 3xl:leading-[33px]">
              <p>{selectedTechnology?.techDescription1}</p>
              <p>{selectedTechnology?.techDescription2}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
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
    </Container>
  );
};

export default TechnologyWeWork;
