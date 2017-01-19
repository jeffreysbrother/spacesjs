###SpacesJS

This is a little Node.js program for renaming files in the current working directory. It replaces spaces with hyphens and converts all uppercase characters to lowercase ones.

Technically, the regular expression selects all whitespace (any number of spaces, tabs, linefeeds, and carriage returns) **and/or** two or more consecutive hyphens. These groups of characters will be replaced with a SINGLE hyphen, and then all uppercase characters will be converted into lowercase ones. I have also accounted for a use-case in which a hyphen precedes or follows a space, for example `feminism -lol.png`. If we fail to account for a scenario such as this, our program would produce `feminism--lol.png` which is not horrible, but it is certainly more cumbersome than a file which did not contain multiple hyphens in a row (which is the desired behavior of SpacesJS).
