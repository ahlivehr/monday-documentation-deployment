"use strict";(self.webpackChunkmonday_documentation=self.webpackChunkmonday_documentation||[]).push([[3671],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),y=p(n),s=a,g=y["".concat(u,".").concat(s)]||y[s]||c[s]||l;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(8168),a=(n(6540),n(5680));const l={sidebar_position:7,hide_table_of_contents:!0},i="Limitations",o={unversionedId:"limitations",id:"limitations",title:"Limitations",description:"Currently, only the following column types can be read or created in actions and triggers:",source:"@site/docs/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/docs/limitations",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"What's a monday ID?",permalink:"/docs/monday-ids"},next:{title:"Frequently Asked Questions",permalink:"/docs/faq"}},u={},p=[],m={toc:p},y="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"limitations"},"Limitations"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Currently, only the following column types can be read or created in actions and triggers:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Boolean"),(0,a.yg)("li",{parentName:"ul"},"Connect Boards (read only)"),(0,a.yg)("li",{parentName:"ul"},"Date"),(0,a.yg)("li",{parentName:"ul"},"Dropdown"),(0,a.yg)("li",{parentName:"ul"},"Email"),(0,a.yg)("li",{parentName:"ul"},"Files (assets)"),(0,a.yg)("li",{parentName:"ul"},"Hour"),(0,a.yg)("li",{parentName:"ul"},"Label"),(0,a.yg)("li",{parentName:"ul"},"Link"),(0,a.yg)("li",{parentName:"ul"},"Location"),(0,a.yg)("li",{parentName:"ul"},"Long Text"),(0,a.yg)("li",{parentName:"ul"},"Mirror (read only)"),(0,a.yg)("li",{parentName:"ul"},"Numeric"),(0,a.yg)("li",{parentName:"ul"},"People"),(0,a.yg)("li",{parentName:"ul"},"Phone"),(0,a.yg)("li",{parentName:"ul"},"Priority"),(0,a.yg)("li",{parentName:"ul"},"Rating"),(0,a.yg)("li",{parentName:"ul"},"Status"),(0,a.yg)("li",{parentName:"ul"},"Tag"),(0,a.yg)("li",{parentName:"ul"},"Text"),(0,a.yg)("li",{parentName:"ul"},"Timeline"),(0,a.yg)("li",{parentName:"ul"},"Timezone"),(0,a.yg)("li",{parentName:"ul"},"Week"),(0,a.yg)("li",{parentName:"ul"},"World Clock")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"The following column types are not supported:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Auto number"),(0,a.yg)("li",{parentName:"ul"},"Button"),(0,a.yg)("li",{parentName:"ul"},"Color Picker"),(0,a.yg)("li",{parentName:"ul"},"Country"),(0,a.yg)("li",{parentName:"ul"},"Creation Log"),(0,a.yg)("li",{parentName:"ul"},"Dependency"),(0,a.yg)("li",{parentName:"ul"},"Formula"),(0,a.yg)("li",{parentName:"ul"},"Last Updated At"),(0,a.yg)("li",{parentName:"ul"},"Person (deprecated)"),(0,a.yg)("li",{parentName:"ul"},"Progress Tracking"),(0,a.yg)("li",{parentName:"ul"},"Team (deprecated)"),(0,a.yg)("li",{parentName:"ul"},"Time Tracking"),(0,a.yg)("li",{parentName:"ul"},"Vote")))}c.isMDXComponent=!0}}]);