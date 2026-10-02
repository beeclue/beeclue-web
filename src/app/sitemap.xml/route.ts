import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

const baseUrl = 'https://beeclue.com';

const routes: {
  path: string;
  changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}[] = [
  { path: '', changeFreq: 'weekly', priority: 1.0 },
  { path: '/about-us', changeFreq: 'monthly', priority: 0.8 },
  { path: '/services', changeFreq: 'weekly', priority: 0.9 },
  { path: '/case-studies', changeFreq: 'weekly', priority: 0.9 },
  { path: '/contact', changeFreq: 'monthly', priority: 0.8 },
  { path: '/partner', changeFreq: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changeFreq: 'monthly', priority: 0.5 },
  { path: '/terms-and-conditions', changeFreq: 'monthly', priority: 0.5 },

  // Services
  { path: '/school-website-design-services', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-salons', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-dental-clinics', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-construction-companies', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-restaurants', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-real-estate', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-healthcare', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-law-firms', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-for-art-galleries', changeFreq: 'monthly', priority: 0.8 },
  { path: '/custom-software-development-toronto', changeFreq: 'monthly', priority: 0.9 },
  { path: '/ecommerce-development-toronto', changeFreq: 'monthly', priority: 0.9 },
  { path: '/mobile-app-development-toronto', changeFreq: 'monthly', priority: 0.9 },
  { path: '/seo-services-toronto', changeFreq: 'monthly', priority: 0.9 },
  { path: '/ui-ux-design-toronto', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-design-toronto', changeFreq: 'monthly', priority: 0.9 },
  { path: '/wordpress-web-design-canada', changeFreq: 'monthly', priority: 0.9 },

  // Additional Services
  { path: '/shopify-development-toronto', changeFreq: 'monthly', priority: 0.8 },
  { path: '/website-redesign-toronto', changeFreq: 'monthly', priority: 0.8 },
  { path: '/website-maintenance-toronto', changeFreq: 'monthly', priority: 0.8 },
  { path: '/web-development-services-canada', changeFreq: 'monthly', priority: 0.8 },
  { path: '/digital-marketing-toronto', changeFreq: 'monthly', priority: 0.8 },

  // Industry Verticals
  { path: '/shopify-ecommerce-website-design', changeFreq: 'monthly', priority: 0.8 },
  { path: '/healthcare-website-development-canada', changeFreq: 'monthly', priority: 0.8 },
  { path: '/restaurant-website-design-canada', changeFreq: 'monthly', priority: 0.8 },
  { path: '/real-estate-website-development-toronto', changeFreq: 'monthly', priority: 0.8 },

  // Landing Pages
  { path: '/ecommerce-website-cost-canada', changeFreq: 'monthly', priority: 0.8 },
  { path: '/website-development-cost-toronto', changeFreq: 'monthly', priority: 0.8 },
  { path: '/best-ecommerce-platform-canada', changeFreq: 'monthly', priority: 0.8 },
  { path: '/free-domain-web-design-toronto', changeFreq: 'monthly', priority: 0.8 },

  // Regional Landing Pages
  { path: '/web-design/huntsville', changeFreq: 'monthly', priority: 0.7 },
  { path: '/web-design/cobourg', changeFreq: 'monthly', priority: 0.7 },
  { path: '/web-design/port-hope', changeFreq: 'monthly', priority: 0.7 },
  { path: '/web-design/pembroke', changeFreq: 'monthly', priority: 0.7 },
  { path: '/web-design/midland', changeFreq: 'monthly', priority: 0.7 },
  { path: '/web-design/orillia', changeFreq: 'monthly', priority: 0.7 },
  { path: '/web-design/owen-sound', changeFreq: 'monthly', priority: 0.7 },

  // Case Studies
  { path: '/case-studies/work-n-wear', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/tuxedo-frame-gallery', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/iv-uniforms', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/mac-mates', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/tara-lattanzio', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/new-angkor-wat', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/blues-contracting-services', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/gir-security', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/lbf-skin-clinic', changeFreq: 'monthly', priority: 0.7 },
  { path: '/case-studies/sure-shot-photobooth', changeFreq: 'monthly', priority: 0.7 },

  // Products
  { path: '/products/monexa', changeFreq: 'monthly', priority: 0.8 },

  // Blogs
  { path: '/ontario-law-firm-website-playbook', changeFreq: 'monthly', priority: 0.7 },
  { path: '/shopify-vs-woocommerce-canada', changeFreq: 'monthly', priority: 0.7 },
  { path: '/ai-conversational-ecommerce-guide', changeFreq: 'monthly', priority: 0.7 },
  { path: '/custom-software-development-toronto-cost-guide', changeFreq: 'monthly', priority: 0.7 },
  { path: '/healthcare-website-design-canada-pipeda', changeFreq: 'monthly', priority: 0.7 },
  { path: '/ultimate-guide-choosing-web-design-agency-toronto', changeFreq: 'monthly', priority: 0.7 },
  { path: '/how-much-storage-do-i-need-for-my-website', changeFreq: 'monthly', priority: 0.7 },
  { path: '/best-dental-appointment-booking-tools', changeFreq: 'monthly', priority: 0.7 },
  { path: '/how-to-choose-mobile-app-development-company-toronto', changeFreq: 'monthly', priority: 0.7 },
  { path: '/top-5-free-domain-registrars-pros-and-cons', changeFreq: 'monthly', priority: 0.7 },
  { path: '/the-importance-of-a-website-for-small-businesses-growth', changeFreq: 'monthly', priority: 0.7 },
  { path: '/the-impact-of-artificial-intelligence-on-web-development', changeFreq: 'monthly', priority: 0.7 },
  { path: '/what-are-cookies-a-helpful-guide-to-computer-cookies', changeFreq: 'monthly', priority: 0.7 },
  { path: '/blogs', changeFreq: 'weekly', priority: 0.8 },
  { path: '/salon-barbershop-loyalty-programs-to-increase-business', changeFreq: 'monthly', priority: 0.7 },
  { path: '/best-school-website-design-companies-canada', changeFreq: 'monthly', priority: 0.7 },
  { path: '/wechat-integration-for-canadian-businesses', changeFreq: 'monthly', priority: 0.7 },
  { path: '/must-have-features-for-modern-school-websites', changeFreq: 'monthly', priority: 0.7 },
  { path: '/best-ecommerce-website-builder-canada', changeFreq: 'monthly', priority: 0.7 },
  { path: '/http-vs-https-why-ssl-is-mandatory-for-seo', changeFreq: 'monthly', priority: 0.7 },
  { path: '/5-tips-for-choosing-the-right-website-development-company', changeFreq: 'monthly', priority: 0.7 },
  { path: '/19-month-website-development-offer', changeFreq: 'monthly', priority: 0.7 },
  { path: '/data-analytics-the-key-to-making-better-business-decisions', changeFreq: 'monthly', priority: 0.7 },
  { path: '/design-a-website-that-reflects-your-brand-identity', changeFreq: 'monthly', priority: 0.7 },
  { path: '/is-wix-website-builder-the-right-platform-for-you-pros-and-cons-of-using-wix', changeFreq: 'monthly', priority: 0.7 },
  { path: '/how-to-attract-more-clients-for-your-salon', changeFreq: 'monthly', priority: 0.7 },
  { path: '/not-secure-warning-what-does-it-mean-when-a-site-is-not-secure', changeFreq: 'monthly', priority: 0.7 },
  { path: '/salon-website-development', changeFreq: 'monthly', priority: 0.7 },
  { path: '/what-is-cms-web-development', changeFreq: 'monthly', priority: 0.7 },
  { path: '/why-is-school-website-so-important', changeFreq: 'monthly', priority: 0.7 },
  { path: '/shopify-pos-activity-log', changeFreq: 'monthly', priority: 0.7 },
  { path: '/wordpress-7-0-armstrong-whats-new', changeFreq: 'monthly', priority: 0.7 },
  { path: '/real-estate-website-design-toronto-idx-mls-guide', changeFreq: 'monthly', priority: 0.7 },
  { path: '/web-design-for-construction-companies-guide', changeFreq: 'monthly', priority: 0.7 },
  { path: '/law-firm-website-design-seo-guide', changeFreq: 'monthly', priority: 0.7 },
  { path: '/custom-website-development-beats-wix-shopify', changeFreq: 'monthly', priority: 0.7 },
  { path: '/how-much-does-a-website-cost-in-canada-in-2026', changeFreq: 'monthly', priority: 0.7 },
  { path: '/how-to-fix-not-secure-warning-2026', changeFreq: 'monthly', priority: 0.7 },
  { path: '/shopify-vs-custom-ecommerce-canada', changeFreq: 'monthly', priority: 0.7 },
  { path: '/law-firm-website-design-cost-pricing-guide', changeFreq: 'monthly', priority: 0.7 },
  { path: '/legal-seo-guide-for-lawyers-and-attorneys', changeFreq: 'monthly', priority: 0.7 },
  { path: '/personal-injury-law-firm-website-design', changeFreq: 'monthly', priority: 0.7 },
  { path: '/family-law-firm-website-design-strategy', changeFreq: 'monthly', priority: 0.7 },
  { path: '/law-firm-website-audit-checklist', changeFreq: 'monthly', priority: 0.7 },
  { path: '/best-payment-gateways-canada', changeFreq: 'monthly', priority: 0.7 },
  { path: '/wcag-website-accessibility-compliance-canada', changeFreq: 'monthly', priority: 0.7 },
];

export async function GET() {
  const currentDate = new Date().toISOString().split('T')[0];

  const urlsXml = routes
    .map(
      (r) => `  <url>
    <loc>${baseUrl}${r.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${r.changeFreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
