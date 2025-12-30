import AllPageContent from '@/components/pages/AllPageContent';
import HireUs from '@/components/pages/HireUs';
import Solution from '@/components/pages/Solution';
import { IHireUsPageType } from '@/components/type/hireUs/hireUsType';
import { IsolutionsPage } from '@/components/type/solution/solutionType';
import { IPropsDataTypes } from '@/components/type/type';
import { PAGE_REGISTRY } from '@/components/utils/page-data/page-registry';
import { generateSEOMetadata } from '@/components/utils/seo/MetaData';
import { SEO } from '@/components/utils/seo/TitleAndDescription';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ service: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const page = PAGE_REGISTRY[service];

  if (!page) {
    return generateSEOMetadata({
      title: SEO?.not_found?.title,
      description: SEO?.not_found?.description,
      og_url: `https://optimitylogics.com/${service}`,
      og_image:
        'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
    });
  }

  const seo = SEO[page.seoKey];

  return generateSEOMetadata({
    title: seo.title,
    description: seo.description,
    og_url: `https://optimitylogics.com/${service}`,
    og_image:
      'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
  });
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const page = PAGE_REGISTRY[service];

  if (!page) {
    // Redirects to the Next.js default 404 page
    return notFound();
  }

  if (page.type === 'hire') {
    return <HireUs data={page.data as IHireUsPageType} />;
  }

  if (page.type === 'solution') {
    return <Solution data={page.data as IsolutionsPage} />;
  }

  return <AllPageContent data={page.data as IPropsDataTypes} />;
}
