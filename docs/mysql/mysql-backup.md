---
sidebar_position: 2
---

# Backup MySQL Database
How to backup MySQL database.  All examples used MySQL version 5.7

## Backup MySQL Database - local non-docker or remote
```shell
docker run -it mysql:5.7 /usr/bin/mysqldump \
  -h [MYSQL_HOST] -u [MYSQL_USER] --password=[MYSQL_PASSWORD] \
  [MYSQL_DATABASE] > backup.sql
```

Similar example, but with compression.
```shell
docker run -it mysql:5.7 /usr/bin/mysqldump \
  -h [MYSQL_HOST] -u [MYSQL_USER] --password=[MYSQL_PASSWORD] \
  [MYSQL_DATABASE] | gzip -9 > backup.sql.gz
```
## Backup MySQL Database - already docker container
```shell
docker exec [MYSQL_CONTAINER] /usr/bin/mysqldump \
  -u [MYSQL_USER] --password=[MYSQL_PASSWORD] \
  [MYSQL_DATABASE] > backup.sql
```

Similar example, but with compression
```shell
docker exec [MYSQL_CONTAINER] /usr/bin/mysqldump \
  -u [MYSQL_USER] --password=[MYSQL_PASSWORD] \
  [MYSQL_DATABASE] | gzip -9 > backup.sql.gz
```

## Backup MySQL Database - other options
### Backup Table
```shell
docker exec [MYSQL_CONTAINER] /usr/bin/mysqldump \
  -u [MYSQL_USER] --password=[MYSQL_PASSWORD] \
  [MYSQL_DATABASE] [MYSQL_TABLE] > backup.sql
```

### Backup Table with Condition
```shell
docker exec [MYSQL_CONTAINER] /usr/bin/mysqldump \
  -u [MYSQL_USER] --password=[MYSQL_PASSWORD] \
  [MYSQL_DATABASE] [MYSQL_TABLE] \
  --where="[CONDITION_HERE]" > backup.sql
```
