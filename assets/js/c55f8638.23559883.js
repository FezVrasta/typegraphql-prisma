"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,y=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Emit ID fields with type",sidebar_label:"Emit ID type",sidebar_position:12},p=void 0,o={unversionedId:"advanced/emit-id-type",id:"advanced/emit-id-type",title:"Emit ID fields with type",description:"By default, TypeGraphQL Prisma generator emits GraphQL types for fields with the underlying data types, like Int or String scalars.",source:"@site/../docs/advanced/emit-id-type.md",sourceDirName:"advanced",slug:"/advanced/emit-id-type",permalink:"/docs/advanced/emit-id-type",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/emit-id-type.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Emit ID fields with type",sidebar_label:"Emit ID type",sidebar_position:12},sidebar:"docs",previous:{title:"Simple resolvers",permalink:"/docs/advanced/simple-resolvers"},next:{title:"Custom plural form",permalink:"/docs/advanced/override-plural"}},l={},s=[],c={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, TypeGraphQL Prisma generator emits GraphQL types for fields with the underlying data types, like ",(0,a.kt)("inlineCode",{parentName:"p"},"Int")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," scalars."),(0,a.kt)("p",null,"However, in some cases like when using GraphQL Relay, you may want to emit the ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," GraphQL scalar type for those fields.\nTo accomplish this, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"emitIdAsIDType")," generator option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{3}","{3}":!0},'generator typegraphql {\n  provider       = "typegraphql-prisma"\n  emitIdAsIDType = true\n}\n')),(0,a.kt)("p",null,"It will generate then the id fields using the ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeGraphQL.ID")," GraphQL scalar, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},'@TypeGraphQL.ObjectType("Post", {\n  isAbstract: true,\n})\nexport class Post {\n  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {\n    nullable: false,\n  })\n  uuid!: string;\n\n  // ...\n}\n')))}d.isMDXComponent=!0}}]);