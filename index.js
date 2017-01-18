#!/usr/bin/env node

// var fs = require('fs');
// var path = require('path');

// fs.readFile(path.resolve(__dirname, 'bears.txt'), function(err, data){
//   var bears = data.toString().split('\n');
//   var bear = bears[Math.floor(Math.random() * bears.length)];
//   console.log(bear);
// });



// fs.readdir(__dirname, function(err, files) {
//     if (err) return;
//     files.forEach(function(f) {
//         console.log('Files: ' + f);
//     });
// });

// fs.readdir(__dirname, function(err, files) {
//     if (err) return;
//     files.forEach(function(f) {
//         f.replace(" ", "-");
//     });
// });

var fs = require('fs'),
    path = require('path'),
    args = process.argv.slice(2),
    dir = args[0],
    match = RegExp(args[1], 'g'),
    replace = args[2],
    files;

files = fs.readdirSync(dir);

files.filter(function(file) {
  return file.match(match);
}).forEach(function(file) {
  var filePath = path.join(dir, file),
      newFilePath = path.join(dir, file.replace(match, replace));

  fs.renameSync(filePath, newFilePath);
});
