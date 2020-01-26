const fs = require('fs')
const path = require('path')
const chalk = require("chalk");

const { ICONS_DIR, DIST_DIR } = require('./constants')
const { sanitizeIconName, getTagsFromIconName } = require('./utils')

// Generates a json file with the name, path and tags of all icons
const info = {};

// For every file in the icons directory
fs.readdirSync(ICONS_DIR)
  // SVG files only
  .filter(file => path.extname(file).toLowerCase() === ".svg")
  // Get the tags from the name
  .forEach(svgFile => {
    const iconFilename = sanitizeIconName(svgFile);
    const iconName = sanitizeIconName(svgFile, false);

    // Json entries
    info[iconName] = {
      tags: getTagsFromIconName(svgFile),
      path: path.join("icons", iconFilename)
    };
  });

// Save the json
fs.writeFileSync(
  path.resolve(__dirname, path.join(DIST_DIR, "icons-info.json")), JSON.stringify(info)
);

console.log(`> Generating ${chalk.blue("icon info json")}... done`);

const indexContent = `import iconsInfo from './icons-info.json'
export default iconsInfo`

fs.writeFileSync(
  path.resolve(__dirname, path.join(DIST_DIR, "index.js")
), indexContent);