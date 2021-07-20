(self.webpackChunktao=self.webpackChunktao||[]).push([[498],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=r.createContext({}),f=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},c=function(n){var e=f(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,a=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=f(t),d=i,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(m,o(o({ref:e},c),{},{components:t})):r.createElement(m,o({ref:e},c))}));function d(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var f=2;f<a;f++)o[f]=t[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8966:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return c},default:function(){return u}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],l={sidebar_position:5},s="Perl One-Liners",f={unversionedId:"unix/perl-one-liners",id:"unix/perl-one-liners",isDocsHomePage:!1,title:"Perl One-Liners",description:"Useful Perl command line utilities.",source:"@site/docs/unix/perl-one-liners.md",sourceDirName:"unix",slug:"/unix/perl-one-liners",permalink:"/tao/docs/unix/perl-one-liners",editUrl:"https://github.com/johntday/tao/edit/master/docs/unix/perl-one-liners.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"sed",permalink:"/tao/docs/unix/sed"},next:{title:"jq",permalink:"/tao/docs/unix/jq"}},c=[{value:"Print Block of Text",id:"print-block-of-text",children:[{value:"Consistent Markers",id:"consistent-markers",children:[]},{value:"Not Consistent Markers",id:"not-consistent-markers",children:[]}]},{value:"Replace Text but not within Single or Double-Quotes",id:"replace-text-but-not-within-single-or-double-quotes",children:[]},{value:"Find and extract IP addresses",id:"find-and-extract-ip-addresses",children:[]},{value:"Find and Replace with Incrementing Value",id:"find-and-replace-with-incrementing-value",children:[]}],p={toc:c};function u(n){var e=n.components,t=(0,i.Z)(n,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"perl-one-liners"},"Perl One-Liners"),(0,a.kt)("p",null,"Useful Perl command line utilities."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"print-block-of-text"},"Print Block of Text"),(0,a.kt)("h3",{id:"consistent-markers"},"Consistent Markers"),(0,a.kt)("p",null,"Example where format is consistent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat uniform.txt\nmango\nicecream\n--start 1--\n1234\n6789\n**end 1**\nhow are you\nhave a nice day\n--start 2--\na\nb\nc\n**end 2**\npar,far,mar,tar\n")),(0,a.kt)("p",null,'Print lines between "start" and "end".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# perl -ne 'print if /start/../end/'\n$ perl -ne '$f=1 if /start/; print if $f; $f=0 if /end/' uniform.txt\n--start 1--\n1234\n6789\n**end 1**\n--start 2--\na\nb\nc\n**end 2**\n")),(0,a.kt)("p",null,"Other examples where the format is consistent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ perl -ne '$f=0 if /end/; print \"* $_\" if $f; $f=1 if /start/' uniform.txt\n* 1234\n* 6789\n* a\n* b\n* c\n\n$ perl -ne '$f=1 if /start/; $f=0 if /end/; print if $f' uniform.txt\n--start 1--\n1234\n6789\n--start 2--\na\nb\nc\n\n$ perl -ne 'print if $f; $f=1 if /start/; $f=0 if /end/' uniform.txt\n1234\n6789\n**end 1**\na\nb\nc\n**end 2**\n\n$ # same as: perl -ne 'print if !(/start/../end/)'\n$ perl -ne '$f=1 if /start/; print if !$f; $f=0 if /end/' uniform.txt\nmango\nicecream\nhow are you\nhave a nice day\npar,far,mar,tar\n\n$ perl -ne '$f=0 if /end/; print if !$f; $f=1 if /start/' uniform.txt\nmango\nicecream\n--start 1--\n**end 1**\nhow are you\nhave a nice day\n--start 2--\n**end 2**\npar,far,mar,tar\n\n$ perl -ne 'print if !$f; $f=1 if /start/; $f=0 if /end/' uniform.txt\nmango\nicecream\n--start 1--\nhow are you\nhave a nice day\n--start 2--\npar,far,mar,tar\n\n$ perl -ne '$f=1 if /start/; $f=0 if /end/; print if !$f' uniform.txt\nmango\nicecream\n**end 1**\nhow are you\nhave a nice day\n**end 2**\npar,far,mar,tar\n\n$ perl -ne '$f=1 if /start/; print if $f; exit if /end/' uniform.txt\n--start 1--\n1234\n6789\n**end 1**\n\n$ perl -ne 'exit if /end/; print if $f; $f=1 if /start/' uniform.txt\n1234\n6789\n\n$ # reverse input linewise, change the order of comparison, reverse again\n$ # can't be used if record separator has to be something other than newline\n$ tac uniform.txt | perl -ne '$f=1 if /end/; print if $f; exit if /start/' | tac\n--start 2--\na\nb\nc\n**end 2**\n\n$ # or, save the blocks in a buffer and print the last one alone\n$ perl -ne 'if(/start/){$f=1; $buf=$_; next}\n            $buf .= $_ if $f;\n            $f=0 if /end/;\n            END{print $buf}' uniform.txt\n--start 2--\na\nb\nc\n**end 2**\n\n$ seq 30 | perl -ne 'BEGIN{$n=2; $c=0} $c++ if /4/; if($c==$n){print; exit if /6/}'\n14\n15\n16\n\n$ seq 30 | perl -ne 'BEGIN{$n=1; $c=0} if(/4/){$f=1; $c++}\n                     print if $f && $c>$n; $f=0 if /6/'\n14\n15\n16\n24\n25\n26\n\n$ seq 30 | perl -ne 'BEGIN{$n=2; $c=0} if(/4/){$f=1; $c++}\n                     print if $f && $c!=$n; $f=0 if /6/'\n4\n5\n6\n24\n25\n26\n\n$ # additional condition here is '15' as one of the lines in the block\n$ seq 30 | perl -ne 'if(/4/){$f=1; $buf=$_; next}\n                     $buf .= $_ if $f;\n                     if(/6/){$f=0; print $buf if $buf=~/^15$/m}'\n14\n15\n16\n")),(0,a.kt)("h3",{id:"not-consistent-markers"},"Not Consistent Markers"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer")," when format is not consistent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ cat broken.txt\nqqqqqqqqqqqqqqqq\nerror 1\nhi\nerror 2\n1234\n6789\nstate 1\nbye\nstate 2\nerror 3\nxyz\nerror 4\nabcd\nstate 3\nzzzzzzzzzzzzzzzz\n\n$ perl -ne 'if(/error/){$f=1; $buf=$_; next}\n            $buf .= $_ if $f;\n            if(/state/){print $buf if $f; $f=0}' broken.txt\nerror 2\n1234\n6789\nstate 1\nerror 4\nabcd\nstate 3\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"replace-text-but-not-within-single-or-double-quotes"},"Replace Text but not within Single or Double-Quotes"),(0,a.kt)("p",null,"This example will replace ",(0,a.kt)("inlineCode",{parentName:"p"},";")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"#"),", but not within single or double-quotes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"perl -pe 's/(?:\\x27;\\x27|\";\")(*SKIP)(*F)|;/#/g'\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"find-and-extract-ip-addresses"},"Find and extract IP addresses"),(0,a.kt)("p",null,"Extract only IPv4 addresses"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"perl -MRegexp::Common=net -nE 'say $& while /$RE{net}{IPv4}/g'\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"find-and-replace-with-incrementing-value"},"Find and Replace with Incrementing Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'a | a | a | a | a | a | a | a' | perl -pe 's/ *\\| */$i++/ge'\n\na0a1a2a3a4a5a6a\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," *\\| *")," matches ",(0,a.kt)("inlineCode",{parentName:"li"},"|")," surrounded by zero-or-more spaces"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"e")," modifier to have Perl do in-replacement"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$i++")," will increment value - starting at zero")))}u.isMDXComponent=!0}}]);