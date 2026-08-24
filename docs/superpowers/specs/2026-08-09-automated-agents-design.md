# Automated Agency Agents Design Spec

**Date**: 2026-08-09  
**Status**: Approved  
**Approach**: Antigravity-Orchestrated Daily Cron Tasks  
**Objective**: Automate daily operations for SEO tracking, website marketing optimization, and B2B sales prospecting for Beeclue Tech.

---

## 📂 Directory Structure & Code Hygiene

To prevent personal lead lists, daily analytics reports, and marketing notes from cluttering the Git repository and leaking to public repositories, the following directories will be created in the workspace root and added to `.gitignore`:

```
beeclue-web/
├── seo-reports/                   # SEO Agent directory (gitignored)
│   ├── beeclue.com_Live_SEO_Report.html  # Live dashboard (overwritten daily)
│   └── history/                   # Historical reports archive
│       └── beeclue.com_SEO_Report_YYYY-MM-DD.html
│
├── marketing/                     # Marketing Agent directory (gitignored)
│   ├── website_index.json         # Static website route layout/metadata index
│   └── tips_log.md                # Log of daily marketing tips
│
└── sales/                         # Sales Agent directory (gitignored)
    ├── leads_pipeline.md          # Master pipeline of leads
    └── leads/                     # Directory for daily lead lists and drafts
        └── leads_YYYY-MM-DD.md    # Daily prospect spreadsheet + email drafts
```

### Git Ignored Rules
Ensure that the following folders are added to `.gitignore` to prevent committing agent artifacts:
```gitignore
# Agents data directories
/seo-reports/
/marketing/
/sales/
```

---

## 📈 Agent 1: SEO Agent (Daily at 9:00 AM)

### Objective
Provide daily automated insights on search engine performance, track keyword movements, and identify optimization opportunities for high-value search terms.

### Workflow & Tool Orchestration
1. **Trigger**: Fired daily at 9:00 AM via cron schedule (`0 9 * * *`).
2. **Retrieve Search Metrics**: Call `google-search-console` MCP server tools:
   - `site_snapshot` to get overall clicks, impressions, CTR, and positions.
   - `advanced_search_analytics` to pull queries comparison between the current 28-day window and the prior 28-day window.
   - `traffic_drops` to detect falling pages.
   - `quick_wins` to identify keywords in positions 4–15 with high impressions.
3. **Retrieve Analytics Data**: Call `google-analytics` MCP server `get_ga4_data` tool to fetch page views, sessions, engagement duration, and bounce rate for the top landing pages.
4. **Keyword Trend Analysis**:
   - **Trending Keywords**: Queries that experienced the largest positive growth in clicks, impressions, or rank.
   - **Keywords Going Down**: Queries with drops in clicks, impressions, or position.
   - **Action Items**: Recommend content additions, meta updates, or linking adjustments to push the identified "quick-win" keywords onto page one.
5. **Dashboard Generation**:
   - Archive the old `seo-reports/beeclue.com_Live_SEO_Report.html` to the `seo-reports/history/` directory.
   - Construct a brand-new, modern, scannable HTML dashboard containing clean metrics cards, comparison tables, and trending keyword lists. Save it as `seo-reports/beeclue.com_Live_SEO_Report.html`.
6. **Chat Summary**: Output a concise breakdown of the report to the user.

---

## 💡 Agent 2: Marketing Agent (Daily at 10:00 AM)

### Objective
Maintain an up-to-date index of the site's pages and use this knowledge to recommend actionable marketing and SEO improvement tips.

### Workflow & Tool Orchestration
1. **Trigger**: Fired daily at 10:00 AM via cron schedule (`0 10 * * *`).
2. **Website Indexing (One-Time / As Needed)**:
   - The agent scans the local codebase workspace (reading page files under `src/app/` and sitemaps/JSON configurations).
   - It extracts page routes, H1/H2 headings, canonical URLs, and metadata parameters.
   - Saves this knowledge base to `marketing/website_index.json`.
3. **Tip Generation**:
   - Every day, the agent selects one target page/service from the index and matches it against current search engine priorities.
   - Generates a "Daily Marketing Tip" covering copy changes, CTA placements, social media content hooks, or local search signals.
   - Aligns suggestions with the rules in `AGENTS.md` (e.g. reminding the user about UTM parameters, Unsplash image optimization, sitemap updates, and `<BlogAuthorBox />` integration).
4. **Reporting**:
   - Appends the tip to `marketing/tips_log.md`.
   - Displays the tip to the user.

---

## 🤝 Agent 3: Sales Agent (Daily at 11:00 AM)

### Objective
Find high-potential B2B leads for Beeclue's $19/mo Done-For-You website offer and draft personalized outbound cold messages.

### Target Profile
Small-town Canadian law firms (population < 100k) that lack a website, have slow loading times, or show security warnings.

### Workflow & Tool Orchestration
1. **Trigger**: Fired daily at 11:00 AM via cron schedule (`0 11 * * *`).
2. **Lead Prospecting**:
   - Uses web search queries targeting specific Canadian municipalities (e.g. Midland, Cobourg, Orangeville, Truro, etc.) and searches for local law firms.
   - Filters out firms with high-performing sites, selecting targets that have either missing links, slow WordPress/Wix sites, or "Not Secure" warnings.
3. **Outbound Personalization**:
   - Extracts business name, location, current site issues, and contact information.
   - Generates a highly personalized cold email draft and Loom video script highlighting their specific site bugs and demonstrating how our case study (`taralattanzio.ca`) solved this exact problem for another firm.
   - Formats any external links using correct UTM parameters: `?utm_source=beeclue&utm_medium=blog&utm_campaign=<blog-name>`.
4. **Pipeline Tracking**:
   - Saves the daily prospects and drafts to `sales/leads/leads_YYYY-MM-DD.md`.
   - Appends the targets to `sales/leads_pipeline.md` with checkbox items for tracking (e.g., `[ ] John Doe Law - Midland`).
5. **Reporting**: Displays the email draft and lead list in the daily run chat.

---

## 📞 Agent 4: Cold Call Prospecting Agent (On-Demand)

### Objective
Identify local service businesses within a specific region (province/city) and niche that currently have no website listed, and draft customized telephone sales scripts to pitch Beeclue's $19/mo Done-For-You website package.

### Workflow & Tool Orchestration
1. **Trigger**: Triggered on-demand via the prompt `run cold-call [in <region>] [for <niche>]`.
2. **Dynamic Argument Parsing**:
   - Parses the target region (province/city) and niche from the command.
   - Defaults to **Ontario** and **local service businesses** (landscaping, roofing, plumbing) if no arguments are provided.
3. **Scouting & Filtering**:
   - Uses web search queries targeting the specified region and niche.
   - Filters business listings, identifying exactly 5 businesses with active phone numbers and locations but **no website link** listed.
4. **Call Script Customization**:
   - Drafts a tailored 30-second telephone pitch highlighting their category and town.
   - Focuses the pitch on the convenience and speed of the $19/mo Done-For-You offer.
5. **Data Management**:
   - Appends the findings and custom call scripts to [`sales/cold_call_leads.md`](file:///Users/kishorenarang/Projects/webprojects/beeclue-web/sales/cold_call_leads.md) (gitignored).
6. **Reporting**: Displays the phone lead details and custom scripts directly in the chat window.

---

## 🤝 Agent 5: Partnership Outreach Agent (On-Demand / Automated)

### Objective
Find high-potential B2B referral partners (Accountants, CPAs, Bookkeepers, and local Print Shops) to establish a mutual client-referral pipeline. Never target other web design, development, or search marketing agencies.

### The Value Pitch
* **For Recurring Builds**: Referred clients receive a premium Done-For-You website for **$29/mo** (design, migration, hosting, and updates). The referring partner receives a recurring commission of **$5/month** for every active client.
* **For Custom Projects**: Partners receive a one-time referral fee of **20% of the project profit**.

### Workflow & Tool Orchestration
1. **Trigger**: Triggered on-demand via command `node scripts/find-partners.js --city=<city> --niche=<niche>` (or automated via daily scheduler at 12:00 PM).
2. **Partner Scouting**:
   - Performs web searches to discover agencies or consultants in the target city and niche.
   - Extracts their business name, website, and email address.
3. **Outbound Customization**:
   - Drafts a professional partnership proposal email outlining the $5/mo recurring referral program and 20% custom project profit sharing.
   - Saves daily logs to `sales/partners/partners_YYYY-MM-DD.md`.
   - Appends entries to `sales/partners_pipeline.md` in `DRAFTED` status.
4. **Reporting**: Displays the scouted partners and partnership proposal emails directly in the chat window.

---

## ⏰ Scheduler Config

The tasks are registered in the environment using the `schedule` tool:
- SEO Cron: `CronExpression="0 9 * * *"` with Prompt="[SEO Agent] Trigger daily SEO check and update live report."
- Marketing Cron: `CronExpression="0 10 * * *"` with Prompt="[Marketing Agent] Trigger daily marketing tip generation."
- Sales Cron: `CronExpression="0 11 * * *"` with Prompt="[Sales Agent] Trigger daily lead generation and outreach templates."
- Partnership Cron: `CronExpression="0 12 * * *"` with Prompt="[Partnership Agent] Trigger daily partner scouting and outreach templates."
