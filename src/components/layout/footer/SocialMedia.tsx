import Image from 'next/image';
import React from 'react';
import { socialMediaIcons } from '@/components/utils/Constant';
import Link from 'next/link';

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-base text-sm font-normal leading-[1.6rem] text-white 5xl:text-base">
        Follow Us
      </h4>
      <ul className="flex items-center gap-3">
        {socialMediaIcons &&
          socialMediaIcons.map((item, index) => (
            <li key={index}>
              <Link href={item?.link} target="_blank">
                <Image
                  src={item?.icon}
                  alt={item?.icon}
                  width={30}
                  height={31}
                  className="object-scale-down align-middle"
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
