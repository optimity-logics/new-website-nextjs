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
    <Container
      className="bg-footer bg-cover bg-no-repeat pt-10 4xl:pt-20"
      isBackground={true}
    >
      <div className="flex flex-col gap-8 border-b-[1.34px] border-b-[#ffffff4a] pb-10 3xl:gap-10 4xl:gap-[60px]">
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
              <h3 className="font-Poppins text-[28px] font-bold leading-[30px] text-white 5xl:text-4xl 5xl:leading-[38px]">
                <span className="highlitedtextfooter block">
                  Have a question?
                </span>
                Our team is happy to assist you
              </h3>
              <span className="max-w-[666px] font-Poppins text-lg font-light leading-7 text-white">
                Ask about optimity logics impressive portfolio, pricing,
                development approach, or anything else. Our Expert Consultants
                are ready to help!
              </span>
              {/* </div> */}
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-start gap-2 sm:gap-[15px]">
                  <div className="mt-1 w-full max-w-max sm:mt-1.5">
                    <Image
                      src={location}
                      alt="location-icon"
                      width={22}
                      height={22}
                    />
                  </div>
                  <span className="font-Poppins text-lg font-light leading-7 text-white md:pr-[26px]">
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
                        width={22}
                        height={22}
                      />
                    </div>
                    <span className="font-Poppins text-lg font-light leading-7 text-white">
                      +91 635 301 5499
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-[15px]">
                    <div className="w-full max-w-max">
                      <Image
                        src={email}
                        alt="email-icon"
                        width={22}
                        height={22}
                      />
                    </div>
                    <span className="font-Poppins text-lg font-light leading-7 text-white">
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
              <h3 className="font-Poppins text-xl font-normal leading-[1.875rem] text-white">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="w-max cursor-pointer text-nowrap font-Poppins text-base font-light leading-[1.8rem] text-white opacity-70 transition-all duration-300 hover:text-lightBlue"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-5 py-[26.8px] lg:flex-row">
        <span className="text-center font-Poppins text-sm font-normal leading-[1.6rem] text-white sm:text-start">
          © 2024 Optimity Logics. All rights reserved.
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-[30px] gap-y-2 font-Poppins text-sm font-normal leading-6 text-white">
          <li className="cursor-pointer transition-all duration-300 hover:text-lightBlue">
            About Us
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-lightBlue">
            Insights
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-lightBlue">
            Careers
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-lightBlue">
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
