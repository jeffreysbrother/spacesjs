#!/usr/bin/env node

const fs = require('fs');
var glob = require('glob-fs')({ gitignore: true });
var files = glob.readdirSync('./*.*');

// this works for renaming individual files
// fs.rename('./fart top.png', './fart-top.png', (err) => {
//   if (err) throw err;
//   console.log('file renamed!');
// });

glob.readdir('*.*', function(err, files) {
  console.log(files);
});
