const fs = require("fs");
const path = require("path");
const Svgo = require("svgo");
const chalk = require("chalk");

const { sanitizeIconName } = require("./utils");
const { SVGO_DEFAULTS, ICONS_DIR, DIST_DIR_ICONS } = require("./constants");

const optimizeSvg = svg => {
  const svgo = new Svgo({
    plugins: [SVGO_DEFAULTS]
  });

  return svgo.optimize(svg);
};

const { log } = console

if (!fs.existsSync(DIST_DIR_ICONS)) {
  fs.mkdirSync(DIST_DIR_ICONS, { recursive: true });
}

// const promises = [];

fs.readdirSync(ICONS_DIR)
  .filter(file => path.extname(file) === ".svg")
  .forEach(svgFile => {
    const svg = fs.readFileSync(path.join(ICONS_DIR, svgFile));

    const optimizing = optimizeSvg(svg);
    // promises.push(optimizing);

    optimizing
      .then(({ data }) => {
        const toFile = `${sanitizeIconName(
          svgFile,
          0,
          svgFile.indexOf(" ")
        )}.svg`;
        const newSizeRatio = Math.round((data.length / svg.length) * 100);

        log(` > Processing ${chalk.blue(toFile)}:`);
        log(
          `    ${(svg.length / 1024).toFixed(2)}kb ${chalk.yellow(">")} ${(
            data.length / 1024
          ).toFixed(2)}kb (${
          newSizeRatio < 100
            ? chalk.green(`${newSizeRatio}%`)
            : chalk.red(`${newSizeRatio}%`)
          })`
        );
        log("");

        // replace the opacities values
        const cleanSvgData = data
          .replace(/fill="#d9d9d9"/g, 'style="opacity: 0.15"')
          .replace(/fill="#b3b3b3"/g, 'style="opacity: 0.30"')
          .replace(/fill="#8c8c8c"/g, 'style="opacity: 0.45"')
          .replace(/fill="#666"/g, 'style="opacity: 0.60"')
          .replace(/fill="#404040"/g, 'style="opacity: 0.75"')
          .replace(/<path fill="none" d="M[a-z 0-9-]+v800H[0-9-]+z"\/?>(<\/path>)?/gi, '');

        fs.writeFileSync(path.join(DIST_DIR_ICONS, toFile), cleanSvgData);
      })
      .catch(error => {
        console.error(`Error: ${svgFile} failed, ${error}`);
      });
  });

// Return a Promise because is handy
// return Promise.all(promises);
