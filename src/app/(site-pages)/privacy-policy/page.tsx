import styles from "@/app/legal.module.css";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import pageStyles from "@/app/page.module.css";

export const metadata = {
  title: "Privacy Policy",
  description: "Beeclue values your privacy. Read our comprehensive privacy policy to understand how we collect, use, and share your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className={pageStyles.main} style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}>
      
      <FadeIn className={styles.legalContainer}>
        <h1>Privacy Policy</h1>
        <p>Last Updated: February 25, 2026</p>
        <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and explains Your privacy rights and how the law protects You.</p>
        <p>We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

        <h2>Interpretation</h2>
        <p>Words with capitalized first letters have meanings defined under the following conditions. These definitions apply whether they appear in singular or plural.</p>

        <h2>Definitions</h2>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
          <li><strong>Company</strong> (referred to as "the Company", "We", "Us" or "Our") refers to Beeclue, located in Toronto, Ontario, Canada.</li>
          <li><strong>Country</strong> refers to: Canada.</li>
          <li><strong>Device</strong> means any device that can access the Service such as a computer, cellphone, or tablet.</li>
          <li><strong>Personal Data</strong> means any information that identifies or can identify an individual.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Service Provider</strong> means any third-party company or individual who processes data on behalf of the Company.</li>
          <li><strong>Usage Data</strong> refers to data collected automatically from the Service.</li>
          <li><strong>Website</strong> refers to Beeclue, accessible from: <a href="https://beeclue.com">beeclue.com</a></li>
          <li><strong>You</strong> means the individual accessing or using the Service.</li>
        </ul>

        <h2>Personal Data</h2>
        <p>We collect Personal Data only when You voluntarily submit it through forms on our Website. This may include:</p>
        <ul>
          <li>First and last name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Any other information You choose to provide in a message field</li>
        </ul>
        <p>We do not offer user accounts or account registration.</p>

        <h2>Usage Data</h2>
        <p>Usage Data is collected automatically when using the Service. This may include:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Pages visited</li>
          <li>Time and date of visit</li>
          <li>Time spent on pages</li>
          <li>Device identifiers</li>
          <li>Diagnostic data</li>
        </ul>
        <p>When accessing the Service via mobile, we may collect mobile device type, operating system, and related technical data.</p>
        <p>We use Cookies and similar tracking technologies to analyze activity and improve the Service.</p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for website functionality.</li>
          <li><strong>Analytics and Performance Cookies:</strong> Help us understand how visitors use our Website.</li>
        </ul>
        <p>Cookies may be "Session" or "Persistent" cookies. You may disable cookies in your browser settings. Some parts of the Website may not function properly without them.</p>

        <h2>Microsoft Clarity</h2>
        <p>We partner with Microsoft Clarity and Microsoft Advertising to analyze how users interact with our Website through heatmaps, session recordings, and behavioral analytics to improve user experience and marketing efforts. For more information about how Microsoft collects and uses data, please review the Microsoft Privacy Statement.</p>

        <h2>Use of Your Personal Data</h2>
        <p>We may use Personal Data for the following purposes:</p>
        <ul>
          <li>To respond to inquiries submitted through our forms</li>
          <li>To communicate with You</li>
          <li>To improve our Website and services</li>
          <li>For analytics and performance monitoring</li>
          <li>To comply with legal obligations</li>
          <li>To protect against fraud or misuse</li>
        </ul>
        <p>We do not sell Your Personal Data.</p>

        <h2>Sharing of Your Personal Data</h2>
        <p>We may share Your information:</p>
        <ul>
          <li>With Service Providers (e.g., hosting providers, analytics providers)</li>
          <li>If required by law</li>
          <li>To protect legal rights</li>
        </ul>
        <p>All third parties are required to protect Your information in accordance with applicable privacy laws.</p>

        <h2>Retention of Your Personal Data</h2>
        <p>We retain Personal Data only as long as necessary:</p>
        <ul>
          <li>To respond to Your inquiry</li>
          <li>To comply with legal or regulatory obligations</li>
          <li>For legitimate business purposes</li>
        </ul>
        <p>Usage Data may be retained for internal analysis and security purposes.</p>

        <h2>Transfer of Your Personal Data</h2>
        <p>Your information may be processed in Canada or in other jurisdictions where our service providers operate. Where data is transferred outside of Canada, we take reasonable steps to ensure appropriate safeguards are in place.</p>

        <h2>Your Privacy Rights (Canada – PIPEDA)</h2>
        <p>Under applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA), You have the right to:</p>
        <ul>
          <li>Request access to Your Personal Data</li>
          <li>Request correction of inaccurate information</li>
          <li>Withdraw consent (subject to legal limitations)</li>
          <li>Request deletion of Your Personal Data</li>
        </ul>
        <p>To exercise these rights, please contact us at <a href="mailto:hello@beeclue.com">hello@beeclue.com</a>. We will respond within a reasonable timeframe as required by law.</p>

        <h2>Deleting Your Information</h2>
        <p>Since we do not provide user accounts, You may request deletion of Your Personal Data at any time by emailing <a href="mailto:hello@beeclue.com">hello@beeclue.com</a>. We may retain certain information if required to comply with legal obligations.</p>

        <h2>Security of Your Personal Data</h2>
        <p>We use commercially reasonable administrative, technical, and physical safeguards to protect Your Personal Data. However, no internet transmission or electronic storage method is 100% secure.</p>

        <h2>Children's Privacy</h2>
        <p>Our Service is not directed to individuals under the age of 13. We do not knowingly collect Personal Data from children under 13. If You believe a child has provided us with Personal Data, please contact us so we can delete the information.</p>

        <h2>Links to Other Websites</h2>
        <p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices of other websites. We encourage You to review their privacy policies.</p>

        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "Last Updated" date.</p>

        <h2>Contact Us</h2>
        <p>If You have questions about this Privacy Policy or wish to exercise Your privacy rights, You may contact us:</p>
        <ul>
          <li>By email: <a href="mailto:hello@beeclue.com">hello@beeclue.com</a></li>
          <li>Website: <Link href="/contact">https://beeclue.com/contact/</Link></li>
          <li>Company Location: Toronto, Ontario, Canada</li>
        </ul>
      </FadeIn>
    </main>
  );
}
