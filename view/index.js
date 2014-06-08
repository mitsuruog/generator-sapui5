'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');

var ViewGenerator = module.exports = function ViewGenerator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(ViewGenerator, ScriptBase);

ViewGenerator.prototype.createViewFiles = function createViewFiles() {
  this.generateSourceAndTest(
    'directive',
    'spec/directive',
    'directives',
    this.options['skip-add'] || false
  );
};