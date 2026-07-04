import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import blogStyles from '../shared-blog.module.css';

export const metadata: Metadata = {
  title: 'How to Fix the "Not Secure" Website Warning in 2026 | Beeclue',
  description: 'Seeing a Not Secure warning on your website? Learn what causes it and exactly how to fix it with SSL certificates. Step-by-step guide for 2026.',
};

export default function FixNotSecureWebsiteWarning2026() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://beeclue.com/signs-your-website-needs-redesign-2026"
    },
    "headline": "How to Fix the \"Not Secure\" Website Warning in 2026",
    "description": "Seeing a Not Secure warning on your website? Learn what causes it and exactly how to fix it with SSL certificates. Step-by-step guide for 2026.",
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
    "author": {
      "@type": "Person",
      "name": "Beeclue Editorial Team",
      "url": "https://beeclue.com/about-us"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Beeclue Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://beeclue.com/icon.svg"
      }
    },
    "datePublished": "2026-07-04",
    "dateModified": "2026-07-04"
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beeclue.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://beeclue.com/blogs" },
      { "@type": "ListItem", "position": 3, "name": "Fix Not Secure Website Warning 2026", "item": "https://beeclue.com/signs-your-website-needs-redesign-2026" }
    ]
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <article className={blogStyles.blogContainer}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

        <header className={blogStyles.blogHeader}>
          <h1 className={blogStyles.blogTitle}>How to Fix the &ldquo;Not Secure&rdquo; Website Warning in 2026</h1>
          <div className={blogStyles.blogMeta}>
            <span>By Beeclue Tech</span>
            <span>&bull;</span>
            <span>Security &amp; Web Development</span>
          </div>
        </header>

        <div className={blogStyles.heroImageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Business owner fixing a not secure website warning by installing an SSL certificate"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
            className={blogStyles.heroImage}
          />
        </div>

        <div className={blogStyles.blogContent}>
          <p>
            If your website displays a &ldquo;Not Secure&rdquo; warning in the browser address bar, you&apos;re losing customers every single day. 85% of online shoppers avoid websites without SSL encryption, and Google actively penalizes non-HTTPS sites in search rankings. The good news: fixing the not secure website warning is simpler and cheaper than you think.
          </p>

          <p>
            This step-by-step guide explains what causes the not secure warning, how to fix it with an SSL certificate, and when to get professional help. Whether you&apos;re on WordPress, Shopify, Wix, or a custom server, this guide covers every scenario.
          </p>

          <div className={blogStyles.highlightBox}>
            <p>
              85% of online shoppers avoid unencrypted websites. If your site shows a Not Secure warning, you&apos;re losing the vast majority of potential customers before they even see what you offer. The fix costs $0-$200/year.
            </p>
          </div>

          <h2>What Causes the &ldquo;Not Secure&rdquo; Warning?</h2>
          <p>
            The Not Secure warning appears when your website uses HTTP (Hypertext Transfer Protocol) instead of HTTPS (HTTP Secure). The &ldquo;S&rdquo; stands for &ldquo;Secure,&rdquo; and it means the connection between your website and your visitor&apos;s browser is encrypted.
          </p>
          <p>
            Without encryption, any data transmitted between your site and the visitor — form submissions, login credentials, payment information, personal details — can be intercepted by hackers. Modern browsers now explicitly warn users when they visit an unencrypted site.
          </p>
          <p>
            Chrome, which commands over 65% of the browser market, displays &ldquo;Not Secure&rdquo; in the address bar for all HTTP pages. This isn&apos;t a suggestion — it&apos;s a hard warning that actively drives visitors away. If you&apos;re seeing this warning, it&apos;s time to learn <Link href="/seo-services-toronto" className={blogStyles.internalLink}>how SSL impacts your SEO</Link> and fix it immediately.
          </p>

          <h2>Why the Warning Is Destroying Your Business</h2>
          <p>
            The Not Secure warning has measurable, negative impacts on your business:
          </p>
          <ul>
            <li><strong>Lost trust:</strong> Visitors immediately assume your site is unsafe, unprofessional, or potentially malicious</li>
            <li><strong>Google penalties:</strong> HTTPS has been a ranking signal since 2014 — non-SSL sites rank lower</li>
            <li><strong>Lower conversions:</strong> Security warnings reduce conversion rates by 30% or more</li>
            <li><strong>Blocked forms:</strong> Chrome and other browsers actively block form submissions on HTTP pages</li>
            <li><strong>Lost revenue:</strong> For a business doing $10,000/month online, the warning can cost $3,000/month in lost sales</li>
          </ul>

          <div className={blogStyles.highlightBox}>
            <p>
              A website without SSL is like a store with a Closed sign in the window. Customers see the warning, assume you&apos;re not open for business, and walk away.
            </p>
          </div>

          <h2>Step-by-Step: How to Fix the Not Secure Warning</h2>
          <p>
            Fixing the not secure website warning requires installing an SSL certificate and properly redirecting all HTTP traffic to HTTPS. Here&apos;s exactly how to do it.
          </p>

          <h3>Step 1: Get an SSL Certificate</h3>
          <p>
            There are several options for obtaining an SSL certificate:
          </p>
          <ul>
            <li><strong>Free SSL (Let&apos;s Encrypt):</strong> Most hosting providers offer free SSL certificates through Let&apos;s Encrypt. This is sufficient for most websites and small businesses.</li>
            <li><strong>Paid SSL certificates:</strong> Cost $50-$200/year and provide warranty coverage and extended validation. Recommended for e-commerce and financial sites.</li>
            <li><strong>Hosting-included SSL:</strong> Many managed hosting providers include free SSL with their plans.</li>
          </ul>

          <h3>Step 2: Install the Certificate</h3>
          <p>
            The installation process varies depending on your hosting provider. Most modern hosts make this a one-click process through their control panel. If you&apos;re on WordPress.com, Shopify, Wix, or Squarespace, SSL is included and enabled by default.
          </p>
          <p>
            For self-hosted sites (WordPress on shared hosting, custom servers), you may need to:
          </p>
          <ol>
            <li>Log into your hosting control panel (cPanel, Plesk, etc.)</li>
            <li>Navigate to the SSL/TLS section</li>
            <li>Generate or upload your certificate</li>
            <li>Enable SSL for your domain</li>
          </ol>

          <h3>Step 3: Redirect HTTP to HTTPS</h3>
          <p>
            After installing the SSL certificate, you need to force all traffic from HTTP to HTTPS. Without this step, visitors can still access your insecure HTTP version. Add this rule to your <code>.htaccess</code> file (Apache servers):
          </p>
          <div style={{ background: 'rgba(0, 0, 0, 0.4)', padding: '1.5rem', borderRadius: '12px', margin: '1.5rem 0', overflowX: 'auto' }}>
            <pre style={{ color: '#e2e8f0', fontSize: '0.9rem', margin: 0, whiteSpace: 'pre-wrap' }}>
              {`RewriteEngine On\nRewriteCond %{HTTPS} off\nRewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`}
            </pre>
          </div>
          <p>
            For Nginx servers, add a similar redirect rule in your server configuration block.
          </p>

          <h3>Step 4: Update Internal Links</h3>
          <p>
            Search your site for any hardcoded HTTP links (images, stylesheets, scripts, internal links) and update them to HTTPS. Mixed content — where an HTTPS page loads resources over HTTP — triggers browser warnings and can break your site&apos;s security.
          </p>

          <h3>Step 5: Update Google Search Console</h3>
          <p>
            If you use Google Search Console, add the HTTPS version of your site as a new property. This ensures Google properly indexes your secure pages and transfers your SEO value. For more on how this impacts your rankings, see our <Link href="/seo-services-toronto" className={blogStyles.internalLink}>SEO services guide</Link>.
          </p>

          <h3>Step 6: Test Everything</h3>
          <p>
            After making the switch, test your site thoroughly:
          </p>
          <ul>
            <li>Visit every page and confirm the padlock icon appears</li>
            <li>Test all forms and checkout processes</li>
            <li>Check for mixed content warnings in the browser console</li>
            <li>Use an SSL checker tool to verify your certificate</li>
            <li>Run Google PageSpeed Insights to check for issues</li>
          </ul>

          <h2>Platform-Specific SSL Instructions</h2>

          <h3>WordPress</h3>
          <p>
            Most WordPress hosting providers (SiteGround, Bluehost, WP Engine, Cloudways) include free SSL. Enable it through your hosting control panel or use a plugin like Really Simple SSL to handle the migration automatically.
          </p>

          <h3>Shopify</h3>
          <p>
            SSL is automatically enabled on all Shopify stores. If you&apos;re seeing a Not Secure warning on Shopify, it&apos;s likely a mixed content issue from an external resource. Check your theme and apps for HTTP resources.
          </p>

          <h3>Wix / Squarespace</h3>
          <p>
            Both platforms include SSL by default. If you&apos;ve recently connected a custom domain, SSL may take up to 24 hours to activate. Check your platform&apos;s settings panel to confirm SSL is enabled.
          </p>

          <h3>Custom Servers</h3>
          <p>
            For custom server configurations, you may need to configure your web server (Apache or Nginx) to use the SSL certificate. This typically involves updating your virtual host configuration and adding redirect rules.
          </p>

          <h2>When to Get Professional Help</h2>
          <p>
            While SSL installation can be straightforward for simple sites, some situations require professional expertise:
          </p>
          <ul>
            <li>Your site has complex server configurations (custom Nginx, load balancers, CDNs)</li>
            <li>You have multiple domains or subdomains that need SSL</li>
            <li>After installing SSL, your site is showing errors or mixed content warnings</li>
            <li>You need an Extended Validation (EV) certificate for an e-commerce store</li>
            <li>You want to ensure proper 301 redirects are in place to preserve SEO rankings</li>
          </ul>
          <p>
            A <Link href="/web-design-toronto" className={blogStyles.internalLink}>professional web design team</Link> can handle SSL installation, redirect configuration, and ongoing security monitoring as part of a comprehensive package.
          </p>

          <h2>Beyond SSL: Complete Website Security</h2>
          <p>
            SSL is the minimum requirement for website security, but it&apos;s not the only thing you need. For a comprehensive look at why security matters, read our guide on <Link href="/not-secure-website-losing-customers" className={blogStyles.internalLink}>why a Not Secure website is losing you customers</Link>. A truly secure website also requires:
          </p>
          <ul>
            <li><strong>Regular updates:</strong> Keep your CMS, themes, plugins, and server software updated</li>
            <li><strong>Strong passwords:</strong> Use unique, complex passwords for all accounts</li>
            <li><strong>Firewall protection:</strong> Web application firewalls (WAF) block malicious traffic</li>
            <li><strong>Backup strategy:</strong> Regular backups ensure you can recover from any attack</li>
            <li><strong>Malware scanning:</strong> Proactive scanning detects threats before they cause damage</li>
            <li><strong>DDoS protection:</strong> Protect against denial-of-service attacks that take your site offline</li>
          </ul>

          <h2>The Business Case for Fixing SSL Today</h2>
          <p>
            Let&apos;s put real numbers on the impact:
          </p>
          <ul>
            <li><strong>Before SSL:</strong> 85% of visitors leave immediately. 30% lower conversion rate. Penalized in Google rankings. Forms may be blocked.</li>
            <li><strong>After SSL:</strong> Full visitor trust. No browser warnings. Improved SEO rankings. Forms work properly. Professional credibility restored.</li>
          </ul>
          <p>
            For a business generating $10,000/month online, fixing the Not Secure warning could recover $3,000/month in lost revenue — $36,000 per year. The cost of SSL? Often $0 (free Let&apos;s Encrypt) or $50-200/year for premium certificates. The ROI is extraordinary.
          </p>

          <div className={blogStyles.highlightBox}>
            <p>
              Don&apos;t wait another day. Every day your website shows the Not Secure warning, you&apos;re losing customers to competitors who invested in basic security.
            </p>
          </div>

          <h2>Get Professional Help Fixing Your Website Security</h2>
          <p>
            If you need help implementing SSL or want a comprehensive security audit for your website, <Link href="/contact" className={blogStyles.internalLink}>contact Beeclue Tech today</Link>. We&apos;ll ensure your site is secure, trusted, and converting at its full potential — often in the same day.
          </p>

          <div className={blogStyles.highlightBox}>
            <p>
              Is your website showing the Not Secure warning? <Link href="/contact" className={blogStyles.internalLink}>Get in touch with our team</Link> and we&apos;ll fix it — often in the same day.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
