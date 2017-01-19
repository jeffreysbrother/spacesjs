###SpacesJS

This is a little Node.js program for renaming files in the current working directory. It will replace spaces with hyphens and will convert all uppercase characters to lowercase ones.

Ideally, groups of two or more spaces in a row would get replaced with ONE hyphen. But I haven't had any luck getting the regular expression to do this. The following RegEx statement was unable to detect single spaces:

```
/(\s)\1+/
```

If any of you fine NPM individuals have (has?) any input on this matter, feel free to message me!
