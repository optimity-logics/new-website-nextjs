import Container from '@/components/ui/Container';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <div
        className="bg-PrivacyPolicy bg-cover bg-no-repeat"
        style={{ backgroundSize: '100% 100%' }}
      >
        <div className="mx-auto flex max-w-[1217px] flex-col items-center gap-2 px-4 py-20 sm:px-6 md:px-8 xl:px-10 3xl:px-0">
          <h2 className="font-Inter text-4xl font-semibold leading-[44px] tracking-[-2%] text-black lg:text-[44px] lg:leading-[82.3px] 4xl:text-[60px]">
            Privacy Policy
          </h2>
          <p className="text-center font-Inter text-lg font-normal leading-[29px] text-[#727265] 4xl:px-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <Container className="py-12 md:py-16 lg:py-20 4xl:py-[100px]">
        <div className="flex flex-col gap-6 lg:gap-8 4xl:gap-11">
          <div className="flex flex-col gap-2.5">
            <h4 className="font-Inter text-[22px] font-medium leading-[32px] text-[#000]">
              Privacy Policy
            </h4>
            <p className="text-justify font-Inter text-lg font-light leading-6 text-[#727262] md:text-start lg:text-xl lg:leading-[26px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using&#39;Content here,
              content here&#39;, making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for &#39;lorem
              ipsum&#39; will uncover many web
            </p>
          </div>
          <h4 className="font-Inter text-[22px] font-medium leading-[32px] text-[#000]">
            Why We Collect Your Data Once You Permit?
          </h4>
          <div className="flex flex-col gap-2.5">
            <h4 className="font-Inter text-[22px] font-medium leading-[32px] text-[#000]">
              1. Accountability
            </h4>
            <p className="text-justify font-Inter text-lg font-light leading-6 text-[#727262] md:text-start lg:text-xl lg:leading-[26px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="font-Inter text-[22px] font-medium leading-[32px] text-[#000]">
              2. Why do we collect your information?
            </h4>
            <p className="text-justify font-Inter text-lg font-light leading-6 text-[#727262] md:text-start lg:text-xl lg:leading-[26px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
            <p className="text-justify font-Inter text-lg font-light leading-6 text-[#727262] md:text-start lg:text-xl lg:leading-[26px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &#39;Content here,
              content here&#39;, making it look like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for &#39;lorem
              ipsum&#39; will uncover many web
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="font-Inter text-[22px] font-medium leading-[32px] text-[#000]">
              3. Obtaining your Consent
            </h4>
            <p className="text-justify font-Inter text-lg font-light leading-6 text-[#727262] md:text-start lg:text-xl lg:leading-[26px]">
              We will obtain your consent prior to the collection, use or
              disclosure of your information. Consent may be expressed or
              implied. Implied consent means that you provide the information to
              us, and the purpose of providing such information would be clear
              to you, even if we did not state it. Our privacy policy, however,
              does not limit Bridgeo Home Services from collecting and using
              information that is publicly available. This means, for instance,
              your name and business email address could be added to our email
              and / or postal communication list so that we can provide further
              information to you on our products and services. We will, however,
              respect your choice not to be contacted. All our marketing email
              messages contain an option to automatically &#39;opt-out&#39; of
              receiving messages from us. You may also elect not to receive
              communication from us by sending an email to info@bridgeohome.com
              with your name, email address and (if applicable) your postal
              address to request that we remove your email, address and name
              from our mailing lists.
            </p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="font-Inter text-[22px] font-medium leading-[32px] text-[#000]">
              4. Limiting Collection
            </h4>
            <p className="text-justify font-Inter text-lg font-light leading-6 text-[#727262] md:text-start lg:text-xl lg:leading-[26px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
