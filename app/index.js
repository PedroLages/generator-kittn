'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var KittnGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Custom Greeting
    var welcome =
      '\n ' +
      '\n    /\\___/\\       '+
      '\n    )     (       '+
      '\n   =\\     /=      .--------------------------.'+
      '\n     )   (        |   Kitty, Kitty, Kitty !  |'+
      '\n    /     \\       | ------------------------ |'+
      '\n    )     (       | Welcome to the marvelous |'+
      '\n   /       \\      |     Kittn generator!     |'+
      '\n   \\       /      |_________________________/'+
      '\n    \\__ __/'+
      '\n       ))'+
      '\n      //'+
      '\n     (('+
      '\n      \\) '+
      '\n ';
    console.log(welcome);

    // Different Questions
    var prompts = [
      {
        type: 'input',
        name: 'projectname',
        message: 'Please give your project a name.',
        default: 'kittn-basket'
      },{
        type: 'input',
        name: 'projectdescription',
        message: 'A Short description',
        default: 'undefinied'
      },{
        type: 'input',
        name: 'projectversion',
        message: 'The Version Number',
        default: '0.0.1'
      },{
        type: 'input',
        name: 'projectauthor',
        message: 'Project Author Name or Company',
        default: 'undefinied'
      },{
        type: 'input',
        name: 'projectmail',
        message: 'Mailadress from the Author',
        default: ''
      },{
        type: 'input',
        name: 'projecturl',
        message: 'URL to the Project',
        default: ''
      },{
        type: 'input',
        name: 'projectissues',
        message: 'URL to the Issues',
        default: ''
      },{
        type: 'input',
        name: 'projectrepo',
        message: 'URL to the Git-Repo',
        default: ''
      },{
        type: 'input',
        name: 'projectcssfilename',
        message: 'CSS Filename',
        default: 'style'
      },{
        type: 'confirm',
        name: 'projectiecompatible',
        message: 'Do you want to use a seperate CSS File for IE8?',
        default: 'style'
      }
    ];

    this.prompt(prompts, function (props) {
      this.projectname = props.projectname;
      this.projectdescription = props.projectdescription;
      this.projectversion = props.projectversion;
      this.projectauthor = props.projectauthor;
      this.projectmail = props.projectmail;
      this.projecturl = props.projecturl;
      this.projectissues = props.projectissues;
      this.projectrepo = props.projectrepo;
      this.projectcssfilename = props.projectcssfilename;
      this.projectiecompatible = props.projectiecompatible;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('src/sass');
    this.mkdir('src/jade/templatepart');
    this.directory('src/', 'src/');
    this.copy('_style.scss', 'src/sass/'+this.projectcssfilename+'.scss');
    this.copy('_default-page-header.jade', 'src/jade/templatepart/_default-page-header.jade');
    this.copy('_default-page-scripts.jade', 'src/jade/templatepart/_default-page-scripts.jade');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('_readme.md', 'readme.md');
    this.copy('_gitignore', '.gitignore');
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
    this.copy('gruntfile.js', 'gruntfile.js');
    this.copy('gulpfile.js', 'gulpfile.js');
    this.copy('todo.md', 'todo.md');
  }
});

module.exports = KittnGenerator;
