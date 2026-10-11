import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export const runtime = 'edge';

interface AuditCheck {
  id: string;
  category: 'aiInfrastructure' | 'trust' | 'services' | 'localSeo' | 'content' | 'technical';
  title: string;
  passed: boolean;
  scoreWeight: number; // 1-10
  impact: 'high' | 'medium' | 'low';
  details: string;
  recommendation?: string;
}

interface CategoryResult {
  category: string;
  label: string;
  question: string;
  description: string;
  score: number;
  checksTotal: number;
  checksPassed: number;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let rawUrl = (body.url || '').trim();

    if (!rawUrl) {
      return NextResponse.json(
        { error: 'Please enter a valid website URL or domain name.' },
        { status: 400 }
      );
    }

    if (!/^https?:\/\//i.test(rawUrl)) {
      rawUrl = 'https://' + rawUrl;
    }

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(rawUrl);
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format. Please check the website address and try again.' },
        { status: 400 }
      );
    }

    const domain = parsedUrl.hostname.replace(/^www\./, '').toLowerCase();
    const origin = parsedUrl.origin;

    // Disallow auditing beeclue.com domains
    if (domain === 'beeclue.com' || domain.endsWith('.beeclue.com')) {
      return NextResponse.json(
        { error: 'Audits for beeclue.com domains are restricted. Please enter your business or client website address.' },
        { status: 400 }
      );
    }

    // 1. Fetch homepage with timeout
    let homepageHtml = '';
    let responseStatus = 0;
    let isHttps = parsedUrl.protocol === 'https:';
    let responseTimeMs = 0;

    const startTime = Date.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(origin, {
        signal: controller.signal,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 BeeclueAIBot/1.0',
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        redirect: 'follow',
      });
      clearTimeout(timeoutId);
      responseTimeMs = Date.now() - startTime;
      responseStatus = res.status;
      homepageHtml = await res.text();
    } catch (fetchErr: unknown) {
      const errMsg = fetchErr instanceof Error ? fetchErr.message : String(fetchErr);
      return NextResponse.json(
        {
          crawlerBlocked: true,
          domain,
          error: `Unable to connect to ${domain}. The site may be offline, blocking automated scanners, or took too long to respond (${errMsg}).`,
        },
        { status: 400 }
      );
    }

    if (!homepageHtml || homepageHtml.length < 200) {
      return NextResponse.json(
        {
          crawlerBlocked: true,
          domain,
          error: `Could not retrieve readable HTML content from ${domain}. The site returned an empty or protected response.`,
        },
        { status: 400 }
      );
    }

    // 2. Fetch robots.txt in parallel
    let robotsTxt = '';
    try {
      const robotsRes = await fetch(`${origin}/robots.txt`, {
        headers: { 'User-Agent': 'BeeclueAIBot/1.0' },
      });
      if (robotsRes.ok) {
        robotsTxt = await robotsRes.text();
      }
    } catch {
      // Non-blocking if robots.txt doesn't exist
    }

    // 3. Parse HTML via Cheerio
    const $ = cheerio.load(homepageHtml);

    // Extraction & Analysis
    const textContent = $('body').text().replace(/\s+/g, ' ').trim();
    const wordCount = textContent.split(/\s+/).length;

    // Structured Data extraction
    const jsonLdScripts = $('script[type="application/ld+json"]');
    const jsonLdData: any[] = [];
    jsonLdScripts.each((_, el) => {
      try {
        const parsed = JSON.parse($(el).text());
        if (Array.isArray(parsed)) {
          jsonLdData.push(...parsed);
        } else if (parsed['@graph'] && Array.isArray(parsed['@graph'])) {
          jsonLdData.push(...parsed['@graph']);
        } else {
          jsonLdData.push(parsed);
        }
      } catch {
        // Skip malformed JSON-LD
      }
    });

    const hasJsonLd = jsonLdData.length > 0;
    const hasOrgOrBusinessSchema = jsonLdData.some((item) => {
      const type = item['@type'];
      if (!type) return false;
      const types = Array.isArray(type) ? type : [type];
      return types.some((t: string) =>
        /Organization|LocalBusiness|LegalService|Dentist|MedicalBusiness|HomeAndConstructionBusiness|GeneralContractor|ProfessionalService|Store/i.test(
          t
        )
      );
    });

    const hasFaqSchema = jsonLdData.some((item) => {
      const type = item['@type'];
      return type === 'FAQPage' || (Array.isArray(type) && type.includes('FAQPage'));
    });

    const hasPersonSchema = jsonLdData.some((item) => {
      const type = item['@type'];
      return type === 'Person' || (Array.isArray(type) && type.includes('Person'));
    });

    // Semantic Structure
    const h1Count = $('h1').length;
    const h2Count = $('h2').length;
    const h3Count = $('h3').length;
    const hasSemanticHeadings = h1Count === 1 && h2Count >= 2;

    // AI Bots check in robots.txt
    const blocksGptBot = /User-agent:\s*GPTBot[\s\S]*?Disallow:\s*\//i.test(robotsTxt);
    const blocksPerplexity = /User-agent:\s*PerplexityBot[\s\S]*?Disallow:\s*\//i.test(robotsTxt);
    const blocksClaude = /User-agent:\s*ClaudeBot[\s\S]*?Disallow:\s*\//i.test(robotsTxt);
    const blocksGoogleExtended = /User-agent:\s*Google-Extended[\s\S]*?Disallow:\s*\//i.test(robotsTxt);
    const aiBotsBlocked = blocksGptBot || blocksPerplexity || blocksClaude || blocksGoogleExtended;

    // llms.txt check
    let hasLlmsTxt = false;
    try {
      const llmsRes = await fetch(`${origin}/llms.txt`, { method: 'HEAD' });
      hasLlmsTxt = llmsRes.ok && (llmsRes.status === 200 || llmsRes.status === 304);
    } catch {
      hasLlmsTxt = false;
    }

    // Trust Signals
    const pageTextLower = textContent.toLowerCase();
    const hasAboutSignal =
      $('a[href*="about" i]').length > 0 || /about us|our team|meet the team|our story/i.test(textContent);
    const hasTestimonials =
      $('a[href*="review" i], a[href*="testimonial" i]').length > 0 ||
      /testimonials|client reviews|5 star|google reviews|what our clients say/i.test(textContent);
    const hasTrustBadges =
      /accredited|certified|licensed|bbb|chamber of commerce|award|verified/i.test(textContent);

    // Services / Practice Areas
    const serviceLinks = $('a[href*="service" i], a[href*="practice" i], a[href*="what-we-do" i]');
    const hasDedicatedServices = serviceLinks.length >= 2;

    // Local Signals & NAP
    const phoneRegex = /(?:\+?1[-.\s]?)?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
    const hasPhone = phoneRegex.test(textContent) || $('a[href^="tel:"]').length > 0;
    const hasAddress =
      /\b(?:street|st|avenue|ave|road|rd|blvd|boulevard|suite|unit|ontario|toronto|canada|usa)\b/i.test(
        textContent
      );
    const hasMapEmbed = $('iframe[src*="google.com/maps" i], iframe[src*="maps" i]').length > 0;

    // Content & FAQs
    const faqQuestions = $('h2, h3, h4, dt, strong, button').filter((_, el) => {
      const t = $(el).text().trim();
      return /\?$/.test(t) && t.length > 15;
    }).length;
    const hasFaqContent = faqQuestions >= 3;
    const hasBlog =
      $('a[href*="blog" i], a[href*="articles" i], a[href*="insights" i], a[href*="news" i]').length > 0;

    // Technical & Meta
    const metaTitle = $('title').text().trim();
    const metaDescription = $('meta[name="description" i]').attr('content') || '';
    const metaViewport = $('meta[name="viewport" i]').attr('content') || '';
    const ogTitle = $('meta[property="og:title" i]').attr('content') || '';
    const ogImage = $('meta[property="og:image" i]').attr('content') || '';

    // ==========================================
    // BUILD CHECKS LIST
    // ==========================================
    const checks: AuditCheck[] = [
      // Category 1: AI Infrastructure (35%)
      {
        id: 'ai-robots-txt',
        category: 'aiInfrastructure',
        title: 'AI Crawler Accessibility (GPTBot, ClaudeBot, Perplexity)',
        passed: !aiBotsBlocked,
        scoreWeight: 10,
        impact: 'high',
        details: aiBotsBlocked
          ? 'Your robots.txt file contains Disallow rules blocking OpenAI (GPTBot), ClaudeBot, or Perplexity from indexing your site.'
          : 'AI crawlers from OpenAI, Anthropic, and Perplexity are allowed to access and read your content.',
        recommendation: aiBotsBlocked
          ? 'Remove disallow rules for GPTBot, ClaudeBot, and PerplexityBot in robots.txt so AI recommendation engines can reference your business.'
          : undefined,
      },
      {
        id: 'schema-org-jsonld',
        category: 'aiInfrastructure',
        title: 'Structured Entity Data (Schema.org JSON-LD)',
        passed: hasOrgOrBusinessSchema,
        scoreWeight: 10,
        impact: 'high',
        details: hasOrgOrBusinessSchema
          ? 'Valid LocalBusiness, Organization, or ProfessionalService JSON-LD found, defining your company entity for machine reading.'
          : 'No recognized Business or Organization JSON-LD markup found on your homepage. AI models struggle to identify your exact entity.',
        recommendation: !hasOrgOrBusinessSchema
          ? 'Implement complete Schema.org JSON-LD specifying your legal name, business type, telephone, address, and service offerings.'
          : undefined,
      },
      {
        id: 'faq-schema',
        category: 'aiInfrastructure',
        title: 'FAQ Schema Markup (FAQPage)',
        passed: hasFaqSchema,
        scoreWeight: 8,
        impact: 'high',
        details: hasFaqSchema
          ? 'FAQPage schema detected. AI assistants can directly extract Q&A answers for conversational queries.'
          : 'No FAQPage schema found. When consumers ask AI questions about your pricing, services, or process, AI cannot reliably cite your website.',
        recommendation: !hasFaqSchema
          ? 'Add FAQ sections with JSON-LD FAQPage markup to your key service pages to win conversational AI search snippets.'
          : undefined,
      },
      {
        id: 'llms-txt-standard',
        category: 'aiInfrastructure',
        title: 'LLMs.txt Machine Directory Protocol',
        passed: hasLlmsTxt,
        scoreWeight: 7,
        impact: 'medium',
        details: hasLlmsTxt
          ? 'An /llms.txt file is present, giving AI scrapers a structured, curated markdown roadmap of your website capabilities.'
          : 'No /llms.txt file detected. LLMs and AI researchers rely on /llms.txt to ingest accurate context without crawling bloated scripts.',
        recommendation: !hasLlmsTxt
          ? 'Publish /llms.txt and /llms-full.txt files detailing your core services, locations, and pricing for LLM ingestion.'
          : undefined,
      },

      // Category 2: Trust & Credibility (15%)
      {
        id: 'about-leadership',
        category: 'trust',
        title: 'Verified About / Leadership Team Signals',
        passed: hasAboutSignal,
        scoreWeight: 8,
        impact: 'high',
        details: hasAboutSignal
          ? 'Clear About Us or Team leadership page detected. AI assistants require verified founder and staff entities before recommending providers.'
          : 'No prominent About or Team section found. AI systems favor companies with transparent human leadership and credentials.',
        recommendation: !hasAboutSignal
          ? 'Add a dedicated About Us page highlighting founder credentials, licenses, experience, and certifications.'
          : undefined,
      },
      {
        id: 'person-schema',
        category: 'trust',
        title: 'Professional Bio Schema (Person Schema)',
        passed: hasPersonSchema,
        scoreWeight: 7,
        impact: 'medium',
        details: hasPersonSchema
          ? 'Person schema detected linking team credentials to the organization.'
          : 'No Person schema markup found. Linking specific licensed professionals or team members increases AI confidence scores.',
        recommendation: !hasPersonSchema
          ? 'Include Person schema with job titles, professional associations, and credentials on your team pages.'
          : undefined,
      },
      {
        id: 'testimonials-reviews',
        category: 'trust',
        title: 'Social Proof & Client Testimonials',
        passed: hasTestimonials,
        scoreWeight: 8,
        impact: 'high',
        details: hasTestimonials
          ? 'Client reviews, testimonials, or ratings found on the homepage.'
          : 'Limited or missing client reviews on the homepage. AI Overviews prioritize businesses with documented positive sentiment.',
        recommendation: !hasTestimonials
          ? 'Embed verified reviews, Google star ratings, and case outcomes directly on your homepage.'
          : undefined,
      },

      // Category 3: Services & Offerings (14%)
      {
        id: 'dedicated-services',
        category: 'services',
        title: 'Dedicated Service Pages & Clear Taxonomy',
        passed: hasDedicatedServices,
        scoreWeight: 9,
        impact: 'high',
        details: hasDedicatedServices
          ? 'Found distinct links and navigation menus for individual services/offerings.'
          : 'Service offerings appear bundled or lack dedicated individual landing pages. AI models match queries to distinct URL entities.',
        recommendation: !hasDedicatedServices
          ? 'Create individual landing pages for each key service (e.g. /service-name) with dedicated headings and clear descriptions.'
          : undefined,
      },
      {
        id: 'heading-hierarchy',
        category: 'services',
        title: 'Semantic Heading Hierarchy (H1 / H2 / H3)',
        passed: hasSemanticHeadings,
        scoreWeight: 7,
        impact: 'medium',
        details: hasSemanticHeadings
          ? `Proper heading outline detected (Single H1 with ${h2Count} H2 subheadings) making service facts easily extractable.`
          : `Heading structure is suboptimal (${h1Count} H1 tags, ${h2Count} H2 tags). AI models depend on strict H1-H2 outlines to parse offerings.`,
        recommendation: !hasSemanticHeadings
          ? 'Ensure each page has exactly one H1 tag followed by logical H2 section headings describing your core offerings.'
          : undefined,
      },

      // Category 4: Local Presence (13%)
      {
        id: 'nap-phone',
        category: 'localSeo',
        title: 'Click-to-Call Phone Number Visibility',
        passed: hasPhone,
        scoreWeight: 9,
        impact: 'high',
        details: hasPhone
          ? 'Direct phone number found with mobile click-to-call formatting.'
          : 'No easily identifiable telephone number found on the page.',
        recommendation: !hasPhone
          ? 'Add a prominent click-to-call telephone number in your header, footer, and contact sections.'
          : undefined,
      },
      {
        id: 'nap-address',
        category: 'localSeo',
        title: 'Physical Address / Geographic Service Area Signals',
        passed: hasAddress,
        scoreWeight: 8,
        impact: 'high',
        details: hasAddress
          ? 'Clear physical municipality or geographic regional signals found.'
          : 'Missing clear physical address, city, or regional service boundary signals.',
        recommendation: !hasAddress
          ? 'Display your complete physical office or service city in the footer and schema markup for "near me" AI search queries.'
          : undefined,
      },
      {
        id: 'interactive-map',
        category: 'localSeo',
        title: 'Google Maps Embed or Location Verification',
        passed: hasMapEmbed,
        scoreWeight: 6,
        impact: 'medium',
        details: hasMapEmbed
          ? 'Interactive map embed found linking physical location to Google Maps.'
          : 'No embedded Google Map found. Maps embeds help AI verify physical existence and business legitimacy.',
        recommendation: !hasMapEmbed
          ? 'Embed a Google Maps iframe or link your Google Business Profile explicitly in the footer.'
          : undefined,
      },

      // Category 5: Content & Authority (13%)
      {
        id: 'faq-section',
        category: 'content',
        title: 'Direct Q&A Content & Question Headings',
        passed: hasFaqContent,
        scoreWeight: 8,
        impact: 'high',
        details: hasFaqContent
          ? `Detected ${faqQuestions} question-style headings offering direct, scannable answers.`
          : 'Few or no question-formatted headings found. Conversational AI thrives on direct question-and-answer format.',
        recommendation: !hasFaqContent
          ? 'Include an FAQ accordion addressing common client questions like pricing, timelines, and consultation details.'
          : undefined,
      },
      {
        id: 'blog-resources',
        category: 'content',
        title: 'Blog / Educational Articles / Knowledge Hub',
        passed: hasBlog,
        scoreWeight: 7,
        impact: 'medium',
        details: hasBlog
          ? 'Blog or educational articles section detected, demonstrating ongoing topical authority.'
          : 'No active blog or resource section found. Regular published insights significantly increase AI citations.',
        recommendation: !hasBlog
          ? 'Maintain an active blog or guide section answering specific client questions to earn citations in AI Overviews.'
          : undefined,
      },
      {
        id: 'content-depth',
        category: 'content',
        title: 'Comprehensive Content Depth (Word Count)',
        passed: wordCount >= 400,
        scoreWeight: 6,
        impact: 'medium',
        details:
          wordCount >= 400
            ? `Homepage has substantial content depth (${wordCount} words) providing sufficient context for LLMs.`
            : `Homepage is relatively thin on written text (${wordCount} words). AI models require descriptive copy to evaluate your capabilities.`,
        recommendation:
          wordCount < 400
            ? 'Expand homepage copy with detailed descriptions of your process, value proposition, and unique client benefits.'
            : undefined,
      },

      // Category 6: Technical Health (10%)
      {
        id: 'https-security',
        category: 'technical',
        title: 'SSL / HTTPS Encryption',
        passed: isHttps,
        scoreWeight: 10,
        impact: 'high',
        details: isHttps
          ? 'Website is securely served over HTTPS with valid SSL.'
          : 'Site is served over insecure HTTP. AI search engines heavily downrank non-secure websites.',
        recommendation: !isHttps
          ? 'Enforce HTTPS and install a modern SSL certificate across all pages.'
          : undefined,
      },
      {
        id: 'mobile-viewport',
        category: 'technical',
        title: 'Mobile Viewport Optimization',
        passed: Boolean(metaViewport),
        scoreWeight: 8,
        impact: 'high',
        details: metaViewport
          ? 'Mobile viewport meta tag is present for responsive rendering.'
          : 'Missing responsive mobile viewport tag.',
        recommendation: !metaViewport
          ? 'Add <meta name="viewport" content="width=device-width, initial-scale=1.0">.'
          : undefined,
      },
      {
        id: 'meta-description',
        category: 'technical',
        title: 'Meta Title & Description Tags',
        passed: Boolean(metaTitle && metaDescription),
        scoreWeight: 7,
        impact: 'medium',
        details:
          metaTitle && metaDescription
            ? 'Page title and meta description are configured.'
            : 'Missing meta description or title tag.',
        recommendation:
          !metaTitle || !metaDescription
            ? 'Add descriptive meta title (under 60 chars) and meta description (under 160 chars).'
            : undefined,
      },
      {
        id: 'open-graph',
        category: 'technical',
        title: 'Open Graph Social & Rich Snippet Tags',
        passed: Boolean(ogTitle || ogImage),
        scoreWeight: 6,
        impact: 'low',
        details:
          ogTitle || ogImage
            ? 'Open Graph meta tags are configured for rich previews.'
            : 'Missing Open Graph meta tags (og:title, og:image).',
        recommendation:
          !ogTitle && !ogImage
            ? 'Configure Open Graph tags for clean previews across AI platforms, social networks, and messaging apps.'
            : undefined,
      },
      {
        id: 'response-speed',
        category: 'technical',
        title: 'Server Response Time (TTFB)',
        passed: responseTimeMs < 1800,
        scoreWeight: 6,
        impact: 'medium',
        details: `Server responded in ${responseTimeMs}ms. Fast server response speeds allow AI crawlers to efficiently index your pages without timeouts.`,
        recommendation:
          responseTimeMs >= 1800
            ? 'Improve hosting server response time or utilize an edge CDN like Cloudflare to bring response times under 500ms.'
            : undefined,
      },
    ];

    // ==========================================
    // SCORE CALCULATION
    // ==========================================
    const categoryWeights: Record<string, number> = {
      aiInfrastructure: 35,
      trust: 15,
      services: 14,
      localSeo: 13,
      content: 13,
      technical: 10,
    };

    const categoryMeta: Record<string, { label: string; question: string; description: string }> = {
      aiInfrastructure: {
        label: 'AI Infrastructure',
        question: 'Can AI understand who your business is?',
        description:
          'Structured data (JSON-LD), Schema markup, LLM bot permissions, and machine-readable tags that let AI systems identify your entity.',
      },
      trust: {
        label: 'Trust & Credibility',
        question: 'Can AI verify your expertise & authority?',
        description:
          'Team bios, credentials, verified reviews, and certifications AI models check before recommending you.',
      },
      services: {
        label: 'Services & Offerings',
        question: 'Can AI tell which services and cases you handle?',
        description:
          'Dedicated service landing pages, structured hierarchy, and clear descriptions so AI matches you to the right inquiries.',
      },
      localSeo: {
        label: 'Local Presence & NAP',
        question: 'Can AI tell where you operate?',
        description:
          'Phone numbers, physical municipality, service areas, and Google Maps signals that power "near me" AI prompts.',
      },
      content: {
        label: 'Content & Authority',
        question: 'Does your website answer the questions clients ask?',
        description:
          'FAQ sections, blog depth, and direct plain-language answers that conversational AI can quote verbatim.',
      },
      technical: {
        label: 'Technical Health',
        question: 'Can AI reach and read your website without errors?',
        description:
          'HTTPS encryption, mobile viewport, meta tags, and fast edge response times so crawlers never get blocked.',
      },
    };

    const categories: CategoryResult[] = Object.keys(categoryWeights).map((catKey) => {
      const catChecks = checks.filter((c) => c.category === catKey);
      const totalWeight = catChecks.reduce((sum, c) => sum + c.scoreWeight, 0);
      const passedWeight = catChecks
        .filter((c) => c.passed)
        .reduce((sum, c) => sum + c.scoreWeight, 0);

      const score = totalWeight > 0 ? Math.round((passedWeight / totalWeight) * 100) : 0;
      const meta = categoryMeta[catKey];

      return {
        category: catKey,
        label: meta.label,
        question: meta.question,
        description: meta.description,
        score,
        checksTotal: catChecks.length,
        checksPassed: catChecks.filter((c) => c.passed).length,
      };
    });

    // Weighted Overall Score
    let overallScore = 0;
    for (const cat of categories) {
      const weight = categoryWeights[cat.category] || 10;
      overallScore += (cat.score * weight) / 100;
    }
    overallScore = Math.min(100, Math.max(0, Math.round(overallScore)));

    // Letter Grade
    let letterGrade = 'F';
    if (overallScore >= 95) letterGrade = 'A+';
    else if (overallScore >= 90) letterGrade = 'A';
    else if (overallScore >= 85) letterGrade = 'A-';
    else if (overallScore >= 80) letterGrade = 'B+';
    else if (overallScore >= 75) letterGrade = 'B';
    else if (overallScore >= 70) letterGrade = 'B-';
    else if (overallScore >= 65) letterGrade = 'C+';
    else if (overallScore >= 60) letterGrade = 'C';
    else if (overallScore >= 50) letterGrade = 'D';

    // Executive AI Verdict
    let aiVerdict = '';
    if (overallScore >= 85) {
      aiVerdict = `Strong AI Readiness. When prospective clients search on ChatGPT or Google AI Overviews, ${domain} has the structured data, crawl permissions, and trust signals required to be cited as a recommended provider.`;
    } else if (overallScore >= 65) {
      aiVerdict = `Moderate AI Visibility. AI assistants can detect ${domain}, but critical gaps in Structured Schema, FAQ markup, or local NAP data mean AI will frequently favor competitors with clearer machine-readable markup.`;
    } else {
      aiVerdict = `Low AI Visibility. AI assistants like ChatGPT, Claude, and Perplexity struggle to parse ${domain}'s offerings, pricing, and credentials. Without structured Schema and LLM-friendly formatting, your site is virtually invisible in conversational AI search results.`;
    }

    // High Impact Recommendations
    const recommendations = checks
      .filter((c) => !c.passed && c.recommendation)
      .sort((a, b) => b.scoreWeight - a.scoreWeight)
      .map((c) => ({
        check: c.title,
        impact: c.impact,
        category: categoryMeta[c.category]?.label || c.category,
        details: c.details,
        recommendation: c.recommendation,
      }));

    const passedChecks = checks.filter((c) => c.passed).length;
    const totalChecks = checks.length;

    return NextResponse.json({
      success: true,
      domain,
      overallScore,
      letterGrade,
      passedChecks,
      totalChecks,
      responseTimeMs,
      executiveSummary: {
        aiVerdict,
      },
      categories,
      recommendations,
      timestamp: new Date().toISOString(),
    });
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : 'Unknown server error';
    console.error('AI Readiness Checker Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while analyzing the website. Please check the URL and try again.' },
      { status: 500 }
    );
  }
}
