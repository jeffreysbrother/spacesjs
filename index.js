#!/usr/bin/env node

const target = './';
const fs = require('fs');

fs.readdir(target, (err, files) => {
  files.forEach(file => {
    fs.rename(file, file.replace(/\s/g, "-").toLowerCase(), (err) => {
    if (err) throw err;
      // is something supposed to go here?
    });
  });
  console.log('files renamed!');
});
