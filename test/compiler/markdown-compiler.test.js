var fs = require('fs-plus');
var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var MarkdownCompiler = require('../../lib/compiler/markdown-compiler');

describe('MarkdownCompiler', function() {
  describe('#getCachePath', function() {
    var compiler = new MarkdownCompiler();
    var file = path.join(__dirname, 'test.md');
    var expected = 'md/2389f394ffc8e460bec079423e28134aed9e8943.js';

    it('returns the digested cache path', function() {
      expect(compiler.getCachePath(file)).to.equal(expected);
    });
  });

  describe('#compile', function() {
    var compiler = new MarkdownCompiler();
    var filePath = path.join(__dirname, 'test.md');
    var source = fs.readFileSync(filePath, 'utf8');
    var compiled = compiler.compile(source, filePath).content;

    it('creates the header', function() {
      expect(compiled).to.include('<h3 id="test-title">Test Title</h3>');
    });

    it('creates the text node', function() {
      expect(compiled).to.include('<p>Test text.</p>');
    });
  });
});
