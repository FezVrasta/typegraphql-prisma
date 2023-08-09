"use strict";(self.webpackChunktypegraphql_prisma_website=self.webpackChunktypegraphql_prisma_website||[]).push([[132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,y=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Emit `isAbstract` decorator option",sidebar_label:"Emit isAbstract"},i=void 0,s={unversionedId:"advanced/emit-is-abstract",id:"advanced/emit-is-abstract",title:"Emit `isAbstract` decorator option",description:"By default, TypeGraphQL Prisma generator aims to work with newest release of TypeGraphQL.",source:"@site/../docs/advanced/emit-is-abstract.md",sourceDirName:"advanced",slug:"/advanced/emit-is-abstract",permalink:"/docs/advanced/emit-is-abstract",draft:!1,editUrl:"https://github.com/MichalLytek/typegraphql-prisma/edit/main/docs/../docs/advanced/emit-is-abstract.md",tags:[],version:"current",frontMatter:{title:"Emit `isAbstract` decorator option",sidebar_label:"Emit isAbstract"},sidebar:"docs",previous:{title:"Overriding object decorator",permalink:"/docs/advanced/overriding-object-decorator"}},p={},c=[],l={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, TypeGraphQL Prisma generator aims to work with newest release of TypeGraphQL.\nHowever, for backward compatibility reasons, there are some config options introduced."),(0,a.kt)("p",null,"One of such options is ",(0,a.kt)("inlineCode",{parentName:"p"},"emitIsAbstract")," generator option:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-prisma",metastring:"{3}","{3}":!0},'generator typegraphql {\n  provider       = "typegraphql-prisma"\n  emitIsAbstract = true\n}\n')),(0,a.kt)("p",null,"When this option is set to true, it generates ",(0,a.kt)("inlineCode",{parentName:"p"},"isAbstract: true")," decorator option for ",(0,a.kt)("inlineCode",{parentName:"p"},"@ObjectType")," (models, outputs) and ",(0,a.kt)("inlineCode",{parentName:"p"},"@InputType")," classes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},'@TypeGraphQL.ObjectType("Post", {\n  isAbstract: true,\n})\nexport class Post {\n  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {\n    nullable: false,\n  })\n  uuid!: string;\n\n  // ...\n}\n')),(0,a.kt)("p",null,"This decorator option prevents from emitting those types in GraphQL schema if they are not referenced directly in the other types consumed by resolvers.\nIt only matters if you use the resolvers auto discovery feature (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'resolvers: ["./src/**/*.resolver.ts"]'),"), that was supported in TypeGraphQL up to the ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.0.0-beta.1")," and removed in newer releases."),(0,a.kt)("p",null,"Hence this option is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," by default, so if you still using some old version of TypeGraphQL together with resolvers auto discovery feature, you need to enable ",(0,a.kt)("inlineCode",{parentName:"p"},"emitIsAbstract = true")," in your Prisma schema."))}d.isMDXComponent=!0}}]);