'use client';
import Container from '@/components/ui/Container';
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
      <div className="bg-contactUsBanner bg-cover bg-center bg-no-repeat">
        <Container className="py-[122px]">
          <h2 className="font-base text-4xl font-medium leading-[40px] tracking-[-0.16px] text-primary 3xl:text-[45px] 3xl:leading-[50px] 5xl:text-[57px] 5xl:leading-[60px]">
            Contact Us
          </h2>
        </Container>
      </div>
      <Container className="mb-10 mt-10 flex flex-col justify-between gap-7 md:mb-12 md:mt-12 md:gap-10 lg:mt-0 lg:flex-row lg:items-end xl:mb-16 4xl:mb-[100px] 4xl:px-[140px]">
        <div className="flex w-full max-w-[510px] flex-col gap-9">
          <h3 className="font-base text-[26px] font-semibold leading-7 text-primary">
            Get in touch
          </h3>
          <div className="flex items-start gap-[18px]">
            <Image src={mail} alt="" width={34} height={34} />
            <div className="flex flex-col gap-2.5">
              <h5 className="font-base text-xl font-medium leading-7 text-primary">
                React Us
              </h5>
              <span className="font-base text-lg font-normal leading-6 text-primary">
                info@optimitylogics.com
              </span>
            </div>
          </div>
          <div className="flex items-start gap-[18px]">
            <Image src={phone} alt="" width={34} height={34} />
            <div className="flex flex-col gap-2.5">
              <h5 className="font-base text-xl font-medium leading-7 text-primary">
                Phone
              </h5>
              <span className="font-base text-lg font-normal leading-6 text-primary">
                +91 635 301 5499
              </span>
            </div>
          </div>
          <div className="flex items-start gap-[18px]">
            <Image src={location} alt="" width={34} height={34} className="" />
            <div className="flex flex-col gap-2.5">
              <h5 className="font-base text-xl font-medium leading-7 text-primary">
                Address
              </h5>
              <span className="font-base max-w-[500px] text-lg font-normal leading-6 text-primary">
                A-566, Money Plant High Street, Jagatpur Road, Sarkhej -
                Gandhinagar Hwy, nr. BSNL Office, Gota, Ahmedabad, Gujarat
                382470
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
