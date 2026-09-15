import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FaqAccordion from "@/components/FaqAccordion";
import { ArrowRight, Globe, ShieldCheck, Zap, Mail, Search, Smartphone, PenTool, LifeBuoy, BadgeCheck } from "lucide-react";
import styles from "@/app/page.module.css";

export const metadata: Metadata = {
  title: "Free Domain With Your Website | Beeclue Toronto",
  description: "Get a free domain with your new website from Beeclue — design, hosting and ongoing care included. No big upfront cost.",
  alternates: { canonical: "https://beeclue.com/free-domain-with-website" },
  openGraph: {
    title: "Free Domain With Your Website",
    description: "Your domain included free.",
    url: "https://beeclue.com/free-domain-with-website",
  },
};

const faqs = [
  { q: "What kind of domain do I get?", a: "A professional domain like yourname.com. Just tell us 3 name ideas and we'll set up your favourite for you." },
  { q: "Is the domain really free?", a: "Yes — your domain stays free while you're with us. No separate domain bills, ever." },
  { q: "Do I have to deal with any of the technical stuff?", a: "No — we take care of everything: registration, setup and yearly renewals. Your logo and website content are always 100% yours." },
  { q: "What happens if I leave?", a: "Your site stays live as long as your plan is active, and you'll have 30 days to take your domain with you. Moving it to your own account is a one-time $100 transfer fee." },
  { q: "Can I get email like hello@mybusiness.com?", a: "Yes — we'll help you set up a professional email address. Hosting and ongoing care are always included." },
  { q: "How long does it take to get my website?", a: "Most websites are ready within days, not months. We start with a free mockup so you can see your new homepage before anything is built, then we go through a couple of quick feedback rounds and launch." },
  { q: "I already have a domain. Can I use it?", a: "Absolutely. Just tell us the domain you own when you get in touch and we'll connect it to your new website for you." },
  { q: "Will my website show up on Google?", a: "Yes. Every site we build is set up so Google can find it, read it and rank it — proper page titles, fast loading, mobile-friendly pages and a secure connection included from day one." },
  { q: "Can I sell things on my website?", a: "Yes. If you want to take orders or payments online, tell us when you reach out and we'll build your website with a store included." },
  { q: "What if I want changes later?", a: "That's what we're here for. Text updates, new photos, new pages, seasonal offers — just send us a message and we'll take care of it as part of your ongoing care." },
  { q: "Do I own my content?", a: "100%. Your logo, photos, text and customer messages are always yours. We simply look after the website itself so you never have to think about it." },
  { q: "Can my website grow as my business grows?", a: "Yes. Start with the pages you need today — your services, your story, how to reach you — and add more whenever you're ready: photo galleries, booking, a store, new locations. Because your domain stays the same, everything you've built up keeps working while the site grows around it." },
  { q: "If something goes wrong, do I talk to a real person?", a: "Always. When you message us, you reach the team that built your site — people who know your business by name. No ticket queues, no chatbots reading scripts, no being passed from department to department while your website sits broken." },
  { q: "How do I start?", a: "Send us 3 name ideas and we'll start with a free mockup of your new website." },
];

export default function FreeDomainPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://beeclue.com" }, { "@type": "ListItem", position: 2, name: "Free Domain With Website", item: "https://beeclue.com/free-domain-with-website" }] },
      { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <main className={styles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FadeIn className={styles.baseSection} style={{ paddingTop: "20vh", minHeight: "50vh", display: "flex", alignItems: "center" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ fontSize: "clamp(2.5rem,6vw,5rem)" }}>
            <span className={styles.titleLinePrimary}>Get a Free Domain</span>
            <span className={styles.titleLine}>With Your Website</span>
          </h1>
          <p className={styles.subtitle} style={{ fontSize: "1.25rem", maxWidth: "800px" }}>
            Stop sending clients to yourname.wixsite.com. Get a free domain with your website — design, hosting and ongoing care included.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact?plan=business&promo=freedomain&utm_source=beeclue&utm_medium=landing&utm_campaign=free-domain" className={styles.ctaButton}>Claim my free domain <ArrowRight className={styles.arrow} /></Link>
            <Link href="/top-5-free-domain-registrars-pros-and-cons" className={styles.ctaButtonLight}>Why not 100% free?</Link>
          </div>
          <p style={{ color: "var(--muted)", marginTop: "1rem" }}>Free domain with your website</p>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Why your web address decides whether customers trust you</h2>
          <p>Before anyone reads a word on your website, they have already judged it by the address at the top of the screen.</p>
        </div>
        <div style={{ maxWidth: "800px" }}>
          <p>Picture two businesses offering exactly the same service. The first one sends you to sarahs-florist-toronto.wixsite.com. The second sends you to sarahsflorist.com. Which one do you trust with your wedding flowers? Most people pick the second one without even thinking about it, and they do it in a split second. That snap judgment is the entire reason your domain name matters so much. It is the front door of your business online, and customers decide whether to walk through it before they ever see your work, your prices or your reviews.</p>
          <h3>Your domain is your first handshake</h3>
          <p>When you meet someone in person, you shake their hand, look them in the eye and say your name clearly. Your domain name does the same job online. A clean, professional address tells a visitor three things instantly: this is a real business, these people take their work seriously, and I am in the right place. A messy or borrowed-looking address says the opposite, even when the business behind it is excellent. You may do outstanding work, answer every call and treat every customer like gold — but if your web address looks like an afterthought, a portion of your visitors will leave before giving you the chance to prove any of that.</p>
          <h3>People judge in seconds, then act on it</h3>
          <p>Think about your own habits. When you search for a plumber, a dentist or a photographer, you open a few results in new tabs and glance at each one. The tabs with strange-looking addresses get closed first. Nobody announces that they are doing this — it just happens. Researchers who study first impressions online keep finding the same thing: visitors form an opinion about a website almost immediately, and that opinion colours everything they see afterwards. A professional domain does not guarantee a customer, but it guarantees you a fair hearing. It keeps the tab open long enough for your actual work to speak.</p>
          <h3>A real domain makes everything else work harder</h3>
          <p>Your domain shows up in far more places than your website. It is printed on your business cards, your van, your flyers and your receipts. It appears in every Google result, every map listing and every directory. It is what happy customers type when they recommend you to a friend, and what they try to remember a week after seeing your truck drive past. A short, professional domain makes all of that effort pay off. People remember it, spell it correctly and find you on the first try. A long or borrowed address leaks away a little bit of every marketing dollar you spend, because some share of the people you reach will mistype it, forget it or simply not bother.</p>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>The real cost of a 100% free web address</h2>
          <p>Free sounds perfect until you see what it quietly costs you in lost customers.</p>
        </div>
        <div style={{ maxWidth: "800px" }}>
          <p>There is no shortage of ways to get a web address for absolutely nothing. Website builders hand out free addresses with their name attached, and corners of the internet offer free endings that nobody has heard of. For a school project or a hobby page, those are perfectly fine. For a business, they come with a bill — you just pay it in missed calls and lost trust instead of money. Here is what that bill usually looks like.</p>
          <h3>It looks temporary</h3>
          <p>A borrowed-looking address signals that the business behind it might not stick around. Customers notice, even if only subconsciously. If you are choosing between two contractors and one of them operates from an address that looks like a free trial, you naturally wonder whether they will still be reachable in six months when you need them back. A proper domain of your own says you have planted a flag. You are here, you are established, and you will answer the phone. That quiet reassurance is worth more than almost any feature on the page itself.</p>
          <h3>Nobody can remember it — or spell it</h3>
          <p>Try saying your web address out loud to a customer. If you have to spell it twice, explain the extra words in the middle, or say &ldquo;dot wixsite dot com&rdquo; at the end, you have already lost something. Every extra syllable is another chance for a customer to get it wrong and land somewhere else — or give up entirely. The best domains are the ones you can say once, in a noisy shop or over a bad phone connection, and have the other person get it right. Free addresses almost never pass that test, because they are long by design: the provider&apos;s name has to fit in there somewhere.</p>
          <h3>You cannot get a proper business email</h3>
          <p>Closely related is the email problem. Quotes sent from a free email account or an address tied to a borrowed domain get opened less, trusted less and replied to less. An address like hello@yourbusiness.com, on the other hand, looks like it belongs to someone who will still be in business next year. It also keeps your branding consistent everywhere: your website, your invoices, your replies and your business cards all say the same name. With a free address, that consistency is impossible, because part of your identity always belongs to someone else&apos;s company.</p>
          <h3>It can be taken away from you</h3>
          <p>This is the part people only learn the hard way. A free address is never really yours — it belongs to the company giving it away, and their rules can change at any time. Accounts get closed, free tiers get discontinued, and unfamiliar endings get flagged or blocked by email providers and office firewalls. Imagine rebuilding two years of Google rankings, printed materials and customer bookmarks because a provider changed its mind. A domain of your own travels with you no matter what. It is the one piece of your online presence that nobody can repossess on a whim, which is exactly why serious businesses treat it as the foundation everything else is built on.</p>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>What you get with your Beeclue website</h2>
          <p>One monthly home for everything your online presence needs — nothing to piece together yourself.</p>
        </div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}><Globe color="var(--primary-light)" size={32} /><div><h3>Free domain, handled for you</h3><p>You tell us 3 name ideas and we take care of the rest — registration, setup and renewals, year after year. You never see a domain bill and never fill in a confusing form.</p></div></div>
          <div className={styles.valueItem}><PenTool color="var(--primary-light)" size={32} /><div><h3>Designed around your business</h3><p>No generic template with your logo squeezed in. We start with a free mockup of your homepage so you can see the design before anything is built, then refine it with you until it feels right.</p></div></div>
          <div className={styles.valueItem}><Smartphone color="var(--primary-light)" size={32} /><div><h3>Looks perfect on every phone</h3><p>Most of your customers will meet you on a phone screen, often while standing somewhere busy. Every page is built mobile-first, so it loads fast, reads clearly and makes calling or messaging you effortless.</p></div></div>
          <div className={styles.valueItem}><Search color="var(--primary-light)" size={32} /><div><h3>Ready to be found on Google</h3><p>From day one your site is set up so Google can find it, understand it and show it to the right people — proper titles, fast pages and a secure connection, all done for you.</p></div></div>
          <div className={styles.valueItem}><Mail color="var(--primary-light)" size={32} /><div><h3>Professional email, minus the headache</h3><p>We will help you set up an address like hello@yourbusiness.com so every quote and reply strengthens your brand instead of undermining it.</p></div></div>
          <div className={styles.valueItem}><LifeBuoy color="var(--primary-light)" size={32} /><div><h3>Someone to call when you need a change</h3><p>New service, new photos, holiday hours, a price update — just send us a message. Ongoing care is part of the deal, so your site never goes stale while you are busy running the business.</p></div></div>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>How it works in 3 steps</h2><p>Ready shortly after you join.</p></div>
        <div className={styles.valueGrid}>
          <div className={styles.valueItem}><Zap color="var(--primary-light)" size={32} /><div><h3>1. You pick 3 names</h3><p>Tell us 3 name ideas and we&apos;ll set up your favourite. Not sure what makes a good name? The guide below will help — and we will give you honest advice before anything is final.</p></div></div>
          <div className={styles.valueItem}><BadgeCheck color="var(--primary-light)" size={32} /><div><h3>2. We handle everything</h3><p>We register your domain, connect it to your new website and take care of hosting and setup. There is nothing for you to install, configure or figure out.</p></div></div>
          <div className={styles.valueItem}><ShieldCheck color="var(--primary-light)" size={32} /><div><h3>3. You grow, we take care of it</h3><p>Your domain stays free as long as you&apos;re with us, renewals included. You focus on customers — we keep the lights on.</p></div></div>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>How to pick a domain name people remember</h2>
          <p>You will say this name hundreds of times. These four rules make sure it always lands.</p>
        </div>
        <div style={{ maxWidth: "800px" }}>
          <p>Choosing a domain feels like a small decision, but you will live with it for years — on your van, your cards, your invoices and in every conversation where someone asks how to find you. The good news is that picking well is simple. It comes down to four rules that anyone can follow, no marketing degree required.</p>
          <h3>Keep it short and easy to say</h3>
          <p>Short names win twice: they are easier to remember and harder to mistype. Say your candidate names out loud as if you were answering the phone. If you stumble, your customers will too. One or two simple words beat a clever phrase every time, because cleverness rarely survives a bad phone connection. When you send us your 3 ideas, include at least one short option — it is very often the one that works best in real life.</p>
          <h3>Match your business name</h3>
          <p>The easiest domain to remember is the name customers already know you by. If your shop is called Riverside Dental, riversidedental.com is the obvious answer, and anything else is a compromise. Matching names also means every mention of your business — a review, a directory listing, a friend&apos;s recommendation — reinforces the same address. If your exact name is taken, a small addition like your city or the word &ldquo;the&rdquo; at the front usually solves it without losing that connection.</p>
          <h3>Skip hyphens and numbers</h3>
          <p>Hyphens and numbers create exactly the kind of confusion you are trying to avoid. Is it the number 4 or the word &ldquo;four&rdquo;? Was there a dash in there or not? You will spend the rest of your business life answering those questions. A clean name with plain words might take a little more thought up front, but it pays you back every single time someone types it correctly on the first try.</p>
          <h3>Don&apos;t wait too long</h3>
          <p>Good names get taken every day, and the perfect one you are sitting on has a habit of disappearing the week before you act. This is one reason we ask for 3 ideas instead of one: if your first choice is gone, your second is ready to go with no delay. Once your domain is set up, it is yours to build on — every flyer, listing and review from that day forward points to an address you control.</p>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Who is this for?</h2>
          <p>If any of these sound like you, a free domain with your website will change how customers see you.</p>
        </div>
        <div style={{ maxWidth: "800px" }}>
          <p><strong>New businesses getting started right.</strong> When you are launching, everything competes for your budget, and a web address can feel like a detail to sort out later. But launching with a borrowed-looking address means introducing your brand twice — once now, and again when you finally upgrade. Starting with a proper domain means every customer you meet from day one learns the address you will keep forever. It is one of the cheapest ways to look established while you are still new.</p>
          <p><strong>Shops, clinics, trades and local pros.</strong> If customers find you through Google, maps, word of mouth or a vehicle driving past, your domain is doing heavy lifting every day. A memorable address turns a passing glance into a visit: they type it in at a red light, or remember it that evening when they finally sit down to book. Businesses that live on local trust — dentists, salons, contractors, restaurants, law offices — feel this difference fastest, because their customers choose carefully and notice details.</p>
          <p><strong>Anyone still on a borrowed address.</strong> Maybe you started with a page-builder subdomain years ago and never got around to upgrading. Maybe a friend set something up and you have been meaning to fix it. Every month you wait, more links, bookmarks and customer memories point at an address you don&apos;t truly own. Moving to a domain of your own now captures all of your future growth in the right place — and we will help carry over what you have already built so nothing gets lost in the move.</p>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}>
          <h2>Why not just pay thousands upfront — or do it yourself?</h2>
          <p>Two common paths, and why most small businesses end up frustrated with both.</p>
        </div>
        <div style={{ maxWidth: "800px" }}>
          <h3>The big upfront quote</h3>
          <p>Traditional agencies routinely quote several thousand dollars for a small business website, with the domain, hosting and future changes billed on top. For some companies that makes sense. For a local business that needs a sharp, trustworthy site without gambling the marketing budget, it is a painful way to start — especially since you pay most of it before seeing anything. Then every update becomes another invoice, so the site quietly goes out of date while you weigh whether each small change is worth the fee.</p>
          <h3>Doing it all yourself</h3>
          <p>The other extreme is spending your evenings wrestling with a website builder: picking templates, fighting with layouts, figuring out why the contact form stopped working, and Googling what a nameserver is at midnight. Your time has a value, and every hour spent on the website is an hour not spent with customers. Worse, the result usually still looks homemade, because design is a skill like any other. The money saved evaporates the first time a customer picks the competitor whose site simply looked more professional.</p>
          <h3>The middle path</h3>
          <p>There is a calmer option: a professionally designed website with your domain included, looked after month after month, for one predictable payment instead of a giant invoice. You see a free mockup of your homepage before anything is built, so there are no surprises. Hosting, renewals and updates are handled for you, so the site stays fresh without midnight troubleshooting sessions. And because your domain is included free while you are with us, the whole foundation of your online presence is settled from day one. If you want to understand exactly what separates a fragile free address from a solid one, our <Link href="/top-5-free-domain-registrars-pros-and-cons">guide to free domain options</Link> walks through the trade-offs in plain language.</p>
        </div>
      </FadeIn>

      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>Ready for your free domain?</h2><p>Tell us your name ideas and we&apos;ll start with a free mockup of your new website.</p></div>
        <Link href="/contact?plan=business&promo=freedomain&utm_source=beeclue&utm_medium=landing&utm_campaign=free-domain" className={styles.ctaButton}>Claim my free domain <ArrowRight className={styles.arrow} /></Link>
      </FadeIn>
      <FadeIn className={styles.baseSection}>
        <div className={styles.servicesHeader}><h2>Free domain questions</h2></div>
        <FaqAccordion faqs={faqs} />
      </FadeIn>
    </main>
  );
}
