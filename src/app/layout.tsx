import { Metadata, Viewport } from 'next';
import './globals.css';
import Layout from '@/components/layout/Layout';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/favicons/icon-57.png', sizes: '57x57' },
      { url: '/favicons/icon-60.png', sizes: '60x60' },
      { url: '/favicons/icon-72.png', sizes: '72x72' },
      { url: '/favicons/icon-76.png', sizes: '76x76' },
      { url: '/favicons/icon-114.png', sizes: '114x114' },
      { url: '/favicons/icon-120.png', sizes: '120x120' },
      { url: '/favicons/icon-144.png', sizes: '144x144' },
      { url: '/favicons/icon-152.png', sizes: '152x152' },
      { url: '/favicons/icon-180.png', sizes: '180x180' },
    ],
  },
};

export function generateViewport(): Viewport {
  return {
    width: 'device-width',
    initialScale: 1,
  };
}

const opt = localFont({
  src: [
    { path: './fonts/opt/Opt-Light.woff2', weight: '300' },
    { path: './fonts/opt/Opt-Regular.woff2', weight: '400' },
    { path: './fonts/opt/Opt-Medium.woff2', weight: '500' },
    { path: './fonts/opt/Opt-SemiBold.woff2', weight: '600' },
    { path: './fonts/opt/Opt-Bold.woff2', weight: '700' },
  ],
  variable: '--font-opt',
  display: 'swap',
});

const dmSans = localFont({
  src: [
    { path: './fonts/dm_sans/DMSans-Regular.woff2', weight: '400' },
    { path: './fonts/dm_sans/DMSans-Medium.woff2', weight: '500' },
    { path: './fonts/dm_sans/DMSans-Bold.woff2', weight: '700' },
  ],
  variable: '--font-dmSans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${opt.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ToastContainer position="top-right" autoClose={3000} theme="light" />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
