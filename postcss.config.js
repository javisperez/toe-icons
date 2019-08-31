const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),

    autoprefixer(),

    // Only add PurgeCSS in production
    process.env.NODE_ENV === "production"
      ? purgecss({
          content: ["./src/**/*.html", "./src/**/*.vue"],
          whitelistPatterns: [/multiselect|fieldset\[disabled\]/],
          extractors: [
            {
              extractor: {
                extract(content) {
                  return content.match(/[A-Za-z0-9-_:/]+/g) || [];
                }
              },
              extensions: ["html", "js", "vue"]
            }
          ]
        })
      : ""
  ]
};
