"use strict";(self.webpackChunkmonday_documentation=self.webpackChunkmonday_documentation||[]).push([[836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,p=d["".concat(c,".").concat(m)]||d[m]||h[m]||i;return n?o.createElement(p,r(r({ref:t},u),{},{components:n})):o.createElement(p,r({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:7,hide_table_of_contents:!1},r="Frequently Asked Questions",s={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"How do I get all of an item's column data from the When an item is created trigger?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Limitations",permalink:"/docs/limitations"}},c={},l=[],u={toc:l},d="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"How do I get all of an item's column data from the `When an item is created` trigger?"),'The "When an item is created" trigger only returns the name and ID of the created item. This is because, at creation time, those are the only fields that are available. The rest are added after the item has already been created in monday.',(0,a.kt)("p",null,"Don't worry though, because it is possible to access the remaining columns a user adds to the item after the item is created by following these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'First add a monday trigger "When an item is created" to a flow. '),(0,a.kt)("li",{parentName:"ol"},'Then after that trigger, search for and add a "Delay" (Schedule) action. This action is provided by default in Power Automate and is not part of the monday connector. In the Delay action, add the amount of time you think it takes a user to fill out the remaining item information. For example, this could be 5 minutes. What this action does is that it adds a delay before it continues on to the next step. This is necessary to give a user enough time to fill out the item before we retrieve the item\'s data in the next step.'),(0,a.kt)("li",{parentName:"ol"},'Add the monday connector action "Get an item by ID". This action will be used to fetch the previously created item, which will contain all the supported item\'s columns. Click into the Item ID input, which will bring up the "Dynamic content" window. Select the "Item ID" field from the "When an item is created" section in the "Dynamic content" window. Then select the workspace and board that the item is created in (these should match what was selected in the "When an item is created" trigger). '),(0,a.kt)("li",{parentName:"ol"},'Add whichever action you want next. For example, you could add an action that adds the created items information to an Excel spreadsheet. All the supported created item\'s fields should now be available in your action via the "Dynamic content" window.')),(0,a.kt)("p",null,"Here is an example of what this might look like after you're done:\n",(0,a.kt)("img",{alt:"Example to get column data when an item is create",src:n(5688).Z,width:"622",height:"852"}))),(0,a.kt)("details",null,(0,a.kt)("summary",null,'I tried to create an object in monday, for example an item via the "Create an item" action, but I\'m not seeing it showing up in monday.com.'),'If you see an error in Power Automate when executing an action that creates an object, this can occur if your inputs for the monday action are invalid. For example, if you\'re trying to create an item that contains a checkbox field, the field will only allow the values "Yes" or "No". If you instead put text like "Checked" or "Unchecked", this will not work. For dropdown fields, you must select an item from the dropdown.'),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Fields in monday are blank even though I added a value for them in a monday action."),'This can occur if you didn\'t use the right format for the field. For example, if in a Date field you put the text "Yesterday", in monday it would show up as blank, since this is not a valid date. Dates need to be in the format YYYY-MM-DD (for example, 2005-12-20). The necessary format for each field is indicated by the placeholder text of the input.'),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Why are my date/time fields a few hours off?"),(0,a.kt)("p",null,"monday only accepts dates and times in the UTC timezone (also known as GMT or Greenwich Mean Time). Dates you add should be in the UTC (Coordinated Universal Time) timezone. "),(0,a.kt)("p",null,"For example, if you have the following date and time ",(0,a.kt)("inlineCode",{parentName:"p"},"2020-02-14 7:00")," in the EST timezone, it would be ",(0,a.kt)("inlineCode",{parentName:"p"},"2020-02-14 12:00")," in UTC. This is because Eastern Standard Time is 5 hours behind UTC."),(0,a.kt)("p",null,'Power Automate contains a "Convert time zone" action that might help with converting times you have into UTC.')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"I uninstalled the Microsoft Power Automate app in monday.com and reinstalled it again. Now it is no longer working and I'm unable to successfully execute actions/triggers in the monday connector. How do I fix the connector?"),(0,a.kt)("p",null,"When the Microsoft Power Automate app is uninstalled and reinstalled, the credentials are reset. To fix the connector, you need to re-authenticate your monday connector in Power Automate."),(0,a.kt)("p",null,'This can be done by going to Data -> Connections in the Power Automate sidebar. Then find the "monday" connection and click on it. At the top, click the "Switch account" button. This brings up a popup to re-authenticate your connection between monday.com and Power Automate. Click the Authorize button at the bottom of the popup. Your connection should now be restored and your actions/triggers should work again.')),(0,a.kt)("details",null,(0,a.kt)("summary",null,'I\'m seeing a "Not Authenticated" error when executing a monday action/trigger in Power Automate and my actions/triggers have stopped working. How can I fix this?'),(0,a.kt)("p",null,"This can occur when your connection between monday.com and Power Automate has been invalidated. One way this can occur is by uninstalling the Microsoft Power Automate app in monday.com. "),(0,a.kt)("p",null,'To fix this issue, go to Data -> Connections in the Power Automate sidebar. Then find the "monday" connection and click on it. At the top, click the "Switch account" button. This brings up a popup to re-authenticate your connection between monday.com and Power Automate. Click the Authorize button at the bottom of the popup. Your connection should now be restored and your actions/triggers should now work again.')),(0,a.kt)("details",null,(0,a.kt)("summary",null,'When executing a monday action/trigger in Power Automate, it does not work. I see the error "Your monday.com Power Automate app is over the execution limit. If you need more executions, please purchase a higher plan for the Microsoft Power Automate app in monday.com". How do I fix this?'),(0,a.kt)("p",null,"This occurs when you've used all the executions your Microsoft Power Automate subscription plan in monday.com currently supports. When this happens, actions/triggers will fail to execute until the next month, unless a higher level subscription is purchased. "),(0,a.kt)("p",null,"If you need more executions, you can purchase a higher level subscription to the Microsoft Power Automate app in monday.com. Once you've done so, your actions/triggers should start working again within 5 minutes.")))}h.isMDXComponent=!0},5688:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/example-delay-create-item-1a6c4ff58fe9e125ab3211e5cfc80c10.png"}}]);