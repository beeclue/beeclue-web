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

# Design System Guidelines
- ALWAYS refer to `DESIGN_SYSTEM.md` whenever adding new pages or components.
- Reuse existing components from the `src/components/` directory whenever a new component is needed. DO NOT recreate components that already exist.
- Follow the design guidelines, CSS variables, and layout modules (`baseSection`, `servicesHeader`, etc.) outlined in the Design System to maintain a consistent visual language across the site.