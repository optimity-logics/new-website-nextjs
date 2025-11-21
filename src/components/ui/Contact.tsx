import React from 'react';
import Container from './Container';
import HeroSectionHeading from './HeroSectionHeading';

const Contact = () => {
  return (
    <Container>
      <div className="mb-[60px] rounded-3xl bg-contactMobileBg bg-cover bg-center bg-no-repeat px-6 py-20 md:px-10 lg:bg-bgContact lg:bg-full lg:py-[150px] xl:px-20 3xl:mb-[100px]">
        <HeroSectionHeading
          className="lg:!gap-14"
          heading="Transform Your App Idea into Reality"
          description="We design intuitive, fast, and feature-rich mobile apps for Android & iOS. With seamless UI/UX and robust performance, we turn your vision into a powerful mobile solution."
          link="/"
          btnName="Connect With Us"
          descriptionStyle="text-white"
          headingStyle="text-white"
          isBtnBackgroundLight={true}
        />
      </div>
    </Container>
  );
};

export default Contact;
