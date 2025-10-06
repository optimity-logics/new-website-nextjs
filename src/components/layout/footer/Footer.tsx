import Container from '@/components/ui/Container';
import { footerData } from '../../utils/Constant';
import Review from './Review';
import Link from 'next/link';

const Footer = () => {
  return (
    <div
      className="bg-footer bg-cover bg-center bg-no-repeat"
      style={{ backgroundSize: '100% 100%' }}
    >
      <Container className="pt-10 4xl:pt-20" isBackground={false}>
        <div className="flex flex-col gap-8 border-b-[1.34px] border-b-[#ffffff4a] pb-10 3xl:gap-10 4xl:gap-[60px]">
          {/* <div className="flex flex-col justify-between gap-7 md:flex-row lg:items-center 3xl:gap-14">
            <div className="flex w-full max-w-[795px] flex-col gap-[35px]">
              <div>
                <Image
                  src={logo}
                  alt="logo"
                  width={202}
                  height={57}
                  className="w-[150px] 4xl:w-[180px] 5xl:w-max"
                />
              </div>
              <div className="flex flex-col gap-6 sm:gap-[30px]">
                <h3 className="font-base text-[26px] font-semibold leading-[30px] text-white 5xl:text-4xl 5xl:leading-[38px]">
                  <span className="highlitedtextfooter block">
                    Have a question?
                  </span>
                  Our team is happy to assist you
                </h3>
                <span className="max-w-[666px] font-base text-base font-light leading-[1.6rem] text-white 5xl:text-lg 5xl:leading-7">
                  Ask about optimity logics impressive portfolio, pricing,
                  development approach, or anything else. Our Expert Consultants
                  are ready to help!
                </span>
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
                    <span className="font-base text-base font-light leading-[1.6rem] text-white md:pr-[26px] 5xl:text-lg 5xl:leading-7">
                     A-566, Money Plant High Street, Jagatpur Road, Sarkhej - Gandhinagar Hwy, nr. BSNL Office, Gota, Ahmedabad, Gujarat 382470
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
                      <span className="font-base text-base font-light leading-[1.6rem] text-white 5xl:text-lg 5xl:leading-7">
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
                      <span className="font-base text-base font-light leading-[1.6rem] text-white 5xl:text-lg 5xl:leading-7">
                        hr@optimitylogics.com
                      </span>
                    </div>
                  </div>
                </div>
                <SocialMedia />
              </div>
            </div>
            <InquireForm />
          </div> */}
          <Review />
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:gap-x-4 md:gap-y-10 lg:grid-cols-4 xl:gap-[70px] 3xl:gap-20 4xl:gap-[95.14px]">
            {footerData.map((section, index) => (
              <div key={index} className="flex flex-col gap-[21.37px]">
                <h3 className="font-base text-xl font-normal leading-[1.875rem] text-white">
                  {section?.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer font-base text-base font-light leading-[1.8rem] text-subtle transition-all duration-300 hover:text-lightBlue xl:w-max xl:text-nowrap"
                    >
                      <Link href={item?.link}> {item?.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 py-[26.8px] lg:flex-row">
          <span className="order-2 text-center font-base text-sm font-normal leading-[1.6rem] text-subtle sm:text-start lg:order-1">
            © {new Date().getFullYear()} Optimity Logics. All rights reserved.
          </span>
          <ul className="order-1 flex flex-wrap items-center justify-center gap-y-2 font-base text-sm font-normal leading-6 text-subtle lg:order-2">
            <li className="cursor-pointer border-r border-r-[#ffffff4a] px-5 transition-all duration-300 hover:text-lightBlue">
              About Us
            </li>
            <li className="cursor-pointer border-r border-r-[#ffffff4a] px-5 transition-all duration-300 hover:text-lightBlue">
              <Link href={'/blog/insights'}>Insights</Link>
            </li>
            <li className="cursor-pointer border-r border-r-[#ffffff4a] px-5 transition-all duration-300 hover:text-lightBlue">
              <Link href={'/careers'}>Careers</Link>
            </li>
            <li className="cursor-pointer border-r border-r-[#ffffff4a] px-5 transition-all duration-300 hover:text-lightBlue">
              <Link href={'/privacy-policy'}> Privacy Policy</Link>
            </li>
            <li className="cursor-pointer px-5 hover:text-lightBlue">
              <Link href={'/sitemap'}>Sitemap</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
