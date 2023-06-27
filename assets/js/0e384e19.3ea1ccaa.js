"use strict";(self.webpackChunkmonday_documentation=self.webpackChunkmonday_documentation||[]).push([[671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>w});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(o),m=a,w=s["".concat(c,".").concat(m)]||s[m]||h[m]||i;return o?n.createElement(w,r(r({ref:t},u),{},{components:o})):n.createElement(w,r({ref:t},u))}));function w(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(7462),a=(o(7294),o(3905));const i={sidebar_position:1,hide_table_of_contents:!1},r="Getting Started",l={unversionedId:"intro",id:"intro",title:"Getting Started",description:'Follow this guide to integrate Power Automate with monday.com. In this guide, we create a new Power Automate flow using the "When an item is created" monday trigger, then save the item name to an Excel spreadsheet.',source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!1},sidebar:"tutorialSidebar",next:{title:"Creating an Action",permalink:"/docs/action-creation"}},c={},d=[{value:"Create a new Power Automate flow using the monday.com connector",id:"create-a-new-power-automate-flow-using-the-mondaycom-connector",level:2},{value:"1. In Power Automate, click on &quot;My flows&quot; in the left sidebar",id:"1-in-power-automate-click-on-my-flows-in-the-left-sidebar",level:3},{value:"2. Click the &quot;New flow&quot; button",id:"2-click-the-new-flow-button",level:3},{value:"3. Select &quot;Automated cloud flow&quot;",id:"3-select-automated-cloud-flow",level:3},{value:"4. Add a name for your flow. Then search for &quot;monday&quot; in the search box.",id:"4-add-a-name-for-your-flow-then-search-for-monday-in-the-search-box",level:3},{value:"5. Select the trigger &quot;When an item is created&quot;, then click the &quot;Create&quot; button.",id:"5-select-the-trigger-when-an-item-is-created-then-click-the-create-button",level:3},{value:"6. Click the &quot;Sign in&quot; button to authenticate Power Automate with monday.com",id:"6-click-the-sign-in-button-to-authenticate-power-automate-with-mondaycom",level:3},{value:"7. A new small window will pop up. Scroll down and click the &quot;Authorize&quot; button. This allows Power Automate to access and create data in monday.com.",id:"7-a-new-small-window-will-pop-up-scroll-down-and-click-the-authorize-button-this-allows-power-automate-to-access-and-create-data-in-mondaycom",level:3},{value:"8. Select your workspace and board. When an item is created on this board, it will run the trigger.",id:"8-select-your-workspace-and-board-when-an-item-is-created-on-this-board-it-will-run-the-trigger",level:3},{value:"9. Add whichever steps you would like to execute when the trigger is triggered, using the data from your monday.com trigger.",id:"9-add-whichever-steps-you-would-like-to-execute-when-the-trigger-is-triggered-using-the-data-from-your-mondaycom-trigger",level:3},{value:"10. Finally, save the flow by clicking the Save button.",id:"10-finally-save-the-flow-by-clicking-the-save-button",level:3}],u={toc:d},s="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,'Follow this guide to integrate Power Automate with monday.com. In this guide, we create a new Power Automate flow using the "When an item is created" monday trigger, then save the item name to an Excel spreadsheet.'),(0,a.kt)("h2",{id:"create-a-new-power-automate-flow-using-the-mondaycom-connector"},"Create a new Power Automate flow using the monday.com connector"),(0,a.kt)("p",null,"To get started, we will create a new Power Automate flow based on trigger. We'll authenticate the connector with monday.com. Finally, we'll use the output of the trigger in a Power Automate action."),(0,a.kt)("h3",{id:"1-in-power-automate-click-on-my-flows-in-the-left-sidebar"},'1. In Power Automate, click on "My flows" in the left sidebar'),(0,a.kt)("div",{style:{maxWidth:"250px"}},(0,a.kt)("img",{src:"/img/my-flows.png",alt:"My flows button"})),(0,a.kt)("h3",{id:"2-click-the-new-flow-button"},'2. Click the "New flow" button'),(0,a.kt)("div",{style:{maxWidth:"120px"}},(0,a.kt)("img",{src:"/img/new-flow.png",alt:"New flow button"})),(0,a.kt)("h3",{id:"3-select-automated-cloud-flow"},'3. Select "Automated cloud flow"'),(0,a.kt)("div",{style:{maxWidth:"300px"}},(0,a.kt)("img",{src:"/img/automated-cloud-flow.png",alt:"Automated cloud flow button"})),(0,a.kt)("h3",{id:"4-add-a-name-for-your-flow-then-search-for-monday-in-the-search-box"},'4. Add a name for your flow. Then search for "monday" in the search box.'),(0,a.kt)("div",{style:{maxWidth:"800px"}},(0,a.kt)("img",{src:"/img/create-automated-flow.png",alt:"Create automated flow"})),(0,a.kt)("h3",{id:"5-select-the-trigger-when-an-item-is-created-then-click-the-create-button"},'5. Select the trigger "When an item is created", then click the "Create" button.'),(0,a.kt)("div",{style:{maxWidth:"800px"}},(0,a.kt)("img",{src:"/img/select-when-an-item-created.png",alt:"Select When an item is created"})),(0,a.kt)("h3",{id:"6-click-the-sign-in-button-to-authenticate-power-automate-with-mondaycom"},'6. Click the "Sign in" button to authenticate Power Automate with monday.com'),(0,a.kt)("div",{style:{maxWidth:"600px"}},(0,a.kt)("img",{src:"/img/sign-in.png",alt:"Sign in"})),(0,a.kt)("h3",{id:"7-a-new-small-window-will-pop-up-scroll-down-and-click-the-authorize-button-this-allows-power-automate-to-access-and-create-data-in-mondaycom"},'7. A new small window will pop up. Scroll down and click the "Authorize" button. This allows Power Automate to access and create data in monday.com.'),(0,a.kt)("div",{style:{maxWidth:"400px"}},(0,a.kt)("img",{src:"/img/authorize.png",alt:"Authorize"})),(0,a.kt)("h3",{id:"8-select-your-workspace-and-board-when-an-item-is-created-on-this-board-it-will-run-the-trigger"},"8. Select your workspace and board. When an item is created on this board, it will run the trigger."),(0,a.kt)("div",{style:{maxWidth:"700px"}},(0,a.kt)("img",{src:"/img/when-an-item-created-trigger.png",alt:"Select workspace and board"})),(0,a.kt)("h3",{id:"9-add-whichever-steps-you-would-like-to-execute-when-the-trigger-is-triggered-using-the-data-from-your-mondaycom-trigger"},"9. Add whichever steps you would like to execute when the trigger is triggered, using the data from your monday.com trigger."),(0,a.kt)("p",null,"For example, here we've selected Excel's \"Add a row into a table\" action to add the item's data into an Excel spreadsheet."),(0,a.kt)("p",null,'Click inside the Name field, which will then automatically open the "Dynamic content" window. In this window, you can select the fields that are returned by the trigger. In this case, we\'re selecting the Item Name field. '),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'Note: Other monday triggers, such as the "When a column changes" trigger, contain a lot more dynamic content (such as the columns for the item).')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Select a Power Automate field",src:o(5379).Z,width:"2095",height:"1552"})),(0,a.kt)("h3",{id:"10-finally-save-the-flow-by-clicking-the-save-button"},"10. Finally, save the flow by clicking the Save button."),(0,a.kt)("p",null,"When you create an item in monday.com, it will now execute your Power Automate flow."),(0,a.kt)("div",{style:{maxWidth:"700px"}},(0,a.kt)("img",{src:"/img/excel-example.png",alt:"Excel action example"})))}h.isMDXComponent=!0},5379:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/field-selection-a5431cec34723239ef22bb3c239b1905.png"}}]);