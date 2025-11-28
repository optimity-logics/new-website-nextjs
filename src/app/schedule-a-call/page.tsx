import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  const promises = [
    { text: 'Tailored Solutions for Your Challenges' },
    { text: 'End-to-End Development Support' },
    { text: '100% In-house Team' },
    { text: 'Proven Track Record with Industry Leaders' },
    { text: 'Transparent Payment Policies' },
  ];
  return (
    <>
      <div className="h-screen max-h-full md:flex">
        <div className="sticky top-0 block bg-scheduleCall p-6 md:hidden">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={140}
              height={80}
              className=""
            />
          </Link>
        </div>
        <div className="hidden h-full w-full max-w-[40%] flex-col justify-between gap-6 bg-scheduleCall p-6 md:flex md:p-10 lg:gap-10 xl:p-12 xxl:p-16">
          <div className="flex flex-col gap-20">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={180}
                height={80}
                className="hidden md:block"
              />
            </Link>

            <HeroSectionHeading
              heading="Excited to Learn <br/> What You’re Creating Next."
              description=" Share your project ideas, goals, and challenges we’ll craft the
                right tech roadmap to deliver measurable results."
              headingStyle="text-white !text-[34px] xxl:!text-[42px]"
              descriptionStyle="text-white !text-base xxl:!text-lg"
            />
          </div>
          <div className="flex flex-col gap-5 font-opt text-white">
            <SectionHeader
              headingText="What We Promise:"
              headingStyle="text-lg  text-white"
            />

            <div className="flex flex-col gap-3">
              {promises.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 lg:items-center"
                >
                  <Image
                    src="/svg/check-icon.svg"
                    alt="check"
                    width={20}
                    height={20}
                  />
                  <p className="text-base font-normal leading-6 lg:text-lg">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex h-full w-full flex-col gap-8 p-4">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ36Y_rnJCruCOgeMcn1zxPgvdzP8AjUehVBhM0xJpkt4JDvhHASB2w5vcalE2zZGqfQr2MxzSGb?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Page;
