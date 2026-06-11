import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import blogStyles from "../shared-blog.module.css";
import globalStyles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Affordable Website Design – Only $19/Month | Beeclue",
  description: "Get a professional website design, hosting, and maintenance for just $19/month. Perfect for small businesses.",
  openGraph: {
    title: "Affordable Website Design – Only $19/Month | Beeclue",
    description: "Get a professional website design, hosting, and maintenance for just $19/month. Perfect for small businesses.",
    url: "https://beeclue.com/19-month-website-development-offer",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80",
        width: 1200,
        height: 630,
        alt: "Affordable Website Design",
      },
    ],
  },
};

export default function BlogPost() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <article className={blogStyles.blogContainer}>
        <FadeIn className={blogStyles.blogHeader}>
          <span className={blogStyles.blogCategory}>Promotional Offer</span>
          <h1 className={blogStyles.blogTitle}>Affordable Website Design – Only $19/Month</h1>
          <div className={blogStyles.blogMeta}>
            <span>By Beeclue Tech</span>
            <span>•</span>
            <span>Limited Time Offer</span>
          </div>
        </FadeIn>

        <FadeIn className={blogStyles.heroImageContainer}>
          <Image 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80" 
            alt="Website Design on Laptop" 
            fill
            sizes="(max-width: 1000px) 100vw, 1000px"
            className={blogStyles.heroImage}
            priority
          />
        </FadeIn>

        <div className={blogStyles.blogContent}>
          <FadeIn>
            <p>Looking to get your business online without spending thousands?</p>
            <p>We offer professional website design, hosting, and maintenance for just $19/month — perfect for small businesses.</p>
            <ul>
              <li>✅ Up to 5-page static website</li>
              <li>✅ Modern, clean design</li>
              <li>✅ Mobile & SEO-friendly</li>
              <li>✅ Hosting included</li>
              <li>✅ FREE maintenance & updates</li>
            </ul>
            <p>No upfront cost. No hassle. Need more advanced features?</p>
            <p>We also offer:</p>
            <ul>
              <li>E-commerce websites</li>
              <li>Booking systems</li>
              <li>Dynamic/blog websites</li>
              <li>Custom business websites</li>
            </ul>
            <p>Contact us for a custom quote based on your needs.</p>
            <p><strong>Alternative pricing:</strong> $300 one-time setup + $120/year hosting</p>
            <p>Message now to get a FREE demo homepage for your business.</p>
            <p><strong>Beeclue Tech – Toronto Web Design Agency</strong></p>
          </FadeIn>

          <FadeIn>
            <hr style={{ margin: "3rem 0", borderColor: "rgba(255,255,255,0.1)" }} />
            <h3>Terms and Conditions</h3>
            <p><em>Effective Date: April 26, 2026<br/>Company: Beeclue Tech</em></p>

            <h4>1. Introduction</h4>
            <p>These Terms and Conditions (“Agreement”) govern the promotional website development services (“Services”) offered by Beeclue Tech shall be referred to as “company”, under the $19/month subscription plan (“Offer”). By subscribing, the client (“Client”) agrees to be legally bound by this Agreement.</p>

            <h4>2. Promotional Offer Validity</h4>
            <p>2.1 This Offer is valid until August, 2026, unless extended or terminated earlier at the sole discretion of the company.</p>
            <p>2.2 The Company reserves the right to modify, suspend, or withdraw this Offer at any time without prior notice.</p>

            <h4>3. Scope of Services</h4>
            <p>3.1 Company shall provide website design, development, and limited maintenance services as determined at its sole discretion.</p>
            <p>3.2 Pre-Delivery Revisions:<br/>Prior to final delivery of the website, the Client shall be entitled to request up to five (5) revisions per month. Any additional revisions beyond this limit may be subject to additional fees as determined by the company.</p>
            <p>3.3 Post-Delivery Maintenance and Revisions:<br/>Following final delivery, the Client shall be entitled to request up to two (2) revisions per month at no additional cost, limited to minor updates and maintenance.</p>
            <p>3.4 Non-Accumulation of Revisions:<br/>Any unused revisions in a given month, whether pre-delivery or post-delivery, shall not roll over or carry forward to subsequent months.</p>
            <p>3.5 Any services or revisions beyond the scope defined above, including but not limited to major design changes, feature enhancements, or additional development work, shall be subject to separate agreement and additional fees.</p>

            <h4>4. Subscription and Payment</h4>
            <p>4.1 The Client agrees to pay a recurring fee of $19 per month, billed in advance.</p>
            <p>4.2 Failure to make payment may result in suspension or termination of Services without notice.</p>
            <p>4.3 The company reserves the right to revise pricing after the promotional period ends.</p>

            <h4>5. Ownership and Intellectual Property</h4>
            <p>5.1 All websites, designs, source code, and related intellectual property developed under this Offer shall remain the sole and exclusive property of the company, unless otherwise expressly agreed in writing.</p>
            <p>5.2 Subject to full compliance with this Agreement, the Client is granted a limited, revocable, non-exclusive, and non-transferable license to use the website solely during the term of an active subscription.</p>
            <p>5.3 No ownership rights in the website, design, or underlying intellectual property shall transfer to the Client unless expressly agreed in writing by the company.</p>
            <p>5.4 Notwithstanding the foregoing, any materials provided by the Client, including but not limited to logos, images, trademarks, and other proprietary content (“Client Materials”), shall remain the sole property of the Client. Company shall have no ownership rights in such Client Materials.</p>
            <p>5.5 The Client represents and warrants that it has all necessary rights, licenses, and permissions to use and provide the Client Materials. In the event of any claim, dispute, or allegation arising from the use of such Client Materials, the Client shall be solely responsible, and Company shall not be held liable.</p>
            <p>5.6 The company reserves the right, upon reasonable notice and in consultation with the Client, to remove or delete any Client Materials from the website in the event of a legal dispute, alleged infringement, or non-compliance with applicable laws or third-party rights.</p>

            <h4>6. Termination, Data Deletion, and Buyout Option</h4>
            <p>6.1 Either party may terminate the subscription at any time.</p>
            <p>6.2 Upon termination:<br/>The website shall be deactivated; and<br/>All data, content, and materials may be permanently deleted without liability to the Company.</p>
            <p>6.3 The Client acknowledges that no rights to the website, code, or data shall remain upon termination.</p>
            <p>6.4 Buyout Option:<br/>Notwithstanding Clause 6.3, the Client may request transfer of the website and associated data prior to deletion by paying a one-time fee of $300 (“Buyout Fee”).</p>
            <p>6.5 Upon receipt of the Buyout Fee:<br/>Company shall provide a transferable version of the website (format and scope at Company’s discretion);<br/>Limited rights to use the delivered website shall be granted to the Client;<br/>Company shall not be obligated to provide ongoing support, maintenance, or compatibility assurances post-transfer.</p>

            <h4>7. Hosting Services</h4>
            <p>7.1 Hosting is provided free of charge through third-party platforms (including Vercel).</p>
            <p>7.2 The Client agrees to comply with all applicable third-party terms and conditions.</p>
            <p>7.3 Company shall not be liable for any downtime, service interruptions, or limitations caused by third-party providers.</p>

            <h4>8. Form Submissions</h4>
            <p>8.1 The Offer includes up to 250 form submissions per month at no additional cost.</p>
            <p>8.2 Form services are facilitated through Web3Forms, and the Client agrees to comply with its applicable terms and limitations.</p>
            <p>8.3 Any usage exceeding the monthly limit shall incur additional charges in accordance with the pricing of the respective third-party provider.</p>

            <h4>9. Refund Policy</h4>
            <p>9.1 All payments made under this Offer are strictly non-refundable, except where required by applicable law.</p>
            <p>9.2 No refunds shall be issued for:<br/>Partial use of Services;<br/>Early termination by the Client;<br/>Suspension or termination due to breach of this Agreement.</p>
            <p>9.3 Any exception to this policy shall be at the sole discretion of Company.</p>

            <h4>10. Limitation of Liability</h4>
            <p>10.1 To the fullest extent permitted by law, Company shall not be liable for any indirect, incidental, special, or consequential damages, including loss of business, revenue, or data.</p>
            <p>10.2 Company’s total liability under this Agreement shall not exceed the total fees paid by the Client in the preceding one (1) month.</p>

            <h4>11. Indemnification</h4>
            <p>The Client agrees to indemnify, defend, and hold harmless company and its affiliates from and against any claims, damages, liabilities, or expenses (including legal fees) arising out of:<br/>The Client’s use of the website;<br/>Content uploaded or shared by the Client;<br/>Violation of any applicable laws or third-party rights.</p>

            <h4>12. Disclaimer of Warranties</h4>
            <p>All Services are provided on an “as-is” and “as-available” basis without warranties of any kind, whether express or implied, including fitness for a particular purpose or uninterrupted operation.</p>

            <h4>13. Dispute Resolution</h4>
            <p>13.1 The parties agree to attempt to resolve disputes through good-faith negotiations.</p>
            <p>13.2 If unresolved within thirty (30) days, the dispute shall be referred to arbitration.</p>

            <h4>14. Arbitration</h4>
            <p>14.1 Any dispute arising out of or relating to this Agreement shall be finally resolved by binding arbitration.</p>
            <p>14.2 Arbitration shall:<br/>Be conducted in accordance with the rules of a recognized arbitration authority;<br/>Take place in Ontario, Canada;<br/>Be conducted in English.</p>
            <p>14.3 The arbitrator’s decision shall be final and binding.</p>

            <h4>15. Governing Law</h4>
            <p>This Agreement shall be governed by the laws of Ontario, Canada, without regard to conflict of law principles.</p>

            <h4>16. Force Majeure</h4>
            <p>The company shall not be liable for delays or failures caused by events beyond its reasonable control.</p>

            <h4>17. Entire Agreement</h4>
            <p>This Agreement constitutes the entire agreement between the parties and supersedes all prior communications.</p>

            <h4>18. Contact Information</h4>
            <p>Email: info@beeclue.com<br/>Contact Form: <a href="/contact" style={{ color: "var(--primary-light)" }}>beeclue.com/contact</a></p>
          </FadeIn>
        </div>
      </article>
    </main>
  );
}
