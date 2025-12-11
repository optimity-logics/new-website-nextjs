'use client';
import React from 'react';
import Container from '@/components/ui/Container';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import { privacyPolicyData } from '@/components/utils/Constant';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PrivacyPolicy = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'radial-gradient(154.86% 76.83% at 50% 22.26%,rgb(247 247 248/.4) 8.98%,#F7F7F8 45.99%)',
        }}
        className="-mt-20"
      >
        <div className="bg-aboutUsHeroBg bg-full bg-fixed bg-center bg-no-repeat">
          <div className="flex h-full items-center justify-center lg:min-h-screen">
            <Container className="relative h-full pb-14 pt-[150px] lg:py-[50px]">
              <div className="flex w-full flex-col justify-between gap-10 lg:flex-row xl:items-center 4xl:gap-[60px]">
                <HeroSectionHeading
                  badgeTitle="Privacy Policy"
                  heading={privacyPolicyData?.title}
                  description={`Last Updated : ${privacyPolicyData?.lastUpdated}`}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeIn',
                  }}
                >
                  <div className="relative z-30 mx-auto w-max">
                    <Image
                      src={'/webp/privacy.webp'}
                      alt="hero-img"
                      width={450}
                      height={450}
                      priority
                      className="max-w-[300px] lg:max-w-[350px] 4xl:max-w-max"
                    />
                  </div>
                </motion.div>
              </div>
            </Container>
          </div>
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
