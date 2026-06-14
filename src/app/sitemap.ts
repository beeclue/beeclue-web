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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/case-studies' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/custom') ? 0.8 : 0.6,
  }));
}
