---
sidebar_position: 1
---

# Install
Install Docker MySQL 5.7 for MacOS

## Install Docker on MacOS
Guide for installing Docker on MacOS
https://docs.docker.com/docker-for-mac/install/.

## Install MySQL 5.7 Image
```shell
# get latest MySQL 5.7 image
docker pull mysql/mysql-server:5.7

# list docker images
docker images
 
# install and start - root password: root
docker run -d --publish=3306:3306 --name=mysql57 -e MYSQL_ROOT_PASSWORD=root mysql/mysql-server:5.7
 
# how to start / stop / restart
# docker start mysql57
# docker stop mysql57
# docker restart mysql57
 
# show images running
docker ps
```

## Configure MySQL
```shell
# open mysql command line
docker exec -it mysql57 mysql -uroot -p

# configure user hybris
mysql> CREATE USER 'hybris'@'%' IDENTIFIED BY 'hybris';
mysql> CREATE USER 'hybris'@'127.0.0.1' IDENTIFIED BY 'hybris';
mysql> CREATE USER 'hybris'@'localhost' IDENTIFIED BY 'hybris';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'%';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'127.0.0.1';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'localhost';

# configure user root
mysql> CREATE USER 'root'@'%' IDENTIFIED BY 'root';
mysql> CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'root';
mysql> CREATE USER 'root'@'localhost' IDENTIFIED BY 'root';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'%';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'127.0.0.1';
mysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'localhost';

# create database
mysql> CREATE DATABASE mydb CHARACTER SET utf8 COLLATE utf8_bin;

mysql> quit
```
