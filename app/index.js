'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var Sapui5Generator = module.exports = function Sapui5Generator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    this.installDependencies({
      skipInstall: options['skip-install']
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(Sapui5Generator, yeoman.generators.Base);

Sapui5Generator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'checkbox',
    name: 'features',
    message: 'What more would you like?',
    choices: [{
      name: 'Use CDN(https://sapui5.hana.ondemand.com/resources/*)',
      value: 'useCdn',
      checked: true
    }, {
      name: 'Use develop mode(Need some supportability features.)',
      value: 'developMode',
      checked: false
    }]
  }];

  this.prompt(prompts, function(answers) {

    var features = answers.features;

    function hasFeature(feat) {
      return features.indexOf(feat) !== -1;
    }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.useCdn = hasFeature('useCdn');
    this.developMode = hasFeature('developMode');

    console.log('this.developMode->' + this.developMode);

    var resourceUrl = 'https://sapui5.hana.ondemand.com/resources/sap-ui-core.js';
    resourceUrl = this.useCdn ? resourceUrl : resourceUrl.replace(/^https:\/\/sapui5.hana.ondemand.com\//, '');
    this.resourceUrl = this.developMode ? resourceUrl.replace(/\.js$/, '-dbg.js') : resourceUrl;

    cb();
  }.bind(this));
};

Sapui5Generator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/view');
  this.mkdir('app/util');
  this.mkdir('app/css');

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('Gruntfile.js', 'Gruntfile.js');

  this.template('index.html', 'app/index.html');
  this.copy('Application.js', 'app/Application.js');
  this.copy('App.view.js', 'app/view/App.view.js');
  this.copy('App.controller.js', 'app/view/App.controller.js');
  this.copy('Home.view.js', 'app/view/Home.view.js');
  this.copy('Home.controller.js', 'app/view/Home.controller.js');
  this.copy('main.css', 'app/css/main.css');

};

Sapui5Generator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};