import{b as o,a,j as e,L as n}from"./index-e1864906.js";import{r as l,i as c}from"./createSvgIcon-ab29d6c3.js";import{r as v}from"./jsx-runtime_commonjs-proxy-bf607921.js";var i={},d=c;Object.defineProperty(i,"__esModule",{value:!0});var s=i.default=void 0,u=d(l()),h=v,g=(0,u.default)((0,h.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");s=i.default=g;const N=({pageName:r})=>{const t=o();return a("div",{className:"login-nav",children:[a("div",{className:"left",children:[e("img",{src:"assets/brand/logo.svg",alt:""}),a("div",{className:"home",onClick:m=>t("/"),children:[e(s,{}),e("span",{children:"Home"})]})]}),r==="login"&&a("div",{className:"right",children:[e("span",{children:"Don't have an account?"}),e(n,{to:"/signup",children:"sign up"})]}),r==="signup"&&a("div",{className:"right",children:[e("span",{children:"Already have an account?"}),e(n,{to:"/login",children:"Log in"})]})]})};export{N as L};