import OurWorks from '@/components/pages/OurWork';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.our_work?.title || '',
  description: SEO?.our_work?.description || '',
  og_url: 'https://optimitylogics.com/our-work',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});
const page = () => {
  return <OurWorks />;
};

export default page;
