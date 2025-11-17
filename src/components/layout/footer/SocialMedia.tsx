import Image from 'next/image';
import React from 'react';
import { socialMediaIcons } from '@/components/utils/Constant';
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-base text-xl font-medium leading-7 tracking-[1px] text-white">
        Follow Us
      </h4>
      <ul className="flex items-center gap-3">
        {socialMediaIcons &&
          socialMediaIcons.map((item, index) => (
            <li
              key={index}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f3f5]/10 backdrop-blur-sm"
            >
              <Link href={item?.link} target="_blank">
                <Image
                  src={item?.icon}
                  alt="social-media-icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
