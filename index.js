#!/usr/bin/env node

const target = './';
const fs = require('fs');

fs.readdir(target, function(err, files) {
  files.forEach(file => {
    fs.rename(file, file.replace(/\s/g, "-").toLowerCase(), function(err) {
    if (err) throw err;
      // is something supposed to go here?
    });
  });
  console.log('files renamed!');
});
