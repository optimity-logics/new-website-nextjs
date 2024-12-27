import Container from '@/components/common/Container';
import Image from 'next/image';
import logo from '../../../../public/svg/footer-logo.svg';
import { footerData } from '../../utils/Constant';
import InquireForm from './InquireForm';
import Review from './Review';
import SocialMedia from './SocialMedia';
import location from '../../../../public/svg/footer/location.svg';
import phone from '../../../../public/svg/footer/phone.svg';
import email from '../../../../public/svg/footer/mail.svg';

const Footer = () => {
  return (
    // <div className="flex flex-col items-center">
    <Container className="bg-footer bg-cover bg-no-repeat pt-10 4xl:pt-20">
      <div className="flex flex-col gap-10 border-b-[1.34px] border-b-[#ffffff4a] pb-10 xl:gap-[60px]">
        <div className="flex flex-col justify-between gap-7 sm:gap-14 lg:flex-row lg:items-center">
          <div className="flex w-full max-w-[795px] flex-col gap-[35px]">
            <div>
              <Image
                src={logo}
                alt="logo"
                width={202}
                height={57}
                className="w-[150px] 4xl:w-max"
              />
            </div>
            <div className="flex flex-col gap-6 sm:gap-[30px]">
              {/* <div className="flex flex-col gap-[30px]"> */}
              <h3 className="font-Inter text-[28px] font-bold leading-[30px] text-white 5xl:text-[40px] 5xl:leading-[44px]">
                <span className="highlitedtextfooter block">
                  Have a question?
                </span>
                Our team is happy to assist you
              </h3>
              <span className="max-w-[666px] font-Inter text-base font-normal leading-5 text-white md:text-lg md:leading-[21.78px] 3xl:text-2xl 3xl:leading-7">
                Ask about optimity logics impressive portfolio, pricing,
                development approach, or anything else. Our Expert Consultants
                are ready to help!
              </span>
              {/* </div> */}
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-start gap-2 sm:gap-[15px]">
                  <div className="w-full max-w-max">
                    <Image
                      src={location}
                      alt="location-icon"
                      width={31}
                      height={31}
                      className="w-[25px] sm:w-max"
                    />
                  </div>
                  <span className="font-Inter text-base font-normal leading-5 text-white md:pr-[26px] md:text-lg md:leading-6 3xl:text-2xl 3xl:leading-7">
                    426, 4th Floor, Swarnim Business Hub-1, opp. Global
                    International school, Godrej Garden City Road, Ahmedabad,
                    Gujarat 382470
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 sm:gap-[15px]">
                    <div className="w-full max-w-max">
                      <Image
                        src={phone}
                        alt="phone-icon"
                        width={31}
                        height={31}
                        className="w-5 sm:w-max"
                      />
                    </div>
                    <span className="font-Inter text-base font-medium leading-5 text-white md:text-xl md:leading-6 3xl:text-2xl 3xl:leading-7">
                      +91 635 301 5499
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-[15px]">
                    <div className="w-full max-w-max">
                      <Image
                        src={email}
                        alt="email-icon"
                        width={31}
                        height={31}
                        className="w-5 sm:w-max"
                      />
                    </div>
                    <span className="font-Inter text-base font-medium text-white md:text-xl md:leading-6 3xl:text-2xl 3xl:leading-7">
                      hr@optimitylogics.com
                    </span>
                  </div>
                </div>
              </div>
              <SocialMedia />
            </div>
          </div>
          <InquireForm />
        </div>
        <Review />
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-4 xl:gap-[70px] 3xl:gap-20 4xl:gap-[95.14px]">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col gap-[21.37px]">
              <h3 className="font-Inter text-2xl font-semibold leading-[29.05px] text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-[21.37px]">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer text-nowrap font-Inter text-lg font-normal leading-[21.78px] text-white transition-all duration-300 hover:text-lightBlue"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 pb-[35.81px] pt-10 lg:flex-row">
        <span className="text-center font-Inter text-[18.69px] font-normal leading-[22.62px] text-white sm:text-start">
          © 2024 Optimity Logics. All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-5 gap-y-2 font-Inter text-base font-medium leading-5 text-white md:text-xl lg:text-lg lg:leading-6 xl:gap-[30px]">
          <li className="cursor-pointer transition-all duration-300 hover:font-medium hover:text-lightBlue">
            About Us
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:font-medium hover:text-lightBlue">
            Insights
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:font-medium hover:text-lightBlue">
            Careers
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:font-medium hover:text-lightBlue">
            Privacy Policy
          </li>
          <li className="cursor-pointer hover:text-lightBlue">Sitemap</li>
        </ul>
      </div>
    </Container>
    // </div>
  );
};

export default Footer;
