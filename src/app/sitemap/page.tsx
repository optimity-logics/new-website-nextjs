import SiteMap from '@/components/pages/SiteMap';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.sitemap?.title || '',
  description: SEO?.sitemap?.description || '',
  og_url: 'https://optimitylogics.com/schedule-a-call',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});
const page = () => {
  return <SiteMap />;
};

export default page;
