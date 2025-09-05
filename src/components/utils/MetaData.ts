import type { Metadata } from 'next';

interface SEOParams {
  title: string;
  description?: string;
  og_url?: string;
  og_image?: string;
}

export function generateSEOMetadata({
  title,
  description,
  og_url,
  og_image,
}: SEOParams): Metadata {
  return {
    title,
    description:
      description ||
      'As a prominent Node.js development firm, Optimity Logics specializes in crafting fast, scalable, and real-time applications.',
    viewport: 'width=device-width, initial-scale=1',
    alternates: {
      canonical: og_url || 'https://optimitylogics.com',
    },
    openGraph: {
      title,
      description:
        description ||
        'As a prominent Node.js development firm, Optimity Logics specializes in crafting fast, scalable, and real-time applications.',
      url: og_url || 'https://optimitylogics.com',
      type: 'website',
      locale: 'en_US',
      siteName: 'OptimityLogics',
      images: [
        {
          url:
            og_image ||
            'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
          width: 3168,
          height: 792,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@optimitylogics',
      creator: '@optimitylogics',
      title,
      description:
        description ||
        'As a prominent Node.js development firm, Optimity Logics specializes in crafting fast, scalable, and real-time applications.',
      images: [
        og_image ||
          'https://optimitylogics.com/images/meta-img/optimity-logics-og-image.jpg',
      ],
    },
    icons: {
      icon: '/favicon.ico',
      apple: [
        { url: '/images/favicons/icon-57.png', sizes: '57x57' },
        { url: '/images/favicons/icon-60.png', sizes: '60x60' },
        { url: '/images/favicons/icon-72.png', sizes: '72x72' },
        { url: '/images/favicons/icon-76.png', sizes: '76x76' },
        { url: '/images/favicons/icon-114.png', sizes: '114x114' },
        { url: '/images/favicons/icon-120.png', sizes: '120x120' },
        { url: '/images/favicons/icon-144.png', sizes: '144x144' },
        { url: '/images/favicons/icon-152.png', sizes: '152x152' },
        { url: '/images/favicons/icon-180.png', sizes: '180x180' },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'http-equiv:origin-trial':
        'A7vZI3v+Gz7JfuRolKNM4Aff6zaGuT7X0mf3wtoZTnKv6497cVMnhy03KDqX7kBz/q/iidW7srW31oQbBt4VhgoAAACUeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJEaXNhYmxlVGhpcmRQYXJ0eVN0b3JhZ2VQYXJ0aXRpb25pbmczIiwiZXhwaXJ5IjoxNzU3OTgwODAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==',
      rating: 'general',
      expires: '30',
      distribution: 'global',
      'fb:app_id': '137923612741013',
      'itemprop:name': 'OptimityLogics',
    },
  };
}
