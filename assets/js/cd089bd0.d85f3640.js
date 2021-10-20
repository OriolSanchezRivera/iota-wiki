"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49944],{84689:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return h},default:function(){return f}});var a=n(74034),r=n(79973),o=(n(67294),n(3905)),s=n(31137),i=n(71871),c=["components"],l={keywords:["balances","color","smart contract function","address","members","incoming","tokens","incoming"],description:"There are two methods in the ISCP function context that deal with token balances. The balances() method can be used to determine the current total balance per token color. The incoming() method can be used to determine the amounts of incoming tokens per token color that were sent with the request to call the smart contract function.",image:"/img/logo/WASP_logo_dark.png"},u="Token Transfers",d={unversionedId:"guide/schema/transfers",id:"guide/schema/transfers",isDocsHomePage:!1,title:"Token Transfers",description:"There are two methods in the ISCP function context that deal with token balances. The balances() method can be used to determine the current total balance per token color. The incoming() method can be used to determine the amounts of incoming tokens per token color that were sent with the request to call the smart contract function.",source:"@site/external/wasp/documentation/docs/guide/schema/transfers.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/transfers",permalink:"/wasp/guide/schema/transfers",tags:[],version:"current",frontMatter:{keywords:["balances","color","smart contract function","address","members","incoming","tokens","incoming"],description:"There are two methods in the ISCP function context that deal with token balances. The balances() method can be used to determine the current total balance per token color. The incoming() method can be used to determine the amounts of incoming tokens per token color that were sent with the request to call the smart contract function.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contract Initialization",permalink:"/wasp/guide/schema/init"},next:{title:"Function Descriptors",permalink:"/wasp/guide/schema/funcdesc"}},h=[],m={toc:h};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-transfers"},"Token Transfers"),(0,o.kt)("p",null,"There are two methods in the ISCP function context that deal with token balances. The\nfirst one is the ",(0,o.kt)("inlineCode",{parentName:"p"},"balances()")," method, which can be used to determine the current total\nbalance per token color that is governed by the smart contract. The second one is\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"incoming()")," method, which can be used to determine the amounts of incoming tokens per\ntoken color that were sent with the request to call the smart contract function."),(0,o.kt)("p",null,"Both methods provide access to zero or more balances of tokens, each for a different token\ncolor, through a special ",(0,o.kt)("inlineCode",{parentName:"p"},"ScBalances")," map proxy. Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"incoming()")," balances are\nprovided to the smart contract function as if they have already been deposited in the\nsmart contract's account. But, if any error occurs which causes the function to panic, these\nincoming() tokens will be returned to where they came from, and it will be as if they were\nnever sent to the smart contract."),(0,o.kt)("p",null,"There is also a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_to_address()")," method in the ISCP function context that can\ntransfer tokens from the smart contract account to any Tangle address. The tokens to be\ntransferred are provided to the method through a special ",(0,o.kt)("inlineCode",{parentName:"p"},"ScTransfers")," map proxy. We will\nbe using the transfer_to_address() method in the dividend example to disperse the incoming\ntokens to the member addresses."),(0,o.kt)("p",null,"The idea behind the dividend smart contract is that once we have set up the list of\nmembers, consisting of address/factor pairs, and knowing the total sum of the factors, we\ncan automatically pay out a dividend to each of the members in the list according to the\nfactors involved. Whatever amount of tokens gets sent to the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function will be\ndivided over the members in proportion based on their respective factors. For example, you\ncould set it up so that address A has a factor of 50, B has 30, and C has 20, for a total of 100\nto divide. Then whenever an amount of tokens gets sent to the 'divide' function, address A\nwill receive 50/100th, address B will receive 30/100th, and address C will receive\n20/100th of that amount."),(0,o.kt)("p",null,"Here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"divide")," function:"),(0,o.kt)(s.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the addresses in the member list according to the dispersion\n// factors associated with these addresses.\n// Anyone can send iota tokens to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining iotas in its own account. They will be added\n// to any next round of tokens received prior to calculation of the new\n// dividend amounts.\nfunc funcDivide(ctx wasmlib.ScFuncContext, f *DivideContext) {\n    // Create an ScBalances map proxy to the account balances for this\n    // smart contract. Note that ScBalances wraps an ScImmutableMap of\n    // token color/amount combinations in a simpler to use interface.\n    var balances wasmlib.ScBalances = ctx.Balances()\n\n    // Retrieve the amount of plain iota tokens from the account balance\n    var amount int64 = balances.Balance(wasmlib.IOTA)\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    var totalFactor int64 = f.State.TotalFactor().Value()\n\n    // Get the proxy to the 'members' map in the state storage.\n    var members MapAddressToMutableInt64 = f.State.Members()\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    var memberList ArrayOfMutableAddress = f.State.MemberList()\n\n    // Determine the current length of the memberList array.\n    var size int32 = memberList.Length()\n\n    // Loop through all indexes of the memberList array.\n    for i := int32(0); i < size; i++ {\n        // Retrieve the next indexed address from the memberList array.\n        var address wasmlib.ScAddress = memberList.GetAddress(i).Value()\n\n        // Retrieve the factor associated with the address from the members map.\n        var factor int64 = members.GetInt64(address).Value()\n\n        // Calculate the fair share of iotas to disperse to this member based on the\n        // factor we just retrieved. Note that the result will been truncated.\n        var share int64 = amount * factor / totalFactor\n\n        // Is there anything to disperse to this member?\n        if share > 0 {\n            // Yes, so let's set up an ScTransfers map proxy that transfers the\n            // calculated amount of iotas. Note that ScTransfers wraps an\n            // ScMutableMap of token color/amount combinations in a simpler to use\n            // interface. The constructor we use here creates and initializes a\n            // single token color transfer in a single statement. The actual color\n            // and amount values passed in will be stored in a new map on the host.\n            var transfers wasmlib.ScTransfers = wasmlib.NewScTransferIotas(share)\n\n            // Perform the actual transfer of tokens from the smart contract to the\n            // member address. The transfer_to_address() method receives the address\n            // value and the proxy to the new transfers map on the host, and will\n            // call the corresponding host sandbox function with these values.\n            ctx.TransferToAddress(address, transfers)\n        }\n    }\n}\n"))),(0,o.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// 'divide' is a function that will take any iotas it receives and properly\n// disperse them to the addresses in the member list according to the dispersion\n// factors associated with these addresses.\n// Anyone can send iota tokens to this function and they will automatically be\n// divided over the member list. Note that this function does not deal with\n// fractions. It simply truncates the calculated amount to the nearest lower\n// integer and keeps any remaining iotas in its own account. They will be added\n// to any next round of tokens received prior to calculation of the new\n// dividend amounts.\npub fn func_divide(ctx: &ScFuncContext, f: &DivideContext) {\n    // Create an ScBalances map proxy to the account balances for this\n    // smart contract. Note that ScBalances wraps an ScImmutableMap of\n    // token color/amount combinations in a simpler to use interface.\n    let balances: ScBalances = ctx.balances();\n\n    // Retrieve the amount of plain iota tokens from the account balance.\n    let amount: i64 = balances.balance(&ScColor::IOTA);\n\n    // Retrieve the pre-calculated totalFactor value from the state storage.\n    let total_factor: i64 = f.state.total_factor().value();\n\n    // Get the proxy to the 'members' map in the state storage.\n    let members: MapAddressToMutableInt64 = f.state.members();\n\n    // Get the proxy to the 'memberList' array in the state storage.\n    let member_list: ArrayOfMutableAddress = f.state.member_list();\n\n    // Determine the current length of the memberList array.\n    let size: i32 = member_list.length();\n\n    // Loop through all indexes of the memberList array.\n    for i in 0..size {\n        // Retrieve the next indexed address from the memberList array.\n        let address: ScAddress = member_list.get_address(i).value();\n\n        // Retrieve the factor associated with the address from the members map.\n        let factor: i64 = members.get_int64(&address).value();\n\n        // Calculate the fair share of iotas to disperse to this member based on the\n        // factor we just retrieved. Note that the result will be truncated.\n        let share: i64 = amount * factor / total_factor;\n\n        // Is there anything to disperse to this member?\n        if share > 0 {\n            // Yes, so let's set up an ScTransfers map proxy that transfers the\n            // calculated amount of iotas. Note that ScTransfers wraps an\n            // ScMutableMap of token color/amount combinations in a simpler to use\n            // interface. The constructor we use here creates and initializes a\n            // single token color transfer in a single statement. The actual color\n            // and amount values passed in will be stored in a new map on the host.\n            let transfers: ScTransfers = ScTransfers::iotas(share);\n\n            // Perform the actual transfer of tokens from the smart contract to the\n            // member address. The transfer_to_address() method receives the address\n            // value and the proxy to the new transfers map on the host, and will\n            // call the corresponding host sandbox function with these values.\n            ctx.transfer_to_address(&address, transfers);\n        }\n    }\n}\n")))),(0,o.kt)("p",null,"In the next section we will introduce ",(0,o.kt)("a",{parentName:"p",href:"/wasp/guide/schema/funcdesc"},"function descriptors")," that can be used to initiate\nsmart contract functions."))}f.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(74034),r=n(67294),o=n(5730),s=n(54179);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(29085),l=n(86010),u="tabItem_1uMI";function d(e){var t,n,a,o=e.lazy,s=e.block,d=e.defaultValue,h=e.values,m=e.groupId,f=e.className,p=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:p.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,c.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(n=p.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=p[0])?void 0:a.props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),y=g.tabGroupChoices,k=g.setTabGroupChoices,T=(0,r.useState)(w),x=T[0],S=T[1],C=[],N=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==x&&b.some((function(e){return e.value===O}))&&S(O)}var _=function(e){var t=e.currentTarget,n=C.indexOf(t),a=b[n].value;a!==x&&(N(t),S(a),null!=m&&k(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":x===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:_,onClick:_},null!=n?n:t)}))),o?(0,r.cloneElement)(p.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},p.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function h(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,f=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);