var fs = require('fs-plus');
var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var JadeCompiler = require('../../lib/compiler/jade-compiler');

describe('JadeCompiler', function() {
  describe('#getCachePath', function() {
    var compiler = new JadeCompiler();
    var file = path.join(__dirname, 'test.jade');
    var expected = 'jade/42049b3755588e9ff73e34a0c9fd8a64629dca97.js';

    it('returns the digested cache path', function() {
      expect(compiler.getCachePath(file)).to.equal(expected);
    });
  });

  describe('#compile', function() {
    var compiler = new JadeCompiler();
    var filePath = path.join(__dirname, 'test.jade');
    var source = fs.readFileSync(filePath, 'utf8');
    var compiled = compiler.compile(source, filePath);

    it('creates the template function', function() {
      expect(compiled).to.include('function template(locals) {');
    });

    it('compiles the source', function() {
      expect(compiled).to.include('<div id=\\"testing\\"></div>');
    });

    it('requires the jade runtime', function() {
      expect(compiled).to.include('var jade = require("@lukekarrys/jade-runtime");');
    });

    it('exports the module function', function() {
      expect(compiled).to.include('module.exports = template;');
    });
  });
});
