import csv

contractors = [
    {
        "business_name": "Paul's Renovations",
        "contact_person": "Paul",
        "trade": "Home Renovations & Remodeling",
        "city": "Belleville, ON",
        "phone": "(613) 921-9930",
        "web_status": "No website (Google / Cylex listing only)",
        "source": "Cylex / YellowPages"
    },
    {
        "business_name": "Cruickshank & Cotter Home Renovations",
        "contact_person": "Don Cruickshank",
        "trade": "Residential Renovations & Carpentry",
        "city": "Belleville, ON",
        "phone": "(613) 920-7652",
        "web_status": "No website (Directory listing only)",
        "source": "Donahoe Advantage / PagesJaunes"
    },
    {
        "business_name": "Trent Roofing",
        "contact_person": "Owner",
        "trade": "Roofing Contractors",
        "city": "Lakefield, ON",
        "phone": "(705) 654-9926",
        "web_status": "No website (Phone directory only)",
        "source": "Cylex / YellowPages"
    },
    {
        "business_name": "Beavermead Construction (1991) Limited",
        "contact_person": "Aaron Kraetzer",
        "trade": "General Contracting",
        "city": "Peterborough, ON",
        "phone": "(705) 743-3051",
        "web_status": "No website (PDCA member listing only)",
        "source": "PDCA / BBB"
    },
    {
        "business_name": "JCA Construction",
        "contact_person": "Owner",
        "trade": "General Construction & Renovations",
        "city": "Peterborough, ON",
        "phone": "(705) 328-0671",
        "web_status": "No website (BBB listing only)",
        "source": "BBB / 411.ca"
    },
    {
        "business_name": "Jake Nelson Roofing & Snow Removal",
        "contact_person": "Jake Nelson",
        "trade": "Roofing & Exterior Services",
        "city": "Sault Ste. Marie, ON",
        "phone": "(705) 575-4433",
        "web_status": "No website (Google / Local directory only)",
        "source": "Northern Ontario Local"
    },
    {
        "business_name": "Jibb's Construction Services Ltd",
        "contact_person": "Owner",
        "trade": "General Construction & Home Improvements",
        "city": "Kirkland Lake, ON",
        "phone": "(705) 567-7053",
        "web_status": "No website (Directory listing only)",
        "source": "Northern Ontario Local / Cylex"
    },
    {
        "business_name": "Joe Webb Home Improvements Ltd",
        "contact_person": "Joe Webb",
        "trade": "Building & Home Improvements",
        "city": "Ingersoll, ON",
        "phone": "(519) 485-5017",
        "web_status": "No website (Canpages profile only)",
        "source": "Canpages / YellowPages"
    },
    {
        "business_name": "Bay of Quinte Roofing by Dan Summers",
        "contact_person": "Dan Summers",
        "trade": "Roofing Contractors",
        "city": "Belleville, ON",
        "phone": "(613) 922-3371",
        "web_status": "No website (Cylex listing only)",
        "source": "Cylex / Cybo"
    },
    {
        "business_name": "Stonecraft Masonry",
        "contact_person": "Owner",
        "trade": "Masonry, Brickwork & Heritage Restoration",
        "city": "Cornwall, ON",
        "phone": "(613) 330-7909",
        "web_status": "No website (BBB profile only)",
        "source": "Canpages / BBB"
    },
    {
        "business_name": "Thornton's Drywall Contracting",
        "contact_person": "Owner",
        "trade": "Drywall & Taping",
        "city": "Elliot Lake, ON",
        "phone": "(705) 227-0207",
        "web_status": "No website (YellowPages listing only)",
        "source": "Cylex / YellowPages"
    },
    {
        "business_name": "Bradley Drywall Inc",
        "contact_person": "Owner",
        "trade": "Drywall & Interior Finishing",
        "city": "Barrie, ON",
        "phone": "(705) 623-4265",
        "web_status": "No website (Local business directory only)",
        "source": "Cylex / Canpages"
    },
    {
        "business_name": "Austin Drywall and Renovations",
        "contact_person": "Owner",
        "trade": "Drywall, Taping & Renovations",
        "city": "Simcoe, ON",
        "phone": "(519) 429-4430",
        "web_status": "No website (Canpages listing only)",
        "source": "Canpages / Cylex"
    },
    {
        "business_name": "Pinnacle Drywall",
        "contact_person": "Owner",
        "trade": "Drywall & Finishing",
        "city": "Sudbury, ON",
        "phone": "(705) 690-7270",
        "web_status": "No website (YellowPages entry only)",
        "source": "YellowPages"
    },
    {
        "business_name": "Dennco Electrical Contractors Limited",
        "contact_person": "Owner",
        "trade": "Electrical Contracting",
        "city": "Sudbury, ON",
        "phone": "(705) 566-0584",
        "web_status": "No website (Cylex directory only)",
        "source": "Cylex / YellowPages"
    },
    {
        "business_name": "D N H Mechanical Service",
        "contact_person": "Owner",
        "trade": "Mechanical Contracting & HVAC",
        "city": "Sudbury, ON",
        "phone": "(705) 522-4528",
        "web_status": "No website (Local directory only)",
        "source": "Sudbury.com / YellowPages"
    },
    {
        "business_name": "Smania Plumbing Heating & Air Conditioning",
        "contact_person": "Owner",
        "trade": "Plumbing, Heating & HVAC",
        "city": "Greater Sudbury, ON",
        "phone": "(705) 523-0779",
        "web_status": "No website (BBB listing only)",
        "source": "BBB / 365plumber.ca"
    },
    {
        "business_name": "Gerry's Heating",
        "contact_person": "Gerry",
        "trade": "HVAC & Heating Installation",
        "city": "North Bay, ON",
        "phone": "(705) 476-3000",
        "web_status": "No website (Local business directory only)",
        "source": "Northern Ontario Local / YellowPages"
    },
    {
        "business_name": "Armstrong Electric",
        "contact_person": "Owner",
        "trade": "Electrical Contracting",
        "city": "North Bay, ON",
        "phone": "(705) 474-5476",
        "web_status": "No website (Cylex listing only)",
        "source": "Cylex / 411.ca"
    },
    {
        "business_name": "Couture Marcel General Construction",
        "contact_person": "Marcel Couture",
        "trade": "General Contracting",
        "city": "Cornwall, ON",
        "phone": "(613) 932-5831",
        "web_status": "No website (YellowPages listing only)",
        "source": "Cylex / YellowPages"
    },
    {
        "business_name": "Bainbridge Construction",
        "contact_person": "Owner",
        "trade": "Excavation & Landscape Construction",
        "city": "North Bay, ON",
        "phone": "(705) 497-9909",
        "web_status": "No website (Local directory listing only)",
        "source": "Northern Ontario Local / Cylex"
    },
    {
        "business_name": "Feronia Construction Ltd.",
        "contact_person": "Owner",
        "trade": "Landscape Contracting & Excavation",
        "city": "North Bay, ON",
        "phone": "(705) 497-1594",
        "web_status": "No website (CanadianPlanet listing only)",
        "source": "CanadianPlanet / Cylex"
    },
    {
        "business_name": "KENSTRUCTION",
        "contact_person": "Ken",
        "trade": "General Contracting & Carpentry",
        "city": "Owen Sound, ON",
        "phone": "(519) 375-4018",
        "web_status": "No website (Cylex entry only)",
        "source": "Cylex / Owen Sound Sun Times"
    },
    {
        "business_name": "Hamelin Construction",
        "contact_person": "Owner",
        "trade": "Masonry, Heritage Restoration & Roofing",
        "city": "Brockville, ON",
        "phone": "(613) 345-2568",
        "web_status": "No website (BBB listing only)",
        "source": "BBB / Eastern Ontario Local"
    },
    {
        "business_name": "Tri ROM Enterprises Inc.",
        "contact_person": "Owner",
        "trade": "Residential General Contracting",
        "city": "Pembroke, ON",
        "phone": "(613) 732-9559",
        "web_status": "No website (Cylex listing only)",
        "source": "Cylex"
    },
    {
        "business_name": "Mathison Roger Construction",
        "contact_person": "Roger Mathison",
        "trade": "Residential Building & Carpentry",
        "city": "Omemee, ON",
        "phone": "(705) 799-6885",
        "web_status": "No website (Directory profile only)",
        "source": "Cylex / Nosis"
    },
    {
        "business_name": "Robert Young Carpentry Ltd",
        "contact_person": "Robert Young",
        "trade": "Custom Carpentry & Framing",
        "city": "Fenelon Falls, ON",
        "phone": "(705) 879-8587",
        "web_status": "No website (Association listing only)",
        "source": "GovStack / Peterborough Construction Association"
    },
    {
        "business_name": "B Line Construction",
        "contact_person": "Owner",
        "trade": "Fencing, Decks & General Contracting",
        "city": "Chatham, ON",
        "phone": "(519) 784-0771",
        "web_status": "No website (CommunityVotes listing only)",
        "source": "Cylex / CommunityVotes"
    },
    {
        "business_name": "Southwestern Construction",
        "contact_person": "Owner",
        "trade": "General Building & Remodeling",
        "city": "Chatham, ON",
        "phone": "(519) 351-3777",
        "web_status": "No website (CKHBA directory only)",
        "source": "CKHBA / YellowPages"
    },
    {
        "business_name": "Twin Peaks Roofing",
        "contact_person": "Owner",
        "trade": "Roofing & Shingles",
        "city": "Chatham, ON",
        "phone": "(519) 397-9425",
        "web_status": "No website (Cylex listing only)",
        "source": "Cylex"
    }
]

def generate_personalized_message(c):
    name_salutation = f"Hi {c['contact_person']}," if c['contact_person'] != "Owner" else "Hi there,"
    return (
        f"{name_salutation} noticed {c['business_name']} is listed on Google in {c['city']} without a website. "
        f"We build fast, professional mobile websites for local contractors with click-to-call & instant estimate forms for just $20/mo ($0 upfront build fee). "
        f"You can see a live example of our work here: https://www.bluescontractingservices.ca/ "
        f"Would you like me to put together a quick free mockup for {c['business_name']} this week? - Kay at Beeclue Tech (647-947-6253)"
    )

output_path = "agents/marketing/ontario_contractors_no_website.csv"

fieldnames = [
    "Business Name",
    "Contact Person",
    "Trade",
    "City",
    "Phone Number",
    "Web Presence Status",
    "Verification Source",
    "Example Reference",
    "Monthly Pricing",
    "Personalized Message"
]

with open(output_path, mode="w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    for c in contractors:
        writer.writerow({
            "Business Name": c["business_name"],
            "Contact Person": c["contact_person"],
            "Trade": c["trade"],
            "City": c["city"],
            "Phone Number": c["phone"],
            "Web Presence Status": c["web_status"],
            "Verification Source": c["source"],
            "Example Reference": "https://www.bluescontractingservices.ca/",
            "Monthly Pricing": "$20/mo",
            "Personalized Message": generate_personalized_message(c)
        })

print(f"Successfully generated {len(contractors)} rows in {output_path}")
