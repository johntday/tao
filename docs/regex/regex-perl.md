---
sidebar_position: 2
---

# Regex Perl
Cheat sheet for PCRE2.

## Tokens
| | Description |
| --- | --- |
| `\n` | Newline |
| `\r` | Carriage return |
| `\t` | Tab |
| `[abc]` | Char of: a, b, or c |
| `[^abc]` | Char except: a, b, or c |
| `[a-z]` | Char in range: a-z |
| `[^a-z]` | Char not in range: a-z |
| `[a-zA-Z]` | Char in range: a-z or A-Z |
| `.` | Any char |
| <code>a&#124;b</code> | Char a or b |
| `\s` | Any whitespace char - space, tab, newline |
| `\S` | Any non-whitespace char |
| `\d` | Any digit |
| `\D` | Any non-digit |
| `\w` | Any word char - alphanumeric or underscore |
| `\W` | Any non-word char |
| `\N` | Any char but newline |
| `\xHH` | hex char code *HH* |
| `\xHHHH` | hex char code *HHHH* |
| `\0` | Null char |
## Quantifiers
| | Description |
| --- | --- |
| `a*` | 0, 1, or more *a* |
| `a?` | 0 or 1 *a* |
| `a+` | 1 or more *a* |
| `a{3}` | Exactly 3 *a* |
| `a{3,}` | 3 or more *a* |
| `a{3,5}` | Between 3 and 6 *a* |
| `a*` | Greedy quantifier |
| `a*?` | Lazy quantifier |
| `a*+` | Possessive quantifier |
## Anchors
| | Description |
| --- | --- |
| `^` | Start of string |
| `$` | End of string |
| `\A` | Start of string - not affected by multiline mode|
| `\Z` | End of string - not affected by multiline mode|
| `\b` | Word boundary |
| `\B` | Non-word boundary |
| `\G` | Start of match |
## Groups
| | Description |
| --- | --- |
| `(?:...)` | Match everything enclosed |
| `(...)` | Capture everything enclosed |
| `(?#...)` | Comment group |
| `(?'name'...)` | Named capture group |
| <code>(?(1)yes&#124;no)</code> | Conditional statement |
| <code>(?(?=...)yes&#124;no)</code> | Lookahead conditional |
| <code>(?(?<=...)yes&#124;no)</code> | Lookbehind conditional |
| `(?=...)` | Positive lookahead |
| `(?!...)` | Negative lookahead |
| `(?<=...)` | Positive lookbehind |
| `(?<!...)` | Negative lookbehind |
| `(*ACCEPT)` | Control verb |
| `(*COMMIT)` | Control verb |
| `(*PRUNE)` | Control verb |
| `(*SKIP)` | Control verb |
| `(*THEN)` | Control verb |
| `(*UTF8)` | Control verb |
