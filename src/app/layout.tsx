import './globals.css';
import Layout from '@/components/layout/Layout';
import SmoothScroll from '@/components/ui/SmoothScroll';
import locaFont from 'next/font/local';

const opt = locaFont({
  src: [
    { path: './fonts/opt/Opt-Light.woff2', weight: '300' },
    { path: './fonts/opt/Opt-Regular.woff2', weight: '400' },
    { path: './fonts/opt/Opt-Medium.woff2', weight: '500' },
    { path: './fonts/opt/Opt-SemiBold.woff2', weight: '600' },
    { path: './fonts/opt/Opt-Bold.woff2', weight: '700' },
  ],
  variable: '--font-opt',
});
const dmSans = locaFont({
  src: [
    { path: './fonts/dm_sans/DMSans-Regular.woff2', weight: '400' },
    { path: './fonts/dm_sans/DMSans-Medium.woff2', weight: '500' },
    { path: './fonts/dm_sans/DMSans-Bold.woff2', weight: '700' },
  ],
  variable: '--font-dmSans',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${opt.variable} ${dmSans.variable}`}>
      <body>
        <SmoothScroll />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
