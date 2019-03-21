const fs = require("fs");
const chalk = require("chalk");
const { ICONS_DIR, DIST_DIR } = require("./constants");

const optimizeIcons = require("./optimize");
const generateTags = require("./icons-tags");
const generateContent = require("./icons-content");
const generateComponents = require("./generate-components");

const log = console.log;

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR);
}

log(
  chalk.white.bold(`1. Optimizing SVG's in ${chalk.blue.bold(ICONS_DIR)}...`)
);

optimizeIcons().then(() => {
  log("---");

  log(chalk.white.bold("2. Generating"), chalk.blue.bold("icons-tags.json"));
  log("---");

  generateTags();

  log(chalk.white.bold("3. Generating"), chalk.blue.bold("icons.json"));
  log("---");

  generateContent();

  log(chalk.white.bold("4. Generating Components..."));

  generateComponents();

  log("---");
});
