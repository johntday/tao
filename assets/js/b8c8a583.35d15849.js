(self.webpackChunktao=self.webpackChunktao||[]).push([[889],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?i.createElement(f,o(o({ref:t},m),{},{components:n})):i.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8136:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},c="Search Git History",s={unversionedId:"git/git-log",id:"git/git-log",isDocsHomePage:!1,title:"Search Git History",description:"Search and display commits from git history.",source:"@site/docs/git/git-log.md",sourceDirName:"git",slug:"/git/git-log",permalink:"/tao/docs/git/git-log",editUrl:"https://github.com/johntday/tao/edit/master/docs/git/git-log.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using DocSearch with Docusaurus",permalink:"/tao/docs/docsearch/intro"},next:{title:"Mermaid - Class Diagrams",permalink:"/tao/docs/mermaid/mermaid-classDiagram"}},m=[{value:"Display last 2-weeks of commits",id:"display-last-2-weeks-of-commits",children:[]},{value:"Find commits by author",id:"find-commits-by-author",children:[]},{value:"Find commits between two dates",id:"find-commits-between-two-dates",children:[]},{value:"Find commits by comment",id:"find-commits-by-comment",children:[]},{value:"Find commits by file",id:"find-commits-by-file",children:[]},{value:"Find last commit that changed file",id:"find-last-commit-that-changed-file",children:[]},{value:"Find commits that changed lines",id:"find-commits-that-changed-lines",children:[]},{value:"Find all branches containing commit",id:"find-all-branches-containing-commit",children:[]},{value:"Find all files changed in last 10 commits",id:"find-all-files-changed-in-last-10-commits",children:[]},{value:"Find all files changed between 2 commits",id:"find-all-files-changed-between-2-commits",children:[]},{value:"References",id:"references",children:[]}],d={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"search-git-history"},"Search Git History"),(0,r.kt)("p",null,"Search and display commits from ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," history.\nAdditional examples and options may be found here ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/"},"https://git-scm.com/docs/")),(0,r.kt)("h2",{id:"display-last-2-weeks-of-commits"},"Display last 2-weeks of commits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git log --since=\"2 week ago\" --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative\n")),(0,r.kt)("p",null,"This uses a very nice color format.\nOther useful options with this are"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--no-merges")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--merges")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--first-parent"))),(0,r.kt)("h2",{id:"find-commits-by-author"},"Find commits by author"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# find commits by author for 'John' or 'Mary'\ngit log --author=\"John\\|Mary\"\n")),(0,r.kt)("h2",{id:"find-commits-between-two-dates"},"Find commits between two dates"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git log --after "2014-02-01" --before "2014-02-02"\n')),(0,r.kt)("h2",{id:"find-commits-by-comment"},"Find commits by comment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git log -S\"datahub\"\n\n# or using grep\ngit log ... | grep -i 'datahub'\n")),(0,r.kt)("h2",{id:"find-commits-by-file"},"Find commits by file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# find commits with foo.py\ngit log -- foo.py\n\n# find commits with foo.py or *.properties\ngit log -- foo.py *.properties\n\n# find commits with README.md\ngit log --name-only --pretty=format:%H --follow README.md\n")),(0,r.kt)("h2",{id:"find-last-commit-that-changed-file"},"Find last commit that changed file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git log -1 -- README.md\n")),(0,r.kt)("h2",{id:"find-commits-that-changed-lines"},"Find commits that changed lines"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# commits that changed line 13\ngit log -L13,13:README.md\n")),(0,r.kt)("h2",{id:"find-all-branches-containing-commit"},"Find all branches containing commit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -a --contains db2ef19d89\n")),(0,r.kt)("h2",{id:"find-all-files-changed-in-last-10-commits"},"Find all files changed in last 10 commits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git diff --name-only HEAD HEAD~10\n")),(0,r.kt)("h2",{id:"find-all-files-changed-between-2-commits"},"Find all files changed between 2 commits"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git diff --name-only SHA1 SHA2\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/"},"https://git-scm.com/docs/"))))}p.isMDXComponent=!0}}]);