##SpacesJS

This is a little Node.js program for renaming files in the current working directory. It replaces spaces with hyphens and converts all uppercase characters to lowercase ones.

Technically, the regular expression selects all whitespace (spaces, tabs, linefeeds, and carriage returns) and hyphens in any order. These groups of characters will be replaced with a SINGLE hyphen, and then JavaScript converts all uppercase characters to lowercase ones. This RegEx pattern accounts for the use-case in which a hyphen precedes or follows a space, for example `feminism -lol.png`. A previous iteration of this program did not account for this scenario, so it could potentially produce filenames such as `feminism--lol.png` which is not horrible, but it is certainly more cumbersome than a file that doesn't contain consecutive hyphens.

###Instructions

Install node. After this, install SpacesJS:

```bash
npm install -g spacesjs
```

Then, simply run the command `spacesjs` in the target directory.

###Future Additions:

- [ ] reintroduction of yargs. Previous attempts produce the message "Error: ENOENT: no such file or directory"
- [ ] error handling and unique messages (no files renamed, # of files renamed, etc.)
- [ ] the ability to anticipate duplicate filenames
- [ ] the elimination of additional (potentially detrimental) special characters
- [ ] the elimination of hyphens just before the extension (`image-.png`)
- [ ] prevent file extensions from being modified
- [ ] improve program architecture to reduce redundancy and improve readability

Thanks to [Tim Spinks](https://github.com/monkishtypist) for making valuable RegEx suggestions.
