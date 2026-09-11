const fs = require('fs');
const path = require('path');

const leads = [
  // 1. Auto Detailing & Tinting
  {
    businessName: "Deluxe Detailing Brampton",
    contactName: "Owner / Lead Detailer",
    category: "Mobile Auto Detailing",
    city: "Brampton, ON",
    phone: "(647) 564-9766",
    secondaryContact: "Facebook: @DeluxeDetailingBrampton",
    webPresenceStatus: "Facebook Page only (active since 2016), no dedicated website domain",
    keyServices: "Bronze ($50), Silver ($80), Gold ($120), Deluxe ($160) mobile interior/exterior detailing packages",
    painPoint: "Has operated for 8+ years with clear tiered packages and loyal clientele, but loses high-volume Google search leads because there is no website or online booking calendar.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Deluxe Detailing! Saw your detailing packages on Facebook and reviews in Brampton. Are you guys currently taking bookings through a website, or just calls and DMs? We can design a clean 5-page website preview for you with online package booking for $29/mo with zero setup fee."
  },
  {
    businessName: "Ink N Shine Detailing",
    contactName: "Lead Detailer",
    category: "Mobile Auto Detailing",
    city: "Mississauga & Brampton, ON",
    phone: "(416) 919-8421",
    secondaryContact: "(416) 908-8435 / inknshinedetailing@gmail.com",
    webPresenceStatus: "Facebook Page only (@inknshinedetailing), no dedicated website domain",
    keyServices: "Full vehicle restoration, interior shampoo, paint polish (strictly limits to 2 vehicles/day)",
    painPoint: "Premium mobile-only detailer limiting jobs to 2/day for top quality, but spends excessive time manually qualifying leads in DMs and texts instead of using an automated booking intake portal.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hey Ink N Shine! Loved your mobile restoration work. Since you limit bookings to 2 vehicles a day, we can design a free booking website preview for you so clients can reserve spots without DM back-and-forth for $29/mo ($0 setup). Want to take a look?"
  },
  {
    businessName: "ProFinish Car Detailing",
    contactName: "Lead Detailer",
    category: "Mobile & Studio Auto Detailing",
    city: "Scarborough, ON (32 Telfer Gardens)",
    phone: "(647) 606-8994",
    secondaryContact: "IG: @profinish_cardetailing / TikTok: @profinishcar_detailing",
    webPresenceStatus: "Instagram & Facebook only, no website domain",
    keyServices: "Deep interior cleaning, seat shampoo, hand wash & wax, Uber/rideshare detailing, rim restoration",
    painPoint: "Very active on Instagram/TikTok showcasing showroom finishes, but has zero Google search presence or mobile booking page in Scarborough for organic client acquisition.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi ProFinish! Saw your car transformations on Instagram in Scarborough. Notice you take bookings via text/call—we can design a free mobile-friendly booking website for you at $29/mo so clients can book directly off Google. Want to see a concept?"
  },
  {
    businessName: "ShineXpert Detailing",
    contactName: "Lead Detailer",
    category: "Mobile Auto Detailing & Paint Correction",
    city: "Brampton & GTA, ON",
    phone: "(647) 612-0140",
    secondaryContact: "(647) 894-3994",
    webPresenceStatus: "Facebook Page only, no dedicated company website",
    keyServices: "Steam cleaning, carpet shampoo, ceramic coating, post-winter salt removal packages from $120",
    painPoint: "Actively promotes seasonal salt-removal and ceramic coating packages on social media, but lacks a dedicated landing page to collect customer vehicle specs, address, and schedule appointments.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi ShineXpert! Saw your mobile detailing promotions in Brampton. Are you taking spring/fall bookings through a website yet? We can design a free 5-page website preview for you with online quote requests for $29/mo ($0 setup)."
  },
  {
    businessName: "Mobile Detailing GTA (Raza Jafri)",
    contactName: "Raza Jafri",
    category: "Mobile Car Detailing",
    city: "Scarborough & East GTA, ON",
    phone: "(647) 545-2069",
    secondaryContact: "Facebook Marketplace / Local Listings",
    webPresenceStatus: "Facebook page & local listings only, no website",
    keyServices: "Tiered mobile detailing packages (Silver, Gold, Diamond), interior shampoo, exterior hand wax",
    painPoint: "High reliance on manual phone/text inquiries and community groups without a professional landing page showcasing package differences.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Raza! Saw your mobile detailing tiers in Scarborough. We can design a clean 5-page mobile website preview showing package pricing and booking forms for $29/mo with $0 upfront. Would you like to see it?"
  },
  {
    businessName: "Certified Auto Care",
    contactName: "Operations Manager",
    category: "Mobile Detailing & Steam Cleaning",
    city: "Brampton, ON",
    phone: "(647) 323-0212",
    secondaryContact: "(905) 782-9000",
    webPresenceStatus: "Facebook Page only, no website domain",
    keyServices: "Mobile interior steam cleaning, shampooing, odor elimination, exterior paint protection",
    painPoint: "Explaining service inclusions over the phone takes too long; an interactive pricing table and quote form would increase booking conversion.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Certified Auto Care! Noticed you offer mobile steam cleaning in Brampton but don't have a website linked on your profile. We can design a free modern 5-page website preview for your auto care business at $29/mo with zero setup. Interested?"
  },
  {
    businessName: "Eezy Peezy Car Detailing",
    contactName: "Lead Detailer",
    category: "Mobile Auto Detailing",
    city: "Scarborough & Markham, ON",
    phone: "(416) 230-5170",
    secondaryContact: "Facebook: Eezy Peezy Car Detailing",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "Mobile detailing, engine bay cleaning, headlight restoration, interior sterilization",
    painPoint: "Specialized services like engine bay cleaning and headlight restoration convert far better with before/after visual sliders on a custom website.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Eezy Peezy! Saw your mobile detailing and headlight restoration work in Scarborough/Markham. We can design a clean mobile website preview showcasing before/after work and quote forms for $29/mo with $0 upfront. Would you like to check it out?"
  },
  {
    businessName: "Emillio’s Mobile Car Detailing",
    contactName: "Emillio (Owner)",
    category: "Mobile Car Detailing",
    city: "Markham & Stouffville, ON",
    phone: "(647) 325-4816",
    secondaryContact: "Facebook: Emillio's Mobile Car Detailing",
    webPresenceStatus: "Facebook page only, no website domain",
    keyServices: "Full interior detailing, stain removal, leather/plastic re-shining, mobile service to home/office",
    painPoint: "Serves affluent vehicle owners in Markham and Stouffville who expect a polished, professional web booking experience rather than sending Facebook DMs.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Emillio! Saw your interior detailing work in Markham & Stouffville. Have you thought about having an online booking website so clients don't have to wait for text replies? We can design a free website mockup for you at $29/mo ($0 setup)."
  },
  {
    businessName: "A1 Hand Carwash & Detailing",
    contactName: "Shop Manager",
    category: "Hand Car Wash & Detailing",
    city: "Scarborough, ON (2230 Kingston Rd)",
    phone: "(647) 862-8895",
    secondaryContact: "Local Directory listing",
    webPresenceStatus: "Physical location with directory listing only, no company website",
    keyServices: "Interior & exterior hand car wash, hand wax, tire shine, high-speed buffing",
    painPoint: "Prime retail location on Kingston Rd but has zero web presence to capture local residents searching for reputable hand wash and detailing near them.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi A1 Hand Carwash! Saw your Kingston Rd shop. We can design a clean 5-page website preview for your car care shop with package menus and hours for $19/mo with $0 setup. Would you like to see it?"
  },
  {
    businessName: "416 AUTO SPA",
    contactName: "Owner / Manager",
    category: "Auto Detailing Studio",
    city: "Scarborough, ON (24 Melham Court, Unit 5)",
    phone: "(647) 883-0113",
    secondaryContact: "Facebook: 416 Auto Spa",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "In-shop auto detailing, ceramic coating, paint correction, interior disinfection",
    painPoint: "High-end studio service without a website; customers investing $300–$800+ in ceramic coating expect a verified website showcasing warranties, product brands, and facilities.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi 416 Auto Spa! Saw your studio setup on Melham Court. For ceramic coatings and full details, a modern website builds instant trust. We can design a free website preview for you at $29/mo with $0 setup."
  },
  {
    businessName: "Everything Detailing & Tint",
    contactName: "Lead Installer",
    category: "Window Tinting & Vinyl Wraps",
    city: "Scarborough, Markham & Mississauga, ON",
    phone: "(647) 919-4622",
    secondaryContact: "Facebook: Everything Detailing",
    webPresenceStatus: "Facebook page only, no website domain",
    keyServices: "Automotive window tinting, ceramic coating, vinyl car wraps, custom styling",
    painPoint: "High-ticket custom wraps and ceramic jobs need a high-resolution visual gallery to close sports car and luxury SUV owners searching online.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Everything Detailing! Loved the vinyl wraps and tint jobs you've done in the GTA. We can design a free portfolio website preview for you with instant quote calculators for $29/mo with $0 setup. Want to take a look?"
  },
  {
    businessName: "Tint Express Canada",
    contactName: "Shop Manager",
    category: "Window Tint & Customization",
    city: "Mississauga & Scarborough, ON",
    phone: "(437) 989-0776",
    secondaryContact: "(647) 500-3412",
    webPresenceStatus: "Facebook page only, no dedicated company website",
    keyServices: "Window tinting starting at $49, ceramic tint, chrome delete, vinyl wraps",
    painPoint: "High transaction volume managed completely over text and social DM; an online booking flow with vehicle year/make/model selector would streamline bookings.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Tint Express! Saw your window tint and wrap work across Mississauga & Scarborough. We can design a custom vehicle tint estimator website preview for you at $29/mo with $0 setup. Interested?"
  },

  // 2. Plumbing & Drain Cleaning
  {
    businessName: "Yukon Plumbing & Mechanical Inc.",
    contactName: "Principal Contractor",
    category: "Plumbing & Mechanical Contracting",
    city: "Brampton & Peel Region, ON",
    phone: "(647) 336-0376",
    secondaryContact: "Facebook: facebook.com/376YUKON",
    webPresenceStatus: "Facebook listing only, no official corporate website",
    keyServices: "Residential and commercial plumbing, emergency pipe leak repairs, drain unclogging, mechanical repairs",
    painPoint: "Incorporated plumbing and mechanical company without a corporate website, which prevents winning lucrative commercial building maintenance contracts.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Yukon Plumbing! Noticed Yukon Plumbing & Mechanical doesn't have an official website for Brampton homeowners and commercial clients. We can design a free 5-page website preview for you at $29/mo with $0 setup."
  },
  {
    businessName: "Dayan Plumbing Inc.",
    contactName: "Andy (Master Plumber)",
    category: "Emergency Plumbing & Drain Cleaning",
    city: "Markham & Vaughan / GTA, ON",
    phone: "(647) 779-9887",
    secondaryContact: "(647) 642-2289 (Direct text Andy)",
    webPresenceStatus: "Facebook page only, broken placeholder link on business directories, no website",
    keyServices: "24/7 emergency plumbing, drain snaking, camera inspections, toilet/vanity/pipe repair",
    painPoint: "Homeowners in emergency plumbing situations look for a quick tap-to-call mobile site with licensing proof. The current broken directory link costs them high-ticket emergency calls.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Andy! Saw Dayan Plumbing recommended for emergency repairs in Brampton. Noticed you don't have a live website linked on Google for instant emergency calls. We can design a 5-page mobile website for you with tap-to-call for $29/mo with $0 setup."
  },
  {
    businessName: "AVA Plumbing & Renovation",
    contactName: "Project Lead",
    category: "Plumbing & Bathroom Renovation",
    city: "Richmond Hill, Vaughan & Markham, ON",
    phone: "(647) 674-2712",
    secondaryContact: "(647) 886-7204",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "Full bathroom remodels, plumbing repairs, drain & pipe work, drywall, tile, finish carpentry",
    painPoint: "High-ticket bathroom renovations ($8,000–$25,000) require an impressive photo gallery to convince York Region homeowners to hire them over big renovation studios.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi AVA Plumbing! Saw your bathroom renovation and plumbing projects in Markham & Vaughan. High-end remodels close much faster with a photo portfolio website. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "Lloyds Plumbing",
    contactName: "Lead Plumber",
    category: "24/7 Emergency Plumbing & Drain",
    city: "Brampton & Mississauga, ON",
    phone: "(647) 494-1140",
    secondaryContact: "Local community listing",
    webPresenceStatus: "Facebook / community directory only, no dedicated website",
    keyServices: "24/7 emergency response, clogged toilets, main drain clearing, leak detection, pipe bursts",
    painPoint: "Emergency plumbing commands top dollar ($200–$500+ per visit). Without an authoritative website, homeowners call larger competitors with Google Guaranteed ads.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Lloyds Plumbing! Noticed you offer 24/7 emergency plumbing in Brampton & Mississauga but don't have an official website listed. We can design a fast emergency tap-to-call website mockup for you for $29/mo with $0 setup."
  },
  {
    businessName: "ESA Plumbing Inc.",
    contactName: "Licensed Plumber",
    category: "Emergency Plumbing Services",
    city: "Brampton, ON",
    phone: "(647) 220-5462",
    secondaryContact: "Facebook: ESA Plumbing Inc",
    webPresenceStatus: "Facebook page only, no company website",
    keyServices: "24/7 emergency service, burst pipe repairs, bathroom rough-ins, drain repair",
    painPoint: "Relies strictly on Facebook posts and word-of-mouth; missing consistent organic local search traffic from homeowners searching 'plumber in Brampton'.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi ESA Plumbing! Saw your emergency plumbing posts in Brampton. We can design a free 5-page mobile website preview for your licensed plumbing business at $29/mo with zero setup fee. Interested?"
  },
  {
    businessName: "A&B Home Fix (Plumbing & Drains)",
    contactName: "Lead Technician",
    category: "Plumbing & Drain Repairs",
    city: "Brampton, ON",
    phone: "(437) 848-8747",
    secondaryContact: "Facebook Listing",
    webPresenceStatus: "Facebook post listing only, no website",
    keyServices: "Plumbing repairs, drain clearing, faucet/toilet replacements, sink installations",
    painPoint: "Independent technician operating without credibility assets; a simple 5-page site immediately establishes trust with local residential clients.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi A&B Home Fix! Saw your plumbing and drain repair services in Brampton. We can design a clean 5-page website preview for $19/mo ($0 setup) so homeowners can book you directly. Want to take a look?"
  },
  {
    businessName: "DIMA Plumbing",
    contactName: "Lead Plumber",
    category: "Residential Plumbing",
    city: "Markham, ON",
    phone: "(647) 679-1381",
    secondaryContact: "(647) 289-9576",
    webPresenceStatus: "Facebook page only, no website domain",
    keyServices: "General residential plumbing, fixture replacement, toilet/sink repair, leak fixes",
    painPoint: "Homeowners in Markham searching for local plumbers cannot find them on Google Maps organically due to lack of a linked, verified website.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi DIMA Plumbing! Saw your plumbing services in Markham. We can design a clean 5-page mobile website preview for your plumbing business at $19/mo with zero setup fee. Would you like to see it?"
  },

  // 3. Roofing & Siding Contractors
  {
    businessName: "6ix Roofing Repairs",
    contactName: "Arsen (Lead Roofer)",
    category: "Roofing Repairs & Emergency Roof Care",
    city: "Brampton & GTA, ON",
    phone: "(647) 633-1917",
    secondaryContact: "Facebook: 6ix Roofing Repairs",
    webPresenceStatus: "Facebook page only (@6ix-Roofing-Repairs), no website domain",
    keyServices: "Shingle replacement, roof vent fixes, eavestrough repairs, gutter cleaning, flat roofing",
    painPoint: "Emergency roof leaks require immediate homeowner confidence. A website featuring emergency repair guarantees and instant quote requests closes calls instantly.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Arsen! Saw 6ix Roofing Repairs on Facebook. When storms hit the GTA, homeowners look for emergency roof repair on Google. We can design a fast 5-page estimate website for you for $29/mo with $0 setup. Want to see a concept?"
  },
  {
    businessName: "XD Roofing",
    contactName: "Project Estimator",
    category: "Roof Replacement & Siding",
    city: "Brampton & Peel Region, ON",
    phone: "(647) 906-4768",
    secondaryContact: "Facebook: XD Roofing",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "Full roof replacement, fascia, soffit, eavestrough installation, general exterior upgrades",
    painPoint: "Roof replacements represent substantial investments ($7,000–$15,000). Homeowners expect to review a company's warranty, materials, and past installations on a website.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi XD Roofing! Saw your roofing and gutter replacement work in Brampton. A professional website makes closing $10k roof replacements much easier. We can design a free website preview for you at $29/mo ($0 setup)."
  },
  {
    businessName: "Finetouch Roofing & Renovation",
    contactName: "Project Lead",
    category: "Roofing & Exterior Renovations",
    city: "Scarborough & GTA, ON",
    phone: "(647) 713-9105",
    secondaryContact: "Facebook: Finetouch Roofing",
    webPresenceStatus: "Facebook page only, no website domain",
    keyServices: "New roof installations, shingle repairs, exterior siding and trim",
    painPoint: "Relies entirely on social posts; lacks a high-converting landing page with customer testimonials and material comparison guides.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Finetouch Roofing! Saw your roofing and renovation work in Scarborough. We can design a clean 5-page website preview for your roofing business at $29/mo with zero setup fee. Interested?"
  },
  {
    businessName: "Cannon Commercial Roofing",
    contactName: "Commercial Estimator",
    category: "Commercial & Industrial Roofing",
    city: "Brampton & GTA, ON",
    phone: "(905) 330-3729",
    secondaryContact: "cannoncommercialroofing@gmail.com",
    webPresenceStatus: "Facebook page only, no corporate website",
    keyServices: "Commercial flat roofing, roof coatings, commercial leak diagnostics, free estimates",
    painPoint: "Commercial property managers and facility directors require an official company website and verifiable case studies before requesting bids or approving contracts.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Cannon Roofing! Saw your commercial roofing work in Brampton. Commercial property owners always look for a company website and credentials before requesting bids. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "EPR Inc. (Roofing)",
    contactName: "Principal Contractor",
    category: "Roofing Contractor",
    city: "GTA / Brampton, ON",
    phone: "(647) 270-3742",
    secondaryContact: "jumboepr@gmail.com",
    webPresenceStatus: "Facebook page only, uses generic Gmail, no website domain",
    keyServices: "Residential shingle roofing, flat roofing, emergency patching",
    painPoint: "Using a generic personal Gmail address and having no company website diminishes credibility when bidding on larger residential and multi-unit roofing jobs.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi EPR Roofing! Noticed you handle roofing across the GTA but don't have a website or branded email listed. We can design a modern 5-page roofing website preview for you for $29/mo with $0 upfront. Would you like to take a look?"
  },

  // 4. Landscaping, Lawn Care & Snow Removal
  {
    businessName: "Dj Landscaping & Lawn Care",
    contactName: "Lead Landscaper",
    category: "Landscaping, Sodding & Lawn Care",
    city: "Brampton, ON",
    phone: "(647) 554-0181",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Fresh sod installation, lawn grading, concrete work, regular lawn cutting, seasonal cleanups",
    painPoint: "Missing seasonal contract sign-ups for spring sodding and summer maintenance because they lack an online estimate form and service area landing pages.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Dj Landscaping! Saw your sodding and lawn care work in Brampton. Homeowners love being able to request free sodding quotes online. We can design a free 5-page website preview for you at $29/mo ($0 setup)."
  },
  {
    businessName: "Rk Landscaping",
    contactName: "Lead Landscaper",
    category: "Garden Design & Lawn Maintenance",
    city: "Brampton & Peel Region, ON",
    phone: "(647) 273-4483",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Mulching, aeration, overseeding, sod installation, seasonal yard cleanups, garden maintenance",
    painPoint: "Operates via ad-hoc social posts and phone calls; lacks a package-based pricing page where homeowners can easily select monthly lawn maintenance subscriptions.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Rk Landscaping! Saw your garden maintenance and yard cleanup posts in Brampton. We can design a clean website preview displaying recurring lawn packages for $29/mo with $0 setup. Interested?"
  },
  {
    businessName: "MHN Landscaping INS",
    contactName: "Lead Contractor",
    category: "Hardscaping, Interlock & Landscape Design",
    city: "Brampton & GTA, ON",
    phone: "(647) 333-1515",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Interlock patio and driveway paving, retaining walls, planting, sodding, modern backyard transformations",
    painPoint: "Hardscaping is a visual, high-ticket sale ($10,000+). Without a gallery-rich website showcasing project timelines and material selections, they lose out to contractors who look more established online.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi MHN Landscaping! Loved your interlock and patio paving projects in Brampton. Big backyard makeovers sell best through a clean photo portfolio website. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "Eagle Landscaping Works",
    contactName: "Lead Contractor",
    category: "Interlock, Stone Work & Backyard Reno",
    city: "Brampton & Peel Region, ON",
    phone: "(647) 244-2355",
    secondaryContact: "(647) 545-6066",
    webPresenceStatus: "Facebook page only, no company website",
    keyServices: "Custom stone work, interlock driveways, walkway repairs, sodding, backyard makeover projects",
    painPoint: "Relies entirely on direct cell calls and Facebook. Lacks local Google Map SEO authority and digital case studies showing their craftsmanship.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Eagle Landscaping! Saw your custom stone and interlock work in Brampton. We can design a sleek 5-page contractor portfolio website preview for you for $29/mo with $0 setup fee. Want to check it out?"
  },
  {
    businessName: "Keystone Landscaping Services",
    contactName: "Lead Landscaper",
    category: "Landscaping & Lawn Maintenance",
    city: "Brampton & Mississauga, ON",
    phone: "(416) 832-6422",
    secondaryContact: "Call or text 416-832-6422",
    webPresenceStatus: "Facebook listing only, no website",
    keyServices: "Grass cutting, yard cleanups, mulch installation, sodding, general property maintenance",
    painPoint: "Landscaping businesses rely on locking in recurring seasonal maintenance contracts. A professional website with package tiers streamlines seasonal contract signups.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Keystone Landscaping! Saw your yard maintenance and cleanups in Brampton. We can design a free modern website preview for your landscaping business to get weekly mowing clients for $29/mo ($0 setup)."
  },
  {
    businessName: "Arabella Landscaping & Snow Removal",
    contactName: "Operations Lead",
    category: "Landscaping & Snow Removal",
    city: "Brampton & Mississauga, ON",
    phone: "(647) 919-7872",
    secondaryContact: "Facebook: Arabella Landscaping",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "Summer lawn maintenance, landscaping, winter commercial/residential snow plowing and salting",
    painPoint: "Dual-season contractors need to transition clients from summer lawn care to winter snow removal; a website allows them to capture winter plowing contracts months early.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Arabella Landscaping! Saw your lawn care and snow removal in Brampton. Having a dual-season website helps lock in winter snow plowing contracts months in advance. We can design a free website preview for you for $29/mo."
  },
  {
    businessName: "Régen Lawn Care & Landscaping",
    contactName: "Lead Specialist",
    category: "Lawn Care & Aeration",
    city: "Brampton & GTA, ON",
    phone: "(647) 824-2702",
    secondaryContact: "Call or text 647-824-2702",
    webPresenceStatus: "Facebook listing only, no website",
    keyServices: "Fertilizing, weed control, lawn food, dethatching, aerating, trenching & edging",
    painPoint: "Lawn care packages are recurring multi-step services ($300–$600 per customer); a website allows customers to select Bronze/Silver/Gold annual lawn programs online.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Régen Lawn Care! Saw your aeration and weed control services in Brampton. We can design a free website preview for you showing annual treatment packages for $29/mo with $0 setup. Interested?"
  },
  {
    businessName: "Brazier Lawn Services",
    contactName: "Service Manager",
    category: "Lawn Care & Property Maintenance",
    city: "GTA (York, Durham & Peel)",
    phone: "(905) 261-8664",
    secondaryContact: "Call or text 905-261-8664",
    webPresenceStatus: "Facebook listing only, no website",
    keyServices: "Dethatching, aeration, overseeding, fertilizer, mulch installation, leaf cleanup",
    painPoint: "Manual text-based quoting takes too much time during busy spring/fall peaks. An online intake form with lot size options saves hours of back-and-forth.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi Brazier Lawn Services! Saw your lawn maintenance work across the GTA. We can design a clean 5-page quote website preview for you for $19/mo with $0 upfront fee. Would you like to check it out?"
  },

  // 5. Handyman, Painting & Drywall Renovation
  {
    businessName: "Frank The Handyman",
    contactName: "Frank (Owner)",
    category: "Handyman Services & Interior Repairs",
    city: "Mississauga, ON",
    phone: "(647) 986-7700",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Drywall repairs, interior door fixes, trim work, interior painting, fixture replacement, small home repairs",
    painPoint: "Mississauga homeowners constantly search for reliable, vetted handymen for quick fixes. Without an online booking portal or Google presence, he depends entirely on repeat clients and word-of-mouth.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi Frank! Saw your handyman repair recommendations in Mississauga. Having a simple 5-page website with your service list and rates makes neighborhood homeowners call you first. We can design a free website preview for you for $19/mo ($0 setup)."
  },
  {
    businessName: "Home Pro Maintenance Inc.",
    contactName: "Operations Lead",
    category: "Drywall, Painting & Home Maintenance",
    city: "Mississauga & GTA, ON",
    phone: "(647) 781-1998",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "Drywall installation and taping, interior painting, baseboard installation, general residential maintenance",
    painPoint: "Struggles to convert larger residential renovation projects because they don't have a professional domain or website verifying their company credibility and business scope.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Home Pro Maintenance! Saw your interior painting and drywall projects across Mississauga. We can design a clean 5-page project gallery website preview for you at $29/mo with zero setup fee. Want to take a look?"
  },
  {
    businessName: "Renoheal",
    contactName: "Lead Specialist",
    category: "Drywall Hole & Ceiling Patch Specialist",
    city: "Markham & York Region, ON",
    phone: "(647) 657-6367",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Precision drywall hole patching, ceiling leak repairs, drywall crack repair, plaster repairs, painting touch-ups",
    painPoint: "Highly specialized niche service with strong immediate demand, but lacks a simple landing page where clients can upload photos of damaged walls for an instant quote.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Renoheal! Saw your specialized drywall hole patching service in Markham. A website where homeowners can upload pictures of drywall damage for instant quotes would double your leads. We can design a free website preview for you for $29/mo."
  },
  {
    businessName: "Johnson's Renovation & Contracting",
    contactName: "Johnson (Owner)",
    category: "Drywall, Painting & General Renovation",
    city: "Markham & GTA, ON",
    phone: "(647) 806-6882",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Basement framing and drywall, interior/exterior painting, flooring, general remodeling",
    painPoint: "Full basement renovations and contracting work require extensive credibility, contracts, and portfolio galleries that a basic Facebook profile cannot sufficiently provide.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Johnson! Saw your basement and interior reno work in Markham. Large basement contracts close much faster with an online photo portfolio website. We can design a free website preview for you at $29/mo with $0 setup."
  },
  {
    businessName: "JM Contracting Systems",
    contactName: "Lead Contractor",
    category: "Drywall, Taping & Stucco Removal",
    city: "Brampton & Mississauga, ON",
    phone: "(416) 727-4697",
    secondaryContact: "Facebook: JM Contracting Systems",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Drywall installation, repair, popcorn/stucco ceiling removal, taping, mudding, free quotes",
    painPoint: "Stucco/popcorn ceiling removal is in high demand in Peel Region, but they miss high-intent homeowners searching on Google because they only post in Facebook groups.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi JM Contracting! Saw your drywall and stucco removal projects in Brampton/Mississauga. Homeowners searching for ceiling flattening look on Google first. We can design a free project gallery website preview for you at $29/mo."
  },
  {
    businessName: "Robbie Rob Painting & Drywall",
    contactName: "Robbie Rob",
    category: "Residential & Commercial Painting",
    city: "Brampton & Mississauga, ON",
    phone: "(647) 646-7074",
    secondaryContact: "Facebook: Robbie Rob Professional Painting",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Interior & exterior painting, drywall repairs, wallpaper removal, deck & fence staining, free color consult",
    painPoint: "Offers free color consultations and estimates, but has no portfolio site to showcase finished interiors to affluent homeowners looking for high-end painters.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Robbie! Saw your interior and deck painting work in Brampton. Having a photo portfolio website makes it so much easier for clients to book color consultations. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "All Star Reno",
    contactName: "Lead Carpenter",
    category: "Home Renovation & Carpentry",
    city: "Brampton & Mississauga, ON",
    phone: "(647) 709-3276",
    secondaryContact: "Facebook: All Star Reno",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "Custom deck building, fence installation, finish carpentry, home remodeling",
    painPoint: "Outdoor living projects (decks, pergolas, fences) sell based on visual design; an interactive gallery site generates far more qualified estimate requests.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi All Star Reno! Saw your carpentry and deck projects in Brampton. We can design a free 5-page contractor portfolio website preview for you at $29/mo ($0 setup) so homeowners can request quotes directly."
  },
  {
    businessName: "Reno People",
    contactName: "Project Coordinator",
    category: "General Home Renovation",
    city: "Brampton & Mississauga, ON",
    phone: "(416) 834-7157",
    secondaryContact: "Facebook: Reno People",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Full home renovation, basement finishing, kitchen/bath remodeling, interior painting",
    painPoint: "Lacks a dedicated website to showcase before/after floor plans and scope of work, making it difficult to compete against established design-build contractors.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Reno People! Saw your home renovation work across Peel Region. We can design a sleek modern website preview with project galleries for you for $29/mo with zero setup. Interested?"
  },
  {
    businessName: "HandyManABC",
    contactName: "Customer Lead",
    category: "Handyman & Property Maintenance",
    city: "Markham & York Region, ON",
    phone: "(647) 882-5454",
    secondaryContact: "Facebook: HandyManABC",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "General home repairs, TV mounting, furniture assembly, caulking, minor fixes",
    painPoint: "Prime candidate for an affordable $19/mo 5-page Core site listing fixed upfront prices for common tasks (e.g., $75 TV mounting) to capture neighborhood homeowners.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi HandyManABC! Saw your handyman services in Markham. Having a simple 5-page website with your service list and rates makes neighborhood homeowners call you first. We can design a free website preview for you for $19/mo ($0 setup)."
  },
  {
    businessName: "Derrick Brampton Handyman",
    contactName: "Derrick (Owner)",
    category: "Handyman & Minor Renovations",
    city: "Brampton, ON",
    phone: "(647) 993-6707",
    secondaryContact: "Call or text 647-993-6707",
    webPresenceStatus: "Direct phone/text and Facebook post listing only, no website",
    keyServices: "Minor home repairs, drywall patching, door adjustments, fixture installation",
    painPoint: "Operates primarily via word-of-mouth; a simple 5-page mobile website gives him a steady flow of local residential jobs when referrals are slow.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi Derrick! Saw your handyman work in Brampton. We can design a clean 5-page website preview for your local contracting work at $19/mo with $0 setup fee. Would you like to check it out?"
  },

  // 6. Appliance Repair & HVAC
  {
    businessName: "Fastway Repair Services",
    contactName: "Dispatch Operator",
    category: "Residential Appliance Repair",
    city: "Brampton & Mississauga, ON",
    phone: "(647) 469-9681",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no company website",
    keyServices: "Refrigerator, washer, dryer, dishwasher, and oven repair across all major brands",
    painPoint: "When a refrigerator breaks down or a washer floods, homeowners search Google on mobile for 'appliance repair Brampton same day'. Without a website, Fastway misses out on high-urgency diagnostic dispatch calls.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Fastway! Saw your same-day appliance repair service in Brampton/Mississauga. When a fridge stops cooling, people search Google and call immediately. We can design a fast tap-to-call mobile website preview for you at $29/mo with $0 setup."
  },
  {
    businessName: "Local Appliance Repair",
    contactName: "Service Dispatch",
    category: "Multi-Brand Appliance Diagnostics & Repair",
    city: "Mississauga, Brampton & Scarborough, ON",
    phone: "(647) 701-2089",
    secondaryContact: "Facebook Business Page",
    webPresenceStatus: "Facebook business page only, no website",
    keyServices: "Diagnostic checkups, heating element replacements, motor repairs, refrigerator cooling diagnostics",
    painPoint: "No structured price list for diagnostic fees or online booking, forcing potential customers to wait for manual text responses while they could book online with a competitor.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Local Appliance Repair! Saw your repair posts across the GTA. Having an online booking website where clients can pick a morning or evening diagnostic window doubles bookings. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "AlphaOne Appliance Services",
    contactName: "Service Dispatch",
    category: "Appliance Repair Services",
    city: "Scarborough & Brampton, GTA",
    phone: "(647) 677-8600",
    secondaryContact: "Call or text 647-677-8600",
    webPresenceStatus: "Facebook page only, no company website",
    keyServices: "Same-day repairs for washers, dryers, refrigerators, stoves, dishwashers",
    painPoint: "Urgent appliance breakdowns result in immediate mobile Google searches. Without a website or landing page, they lose emergency repair calls to franchised technicians.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi AlphaOne! Saw your same-day appliance repair service in the GTA. When a fridge stops working, customers search Google on their phone and call right away. We can design a fast tap-to-call mobile website preview for you at $29/mo ($0 setup)."
  },
  {
    businessName: "Sam Appliance Repairs",
    contactName: "Sam (Lead Tech)",
    category: "24/7 Appliance Repair",
    city: "Scarborough, Markham & Brampton, ON",
    phone: "(437) 999-7571",
    secondaryContact: "Facebook: Sam Appliance Repairs",
    webPresenceStatus: "Facebook page only, no website domain",
    keyServices: "24/7 certified appliance repair, kitchen and laundry unit diagnostics",
    painPoint: "Offers 24/7 certified repairs but has no website to display brand certifications (Samsung, LG, Bosch, Whirlpool), reducing consumer trust for expensive appliances.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Sam Appliance Repairs! Noticed you offer 24/7 appliance repair in Scarborough & Markham but don't have a website to show certifications and pricing. We can design a free website mockup for you for $29/mo with $0 setup. Interested?"
  },
  {
    businessName: "Best Solution Appliance Repair",
    contactName: "Service Tech",
    category: "Appliance Repair & Installation",
    city: "Scarborough, Markham & Brampton, ON",
    phone: "(647) 203-3858",
    secondaryContact: "Facebook Listing",
    webPresenceStatus: "Facebook only, no dedicated website",
    keyServices: "Repair and installation of kitchen and laundry appliances across major brands",
    painPoint: "Customers calling during work hours prefer submitting an online quote ticket with their appliance model number; a website contact form saves hours of phone tag.",
    recommendedPlan: "$19/month Core Plan",
    pitchOpener: "Hi Best Solution! Saw your appliance repair services across Scarborough & Markham. We can design a clean 5-page website preview with an online service booking form for $19/mo with $0 upfront. Want to see how it looks?"
  },

  // 7. Exterior Cleaning & Pressure Washing
  {
    businessName: "TropicalTide Window & Eaves Cleaning",
    contactName: "Operations Manager",
    category: "Window & Gutter Cleaning",
    city: "Mississauga, Brampton, Milton & Oakville, ON",
    phone: "(647) 283-5519",
    secondaryContact: "Facebook: TropicalTide",
    webPresenceStatus: "Facebook page only, no company website",
    keyServices: "Professional exterior window cleaning, eaves & gutter clearing, downspout flushing",
    painPoint: "Seasonal exterior cleaning relies on high-volume booking campaigns; an online quote calculator based on home square footage dramatically increases closing rates.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi TropicalTide! Saw your window and eaves cleaning services across Mississauga & Brampton. Homeowners love getting instant online quotes for gutter cleanups. We can design a free website preview for you at $29/mo ($0 setup)."
  },
  {
    businessName: "ClearView GTA",
    contactName: "Lead Washer",
    category: "Pressure Washing & Window Cleaning",
    city: "GTA / Mississauga / Toronto, ON",
    phone: "(647) 383-8152",
    secondaryContact: "Facebook: ClearView GTA",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "High-pressure power washing (driveways, walkways, siding), window cleaning",
    painPoint: "Power washing produces dramatic before-and-after results; without an interactive photo gallery site, they struggle to convince homeowners of their premium quality.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi ClearView! Saw your pressure washing and window cleaning work in the GTA. A visual before-and-after gallery website makes booking driveways effortless. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "Adam and Eaves Cleaning & Power Washing",
    contactName: "Lead Technician",
    category: "Window Cleaning & Power Washing",
    city: "Scarborough & Markham, ON",
    phone: "(647) 632-5574",
    secondaryContact: "Facebook listing",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Interior/exterior window cleaning, power washing, gutter cleaning & repair",
    painPoint: "Great brand name with high memorability, but lacks an online quote request form to capture Scarborough and Markham homeowners looking for annual property upkeep.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Adam and Eaves! Love the name and saw your exterior cleaning work in Scarborough. We can design a free 5-page website preview for your exterior cleaning business for $29/mo with zero setup. Interested?"
  },

  // 8. Towing & Roadside Assistance
  {
    businessName: "Vaughan Towing Services",
    contactName: "Dispatch Operator",
    category: "Towing & Roadside Assistance",
    city: "Vaughan & York Region, ON",
    phone: "(647) 490-8448",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "Flatbed towing, roadside tire changes, battery jump starts, lockout assistance",
    painPoint: "Towing is a 100% emergency mobile search market. Stranded drivers on Hwy 400 or 407 need an instant click-to-call mobile landing page.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Vaughan Towing! Saw your roadside and flatbed service in Vaughan. When drivers are stuck on Hwy 400/407, they call the first tap-to-call mobile website they see. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "Mehdi Towing",
    contactName: "Mehdi (Owner)",
    category: "Towing, Recovery & Roadside Assistance",
    city: "Scarborough, North York & Mississauga, ON",
    phone: "(647) 724-1199",
    secondaryContact: "Facebook Page",
    webPresenceStatus: "Facebook page only, no dedicated website",
    keyServices: "24/7 towing, accident recovery, flat tire service, emergency boost",
    painPoint: "Operates strictly on direct phone calls and Facebook, missing emergency roadside searches in Scarborough and eastern GTA.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi Mehdi! Saw your 24/7 towing and recovery service across Scarborough & North York. We can design a fast tap-to-call mobile website mockup for you for $29/mo with $0 upfront so stranded drivers find you immediately."
  },
  {
    businessName: "SSR Towing & Auto Repair",
    contactName: "Dispatch Lead",
    category: "24/7 Emergency Towing & Roadside",
    city: "Scarborough & Toronto, ON",
    phone: "(647) 998-8690",
    secondaryContact: "Facebook: SSR Towing",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "24/7 towing, accident recovery, heavy towing, jump starts, lockouts, roadside assistance",
    painPoint: "When motorists are stranded on the 401 or DVP, they search Google on their phone and call the first business with an instant click-to-call mobile landing page.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi SSR Towing! Saw your 24/7 emergency roadside service in Scarborough. When drivers are stranded on the 401, a fast tap-to-call mobile website gets immediate calls. We can design a free website preview for you at $29/mo."
  },
  {
    businessName: "PK Towing & Roadside Assistance",
    contactName: "Dispatch Manager",
    category: "Emergency Towing & Recovery",
    city: "Scarborough & GTA, ON",
    phone: "(416) 910-2742",
    secondaryContact: "Facebook: PK Towing",
    webPresenceStatus: "Facebook page only, no website domain",
    keyServices: "Underground garage towing, accident recovery, battery boosts, long distance towing",
    painPoint: "Underground garage towing is a high-ticket specialty ($150–$300+). Condominium property managers and drivers frequently search Google specifically for low-clearance towing.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi PK Towing! Saw your underground and emergency towing services in Scarborough. We can design a clean mobile website preview for your towing service at $29/mo with zero setup fee. Want to take a look?"
  },

  // 9. Moving Services
  {
    businessName: "G-Force Moving Company",
    contactName: "Booking Coordinator",
    category: "Residential & Commercial Moving",
    city: "Brampton & GTA, ON",
    phone: "(647) 774-5686",
    secondaryContact: "Facebook: G-Force Moving",
    webPresenceStatus: "Facebook page only, no website",
    keyServices: "Local & long-distance moving, apartment/house moves, commercial moving, packing",
    painPoint: "Homeowners booking movers want to review a company website for insurance, licensing, and an online inventory quote estimator before handing over their household belongings.",
    recommendedPlan: "$29/month Business Plan",
    pitchOpener: "Hi G-Force Moving! Saw your moving services in Brampton. Homeowners always want to check a website for moving estimates and insurance proof before booking. We can design a free website preview for you at $29/mo."
  }
];

// Validation: Ensure every single lead's pitch opener contains the word 'website' and never claims 'we designed' or 'we built'
leads.forEach((lead, idx) => {
  const opener = lead.pitchOpener;
  if (!opener.toLowerCase().includes('website')) {
    throw new Error(`Lead #${idx + 1} (${lead.businessName}) pitchOpener does NOT contain the word 'website': "${opener}"`);
  }
  if (/we designed/i.test(opener) || /we built/i.test(opener) || /we made/i.test(opener) || /we put together/i.test(opener)) {
    throw new Error(`Lead #${idx + 1} (${lead.businessName}) pitchOpener contains past-tense claim ("we designed/built/made"): "${opener}"`);
  }
});

function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  let str = String(val).trim();
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

const headers = [
  "Business Name",
  "Contact Name / Role",
  "Category / Niche",
  "City / Area",
  "Phone Number",
  "Secondary Contact / Platform",
  "Current Web Presence Status",
  "Key Services Offered",
  "Diagnosed Pain Point / Hook",
  "Recommended Plan",
  "Personalized Pitch Opener (Copy & Paste)"
];

const rows = [headers.map(escapeCsv).join(',')];

leads.forEach(lead => {
  rows.push([
    escapeCsv(lead.businessName),
    escapeCsv(lead.contactName),
    escapeCsv(lead.category),
    escapeCsv(lead.city),
    escapeCsv(lead.phone),
    escapeCsv(lead.secondaryContact),
    escapeCsv(lead.webPresenceStatus),
    escapeCsv(lead.keyServices),
    escapeCsv(lead.painPoint),
    escapeCsv(lead.recommendedPlan),
    escapeCsv(lead.pitchOpener)
  ].join(','));
});

const outputPath = path.join(__dirname, 'qualified_gbp_leads.csv');
fs.writeFileSync(outputPath, rows.join('\n'), 'utf8');
console.log(`Successfully verified and generated ${outputPath} with ${leads.length} qualified leads!`);
