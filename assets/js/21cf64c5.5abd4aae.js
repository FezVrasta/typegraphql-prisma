"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Hiding Prisma model field in GraphQL schema",sidebar_label:"Hiding model fields"},o=void 0,p={unversionedId:"advanced/hiding-field",id:"advanced/hiding-field",title:"Hiding Prisma model field in GraphQL schema",description:"Sometimes you may want to not expose some fields in GraphQL schema.",source:"@site/../docs/advanced/hiding-field.md",sourceDirName:"advanced",slug:"/advanced/hiding-field",permalink:"/docs/advanced/hiding-field",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/hiding-field.md",tags:[],version:"current",frontMatter:{title:"Hiding Prisma model field in GraphQL schema",sidebar_label:"Hiding model fields"},sidebar:"docs",previous:{title:"Exposing selected actions",permalink:"/docs/advanced/exposing-actions"},next:{title:"Adding model fields",permalink:"/docs/advanced/adding-fields"}},l={},s=[],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes you may want to not expose some fields in GraphQL schema.\nTo achieve this, just put the ",(0,a.kt)("inlineCode",{parentName:"p"},"@TypeGraphQL.omit")," doc line above the model field definition in ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file, e.g:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{4}","{4}":!0},"model User {\n  id        Int     @default(autoincrement()) @id\n  email     String  @unique\n  /// @TypeGraphQL.omit(output: true)\n  password  String\n  posts     Post[]\n}\n")),(0,a.kt)("p",null,"Thanks to that, the field won't show up in the GraphQL schema representation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type User {\n  id: Int!\n  email: String!\n  posts: [Post!]!\n}\n")),(0,a.kt)("p",null,"However, the prisma model field will be still visible in all input types, like ",(0,a.kt)("inlineCode",{parentName:"p"},"UserWhereInput")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"UserCreateInput"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"{3}","{3}":!0},"input UserCreateInput {\n  email: String!\n  password: String!\n  posts: PostCreateManyWithoutAuthorInput!\n}\n")),(0,a.kt)("p",null,"In order to hide the input fields as well, you need to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"input: true")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"@TypeGraphQL.omit"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{4}","{4}":!0},"model User {\n  id        Int     @default(autoincrement()) @id\n  email     String  @unique\n  /// @TypeGraphQL.omit(output: true, input: true)\n  password  String\n  posts     Post[]\n}\n")),(0,a.kt)("p",null,"So that the field won't show anymore in all model-related input types, like ",(0,a.kt)("inlineCode",{parentName:"p"},"UserCreateInput"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input UserCreateInput {\n  email: String!\n  posts: PostCreateManyWithoutAuthorInput!\n}\n")),(0,a.kt)("p",null,"If you need more control over hiding field in input types, you can select input kinds by passing an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{4}","{4}":!0},'model User {\n  id        Int     @default(autoincrement()) @id\n  email     String  @unique\n  /// @TypeGraphQL.omit(input: ["update", "where", "orderBy"])\n  password  String\n  posts     Post[]\n}\n')),(0,a.kt)("p",null,"The available options are: ",(0,a.kt)("inlineCode",{parentName:"p"},'"create"'),",",(0,a.kt)("inlineCode",{parentName:"p"},'"update"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"where"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"orderBy"'),"."))}u.isMDXComponent=!0}}]);