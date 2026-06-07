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
  'src/app/contact/page.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove animatedGrid
  content = content.replace(/<div className=\{styles\.animatedGrid\}><\/div>\n?\s*/g, '');
  
  // Remove Scene tag
  content = content.replace(/<Scene \/>\n?\s*/g, '');
  
  // Remove Scene import
  content = content.replace(/const Scene = dynamic\(\(\) => import\("@\/components\/Scene"\), \{ ssr: false \}\);\n?\s*/g, '');
  
  // Remove next/dynamic import if not used elsewhere
  if (content.includes('import dynamic from "next/dynamic";') && !content.includes('dynamic(')) {
    content = content.replace(/import dynamic from "next\/dynamic";\n?\s*/g, '');
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned ' + file);
});
