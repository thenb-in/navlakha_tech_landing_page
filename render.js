// render.js
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');

const templatePath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'public', 'index.html');

// Optional: pass data to EJS
const data = {}; 

ejs.renderFile(templatePath, data, { views: [path.join(__dirname, 'views')] }, (err, html) => {
  if (err) {
    console.error('Rendering failed:', err);
    return;
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
  console.log('Rendered HTML written to', outputPath);
});
