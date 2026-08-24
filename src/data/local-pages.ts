export interface LocalPageConfig {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheader: string;
  primaryNiches: string[];
  localStat: {
    stat: string;
    label: string;
  };
  featuredCaseStudy: {
    title: string;
    description: string;
    tech: string[];
    link: string;
  };
}

export const localPagesData: Record<string, LocalPageConfig> = {
  huntsville: {
    slug: 'huntsville',
    city: 'Huntsville',
    region: 'Muskoka',
    metaTitle: 'Web Design in Huntsville | High-Speed Websites | Beeclue',
    metaDescription: 'Looking for a professional web designer in Huntsville, ON? We build and manage high-speed, mobile-friendly websites for local businesses starting at $29/mo.',
    h1: 'High-Speed Web Design in Huntsville',
    subheader: 'Managed website subscriptions for Huntsville businesses and trades starting at $29/month. Hosting, security, and updates included — zero effort on your part.',
    primaryNiches: ['Law Firms', 'Cottage Services', 'Tourism & Hospitality', 'Contractors'],
    localStat: { stat: '82%', label: 'of Huntsville residents search mobile first to find local services and contractors' },
    featuredCaseStudy: {
      title: 'Tara Lattanzio Family Law',
      description: 'A custom high-performance website designed for an Ontario family law attorney, delivering fast mobile load times and client intake capability.',
      tech: ['Speed Optimization', 'Client Booking', 'Mobile Design'],
      link: '/case-studies/tara-lattanzio'
    }
  },
  cobourg: {
    slug: 'cobourg',
    city: 'Cobourg',
    region: 'Northumberland County',
    metaTitle: 'Web Design in Cobourg | High-Speed Websites | Beeclue',
    metaDescription: 'Looking for a professional web designer in Cobourg, ON? We build and manage high-speed, mobile-friendly websites for local businesses starting at $29/mo.',
    h1: 'High-Speed Web Design in Cobourg',
    subheader: 'Managed website subscriptions for Cobourg contractors, local services, and shops starting at $29/month. We handle design, hosting, and monthly updates for you.',
    primaryNiches: ['Plumbing & HVAC', 'Construction Contractors', 'Professional Services', 'Local Shops'],
    localStat: { stat: '9/10', label: 'local consumers bypass service contractors who lack a mobile-friendly website' },
    featuredCaseStudy: {
      title: 'Blues Contracting Services',
      description: 'A responsive digital showcase for custom builds, framing, and renovations, helping them stand out and secure local contracts.',
      tech: ['Modern Layout', 'Project Showcase', 'Fast Loading'],
      link: '/case-studies/blues-contracting-services'
    }
  },
  'port-hope': {
    slug: 'port-hope',
    city: 'Port Hope',
    region: 'Northumberland County',
    metaTitle: 'Web Design in Port Hope | High-Speed Websites | Beeclue',
    metaDescription: 'Looking for a professional web designer in Port Hope, ON? We build and manage high-speed, mobile-friendly websites for local businesses starting at $29/mo.',
    h1: 'High-Speed Web Design in Port Hope',
    subheader: 'Get a professional, managed website for your Port Hope business starting at $29/month. We manage hosting, domains, security, and updates so you can run your business.',
    primaryNiches: ['Local Retailers', 'Tradesmen & Contractors', 'B&Bs & Tourism', 'Professional Offices'],
    localStat: { stat: '78%', label: 'of Port Hope residents check online before hiring local trades and professional services' },
    featuredCaseStudy: {
      title: 'Blues Contracting Services',
      description: 'A responsive digital showcase for custom builds, framing, and renovations, helping them stand out and secure local contracts.',
      tech: ['Modern Layout', 'Project Showcase', 'Fast Loading'],
      link: '/case-studies/blues-contracting-services'
    }
  },
  pembroke: {
    slug: 'pembroke',
    city: 'Pembroke',
    region: 'Renfrew County',
    metaTitle: 'Web Design in Pembroke | High-Speed Websites | Beeclue',
    metaDescription: 'Looking for a professional web designer in Pembroke, ON? We build and manage high-speed, mobile-friendly websites for local businesses starting at $29/mo.',
    h1: 'High-Speed Web Design in Pembroke',
    subheader: 'Get a fully managed, custom-designed business website in Pembroke for just $29/month. No setup fees, cancel anytime. Zero maintenance needed from you.',
    primaryNiches: ['Law Firms', 'Medical Practices', 'Plumbing & Electrical', 'Local Services'],
    localStat: { stat: '4.8x', label: 'higher customer trust and contact rates for businesses using a modern, fast mobile layout' },
    featuredCaseStudy: {
      title: 'Tara Lattanzio Family Law',
      description: 'A custom high-performance website designed for an Ontario family law attorney, delivering fast mobile load times and client intake capability.',
      tech: ['Speed Optimization', 'Client Booking', 'Mobile Design'],
      link: '/case-studies/tara-lattanzio'
    }
  },
  midland: {
    slug: 'midland',
    city: 'Midland',
    region: 'Simcoe County',
    metaTitle: 'Web Design in Midland | High-Speed Websites | Beeclue',
    metaDescription: 'Looking for a professional web designer in Midland, ON? We build and manage high-speed, mobile-friendly websites for local businesses starting at $29/mo.',
    h1: 'High-Speed Web Design in Midland',
    subheader: 'Managed website subscriptions for Midland trade services, retail shops, and professional offices for $29/month. Hosting and monthly updates fully included.',
    primaryNiches: ['Boating & Marine Services', 'Trade Contractors', 'Professional Services', 'Boutique Shops'],
    localStat: { stat: '85%', label: 'of Midland consumers search local services on mobile phones while on the go' },
    featuredCaseStudy: {
      title: 'Blues Contracting Services',
      description: 'A responsive digital showcase for custom builds, framing, and renovations, helping them stand out and secure local contracts.',
      tech: ['Modern Layout', 'Project Showcase', 'Fast Loading'],
      link: '/case-studies/blues-contracting-services'
    }
  },
  orillia: {
    slug: 'orillia',
    city: 'Orillia',
    region: 'Simcoe County',
    metaTitle: 'Web Design in Orillia | High-Speed Websites | Beeclue',
    metaDescription: 'Looking for a professional web designer in Orillia, ON? We build and manage high-speed, mobile-friendly websites for local businesses starting at $29/mo.',
    h1: 'High-Speed Web Design in Orillia',
    subheader: 'Get a premium, managed business website in Orillia for only $29/month. We handle design, setup, hosting, and all future content changes for you.',
    primaryNiches: ['Tourism & Recreation', 'General Contractors', 'Accounting & Legal', 'Retailers'],
    localStat: { stat: '92%', label: 'increase in client inquiries on average when upgrading from slow WordPress to high-speed sites' },
    featuredCaseStudy: {
      title: 'Blues Contracting Services',
      description: 'A responsive digital showcase for custom builds, framing, and renovations, helping them stand out and secure local contracts.',
      tech: ['Modern Layout', 'Project Showcase', 'Fast Loading'],
      link: '/case-studies/blues-contracting-services'
    }
  },
  'owen-sound': {
    slug: 'owen-sound',
    city: 'Owen Sound',
    region: 'Grey County',
    metaTitle: 'Web Design in Owen Sound | High-Speed Websites | Beeclue',
    metaDescription: 'Looking for a professional web designer in Owen Sound, ON? We build and manage high-speed, mobile-friendly websites for local businesses starting at $29/mo.',
    h1: 'High-Speed Web Design in Owen Sound',
    subheader: 'Managed website subscriptions for Owen Sound contractors, small businesses, and professional offices for $29/month. Hosting and updates fully included.',
    primaryNiches: ['Construction & Masonry', 'Home Renovation Services', 'Accounting & Advisory', 'Professional Services'],
    localStat: { stat: '80%', label: 'of Owen Sound residents trust businesses with a professional website over a Facebook page only' },
    featuredCaseStudy: {
      title: 'Blues Contracting Services',
      description: 'A responsive digital showcase for custom builds, framing, and renovations, helping them stand out and secure local contracts.',
      tech: ['Modern Layout', 'Project Showcase', 'Fast Loading'],
      link: '/case-studies/blues-contracting-services'
    }
  }
};
