#!/usr/bin/env node

var fs = require('fs');
var target = process.cwd();
var re = /([\s\-]{1,})/g;

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
