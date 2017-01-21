#!/usr/bin/env node

const fs = require('fs');
var argv = require('yargs').argv;
const target = './';

fs.readdir(target, function(err, files) {
  files.forEach(function(file) {
    fs.rename(file, file.replace(/([\s\-]{1,})/g, "-").toLowerCase(), function(err) {
      if (err) throw err;
    });
  });
  console.log('files renamed!');
  if (argv.x) {
    console.log('You have also passed the argument: %d', argv.x);
  }
});
