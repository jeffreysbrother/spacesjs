#!/usr/bin/env node

const target = './';
const fs = require('fs');

fs.readdir(target, function(err, files) {
  files.forEach(function(file) {
    fs.rename(file, file.replace(/([\s\-]{1,})/g, "-").toLowerCase(), function(err) {
      if (err) throw err;
    });
  });
  console.log('files renamed!');
});
