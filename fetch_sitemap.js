const axios = require('axios');
const fs = require('fs');

async function main() {
  try {
    const response = await axios.get('https://beeclue.com/post-sitemap.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    const xml = response.data;
    
    // Simple regex extraction since it's just XML
    const locRegex = /<loc>(.*?)<\/loc>/g;
    const links = [];
    let match;
    while ((match = locRegex.exec(xml)) !== null) {
      links.push(match[1]);
    }
    
    fs.writeFileSync('sitemap_links.json', JSON.stringify(links, null, 2));
    console.log(`Successfully extracted ${links.length} links to sitemap_links.json`);
  } catch (error) {
    console.error('Error fetching sitemap:', error.message);
  }
}

main();
