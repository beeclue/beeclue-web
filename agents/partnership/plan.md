# Partnership Agent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the `agents/partnership/` autopilot agent (playbook, pipeline DB, batch sender, lead intake) per `agents/partnership/spec.md`.

**Architecture:** Mirror the proven law-firm outreach machine: a playbook markdown, a JSON pipeline DB with append-only touch history, and a Python batch sender using curl transport to Resend. B2B rules (BCC, partner UTMs) live only in this agent's files, never in the marketing agent's.

**Tech Stack:** Markdown playbooks, JSON pipeline DB, Python 3 stdlib + curl subprocess, Resend REST API, shared `agents/marketing/blacklist.json`.

## Global Constraints

- Partnership track is SEPARATE from $19/mo direct plans: white-label projects start at $400 one-time; never quote $19/mo to partners.
- Commission: 20% of project value per referred client (e.g. $80+ on a $400 site).
- US shops only. US phone routing 647-577-0413 in every signature and CTA.
- Sender is always `Kay at Beeclue Tech <hello@beeclue.com>`; surname Narang (or any last name) never appears anywhere.
- BCC `admin@beeclue.com` on every B2B send.
- UTM on all links: `?utm_source=beeclue&utm_medium=partner-outreach&utm_campaign=partner-<shop-slug>`.
- Follow-ups thread via In-Reply-To/References on the Day 0 Resend message ID; subject is `Re: ` + Day 0 subject.
- Max 20 sends per batch run. Shared blacklist checked before every send.
- Transport MUST be curl subprocess with a browser UA (Python urllib gets Cloudflare 1010 blocks on api.resend.com — proven 2026-09-13).
- History is append-only; failed attempts are logged, never deleted. Kay closes all replies (no auto-reply handling in v1).

---

### Task 1: Partnership playbook

**Files:**
- Create: `agents/partnership/agent.md`

**Interfaces:**
- Consumes: `agents/partnership/spec.md` (§3 offer, §4 gates, §5 sequence — copy values verbatim).
- Produces: the voice + offer + templates every later task quotes from.

- [ ] **Step 1: Write `agents/partnership/agent.md` with this exact content**

```markdown
# Beeclue Tech — Partnership Agent System Prompt

## Identity

You are the AI Partnership Agent for **Beeclue Tech**. You recruit US print
shops as white-label resellers. You write as Kay at Beeclue Tech
(hello@beeclue.com · 647-577-0413 for all US outreach · beeclue.com).
CRITICAL RULE: never include the surname "Narang" (or any last name) anywhere.

## Voice

Plain-spoken contractor tone. Value-first: open with a specific observation
about THEIR shop (dead site, no quote form, invisible on Maps), then the fix,
then the money. No jargon, no hype, no "limited-time offer".

## Offer (quote exactly)

- Beeclue designs and builds white-label websites under the shop's brand,
  starting at $400 one-time. Shop makes intros only.
- Partner earns 20% commission on project value per referred client
  (e.g. $80+ on a $400 site), paid monthly.
- NEVER quote the $19/mo direct plans in this track.
- Foot-in-door: free 48-hour homepage mockup of the shop's own site.
- Every touch ends with a reply CTA ("just reply yes"), never "book a call".

## Qualification Gates (all must pass or no send)

1. Independent US print/copy/sign shop, ~5–50 staff, B2B client base.
2. Owner or GM email obtainable; skip the shop if none found.
3. No existing web-services arm; no franchise marketing lock-in.
4. One specific diagnosable angle recorded in `diagnosedAngle`.

## Sequence

- Day 0 pitch → Day 4 bump → final breakaway, threaded, `Re:` subjects.
- BCC admin@beeclue.com on every send.
- Partner UTMs on every link.
- Max 20 sends per run. Shared blacklist checked before every send.
- Log every touch (including failures) to partners.json. Kay closes replies.

## Day 0 Template

Subject: `Websites for [Shop]'s print clients (+ 20% per project)`

Hi [FirstName] - [one specific observation about their shop/site].

Print clients ask their printer for websites all the time. We build
white-label sites under your brand starting at $400, you make the intro,
we do everything else - and you keep 20% of every project.

Want proof first? I'll mock up a free homepage for [Shop] - ready in
48 hours, no commitment. Just reply "yes".

Kay
Kay at Beeclue Tech
hello@beeclue.com | 647-577-0413
beeclue.com
```

- [ ] **Step 2: Verify the file renders the locked numbers**

Run: `grep -c "20%\|400\|647-577-0413\|admin@beeclue.com\|partner-outreach" agents/partnership/agent.md`
Expected: a count of 5 or higher (each constraint present at least once).

- [ ] **Step 3: Commit**

```bash
git add agents/partnership/agent.md
git commit -m "feat(partnership): add partnership agent playbook"
```

---

### Task 2: Pipeline database seed

**Files:**
- Create: `agents/partnership/partners.json`

**Interfaces:**
- Consumes: schema from `agents/partnership/spec.md` §7.
- Produces: `partners.json` — the system of record Task 3 reads and writes.

- [ ] **Step 1: Write `agents/partnership/partners.json` as an empty seeded array**

```json
[]
```

- [ ] **Step 2: Validate it parses and matches the schema contract**

Run: `python3 -c "import json; db=json.load(open('agents/partnership/partners.json')); assert isinstance(db, list); print('OK, records:', len(db))"`
Expected: `OK, records: 0`

- [ ] **Step 3: Commit**

```bash
git add agents/partnership/partners.json
git commit -m "feat(partnership): seed partner pipeline database"
```

---

### Task 3: Batch sender script

**Files:**
- Create: `agents/partnership/scripts/send_partner_batch.py`

**Interfaces:**
- Consumes: `agents/partnership/partners.json` (records with `status: prospect`),
  `agents/marketing/blacklist.json` (suppression), `RESEND_API_KEY` from `.env`.
- Produces: sent emails + updated `partners.json` (new `history` events, status
  advances, resend IDs persisted). Later tasks trigger it with `--dry-run` and `--cap`.

- [ ] **Step 1: Write `agents/partnership/scripts/send_partner_batch.py` with this exact content**

```python
"""Partnership batch sender: Day 0 / Day 4 / Final touches to print shops.

Usage:
  python3 agents/partnership/scripts/send_partner_batch.py --step day0 --cap 20
  python3 agents/partnership/scripts/send_partner_batch.py --step day0 --cap 20 --dry-run
"""
import argparse
import json
import os
import re
import subprocess
import sys
import time
from datetime import datetime, timezone

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DB_PATH = os.path.join(REPO, "agents/partnership/partners.json")
BL_PATH = os.path.join(REPO, "agents/marketing/blacklist.json")

FROM = "Kay at Beeclue Tech <hello@beeclue.com>"
PHONE = "647-577-0413"
BCC = "admin@beeclue.com"
CAP = 20
UA = ("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
      "AppleWebKit/537.36 Chrome/126.0 Safari/537.36")

DAY0_SUBJECT = "Websites for {shop}'s print clients (+ 20% per project)"


def load_key():
    with open(os.path.join(REPO, ".env")) as f:
        for line in f:
            line = line.strip()
            if line.startswith("RESEND_API_KEY="):
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    raise RuntimeError("RESEND_API_KEY not found in .env")


# NOTE: Day-0 and bump bodies carry zero links by design (deliverability).
# Partner UTMs (?utm_source=beeclue&utm_medium=partner-outreach
# &utm_campaign=partner-<shop-slug>) MUST wrap any link added in later touches.


def day0_body(rec):
    fn = rec["contactName"].split("(")[0].strip().split()[0]
    return (
        f"Hi {fn} - {rec['diagnosedAngle']}\n"
        f"\n"
        f"Print clients ask their printer for websites all the time. We build "
        f"white-label sites under your brand starting at $400, you make the "
        f"intro, we do everything else - and you keep 20% of every project.\n"
        f"\n"
        f"Want proof first? I'll mock up a free homepage for {rec['shopName']} "
        f"- ready in 48 hours, no commitment. Just reply \"yes\".\n"
        f"\n"
        f"Kay\n"
        f"Kay at Beeclue Tech\n"
        f"hello@beeclue.com | {PHONE}\n"
        f"beeclue.com\n"
    )


def bump_body(rec):
    fn = rec["contactName"].split("(")[0].strip().split()[0]
    return (
        f"Hi {fn} - floating this back up in case my note got buried.\n"
        f"\n"
        f"Quick recap: white-label websites under your brand from $400, "
        f"you keep 20% of every project, zero fulfilment work. "
        f"Free 48-hour mockup of {rec['shopName']} still on the table.\n"
        f"\n"
        f"Just reply \"yes\" and I'll get started.\n"
        f"\n"
        f"Kay\n"
        f"Kay at Beeclue Tech\n"
        f"hello@beeclue.com | {PHONE}\n"
        f"beeclue.com\n"
    )


def send(api_key, to_email, subject, body, thread_id=None, dry_run=False):
    if dry_run:
        return True, "dry-run-id"
    payload = {
        "from": FROM,
        "to": [to_email],
        "bcc": [BCC],
        "subject": subject,
        "text": body,
    }
    if thread_id:
        payload["headers"] = {"In-Reply-To": thread_id, "References": thread_id}
    cmd = ["curl", "-s", "--max-time", "30", "https://api.resend.com/emails",
           "-H", f"Authorization: Bearer {api_key}",
           "-H", "Content-Type: application/json",
           "-A", UA, "-d", json.dumps(payload)]
    try:
        out = subprocess.run(cmd, capture_output=True, text=True, timeout=40)
        data = json.loads(out.stdout)
        if data.get("id"):
            return True, data["id"]
        return False, out.stdout[:300]
    except Exception as e:
        return False, str(e)[:300]


def blocked_set():
    bl = json.load(open(BL_PATH))
    out = set()
    for b in (bl if isinstance(bl, list) else []):
        if isinstance(b, dict):
            if b.get("email"):
                out.add(b["email"].lower())
            if b.get("domain"):
                out.add(b["domain"].lower())
        elif isinstance(b, str):
            out.add(b.lower())
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--step", choices=["day0", "day4", "final"], required=True)
    ap.add_argument("--cap", type=int, default=CAP)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    api_key = load_key()
    db = json.load(open(DB_PATH))
    blocked = blocked_set()
    now = datetime.now(timezone.utc).isoformat()

    want = {"day0": "prospect", "day4": "pitched", "final": "followup"}[args.step]
    batch = [r for r in db
             if r.get("status") == want
             and (r.get("email") or "").lower() not in blocked][:args.cap]
    print(f"BATCH step={args.step} size={len(batch)} dry_run={args.dry_run}")

    sent, failed = 0, 0
    for rec in batch:
        if args.step == "day0":
            subject = DAY0_SUBJECT.format(shop=rec["shopName"])
            body = day0_body(rec)
            thread = None
            ev_step, next_status = "Day 0", "pitched"
        else:
            orig = rec["history"][0]
            subject = "Re: " + orig["subject"]
            thread = f"<{orig.get('resendId', '')}>"
            body = bump_body(rec)
            ev_step = "Day 4-5" if args.step == "day4" else "Final"
            next_status = "followup" if args.step == "day4" else "followup"

        ok, info = send(api_key, rec["email"], subject, body, thread, args.dry_run)
        rec["history"].append({
            "step": ev_step,
            "sentAt": now if ok else now,
            "subject": subject,
            "resendId": info if ok else "",
            "status": "delivered" if ok else "failed",
            "notes": (f"{ev_step} touch sent." if ok
                      else f"Send failed, left at {want} for retry. Error: {info}"),
        })
        if ok:
            rec["status"] = next_status
            rec["lastContactDate"] = now
            sent += 1
            print(f"SENT {rec['id']} -> {info}")
        else:
            failed += 1
            print(f"FAILED {rec['id']}: {info}")
        if not args.dry_run:
            time.sleep(2)

    if not args.dry_run:
        with open(DB_PATH, "w") as f:
            json.dump(db, f, indent=2)
    print(f"SUMMARY sent={sent} failed={failed}")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Syntax-check the script**

Run: `python3 -m py_compile agents/partnership/scripts/send_partner_batch.py && echo COMPILE_OK`
Expected: `COMPILE_OK`

- [ ] **Step 3: Commit**

```bash
git add agents/partnership/scripts/send_partner_batch.py
git commit -m "feat(partnership): add batch sender with curl transport and dry-run"
```

---

### Task 4: Lead intake and first 10 shops

**Files:**
- Create: `agents/partnership/leads/batch-01-us-print-shops.csv`

**Interfaces:**
- Consumes: web/GBP search results; Task 1 gates (a shop enters the CSV only
  if all four gates pass).
- Produces: 10 staged rows Task 3 promotes into `partners.json` on first send.

- [ ] **Step 1: Create the CSV with exactly this header plus 10 researched rows**

```
shopSlug,shopName,contactName,email,website,location,staffBand,diagnosedAngle
```

Row rules: `shopSlug` is lowercase-hyphenated; `contactName` is owner/GM with
role in parentheses; `email` is a deliverable owner/GM address (never guessed —
skip the shop if none is public); `diagnosedAngle` is one specific sentence
tied to the shop's real site. Source with queries like
`print shop Austin TX`, `commercial printer Raleigh NC`, `copy shop Columbus OH`.

- [ ] **Step 2: Validate the intake file**

Run: `python3 -c "import csv; rows=list(csv.DictReader(open('agents/partnership/leads/batch-01-us-print-shops.csv'))); assert len(rows)==10, len(rows); assert all(r['email'] and '@' in r['email'] and r['diagnosedAngle'] for r in rows); print('OK, rows:', len(rows))"`
Expected: `OK, rows: 10`

- [ ] **Step 3: Promote the 10 rows into partners.json as `prospect` records**

Run: `python3 -c "
import csv, json
db = json.load(open('agents/partnership/partners.json'))
for r in csv.DictReader(open('agents/partnership/leads/batch-01-us-print-shops.csv')):
    db.append({'id': r['shopSlug'], 'shopSlug': r['shopSlug'], 'shopName': r['shopName'],
        'contactName': r['contactName'], 'email': r['email'], 'website': r['website'],
        'location': r['location'], 'staffBand': r['staffBand'], 'commission': '20% of project value',
        'initialContactDate': '', 'lastContactDate': '',
        'status': 'prospect', 'sequenceStep': 'Not yet contacted',
        'diagnosedAngle': r['diagnosedAngle'], 'pilotOfferSent': False, 'history': []})
json.dump(db, open('agents/partnership/partners.json', 'w'), indent=2)
print('OK, prospects:', len(db)))"
Expected: `OK, prospects: 10`

- [ ] **Step 4: Commit**

```bash
git add agents/partnership/leads/batch-01-us-print-shops.csv agents/partnership/partners.json
git commit -m "feat(partnership): stage first 10 US print-shop prospects"
```

---

### Task 5: Register the agent in the master index

**Files:**
- Modify: `agents/AGENTS.md` (append a `### 2. Partnership Agent` entry under `## Active Agents` mirroring the Marketing Agent entry format, pointing at `agents/partnership/agent.md`, `partners.json`, and this plan).

- [ ] **Step 1: Append the Partnership Agent section**

Exact block to append under `## Active Agents`:

```markdown
### 2. Partnership Agent (`agents/partnership/`)
* **Role**: Recruits US print shops as white-label resellers (sites from $400, 20% of project value), running full-autopilot outreach with Kay closing replies.
* **System Prompt**: [`agents/partnership/agent.md`](agents/partnership/agent.md)
* **Primary Responsibilities**:
  1. **Partner Sourcing & Qualification**: Stages US print shops meeting the four qualification gates.
  2. **Autopilot Outreach**: Day 0 / Day 4 / final touches via the batch sender with B2B threading, BCC, and partner UTMs.
  3. **Pipeline Tracking**: Maintains `partners.json` with append-only touch history and resend IDs.
  4. **Suppression & Compliance**: Enforces the shared `agents/marketing/blacklist.json` and B2B send constraints.
```

- [ ] **Step 2: Verify the index references resolve and no $19 leakage exists**

Run: `ls agents/partnership/agent.md agents/partnership/partners.json agents/partnership/spec.md agents/partnership/plan.md && ! grep -rq '\$19' agents/partnership/agent.md agents/partnership/scripts/ && echo NO_19_LEAK`
Expected: all four paths listed, then `NO_19_LEAK`.

- [ ] **Step 3: Commit**

```bash
git add agents/AGENTS.md
git commit -m "docs(agents): register partnership agent in master index"
```

---

### Task 6: End-to-end dry-run verification

**Files:**
- Modify: none (read-only verification; `partners.json` must be byte-identical after).

**Interfaces:**
- Consumes: Tasks 1–4 outputs.

- [ ] **Step 1: Snapshot the DB, dry-run Day 0, confirm zero sends and zero DB drift**

Run: `cp agents/partnership/partners.json /tmp/partners.bak && python3 agents/partnership/scripts/send_partner_batch.py --step day0 --cap 20 --dry-run`
Expected: `BATCH step=day0 size=10 dry_run=True` and `SUMMARY sent=10 failed=0` with `dry-run-id` lines and no 2-second sleeps stalling the run.

- [ ] **Step 2: Confirm the dry run wrote nothing**

Run: `diff /tmp/partners.bak agents/partnership/partners.json && echo NO_DRIFT`
Expected: `NO_DRIFT`

- [ ] **Step 3: Live-fire a single real send to Kay for deliverability proof**

Run: `python3 -c "
import json, sys; sys.path.insert(0, 'agents/partnership/scripts')
import send_partner_batch as s
key = s.load_key()
ok, info = s.send(key, 'hello@beeclue.com', 'Partnership sender live test', 'Deliverability proof. Ignore.', None, False)
print('LIVE:', ok, info)"`
Expected: `LIVE: True` plus a Resend UUID (lands in hello@beeclue.com inbox).

- [ ] **Step 4: Commit any final adjustments, then report ready-for-launch**

```bash
git status --short
```

Expected: clean tree (or only intended files), then hand off with the launch command:
`python3 agents/partnership/scripts/send_partner_batch.py --step day0 --cap 20`.
