---
sidebar_position: 4
---

# sed
Native *sed* on MacOS.

---

## Find and Replace - In-Place
Find and replace string "in-place".
```shell
sed -i '' -e 's/find/replace/' myfile
```
Note, the space between `-i` and `''`. GNU *sed* requires no space between to work.

## Find and Replace - With Backup
Find and replace string "with backup".
```shell
sed -i.bak -e 's/find/replace/' myfile
```
Works for both MacOS and GNU *sed*.


---

## References
- `man sed`
