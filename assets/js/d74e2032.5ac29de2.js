(self.webpackChunktao=self.webpackChunktao||[]).push([[124],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=p(n),u=r,g=N["".concat(o,".").concat(u)]||N[u]||k[u]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},7612:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return N}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],d={sidebar_position:2},o="Regex Perl",p={unversionedId:"regex/regex-perl",id:"regex/regex-perl",isDocsHomePage:!1,title:"Regex Perl",description:"Cheat sheet for PCRE2.",source:"@site/docs/regex/regex-perl.md",sourceDirName:"regex",slug:"/regex/regex-perl",permalink:"/tao/docs/regex/regex-perl",editUrl:"https://github.com/johntday/tao/edit/master/docs/regex/regex-perl.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"RegEx Introduction",permalink:"/tao/docs/regex/regex"},next:{title:"grep",permalink:"/tao/docs/unix/grep"}},m=[{value:"Tokens",id:"tokens",children:[]},{value:"Quantifiers",id:"quantifiers",children:[]},{value:"Anchors",id:"anchors",children:[]},{value:"Groups",id:"groups",children:[]}],k={toc:m};function N(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"regex-perl"},"Regex Perl"),(0,l.kt)("p",null,"Cheat sheet for PCRE2."),(0,l.kt)("h2",{id:"tokens"},"Tokens"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\n")),(0,l.kt)("td",{parentName:"tr",align:null},"Newline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\r")),(0,l.kt)("td",{parentName:"tr",align:null},"Carriage return")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\t")),(0,l.kt)("td",{parentName:"tr",align:null},"Tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[abc]")),(0,l.kt)("td",{parentName:"tr",align:null},"Char of: a, b, or c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[^abc]")),(0,l.kt)("td",{parentName:"tr",align:null},"Char except: a, b, or c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[a-z]")),(0,l.kt)("td",{parentName:"tr",align:null},"Char in range: a-z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[^a-z]")),(0,l.kt)("td",{parentName:"tr",align:null},"Char not in range: a-z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[a-zA-Z]")),(0,l.kt)("td",{parentName:"tr",align:null},"Char in range: a-z or A-Z")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".")),(0,l.kt)("td",{parentName:"tr",align:null},"Any char")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"a","|","b")),(0,l.kt)("td",{parentName:"tr",align:null},"Char a or b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\s")),(0,l.kt)("td",{parentName:"tr",align:null},"Any whitespace char - space, tab, newline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\S")),(0,l.kt)("td",{parentName:"tr",align:null},"Any non-whitespace char")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\d")),(0,l.kt)("td",{parentName:"tr",align:null},"Any digit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\D")),(0,l.kt)("td",{parentName:"tr",align:null},"Any non-digit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\w")),(0,l.kt)("td",{parentName:"tr",align:null},"Any word char - alphanumeric or underscore")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\W")),(0,l.kt)("td",{parentName:"tr",align:null},"Any non-word char")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\N")),(0,l.kt)("td",{parentName:"tr",align:null},"Any char but newline")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\xHH")),(0,l.kt)("td",{parentName:"tr",align:null},"hex char code ",(0,l.kt)("em",{parentName:"td"},"HH"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\xHHHH")),(0,l.kt)("td",{parentName:"tr",align:null},"hex char code ",(0,l.kt)("em",{parentName:"td"},"HHHH"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\0")),(0,l.kt)("td",{parentName:"tr",align:null},"Null char")))),(0,l.kt)("h2",{id:"quantifiers"},"Quantifiers"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a*")),(0,l.kt)("td",{parentName:"tr",align:null},"0, 1, or more ",(0,l.kt)("em",{parentName:"td"},"a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a?")),(0,l.kt)("td",{parentName:"tr",align:null},"0 or 1 ",(0,l.kt)("em",{parentName:"td"},"a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a+")),(0,l.kt)("td",{parentName:"tr",align:null},"1 or more ",(0,l.kt)("em",{parentName:"td"},"a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a{3}")),(0,l.kt)("td",{parentName:"tr",align:null},"Exactly 3 ",(0,l.kt)("em",{parentName:"td"},"a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a{3,}")),(0,l.kt)("td",{parentName:"tr",align:null},"3 or more ",(0,l.kt)("em",{parentName:"td"},"a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a{3,5}")),(0,l.kt)("td",{parentName:"tr",align:null},"Between 3 and 6 ",(0,l.kt)("em",{parentName:"td"},"a"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a*")),(0,l.kt)("td",{parentName:"tr",align:null},"Greedy quantifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a*?")),(0,l.kt)("td",{parentName:"tr",align:null},"Lazy quantifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a*+")),(0,l.kt)("td",{parentName:"tr",align:null},"Possessive quantifier")))),(0,l.kt)("h2",{id:"anchors"},"Anchors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"^")),(0,l.kt)("td",{parentName:"tr",align:null},"Start of string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$")),(0,l.kt)("td",{parentName:"tr",align:null},"End of string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\A")),(0,l.kt)("td",{parentName:"tr",align:null},"Start of string - not affected by multiline mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\Z")),(0,l.kt)("td",{parentName:"tr",align:null},"End of string - not affected by multiline mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\b")),(0,l.kt)("td",{parentName:"tr",align:null},"Word boundary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\B")),(0,l.kt)("td",{parentName:"tr",align:null},"Non-word boundary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\G")),(0,l.kt)("td",{parentName:"tr",align:null},"Start of match")))),(0,l.kt)("h2",{id:"groups"},"Groups"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(?:...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Match everything enclosed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Capture everything enclosed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(?#...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Comment group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(?'name'...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Named capture group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"(?(1)yes","|","no)")),(0,l.kt)("td",{parentName:"tr",align:null},"Conditional statement")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"(?(?=...)yes","|","no)")),(0,l.kt)("td",{parentName:"tr",align:null},"Lookahead conditional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"(?(?<=...)yes","|","no)")),(0,l.kt)("td",{parentName:"tr",align:null},"Lookbehind conditional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(?=...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Positive lookahead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(?!...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Negative lookahead")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(?<=...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Positive lookbehind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(?<!...)")),(0,l.kt)("td",{parentName:"tr",align:null},"Negative lookbehind")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(*ACCEPT)")),(0,l.kt)("td",{parentName:"tr",align:null},"Control verb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(*COMMIT)")),(0,l.kt)("td",{parentName:"tr",align:null},"Control verb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(*PRUNE)")),(0,l.kt)("td",{parentName:"tr",align:null},"Control verb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(*SKIP)")),(0,l.kt)("td",{parentName:"tr",align:null},"Control verb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(*THEN)")),(0,l.kt)("td",{parentName:"tr",align:null},"Control verb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(*UTF8)")),(0,l.kt)("td",{parentName:"tr",align:null},"Control verb")))))}N.isMDXComponent=!0}}]);