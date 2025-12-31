import Career from '@/components/pages/Career';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.career?.title || '',
  description: SEO?.career?.description || '',
  og_url: 'https://optimitylogics.com/careers',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});

const page = () => {
  return <Career />;
};

export default page;
