module.exports = {
  outputDir: "docs",
  runtimeCompiler: true,
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/toe-icons/" : "/",
  assetsDir: undefined,
  parallel: undefined,
  css: undefined
};
