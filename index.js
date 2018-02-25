#!/usr/bin/env node

const fs = require('fs');
const target = process.cwd();
const re = /([\s\-]{1,})/g;

// use this instead if you wish to replace ALL non-alphanumeric characters (except period) with a hyphen
// const re = /([^a-zA-Z0-9.]{1,})/g;

fs.readdir(target, (err, files) => {
  files.forEach(file => {
    fs.rename(file, file.replace(re, "-").toLowerCase(), err => {
      if (err) {
        throw err;
      }
    });
  });
});

console.log('Files renamed!');
