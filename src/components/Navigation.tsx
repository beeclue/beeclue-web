"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from 'framer-motion';
import styles from "./Navigation.module.css";
import { Menu, X, Plus, Minus, ChevronDown, ArrowRight, Code, Layout, Smartphone, ShoppingCart, Search, Palette, Globe, Bot } from "lucide-react";
import { usePathname } from "next/navigation";

const servicesDropdown = [
  {
    name: "Web Design & Development",
    href: "/web-design-toronto/",
    desc: "Fast, custom Next.js websites built to convert.",
    icon: Layout,
  },
  {
    name: "Custom Software & SaaS",
    href: "/custom-software-development-toronto/",
    desc: "Robust backends and client management portals.",
    icon: Code,
  },
  {
    name: "Mobile App Development",
    href: "/mobile-app-development-toronto/",
    desc: "Native iOS & Android apps built with React Native.",
    icon: Smartphone,
  },
  {
    name: "E-Commerce Development",
    href: "/ecommerce-development-toronto/",
    desc: "Shopify Plus & custom headless digital stores.",
    icon: ShoppingCart,
  },
  {
    name: "SEO & Search Visibility",
    href: "/seo-services-toronto/",
    desc: "Local GTA search optimization and AEO visibility.",
    icon: Search,
  },
  {
    name: "UI/UX Design & Branding",
    href: "/ui-ux-design-toronto/",
    desc: "Modern digital interfaces and design systems.",
    icon: Palette,
  },
  {
    name: "WordPress Web Design",
    href: "/wordpress-web-design-canada/",
    desc: "Custom hand-coded themes with zero plugin bloat.",
    icon: Globe,
  },
  {
    name: "AI Readiness Checker",
    href: "/ai-readiness-checker",
    desc: "Free automated audit for ChatGPT & AEO visibility.",
    icon: Bot,
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
      { name: "AI Readiness Checker (Free Tool)", href: "/ai-readiness-checker" },
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
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blogs" },
  { name: "About", href: "/about-us/" },
  { name: "Contact", href: "/contact/" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for desktop sticky nav background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setDesktopServicesOpen(false);
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

  // Animation Variants for Mobile Overlay
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

  const isServicesActive = pathname.startsWith("/services") || 
    pathname.includes("development") || 
    pathname.includes("design-toronto") || 
    pathname.includes("seo-services") ||
    pathname === "/ai-readiness-checker";

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP TOP STICKY NAVIGATION BAR (Min-width: 1024px)     */}
      {/* ========================================================= */}
      <header className={`${styles.desktopNav} ${isScrolled ? styles.desktopNavScrolled : ""}`}>
        <div className={styles.desktopNavContainer}>
          
          {/* Logo */}
          <Link href="/" className={styles.desktopLogo} aria-label="Beeclue Tech Home">
            <Image
              src="/beeclue-logo.png"
              alt="Beeclue Tech"
              width={145}
              height={36}
              priority
              className={styles.desktopLogoImg}
            />
          </Link>

          {/* Nav Links */}
          <nav className={styles.desktopLinks} aria-label="Main Navigation">
            <Link 
              href="/" 
              className={`${styles.desktopLink} ${pathname === "/" ? styles.desktopLinkActive : ""}`}
            >
              Home
            </Link>

            {/* Services with Dropdown */}
            <div 
              className={styles.dropdownContainer}
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <Link 
                href="/services" 
                className={`${styles.desktopLink} ${isServicesActive ? styles.desktopLinkActive : ""}`}
                aria-expanded={desktopServicesOpen}
              >
                <span>Services</span>
                <ChevronDown size={14} className={`${styles.chevron} ${desktopServicesOpen ? styles.chevronOpen : ""}`} />
              </Link>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <m.div
                    className={styles.dropdownMenu}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div className={styles.dropdownGrid}>
                      {servicesDropdown.map((service, i) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={i} 
                            href={service.href} 
                            className={styles.dropdownItem}
                            onClick={() => setDesktopServicesOpen(false)}
                          >
                            <div className={styles.dropdownIconWrap}>
                              <Icon size={16} />
                            </div>
                            <div className={styles.dropdownTextWrap}>
                              <span className={styles.dropdownItemTitle}>{service.name}</span>
                              <span className={styles.dropdownItemDesc}>{service.desc}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className={styles.dropdownFooter}>
                      <Link 
                        href="/services" 
                        className={styles.dropdownFooterLink}
                        onClick={() => setDesktopServicesOpen(false)}
                      >
                        Explore All Agency Capabilities <ArrowRight size={14} />
                      </Link>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/case-studies" 
              className={`${styles.desktopLink} ${pathname.startsWith("/case-studies") ? styles.desktopLinkActive : ""}`}
            >
              Case Studies
            </Link>

            <Link 
              href="/pricing" 
              className={`${styles.desktopLink} ${pathname === "/pricing" ? styles.desktopLinkActive : ""}`}
            >
              Pricing
            </Link>

            <Link 
              href="/blogs" 
              className={`${styles.desktopLink} ${pathname.startsWith("/blogs") ? styles.desktopLinkActive : ""}`}
            >
              Blog
            </Link>

            <Link 
              href="/about-us" 
              className={`${styles.desktopLink} ${pathname === "/about-us" ? styles.desktopLinkActive : ""}`}
            >
              About
            </Link>

            <Link 
              href="/contact" 
              className={`${styles.desktopLink} ${pathname === "/contact" ? styles.desktopLinkActive : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Call to Action */}
          <div className={styles.desktopActions}>
            <Link href="/contact" className={styles.desktopCtaBtn}>
              <span>Get an Audit</span>
              <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* MOBILE FLOATING PILL TRIGGER (Max-width: 1023px)          */}
      {/* ========================================================= */}
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

      {/* ========================================================= */}
      {/* MOBILE FULL SCREEN OVERLAY                                */}
      {/* ========================================================= */}
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
