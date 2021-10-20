"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[28230],{54187:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a=n(22013),c=["components"],l={title:"Welcome",description:"My document description from SEO"},u=void 0,s={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"Welcome",description:"My document description from SEO",source:"@site/internal/build/welcome.mdx",sourceDirName:".",slug:"/welcome",permalink:"/build/welcome",editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/build/welcome.mdx",tags:[],version:"current",lastUpdatedAt:1634560341,formattedLastUpdatedAt:"10/18/2021",frontMatter:{title:"Welcome",description:"My document description from SEO"},sidebar:"build",next:{title:"IOTA 1.5",permalink:"/build/networks/iota-1.5"}},d=[{value:"Choose a network",id:"choose-a-network",children:[],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the IOTA documentation. This is the entry point for developers. With IOTA 1.5, IOTA is becoming production ready, and there is a clear path towards full decentralization with IOTA 2.0.\nPartners, academia, and developers can now start to build on the Tangle and plan for the future. There will be no significant changes on the way to IOTA 2.0, and therefore most of the code base from IOTA 1.5 including tools, libraries and APIs can be reused. Projects built on today\u2019s codebase will not require major refactoring later on.\nIf you want to start developing with IOTA Smart Contracts Protocol (ISCP) you need to use the 2.0 network."),(0,i.kt)("h2",{id:"choose-a-network"},"Choose a network"),(0,i.kt)("div",{className:"row"},(0,i.kt)(a.Z,{title:"IOTA 1.5",link:"networks/iota-1.5",description:"Current Mainnet",icon:"\ue907",mdxType:"Card"}),(0,i.kt)(a.Z,{title:"IOTA 2.0",link:"networks/iota-2.0",description:"Future of IOTA",icon:"\ue906",mdxType:"Card"})))}f.isMDXComponent=!0},22013:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),o="icon_WlpA",i=n(86010),a=n(5977),c=n(45697),l=n.n(c);function u(e){var t=e.title,n=e.link,c=e.description,l=e.icon,u=(0,a.k6)();return r.createElement("div",{className:"card card-background card--pointer margin-horiz--md margin-vert--md shadow--md",onClick:function(e){e.preventDefault(),u.push(n)}},r.createElement("div",{className:"card__header"},r.createElement("h3",null,t)),r.createElement("div",{className:(0,i.Z)(o,"card__body")},l),r.createElement("div",{className:"card__footer"},r.createElement("p",null,c)))}u.propTypes={title:l().string,icon:l().string,link:l().string,description:l().string}},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);