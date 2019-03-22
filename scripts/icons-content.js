const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const { ICONS_DIR, DIST_DIR } = require('./constants');
const { sanitizeIconName } = require('./utils');

require.extensions['.svg'] = function (module, filename) {
  const data = fs.readFileSync(filename, 'utf8');
  const $el = cheerio.load(data);

  module.exports = $el('svg').html();
};

module.exports = () => {
  const object = {};
  const DIST_DIR_ICONS = path.resolve(DIST_DIR, 'icons');

  fs
    .readdirSync(ICONS_DIR)
    .filter(file => path.extname(file) === '.svg')
    .forEach((svgFile) => {
      const iconFilename = sanitizeIconName(svgFile);
      const iconContent = require(path.resolve(DIST_DIR_ICONS, iconFilename));
      const iconName = sanitizeIconName(svgFile, false);

      object[iconName] = iconContent;
    });

  fs.writeFileSync(path.join(DIST_DIR, 'icons.json'), JSON.stringify(object))
}
