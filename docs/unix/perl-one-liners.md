---
sidebar_position: 5
---

# Perl One-Liners
Useful Perl command line utilities.

---

## Print Block of Text
### Consistent Markers
Example where format is consistent.
```shell
$ cat uniform.txt
mango
icecream
--start 1--
1234
6789
**end 1**
how are you
have a nice day
--start 2--
a
b
c
**end 2**
par,far,mar,tar
```
Print lines between "start" and "end".
```shell
# perl -ne 'print if /start/../end/'
$ perl -ne '$f=1 if /start/; print if $f; $f=0 if /end/' uniform.txt
--start 1--
1234
6789
**end 1**
--start 2--
a
b
c
**end 2**
```
Other examples where the format is consistent.
```shell
$ perl -ne '$f=0 if /end/; print "* $_" if $f; $f=1 if /start/' uniform.txt
* 1234
* 6789
* a
* b
* c

$ perl -ne '$f=1 if /start/; $f=0 if /end/; print if $f' uniform.txt
--start 1--
1234
6789
--start 2--
a
b
c

$ perl -ne 'print if $f; $f=1 if /start/; $f=0 if /end/' uniform.txt
1234
6789
**end 1**
a
b
c
**end 2**

$ # same as: perl -ne 'print if !(/start/../end/)'
$ perl -ne '$f=1 if /start/; print if !$f; $f=0 if /end/' uniform.txt
mango
icecream
how are you
have a nice day
par,far,mar,tar

$ perl -ne '$f=0 if /end/; print if !$f; $f=1 if /start/' uniform.txt
mango
icecream
--start 1--
**end 1**
how are you
have a nice day
--start 2--
**end 2**
par,far,mar,tar

$ perl -ne 'print if !$f; $f=1 if /start/; $f=0 if /end/' uniform.txt
mango
icecream
--start 1--
how are you
have a nice day
--start 2--
par,far,mar,tar

$ perl -ne '$f=1 if /start/; $f=0 if /end/; print if !$f' uniform.txt
mango
icecream
**end 1**
how are you
have a nice day
**end 2**
par,far,mar,tar

$ perl -ne '$f=1 if /start/; print if $f; exit if /end/' uniform.txt
--start 1--
1234
6789
**end 1**

$ perl -ne 'exit if /end/; print if $f; $f=1 if /start/' uniform.txt
1234
6789

$ # reverse input linewise, change the order of comparison, reverse again
$ # can't be used if record separator has to be something other than newline
$ tac uniform.txt | perl -ne '$f=1 if /end/; print if $f; exit if /start/' | tac
--start 2--
a
b
c
**end 2**

$ # or, save the blocks in a buffer and print the last one alone
$ perl -ne 'if(/start/){$f=1; $buf=$_; next}
            $buf .= $_ if $f;
            $f=0 if /end/;
            END{print $buf}' uniform.txt
--start 2--
a
b
c
**end 2**

$ seq 30 | perl -ne 'BEGIN{$n=2; $c=0} $c++ if /4/; if($c==$n){print; exit if /6/}'
14
15
16

$ seq 30 | perl -ne 'BEGIN{$n=1; $c=0} if(/4/){$f=1; $c++}
                     print if $f && $c>$n; $f=0 if /6/'
14
15
16
24
25
26

$ seq 30 | perl -ne 'BEGIN{$n=2; $c=0} if(/4/){$f=1; $c++}
                     print if $f && $c!=$n; $f=0 if /6/'
4
5
6
24
25
26

$ # additional condition here is '15' as one of the lines in the block
$ seq 30 | perl -ne 'if(/4/){$f=1; $buf=$_; next}
                     $buf .= $_ if $f;
                     if(/6/){$f=0; print $buf if $buf=~/^15$/m}'
14
15
16
```

### Not Consistent Markers
Using `buffer` when format is not consistent.
```shell
$ cat broken.txt
qqqqqqqqqqqqqqqq
error 1
hi
error 2
1234
6789
state 1
bye
state 2
error 3
xyz
error 4
abcd
state 3
zzzzzzzzzzzzzzzz

$ perl -ne 'if(/error/){$f=1; $buf=$_; next}
            $buf .= $_ if $f;
            if(/state/){print $buf if $f; $f=0}' broken.txt
error 2
1234
6789
state 1
error 4
abcd
state 3
```

---

## Replace Text but not within Single or Double-Quotes
This example will replace `;` to `#`, but not within single or double-quotes
```shell
perl -pe 's/(?:\x27;\x27|";")(*SKIP)(*F)|;/#/g'
```

---

## Find and extract IP addresses
Extract only IPv4 addresses
```shell
perl -MRegexp::Common=net -nE 'say $& while /$RE{net}{IPv4}/g'
```

---

## Find and Replace with Incrementing Value
```shell
echo 'a | a | a | a | a | a | a | a' | perl -pe 's/ *\| */$i++/ge'

a0a1a2a3a4a5a6a
```

- ` *\| *` matches `|` surrounded by zero-or-more spaces
- `e` modifier to have Perl do in-replacement
- `$i++` will increment value - starting at zero
