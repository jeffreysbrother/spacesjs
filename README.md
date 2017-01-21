##SpacesJS

This is a little Node.js program for renaming files in the current working directory. It replaces spaces with hyphens and converts all uppercase characters to lowercase ones.

Technically, the regular expression selects all whitespace (spaces, tabs, linefeeds, and carriage returns) and hyphens in any order. These groups of characters will be replaced with a SINGLE hyphen, and then JavaScript converts all uppercase characters to lowercase ones. This RegEx pattern accounts for the use-case in which a hyphen precedes or follows a space, for example `feminism -lol.png`. A previous iteration of this program did not account for this scenario, so it could potentially produce filenames such as `feminism--lol.png` which is not horrible, but it is certainly more cumbersome than a file that doesn't contain consecutive hyphens.

###Instructions

Simply run the command `spacesjs` in the target directory.

###Other Features:

With the help of [yargs](https://www.npmjs.com/package/yargs), we can pass Spacesjs a flag if we need to remove additional characters from our set of filenames:

```bash
# remove an arbitrary string from all filenames
spacesjs --remove="th-"
```

###Future Additions:

- [ ] error handling and unique messages (no files renamed, # of files renamed, etc.)
- [ ] the ability to anticipate duplicate filenames
- [ ] the elimination of additional (potentially detrimental) special characters
- [ ] the elimination of hyphens just before the extension (`image-.png`)
- [ ] prevent file extensions from being modified

Thanks to [Tim Spinks](https://github.com/monkishtypist) for making valuable RegEx suggestions.
