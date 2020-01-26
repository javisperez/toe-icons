const path = require('path');

const DIST_DIR = path.resolve(__dirname, '../dist');
const ICONS_DIR = path.resolve(__dirname, '../assets/icons');
const DIST_DIR_ICONS = path.resolve(__dirname, '../dist/svg');

module.exports = {
  ICONS_DIR,
  DIST_DIR,
  DIST_DIR_ICONS,
  SVGO_DEFAULTS: [
    {
      addAttributesToSVGElement: {
        attribute: 'fill="currentColor" stroke="currentColor" stroke-width="0"'
      }
    },
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: true },
    { removeComments: true },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeUselessDefs: true },
    { removeEditorsNSData: true },
    { removeEmptyAttrs: true },
    { removeHiddenElems: true },
    { removeEmptyText: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { cleanupEnableBackground: true },
    { convertStyleToAttrs: true },
    { convertColors: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { removeUnusedNS: true },
    { cleanupIDs: true },
    { cleanupNumericValues: { floatPrecision: 2 } },
    { moveElemsAttrsToGroup: true },
    { moveGroupAttrsToElems: true },
    { collapseGroups: true },
    { removeRasterImages: false },
    { mergePaths: true },
    { convertShapeToPath: true },
    { sortAttrs: true },
    { removeDimensions: true },
    { removeAttrs: { attrs: '(stroke|fill|class|id|data-name)' } }
  ]
}
