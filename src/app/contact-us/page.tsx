'use client';
import Container from '@/components/ui/Container';
import ContactUsForm from '@/components/contact/ContactUsForm';
import Image from 'next/image';
import React from 'react';
import HeroSectionHeading from '@/components/ui/HeroSectionHeading';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <>
      <div className="px-4 pb-10 pt-5">
        <Container className="flex flex-col justify-between gap-10 rounded-3xl bg-contactUs bg-full bg-no-repeat py-20 lg:flex-row">
          <div className="flex flex-col gap-6">
            <HeroSectionHeading
              heading="Contact Us"
              description="We design intuitive, fast, and feature-rich mobile apps for Android & iOS. With seamless UI/UX and robust performance, we turn your vision into a powerful mobile solution."
              headingStyle="text-white"
              descriptionStyle="text-white"
            />
            <div className="h-[1px] w-full bg-rostedWhite"></div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Link
                href="tel:+91 635 301 5499"
                className="flex items-center gap-2 font-opt text-base font-normal leading-5 text-white"
              >
                <Image src={'/svg/call.svg'} alt="" width={18} height={18} />
                <span>+91 635 301 5499</span>
              </Link>
              <Link
                href="mailto:info@optimitylogics.com"
                className="flex items-center gap-2 font-opt text-base font-normal leading-5 text-white"
              >
                <Image src={'/svg/mail.svg'} alt="" width={18} height={18} />
                <span>info@optimitylogics.com</span>
              </Link>
            </div>
            <div className="h-[1px] w-full bg-rostedWhite"></div>
            <div className="flex items-start gap-3">
              <Image
                src={'/svg/location.svg'}
                alt=""
                width={22}
                height={22}
                className=""
              />
              <span className="max-w-[500px] font-opt text-base font-normal leading-6 text-white">
                A-566, Money Plant High Street, Jagatpur Road, Sarkhej -
                Gandhinagar Hwy, nr. BSNL Office, Gota, Ahmedabad, Gujarat
                382470
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[500px] flex-col gap-5">
            <h3 className="font-opt text-4xl font-semibold leading-[42px] text-white">
              Get in touch
            </h3>
            <ContactUsForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactUs;
