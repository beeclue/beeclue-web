# Print-Shop White-Label Partnership Agent — Design Spec

**Date:** 2026-09-13
**Status:** Awaiting user review
**Approach:** Standalone in-repo agent (`agents/partnership/`)

## 1. Goal

Build an autopilot partnership agent that recruits US independent print shops as
white-label resellers of Beeclue web design projects (starting at $400):
source → qualify → research → send → follow-up → log, with Kay stepping in
only on positive replies.

## 2. Locked Decisions

- **Economics:** 20% commission on project value per referred client
  (e.g. $80+ on a $400 site; pitch = zero-lift income per referral).
- **Geography:** US shops first (Sun Belt + small-town NY per playbook).
  US phone routing: 647-577-0413. USD framing.
- **Autonomy:** Full autopilot for outreach mechanics; human closes replies.
- **Architecture:** Standalone `agents/partnership/` folder (Approach A), reusing the
  shared `agents/marketing/blacklist.json` suppression list.

## 3. Offer (Ground Truth for Outreach Copy)

- Beeclue designs and builds white-label websites under the print shop's brand.
  Shop makes intros only — no fulfilment work.
- Partnership track is SEPARATE from the $19/mo direct plans: white-label
  project prices start at $400 one-time (quote "starting at $400"; never quote
  $19/mo to partners or their clients).
- Shop earns 20% commission on project value per referred client
  (e.g. $80+ on a $400 site), paid via manual monthly transfer in v1
  (automated payouts out of scope).
- Foot-in-door: free 48-hour homepage mockup of the SHOP's own site.
- CTA on every touch: reply to start a pilot referral, not "book a call".

## 4. Target Profile & Qualification Gates

- Independent print/copy/sign shops, ~5–50 staff, B2B client base.
- US-based. Owner or GM email obtainable. No existing web-services arm.
- A specific, diagnosable angle must exist (dead site, no mobile CTA,
  no quote form, invisible on Maps). No angle = no send.
- Disqualify: franchises with corporate marketing lock-in, shops already
  reselling web services, strong modern web presence.

## 5. Sequence & Channel Rules (B2B)

- Day 0 pitch → Day 4 bump → final breakaway. Threaded via In-Reply-To /
  References on the Day 0 Resend message ID. Subject: `Re: ...` of Day 0.
- Sender: `Kay at Beeclue Tech <hello@beeclue.com>`.
- B2B constraint: BCC `admin@beeclue.com` on every send.
- UTM on all links: `?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-<shop-slug>`.
- Transport: curl with browser UA (Python urllib is blocked by Cloudflare 1010
  on api.resend.com — proven 2026-09-13).

## 6. Agent Folder Layout

```
agents/partnership/
├── agent.md        # Voice (Kay), offer math, qualification gates, sequence templates
├── partners.json   # Pipeline DB (schema §7), resend IDs per touch
└── scripts/
    └── send_partner_batch.py  # Batch sender: cap, dry-run, blacklist check, logging
leads intake: agents/partnership/leads/*.csv (staging only; partners.json becomes
the system of record once a shop is first contacted)
```

## 7. Partner Record Schema

`id` / `shopSlug`, `shopName`, `contactName`, `email`, `website`, `location`,
`staffBand`, `commission` (`20% of project value`), `initialContactDate`,
`lastContactDate`, `status`
(`prospect|pitched|followup|call|pilot|active|churned|not_interested`),
`sequenceStep`, `diagnosedAngle`, `pilotOfferSent`, `history[]`
(`step|sentAt|subject|resendId|status|notes`). Append-only history; never
overwrite. Check shared blacklist before every send.

## 8. Autopilot Loop (v1)

1. Source leads into `leads/` CSV (shop, contact, email, angle).
2. Validate: blacklist, email present, qualification gates.
3. Research: 2–3 line audit note per shop → `diagnosedAngle`.
4. Send Day 0 (max 20/day). Log resend IDs.
5. Auto Day 4 + final on schedule. Log each touch.
6. Flag replies for Kay (no auto-reply handling in v1 — no webhook infra
   until volume justifies it).
7. Kill switch: empty the queue / set cap to 0.

## 9. Metrics & First Milestone

Shops pitched → reply rate → calls → pilots → active partners → partner-sourced revenue.
Milestone 1: 50 pitched, 10 replies, 3 pilots.

## 10. Non-Goals (v1)

- No auto-reply triage or inbox integration. No franchise targets. No non-US
  shops until the US loop converts. No quoting the $19/mo direct plans inside
  the partnership track.
