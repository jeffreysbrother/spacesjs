#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

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

fs.readdir(__dirname, function(err, files) {
    if (err) return;
    files.forEach(function(f) {
        f.replace(" ", "-").toLowerCase();
    });
});
