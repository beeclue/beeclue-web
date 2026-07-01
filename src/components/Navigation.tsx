"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from 'framer-motion';
import styles from "./Navigation.module.css";
import { Menu, X, Plus, Minus } from "lucide-react";
import { usePathname } from "next/navigation";

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
