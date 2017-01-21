#!/usr/bin/env node

const fs = require('fs');
const argv = require('yargs').argv;
const target = './';
const re = /([\s\-]{1,})/g;

fs.readdir(target, function(err, files) {
  files.forEach(function(file) {
    fs.rename(file, file.replace(re, "-").toLowerCase(), function(err) {
      if (err) throw err;
    });
  });
  console.log('Files renamed!');

  // if argument "remove" is passed
  if (argv.remove) {
    files.forEach(function(file) {
      fs.rename(file, file.replace(argv.remove, ""), function(err2) {
        if (err2) throw err2;
      });
    });
  }
});
