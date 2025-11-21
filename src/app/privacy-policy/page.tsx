'use client';
import React from 'react';
import Container from '@/components/ui/Container';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import { privacyPolicyData } from '@/components/utils/Constant';

const PrivacyPolicy = () => {
  return (
    <>
      <div
        className="-mt-20 bg-opacity-80 bg-PrivacyPolicy bg-cover bg-fixed bg-no-repeat pt-20"
        style={{ backgroundSize: '100% 100%' }}
      >
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-4 px-4 py-20 sm:px-6 md:px-8 xl:px-10 3xl:px-0">
          <HeroSectionHeading
            heading={privacyPolicyData?.title}
            badgeTitle={privacyPolicyData?.title}
            className="items-center"
          />
          <span className="mt-2 font-opt text-base font-normal leading-5 text-optDesc">
            Last Updated : {privacyPolicyData?.lastUpdated}
          </span>
        </div>
      </div>
      <Container className="max-w-[920px] py-12 md:py-16 lg:py-20 4xl:py-[100px]">
        <>
          <div className="space-y-6">
            {/* Information Paragraphs */}
            {privacyPolicyData.information &&
              privacyPolicyData.information.map((info, i) => (
                <p
                  key={i}
                  className="font-opt text-base font-normal leading-5 text-optDesc"
                >
                  {info}
                </p>
              ))}

            {/* All Sections (inside the same DIV) */}
            {privacyPolicyData.informationList &&
              privacyPolicyData.informationList.map((section, index) => (
                <div key={index} className="space-y-4">
                  {/* Heading */}
                  {section.heading && (
                    <h2 className="font-opt text-2xl font-medium leading-7 text-primary">
                      {section.heading}
                    </h2>
                  )}

                  {/* description array */}
                  {section.description && (
                    <p className="font-opt text-base font-normal leading-5 text-optDesc">
                      {section.description}
                    </p>
                  )}

                  {/* itemList */}
                  {section?.itemList && (
                    <ul className="ml-4 list-disc space-y-1">
                      {section.itemList.map((item, i) => (
                        <li
                          key={i}
                          className="font-opt text-base font-normal leading-5 text-optDesc"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Nested list */}
                  {section.list &&
                    section.list.map((sub, i) => (
                      <div key={i} className="space-y-2">
                        {sub.heading && (
                          <h3 className="font-opt text-2xl font-medium leading-7 text-primary">
                            {sub.heading}
                          </h3>
                        )}

                        {sub.description && (
                          <p className="font-opt text-base font-normal leading-5 text-optDesc">
                            {sub.description}
                          </p>
                        )}

                        {sub.itemList && (
                          <ul className="ml-4 list-disc space-y-1">
                            {sub.itemList.map((subItem, j) => (
                              <li
                                key={j}
                                className="font-opt text-base font-normal leading-5 text-optDesc"
                              >
                                {subItem}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  {/* descriptionList */}
                  {section.descriptionList &&
                    section.descriptionList.map((desc, i) => (
                      <p
                        key={i}
                        className="font-opt text-base font-normal leading-5 text-optDesc"
                      >
                        {desc}
                      </p>
                    ))}
                  {/* description1 */}
                  {section.description1 && (
                    <p className="font-opt text-base font-normal leading-5 text-optDesc">
                      {section.description1}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
