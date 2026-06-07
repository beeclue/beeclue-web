const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/page.tsx',
  'src/app/services/page.tsx',
  'src/app/web-design-toronto/page.tsx',
  'src/app/custom-software-development-toronto/page.tsx',
  'src/app/ecommerce-development-toronto/page.tsx',
  'src/app/mobile-app-development-toronto/page.tsx',
  'src/app/seo-services-toronto/page.tsx',
  'src/app/ui-ux-design-toronto/page.tsx',
  'src/app/wordpress-web-design-canada/page.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  const searchStr = `<a href="mailto:hello@beeclue.com" className={styles.emailLink}>
              hello@beeclue.com
            </a>`;
            
  const replaceStr = `<a href="mailto:hello@beeclue.com" className={styles.emailLink}>
              hello@beeclue.com
            </a>
            <a href="tel:+16479476253" className={styles.emailLink}>
              +1 (647) 947-6253
            </a>`;
  
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  } else {
    console.log('Search string not found in ' + file);
  }
});
