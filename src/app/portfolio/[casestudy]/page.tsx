import Container from '@/components/ui/Container';
import Image from 'next/image';
import React from 'react';
import htsLogo from '../../../../public/svg/client-logo-slider/hts.svg';
import heroImage from '../../../../public/webp/case-study/macbook.webp';
import landingpage1 from '../../../../public/webp/case-study/landingpage1.webp';
import landingpage2 from '../../../../public/webp/case-study/landingpage2.webp';
import contactus from '../../../../public/webp/case-study/contact-us.webp';
import contactus1 from '../../../../public/webp/case-study/contact-us2.webp';
import Link from 'next/link';
import completeProject from '../../../../public/webp/about-us/completeProject.webp';
import employee from '../../../../public/webp/about-us/employee.webp';
import expertise from '../../../../public/webp/about-us/yearOfExpertise.webp';
import { caseStudyData } from '@/components/utils/Constant';

const CaseStudy = () => {
  return (
    <>
      <Container className="mb-10 pt-8 md:mb-12 xl:mb-16 xl:pt-10 3xl:pt-14 4xl:mb-[100px] 4xl:pt-20">
        <div className="flex flex-col items-center gap-7 lg:gap-10 xl:gap-12 3xl:gap-20">
          <h3 className="mx-auto max-w-[1044px] text-center font-opt text-xl font-medium text-[#192020] lg:text-2xl xl:text-3xl 3xl:text-4xl 5xl:text-[50px] 5xl:leading-[60px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </h3>
          <div className="flex w-full flex-col items-center gap-7 rounded-[1.75rem] bg-case-study bg-cover bg-no-repeat px-6 py-10 md:py-14 lg:gap-10 xl:gap-12 xl:py-16 4xl:rounded-[50px] 5xl:gap-[75px] 5xl:py-[82px]">
            <Image src={htsLogo} alt="logo" width={124} height={96} />
            <Image src={heroImage} alt="macbook" width={887} height={599} />
          </div>
        </div>
      </Container>
      <div className="bg-[#fbf7f7]">
        <Container className="mb-10 pt-8 md:mb-12 xl:mb-16 xl:pt-10 3xl:pt-14 4xl:mb-[100px] 4xl:pt-20">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:gap-8 3xl:gap-12 4xl:gap-[62px]">
            <div className="sticky top-[110px] col-span-1 hidden h-max flex-col gap-[18px] rounded-[25px] border border-[#000]/20 bg-white px-9 py-[29px] shadow-md md:flex">
              <div className="flex flex-col gap-1">
                <h4 className="font-opt text-[22px] font-semibold leading-9 text-[#192020]">
                  lorem ipsum{' '}
                </h4>
                <Link
                  href={'/'}
                  className="font-opt text-xl font-light leading-9 text-[#192020]"
                >
                  lorem ipsum text
                </Link>
              </div>
              <span className="w-full border-[0.5px] border-[#000]/20"></span>
              <div className="flex flex-col gap-1">
                <h4 className="font-opt text-[22px] font-semibold leading-9 text-[#192020]">
                  lorem ipsum{' '}
                </h4>
                <Link
                  href={'/'}
                  className="font-opt text-xl font-light leading-9 text-[#192020]"
                >
                  lorem ipsum text
                </Link>
                <Link
                  href={'/'}
                  className="font-opt text-xl font-light leading-9 text-[#192020]"
                >
                  lorem ipsum text
                </Link>
                <Link
                  href={'/'}
                  className="font-opt text-xl font-light leading-9 text-[#192020]"
                >
                  lorem ipsum text
                </Link>
              </div>
              <span className="w-full border-[0.5px] border-[#000]/20"></span>
              <div className="flex flex-col gap-1">
                <h4 className="font-opt text-[22px] font-semibold leading-9 text-[#192020]">
                  lorem ipsum{' '}
                </h4>
                <Link
                  href={'/'}
                  className="font-opt text-xl font-light leading-9 text-[#192020]"
                >
                  lorem ipsum text
                </Link>
              </div>
            </div>
            <div className="col-span-2 flex flex-col gap-8 xl:gap-10 3xl:gap-12 4xl:gap-20">
              <div className="flex flex-col gap-5 lg:gap-8 4xl:gap-[45px]">
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-opt text-2xl font-medium leading-7 text-[#000] 4xl:text-[41px] 4xl:leading-[58px]">
                    The Brief
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span className="font-opt text-xl font-medium leading-6 text-[#000] xl:text-[22px] xl:leading-9">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                    <p className="font-opt text-xl font-normal leading-6 text-[#504c4c] 4xl:text-[22px] 4xl:leading-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:gap-8 4xl:gap-[50px]">
                  <Image src={landingpage1} alt="" width={539} height={390} />
                  <Image src={landingpage2} alt="" width={539} height={390} />
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:gap-8 4xl:gap-[45px]">
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-opt text-2xl font-medium leading-7 text-[#000] 4xl:text-[41px] 4xl:leading-[58px]">
                    The Challenge
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span className="font-opt text-xl font-medium leading-6 text-[#000] xl:text-[22px] xl:leading-9">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                    <p className="font-opt text-xl font-normal leading-6 text-[#504c4c] 4xl:text-[22px] 4xl:leading-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <Image src={contactus} alt="" width={1117} height={819} />
              </div>
              <div className="flex flex-col gap-5 lg:gap-8 4xl:gap-[45px]">
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-opt text-2xl font-medium leading-7 text-[#000] 4xl:text-[41px] 4xl:leading-[58px]">
                    The Solution
                  </h3>
                  <div className="flex flex-col gap-2">
                    <span className="font-opt text-xl font-medium leading-6 text-[#000] xl:text-[22px] xl:leading-9">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                    <p className="font-opt text-xl font-normal leading-6 text-[#504c4c] 4xl:text-[22px] 4xl:leading-8">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 4xl:gap-[50px] 4xl:gap-y-10">
                  {caseStudyData &&
                    caseStudyData.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-3 rounded-[25px] bg-white p-5 shadow-md 4xl:px-9 4xl:py-[34px]"
                      >
                        <h3 className="font-opt text-2xl font-medium leading-7 text-[#192020] 5xl:text-[30px] 5xl:leading-[39px]">
                          {item?.heading}
                        </h3>
                        <p className="font-opt text-xl font-normal leading-6 text-[#504c4c] 5xl:text-2xl 5xl:leading-[34px]">
                          {item?.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-5 lg:gap-8 4xl:gap-[45px]">
                <div className="flex flex-col gap-[15px]">
                  <h3 className="font-opt text-2xl font-medium leading-7 text-[#000] 4xl:text-[41px] 4xl:leading-[58px]">
                    The Impact
                  </h3>
                  <div className="flex flex-col gap-5 md:gap-10 4xl:gap-14">
                    <span className="font-opt text-xl font-medium leading-6 text-[#000] xl:text-[22px] xl:leading-9">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </span>
                    <div className="grid grid-cols-1 gap-[29px] sm:grid-cols-2 xl:grid-cols-3">
                      <div className="flex h-full flex-col justify-between gap-5 rounded-[15px] bg-[#FFD9CF] pb-5">
                        <Image
                          src={completeProject}
                          alt="completeProject"
                          width={408}
                          height={241}
                          className="w-full object-cover"
                        />
                        <div className="flex flex-col items-center justify-center gap-[18px]">
                          <h5 className="font-opt text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-primary md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
                            354+
                          </h5>
                          <span className="text-nowrap font-opt text-[26px] font-normal leading-[52px] text-primary">
                            Completed Projects
                          </span>
                        </div>
                      </div>
                      <div className="flex h-full flex-col justify-between gap-5 rounded-[15px] bg-[#92E6FF] pt-5">
                        <div className="flex flex-col items-center justify-center gap-[18px] px-[70.5px]">
                          <h5 className="font-opt text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-primary md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
                            15+
                          </h5>
                          <span className="text-nowrap font-opt text-[26px] font-normal leading-[52px] text-primary">
                            Employees
                          </span>
                        </div>
                        <Image
                          src={employee}
                          alt="employee"
                          width={408}
                          height={241}
                          className="w-full object-cover"
                        />
                      </div>

                      <div className="flex h-full flex-col justify-between gap-5 rounded-[15px] bg-[#92E6FF] sm:bg-[#FFD9CF] xl:bg-[#92E6FF]">
                        <Image
                          src={expertise}
                          alt="yearOfExperience"
                          width={408}
                          height={241}
                          className="w-full rounded-t-[15px] object-cover"
                        />
                        <div className="flex flex-col items-center justify-center gap-[18px] px-[70.5px]">
                          <h5 className="font-opt text-4xl font-semibold leading-[40px] tracking-[-0.16px] text-primary md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:font-bold 3xl:leading-[50px] 4xl:text-[50px] 5xl:text-[60px] 5xl:leading-[51.99px]">
                            05+
                          </h5>
                          <span className="text-nowrap font-opt text-[26px] font-normal leading-[52px] text-primary">
                            Year Of Experience
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image src={contactus1} alt="" width={1127} height={819} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CaseStudy;
