import Container from '@/components/common/Container';
import Image from 'next/image';
import footertopbg from '../../../../public/images/footerbgtop.png';
import facebook from '../../../../public/svg/Facebook.svg';
import instagram from '../../../../public/svg/instagram.svg';
import logo from '../../../../public/svg/logo.svg';
import twitter from '../../../../public/svg/twitter-logo.svg';
import { footerData } from '../../utils/Constant';

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={footertopbg}
          alt="footerbgtop"
          width={1920}
          height={162}
          className="h-12 sm:h-full"
        />
      </div>
      <Container className="bg-footer bg-cover bg-no-repeat pt-10 3xl:pt-20">
        <div className="flex flex-col gap-10 border-b-[1.34px] border-b-[#1110221f] pb-10 xl:flex-row xl:gap-3 3xl:gap-[196px]">
          <div className="flex w-full max-w-[420px] flex-col gap-[30px]">
            <div>
              <Image
                src={logo}
                alt="logo"
                width={202}
                height={57}
                className="w-[150px] 3xl:w-max"
              />
            </div>
            <span className="font-Inter text-lg font-normal leading-[30px] text-charcoalBlue">
              426, 4th Floor, Swarnim Business Hub-1, opp. Global International
              school, Godrej Garden City Road, Ahmedabad, Gujarat 382470
            </span>
          </div>
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-4 xl:gap-[70px] 2xl:gap-20 3xl:gap-[95.14px]">
            {footerData.map((section, index) => (
              <div key={index} className="flex flex-col gap-[21.37px]">
                <h3 className="font-Inter text-2xl font-semibold leading-[29.05px] text-charcoalBlue">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-[21.37px]">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="cursor-pointer text-nowrap font-Inter text-lg font-normal leading-[21.78px] text-charcoalBlue"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-5 pb-[35.81px] pt-10 sm:flex-row">
          <span className="text-center font-Inter text-[18.69px] font-normal leading-[22.62px] text-charcoalBlue sm:text-start">
            © 2024 Optimity Logics. All rights reserved.
          </span>
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#1110221a] p-2.5">
              <Image
                src={instagram}
                alt="instageam-logo"
                width={20}
                height={20}
              />
            </div>
            <div className="rounded-full bg-[#1110221a] p-2.5">
              <Image
                src={facebook}
                alt="facebook-logo"
                width={20}
                height={20}
              />
            </div>
            <div className="rounded-full bg-[#1110221a] p-2.5">
              <Image src={twitter} alt="twitter-logo" width={20} height={20} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
