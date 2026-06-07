const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://beeclue.com/10-ways-mobile-apps-are-revolutionizing-small-businesses/').then(res => {
  const $ = cheerio.load(res.data);
  console.log('H1 Title:', $('h1').first().text().trim());
  const article = $('article').html() ? $('article') : $('.elementor-widget-theme-post-content');
  console.log('Article length:', article.html() ? article.html().length : 0);
  
  if ($('.entry-content').length) console.log('Has .entry-content');
  if ($('.post-content').length) console.log('Has .post-content');
}).catch(console.error);
