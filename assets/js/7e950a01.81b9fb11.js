(self.webpackChunktao=self.webpackChunktao||[]).push([[9931],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,d=u["".concat(i,".").concat(p)]||u[p]||y[p]||l;return n?r.createElement(d,s(s({ref:t},m),{},{components:n})):r.createElement(d,s({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2596:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(2122),o=n(9756),l=(n(7294),n(3905)),s=["components"],a={sidebar_position:1},i="Install MySQL",c={unversionedId:"mysql/mysql-install",id:"mysql/mysql-install",isDocsHomePage:!1,title:"Install MySQL",description:"Install Docker MySQL 5.7 for MacOS",source:"@site/docs/mysql/mysql-install.md",sourceDirName:"mysql",slug:"/mysql/mysql-install",permalink:"/tao/docs/mysql/mysql-install",editUrl:"https://github.com/johntday/tao/edit/master/docs/mysql/mysql-install.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Homebrew",permalink:"/tao/docs/mac/homebrew"},next:{title:"Backup MySQL Database",permalink:"/tao/docs/mysql/mysql-backup"}},m=[{value:"Install Docker on MacOS",id:"install-docker-on-macos",children:[]},{value:"Install MySQL 5.7 Image",id:"install-mysql-57-image",children:[]},{value:"Configure MySQL",id:"configure-mysql",children:[]}],y={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-mysql"},"Install MySQL"),(0,l.kt)("p",null,"Install Docker MySQL 5.7 for MacOS"),(0,l.kt)("h2",{id:"install-docker-on-macos"},"Install Docker on MacOS"),(0,l.kt)("p",null,"Guide for installing Docker on MacOS\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"https://docs.docker.com/docker-for-mac/install/"),"."),(0,l.kt)("h2",{id:"install-mysql-57-image"},"Install MySQL 5.7 Image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# get latest MySQL 5.7 image\ndocker pull mysql/mysql-server:5.7\n\n# list docker images\ndocker images\n \n# install and start - root password: root\ndocker run -d --publish=3306:3306 --name=mysql57 -e MYSQL_ROOT_PASSWORD=root mysql/mysql-server:5.7\n \n# how to start / stop / restart\n# docker start mysql57\n# docker stop mysql57\n# docker restart mysql57\n \n# show images running\ndocker ps\n")),(0,l.kt)("h2",{id:"configure-mysql"},"Configure MySQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# open mysql command line\ndocker exec -it mysql57 mysql -uroot -p\n\n# configure user hybris\nmysql> CREATE USER 'hybris'@'%' IDENTIFIED BY 'hybris';\nmysql> CREATE USER 'hybris'@'127.0.0.1' IDENTIFIED BY 'hybris';\nmysql> CREATE USER 'hybris'@'localhost' IDENTIFIED BY 'hybris';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'%';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'127.0.0.1';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'localhost';\n\n# configure user root\nmysql> CREATE USER 'root'@'%' IDENTIFIED BY 'root';\nmysql> CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'root';\nmysql> CREATE USER 'root'@'localhost' IDENTIFIED BY 'root';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'%';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'127.0.0.1';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'localhost';\n\n# create database\nmysql> CREATE DATABASE mydb CHARACTER SET utf8 COLLATE utf8_bin;\n\nmysql> quit\n")))}u.isMDXComponent=!0}}]);