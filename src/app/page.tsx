import Index from '@/components/homePage/Index';
import { generatePageMetadata } from '@/components/utils/MetaData';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Optimity Logics - Empowering Digital Transformation',
  description:
    'Discover how Optimity Logics can bring your app vision to life with cutting-edge AI solutions and full-stack development expertise.',
  // url: 'https://your-site-url.com',
  // image: '/assets/hero-image.png', // Adjust this path to your actual image asset
});

export default function Home() {
  return <Index />;
}
