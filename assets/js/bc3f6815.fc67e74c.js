"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71599],{6953:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return f}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),i=n(31137),l=n(71871),u=["components"],s={keywords:["params","parameters","field definition","field type","optional","schema tool","structure","immutable"],description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",image:"/img/logo/WASP_logo_dark.png"},c="Function Parameters",m={unversionedId:"guide/schema/params",id:"guide/schema/params",isDocsHomePage:!1,title:"Function Parameters",description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",source:"@site/external/wasp/documentation/docs/guide/schema/params.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/params",permalink:"/wasp/guide/schema/params",tags:[],version:"current",frontMatter:{keywords:["params","parameters","field definition","field type","optional","schema tool","structure","immutable"],description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Limiting Access",permalink:"/wasp/guide/schema/access"},next:{title:"Function Results",permalink:"/wasp/guide/schema/results"}},p=[],d={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-parameters"},"Function Parameters"),(0,o.kt)("p",null,"The optional ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," subsection contains field definitions for each of the parameters\nthat a function takes. The layout of the field definitions is identical to that of\nthe ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/schema/state"},"state")," field definitions with one addition, the field type can be\nfollowed by a question mark which indicates that that parameter is optional."),(0,o.kt)("p",null,"The schema tool will automatically generate an immutable structure with member variables\nfor proxies to each parameter variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," map. It will also generate code to\ncheck the presence of each non-optional parameter, and it will also verify the parameter's\ndata type. This checking is done before the function is called. The user will be able to\nimmediately start using the parameter proxy through the structure that is passed to the\nfunction."),(0,o.kt)("p",null,"When this subsection is empty or completely omitted, no structure will be generated or\npassed to the function."),(0,o.kt)("p",null,"For example, here is the structure generated for the immutable params for the ",(0,o.kt)("inlineCode",{parentName:"p"},"member"),"\nfunction:"),(0,o.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ImmutableMemberParams struct {\n    id int32\n}\n\nfunc (s ImmutableMemberParams) Address() wasmlib.ScImmutableAddress {\n    return wasmlib.NewScImmutableAddress(s.id, idxMap[IdxParamAddress])\n}\n\nfunc (s ImmutableMemberParams) Factor() wasmlib.ScImmutableInt64 {\n    return wasmlib.NewScImmutableInt64(s.id, idxMap[IdxParamFactor])\n}\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct ImmutableMemberParams {\n    pub(crate) id: i32,\n}\n\nimpl ImmutableMemberParams {\n    pub fn address(&self) -> ScImmutableAddress {\n        ScImmutableAddress::new(self.id, idx_map(IDX_PARAM_ADDRESS))\n    }\n\n    pub fn factor(&self) -> ScImmutableInt64 {\n        ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_FACTOR))\n    }\n}\n")))),(0,o.kt)("p",null,"Note that the schema tool will also generate a mutable version of the structure, suitable\nfor providing the parameters when calling this smart contract function."),(0,o.kt)("p",null,"In the next section, we will look at the ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/schema/results"},(0,o.kt)("inlineCode",{parentName:"a"},"results")),"."))}f.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(74034),r=n(67294),o=n(5730),i=n(54179);var l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(29085),s=n(86010),c="tabItem_1uMI";function m(e){var t,n,a,o=e.lazy,i=e.block,m=e.defaultValue,p=e.values,d=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),w=y.tabGroupChoices,k=y.setTabGroupChoices,T=(0,r.useState)(g),x=T[0],I=T[1],O=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=w[d];null!=E&&E!==x&&b.some((function(e){return e.value===E}))&&I(E)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),a=b[n].value;a!==x&&(P(t),I(a),null!=d&&k(d,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":i},f)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:N,onClick:N},null!=n?n:t)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);