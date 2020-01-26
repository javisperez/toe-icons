const fs = require("fs");
const chalk = require("chalk");

const { ICONS_DIR, DIST_DIR } = require("./constants");

const optimizeIcons = require("./optimize");
const generateTags = require("./icons-tags");
const generateContent = require("./icons-content");
const generateComponents = require("./generate-components");

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR);
}

console.log(chalk.white.bold(`Optimizing SVG's in ${chalk.blue.bold(ICONS_DIR)}...`));

optimizeIcons().then(() => {

  console.log(chalk.white.bold("Generating"), chalk.blue.bold("icons-tags.json"));

  generateTags();

  console.log(chalk.white.bold("Generating"), chalk.blue.bold("icons.json"));

  generateContent();

  console.log(chalk.white.bold("Generating Components..."));

  generateComponents();

  console.log("")
});
