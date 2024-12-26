import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';
import Image from 'next/image';
import { howWeWorkData } from '../utils/Constant';
import msgframe from '../../../public/images/msgframe.png';

const HowWeWork = () => {
  return (
    <Container
      isBackground={true}
      className="mb-10 bg-sectionBg bg-cover bg-right bg-no-repeat py-10 md:mb-12 xl:mb-16 4xl:mb-[120px] 4xl:py-20 5xl:px-[244.5px]"
    >
      <div className="flex flex-col gap-10 lg:gap-[50px] 4xl:gap-[70px]">
        <SectionHeading
          heading="How We <span>Work</span>"
          description="Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all."
          className="max-w-[735px]"
          isDark={true}
        />
        <div className="flex flex-col items-center justify-between gap-[50px] lg:flex-row">
          <div className="flex w-full max-w-[691px] flex-col gap-10 3xl:py-[32.5px]">
            {howWeWorkData &&
              howWeWorkData.map((item, index) => (
                <div key={index} className="flex items-center gap-[25px]">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-center font-Inter text-[22px] font-bold leading-7 text-black 4xl:h-20 4xl:w-20 4xl:text-3xl 4xl:text-[37.71px] 4xl:leading-[47.71px]">
                    {`0${index + 1}`}
                    <div
                      className={`absolute -bottom-1/2 h-11 w-0.5 translate-y-1/2 bg-[#3e656d] 4xl:-bottom-1/3 4xl:h-10 4xl:translate-y-1/3 ${index !== howWeWorkData.length - 1 ? 'block' : 'hidden'} `}
                    ></div>
                  </div>
                  <p className="font-Inter text-2xl font-medium leading-[29.05px] text-white">
                    {item}
                  </p>
                </div>
              ))}
          </div>
          <div>
            <Image
              src={msgframe}
              alt="chat-msg-image"
              width={550}
              height={649}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowWeWork;
// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import SectionHeading from '../common/SectionHeading';
// import Container from '../common/Container';
// import Image from 'next/image';
// import { howWeWorkData } from '../utils/Constant';
// import msgframe from '../../../public/images/msgframe.png';
// import { gsap } from 'gsap';

// const HowWeWork = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const itemsRef = useRef<HTMLDivElement[]>([]);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const [lastScrollY, setLastScrollY] = useState(0); // Store last scroll position

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const isScrollingDown = currentScrollY > lastScrollY;
//       setLastScrollY(currentScrollY);

//       // Trigger animation depending on scroll direction
//       if (sectionRef.current) {
//         const timeline = gsap.timeline({
//           defaults: { duration: 1, ease: 'power2.out' },
//         });

//         if (isScrollingDown) {
//           // Apply GSAP 'to' animation when scrolling down (Top to Bottom)
//           timeline
//             .to(itemsRef.current, { y: 0, opacity: 1, stagger: 0.2 }) // Top to Bottom animation
//             .to(imageRef.current, { scale: 1, opacity: 1 }, '-=0.5');
//         } else {
//           // Apply GSAP 'from' animation when scrolling up (Bottom to Top)
//           timeline
//             .from(itemsRef.current, { y: 50, opacity: 0, stagger: 0.2 }) // Bottom to Top animation
//             .from(imageRef.current, { scale: 0.9, opacity: 0 }, '-=0.5');
//         }
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       // Clean up event listener
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY]);

//   useEffect(() => {
//     // Create an intersection observer to trigger the animation when the section is in the viewport
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Trigger animation when section enters viewport
//           if (sectionRef.current) {
//             const timeline = gsap.timeline({
//               defaults: { duration: 1, ease: 'power2.out' },
//             });

//             // Apply GSAP 'to' animation by default (Top to Bottom)
//             timeline
//               .to(itemsRef.current, { y: 0, opacity: 1, stagger: 0.2 }) // Top to Bottom animation
//               .to(imageRef.current, { scale: 1, opacity: 1 }, '-=0.5');
//           }
//         }
//       },
//       { threshold: 0.5 }, // Trigger when 50% of the section is in the viewport
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current); // Start observing the section
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current); // Clean up observer
//       }
//     };
//   }, []);

//   return (
//     <div ref={sectionRef}>
//       <Container
//         isBackground={true}
//         className="mb-10 bg-sectionBg bg-cover bg-right bg-no-repeat py-10 md:mb-12 xl:mb-16 4xl:mb-[120px] 4xl:py-20 5xl:px-[244.5px]"
//       >
//         <div className="flex flex-col gap-10 lg:gap-[50px] 4xl:gap-[70px]">
//           <SectionHeading
//             heading="How We <span>Work</span>"
//             description="Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all."
//             className="max-w-[735px]"
//             isDark={true}
//           />
//           <div className="flex flex-col items-center justify-between gap-[50px] lg:flex-row">
//             <div className="flex w-full max-w-[691px] flex-col gap-10 3xl:py-[32.5px]">
//               {howWeWorkData &&
//                 howWeWorkData.map((item, index) => (
//                   <div
//                     key={index}
//                     ref={(el) => {
//                       if (el) itemsRef.current[index] = el;
//                     }}
//                     className="flex items-center gap-[25px]"
//                   >
//                     <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-center font-Inter text-[22px] font-bold leading-7 text-black 4xl:h-20 4xl:w-20 4xl:text-3xl 4xl:text-[37.71px] 4xl:leading-[47.71px]">
//                       {`0${index + 1}`}
//                       <div
//                         className={`absolute -bottom-1/2 h-11 w-0.5 translate-y-1/2 bg-[#3e656d] 4xl:-bottom-1/3 4xl:h-10 4xl:translate-y-1/3 ${
//                           index !== howWeWorkData.length - 1
//                             ? 'block'
//                             : 'hidden'
//                         }`}
//                       ></div>
//                     </div>
//                     <p className="font-Inter text-2xl font-medium leading-[29.05px] text-white">
//                       {item}
//                     </p>
//                   </div>
//                 ))}
//             </div>
//             <div ref={imageRef}>
//               <Image
//                 src={msgframe}
//                 alt="chat-msg-image"
//                 width={550}
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
