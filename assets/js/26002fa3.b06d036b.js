(self.webpackChunktao=self.webpackChunktao||[]).push([[5106],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=l(t),f=o,m=g["".concat(c,".").concat(f)]||g[f]||s[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},606:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],p={sidebar_position:2},c="GNU grep",l={unversionedId:"unix/ggrep",id:"unix/ggrep",isDocsHomePage:!1,title:"GNU grep",description:"GNU grep installed on MacOS.",source:"@site/docs/unix/ggrep.md",sourceDirName:"unix",slug:"/unix/ggrep",permalink:"/tao/docs/unix/ggrep",editUrl:"https://github.com/johntday/tao/edit/master/docs/unix/ggrep.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"grep",permalink:"/tao/docs/unix/grep"},next:{title:"ripgrep",permalink:"/tao/docs/unix/ripgrep"}},u=[{value:"Installing GNU grep on MacOS",id:"installing-gnu-grep-on-macos",children:[]},{value:"References",id:"references",children:[]}],s={toc:u};function g(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gnu-grep"},"GNU grep"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"GNU grep")," installed on MacOS.\nOne reason to install ",(0,a.kt)("em",{parentName:"p"},"GNU grep")," and use instead of native MacOS ",(0,a.kt)("em",{parentName:"p"},"grep"),",\nis that it supports Perl PCRE2.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/tao/docs/unix/ripgrep"},"ripgrep")," for a good replacement of ",(0,a.kt)("em",{parentName:"p"},"grep"),"."),(0,a.kt)("h2",{id:"installing-gnu-grep-on-macos"},"Installing GNU grep on MacOS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install ggrep\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/tao/docs/mac/homebrew"},"homebrew"),"."),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"man ggrep"))))}g.isMDXComponent=!0}}]);