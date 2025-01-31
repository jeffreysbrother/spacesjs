#!/usr/bin/env node

const { stat, writeFile, existsSync, readdir, rename } = require('fs');
const { mkdir } = require('node:fs/promises');
const prompt = require('prompt-sync')();
const currentDirectory = process.cwd();

const args = process.argv;
const generateTestFiles = args.includes('test');
const renameRecursively = args.includes('recursive');

// default regular expression: select all whitespace, hyphens, and underscores
const re = /([\s\-\_]{1,})/g;

// colors
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
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
    writeFile(`${location}/${file}`, 'dummy content', (err) => {      
      if (err) throw err;
    });
  });
};

if (generateTestFiles) {
  // generate files in the root of the current working directory
  createFiles(dumbFileNames, currentDirectory);

  // create new directory
  mkdir(nestedDirectyory, { recursive: true })
    .then(() => {
      // generate files in the nested-directory folder
      createFiles(idioticFileNames, nestedDirectyory);
      console.log('files generated!');
      process.exit();
    })
    .catch(err => {
      throw err;
    });
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

readdir(currentDirectory, { recursive: renameRecursively }, (err, files) => {
  if (err) throw err;

  if (!files.length) {
    console.log('no files to rename');
    process.exit();
  }

  let filesProcessed = 0,
    directoriesSkipped = 0;

  files.forEach(file => {
    stat(file, (err, stats) => {
      if (err) throw err;
      
      // TODO: if an additional "test" directory is created within the nested-directory and that directory
      // is non-empty and has trailing hyphens, it will attempt to rename the directory itself, and fail.
      if (stats.isDirectory()) {
        directoriesSkipped++;
        console.log(yellow + `${file} is a directory. Skipping...` + reset);
      } else {
        rename(file, file.replace(re, "-").toLowerCase(), err => {
          if (err) throw err;
    
          filesProcessed++;
          if (filesProcessed === (files.length - directoriesSkipped)) {
            console.log(green + 'files renamed!' + reset);
          }
        });
      }
    });
  });
});
