// render.js
const fs = require('fs');
const fse = require('fs-extra');
const ejs = require('ejs');
const path = require('path');

const templatePath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'public', 'index.html');

// Optional: pass data to EJS
const data = {}; 

// Ensure public directory exists
fse.ensureDirSync(path.join(__dirname, 'public'));

ejs.renderFile(templatePath, data, { views: [path.join(__dirname, 'views')] }, (err, html) => {
  if (err) {
    console.error('Rendering failed:', err);
    return;
  }
  fse.ensureDirSync(path.dirname(outputPath));
  fs.writeFileSync(outputPath, html);
  console.log('Rendered HTML written to', outputPath);
});

// Copy static directories to public folder
const staticDirs = [
  'stylesheets',
  'javascripts',
  'images',
];

staticDirs.forEach((dir) => {
  const src = path.join(__dirname, 'static', dir);
  const dest = path.join(__dirname, 'public', dir);
  
  if (fs.existsSync(src)) {
    fse.copySync(src, dest, { overwrite: true });
    console.log(`Copied ${dir} to public directory`);
  } else {
    console.warn(`Source directory not found: ${src}`);
  }
});