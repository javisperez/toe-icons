const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { SRC_DIR, DIST_DIR } = require("./constants");

function generateVueComponents() {
  fs.readFile(
    path.resolve(SRC_DIR, "plugins", "VueComponents.ts"),
    "utf8",
    (err, data) => {
      if (err) {
        return console.log(err);
      }

      const result = data.replace("../../dist/", "./");

      fs.writeFile(
        path.resolve(DIST_DIR, "components.js"),
        result,
        "utf8",
        err => {
          if (err) {
            return console.log(err);
          }
        }
      );
    }
  );
}

module.exports = () => {
  console.log(
    chalk.white(" > Generating"),
    chalk.green("Vue"),
    chalk.white("components")
  );
  generateVueComponents();
};
