##SpacesJS

This is a little Node.js program for renaming files in the current working directory. It replaces spaces with hyphens and converts all uppercase characters to lowercase ones.

Technically, the regular expression selects all whitespace (spaces, tabs, linefeeds, and carriage returns) and hyphens in any order. These groups of characters will be replaced with a SINGLE hyphen, and then JavaScript converts all uppercase characters to lowercase ones. This RegEx pattern accounts for the use-case in which a hyphen precedes or follows a space, for example `feminism -lol.png`. A previous iteration of this program did not account for this scenario, so it could potentially produce filenames such as `feminism--lol.png` which is not horrible, but it is certainly more cumbersome than a file which did not contain multiple hyphens in a row.

###Future Additions:

- [ ] error handling and unique messages (no files renamed, # of files renamed, etc.)
- [ ] the ability to anticipate duplicate filenames
- [ ] the elimination of additional (potentially detrimental) special characters
- [ ] the elimination of hyphens just before the extension (`image-.png`)
- [ ] the ability to pass additional arguments to the program, to eliminate desired characters

Thanks to [Tim Spinks](https://github.com/monkishtypist) for making valuable RegEx suggestions.
