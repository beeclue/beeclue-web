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
  'src/app/wordpress-web-design-canada/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-and-conditions/page.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find styles.footerLocation or pageStyles.footerLocation
  const searchRegex = /(<p className=\{[a-zA-Z]+\.footerLocation\}>36 Carslake Crescent, Toronto, ON M1J 2A7<\/p>)/;
  
  if (searchRegex.test(content)) {
    // Determine the style object name (e.g. 'styles' or 'pageStyles')
    const match = content.match(/<p className=\{([a-zA-Z]+)\.footerLocation\}/);
    const styleObjName = match ? match[1] : 'styles';

    const replaceStr = `$1
            <div className={${styleObjName}.legalLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-and-conditions">Terms & Conditions</Link>
            </div>`;
    
    // Ensure we don't add it twice
    if (!content.includes('legalLinks')) {
      content = content.replace(searchRegex, replaceStr);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + file);
    }
  } else {
    console.log('Search string not found in ' + file);
  }
});
