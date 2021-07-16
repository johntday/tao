---
sidebar_position: 3
---

# ripgrep
*ripgrep* is a very fast *grep*-like tool based on [Rust language](https://www.rust-lang.org/).

## Installing ripgrep on MacOS
```shell
brew install ripgrep
```
See [homebrew](../mac/homebrew.md)

## Recursive Search
By default, *ripgrep* supports recursive search.
```shell
# find all matches recursively in current directory for 'regex'
rg 'regex' 
```
## Not matching
```shell
# find all lines that do not match in file for 'regex'
rg -v 'regex' file
```
## Just return matching file-paths
```shell
# find all matches file-paths recursively in current directory for 'regex'
rg -l 'regex'
```
## Case-insensitive
```shell
rg -i 'regex'
```
## Return file-paths without a match
```shell
# find all matches file-paths recursively in current directory for 'regex'
rg --files-without-match 'regex'
```
## Find Fixed Strings
```shell
# find all matches file-paths recursively in current directory for 'fixed string'
rg -F 'fixed string'
```
## Show context around match
```shell
# find all matches file-paths recursively in current directory for 'regex'
# show 2 lines before and after match
rg 'regex' -C 2

# show 1 line before and 2 lines after match
rg 'regex' -B 1 -A 2
```
## Using Glob to only search for specific file names
```shell
# find all matches file-paths recursively in current directory for 'regex'
# only search for files named '*-items.xml'
rg -g '*-items.xml' 'regex'
```
## List files like find command
```shell
# find all file-paths recursively named 'readme*.txt' in directory '~/Documents'
rg --files ~/Documents/ -g 'readme*.txt'
```
## Other
- Supports PCRE2 with `-P` option.
- Multiline
    - `-U` match across multiline
    - `--multiline-dotall` dot can match newline char
- `--hidden` search hidden files and directories
- Counting matches
    - `-c` return count of matching files
    - `--count-matches` return list of files and match count
- `-o` only print matches - not entire line
- `-mN` only print first *N* number of matching lines per file
- `-z` search in compressed files
- `-I` do not print file-path

## References
- `man rg`
- `rg -h` short descriptions
- `rg --help` long descriptions
- [GitHub repo for ripgrep](https://github.com/BurntSushi/ripgrep)
