// 'use strict';
// var util = require('util');
// var path = require('path');
// var yeoman = require('yeoman-generator');


// var Sapui5Generator = module.exports = function Sapui5Generator(args, options, config) {
//   yeoman.generators.Base.apply(this, arguments);

//   this.on('end', function() {
//     this.installDependencies({
//       skipInstall: options['skip-install']
//     });
//   });

//   this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
// };

// util.inherits(Sapui5Generator, yeoman.generators.Base);

// Sapui5Generator.prototype.askFor = function askFor() {
//   var cb = this.async();

//   // have Yeoman greet the user.
//   console.log(this.yeoman);

//   var prompts = [{
//     type: 'checkbox',
//     name: 'features',
//     message: 'What more would you like?',
//     choices: [{
//       name: 'Use CDN(https://sapui5.hana.ondemand.com/resources/*)',
//       value: 'useCdn',
//       checked: true
//     }, {
//       name: 'Use develop mode(Need some supportability features.)',
//       value: 'developMode',
//       checked: false
//     }]
//   }];

//   this.prompt(prompts, function(answers) {

//     var features = answers.features;

//     function hasFeature(feat) {
//       return features.indexOf(feat) !== -1;
//     }

//     // manually deal with the response, get back and store the results.
//     // we change a bit this way of doing to automatically do this in the self.prompt() method.
//     this.useCdn = hasFeature('useCdn');
//     this.developMode = hasFeature('developMode');

//     var resourceUrl = 'https://sapui5.hana.ondemand.com/resources/sap-ui-core.js';
//     resourceUrl = this.useCdn ? resourceUrl : resourceUrl.replace(/^https:\/\/sapui5.hana.ondemand.com\//, '');
//     this.resourceUrl = this.developMode ? resourceUrl.replace(/\.js$/, '-dbg.js') : resourceUrl;

//     cb();
//   }.bind(this));
// };

// Sapui5Generator.prototype.app = function app() {



//   this.mkdir('app');
//   this.mkdir('app/view');
//   this.mkdir('app/util');
//   this.mkdir('app/css');

//   this.copy('_package.json', 'package.json');
//   this.copy('_bower.json', 'bower.json');
//   this.copy('Gruntfile.js', 'Gruntfile.js');

//   this.template('index.html', 'app/index.html');
//   this.copy('Application.js', 'app/Application.js');
//   this.copy('App.view.js', 'app/view/App.view.js');
//   this.copy('App.controller.js', 'app/view/App.controller.js');
//   this.copy('Home.view.js', 'app/view/Home.view.js');
//   this.copy('Home.controller.js', 'app/view/Home.controller.js');
//   this.copy('main.css', 'app/css/main.css');

// };

// Sapui5Generator.prototype.projectfiles = function projectfiles() {
//   this.copy('editorconfig', '.editorconfig');
//   this.copy('jshintrc', '.jshintrc');
// };


'use strict';

var join = require('path').join;
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var wiredep = require('wiredep');
var chalk = require('chalk');

var Sapui5Generator = module.exports = function Sapui5Generator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  // setup the test-framework property, Gruntfile template will need this
  // this.testFramework = options['test-framework'] || 'mocha';
  this.coffee = options.coffee;

  // for hooks to resolve on mocha by default
  // options['test-framework'] = this.testFramework;

  // resolved to mocha by default (could be switched to jasmine for instance)
  // this.hookFor('test-framework', {
  //   as: 'app',
  //   options: {
  //     options: {
  //       'skip-message': options['skip-install-message'],
  //       'skip-install': options['skip-install']
  //     }
  //   }
  // });

  this.options = options;

  this.pkg = require('../package.json');
};

require('util').inherits(Sapui5Generator, yeoman.generators.Base);

Sapui5Generator.prototype.askFor = function askFor() {
  var cb = this.async();

  // welcome message
  if (!this.options['skip-welcome-message']) {
    this.log(require('yosay')());
    this.log(chalk.magenta(
      'Out of the box I include HTML5 Boilerplate, jQuery, and a ' +
      'Gruntfile.js to build your app.'
    ));
  }
// http://sapui5.hana.ondemand.com/resources/sap-ui-core.js
  var prompts = [{
    name: "applicationType",
    type: "list",
    message: "What type of application do you want?",
    choices: [{
      name: "App",
      value: "app"
    }, {
      name: "SplitApp",
      value: "splitApp",
    }]
  }, {
    name: "namespace",
    message: "What application namespace do you want?",
    default: "sap.ui.sample"
  }, {
    name: "resourcePath",
    type: "list",
    message: "Where do you want to use the sapui5 resource?",
    choices: [{
      name: "http://openui5.hana.ondemand.com/resources/sap-ui-core.js",
      value: "http://openui5.hana.ondemand.com/resources/sap-ui-core.js"
    }, {
      name: "resources/sap-ui-core.js",
      value: "resources/sap-ui-core.js",
    }]
  }];

  this.prompt(prompts, function(answers) {
    var features = answers.features;

    function hasFeature(feat) {
      return features.indexOf(feat) !== -1;
    }

    this.applicationType = answers.applicationType;
    this.namespace = answers.namespace;
    this.resourcePath = answers.resourcePath;

    cb();
  }.bind(this));
};

Sapui5Generator.prototype.gruntfile = function gruntfile() {
  this.template('common/root/Gruntfile.js', 'Gruntfile.js');
};

Sapui5Generator.prototype.packageJSON = function packageJSON() {
  this.template('common/root/_package.json', 'package.json');
};

Sapui5Generator.prototype.git = function git() {
  this.template('common/root/gitignore', '.gitignore');
  this.copy('common/root/gitattributes', '.gitattributes');
};

Sapui5Generator.prototype.bower = function bower() {
  this.template('common/root/_bower.json', 'bower.json');
};

Sapui5Generator.prototype.jshint = function jshint() {
  this.copy('common/root/jshintrc', '.jshintrc');
};

Sapui5Generator.prototype.editorConfig = function editorConfig() {
  this.copy('common/root/editorconfig', '.editorconfig');
};

Sapui5Generator.prototype.sapui5 = function sapui5() {

  this.mkdir('app');
  this.mkdir('app/style');
  this.mkdir('app/img');
  this.mkdir('app/view');
  this.mkdir('app/util');

  if (this.coffee) {
    this.mkdir('coffee');
    this.mkdir('coffee/view');
    this.mkdir('coffee/util');

    this.template('coffee/Compoment.coffee', 'coffee/Compoment.coffee');
    this.template('coffee/Router.coffee', 'coffee/Router.coffee');
    this.copy('coffee/view/App.view.coffee', 'coffee/view/App.view.coffee');
    this.copy('coffee/view/App.controller.coffee', 'coffee/view/App.controller.coffee');
    this.copy('coffee/view/Home.view.coffee', 'coffee/view/Home.view.coffee');
    this.copy('coffee/view/Home.controller.coffee', 'coffee/view/Home.controller.coffee');
    if(this.applicationType === "splitApp"){
      this.copy('coffee/view/Menu.view.coffee', 'coffee/view/Menu.view.coffee');
      this.copy('coffee/view/Menu.controller.coffee', 'coffee/controller/Menu.view.coffee');
    }
    this.copy('coffee/view/Sub.view.coffee', 'coffee/view/Sub.view.coffee');
    this.copy('coffee/view/Sub.controller.coffee', 'coffee/view/Sub.controller.coffee');
    this.copy('coffee/view/NotFound.view.coffee', 'coffee/view/NotFound.view.coffee');
    this.copy('coffee/view/NotFound.controller.coffee', 'coffee/view/NotFound.controller.coffee');
  } else {

  }

};

Sapui5Generator.prototype.icons = function icons() {
  this.copy('common/app/img/favicon.ico', 'app/favicon.ico');
  this.copy('common/app/img/icon_057.png', 'app/img/icon_057.png');
  this.copy('common/app/img/icon_072.png', 'app/img/icon_072.png');
  this.copy('common/app/img/icon_114.png', 'app/img/icon_114.png');
  this.copy('common/app/img/icon_144.png', 'app/img/icon_144.png');
};

Sapui5Generator.prototype.mainStylesheet = function mainStylesheet() {
  this.copy('common/app/style/style.css', 'app/style/style.css');
};

Sapui5Generator.prototype.index = function index() {
    this.template('common/app/index.html', 'app/index.html');
};

Sapui5Generator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/style');
  this.mkdir('app/img');
  this.mkdir('app/view');
  this.mkdir('app/util');

  if (this.coffee) {
    this.mkdir('coffee');
    this.mkdir('coffee/view');
    this.mkdir('coffee/util');
  }
};

Sapui5Generator.prototype.install = function() {
  if (this.options['skip-install']) {
    return;
  }

  var done = this.async();
  this.installDependencies({
    skipMessage: this.options['skip-install-message'],
    skipInstall: this.options['skip-install'],
    callback: done
  });
};