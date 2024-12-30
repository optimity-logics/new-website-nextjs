import Image from 'next/image';
import React from 'react';
import facebook from '../../../../public/svg/footer/social-media/facebook.svg';
import instagram from '../../../../public/svg/footer/social-media/instagram.svg';
import twitter from '../../../../public/svg/footer/social-media/twitter-logo.svg';
const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-Poppins text-base font-normal leading-[1.6rem] text-white">
        Follow Us
      </h4>
      <div className="flex items-center gap-3">
        <div>
          <Image
            src={instagram}
            alt="instageam-logo"
            width={34}
            height={34}
            // className="w-8 "
          />
        </div>
        <div>
          <Image
            src={facebook}
            alt="facebook-logo"
            width={34}
            height={34}
            // className="w-8 xl:w-full"
          />
        </div>
        <div>
          <Image
            src={twitter}
            alt="twitter-logo"
            width={34}
            height={34}
            // className="w-8 xl:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
