const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const chalk = require("chalk");

const { ICONS_DIR, DIST_DIR, DIST_DIR_ICONS } = require('./constants');
const { sanitizeIconName } = require('./utils');

require.extensions['.svg'] = function (module, filename) {
  const data = fs.readFileSync(filename, 'utf8');
  const $el = cheerio.load(data);

  module.exports = $el('svg').html();
};

const content = {};

fs
  .readdirSync(ICONS_DIR)
  .filter(file => path.extname(file).toLowerCase() === '.svg')
  .forEach((svgFile) => {
    const iconFilename = sanitizeIconName(svgFile);
    const iconContent = require(path.resolve(DIST_DIR_ICONS, iconFilename));
    const iconName = sanitizeIconName(svgFile, false);

    content[iconName] = iconContent;
  });

fs.writeFileSync(
  path.resolve(__dirname, path.join(DIST_DIR, "icons-content.json")), JSON.stringify(content)
)

console.log(`> Generating ${chalk.blue("icons contents json")}... done`);
