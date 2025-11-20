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
          <Review />
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:gap-x-4 md:gap-y-10 lg:grid-cols-4">
            {footerData?.footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h3 className="tracking-[1.5 px] font-opt text-lg font-normal text-white">
                  {section?.heading}
                </h3>
                <ul className="flex flex-col gap-2">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer font-opt text-base font-light text-subtle transition-all duration-300 hover:text-lightBlue xl:w-max xl:text-nowrap"
                    >
                      <Link href={item?.link} className="font-opt">
                        {' '}
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 py-[26.8px] lg:flex-row">
          <span className="order-2 text-center font-opt text-base font-light text-subtle sm:text-start lg:order-1">
            © {new Date().getFullYear()} {footerData?.copyRight}
          </span>
          <ul className="order-1 flex flex-wrap items-center justify-center gap-y-2 font-opt text-base font-light leading-6 text-subtle lg:order-2">
            {footerData?.otherLinks.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer border-r border-r-[#ffffff4a] px-5 transition-all duration-300 last-of-type:border-r-0 hover:text-lightBlue"
              >
                <Link href={item?.link}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
