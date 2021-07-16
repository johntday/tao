---
sidebar_position: 1
---

# Git Log
Search and display commits from `git` history.
Additional examples and options may be found here https://git-scm.com/docs/

## Display last 2-weeks of commits
```shell
git log --since="2 week ago" --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
```
This uses a very nice color format.
Other useful options with this are
- `--no-merges`
- `--merges`
- `--first-parent`

## Find commits by author
```shell
git log --author="John\|Mary"
```
Find commits by author for 'John' or 'Mary'.

## Find commits between two dates
```shell
git log --after "2014-02-01" --before "2014-02-02"
```
## Find commits by comment
```shell
git log -S"datahub"

# or using grep
git log ... | grep -i 'datahub'
```
## Find commits by file
```shell
# find commits with foo.py
git log -- foo.py

# find commits with foo.py or *.properties
git log -- foo.py *.properties

# find commits with README.md
git log --name-only --pretty=format:%H --follow README.md
```
## Find last commit that changed file
```shell
git log -1 -- README.md
```
## Find commits that changed lines
```shell
# commits that changed line 13
git log -L13,13:README.md
```
## Find all branches containing commit
```shell
git branch -a --contains db2ef19d89
```
## Find all files changed in last 10 commits
```shell
git diff --name-only HEAD HEAD~10
```
## Find all files changed between 2 commits
```shell
git diff --name-only SHA1 SHA2
```

## References
- https://git-scm.com/docs/
