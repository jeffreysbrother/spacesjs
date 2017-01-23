#!/usr/bin/env node

var fs = require('fs');
var argv = require('yargs').argv;
var target = process.cwd();
var re = /([\s\-]{1,})/g;
var flag = argv.remove;

if (flag) {
  fs.readdir(target, function(err, files) {
    files.forEach(function(file) {
      fs.rename(file, file.replace(argv.remove, ""), function(err) {
        if (err) {
          throw err;
        }
      });
      fs.rename(file, file.replace(re, "-").toLowerCase(), function(err) {
        if (err) { 
          throw err;
        }
      });
    });
    console.log('Files renamed! Additional string \"' + argv.remove + '\" removed.');
  });
} else {
  fs.readdir(target, function(err, files) {
    files.forEach(function(file) {
      fs.rename(file, file.replace(re, "-").toLowerCase(), function(err) {
        if (err) {
          throw err;
        }
      });
    });
  });
  console.log('Files renamed!');
}
