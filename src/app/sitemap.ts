import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beeclue.com';

  const routes = [
    '',
    '/about-us',
    '/services',
    '/case-studies',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    // Services
    '/custom-software-development-toronto',
    '/ecommerce-development-toronto',
    '/mobile-app-development-toronto',
    '/seo-services-toronto',
    '/ui-ux-design-toronto',
    '/web-design-toronto',
    '/wordpress-web-design-canada',
    // Landing Pages
    '/19',
    // Case Studies
    '/case-studies/blues-contracting-services',
    '/case-studies/gir-security',
    '/case-studies/lbf-skin-clinic',
    '/case-studies/sure-shot-photobooth',
    // Products
    '/products/monexa',
    // Blogs
    '/blogs',
    '/5-tips-for-choosing-the-right-website-development-company',
    '/19-month-website-development-offer',
    '/data-analytics-the-key-to-making-better-business-decisions',
    '/design-a-website-that-reflects-your-brand-identity',
    '/is-wix-website-builder-the-right-platform-for-you-pros-and-cons-of-using-wix',
    '/not-secure-warning-what-does-it-mean-when-a-site-is-not-secure',
    '/salon-website-development',
    '/website-development-for-dental-clinics',
    '/what-is-cms-web-development',
    '/why-is-school-website-so-important',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/case-studies' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/custom') ? 0.8 : 0.6,
  }));
}
