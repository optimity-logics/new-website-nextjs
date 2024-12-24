'use client';
import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { images } from '../utils/Constant';

const TechnologyWeWork = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Helper function to handle hover logic
  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="mb-10 flex flex-col items-center gap-10 md:mb-12 xl:mb-16 3xl:gap-12 4xl:mb-[140px] 4xl:gap-[80px]">
      <SectionHeading
        heading={`<span>Technologies</span> we work with`}
        className="max-w-[860px]"
        description={
          'Bringing the best of AI’s efficiency and expert guidance, we make custom app building a cost-effective, user-friendly, and exactly envisioned experience for all.'
        }
      />
      <div className="hide-scrollbar w-full max-w-[1920px] overflow-x-scroll">
        <div className="relative flex w-full cursor-pointer items-center">
          {images.map((item) => (
            <div
              key={item.id}
              className={`group transition-all duration-300 ${
                hoveredId === item.id ? 'z-10 scale-110' : 'z-0 scale-100'
              }`}
              style={{
                transform: `translateX(${(item.id - 1) * -80}px)`,
              }}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="relative h-[350px] w-[300px] bg-cover bg-no-repeat transition-all duration-300 sm:h-[400px] sm:w-[350px] xl:h-[700px] xl:w-[450px]"
                style={{ backgroundImage: `url(${item.src})` }}
              >
                <div
                  className="absolute inset-0 bg-cover transition-all duration-300"
                  style={{ backgroundImage: `url(${item.Techbg})` }}
                ></div>

                <div className="absolute bottom-0 flex h-full w-full flex-col justify-end gap-2.5 p-4 text-white sm:p-6 lg:p-[30px]">
                  <h5 className="font-Inter text-3xl font-semibold leading-7 text-white 4xl:text-[30px] 4xl:leading-[38.72px]">
                    {item.TechName}
                  </h5>
                  <p className="invisible hidden overflow-hidden font-Inter font-medium leading-[21.78px] text-white opacity-0 transition-all duration-500 ease-in-out group-hover:visible group-hover:block group-hover:opacity-100 sm:text-base 4xl:text-lg">
                    {item.TechDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyWeWork;
