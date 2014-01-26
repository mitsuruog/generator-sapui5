/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('sapui5 generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('sapui5:app', [
                '../../app'
            ]);
            done();
        }.bind(this));
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            '.jshintrc',
            '.editorconfig',
            'app/index.html',
            'app/Application.js',
            'app/view/App.view.js',
            'app/view/App.controller.js',
            'app/view/Home.view.js',
            'app/view/Home.controller.js',
            'app/css/main.css'
        ];

        helpers.mockPrompt(this.app, {
            'useCdn': true,
            'developMode': false
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
