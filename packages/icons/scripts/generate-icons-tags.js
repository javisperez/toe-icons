const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const { ICONS_DIR, DIST_DIR } = require('./constants');
const { sanitizeIconName, getTagsFromIconName } = require('./utils');

const tags = {};

fs
  .readdirSync(ICONS_DIR)
  .filter(file => path.extname(file) === '.svg')
  .forEach((svgFile) => {
    const iconName = sanitizeIconName(svgFile, false);

    tags[iconName] = getTagsFromIconName(svgFile);
  });

fs.writeFileSync(
  path.resolve(__dirname, path.join(DIST_DIR, "icons-tags.json")), JSON.stringify(tags)
)

console.log(`> Generating ${chalk.blue("icons tags json")}... done`);