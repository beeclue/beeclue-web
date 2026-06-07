"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { ArrowRight, Code, LayoutTemplate, Smartphone, ShoppingCart, Search, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      {/* HEADER SECTION */}
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className={styles.titleLinePrimary}>Software & Web</span>
            <span className={styles.titleLine}>Development Services</span>
            <span className={styles.titleLine}>in Toronto</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Beeclue Tech provides professional software, web, and mobile app development services for businesses in Toronto. We design and build scalable digital platforms that help companies streamline operations, improve customer experiences, and grow faster.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in touch <ArrowRight className={styles.arrow} />
          </Link>
        </div>
      </FadeIn>

      {/* DETAILED SERVICES LIST */}
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Effortlessly Transform Your Ideas into Stunning, Professional Layouts with Ease</h2>
        </div>
        
        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Custom Software Development</h3>
            <p>
              Businesses often rely on multiple tools that don't integrate well with each other. Custom software allows companies to streamline workflows, automate processes, and manage operations more efficiently.
            </p>
            <p>
              Beeclue Tech specializes in custom software development in Toronto and the Greater Toronto Area, building tailored platforms designed specifically for modern Canadian business requirements. We help enterprises across Mississauga, Markham, and downtown Toronto replace fragmented tools with scalable, unified systems.
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--muted)", lineHeight: "1.8" }}>
              <strong>Our custom software services include:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "0.5rem" }}>
                <li>• Business management systems</li>
                <li>• SaaS platform development</li>
                <li>• CRM and ERP systems</li>
                <li>• Workflow automation tools</li>
                <li>• Customer portals</li>
                <li>• API integrations</li>
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--muted)" }}>
              Every system is designed to scale with your business and adapt as your operations grow.
            </p>
            <Link href="/custom-software-development-toronto/" className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Code size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Web Design & Development</h3>
            <p>
              A professional website is often the first impression customers have of your business. Our web development team builds modern websites designed for performance, local GTA search engine visibility, and premium user experience.
            </p>
            <p>
              As a top-rated web development agency in the Greater Toronto Area, Beeclue Tech creates high-converting websites that combine attractive design with strong technical foundations. Whether you are a startup in Vaughan or an established enterprise in Brampton, our locally crafted web solutions are engineered to convert visitors into customers.
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--muted)", lineHeight: "1.8" }}>
              <strong>Our website development services include:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "0.5rem" }}>
                <li>• Business website development</li>
                <li>• WordPress website development</li>
                <li>• Website redesign and modernization</li>
                <li>• Landing page design</li>
                <li>• Website speed optimization</li>
                <li>• SEO-friendly development</li>
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--muted)" }}>
              Every website we build is mobile-friendly, optimized for search engines, and designed to convert visitors into customers.
            </p>
            <Link href="/web-design-toronto/" className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LayoutTemplate size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>WordPress Development Canada</h3>
            <p>
              WordPress powers over 40% of the internet. When engineered correctly, it is powerful, flexible, and extremely SEO-friendly. We strip away bloat and build custom, scalable WordPress experiences.
            </p>
            <p>
              At Beeclue Tech, we serve clients across Canada with expert WordPress solutions. From headless architectures to seamless custom plugin integrations, we build fast, secure digital experiences.
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--muted)", lineHeight: "1.8" }}>
              <strong>Our WordPress services include:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "0.5rem" }}>
                <li>• Custom theme development</li>
                <li>• Plugin integration and development</li>
                <li>• Headless WordPress architectures</li>
                <li>• WordPress speed optimization</li>
                <li>• Security hardening</li>
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--muted)" }}>
              Own your platform completely without vendor lock-in.
            </p>
            <Link href="/wordpress-web-design-canada/" className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <LayoutTemplate size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Mobile App Development</h3>
            <p>
              Mobile applications allow businesses to connect with customers seamlessly, deliver services digitally, and create powerful new revenue streams.
            </p>
            <p>
              Beeclue Tech offers professional mobile app development services across the GTA for startups and established Canadian companies. From native builds to cross-platform solutions, our Toronto-based app developers engineer reliable mobile experiences that connect you directly with your local and global audience.
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--muted)", lineHeight: "1.8" }}>
              <strong>Our mobile development services include:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "0.5rem" }}>
                <li>• iOS app development</li>
                <li>• Android app development</li>
                <li>• Cross-platform mobile apps</li>
                <li>• Startup MVP development</li>
                <li>• App UI and UX design</li>
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--muted)" }}>
              We focus on building reliable mobile applications that deliver seamless user experiences across devices.
            </p>
            <Link href="/mobile-app-development-toronto/" className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Smartphone size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid} style={{ marginBottom: "5rem" }}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>Ecommerce Development</h3>
            <p>
              For retail and B2B businesses in the Greater Toronto Area, a high-performance ecommerce platform is essential to capture the digital market. Beeclue Tech helps Canadian companies build secure, scalable Shopify and custom ecommerce stores engineered to drive local sales and support international online growth.
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--muted)", lineHeight: "1.8" }}>
              <strong>Our ecommerce development services include:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "0.5rem" }}>
                <li>• Shopify development</li>
                <li>• WooCommerce development</li>
                <li>• Custom ecommerce platforms</li>
                <li>• Payment gateway integrations</li>
                <li>• Inventory and order management systems</li>
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--muted)" }}>
              We design ecommerce platforms that provide smooth shopping experiences while maintaining high levels of security and performance.
            </p>
            <Link href="/ecommerce-development-toronto/" className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ShoppingCart size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>SEO & Digital Visibility</h3>
            <p>
              Having a great website is only valuable if customers can find it online. Our technical SEO services help businesses improve their search engine visibility and attract highly qualified traffic.
            </p>
            <p>
              Beeclue Tech provides specialized SEO services for businesses in Toronto and the GTA, focusing on sustainable organic growth. We ensure your brand dominates local search rankings across Etobicoke, Scarborough, and the wider Toronto region.
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--muted)", lineHeight: "1.8" }}>
              <strong>Our SEO services include:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "0.5rem" }}>
                <li>• Technical SEO optimization</li>
                <li>• On-page SEO improvements</li>
                <li>• Local SEO targeting Toronto</li>
                <li>• Website speed optimization</li>
                <li>• Search analytics and monitoring</li>
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--muted)" }}>
              Through structured SEO strategies, we help businesses strengthen their online presence and generate consistent organic traffic.
            </p>
            <Link href="/seo-services-toronto/" className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "var(--foreground)" }}>UI/UX Design & Branding</h3>
            <p>
              Design that drives revenue. We architect premium, user-centric interfaces and brand identities that captivate audiences, eliminate friction, and transform casual visitors into loyal customers.
            </p>
            <p>
              At Beeclue Tech, we bridge the gap between stunning visual aesthetics and profound psychological usability, delivering world-class digital experiences for Canadian businesses.
            </p>
            <div style={{ marginTop: "1.5rem", color: "var(--muted)", lineHeight: "1.8" }}>
              <strong>Our design services include:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "0.5rem" }}>
                <li>• UI Design (Figma)</li>
                <li>• UX Research & Wireframing</li>
                <li>• Brand Identity & Logos</li>
                <li>• Mobile App Design</li>
                <li>• Web & SaaS Design</li>
              </ul>
            </div>
            <p style={{ marginTop: "1rem", fontStyle: "italic", color: "var(--muted)" }}>
              We design scalable systems that simplify complex information.
            </p>
            <Link href="/ui-ux-design-toronto/" className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Search size={120} color="#3385ff" strokeWidth={1} />
          </div>
        </div>
      </FadeIn>

      {/* TECH STACK SECTION */}
      <FadeIn className={styles.baseSection} style={{ background: "rgba(0, 0, 0, 0.5)" }}>
        <div className={styles.servicesHeader}>
          <h2>Tech Stack</h2>
          <p>Our development team works with modern technologies to build scalable digital platforms.</p>
        </div>
        <div className={styles.techTags} style={{ gap: "1rem", marginTop: "2rem" }}>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>Flutter</span>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>WordPress</span>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>Firebase</span>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>React</span>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>Node.js</span>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>Express.js</span>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>Remix</span>
          <span style={{ fontSize: "1rem", padding: "0.75rem 1.5rem" }}>Next.js</span>
        </div>
      </FadeIn>

      {/* VALUE PROPOSITION SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.valueSection}`}>
        <div className={styles.valueHeader}>
          <h2>Why Businesses Choose Us</h2>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Strategy Before Development</h3>
              <p>Every project begins with deep research to ensure the final product aligns perfectly with your business goals.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Performance Focused</h3>
              <p>Speed, security, and performance are at the core of our architecture. We build systems optimized for reliability.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Transparent Communication</h3>
              <p>We keep you informed throughout every stage of development, ensuring clarity and confidence in the process.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Long-Term Support</h3>
              <p>Our relationship doesn't end at launch. We provide ongoing support, improvements, and technical guidance to scale.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Agile Methodology</h3>
              <p>We adapt to changing requirements swiftly, ensuring faster time-to-market without compromising on product quality.</p>
            </div>
          </div>
          <div className={styles.valueItem}>
            <CheckCircle2 className={styles.valueIcon} />
            <div>
              <h3>Data-Driven Approach</h3>
              <p>Every design and technical architecture choice is backed by analytics and user behavior to maximize your ROI.</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* GTA AREA SECTION */}
      <FadeIn className={styles.baseSection} style={{ textAlign: "center", borderTop: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Supporting Businesses Across Toronto & the GTA</h2>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto 2rem auto" }}>
          Beeclue Tech proudly works with businesses across:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
          {["Downtown Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton", "Markham", "Vaughan"].map(city => (
            <span key={city} style={{ padding: "0.5rem 1.5rem", border: "1px solid var(--border)", borderRadius: "50px", color: "var(--primary-light)" }}>
              {city}
            </span>
          ))}
        </div>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto" }}>
          If your business operates in the Greater Toronto Area, we can help you build powerful digital platforms that support your growth.
        </p>
      </FadeIn>

      {/* TESTIMONIALS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.testimonialsSection}`}>
        <div className={styles.testimonialsTop}>
          <h2>What Our Clients Say</h2>
          
          <div className={styles.reviewsMeta}>
            <div className={styles.ratingsBadges}>
              <div className={styles.ratingBadge}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" width="24" height="24" />
                <div className={styles.ratingInfo}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <span className={styles.ratingText}>5.0 Rating</span>
                </div>
              </div>
              <div className={styles.ratingBadge}>
                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="Trustpilot 5 Stars" width="100" height="20" />
                <div className={styles.ratingInfo}>
                  <span className={styles.ratingText}>Excellent</span>
                </div>
              </div>
            </div>
            
            <a href="https://g.page/r/" target="_blank" rel="noopener noreferrer" className={styles.reviewButton}>
              Review Us on Google
            </a>
          </div>
        </div>

        <div className={styles.testimonialScroller}>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Very professional and great communicators. The programmer did an amazing job keeping his patience. Always available to answer questions. Zero ego, friendly and respectful."</p>
            <div className={styles.clientName}>— Chirag Murabia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"They perfectly captured my vision and brought it to life with creativity and technical expertise. The entire process was smooth, and her attention to detail made all the difference."</p>
            <div className={styles.clientName}>— Tejbeer Bhullar</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Beeclue is the best as I had really a great experience. Very affordable and they listen to customer demands in detail and do everything accordingly. Highly recommend!"</p>
            <div className={styles.clientName}>— Supreet Bhatia</div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.stars}>★★★★★</div>
            <p>"Thank you for helping me grow my startup. Your web team is really admirable. Exactly what I wanted. Thank you for your efforts and great work!"</p>
            <div className={styles.clientName}>— Payal Sharma</div>
          </div>
        </div>
      </FadeIn>

      {/* FOOTER CTA */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>Let's Build Something Powerful</h2>
          <p className={styles.footerSub}>Start your project today and build digital solutions designed for growth.</p>
          <div className={styles.footerActions}>
            <Link href="/contact" className={styles.ctaButtonLight}>
              Start a Project
            </Link>
          </div>
          <div className={styles.footerContact}>
            <a href="mailto:hello@beeclue.com" className={styles.emailLink}>
              hello@beeclue.com
            </a>
            <a href="tel:+16479476253" className={styles.emailLink}>
              +1 (647) 947-6253
            </a>
            <p className={styles.footerLocation}>36 Carslake Crescent, Toronto, ON M1J 2A7</p>
            <div className={styles.legalLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
