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
  
  // Replace <main> with <main className={pageStyles.main}> and add the dimming layer
  const searchStr = `<main>`;
  const replaceStr = `<main className={pageStyles.main}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)", zIndex: -1 }} />`;
      
  if (content.includes(searchStr)) {
    content = content.replace(searchStr, replaceStr);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed ' + file);
  }
});
