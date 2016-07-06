var crypto = require('crypto');
var path = require('path');
var debug = require('debug')('hadron-compile-cache:markdown-compiler');
var highlight = require('highlight.js');

/**
 * Hex constant.
 */
var HEX = 'hex';

/**
 * SHA1 constant.
 */
var SHA1 = 'sha1';

/**
 * The jade constant.
 */
var MARKDOWN = 'md';

/**
 * html extension constant.
 */
var EXT = '.html';

/**
 * The options for the parser.
 */
var OPTIONS = {
  marked: {
    highlight: function(code) {
      return highlight.highlightAuto(code).value;
    }
  }
};

/**
 * UTF-8 constant for file reading.
 */
var UTF8 = 'utf8';

/**
 * Instantiate the markdown compiler.
 */
function MarkdownCompiler() {
  this.mm = require('marky-mark');
}

/**
 * Get the cache path for all compiled markdown templates.
 *
 * @param {String} filePath - The shortened file path.
 *
 * @returns {String} The cache path for compiled markdown templates.
 */
MarkdownCompiler.prototype.getCachePath = function(filePath) {
  return path.join(
    MARKDOWN,
    crypto.createHash(SHA1).update(filePath, UTF8).digest(HEX) + EXT
  );
};

/**
 * Compile the markdown file with the compiler.
 *
 * @param {String} sourceCode - The markdown source.
 * @param {String} filePath - The path to the source.
 *
 * @returns {String} The compiled html as a string.
 */
MarkdownCompiler.prototype.compile = function(sourceCode, filePath) {
  debug('Compiling ' + filePath);
  return this.mm.parse(sourceCode, OPTIONS).content;
};

module.exports = MarkdownCompiler;
