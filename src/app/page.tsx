import Index from '@/components/homePage/Index';
import { generateSEOMetadata } from '@/components/utils/MetaData';
import { SEO } from '@/components/utils/TitleAndDescription';
import { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: SEO?.home?.title,
  description: SEO?.home?.description,
  og_url: 'https://optimitylogics.com',
  og_image:
    'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
});

export default function Home() {
  return <Index />;
}
