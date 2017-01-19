###SpacesJS

This is a little Node.js program for renaming files in the current working directory. It will replace spaces with hyphens and will convert all uppercase characters to lowercase ones.

Technically, the regular expression selects all whitespace (any number of spaces, tabs, linefeeds, and carriage returns) **and/or** two or more consecutive hyphens. These groups of characters will be replaced with a SINGLE hyphen, and the result will be forced to lowercase.
