"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[561],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||s[m]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Overriding generated @ObjectType decorator for model",sidebar_label:"Overriding object decorator"},i=void 0,p={unversionedId:"advanced/overriding-object-decorator",id:"advanced/overriding-object-decorator",title:"Overriding generated @ObjectType decorator for model",description:"By default, typegraphql-prisma generator emits TypeGraphQL classes for models with all the decorators applied.",source:"@site/../docs/advanced/overriding-object-decorator.md",sourceDirName:"advanced",slug:"/advanced/overriding-object-decorator",permalink:"/docs/advanced/overriding-object-decorator",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/overriding-object-decorator.md",tags:[],version:"current",frontMatter:{title:"Overriding generated @ObjectType decorator for model",sidebar_label:"Overriding object decorator"},sidebar:"docs",previous:{title:"Redundant types",permalink:"/docs/advanced/emit-redundant-types-info"}},l={},c=[],d={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"typegraphql-prisma")," generator emits TypeGraphQL classes for models with all the decorators applied.\nDue to the nature of TypeGraphQL, we can't just easily override or replace the applied decorators, so we have to use a workaround."),(0,a.kt)("p",null,"First, we need to omit registering the type class by TypeGraphQL, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@@TypeGraphQL.omit(output: true)")," directive, e.g:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{1}","{1}":!0},"/// @@TypeGraphQL.omit(output: true)\nmodel User {\n  id     Int     @default(autoincrement()) @id\n  email  String  @unique\n}\n")),(0,a.kt)("p",null,"This way the generated class won't have the ",(0,a.kt)("inlineCode",{parentName:"p"},"@TypeGraphQL@ObjectType()")," decorator applied:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class User {\n  @TypeGraphQL.Field(_type => String, {\n    nullable: false,\n  })\n  id!: string;\n\n  @TypeGraphQL.Field(_type => String, {\n    nullable: false,\n  })\n  email!: string;\n}\n")),(0,a.kt)("p",null,"So, we can register our own version of the decorator using ",(0,a.kt)("a",{parentName:"p",href:"/docs/advanced/additional-decorators#additional-decorators-for-prisma-schema-classes-and-fields"},(0,a.kt)("inlineCode",{parentName:"a"},"applyModelsEnhanceMap")," feature"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'applyModelsEnhanceMap({\n  User: {\n    class: [\n      ObjectType({\n        description: "Generated omitted type with custom description",\n      }),\n    ],\n  },\n});\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Be aware that using ",(0,a.kt)("inlineCode",{parentName:"p"},"omit")," without ",(0,a.kt)("inlineCode",{parentName:"p"},"applyModelsEnhanceMap")," might result in a runtime error, because the generated class won't have any decorators applied while still being referenced in resolvers as output type.")),(0,a.kt)("p",null,"If we run the GraphQL server with such adjustments, we will get the following output in generated schema file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'"""\nGenerated omitted type with custom description\n"""\ntype User {\n  id: ID!\n  email: String!\n}\n')))}s.isMDXComponent=!0}}]);