import PrivacyPolicy from '@/components/pages/PrivacyPolicy';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.privacy_policy?.title || '',
  description: SEO?.privacy_policy?.description || '',
  og_url: 'https://optimitylogics.com/privacy-policy',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});
const page = () => {
  return <PrivacyPolicy />;
};

export default page;
