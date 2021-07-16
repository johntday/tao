---
sidebar_position: 1
---

# grep

Native `grep` on MacOS.
See [ripgrep](./ripgrep.md) for a good replacement of `grep`.
## Only Return Matching Files
Using `l` option will find all files with at least 1 match. Using `r` option will search recursively.

```shell
grep -rl 'pattern' /path/to/dir
```
Only returns a list of absolute file paths.

## Multiple Search Patterns: OR
Using more than one search pattern.  The patterns are *OR*'ed together.

```shell
# using -e option
grep -e 'pattern1' -e 'pattern2' file

# using extended regex: -E option
grep -E 'patter1|pattern2' file
```
## Multiple Search Patterns: AND
Using more than one search pattern.  The patterns are *AND*'ed together.
```shell
grep -E 'pattern1' file | grep -E 'pattern2'

grep -E 'pattern1.*pattern2' file
```

## References
- `man grep`
