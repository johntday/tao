---
sidebar_position: 1
---

# grep

Native `grep` on MacOS.

---

## Only Return Matching Files
Using `l` option will find all files with at least 1 match. Using `r` option will search recursively.

```shell
grep -rl 'pattern' /path/to/dir
```

Only returns a list of absolute file paths.

---

## Multiple Search Patterns: OR
Using more than one search pattern.  The patterns are *OR*'ed together.

```shell
grep [options] -e 'pattern1' -e 'pattern2'
```

---

## Multiple Search Patterns: AND
Using more than one search pattern.  The patterns are *AND*'ed together.

xxx

---

## Collect Matches Only
xxx

---

## References
- `man grep`
