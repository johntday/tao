---
sidebar_position: 2
---

# Regex Perl

## General Tokens
| | Description |
| --- | --- |
| `\t` | Tab |
| `\n` | newline |
| `\r` | carriage return |
| `\xhh` | hex char code *hh* |
| `\0` | Null char |






## Metacharacters
| Char | Description |
| --- | --- |
| `^` | Beginning of line |
| `$` | End of line |
| `.` | Any char except newline |
| `*` | Match 0 or more times |
| `+` | Match 1 or more times |
| `?` | Match 0 or 1 times, *OR* shortest match |
| <code>&#124;</code> | Alternative |
| `()` | Grouping |
| `[]` | Set of chars |
| `{}` | Repetition modifier |
| <code>&#92;</code> | Quote *OR* special usage |

- To escape a *Metacharacter*, prefix with <code>&#92;</code>.
- Shortest match means that the shortest string matching the pattern is taken. 
  The default is “greedy matching”, which finds the longest match.

## Repetition
| Example | Description |
| --- | --- |
| `a*` | 0 or more a's |
| `a+` | 1 or more a's |
| `a?` | 0 or 1 a's |
| `a{m}` | Exactly *m* a's |
| `a{m,}` | *m* or more a's |
| `a{m,n}` | *m* to *n* a's |
| `repetition?` | Shortest match for repetition |

## Zero-width assertions
| | Description |
| --- | --- |

| `\b` | Word boundary |
| `\B` | Not a word boundary |

## Matching
| | Description |
| --- | --- |
| `\w` | Match any word char - alphanumeric or *_* |
| `\W` | Match any non-word char |
| `\s` | Match any whitespace char - space, tab, newline |
| `\S` | Match any non-whitespace char |
| `\d` | Match any digit char |
| `\D` | Match any non-digit char |

