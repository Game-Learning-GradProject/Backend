import{r as c,j as e,a,L as h,b as y,l as _,_ as f}from"./index-e1864906.js";import{L as x,d as b,a as O}from"./Google-53952a7d.js";import{r as L,i as C}from"./createSvgIcon-ab29d6c3.js";import{r as P}from"./jsx-runtime_commonjs-proxy-bf607921.js";import{L as q}from"./LoginSignupNav-10b27512.js";import{u as S}from"./useDispatch-a9907bee.js";import"./useTheme-eaa82510.js";var p={},D=C;Object.defineProperty(p,"__esModule",{value:!0});var g=p.default=void 0;G(c);var M=D(L()),E=P;function v(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,t=new WeakMap;return(v=function(n){return n?t:l})(r)}function G(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var t=v(l);if(t&&t.has(r))return t.get(r);var n={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(i!=="default"&&Object.prototype.hasOwnProperty.call(r,i)){var s=d?Object.getOwnPropertyDescriptor(r,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=r[i]}return n.default=r,t&&t.set(r,n),n}var I=(0,M.default)((0,E.jsx)("path",{d:"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"}),"Apple");g=p.default=I;const R=()=>e("div",{className:"tryGames max-w-md mx-auto mt-4 mb-12  h-[100px] flex justify-end items-center rounded-sm",children:a("div",{className:"flex  justify-between w-2/3 items-center",children:[e("div",{className:" font-bold text-lg",children:"Try our games"}),e(h,{to:"/games",className:`\r
        tryGames__btn\r
        bg-[#ffffff]    \r
        text-[#000]\r
        font-bold\r
        px-4\r
        py-2\r
        rounded-md\r
        hover:bg-[#d1d1d1]\r
        transition\r
        duration-300\r
        ease-in-out\r
        mr-4\r
        shadow-md\r
        `,children:"Go"})]})}),B=()=>{const r=y(),l=S(),[t,n]=c.useState(""),[d,i]=c.useState(""),[s,u]=c.useState(!1),[w,N]=c.useState(!1);return a("div",{className:"login-page",children:[e(q,{pageName:"login"}),s&&e(x,{}),a("div",{className:"theContainer",children:[a("div",{className:"login-form",children:[e("h3",{children:"Log in"}),a("div",{className:"login-socail",children:[a("div",{className:"facebook",children:[e(b,{}),e("span",{children:"Continue with Facebook"})]}),a("div",{className:"google",children:[e(O,{}),e("span",{children:"Continue with Google"})]}),a("div",{className:"apple",children:[e(g,{}),e("span",{children:"Continue with Apple"})]})]}),a("div",{className:"login-email",children:[e("span",{}),"Or log in with Email",e("span",{})]}),a("form",{onSubmit:o=>{o.preventDefault(),u(!0),l(_({mail:t,password:d})).unwrap().then(m=>{u(!1),f.success("welcome back"),m.children.length===0?r("/parent/add-first-child"):r("/parent/my-children")}).catch(m=>{u(!1),N(!0),f.error("check the email or password")})},children:[a("div",{className:"input-form",children:[e("label",{htmlFor:"",children:"Email"}),e("input",{required:!0,type:"email",value:t,onChange:o=>n(o.target.value)})]}),w&&e("span",{className:" text-red-500 capitalize",children:"check the email or password"}),a("div",{className:"input-form",children:[e("label",{htmlFor:"",children:"Password"}),e("input",{required:!0,type:"password",value:d,onChange:o=>i(o.target.value)})]}),e(h,{to:"/forget-password",children:"forget your password?"}),e("input",{type:"submit",value:s?"loading":"log in ",name:"commit",disabled:s})]})]}),e(R,{})]})]})};export{B as default};