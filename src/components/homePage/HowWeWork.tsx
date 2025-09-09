// import React from 'react';
// import SectionHeading from '../ui/SectionHeading';
// import Container from '../ui/Container';
// import Image from 'next/image';
// import { howWeWorkData } from '../utils/Constant';
// import msgframe from '../../../public/webp/msgframe.webp';

// const HowWeWork = () => {
//   return (
//     <div
//       className="mb-10 bg-projectSectionBg bg-cover bg-right bg-no-repeat"
//       style={{ backgroundColor: '#192020' }}
//     >
//       <Container className="py-10 md:mb-12 xl:mb-16 4xl:mb-[100px] 4xl:py-20">
//         <div className="flex flex-col gap-10 lg:gap-[50px] 4xl:gap-[70px]">
//           <SectionHeading
//             heading="How We <span>Work</span>"
//             description="Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all."
//             className="max-w-[980px] 4xl:!gap-5"
//             isDark={true}
//           />
//           <div className="flex flex-col justify-between gap-[50px] md:flex-row md:items-center">
//             <div className="flex w-full max-w-[691px] flex-col 3xl:py-[32.5px]">
//               {howWeWorkData &&
//                 howWeWorkData.map((item, index) => (
//                   <div key={index}>
//                     <div className="flex items-center gap-[25px]">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-center font-Poppins text-xl font-bold leading-6 text-black lg:h-14 lg:w-14 lg:text-2xl">
//                         {`0${index + 1}`}
//                       </div>
//                       <p className="font-Poppins text-base font-light leading-6 text-white lg:text-xl">
//                         {item}
//                       </p>
//                     </div>
//                     <div
//                       className={`ml-[19px] h-full min-h-4 w-0.5 bg-[#3e656d] lg:ml-[26px] lg:min-h-7 xl:min-h-10 ${index !== howWeWorkData.length - 1 ? 'block' : 'hidden'} `}
//                     ></div>
//                   </div>
//                 ))}
//             </div>
//             <div>
//               <Image
//                 src={msgframe}
//                 alt="chat-msg-image"
//                 width={533}
//                 height={649}
//               />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HowWeWork;

'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const workSteps = [
  {
    id: 'research',
    title: 'Research & analysis',
    content: {
      title: 'Research & analysis',
      description:
        "Our dedicated team of business analysts meticulously gathers and analyzes vital insights from your business landscape, as well as your competitors' online presence. With this comprehensive understanding, we craft a detailed blueprint that serves as the roadmap to elevate your business on digital platforms, ensuring success in the ever-evolving digital marketplace.",
    },
  },
  {
    id: 'concept',
    title: 'Concept & sketch',
    content: {
      title: 'Concept & sketch',
      description:
        'We transform insights into creative concepts through detailed sketching and wireframing. Our design team creates initial prototypes and user journey maps that visualize your digital solution, ensuring every element serves a purpose in achieving your business objectives.',
    },
  },
  {
    id: 'design',
    title: 'Design & branding',
    content: {
      title: 'Design & branding',
      description:
        'Our creative experts develop compelling visual identities and user interfaces that resonate with your target audience. We focus on creating cohesive brand experiences that not only look stunning but also drive engagement and conversions across all digital touchpoints.',
    },
  },
  {
    id: 'development',
    title: 'Development & testing',
    content: {
      title: 'Development & testing',
      description:
        'Using cutting-edge technologies and best practices, we bring your vision to life with robust, scalable solutions. Our development process includes rigorous testing phases to ensure optimal performance, security, and user experience across all devices and platforms.',
    },
  },
  {
    id: 'delivery',
    title: 'Delivery & maintenance',
    content: {
      title: 'Delivery & maintenance',
      description:
        'We ensure smooth deployment and provide ongoing support to keep your digital solutions running at peak performance. Our maintenance services include regular updates, security monitoring, and continuous optimization to adapt to changing market demands.',
    },
  },
];

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState<string>('research');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const switchToNextStep = () => {
      const currentIndex = workSteps.findIndex(
        (step) => step.id === activeStep,
      );
      const nextIndex = (currentIndex + 1) % workSteps.length;
      setActiveStep(workSteps[nextIndex].id);
    };

    intervalRef.current = setInterval(switchToNextStep, 6000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeStep]);

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const activeContent = workSteps.find(
    (step) => step.id === activeStep,
  )?.content;
  return (
    <div
      style={{ backgroundSize: '100% 100%' }}
      className="my-[100px] bg-our-expertise bg-cover bg-no-repeat"
    >
      <div className="mx-auto my-[100px] w-full max-w-[1680px] px-[120px]">
        <h2 className="text-gray-900 mb-12 text-4xl font-bold md:text-5xl">
          How we work
        </h2>
        <div className="flex gap-10">
          <div className="flex w-full max-w-[550px] flex-col gap-5">
            {workSteps.map((step) => (
              <div key={step.id} className="rounded-xl shadow-tab">
                <button
                  onClick={() => handleStepClick(step.id)}
                  className={`relative w-full overflow-hidden rounded-xl border-l-4 px-6 py-4 text-left font-Inter text-lg font-medium leading-6 transition-all duration-200 ${
                    activeStep === step.id
                      ? 'border-l-red bg-[#F7F7F8] text-white shadow-lg'
                      : 'text-gray-700 border-l-black bg-white hover:bg-[#F7F7F8]'
                  } `}
                >
                  {activeStep === step.id ? (
                    <motion.div
                      className="absolute inset-0 bg-black"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: 6,
                        ease: [0.25, 0.1, 0.25, 1],
                        repeat: 0,
                        type: 'tween',
                      }}
                      key={`progress-${step.id}-${activeStep}`}
                    />
                  ) : null}
                  <span className="relative z-10">{step.title}</span>
                </button>
              </div>
            ))}
          </div>

          <div className="h-min w-full rounded-[20px] bg-white p-10 shadow-how-work-card">
            {activeContent && (
              <div className="flex flex-col gap-5">
                <h3 className="font-Inter text-3xl font-bold leading-9 text-[#2E323C]">
                  {activeContent.title}
                </h3>
                <p className="font-Inter text-base font-normal leading-6 text-[#5E5E5E]">
                  {activeContent.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
