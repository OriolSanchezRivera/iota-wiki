"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66315],{33806:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),o=a(31137),s=a(71871),l=["components"],u={keywords:["state","access","storage","key","data","value"],description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",image:"/img/logo/WASP_logo_dark.png"},c="Smart Contract State",d={unversionedId:"guide/schema/state",id:"guide/schema/state",isDocsHomePage:!1,title:"Smart Contract State",description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",source:"@site/external/wasp/documentation/docs/guide/schema/state.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/state",permalink:"/wasp/guide/schema/state",tags:[],version:"current",frontMatter:{keywords:["state","access","storage","key","data","value"],description:"The smart contract state storage on the host consists of a single key/value map, as long as you access the data in the same way that you used to store it, you will always get valid data back.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Type Definitions",permalink:"/wasp/guide/schema/typedefs"},next:{title:"Function Definitions",permalink:"/wasp/guide/schema/funcs"}},p=[],m={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"smart-contract-state"},"Smart Contract State"),(0,i.kt)("p",null,"The smart contract state storage on the host consists of a single key/value map. Both key\nand value are raw data bytes. As long as you access the data in the same way that you used\nto store it, you will always get valid data back. The schema tool will create a type-safe\naccess layer to make sure that data storage and retrieval always uses the expected data\ntype."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," section in the schema definition file contains a number of field definitions\nthat together define the variables that are stored in the state storage. Each field\ndefinition uses a JSON key/value pair to define the name and data type of the field.\nThe JSON key defines the field name. The JSON value (a string) defines the field's data\ntype, and can be followed by an optional comment that describes the field."),(0,i.kt)("p",null,"The schema tool will use this information to generate the specific code that accesses the\nstate variables in a type-safe way. Let's examine the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dividend"),"\nexample in more detail:"),(0,i.kt)(o.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "state": {\n    "memberList": "Address[] // array with all the recipients of this dividend",\n    "members": "map[Address]Int64 // map with all the recipient factors of this dividend",\n    "owner": "AgentID // owner of contract, the only one who can call \'member\' func",\n    "totalFactor": "Int64 // sum of all recipient factors"\n  }\n}\n'))),(0,i.kt)(s.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"state:\n  memberList: Address[] // array with all the recipients of this dividend\n  members: map[Address]Int64 // map with all the recipient factors of this dividend\n  owner: AgentID // owner of contract, the only one who can call 'member' func\n  totalFactor: Int64 // sum of all recipient factors\n")))),(0,i.kt)("p",null,"Let's start with the simplest state variables. ",(0,i.kt)("inlineCode",{parentName:"p"},"totalFactor")," is an Int64, and ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," is\nan AgentID. Both are predefined ",(0,i.kt)("a",{parentName:"p",href:"/wasp/guide/schema/types"},"WasmLib value types"),"."),(0,i.kt)("p",null,"Then you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"memberList")," variable. The empty brackets ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," indicate that this is an\narray. The brackets immediately follow the homogenous type of the elements in the array,\nwhich in this case is the predefined Address value type."),(0,i.kt)("p",null,"Finally, you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"members")," variable. The ",(0,i.kt)("inlineCode",{parentName:"p"},"map[]")," indicate that this is a map. Between\nthe brackets is the homogenous type of the keys, which in this case are of the predefined\nAddress type. The brackets are immediately followed by the homogenous type of the values\nin the map, which in this case are of the predefined Int64 type."),(0,i.kt)("p",null,"Here is part of the Rust code in ",(0,i.kt)("inlineCode",{parentName:"p"},"state.rs")," that the schema tool has generated. The\nMutableDividendState struct defines a type-safe interface to access each of the state\nvariables through mutable proxies:"),(0,i.kt)(o.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"    type MutableDividendState struct {\n        id int32\n    }\n\n    func (s MutableDividendState) MemberList() ArrayOfMutableAddress {\n        arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMemberList], wasmlib.TYPE_ARRAY|wasmlib.TYPE_ADDRESS)\n        return ArrayOfMutableAddress{objID: arrID}\n    }\n\n    func (s MutableDividendState) Members() MapAddressToMutableInt64 {\n        mapID := wasmlib.GetObjectID(s.id, idxMap[IdxStateMembers], wasmlib.TYPE_MAP)\n        return MapAddressToMutableInt64{objID: mapID}\n    }\n\n    func (s MutableDividendState) Owner() wasmlib.ScMutableAgentID {\n        return wasmlib.NewScMutableAgentID(s.id, idxMap[IdxStateOwner])\n    }\n\n    func (s MutableDividendState) TotalFactor() wasmlib.ScMutableInt64 {\n        return wasmlib.NewScMutableInt64(s.id, idxMap[IdxStateTotalFactor])\n    }\n"))),(0,i.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct MutableDividendState {\n    pub(crate) id: i32,\n}\n\nimpl MutableDividendState {\n    pub fn member_list(&self) -> ArrayOfMutableAddress {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBER_LIST), TYPE_ARRAY | TYPE_ADDRESS);\n        ArrayOfMutableAddress { obj_id: arr_id }\n    }\n\n    pub fn members(&self) -> MapAddressToMutableInt64 {\n        let map_id = get_object_id(self.id, idx_map(IDX_STATE_MEMBERS), TYPE_MAP);\n        MapAddressToMutableInt64 { obj_id: map_id }\n    }\n\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n\n    pub fn total_factor(&self) -> ScMutableInt64 {\n        ScMutableInt64::new(self.id, idx_map(IDX_STATE_TOTAL_FACTOR))\n    }\n}\n")))),(0,i.kt)("p",null,"As you can see, the schema tool has generated a proxy interface for the mutable ",(0,i.kt)("inlineCode",{parentName:"p"},"dividend"),"\nstate, called ",(0,i.kt)("inlineCode",{parentName:"p"},"MutableDividendState"),". It has a 1-to-1 correspondence to the ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\nsection in the schema definition file. Each member function accesses a type-safe proxy\nobject for the corresponding variable. In addition, the schema tool generates any\nnecessary intermediate map and array proxy types that force the usage of their respective\nhomogenous types. In the above example both ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayOfMutableAddress")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"MapAddressToMutableInt64")," are examples of such automatically generated proxy types.\nSee the full ",(0,i.kt)("inlineCode",{parentName:"p"},"state.rs")," for more details."),(0,i.kt)("p",null,"In the next section we will explore how the schema tool helps to simplify ",(0,i.kt)("a",{parentName:"p",href:"/wasp/guide/schema/funcs"},"function\ndefinitions"),"."))}f.isMDXComponent=!0},71871:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},31137:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(74034),r=a(67294),i=a(5730),o=a(54179);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(29085),u=a(86010),c="tabItem_1uMI";function d(e){var t,a,n,i=e.lazy,o=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=h[0])?void 0:n.props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),w=g.tabGroupChoices,k=g.setTabGroupChoices,T=(0,r.useState)(v),I=T[0],M=T[1],x=[],S=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var A=w[m];null!=A&&A!==I&&b.some((function(e){return e.value===A}))&&M(A)}var D=function(e){var t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==I&&(S(t),M(n),null!=m&&k(m,n))},N=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;a=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},f)},b.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":I===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:N,onFocus:D,onClick:D},null!=a?a:t)}))),i?(0,r.cloneElement)(h.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function p(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},54179:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);