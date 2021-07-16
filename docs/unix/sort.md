---
sidebar_position: 7
---

# sort
Using native MacOS *sort* utility for sorting and dedup data.

```shell
# alphabetical order
sort file

# remove dups
sort -u file

# file with integers
sort -n file

# file with integers - reverse order
sort -nr file

# multiple files - merge and sort
sort file1 file2

# multiple files - merge, sort, and dedup
sort -u file1 file2

# sort by 1st field delimited by comma
sort -t"," -k1,1 file

# sort by 1st field delimited by comma - remove dups
sort -t"," -k1,1 -u file

# sort by 2nd field integer
sort -t"," -k2n,2 file

# sort by 2nd field decimal (general numeric)
sort -t"," -k2g,2 file

# sort by 2nd field integer in reverse order
sort -t"," -k2nr,2 file

# sort by 1st field alpha and 2nd field numerically
sort -t"," -k1,1 -k2n,2 file

# sort by 1st field alpha - case insensitive
sort -t"," -k1f,1 file

# check if file sorted and return lines out of order
sort -c file
```