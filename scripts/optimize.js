const fs = require('fs');
const path = require('path');
const Svgo = require('svgo');
const chalk = require('chalk');
const { SVGO_DEFAULTS, ICONS_DIR, DIST_DIR } = require('./constants');
const { sanitizeIconName, deleteFolder } = require('./utils');

const { log } = console;

module.exports = () => {
  const optimizeSvg = svg => {
    const svgo = new Svgo({
      plugins: [SVGO_DEFAULTS],
    });

    return svgo.optimize(svg);
  }

  const DIST_ICONS_DIR = path.join(DIST_DIR, 'icons')

  if (!fs.existsSync(DIST_ICONS_DIR)){
    fs.mkdirSync(DIST_ICONS_DIR);
  }

  const promises = [];

  fs.readdirSync(ICONS_DIR)
    .filter(file => path.extname(file) === '.svg')
    .forEach((svgFile) => {
      const svg = fs.readFileSync(path.join(ICONS_DIR, svgFile));

      const optimizing = optimizeSvg(svg);
      promises.push(optimizing);

      optimizing
        .then(({ data }) => {
          const toFile = `${
            sanitizeIconName(
              svgFile, 0, svgFile.indexOf(' ')
            )
          }.svg`
          const newSizeRatio = Math.round((data.length / svg.length) * 100)

          log(`Processing ${chalk.blue(toFile)}:`);
          log(`    ${
              (svg.length / 1024).toFixed(2)
            }kb ${chalk.yellow('>')} ${
              (data.length / 1024).toFixed(2)
            }kb (${
              newSizeRatio < 100 ?
                chalk.green(`${newSizeRatio}%`) :
                chalk.red(`${newSizeRatio}%`)
            })`)
          log('')

          fs.writeFileSync(path.join(DIST_ICONS_DIR, toFile), data);
        })
        .catch(error => {
          console.error(`Error: ${svgFile} failed, ${error}`)
        });
    });

  // Return a Promise because is handy
  return Promise.all(promises);
}
