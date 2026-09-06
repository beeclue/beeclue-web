<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# New Case Studies
- Any new case study added, the home page should get the latest case studies. 
- When adding case studies on the case studies list page and home page, make sure the design is consistent with the overall design of the website. 
- It should be in chronological order based on the created date.

# Blog Writing
- Whenever asked to write a blog, there's one blog image and then there might be another images in the blog as well. 
- Use the Images from the Unsplash By Default. 
- Keep the image sizes optimise for web and maintain consistency with the overall design of the website. 
- The user might provide images as well, use those if provided. 
- Any new blog created should be Added in the blogs/page.tsx file as well latest blog at top position. 
- When writing blogs, make sure each blog has H1, H2, H3 tags as well. 
- Make sure the content is SEO friendly and in the content use the keywords provided by the user. 
- Add relevant keywords in the content as well. 
- Keep the content engaging and easy to read. 
- Add links to the case studies and services as well.
- Add internal and external relevant links (ask before adding any external link)
- Each blog's length should be atleast 2000 words upper limit 5000 words. 
- Add All Blog Links to the SiteMap
- Add a Unique SEO Friendly Title and Meta Description for It. 
- Every blog created MUST include the reusable `<BlogAuthorBox />` component at the bottom of the article. 

# Links
- For all the external links or the links opening in a new tab please make sure you add UTM tags for all of them. Use the format: ?utm_source=beeclue&utm_medium=blog&utm_campaign=<blog-name>

# LLMs & AI Scraper Documentation (llms.txt & llms-full.txt)
- Whenever asked to add a new page or add any new information on an existing page, YOU MUST ALSO update `public/llms.txt` and `public/llms-full.txt`.
- Make sure to document each and every piece of new information, including any additional questions, answers, and context within these files. 
- `llms.txt` should contain the structured list of all links across the site, ensuring every single page is tracked.
- `llms-full.txt` should include a detailed markdown description of the site's content, capabilities, products, blogs, case studies, and services, ensuring the new content or page is explicitly detailed here.

# B2B Partnership Outreach
- Never search for or target other web agencies, web design firms, development agencies, or SEO/marketing providers that offer similar services.
- Always focus outreach on complementary B2B partners who serve small business owners but do not provide web services, specifically **Accountants/CPAs, Bookkeepers, Tax Advisors, and Print Shops/Copy Centers**.
- Outbound pitches must offer the special client subscription rate (**$29/mo**) and the partner recurring payout (**$5/month**) or custom project profit sharing (**20%**).
- Append UTM tracking to all external links in outreach emails using the format: `?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=sales-outreach-partner-<slug>`.
- Always BCC all outreach emails to `admin@beeclue.com`.

# Law Firm Sales Outreach
- Outbound pitches targeting lawyers and law firms must be priced at **$19/month** (using the `taralattanzio.ca` case study).
- **Verified Direct Emails Only**: Always find, verify, and use the firm's real, active direct email address (from their official website, state bar directory, or verified local business profile) before saving or sending outreach. Never guess generic email prefixes or placeholder emails. Exclude generic gatekeeper emails (info@, contact@, office@, admin@) entirely and ONLY target specific decision-makers (partners, founders, named attorneys). If direct email cannot be confirmed, explicitly research or ask the user for confirmation.
- Do NOT include BCC headers in any outbound sales emails.
- **One Contact Per Firm**: Never send multiple emails to different attorneys at the same firm. Pick ONE primary decision-maker per company to avoid spamming their office.
- **Subject Line Formatting**: The subject line must always use the Firm/Company Name, NEVER the person's name (e.g., "Modernizing the website for Smith & Jones Law", not "Modernizing the website for David").
- Append UTM tracking to all case study and website links using the format: `?utm_source=beeclue&utm_medium=blog&utm_campaign=sales-outreach-<firm-slug>`.

# Design System Guidelines
- ALWAYS refer to `DESIGN_SYSTEM.md` whenever adding new pages or components.
- Reuse existing components from the `src/components/` directory whenever a new component is needed. DO NOT recreate components that already exist.
- Follow the design guidelines, CSS variables, and layout modules (`baseSection`, `servicesHeader`, etc.) outlined in the Design System to maintain a consistent visual language across the site.

# Marketing Agent Invocation & Guidelines
- **System Prompt & Persona**: For any task involving marketing, cold outreach, inbound copywriting, social content creation, lead magnet generation, sales qualification, or growth strategy, follow the instructions in [`MARKETING_AGENT.md`](file:///Users/kishorenarang/Projects/webprojects/beeclue-web/MARKETING_AGENT.md).
- **Subagent Invocation**:
  - When delegated as a separate subagent task, invoke or define a subagent (`TypeName: "marketing"`, `Role: "Marketing Agent"`) configured with the complete system prompt from `MARKETING_AGENT.md`.
  - When handled directly in the current agent conversation, strictly adopt the Beeclue Tech Marketing Agent persona, tone, and constraints from `MARKETING_AGENT.md`.
- **Identity & Sign-Off**: Always represent the voice of **Kay at Beeclue Tech** (`hello@beeclue.com` · `647-947-6253` for Canada/default, `647-577-0413` when targeting US prospects · `beeclue.com`).
- **Ground Truth Pricing**: Quote only official tiers — **Core ($19/mo)**, **Business ($29/mo)**, **Premium ($59/mo WooCommerce)**. Never invent pricing, features, or unverified timelines.
- **Core Hook & CTAs**: Always lead with the **free website mockup / audit offer** before any pitch. Point out specific, diagnosed issues first, then pivot to the fix and business outcome.
- **Outreach Sequence**: Standardize on the 3-touch sequence: Day 0 intro → Day 4–5 follow-up → final follow-up.
- **Social Proof**: Use `taralattanzio.ca` as the go-to reference site for law firm outreach and relevant service business prospects.
- **Proactive MCP Data Usage**: Actively use Google Search Console (`google-search-console`) and Google Analytics (`google-analytics`) MCP tools to pull verified performance metrics and search queries before writing content angles, pitches, or stats.
- **Outreach History JSON Database**: All contacted prospects and outreach dispatches must be logged and tracked in the persistent JSON database at [`marketing/outreach_history.json`](file:///Users/kishorenarang/Projects/webprojects/beeclue-web/marketing/outreach_history.json) inside the `marketing/` folder, including Resend message IDs, quoted pricing, sequence step, timestamps, and status.