module.exports = {
  outputDir: "../../docs",
  runtimeCompiler: false,
  productionSourceMap: false,
  chainWebpack: (config) => config.resolve.symlinks(false),
  publicPath: process.env.NODE_ENV === "production" ? "/toe-icons/" : "/",
};
