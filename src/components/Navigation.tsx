"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from 'framer-motion';
import styles from "./Navigation.module.css";
import { Menu, X, Plus, Minus } from "lucide-react";
import { usePathname } from "next/navigation";

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const socialLinks = [
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    href: "https://facebook.com/fb.beeclue?utm_source=beeclue_web&utm_medium=website_nav&utm_campaign=social_click",
  },
  {
    name: "LinkedIn",
    icon: <LinkedinIcon />,
    href: "https://linkedin.com/company/beeclue?utm_source=beeclue_web&utm_medium=website_nav&utm_campaign=social_click",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    href: "https://instagram.com/bee.clue.ca?utm_source=beeclue_web&utm_medium=website_nav&utm_campaign=social_click",
  },
  {
    name: "WhatsApp",
    icon: <WhatsAppIcon />,
    href: "https://wa.me/16479476253",
  },
];

const menuLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services/",
    isNested: true,
    children: [
      { name: "All Services", href: "/services/" },
      { name: "Web Design & Development", href: "/web-design-toronto/" },
      { name: "Custom Software", href: "/custom-software-development-toronto/" },
      { name: "Mobile Apps", href: "/mobile-app-development-toronto/" },
      { name: "E-Commerce", href: "/ecommerce-development-toronto/" },
      { name: "SEO & Marketing", href: "/seo-services-toronto/" },
      { name: "UI/UX Design", href: "/ui-ux-design-toronto/" },
      { name: "WordPress Design", href: "/wordpress-web-design-canada/" },
    ]
  },
  { name: "Case Studies", href: "/case-studies/" },
  { name: "About", href: "/about-us/" },
  { name: "Contact", href: "/contact/" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  // Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
    }
  };

  const containerVariants = {
    closed: {},
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const nestedContainerVariants = {
    closed: { height: 0, opacity: 0, overflow: "hidden", transition: { duration: 0.4, ease: "easeInOut" as const } },
    open: { height: "auto", opacity: 1, overflow: "hidden", transition: { duration: 0.4, ease: "easeInOut" as const } }
  };

  return (
    <>
      {/* Floating Pill Trigger */}
      <button 
        className={`${styles.triggerPill} ${isOpen ? styles.triggerPillOpen : ""}`} 
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <div className={styles.pillContent}>
          <span className={styles.pillText}>{isOpen ? "Close" : "Menu"}</span>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </div>
      </button>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div 
            className={styles.overlay}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            data-lenis-prevent="true"
          >
            <m.div 
              className={styles.menuContainer}
              variants={containerVariants}
              initial="closed"
              animate="open"
            >
              <nav className={styles.nav}>
                {menuLinks.map((link, i) => (
                  <m.div key={i} variants={itemVariants} className={styles.navItemWrapper}>
                    {link.isNested ? (
                      <div className={styles.nestedWrapper}>
                        <button 
                          className={styles.navLink} 
                          onClick={toggleServices}
                          style={{ color: isServicesOpen ? "var(--primary)" : "var(--foreground)" }}
                        >
                          {link.name}
                          <span className={styles.nestedIcon}>
                            {isServicesOpen ? <Minus size={32} /> : <Plus size={32} />}
                          </span>
                        </button>
                        <AnimatePresence>
                          {isServicesOpen && (
                            <m.div 
                              className={styles.nestedList}
                              variants={nestedContainerVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                            >
                              {link.children?.map((child, j) => (
                                <Link href={child.href} key={j} className={styles.nestedLink}>
                                  {child.name}
                                </Link>
                              ))}
                            </m.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link href={link.href || "#"} className={styles.navLink}>
                        {link.name}
                      </Link>
                    )}
                  </m.div>
                ))}
              </nav>

              <m.div variants={itemVariants} className={styles.footer}>
                <div className={styles.socialLinks}>
                  {socialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
                <div className={styles.contactInfo}>
                  <a href="mailto:hello@beeclue.com">hello@beeclue.com</a>
                  <a href="tel:+16479476253">+1 (647) 947-6253</a>
                  <span>Toronto, ON</span>
                </div>
              </m.div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
