const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');
css += `
.animatedGrid {
  position: fixed;
  top: -50px;
  left: 0;
  width: 100vw;
  height: calc(100vh + 50px);
  z-index: 1;
  pointer-events: none;
  background-size: 50px 50px;
  background-image:
    linear-gradient(to right, rgba(0, 77, 153, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 77, 153, 0.15) 1px, transparent 1px);
  animation: moveGrid 3s linear infinite;
}

@keyframes moveGrid {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}
`;
fs.writeFileSync('src/app/globals.css', css);
