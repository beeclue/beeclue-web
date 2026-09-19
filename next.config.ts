import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'beeclue-web.pages.dev',
          },
        ],
        destination: 'https://beeclue.com/:path*',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/19',
        destination: '/',
        permanent: true,
      },
      {
        source: '/dental-website-design-toronto-patient-growth-guide',
        destination: '/web-design-for-dental-clinics',
        permanent: true,
      },
      {
        source: '/website-development-for-dental-clinics',
        destination: '/web-design-for-dental-clinics',
        permanent: true,
      },
      {
        source: '/how-to-fix-not-secure-website-warning',
        destination: '/how-to-fix-not-secure-warning-2026',
        permanent: true,
      },
      {
        source: '/not-secure-website-fix',
        destination: '/how-to-fix-not-secure-warning-2026',
        permanent: true,
      },
      {
        source: '/custom-website-vs-wix',
        destination: '/custom-website-development-beats-wix-shopify',
        permanent: true,
      },
      {
        source: '/cost-to-build-ecommerce-website-canada',
        destination: '/ecommerce-website-cost-canada',
        permanent: true,
      },
    ];
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/beeclue/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.trustpilot.net",
      },
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
