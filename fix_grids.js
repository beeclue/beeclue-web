const fs = require('fs');
const path = require('path');

function findCssFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findCssFiles(filePath, fileList);
    } else if (filePath.endsWith('.module.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const cssFiles = findCssFiles('./src/app');

const fixCSS = `
/* =========================================
   ORPHANED GRID ITEM CENTERING FIX 
   ========================================= */
@media (min-width: 1025px) {
  .scroller > *:last-child:nth-child(3n + 1),
  .valueGrid > *:last-child:nth-child(3n + 1) {
    grid-column: 2;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .scroller > *:last-child:nth-child(2n + 1),
  .valueGrid > *:last-child:nth-child(2n + 1) {
    grid-column: 1 / -1;
    justify-self: center;
    width: calc(50% - 1.5rem);
  }
}

/* Fix featuredGrid stretching when orphaned */
.featuredGrid {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: center;
}

.featuredCard {
  flex: 1 1 350px !important;
  max-width: 500px !important;
}
`;

cssFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('ORPHANED GRID ITEM CENTERING FIX')) {
    fs.appendFileSync(file, '\n' + fixCSS);
    console.log('Fixed:', file);
  }
});
