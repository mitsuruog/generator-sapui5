# generator-sapui5 [![Build Status](https://secure.travis-ci.org/mitsuruog/generator-sapui5.png?branch=master)](https://travis-ci.org/mitsuruog/generator-sapui5)

A generator for [OpenUI5(the Open-Source-licensed version of SAPUI5)](http://sap.github.io/openui5/).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-sapui5 from npm, run:

```
$ npm install -g generator-sapui5
```

Finally, initiate the generator:

```
$ yo sapui5
```

Preview:

```
$ grunt server
```

### Generators

[TODO]Available generators:

* sapui5:view

### Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

* [TODO]`--app-style=[mobile|desktop]`

  Defaults to `mobile`. Can be switched for `desktop`.



### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
