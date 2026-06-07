const fs = require('fs');
const path = require('path');

const files = [
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-and-conditions/page.tsx'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove the fixed div
  const searchStr1 = `<div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)", zIndex: -1 }} />`;
  content = content.replace(searchStr1, '');
  
  // Add background directly to main
  const searchStr2 = `<main className={pageStyles.main}>`;
  const replaceStr2 = `<main className={pageStyles.main} style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)" }}>`;
  
  if (content.includes(searchStr2)) {
    content = content.replace(searchStr2, replaceStr2);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed ' + file);
  }
});
