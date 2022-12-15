"use strict";(self.webpackChunknestjs_i18n=self.webpackChunknestjs_i18n||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},o="ejs",s={unversionedId:"guides/view_engines/ejs",id:"guides/view_engines/ejs",title:"ejs",description:"To enable ejs support make use of the viewEngine option inside your I18nModule.",source:"@site/docs/guides/view_engines/ejs.md",sourceDirName:"guides/view_engines",slug:"/guides/view_engines/ejs",permalink:"/guides/view_engines/ejs",draft:!1,editUrl:"https://github.com/toonvanstrijp/nestjs-i18n/tree/main/docs/guides/view_engines/ejs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Pug",permalink:"/guides/view_engines/pug"},next:{title:"Loaders",permalink:"/concepts/loader"}},l={},p=[{value:"Example usage",id:"example-usage",level:2},{value:"Result",id:"result",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ejs"},"ejs"),(0,a.kt)("p",null,"To enable ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mde/ejs"},(0,a.kt)("strong",{parentName:"a"},"ejs"))," support make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"viewEngine")," option inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"I18nModule"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/app.module.ts"',title:'"src/app.module.ts"'},"  I18nModule.forRoot({\n    fallbackLanguage: 'en',\n    loaderOptions: {\n      path: path.join(__dirname, '/i18n/'),\n    },\n+   viewEngine: 'ejs'\n  })\n")),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("p",null,"Let's try to do some translations with pug templates."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/i18n/en/test.json"',title:'"src/i18n/en/test.json"'},'{\n  "HELLO": "Hello {username}",\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/app.controller.ts"',title:'"src/app.controller.ts"'},"\n@Controller('Test')\nexport class TestController {\n  @Get('/')\n  @Render('page')\n  index(): any {\n    return { username: \"Toon\" };\n  }\n}\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hbs",metastring:'title="src/view/page.hbs"',title:'"src/view/page.hbs"'},"<h1><%= t('test.HELLO', i18nLang, { username }) -%></h1>\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The second parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nLang")," is the current language. There is no way of passing this to ",(0,a.kt)("inlineCode",{parentName:"p"},"nestjs-i18n")," automatically. So you have to pass it manually.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The third argument is optional. This is only needed if you want to pass along arugments to your translations.")),(0,a.kt)("h3",{id:"result"},"Result"),(0,a.kt)("code",null,(0,a.kt)("h1",null,"Hello Toon")))}c.isMDXComponent=!0}}]);