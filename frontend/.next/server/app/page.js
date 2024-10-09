(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7065:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(2850),r(8295),r(8131),r(5866);var s=r(3191),n=r(8716),a=r(7922),o=r.n(a),l=r(5231),i={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);r.d(t,i);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2850)),"C:\\Users\\HP\\Desktop\\Cursos NO CODERHOUSE\\NODE\\DevelopsToday-challenge\\frontend\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8295)),"C:\\Users\\HP\\Desktop\\Cursos NO CODERHOUSE\\NODE\\DevelopsToday-challenge\\frontend\\src\\app\\layout.js"],error:[()=>Promise.resolve().then(r.bind(r,8131)),"C:\\Users\\HP\\Desktop\\Cursos NO CODERHOUSE\\NODE\\DevelopsToday-challenge\\frontend\\src\\app\\error.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\HP\\Desktop\\Cursos NO CODERHOUSE\\NODE\\DevelopsToday-challenge\\frontend\\src\\app\\page.js"],p="/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8032:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},5280:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},2940:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9404,23))},2468:(e,t,r)=>{Promise.resolve().then(r.bind(r,2268))},2268:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(326),n=r(7577);function a({error:e,reset:t}){return(0,n.useEffect)(()=>{console.error(e)},[e]),(0,s.jsxs)("div",{children:[s.jsx("h2",{children:"Something went wrong!"}),s.jsx("button",{onClick:()=>t(),children:"Try again"})]})}},8131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(8570).createProxy)(String.raw`C:\Users\HP\Desktop\Cursos NO CODERHOUSE\NODE\DevelopsToday-challenge\frontend\src\app\error.js#default`)},8295:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var s=r(9510),n=r(1577),a=r.n(n),o=r(6362),l=r.n(o);r(5023);var i=r(7371);let d={title:"Crountries Info App",description:"DevelopsToday Challenge, Next JS 14 app"};function c({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:`${a().variable} ${l().variable} antialiased flex-1`,children:[s.jsx("nav",{children:s.jsx(i.default,{href:"/",className:"text-xl px-6 pt-4 mt-2",children:"Home"})}),e,(0,s.jsxs)("footer",{className:"text-center",children:[s.jsx("p",{children:"DevelopsToday Challenge"}),s.jsx("p",{children:"Build by Gonzalo Garcia Calvo 2024"})]})]})})}},2850:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(9510),n=r(7371);function a({country:e}){return(0,s.jsxs)("article",{className:"flex flex-col justify-center items-center bg-slate-700 rounded-md p-4",children:[s.jsx("h2",{className:"text-xl md:text-2xl text-center flex flex-grow",children:e.name}),s.jsx(n.default,{href:`/${e.name}?code=${e.countryCode}`,className:"text-sm md:text-base rounded-lg px-2 my-2.5 bg-red-950 hover:bg-slate-800",children:"Details"})]})}async function o(){let e=await fetch("https://developstoday-challenge.onrender.com"),t=await e.json();return s.jsx("div",{className:"w-full flex flex-row justify-center min-h-screen p-6 pb-5 sm:p-10 font-[family-name:var(--font-geist-sans)]",children:(0,s.jsxs)("main",{className:"max-w-72 sm:max-w-full  flex flex-col gap-8 row-start-2 items-center sm:items-start",children:[s.jsx("h1",{className:"w-full text-3xl font-bold text-center",children:"Countries of The World"}),s.jsx("section",{className:"w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8",children:t.map(e=>s.jsx(a,{country:e},e.countryCode))})]})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(6621);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,925,621],()=>r(7065));module.exports=s})();