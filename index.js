#!/usr/bin/env node

const fs = require('fs');
const prompt = require('prompt-sync')();
const currentDirectory = process.cwd();

const args = process.argv;
const generateTestFiles = args.includes('test');
const renameRecursively = args.includes('recursive');

// default regular expression: select all whitespace, hyphens, and underscores
let re = /([\s\-\_]{1,})/g;

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
    createFiles(idioticFileNames, nestedDirectyory);
  }

  console.log('files generated!');
  process.exit();
}

// recursive option
let recursiveWarning = '';
if (renameRecursively) {
  recursiveWarning = prompt('This will rename ALL files in ALL subfolders. Are you sure you want to do this? (y/n) ');
}

if (recursiveWarning.toLowerCase() === 'n' || recursiveWarning.toLowerCase() === 'no') {
  console.log('Operation cancelled.');
  process.exit();
}

fs.readdir(currentDirectory, { recursive: renameRecursively }, (err, files) => {
  // "files" array will have just one item if the directory is empty (the name of the current working directory)
  if (files.length === 1) {
    console.log('no files to rename');
    process.exit();
  }

  files.forEach(file => {
    fs.rename(file, file.replace(re, "-").toLowerCase(), err => {      
      if (err) throw err;
    });
  });

  console.log('done!');
});
