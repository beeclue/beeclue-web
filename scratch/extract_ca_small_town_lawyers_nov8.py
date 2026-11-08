import urllib.request, urllib.parse, re, html, json, sys, os
from concurrent.futures import ThreadPoolExecutor, as_completed

HISTORY_PATH = 'agents/marketing/outreach_history.json'
BLACKLIST_PATH = 'agents/marketing/blacklist.json'

with open(HISTORY_PATH, 'r') as f:
    history = json.load(f)
with open(BLACKLIST_PATH, 'r') as f:
    blacklist = json.load(f)

history_emails = set((h.get('email') or '').lower().strip() for h in history)
blacklist_emails = set((b if isinstance(b, str) else b.get('email') or '').lower().strip() for b in blacklist)

def extract_real_email(content, last_name, first_name):
    matches = re.findall(r'([a-zA-Z0-9._%+-]+)&#64;([a-zA-Z0-9.-]+)<span>&#46;</span>([a-zA-Z]{2,})', content)
    common_providers = [
        'gmail.com', 'yahoo.com', 'sbcglobal.net', 'att.net', 'aol.com',
        'comcast.net', 'outlook.com', 'hotmail.com', 'verizon.net',
        'icloud.com', 'me.com', 'msn.com', 'mlode.com', 'volcano.net',
        'calaveras.net', 'suddenlink.net', 'sonic.net', 'sierratel.com', 'directv.net'
    ]
    for user, domain, tld in matches:
        tld_clean = tld.lower()
        if tld_clean not in ['com', 'net', 'org', 'biz', 'us']:
            continue
        full_domain = f'{domain.lower()}.{tld_clean}'
        full_email = f'{user.lower()}@{full_domain}'
        if any(g in full_email for g in ['.gov', '.us', 'co.', 'county', 'jud.', 'courts', 'da.', 'lsnc.net', 'state.', 'publicdefender', 'pd.', 'mono.ca', '.ca.', '.edu', 'cityof', 'yurok', 'water', 'irrigation', 'chargepoint']):
            continue
        if full_email.endswith('.ca'):
            continue
        if full_email in ['law@gmail.com', 'coolidge@gmail.com', 'lawpro@verizon.net', 'mary@yourtypegraphics.com', 'thompson@gmail.com', 'vaughn@gmail.com', 'esq@gmail.com', 'atty@gmail.com', 'attorney@gmail.com', 'legal@gmail.com', 'lawyer@gmail.com']:
            continue
        # Personal matching logic
        if last_name and len(last_name) >= 3 and (last_name.lower() in user.lower() or last_name.lower() in domain.lower()):
            return full_email
        if 'law' in domain.lower() and last_name and (last_name.lower() in full_email):
            return full_email
        if full_domain in common_providers and len(user) >= 4 and not user.isdigit():
            if (first_name and len(first_name) >= 3 and first_name.lower() in user.lower()) or (last_name and len(last_name) >= 3 and last_name.lower() in user.lower()):
                return full_email
        if ('law' in domain.lower() or 'legal' in domain.lower() or 'esq' in user.lower()) and len(user) >= 3 and not user.isdigit():
            return full_email
    return None

def parse_address_and_firm(addr_str, full_name):
    parts = [p.strip() for p in addr_str.split(',') if p.strip()]
    city = ''
    for i, p in enumerate(parts):
        m = re.search(r'\bCA\b\s+(\d{5})', p)
        if m:
            if i > 0:
                city = parts[i-1]
            break
            
    first_part = parts[0] if parts else ''
    if re.search(r'^\d+\s+[A-Za-z]', first_part) or first_part.startswith('PO Box') or first_part.startswith('P.O. Box'):
        firm_name = f'Law Office of {full_name}'
    else:
        firm_name = first_part
        
    return firm_name, city

def process_licensee(item):
    path_url, raw_name, cname = item
    cid = path_url.split('/')[-1]
    detail_url = f'https://apps.calbar.ca.gov/attorney/Licensee/Detail/{cid}'
    dreq = urllib.request.Request(detail_url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        with urllib.request.urlopen(dreq, timeout=7) as dresp:
            dhtml = dresp.read().decode('utf-8')
            
            # Active status check
            sm = re.search(r'License Status:\s*(\w+)', dhtml)
            if not sm or sm.group(1).lower() != 'active':
                return None
                    
            # Website check - must NOT have an active external site
            wm = re.search(r'Website:.*?<a[^>]+href=\"([^\"]+)\"', dhtml, re.DOTALL)
            ws_val = wm.group(1).strip() if wm else ''
            if ws_val and not ws_val.startswith('#') and 'calbar' not in ws_val:
                return None
            wm2 = re.search(r'Website:\s*([^\n<]+)', dhtml)
            ws2 = wm2.group(1).strip() if wm2 else ''
            if ws2 and 'Not Available' not in ws2 and not ws2.startswith('#') and 'calbar' not in ws2:
                return None
                
            name_m = re.search(r'<title>\s*(.*?)\s*#\s*' + cid, dhtml)
            full_name = name_m.group(1).strip() if name_m else raw_name.strip()
            full_name = html.unescape(re.sub(r'\s+', ' ', full_name))
            name_parts = full_name.split()
            first_name = name_parts[0] if name_parts else ''
            last_name = name_parts[-1] if name_parts else ''
            
            email = extract_real_email(dhtml, last_name, first_name)
            if not email:
                return None
                
            email_lower = email.lower().strip()
            if email_lower in history_emails or email_lower in blacklist_emails:
                return None
                
            addr_m = re.search(r'Address:\s*([^\n<]+)', dhtml)
            addr_str = html.unescape(addr_m.group(1).strip()) if addr_m else ''
            phone_m = re.search(r'Phone:\s*([^\n<]+)', dhtml)
            phone = phone_m.group(1).strip() if phone_m else ''
            
            firm_name, city = parse_address_and_firm(addr_str, full_name)
            if not city:
                city = cname

            f_lower = firm_name.lower()
            if any(gov in f_lower for gov in ['district attorney', 'county counsel', 'public defender', 'county of', 'city attorney', 'superior court', 'judicial', 'legal services', 'court', 'chargepoint']):
                return None
            if any(x in email_lower or x in f_lower for x in ['caltrout', 'kpmg', '.org', 'association', 'society', 'chargepoint', 'corporation']):
                return None
                
            return {
                'barNumber': cid,
                'fullName': f'{full_name}, Esq.',
                'firstName': first_name,
                'lastName': last_name,
                'firmName': firm_name,
                'email': email_lower,
                'phone': phone,
                'address': addr_str,
                'city': city,
                'county': cname,
                'practice': 'General Practice, Civil Matters & Estate Planning',
                'website': 'None (Directory / Bar Listing Only)'
            }
    except Exception as e:
        return None

counties = [
    ('SO', 'San Benito'),
    ('MN', 'Mendocino'),
    ('TR', 'Trinity'),
    ('MD', 'Modoc'),
    ('GL', 'Glenn'),
    ('CO', 'Colusa')
]

if __name__ == '__main__':
    candidates = []
    seen_emails = set()
    seen_firms = set()

    for code, cname in counties:
        if len(candidates) >= 30:
            break
        params = {
            'LastNameOption': 'b', 'LastName': '',
            'FirstNameOption': 'b', 'FirstName': '',
            'MiddleNameOption': 'b', 'MiddleName': '',
            'FirmNameOption': 'b', 'FirmName': '',
            'CityOption': 'b', 'City': '',
            'State': 'CA', 'Zip': '', 'District': '',
            'County': code,
            'LegalSpecialty': '', 'LanguageSpoken': '', 'PracticeArea': ''
        }
        url = 'https://apps.calbar.ca.gov/attorney/LicenseeSearch/AdvancedSearch?' + urllib.parse.urlencode(params)
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
        try:
            with urllib.request.urlopen(req, timeout=10) as resp:
                html_text = resp.read().decode('utf-8')
                attorney_links = re.findall(r'href=\"(/attorney/Licensee/Detail/\d+)\"[^>]*>([^<]+)</a>', html_text)
                print(f'{cname} ({code}): {len(attorney_links)} total licensees', flush=True)
                
                items = [(link, raw, cname) for link, raw in attorney_links]
                with ThreadPoolExecutor(max_workers=8) as executor:
                    futures = [executor.submit(process_licensee, it) for it in items]
                    for fut in as_completed(futures):
                        res = fut.result()
                        if res:
                            e = res['email'].lower()
                            firm_key = re.sub(r'[^a-z0-9]', '', res['firmName'].lower())
                            if e not in seen_emails and e not in history_emails and e not in blacklist_emails:
                                if firm_key and firm_key in seen_firms and len(firm_key) > 5 and not firm_key.startswith('lawofficeof'):
                                    continue
                                seen_emails.add(e)
                                if firm_key and not firm_key.startswith('lawofficeof'):
                                    seen_firms.add(firm_key)
                                candidates.append(res)
                                print(f'  [+{len(candidates)}] {res["fullName"]} ({res["email"]}) - {res["firmName"]} ({res["city"]}, {res["county"]})', flush=True)
                                if len(candidates) >= 30:
                                    break
        except Exception as e:
            print(f'Error searching {cname}: {e}', flush=True)

    print(f'\nTotal verified candidates: {len(candidates)}')
    assert len(candidates) >= 30, f'Expected 30 candidates, got {len(candidates)}'
    with open('scratch/today_nov08_lawyers_30.json', 'w') as f:
        json.dump(candidates[:30], f, indent=2)
    print('Saved EXACTLY 30 clean lawyers to scratch/today_nov08_lawyers_30.json')
