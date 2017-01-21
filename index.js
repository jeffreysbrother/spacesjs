#!/usr/bin/env node

const fs = require('fs');
var argv = require('yargs').argv;
const target = './';
var re = /([\s\-]{1,})/g

fs.readdir(target, function(err, files) {
  files.forEach(function(file) {
    fs.rename(file, file.replace(re, "-").toLowerCase(), function(err) {
      if (err) throw err;
    });
  });
  console.log('Files renamed!');

  // if argument "remove" is passed
  if (argv.remove) {
    // if that argument is a string
    if (typeof argv.remove === 'string') {
      console.log('The additional string ' + '\"' + argv.remove + '\"' + ' has also been removed');
      // if not a string, it's probably a number
    } else {
      console.log('The number ' + '\"' + argv.remove + '\"' + ' has also been removed');
    }
  }
});
