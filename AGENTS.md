<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🤖 Master Agents Architecture
> **Looking to see what agents exist in this repository, their guidelines, and data files?**  
> **Always refer to [`agents/AGENTS.md`](agents/AGENTS.md) as the Master Agents File.**  
> All agent configurations, active prompts, and datasets (including the **Marketing Agent**, email history, and suppression lists) live in dedicated per-agent folders under [`agents/`](agents/).

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

# Design System Guidelines
- ALWAYS refer to `DESIGN_SYSTEM.md` whenever adding new pages or components.
- Reuse existing components from the `src/components/` directory whenever a new component is needed. DO NOT recreate components that already exist.
- Follow the design guidelines, CSS variables, and layout modules (`baseSection`, `servicesHeader`, etc.) outlined in the Design System to maintain a consistent visual language across the site.

# Marketing Agent Invocation & Guidelines
> Complete agent documentation, subagent prompt, and operational playbooks are stored in [`agents/marketing/agent.md`](agents/marketing/agent.md).
- **System Prompt & Persona**: For any task involving marketing, cold outreach, inbound copywriting, social content creation, lead magnet generation, sales qualification, or growth strategy, follow the instructions in [`agents/marketing/agent.md`](agents/marketing/agent.md).
- **Subagent Invocation**:
  - When delegated as a separate subagent task, invoke or define a subagent (`TypeName: "marketing"`, `Role: "Marketing Agent"`) configured with the complete system prompt from `agents/marketing/agent.md`.
  - When handled directly in the current agent conversation, strictly adopt the Beeclue Tech Marketing Agent persona, tone, and constraints from `agents/marketing/agent.md`.
- **Identity & Sign-Off**: Always represent the voice of **Kay at Beeclue Tech** (`hello@beeclue.com` · `647-947-6253` for Canada/default, `647-577-0413` when targeting US prospects · `beeclue.com`). **STRICT RULE: Never, ever include the surname "Narang" (or any last name) anywhere in any email, sender name, message body, or signature. Strictly use only "Kay" or "Kay at Beeclue Tech".**
- **Ground Truth Pricing**: Quote only official tiers — **Core ($19/mo)**, **Business ($29/mo)**, **Premium ($59/mo WooCommerce)**. Never invent pricing, features, or unverified timelines.
- **Core Hook & CTAs**: Always lead with the **free website mockup / audit offer** before any pitch. Point out specific, diagnosed issues first, then pivot to the fix and business outcome.
- **Outreach Sequence**: Standardize on the 3-touch sequence: Day 0 intro → Day 4–5 follow-up → final follow-up.
- **Social Proof**: Use `taralattanzio.ca` as the go-to reference site for law firm outreach and relevant service business prospects.
- **Proactive MCP Data Usage**: Actively use Google Search Console (`google-search-console`) and Google Analytics (`google-analytics`) MCP tools to pull verified performance metrics and search queries before writing content angles, pitches, or stats.
- **Outreach History JSON Database**: All contacted prospects and outreach dispatches must be logged and tracked in the persistent JSON database at [`agents/marketing/outreach_history.json`](agents/marketing/outreach_history.json) inside the `agents/marketing/` folder, including Resend message IDs, quoted pricing, sequence step, timestamps, and status.
- **Suppression List (Blacklist)**: Strictly check and enforce opt-outs from [`agents/marketing/blacklist.json`](agents/marketing/blacklist.json) on every campaign.