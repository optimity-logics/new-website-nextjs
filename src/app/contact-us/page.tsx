'use client';
import Container from '@/components/common/Container';
import ContactUsForm from '@/components/contact/ContactUsForm';
import Image from 'next/image';
import React from 'react';
import mail from '../../../public/svg/contact-us/mail.svg';
import phone from '../../../public/svg/contact-us/phone.svg';
import location from '../../../public/svg/contact-us/location.svg';
import MapboxMap from '@/components/contact/MapboxMap';

const ContactUs = () => {
  return (
    <>
      <Container className="bg-contactUsBanner bg-cover bg-no-repeat py-[122px]">
        <h2 className="4xl:[50px] font-Poppins text-4xl font-medium leading-[40px] tracking-[-0.16px] text-white md:text-[40px] md:leading-[44px] 3xl:text-[45px] 3xl:leading-[50px] 5xl:text-[57px] 5xl:leading-[60px]">
          Contact Us
        </h2>
      </Container>
      <Container className="mb-10 mt-10 flex flex-col justify-between gap-7 md:mb-12 md:mt-12 md:gap-10 lg:mt-0 lg:flex-row lg:items-end xl:mb-16 4xl:mb-[100px] 4xl:px-[140px] 5xl:px-[240px]">
        <div className="flex w-full max-w-[510px] flex-col gap-9">
          <h3 className="font-Poppins text-[26px] font-semibold leading-7 text-charcoalBlue">
            Get in touch
          </h3>
          <div className="flex items-start gap-[18px]">
            <Image src={mail} alt="" width={34} height={34} />
            <div className="flex flex-col gap-2.5">
              <h5 className="font-Poppins text-xl font-medium leading-7 text-charcoalBlue">
                React Us
              </h5>
              <span className="font-Poppins text-lg font-normal leading-6 text-black">
                info@optimitylogics.com
              </span>
            </div>
          </div>
          <div className="flex items-start gap-[18px]">
            <Image src={phone} alt="" width={34} height={34} />
            <div className="flex flex-col gap-2.5">
              <h5 className="font-Poppins text-xl font-medium leading-7 text-charcoalBlue">
                Phone
              </h5>
              <span className="font-Poppins text-lg font-normal leading-6 text-black">
                +91 635 301 5499
              </span>
            </div>
          </div>
          <div className="flex items-start gap-[18px]">
            <Image src={location} alt="" width={34} height={34} className="" />
            <div className="flex flex-col gap-2.5">
              <h5 className="font-Poppins text-xl font-medium leading-7 text-charcoalBlue">
                Address
              </h5>
              <span className="max-w-[500px] font-Poppins text-lg font-normal leading-6 text-black">
                426, 4th Floor, Swarnim Business Hub-1, opp. Global
                International school, Godrej Garden City Road, Ahmedabad,
                Gujarat 382470
              </span>
            </div>
          </div>
        </div>
        <ContactUsForm />
      </Container>
      <MapboxMap />
    </>
  );
};

export default ContactUs;
