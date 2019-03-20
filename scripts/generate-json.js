const fs = require("fs");
const path = require("path");
const { ICONS_DIR, DIST_DIR } = require("./constants");
const { sanitizeIconName, getTagsFromIconName } = require("./utils");

module.exports = () => {
  const object = {};

  fs.readdirSync(ICONS_DIR)
    .filter(file => path.extname(file) === ".svg")
    .forEach(svgFile => {
      const iconFilename = sanitizeIconName(svgFile);
      const iconName = sanitizeIconName(svgFile, false);

      object[iconName] = {
        tags: getTagsFromIconName(svgFile),
        path: path.join("icons", iconFilename)
      };
    });

  fs.writeFileSync(path.join(DIST_DIR, "icons.json"), JSON.stringify(object));
};
