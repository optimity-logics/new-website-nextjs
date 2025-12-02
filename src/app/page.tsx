import HomePageV2 from '@/components/homePage/HomePageV2';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.home?.title || '',
  description: SEO?.home?.description || '',
  og_url: 'https://optimitylogics.com',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});

export default function Home() {
  return <HomePageV2 />;
}
