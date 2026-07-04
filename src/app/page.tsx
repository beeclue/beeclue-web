"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { ArrowRight, Code, LayoutTemplate, Smartphone, ShoppingCart, Search, CheckCircle2, Cloud, Scissors, Stethoscope, UtensilsCrossed, Building2, Heart, Scale, HardHat } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { trackCTAClick } from "@/lib/analytics";

// Dynamically import the 3D scene to avoid SSR issues
export default function Home() {
  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Beeclue",
            "url": "https://beeclue.com",
            "logo": "https://beeclue.com/logo.png",
            "description": "Toronto-based digital development agency",
            "areaServed": { "@type": "Country", "name": "Canada" },
            "knowsAbout": ["Web Design", "Custom Software Development", "E-Commerce", "Mobile Apps", "SEO"]
          })
        }}
      />
      {/* HERO SECTION */}
      <FadeIn className={styles.hero}>
        <div className={styles.heroContent}>
          {/* Visually Hidden SEO H1 */}
          <h1 className={styles.srOnly}>Toronto's Premier Web Design & Software Development Agency</h1>

          <div className={styles.title} aria-hidden="true">
            <span className={styles.titleLine}>Websites</span>
            <span className={styles.titleLine}>That Bring You</span>
            <span className={styles.titleLinePrimary}>Customers</span>
          </div>
          <p className={styles.subtitle}>
            We design and build custom websites for Toronto small businesses that turn visitors into paying customers. No templates. No fluff. Just results.
          </p>
          <Link href="/contact" className={styles.ctaButton} onClick={() => trackCTAClick("hero_audit", "homepage_hero")}>
            Get Your Free Website Audit <ArrowRight className={styles.arrow} />
          </Link>
          <p className={styles.heroMicrocopy}>Free &bull; No obligation &bull; Takes 2 minutes</p>
          <div className={styles.heroTrustBar}>
            <div className={styles.trustItem}>
              <Image src="/google-logo.svg" alt="Google" width="20" height="20" priority />
              <span className={styles.trustStars}>★★★★★</span>
              <span className={styles.trustLabel}>5.0</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <Image src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="Trustpilot 5 Stars" width="80" height="16" priority />
              <span className={styles.trustLabel}>Excellent</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustLabel}>Trusted by 50+ Toronto businesses</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ABOUT & STATS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.aboutSection}`}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <h2>Engineering Growth Through Technology in Toronto & Beyond</h2>
            <p>
              Your website should generate leads — not just exist. At Beeclue Tech, a premier Toronto-based agency, we partner with Canadian startups, innovative entrepreneurs, and US enterprise companies to create robust technology solutions that improve efficiency, automate daily operations, and accelerate business growth. 
            </p>
            <p>
              We don't rely on cookie-cutter templates or bloated page builders. Every digital solution—from a high-converting corporate website to a complex custom SaaS platform—is architected from the ground up using modern technologies to ensure lightning-fast performance, bulletproof security, and long-term technical viability.
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>9+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Enterprise Projects</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* SERVICES SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.servicesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Our Core Development Expertise</h2>
          <p>Complete, end-to-end digital solutions designed to give you a competitive, scalable online presence.</p>
        </div>
        
        <div className={styles.scroller}>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>Premium Web Design & Development</h3>
            <p>We craft modern, luxury web interfaces using Next.js, React, and tailored CMS solutions like WordPress. Fast, mobile-first, and structured for maximum usability and search engine visibility.</p>
            <Link href="/web-design-toronto/" className={styles.learnMoreLink} aria-label="Learn more about Web Design & Development">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.serviceCard}>
            <Code className={styles.serviceIcon} />
            <h3>Custom Software & SaaS</h3>
            <p>From complex internal management portals to highly scalable B2B SaaS platforms. We build reliable, secure backends using Node.js, Python, and scalable cloud architectures.</p>
            <Link href="/custom-software-development-toronto/" className={styles.learnMoreLink} aria-label="Learn more about Custom Software & SaaS Development">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.serviceCard}>
            <Smartphone className={styles.serviceIcon} />
            <h3>Mobile App Development</h3>
            <p>Powerful, native-feeling mobile applications for iOS and Android using React Native and Swift. We take you from startup MVPs to full-scale, globally distributed enterprise products.</p>
            <Link href="/mobile-app-development-toronto/" className={styles.learnMoreLink} aria-label="Learn more about Mobile App Development">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.serviceCard}>
            <ShoppingCart className={styles.serviceIcon} />
            <h3>Ecommerce Development</h3>
            <p>Secure, beautifully designed online stores built on Shopify Plus or custom headless architectures. Optimized for blazing speed, seamless checkout, and customer retention.</p>
            <Link href="/ecommerce-development-toronto/" className={styles.learnMoreLink} aria-label="Learn more about Ecommerce Development">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.serviceCard}>
            <Search className={styles.serviceIcon} />
            <h3>SEO & Digital Visibility</h3>
            <p>Strategic local Toronto SEO and broad international search engine optimization. We improve your organic rankings, increase traffic volume, and generate highly qualified leads.</p>
            <Link href="/seo-services-toronto/" className={styles.learnMoreLink} aria-label="Learn more about SEO & Digital Visibility Services">Learn More <ArrowRight size={16} /></Link>
          </div>
          <div className={styles.serviceCard}>
            <LayoutTemplate className={styles.serviceIcon} />
            <h3>UI/UX Design & Branding</h3>
            <p>We create stunning, user-centric interfaces and brand identities that captivate your audience. Effortlessly transform your ideas into stunning, professional layouts with ease.</p>
            <Link href="/ui-ux-design-toronto/" className={styles.learnMoreLink} aria-label="Learn more about UI/UX Design & Branding">Learn More <ArrowRight size={16} /></Link>
          </div>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <Link href="/services" className={styles.ctaButtonLight}>
            View All Services <ArrowRight className={styles.arrow} size={20} />
          </Link>
        </div>
      </FadeIn>

      {/* INDUSTRIES SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.industriesSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Industries We Serve</h2>
          <p>Specialized web solutions tailored to your industry&apos;s unique needs.</p>
        </div>
        
        <div className={styles.industriesGrid}>
          <Link href="/web-design-for-salons" className={styles.industryCard}>
            <Scissors className={styles.industryIcon} />
            <h3>Salons & Barbershops</h3>
            <p>Online booking, portfolio galleries, and local SEO to fill your chairs.</p>
            <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
          </Link>
          
          <Link href="/web-design-for-dental-clinics" className={styles.industryCard}>
            <Stethoscope className={styles.industryIcon} />
            <h3>Dental Clinics</h3>
            <p>Patient portals, appointment booking, and HIPAA-compliant forms.</p>
            <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
          </Link>
          
          <Link href="/web-design-for-restaurants" className={styles.industryCard}>
            <UtensilsCrossed className={styles.industryIcon} />
            <h3>Restaurants</h3>
            <p>Online ordering, reservation systems, and menu management.</p>
            <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
          </Link>
          
          <Link href="/web-design-for-real-estate" className={styles.industryCard}>
            <Building2 className={styles.industryIcon} />
            <h3>Real Estate</h3>
            <p>MLS/IDX integration, virtual tours, and lead capture forms.</p>
            <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
          </Link>
          
          <Link href="/web-design-for-healthcare" className={styles.industryCard}>
            <Heart className={styles.industryIcon} />
            <h3>Healthcare</h3>
            <p>Medical practice websites with patient portals and secure forms.</p>
            <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
          </Link>
          
          <Link href="/web-design-for-law-firms" className={styles.industryCard}>
            <Scale className={styles.industryIcon} />
            <h3>Law Firms</h3>
            <p>Case evaluation forms, attorney profiles, and professional design.</p>
            <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
          </Link>
          
          <Link href="/web-design-for-construction-companies" className={styles.industryCard}>
            <HardHat className={styles.industryIcon} />
            <h3>Construction</h3>
            <p>Project portfolios, quote request forms, and local SEO.</p>
            <span className={styles.learnMoreLink}>Learn More <ArrowRight size={16} /></span>
          </Link>
        </div>
      </FadeIn>

      {/* FEATURED WORK SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.featuredSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Featured Case Studies</h2>
          <p>A look at how we transform business challenges into scalable technical solutions.</p>
        </div>
        <div className={styles.featuredGrid}>
          <Link href="/case-studies/new-angkor-wat" className={styles.featuredCard}>
            <div className={styles.featuredImagePlaceholder} style={{ padding: 0, position: 'relative' }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/newangkorwat.webp"
                alt="New Angkor Wat"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', padding: '2rem 0' }}
              />
            </div>
            <div className={styles.featuredContent}>
              <h3>New Angkor Wat — Digital Platform</h3>
              <p>We partnered with author David P. Cross to build a comprehensive, highly engaging digital platform promoting his book and charitable organization.</p>
              <div className={styles.techTags}>
                <span>Next.js</span><span>Web Design</span><span>Animations</span>
              </div>
            </div>
          </Link>
          <Link href="/case-studies/sure-shot-photobooth" className={styles.featuredCard}>
            <div className={styles.featuredImagePlaceholder} style={{ padding: 0, position: 'relative' }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/sure-shot-photobooth-rental.webp"
                alt="Sure Shot Photobooth"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', padding: '2rem 0' }}
              />
            </div>
            <div className={styles.featuredContent}>
              <h3>Sure Shot Photobooth — Web Experience</h3>
              <p>We partnered with Sure Shot Photobooth to elevate their digital presence with a highly interactive, modern Next.js website featuring immersive animations.</p>
              <div className={styles.techTags}>
                <span>Next.js</span><span>Animations</span><span>SEO</span>
              </div>
            </div>
          </Link>
          <Link href="/case-studies/blues-contracting-services" className={styles.featuredCard}>
            <div className={styles.featuredImagePlaceholder} style={{ padding: 0, position: 'relative' }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/blues-contracting-services.webp"
                alt="Blues Contracting Services"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', padding: '2rem 0' }}
              />
            </div>
            <div className={styles.featuredContent}>
              <h3>Blues Contracting — Digital Transformation</h3>
              <p>We completely revitalized the web presence for Blues Contracting Services using modern Next.js technology, strategic UX design, and rigorous technical SEO.</p>
              <div className={styles.techTags}>
                <span>Next.js</span><span>UX Design</span><span>SEO</span>
              </div>
            </div>
          </Link>
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <Link href="/case-studies" className={styles.ctaButtonLight}>
            View All Case Studies <ArrowRight className={styles.arrow} size={20} />
          </Link>
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

      {/* PROCESS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.processSection}`}>
        <h2>A Proven Development Framework</h2>
        <div className={styles.processTimeline}>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>01</span>
            <h3>Discover</h3>
            <p>We analyze your business goals, target audience, and competitors to define a clear technical strategy.</p>
          </div>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>02</span>
            <h3>Exploration</h3>
            <p>Designing system architecture, user journeys, and intuitive layouts that deliver engaging user experiences.</p>
          </div>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>03</span>
            <h3>Execution</h3>
            <p>Building the platform using industry best practices, focusing on performance, scalability, and security.</p>
          </div>
          <div className={styles.processStep}>
            <span className={styles.stepNumber}>04</span>
            <h3>Launch</h3>
            <p>Rigorous cross-device testing before deployment, followed by ongoing monitoring to ensure long-term success.</p>
          </div>
        </div>
      </FadeIn>

      {/* TESTIMONIALS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.testimonialsSection}`}>
        <div className={styles.testimonialsTop}>
          <h2>What Our Clients Say</h2>
          
          <div className={styles.reviewsMeta}>
            <div className={styles.ratingsBadges}>
              <div className={styles.ratingBadge}>
                <Image src="/google-logo.svg" alt="Google" width="24" height="24" priority />
                <div className={styles.ratingInfo}>
                  <div className={styles.ratingStars}>★★★★★</div>
                  <span className={styles.ratingText}>5.0 Rating</span>
                </div>
              </div>
              <div className={styles.ratingBadge}>
                <Image src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="Trustpilot 5 Stars" width="100" height="20" priority />
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

      {/* PRODUCTS SECTION */}
      <FadeIn className={`${styles.baseSection} ${styles.featuredSection}`}>
        <div className={styles.servicesHeader}>
          <h2>Products Built by Beeclue</h2>
          <p>Proprietary software and applications engineered in-house by our development team.</p>
        </div>
        <div className={styles.featuredGrid}>
          <Link href="/products/monexa" className={styles.featuredCard}>
            <div className={styles.featuredImagePlaceholder} style={{ padding: 0, position: 'relative' }}>
              <Image 
                src="https://cdn.jsdelivr.net/gh/beeclue/clients@main/self/monexa.png"
                alt="Monexa Logo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', padding: '3rem' }}
              />
            </div>
            <div className={styles.featuredContent}>
              <h3>Monexa — Personal Finance Manager</h3>
              <p>The simple, beautiful, and powerful way to track expenses, manage budgets, and achieve your financial goals effortlessly.</p>
              <div className={styles.techTags}>
                <span>Finance</span><span>AI Insights</span><span>Budgeting</span>
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>
    </main>
  );
}
