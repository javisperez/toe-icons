const utils = {
  // Slice the given string in the given range or return the whole word if range ends on 0 or -1
  sliceOrComplete(string, from, to = -1) {
    if (to === -1 || to === 0) {
      return string
    }

    return string.slice(from, to);
  },

  // Sanitize the icon name to process
  sanitizeIconName: (svgFile, includeExtension = true) => `${
    utils.sliceOrComplete(svgFile.replace(/\.svg$/gi, ""), 0, svgFile.indexOf(" "))
  }${includeExtension ? ".svg" : ""}`,

  // Extract the tags from the unprocessed icon name
  getTagsFromIconName(svgFile) {
    const [, match] = /\[(.+?)\]/gi.exec(svgFile) || [null, ""];
    return match.split(",").map(s => s.trim());
  }
}

module.exports = utils