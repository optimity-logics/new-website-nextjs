'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Spinner from '../common/Spinner';
import { clientsReview } from '../utils/Constant';

const StarRatings = dynamic(() => import('react-star-ratings'), { ssr: false });

const ClientReview = () => {
  // const emptyStarPath =
  //   'M17.5204 5.07802L19.6662 9.36955C19.9588 9.96695 20.7391 10.54 21.3974 10.6497L25.2866 11.2959C27.7738 11.7104 28.359 13.5148 26.5668 15.2948L23.5432 18.3184C23.0311 18.8304 22.7507 19.818 22.9092 20.5251L23.7748 24.268C24.4576 27.2306 22.8848 28.3766 20.2636 26.8283L16.6182 24.6703C15.9599 24.2802 14.8748 24.2802 14.2042 24.6703L10.5589 26.8283C7.94984 28.3766 6.3649 27.2184 7.04764 24.268L7.91326 20.5251C8.07175 19.818 7.79134 18.8304 7.27928 18.3184L4.25571 15.2948C2.4757 13.5148 3.04872 11.7104 5.53585 11.2959L9.42505 10.6497C10.0712 10.54 10.8515 9.96695 11.1441 9.36955L13.2899 5.07802C14.4603 2.74938 16.3622 2.74938 17.5204 5.07802Z';

  const filledStarPath =
    'M17.6347 5.07802L19.7805 9.36955C20.0731 9.96695 20.8533 10.54 21.5117 10.6497L25.4009 11.2959C27.888 11.7104 28.4732 13.5148 26.681 15.2948L23.6575 18.3184C23.1454 18.8304 22.865 19.818 23.0235 20.5251L23.8891 24.268C24.5718 27.2306 22.9991 28.3766 20.3779 26.8283L16.7325 24.6703C16.0741 24.2802 14.9891 24.2802 14.3185 24.6703L10.6731 26.8283C8.06409 28.3766 6.47915 27.2184 7.1619 24.268L8.02752 20.5251C8.18601 19.818 7.9056 18.8304 7.39354 18.3184L4.36997 15.2948C2.58996 13.5148 3.16297 11.7104 5.65011 11.2959L9.53931 10.6497C10.1855 10.54 10.9658 9.96695 11.2584 9.36955L13.4041 5.07802C14.5745 2.74938 16.4765 2.74938 17.6347 5.07802Z';

  const [visibleCount, setVisibleCount] = useState(9); // State to manage visible items
  const [isLoading, setIsLoading] = useState(false); // State to manage loading spinner

  const handleReadMore = () => {
    setIsLoading(true); // Start loading spinner
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 6); // Increase visible count
      setIsLoading(false); // Stop loading spinner
    }, 1000); // Simulate a loading delay
  };
  // console.log(visibleCount < ClientsReview.length);

  return (
    <Container className="pt-[18px] md:mb-12 xl:mb-16 4xl:mb-[120px] 4xl:px-[200px]">
      <div className="flex flex-col gap-5 lg:gap-20">
        <SectionHeading
          heading="Real Stories from <span>Satisfied Clients</span>"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore"
          className="max-w-[998px]"
          descriptionStyle="max-w-[590px]"
        />
        <div className="review grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-[23px] xl:gap-y-[25px] 3xl:grid-cols-3">
          {clientsReview &&
            clientsReview.slice(0, visibleCount).map((item, index) => (
              <div
                key={index}
                className={`flex h-full cursor-pointer flex-col items-stretch justify-between gap-[51.74px] rounded-[18.91px] p-5 transition-all duration-300 hover:bg-turquoise md:px-[34px] md:py-[30px]`}
              >
                <div className="flex flex-col gap-[25px]">
                  <StarRatings
                    rating={item?.rating || 0}
                    starRatedColor="#02ADE1"
                    starHoverColor="#02ADE1"
                    numberOfStars={5}
                    starDimension="29px"
                    starSpacing="2px"
                    svgIconViewBox="0 0 31 31"
                    svgIconPath={filledStarPath}
                  />
                  <p className="font-Inter text-lg font-normal leading-7 text-gray">
                    {item?.description}
                  </p>
                </div>
                <span className="font-Inter text-[22px] font-semibold leading-[26.63px] text-charcoalBlue">
                  {item?.NameOrPosition}
                </span>
              </div>
            ))}

          {visibleCount < clientsReview.length && (
            <div className="relative z-30 col-span-1 flex w-full items-center justify-center md:col-span-2 3xl:col-span-3">
              <div
                className={`absolute bottom-0 -z-20 flex h-[350px] w-full max-w-[1920px] items-end justify-center bg-custom-gradient 3xl:-bottom-[45px]`}
              >
                <button
                  onClick={handleReadMore}
                  className="hover: w-max cursor-pointer rounded-[5px] border border-cyanBlue px-4 py-2.5 font-Inter font-bold leading-[19.36px] text-cyanBlue transition-all duration-300 hover:bg-cyanBlue hover:text-white lg:px-[33px] lg:py-[14px]"
                  disabled={isLoading} // Disable button while loading
                >
                  {isLoading ? (
                    <div className="flex w-full min-w-[83px] items-center justify-center">
                      <Spinner color="#fff" />
                    </div>
                  ) : (
                    'Read More'
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ClientReview;
