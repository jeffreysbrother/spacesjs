#!/usr/bin/env node

const fs = require('fs');
const prompt = require('prompt-sync')();
const currentDirectory = process.cwd();

const args = process.argv;
const generateTestFiles = args.includes('test');
const renameRecursively = args.includes('recursive');

// default regular expression: select all whitespace, hyphens, and underscores
const re = /([\s\-\_]{1,})/g;

const red = "\x1b[31m";
const reset = "\x1b[0m";

const dumbFileNames = [
  'newfile    -.txt',
  'Goofy Ass name---2.html',
  '1gross -3.css',
  'newfile___-4.doc',
  'another file-5.txt',
  'THUMBS-DOWN.svg',
  'feminism -lol.png',
];

const idioticFileNames = [
  'your moms house.txt',
  'BING---BONG.html'
];

const nestedDirectyory = `${currentDirectory}/nested-directory`;

const createFiles = (files, location) => {
  files.forEach(file => {
    fs.writeFile(`${location}/${file}`, 'dummy content', (err) => {      
      if (err) throw err;
    });
  });
};

if (generateTestFiles) {
  // generate files in the root of the current working directory
  createFiles(dumbFileNames, currentDirectory);

  // create new directory
  if (!fs.existsSync(nestedDirectyory)) {
    fs.mkdir(nestedDirectyory, (err) => {
      if (err) throw err;
    });

    // generate files in the nested-directory folder
    // TODO: there is a race condition here; sometimes not all files appear in the nested directory
    createFiles(idioticFileNames, nestedDirectyory);
  }

  console.log('files generated!');
  process.exit();
}

// recursive option
let recursiveWarning = '';
if (renameRecursively) {
  recursiveWarning = prompt(red + 'This will rename ALL files in ALL subfolders. Are you sure you want to do this? (y/n) ' + reset);
}

if (recursiveWarning.toLowerCase() === 'n' || recursiveWarning.toLowerCase() === 'no') {
  console.log('Operation cancelled.');
  process.exit();
}

fs.readdir(currentDirectory, { recursive: renameRecursively }, (err, files) => {  
  if (!files.length) {
    console.log('no files to rename');
    process.exit();
  }

  let filesProcessed = 0;

  files.forEach(file => {
    // TODO: currently this will also rename directories. Perhaps this is bad.
    fs.rename(file, file.replace(re, "-").toLowerCase(), err => {      
      if (err) throw err;

      filesProcessed++;
      if (filesProcessed === files.length) {
        console.log('done!');
      }
    });
  });

  console.log('done!');
});
