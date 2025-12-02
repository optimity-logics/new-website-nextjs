import Container from '@/components/ui/Container';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { caseStudy } from '@/components/utils/page-data/caseStudy';

const CaseStudy = () => {
  return (
    <>
      {/* HERO SECTION */}
      <Container className="mb-10 pt-8 md:mb-12 xl:mb-16 xl:pt-10">
        <div className="flex flex-col items-center gap-10 3xl:gap-[70px]">
          <SectionHeader
            headingText={caseStudy.heroSection.heading}
            headingStyle="text-center"
            className="max-w-[1000px]"
          />

          <div className="flex w-full flex-col items-center gap-7 rounded-[1.75rem] bg-case-study bg-full px-6 py-10">
            <Image
              src={caseStudy.heroSection.logo}
              alt="logo"
              width={124}
              height={96}
            />

            <Image
              src={caseStudy.heroSection.heroImage}
              alt="hero"
              width={887}
              height={599}
            />
          </div>
        </div>
      </Container>

      {/* MAIN CONTENT */}
      <div className="bg-[#f5f5f5] py-20">
        <Container className="grid grid-cols-1 gap-9 md:grid-cols-3">
          {/* CONTENT SECTIONS */}
          <div className="col-span-2 flex flex-col gap-12">
            {caseStudy.sections.map((section, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="font-opt text-[34px] font-medium leading-10 text-primary">
                  {section.title}
                </h3>

                <p className="font-opt text-base font-medium leading-5 text-optDesc">
                  {section.subtitle}
                </p>
                <p className="font-opt text-base font-medium leading-5 text-optDesc">
                  {section.description}
                </p>
                {/* IMAGES */}
                {section.images && (
                  <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {section.images.map((img, i) => (
                      <Image
                        key={i}
                        src={img}
                        alt=""
                        width={600}
                        height={400}
                      />
                    ))}
                  </div>
                )}

                {/* CARDS (Solution Section) */}
                {section.cards && (
                  <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {section.cards.map((card, i) => (
                      <div
                        key={i}
                        className="flex flex-col gap-4 rounded-[15px] bg-white p-5 shadow-md"
                      >
                        <h3 className="font-opt text-xl font-medium leading-6 text-primary">
                          {card.heading}
                        </h3>
                        <p className="font-opt text-base font-normal leading-5 text-optDesc">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* IMPACT SECTION */}
                {section.impactCards && (
                  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {section.impactCards.map((card, i) => (
                      <div
                        key={i}
                        className={`flex overflow-hidden rounded-[15px] ${i % 2 === 0 ? 'flex-col-reverse' : 'flex-col'}`}
                        style={{ backgroundColor: card.bg }}
                      >
                        <Image
                          src={card.image}
                          alt={card.label}
                          width={400}
                          height={250}
                          className={` ${i % 2 === 0 ? 'rounded-t-0' : 'rounded-b-0'}`}
                        />

                        <div className="flex flex-col items-center gap-2 p-5">
                          <h5 className="font-opt text-4xl font-semibold leading-10 text-primary">
                            {card.number}
                          </h5>
                          <span className="font-opt text-base font-medium leading-5 text-optDesc">
                            {card.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* FOOTER IMAGE */}
            <Image
              src={caseStudy.footerImage}
              alt="footer"
              width={1100}
              height={800}
              className="mt-10"
            />
          </div>
          {/* SIDEBAR */}
          <div className="sticky top-[110px] hidden h-max flex-col gap-4 rounded-[15px] bg-white/40 p-6 shadow-md backdrop-blur-lg md:flex">
            {caseStudy.sidebar.map((item, i) => (
              <div className="flex flex-col gap-1" key={i}>
                <h4 className="font-opt text-xl font-medium leading-6 text-primary">
                  {item.title}
                </h4>
                {item.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href="/"
                    className="font-opt text-lg font-normal leading-6 text-optDesc"
                  >
                    {link}
                  </Link>
                ))}
                {caseStudy.sidebar.length - 1 !== i && (
                  <span className="mt-2 block w-full border-b"></span>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default CaseStudy;
