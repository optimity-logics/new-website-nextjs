import Image from 'next/image';
import React from 'react';
import facebook from '../../../../public/svg/footer/social-media/facebook.svg';
import instagram from '../../../../public/svg/footer/social-media/instagram.svg';
import twitter from '../../../../public/svg/footer/social-media/twitter-logo.svg';
const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-Inter text-xl font-semibold leading-7 text-white">
        Follow Us
      </h4>
      <div className="mt-2.5 flex items-center gap-2 xl:gap-5">
        <div>
          <Image
            src={instagram}
            alt="instageam-logo"
            width={55}
            height={55}
            className="w-7 xl:w-full"
          />
        </div>
        <div>
          <Image
            src={facebook}
            alt="facebook-logo"
            width={55}
            height={55}
            className="w-7 xl:w-full"
          />
        </div>
        <div>
          <Image
            src={twitter}
            alt="twitter-logo"
            width={55}
            height={55}
            className="w-7 xl:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
