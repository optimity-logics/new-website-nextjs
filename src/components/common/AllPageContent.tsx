import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { IPropsDataTypes } from '../type/type';

interface IPropsType {
  pageData: IPropsDataTypes;
}

const AllPageContent = ({ pageData }: IPropsType) => {
  console.log(pageData);
  return (
    <>
      <Container className="!5xl:px-[150px] mb-10 pt-[100px] md:mb-12 xl:mb-16 4xl:mb-[100px]">
        <div className="flex w-full items-center gap-8">
          <div className="flex w-full max-w-[780px] flex-col gap-12">
            <div className="flex flex-col gap-8">
              <h2 className="font-Inter text-[26px] font-medium capitalize leading-[2.3rem] text-lightBlack md:text-4xl md:leading-10 lg:text-start 3xl:text-[40px] 3xl:leading-[44px] 4xl:text-[55px] 4xl:leading-[60px] 5xl:text-[60px] 5xl:font-semibold 5xl:leading-[64px]">
                {pageData?.HeroSectionData?.heading}
              </h2>
              <p className="font-Inter text-lg font-normal leading-[29px] text-[#7c7676]">
                {pageData?.HeroSectionData?.description}
              </p>
            </div>
            <Link
              href={'/'}
              className="flex w-max items-center gap-2.5 rounded-[39.35px] bg-red px-[21.71px] pt-[19.56px] font-Inter text-[21px] font-medium leading-[26.27px] text-white"
            >
              {pageData?.HeroSectionData?.btnName}
            </Link>
            <div className="grid grid-cols-4 gap-10">
              {pageData?.HeroSectionData?.workWithTechnology &&
                pageData?.HeroSectionData?.workWithTechnology.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1"
                    >
                      <span className="font-Poppins text-[40px] font-bold leading-[44.8px] text-red">
                        {item?.title}
                      </span>
                      <p className="text-center font-Poppins text-xl font-medium leading-[28.8px] text-[#212529]">
                        {item?.description}
                      </p>
                    </div>
                  ),
                )}
            </div>
          </div>
          <div className="mx-auto max-w-full">
            <Image
              src={pageData?.HeroSectionData?.techImg || ''}
              alt=""
              width={346}
              height={517}
              className="w-max"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default AllPageContent;
