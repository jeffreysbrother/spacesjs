## SpacesJS

This is a little Node.js program for renaming files in the current working directory. It replaces spaces with hyphens and converts all uppercase characters to lowercase ones.

Technically, the regular expression selects all whitespace (spaces, tabs, linefeeds, and carriage returns) and hyphens in any order. These groups of characters will be replaced with a SINGLE hyphen, and then JavaScript converts all uppercase characters to lowercase ones. This RegEx pattern accounts for the use-case in which a hyphen precedes or follows a space, for example `feminism -lol.png`. A previous iteration of this program did not account for this scenario, so it could potentially produce filenames such as `feminism--lol.png` which is not horrible, but it is certainly more cumbersome than a file that doesn't contain consecutive hyphens.

### Instructions

Install node. After this, install SpacesJS:

```bash
npm install -g spacesjs
```

Then, simply run the command `spacesjs` in the target directory.

### Options

By default, SpacesJS will only rename files in the root of the current working directory. But if we want to rename all files recursively--in all child directories--we can pass it the `recursive` argument:

```bash
spacesjs recursive
```

Additionally, we can pass SpacesJS the `test` argument if we want to generate a series of files and folders for testing purposes. These files have shitty filenames that can be that can be improved by running the utility, with or without the recursive option.

```bash
spacesjs test
```

### Future Additions:

- [ ] error handling and unique messages (no files renamed, # of files renamed, etc.)
- [ ] optionally eliminate other special characters
- [ ] eliminate hyphens just before the file extension (`image-.png`)
- [ ] prevent file extensions from being modified
- [x] colors

Thanks to [Tim Spinks](https://github.com/monkishtypist) for making valuable RegEx suggestions.
