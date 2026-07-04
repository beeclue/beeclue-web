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
    '/school-website-design-services',
    '/web-design-for-salons',
    '/web-design-for-dental-clinics',
    '/web-design-for-construction-companies',
    '/web-design-for-restaurants',
    '/web-design-for-real-estate',
    '/web-design-for-healthcare',
    '/web-design-for-law-firms',
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
    '/case-studies/new-angkor-wat',
    '/case-studies/blues-contracting-services',
    '/case-studies/gir-security',
    '/case-studies/lbf-skin-clinic',
    '/case-studies/sure-shot-photobooth',
    // Products
    '/products/monexa',
    // Blogs
    '/top-5-free-domain-registrars-pros-and-cons',
    '/the-importance-of-a-website-for-small-businesses-growth',
    '/the-impact-of-artificial-intelligence-on-web-development',
    '/what-are-cookies-a-helpful-guide-to-computer-cookies',
    '/blogs',
    '/salon-barbershop-loyalty-programs-to-increase-business',
    '/best-school-website-design-companies-canada',
    '/wechat-integration-for-canadian-businesses',
    '/must-have-features-for-modern-school-websites',
    '/cost-to-build-ecommerce-website-canada',
    '/best-ecommerce-website-builder-canada',
    '/http-vs-https-why-ssl-is-mandatory-for-seo',
    '/how-to-fix-not-secure-website-warning',
    '/5-tips-for-choosing-the-right-website-development-company',
    '/19-month-website-development-offer',
    '/custom-website-vs-wix',
    '/data-analytics-the-key-to-making-better-business-decisions',
    '/design-a-website-that-reflects-your-brand-identity',
    '/is-wix-website-builder-the-right-platform-for-you-pros-and-cons-of-using-wix',
    '/how-to-attract-more-clients-for-your-salon',
    '/not-secure-warning-what-does-it-mean-when-a-site-is-not-secure',
    '/salon-website-development',
    '/website-development-for-dental-clinics',
    '/what-is-cms-web-development',
    '/why-is-school-website-so-important',
    '/shopify-pos-activity-log',
    '/wordpress-7-0-armstrong-whats-new',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/case-studies' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/custom') ? 0.8 : 0.6,
  }));
}
