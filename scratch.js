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
  if (!fs.existsSync(filePath)) {
    console.log('Not found: ' + file);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace <section with <FadeIn
  content = content.replace(/<section\b/g, '<FadeIn');
  // Replace </section> with </FadeIn>
  content = content.replace(/<\/section>/g, '</FadeIn>');
  
  // Add import if not present
  if (!content.includes('import FadeIn')) {
    if (content.includes('import { ArrowRight')) {
      content = content.replace(/(import { ArrowRight.*?;\n)/, '$1import FadeIn from "@/components/FadeIn";\n');
    } else if (content.includes('import Link')) {
      content = content.replace(/(import Link.*?;\n)/, '$1import FadeIn from "@/components/FadeIn";\n');
    } else if (content.includes('"use client"')) {
      content = content.replace(/("use client";?\n)/, '$1\nimport FadeIn from "@/components/FadeIn";\n');
    } else {
      content = 'import FadeIn from "@/components/FadeIn";\n' + content;
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Updated ' + file);
});
