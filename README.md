# SAPUI5 Generator [![Build Status](https://secure.travis-ci.org/mitsuruog/generator-sapui5.png?branch=master)](https://travis-ci.org/mitsuruog/generator-sapui5)

A generator for SAPUI5 and [OpenUI5(the Open-Source-licensed version of SAPUI5)](http://sap.github.io/openui5/).

![Commandline](https://raw2.github.com/mitsuruog/generator-sapui5/master/screenshots/command.png)


## Getting Started

In order to get started, you'll want to install [Yoeman](http://yeoman.io/) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.

```
$ npm install -g yo
```

To install generator-sapui5 from npm, run:

```
$ npm install -g generator-sapui5
```

Initiate the generator:

```
$ yo sapui5
```

Finally, Preview:

```
$ grunt server
```

or

```
$ grunt
```

Result:

![ScreenShot](https://raw2.github.com/mitsuruog/generator-sapui5/master/screenshots/HelloSAPUI5.png)


### Sub Generators

[TODO]Available sub generators:

* sapui5:view

* sapui5:fragments

* sapui5:module

### Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

* [TODO]`--coffee`

  Add support for [CoffeeScript](http://coffeescript.org/).



### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

