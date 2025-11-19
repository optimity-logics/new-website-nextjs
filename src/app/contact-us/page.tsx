'use client';
import Container from '@/components/ui/Container';
import ContactUsForm from '@/components/contact/ContactUsForm';
import Image from 'next/image';
import React from 'react';
import mail from '../../../public/svg/contact-us/mail.svg';
import phone from '../../../public/svg/contact-us/phone.svg';
import location from '../../../public/svg/contact-us/location.svg';
import MapboxMap from '@/components/contact/MapboxMap';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <>
      <div className="-mt-20 bg-contactUsBanner bg-full bg-fixed bg-center bg-no-repeat">
        <Container className="py-[140px]">
          <HeroSectionHeading heading="Contact Us" />
        </Container>
      </div>
      <Container className="mb-10 mt-12 flex flex-col-reverse items-center justify-between gap-7 md:mb-12 md:gap-10 lg:mt-0 lg:flex-row xl:mb-16 4xl:mb-[100px] 4xl:px-[140px]">
        <MapboxMap />
        <div className="flex flex-col gap-5 lg:-mt-[120px]">
          <h3 className="font-opt text-4xl font-semibold leading-[42px] text-primary">
            Get in touch
          </h3>
          <ContactUsForm />
          <Link
            href={'mailto:info@optimitylogics.com'}
            className="flex items-center gap-3 rounded-[20px] border border-[#DBDBDB] bg-[#FCFCFC] px-5 py-4"
          >
            <Image src={mail} alt="" width={34} height={34} />
            <span className="font-opt text-lg font-normal leading-6 text-optDesc">
              info@optimitylogics.com
            </span>
          </Link>
          <Link
            href={'tel:+91 635 301 5499'}
            className="flex items-center gap-3 rounded-[20px] border border-[#DBDBDB] bg-[#FCFCFC] px-5 py-4"
          >
            <Image src={phone} alt="" width={34} height={34} />
            <span className="font-opt text-lg font-normal leading-6 text-optDesc">
              +91 635 301 5499
            </span>
          </Link>
          <div className="flex items-start gap-3 rounded-[20px] border border-[#DBDBDB] bg-[#FCFCFC] px-5 py-4">
            <Image src={location} alt="" width={34} height={34} className="" />
            <span className="max-w-[500px] font-opt text-lg font-normal leading-6 text-optDesc">
              A-566, Money Plant High Street, Jagatpur Road, Sarkhej -
              Gandhinagar Hwy, nr. BSNL Office, Gota, Ahmedabad, Gujarat 382470
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUs;
