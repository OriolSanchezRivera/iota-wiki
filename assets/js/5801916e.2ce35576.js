"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97860],{70584:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=t(74034),r=t(79973),c=(t(67294),t(3905)),u=t(31137),l=t(71871),s=["components"],i={keywords:["descriptor","view","access","contract functions","schema tool"],description:"The schema tool provides us with an easy way to access to smart contract functions through function descriptors, which allow you to initiate the function by calling it synchronously, or posting a request to run it asynchronously.",image:"/img/logo/WASP_logo_dark.png"},o="Function Descriptors",p={unversionedId:"guide/schema/funcdesc",id:"guide/schema/funcdesc",isDocsHomePage:!1,title:"Function Descriptors",description:"The schema tool provides us with an easy way to access to smart contract functions through function descriptors, which allow you to initiate the function by calling it synchronously, or posting a request to run it asynchronously.",source:"@site/external/wasp/documentation/docs/guide/schema/funcdesc.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/funcdesc",permalink:"/wasp/guide/schema/funcdesc",tags:[],version:"current",frontMatter:{keywords:["descriptor","view","access","contract functions","schema tool"],description:"The schema tool provides us with an easy way to access to smart contract functions through function descriptors, which allow you to initiate the function by calling it synchronously, or posting a request to run it asynchronously.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Token Transfers",permalink:"/wasp/guide/schema/transfers"},next:{title:"Calling Functions",permalink:"/wasp/guide/schema/call"}},m=[],f={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,s);return(0,c.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"function-descriptors"},"Function Descriptors"),(0,c.kt)("p",null,"The schema tool provides us with an easy way to access to smart contract functions through\n",(0,c.kt)("em",{parentName:"p"},"function descriptors"),". These are structures that provide access to the optional\nparams and result maps through strict compile-time checked interfaces. They will also\nallow you to initiate the function by calling it ",(0,c.kt)("a",{parentName:"p",href:"/wasp/guide/schema/call"},"synchronously"),", or posting a request to run\nit ",(0,c.kt)("a",{parentName:"p",href:"/wasp/guide/schema/post"},"asynchronously"),"."),(0,c.kt)("p",null,"The schema tool will generate a specific function descriptor for each func and view. It\nwill also generate an interface called ScFuncs, that can be used to create and initialize\neach function descriptor. Here is the code generated for the ",(0,c.kt)("inlineCode",{parentName:"p"},"dividend")," example\nin ",(0,c.kt)("inlineCode",{parentName:"p"},"contract.rs"),":"),(0,c.kt)(u.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,c.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-go"},'package dividend\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\ntype DivideCall struct {\n    Func *wasmlib.ScFunc\n}\n\ntype InitCall struct {\n    Func   *wasmlib.ScInitFunc\n    Params MutableInitParams\n}\n\ntype MemberCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableMemberParams\n}\n\ntype SetOwnerCall struct {\n    Func   *wasmlib.ScFunc\n    Params MutableSetOwnerParams\n}\n\ntype GetFactorCall struct {\n    Func    *wasmlib.ScView\n    Params  MutableGetFactorParams\n    Results ImmutableGetFactorResults\n}\n\ntype GetOwnerCall struct {\n    Func    *wasmlib.ScView\n    Results ImmutableGetOwnerResults\n}\n\ntype Funcs struct{}\n\nvar ScFuncs Funcs\n\nfunc (sc Funcs) Divide(ctx wasmlib.ScFuncCallContext) *DivideCall {\n    return &DivideCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncDivide)}\n}\n\nfunc (sc Funcs) Init(ctx wasmlib.ScFuncCallContext) *InitCall {\n    f := &InitCall{Func: wasmlib.NewScInitFunc(ctx, HScName, HFuncInit, keyMap[:], idxMap[:])}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) Member(ctx wasmlib.ScFuncCallContext) *MemberCall {\n    f := &MemberCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncMember)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) SetOwner(ctx wasmlib.ScFuncCallContext) *SetOwnerCall {\n    f := &SetOwnerCall{Func: wasmlib.NewScFunc(ctx, HScName, HFuncSetOwner)}\n    f.Func.SetPtrs(&f.Params.id, nil)\n    return f\n}\n\nfunc (sc Funcs) GetFactor(ctx wasmlib.ScViewCallContext) *GetFactorCall {\n    f := &GetFactorCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetFactor)}\n    f.Func.SetPtrs(&f.Params.id, &f.Results.id)\n    return f\n}\n\nfunc (sc Funcs) GetOwner(ctx wasmlib.ScViewCallContext) *GetOwnerCall {\n    f := &GetOwnerCall{Func: wasmlib.NewScView(ctx, HScName, HViewGetOwner)}\n    f.Func.SetPtrs(nil, &f.Results.id)\n    return f\n}\n'))),(0,c.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-rust"},"use std::ptr;\n\nuse wasmlib::*;\n\nuse crate::consts::*;\nuse crate::params::*;\nuse crate::results::*;\n\npub struct DivideCall {\n    pub func: ScFunc,\n}\n\npub struct InitCall {\n    pub func:   ScFunc,\n    pub params: MutableInitParams,\n}\n\npub struct MemberCall {\n    pub func:   ScFunc,\n    pub params: MutableMemberParams,\n}\n\npub struct SetOwnerCall {\n    pub func:   ScFunc,\n    pub params: MutableSetOwnerParams,\n}\n\npub struct GetFactorCall {\n    pub func:    ScView,\n    pub params:  MutableGetFactorParams,\n    pub results: ImmutableGetFactorResults,\n}\n\npub struct ScFuncs {\n}\n\nimpl ScFuncs {\n    pub fn divide(_ctx: & dyn ScFuncCallContext) -> DivideCall {\n        DivideCall {\n            func: ScFunc::new(HSC_NAME, HFUNC_DIVIDE),\n        }\n    }\n    pub fn init(_ctx: & dyn ScFuncCallContext) -> InitCall {\n        let mut f = InitCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_INIT),\n            params: MutableInitParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn member(_ctx: & dyn ScFuncCallContext) -> MemberCall {\n        let mut f = MemberCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_MEMBER),\n            params: MutableMemberParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn set_owner(_ctx: & dyn ScFuncCallContext) -> SetOwnerCall {\n        let mut f = SetOwnerCall {\n            func:   ScFunc::new(HSC_NAME, HFUNC_SET_OWNER),\n            params: MutableSetOwnerParams { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());\n        f\n    }\n    pub fn get_factor(_ctx: & dyn ScViewCallContext) -> GetFactorCall {\n        let mut f = GetFactorCall {\n            func:    ScView::new(HSC_NAME, HVIEW_GET_FACTOR),\n            params:  MutableGetFactorParams { id: 0 },\n            results: ImmutableGetFactorResults { id: 0 },\n        };\n        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);\n        f\n    }\n}\n")))),(0,c.kt)("p",null,"As you can see a struct has been generated for each of the funcs and views. The\nstructs only provide access to ",(0,c.kt)("inlineCode",{parentName:"p"},"params")," or ",(0,c.kt)("inlineCode",{parentName:"p"},"results")," when these are specified for the\nfunction. Each struct has a ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member that can be used to initiate the\nfunction call in certain ways. The ",(0,c.kt)("inlineCode",{parentName:"p"},"func")," member will be of type ScFunc or ScView,\ndepending on whether the function is a func or a view."),(0,c.kt)("p",null,"The ScFuncs struct provides a member function for each func or view that will create their\nrespective function descriptor, initialize it properly, and returns it."),(0,c.kt)("p",null,"In the next section we will look at how to use function descriptors to ",(0,c.kt)("a",{parentName:"p",href:"/wasp/guide/schema/call"},"call a smart\ncontract function synchronously"),"."))}d.isMDXComponent=!0},71871:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},31137:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(74034),r=t(67294),c=t(5730),u=t(54179);var l=function(){var e=(0,r.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=t(29085),i=t(86010),o="tabItem_1uMI";function p(e){var n,t,a,c=e.lazy,u=e.block,p=e.defaultValue,m=e.values,f=e.groupId,d=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"string"==typeof e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),w=(0,s.lx)(h,(function(e,n){return e.value===n.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=b[0])?void 0:a.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),g=y.tabGroupChoices,C=y.setTabGroupChoices,F=(0,r.useState)(v),S=F[0],k=F[1],x=[],N=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=g[f];null!=O&&O!==S&&h.some((function(e){return e.value===O}))&&k(O)}var P=function(e){var n=e.currentTarget,t=x.indexOf(n),a=h[t].value;a!==S&&(N(n),k(a),null!=f&&C(f,a))},T=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},d)},h.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":S===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:T,onFocus:P,onClick:P},null!=t?t:n)}))),c?(0,r.cloneElement)(b.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})}))))}function m(e){var n=(0,c.Z)();return r.createElement(p,(0,a.Z)({key:String(n)},e))}},54179:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},o=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),m=i(t),f=r,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||c;return t?a.createElement(d,u(u({ref:n},o),{},{components:t})):a.createElement(d,u({ref:n},o))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,u=new Array(c);u[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var i=2;i<c;i++)u[i]=t[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);