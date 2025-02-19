'use client';
import { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import Container from '../ui/Container';
import { Tabs, Tab } from '@nextui-org/tabs';
import { technologyWeWorkData } from '../utils/Constant';
import Image from 'next/image';
import SkeletonForTechnologyWeWork from '../skeleton/SkeletonForTechnologyWeWork';

const TechnologyWeWork = () => {
  const [activeKey, setActiveKey] = useState<string>(
    technologyWeWorkData[0]?.technologyName,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const handlChangeTechnology = (activetab: string) => {
    setLoading(true);
    setActiveKey(activetab);
    setTimeout(() => setLoading(false), 900);
  };

  const selectedTechnology = technologyWeWorkData.find(
    (tech) => tech.technologyName === activeKey,
  );

  return (
    <div className="bg-technologbg bg-cover bg-center bg-no-repeat">
      <Container className="mb-10 flex flex-col items-center gap-10 py-[60px] md:mb-12 xl:mb-16 3xl:gap-12 4xl:mb-[120px] 4xl:gap-[80px] 5xl:px-[154px]">
        <SectionHeading
          heading={`<span>Technologies</span> we work with`}
          className="max-w-[860px] 4xl:!gap-5"
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
            className="!font-Poppins !text-base !font-normal !leading-[28.8px]"
            onSelectionChange={(e) => handlChangeTechnology(e as string)}
          >
            {technologyWeWorkData.map((tech) => (
              <Tab
                key={tech.technologyName}
                title={tech.technologyName}
                className="h-11 !px-[22px] !py-4 !font-Poppins !text-base !font-normal !leading-5"
              ></Tab>
            ))}
          </Tabs>
        </div>
        <div
          className="flex h-full w-full flex-col items-center gap-5 rounded-[20px] bg-tectnologyContentbg bg-cover bg-no-repeat p-5 md:gap-[30px] lg:flex-row 4xl:items-start 4xl:p-[43px]"
          style={{ backgroundColor: 'white', backgroundSize: '100% 100% ' }}
        >
          {loading ? (
            <SkeletonForTechnologyWeWork
              selectedTechnology={selectedTechnology?.allTechnology}
            />
          ) : (
            <>
              <div>
                <Image
                  src={
                    selectedTechnology?.technologyImage ||
                    '/images/technologyWeWork/mobile.png'
                  }
                  alt={selectedTechnology?.technologyName || 'technology-img'}
                  width={628}
                  height={461}
                  className="h-[461px] rounded-2xl object-cover lg:max-w-[400px] 5xl:max-w-[500px]"
                />
              </div>
              <div className="flex flex-col gap-[25px]">
                <div className="flex flex-col gap-5">
                  <h2 className="font-Poppins text-2xl font-medium leading-6 text-red lg:text-4xl lg:font-semibold lg:leading-10 5xl:text-[48px] 5xl:leading-[52px]">
                    {selectedTechnology?.technologyName}
                  </h2>
                  <div className="flex flex-col gap-4 font-Poppins text-base font-normal leading-5 tracking-[-0.015px] text-[#2B3857] opacity-65 3xl:text-lg">
                    <p>{selectedTechnology?.techDescription1}</p>
                    <p>{selectedTechnology?.techDescription2}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {selectedTechnology?.allTechnology.map((item, index) => (
                    <span
                      key={index}
                      className="text-nowrap rounded border border-[#13192433] bg-white px-[19px] py-[5px] font-Poppins text-[14.48px] font-normal leading-[17.52px] text-[#2B3857]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TechnologyWeWork;
