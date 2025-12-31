import AboutUs from '@/components/pages/AboutUs';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.about_us?.title || '',
  description: SEO?.about_us?.description || '',
  og_url: 'https://optimitylogics.com/about',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});
const page = () => {
  return <AboutUs />;
};

export default page;
