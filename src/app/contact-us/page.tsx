import ContactUs from '@/components/pages/ContactUs';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.contact_us?.title || '',
  description: SEO?.contact_us?.description || '',
  og_url: 'https://optimitylogics.com/contact-us',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});
const page = () => {
  return <ContactUs />;
};

export default page;
