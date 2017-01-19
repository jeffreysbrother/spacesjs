#!/usr/bin/env node

const target = './';
const fs = require('fs');

fs.readdir(target, function(err, files) {
  files.forEach(function(file) {
    fs.rename(file, file.replace(/(\s+)|(-{2,})|(\t)/g, "-").toLowerCase(), function(err) {
    if (err) throw err;
      // is something supposed to go here, LOL?
    });
  });
  console.log('files renamed!');
});
