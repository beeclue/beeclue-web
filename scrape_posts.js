const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

async function main() {
  const sitemapUrl = 'https://beeclue.com/post-sitemap.xml';
  console.log(`Fetching sitemap from ${sitemapUrl}...`);
  
  let sitemapXml;
  try {
    const response = await axios.get(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    sitemapXml = response.data;
  } catch (error) {
    console.error(`Error fetching sitemap: ${error.message}`);
    process.exit(1);
  }

  // Parse URLs from sitemap
  const $ = cheerio.load(sitemapXml, { xmlMode: true });
  const urls = [];
  $('loc').each((index, element) => {
    const url = $(element).text().trim();
    if (url) {
      urls.push(url);
    }
  });

  console.log(`Found ${urls.length} URLs in the sitemap.`);

  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`[${i + 1}/${urls.length}] Fetching: ${url}`);
    
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        timeout: 10000 // 10s timeout
      });
      
      const page$ = cheerio.load(response.data);
      const title = page$('title').text().trim();
      
      results.push({
        title: title || 'No Title',
        permalink: url
      });
      
      console.log(`  -> Title: "${title}"`);
    } catch (error) {
      console.error(`  -> Failed to fetch/parse ${url}: ${error.message}`);
      results.push({
        title: 'Error Fetching Title',
        permalink: url,
        error: error.message
      });
    }

    // Gentle sleep of 200ms between requests
    await new Promise(resolve => setTimeout(resolve, 200));
  }

  const outputPath = path.join(__dirname, 'posts.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSuccessfully created posts.json at: ${outputPath}`);
  console.log(`Total posts scraped: ${results.length}`);
}

main().catch(error => {
  console.error('Fatal error during execution:', error);
  process.exit(1);
});
