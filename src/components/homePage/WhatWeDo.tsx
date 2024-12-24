import React from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import Image from 'next/image';
import team from '../../../public/svg/team.svg';

const WhatWeDo = () => {
  return (
    <Container className="mx-auto mb-[140px] 4xl:!px-[200px]">
      <div className="flex flex-col items-center gap-16 rounded-[20px] border border-white bg-whatwedobg bg-cover bg-no-repeat p-8 lg:flex-row 3xl:gap-[105px] 3xl:py-[52px] 3xl:pl-[84px] 3xl:pr-[75.56px]">
        <div className="flex max-w-[872px] flex-col gap-[30px]">
          <div className="flex flex-col gap-[22px]">
            <h2 className="font-Inter text-4xl text-[40px] font-bold leading-[46px] text-white 4xl:text-[50px] 4xl:leading-[60.51px]">
              Who we are, What we do?
            </h2>
            <p className="font-Inter text-2xl font-normal leading-[29.05px] tracking-wide text-white">
              We&apos;re a dynamic team of millennials and Gen-Z, witnessing the
              digital era&apos;s evolution. With a cohesive approach, we develop
              fully integrated digital products, build brand identities, and
              drive marketing campaigns for optimal business growth. From
              concept to scalable solution, we bring your ideas to life with
              effectiveness.
            </p>
          </div>
          <Button
            btnName="Get in Touch"
            className="w-max bg-orange px-[30px]"
          />
        </div>
        <div className="lg:w-full">
          <Image src={team} alt="team-img" width={382} height={365} />
        </div>
      </div>
    </Container>
  );
};

export default WhatWeDo;
