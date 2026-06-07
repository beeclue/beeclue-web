const fs = require('fs');
let content = fs.readFileSync('src/components/Scene.tsx', 'utf8');

// remove the misplaced import
content = content.replace('import { motion } from "framer-motion";\n\nexport default function Scene()', 'export default function Scene()');

// add it to the top
content = 'import { motion } from "framer-motion";\n' + content;

fs.writeFileSync('src/components/Scene.tsx', content);
