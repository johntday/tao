(self.webpackChunktao=self.webpackChunktao||[]).push([[931],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(r),p=o,d=u["".concat(i,".").concat(p)]||u[p]||y[p]||l;return r?n.createElement(d,s(s({ref:t},m),{},{components:r})):n.createElement(d,s({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2596:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var n=r(2122),o=r(9756),l=(r(7294),r(3905)),s=["components"],a={sidebar_position:1},i="Install MySQL",c={unversionedId:"mysql/mysql-install",id:"mysql/mysql-install",isDocsHomePage:!1,title:"Install MySQL",description:"Install Docker MySQL 5.7 for MacOS",source:"@site/docs/mysql/mysql-install.md",sourceDirName:"mysql",slug:"/mysql/mysql-install",permalink:"/tao/docs/mysql/mysql-install",editUrl:"https://github.com/johntday/tao/edit/master/docs/mysql/mysql-install.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Homebrew",permalink:"/tao/docs/mac/homebrew"},next:{title:"RegEx Introduction",permalink:"/tao/docs/regex/regex"}},m=[{value:"Install Docker on MacOS",id:"install-docker-on-macos",children:[]},{value:"Install MySQL 5.7 Image",id:"install-mysql-57-image",children:[]},{value:"Configure MySQL",id:"configure-mysql",children:[]}],y={toc:m};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-mysql"},"Install MySQL"),(0,l.kt)("p",null,"Install Docker MySQL 5.7 for MacOS"),(0,l.kt)("h2",{id:"install-docker-on-macos"},"Install Docker on MacOS"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/install/"},"https://docs.docker.com/docker-for-mac/install/")),(0,l.kt)("h2",{id:"install-mysql-57-image"},"Install MySQL 5.7 Image"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# get latest MySQL 5.7 image\ndocker pull mysql/mysql-server:5.7\n\n# list docker images\ndocker images\n \n# install and start - root password: root\ndocker run -d --publish=3306:3306 --name=mysql57 -e MYSQL_ROOT_PASSWORD=root mysql/mysql-server:5.7\n \n# how to start / stop / restart\n# docker start mysql57\n# docker stop mysql57\n# docker restart mysql57\n \n# show images running\ndocker ps\n")),(0,l.kt)("h2",{id:"configure-mysql"},"Configure MySQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# open mysql command line\ndocker exec -it mysql57 mysql -uroot -p\n\n# configure user hybris\nmysql> CREATE USER 'hybris'@'%' IDENTIFIED BY 'hybris';\nmysql> CREATE USER 'hybris'@'127.0.0.1' IDENTIFIED BY 'hybris';\nmysql> CREATE USER 'hybris'@'localhost' IDENTIFIED BY 'hybris';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'%';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'127.0.0.1';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'hybris'@'localhost';\n\n# configure user root\nmysql> CREATE USER 'root'@'%' IDENTIFIED BY 'root';\nmysql> CREATE USER 'root'@'127.0.0.1' IDENTIFIED BY 'root';\nmysql> CREATE USER 'root'@'localhost' IDENTIFIED BY 'root';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'%';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'127.0.0.1';\nmysql> GRANT ALL PRIVILEGES ON * . * TO 'root'@'localhost';\n\n# create database\nmysql> CREATE DATABASE mydb CHARACTER SET utf8 COLLATE utf8_bin;\n\nmysql> quit\n")))}u.isMDXComponent=!0}}]);