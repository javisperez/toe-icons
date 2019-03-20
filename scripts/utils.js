const utils = {
  sliceOrComplete(string, from, to = -1) {
    if (to === -1 || to === 0) {
      to = string.length;
    }

    return string.slice(from, to);
  },

  sanitizeIconName: (svgFile, includeExtension = true) => `${
      utils
        .sliceOrComplete(
          svgFile.replace(/\.svg$/ig, ''), 0, svgFile.indexOf(' ')
        )
    }${includeExtension ? '.svg' : ''}`,

  getTagsFromIconName(svgFile) {
    const [,match] = /\[(.+?)\]/ig.exec(svgFile) || [null, '']
    return match.split(',').map(s => s.trim());
  },
}

module.exports = utils;
