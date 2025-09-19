import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/blog/:path*', // match /blog and any subpath
        destination: 'https://optimitylogics.com/blog/:path*',
        permanent: true, // 308 redirect (SEO friendly)
      },
    ];
  },
};

export default nextConfig;
