import{g as z,d as _,e as b,i,r as d,n as P,o as k,j as a,p as w,q as U,a as R,O as re,f as B,A as ae}from"./index-e1864906.js";import{S as se}from"./FormControlLabel-d36b6985.js";import{f as E,k as le,u as ie,b as ce,e as de,S as pe,r as K,i as Q}from"./createSvgIcon-ab29d6c3.js";import{l as ue,m as ve}from"./Select-e17bbf50.js";import{r as X}from"./jsx-runtime_commonjs-proxy-bf607921.js";import{S as fe}from"./SelectGrade-9f49404b.js";function me(e){return z("MuiFormGroup",e)}_("MuiFormGroup",["root","row","error"]);const Se=["className","row"],be=e=>{const{classes:t,row:o,error:n}=e;return U({root:["root",o&&"row",n&&"error"]},me,t)},Ce=b("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.row&&t.row]}})(({ownerState:e})=>i({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),he=d.forwardRef(function(t,o){const n=P({props:t,name:"MuiFormGroup"}),{className:r,row:s=!1}=n,c=k(n,Se),l=ue(),u=ve({props:n,muiFormControl:l,states:["error"]}),f=i({},n,{row:s,error:u.error}),v=be(f);return a(Ce,i({className:w(v.root,r),ownerState:f,ref:o},c))}),ge=he,xe=E(a("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),Le=E(a("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),Re=b("span")({position:"relative",display:"flex"}),$e=b(xe)({transform:"scale(1)"}),ye=b(Le)(({theme:e,ownerState:t})=>i({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}));function Y(e){const{checked:t=!1,classes:o={},fontSize:n}=e,r=i({},e,{checked:t});return R(Re,{className:o.root,ownerState:r,children:[a($e,{fontSize:n,className:o.background,ownerState:r}),a(ye,{fontSize:n,className:o.dot,ownerState:r})]})}const Ie=d.createContext(void 0),ee=Ie;function Me(){return d.useContext(ee)}function Ne(e){return z("MuiRadio",e)}const we=_("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),O=we,ke=["checked","checkedIcon","color","icon","name","onChange","size","className"],ze=e=>{const{classes:t,color:o}=e,n={root:["root",`color${B(o)}`]};return i({},t,U(n,Ne,t))},_e=b(se,{shouldForwardProp:e=>re(e)||e==="classes",name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`color${B(o.color)}`]]}})(({theme:e,ownerState:t})=>i({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ae(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${O.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${O.disabled}`]:{color:(e.vars||e).palette.action.disabled}}));function Pe(e,t){return typeof t=="object"&&t!==null?e===t:String(e)===String(t)}const D=a(Y,{checked:!0}),Z=a(Y,{}),Ue=d.forwardRef(function(t,o){var n,r;const s=P({props:t,name:"MuiRadio"}),{checked:c,checkedIcon:l=D,color:u="primary",icon:f=Z,name:v,onChange:p,size:m="medium",className:$}=s,h=k(s,ke),C=i({},s,{color:u,size:m}),S=ze(C),g=Me();let L=c;const x=le(p,g&&g.onChange);let y=v;return g&&(typeof L>"u"&&(L=Pe(g.value,s.value)),typeof y>"u"&&(y=g.name)),a(_e,i({type:"radio",icon:d.cloneElement(f,{fontSize:(n=Z.props.fontSize)!=null?n:m}),checkedIcon:d.cloneElement(l,{fontSize:(r=D.props.fontSize)!=null?r:m}),ownerState:C,classes:S,name:y,checked:L,onChange:x,ref:o,className:w(S.root,$)},h))}),Gt=Ue,je=["actions","children","defaultValue","name","onChange","value"],Fe=d.forwardRef(function(t,o){const{actions:n,children:r,defaultValue:s,name:c,onChange:l,value:u}=t,f=k(t,je),v=d.useRef(null),[p,m]=ie({controlled:u,default:s,name:"RadioGroup"});d.useImperativeHandle(n,()=>({focus:()=>{let S=v.current.querySelector("input:not(:disabled):checked");S||(S=v.current.querySelector("input:not(:disabled)")),S&&S.focus()}}),[]);const $=ce(o,v),h=de(c),C=d.useMemo(()=>({name:h,onChange(S){m(S.target.value),l&&l(S,S.target.value)},value:p}),[h,l,m,p]);return a(ee.Provider,{value:C,children:a(ge,i({role:"radiogroup",ref:$},f,{children:r}))})}),Bt=Fe,Ge=d.createContext({}),V=Ge,Be=d.createContext({}),T=Be;function Ee(e){return z("MuiStep",e)}_("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Ve=["active","children","className","component","completed","disabled","expanded","index","last"],We=e=>{const{classes:t,orientation:o,alternativeLabel:n,completed:r}=e;return U({root:["root",o,n&&"alternativeLabel",r&&"completed"]},Ee,t)},qe=b("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel,o.completed&&t.completed]}})(({ownerState:e})=>i({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),Te=d.forwardRef(function(t,o){const n=P({props:t,name:"MuiStep"}),{active:r,children:s,className:c,component:l="div",completed:u,disabled:f,expanded:v=!1,index:p,last:m}=n,$=k(n,Ve),{activeStep:h,connector:C,alternativeLabel:S,orientation:g,nonLinear:L}=d.useContext(V);let[x=!1,y=!1,I=!1]=[r,u,f];h===p?x=r!==void 0?r:!0:!L&&h>p?y=u!==void 0?u:!0:!L&&h<p&&(I=f!==void 0?f:!0);const j=d.useMemo(()=>({index:p,last:m,expanded:v,icon:p+1,active:x,completed:y,disabled:I}),[p,m,v,x,y,I]),M=i({},n,{active:x,orientation:g,alternativeLabel:S,completed:y,disabled:I,expanded:v,component:l}),F=We(M),G=R(qe,i({as:l,className:w(F.root,c),ref:o,ownerState:M},$,{children:[C&&S&&p!==0?C:null,s]}));return a(T.Provider,{value:j,children:C&&!S&&p!==0?R(d.Fragment,{children:[C,G]}):G})}),Ae=Te,He=E(a("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Oe=E(a("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function De(e){return z("MuiStepIcon",e)}const Ze=_("MuiStepIcon",["root","active","completed","error","text"]),W=Ze;var J;const Je=["active","className","completed","error","icon"],Ke=e=>{const{classes:t,active:o,completed:n,error:r}=e;return U({root:["root",o&&"active",n&&"completed",r&&"error"],text:["text"]},De,t)},q=b(pe,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${W.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${W.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${W.error}`]:{color:(e.vars||e).palette.error.main}})),Qe=b("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),Xe=d.forwardRef(function(t,o){const n=P({props:t,name:"MuiStepIcon"}),{active:r=!1,className:s,completed:c=!1,error:l=!1,icon:u}=n,f=k(n,Je),v=i({},n,{active:r,completed:c,error:l}),p=Ke(v);if(typeof u=="number"||typeof u=="string"){const m=w(s,p.root);return l?a(q,i({as:Oe,className:m,ref:o,ownerState:v},f)):c?a(q,i({as:He,className:m,ref:o,ownerState:v},f)):R(q,i({className:m,ref:o,ownerState:v},f,{children:[J||(J=a("circle",{cx:"12",cy:"12",r:"12"})),a(Qe,{className:p.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:v,children:u})]}))}return u}),Ye=Xe;function et(e){return z("MuiStepLabel",e)}const tt=_("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),N=tt,ot=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],nt=e=>{const{classes:t,orientation:o,active:n,completed:r,error:s,disabled:c,alternativeLabel:l}=e;return U({root:["root",o,s&&"error",c&&"disabled",l&&"alternativeLabel"],label:["label",n&&"active",r&&"completed",s&&"error",c&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",n&&"active",r&&"completed",s&&"error",c&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer",l&&"alternativeLabel"]},et,t)},rt=b("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation]]}})(({ownerState:e})=>i({display:"flex",alignItems:"center",[`&.${N.alternativeLabel}`]:{flexDirection:"column"},[`&.${N.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),at=b("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(({theme:e})=>i({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${N.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${N.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${N.alternativeLabel}`]:{marginTop:16},[`&.${N.error}`]:{color:(e.vars||e).palette.error.main}})),st=b("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${N.alternativeLabel}`]:{paddingRight:0}})),lt=b("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${N.alternativeLabel}`]:{textAlign:"center"}})),te=d.forwardRef(function(t,o){var n;const r=P({props:t,name:"MuiStepLabel"}),{children:s,className:c,componentsProps:l={},error:u=!1,icon:f,optional:v,slotProps:p={},StepIconComponent:m,StepIconProps:$}=r,h=k(r,ot),{alternativeLabel:C,orientation:S}=d.useContext(V),{active:g,disabled:L,completed:x,icon:y}=d.useContext(T),I=f||y;let j=m;I&&!j&&(j=Ye);const M=i({},r,{active:g,alternativeLabel:C,completed:x,disabled:L,error:u,orientation:S}),F=nt(M),G=(n=p.label)!=null?n:l.label;return R(rt,i({className:w(F.root,c),ref:o,ownerState:M},h,{children:[I||j?a(st,{className:F.iconContainer,ownerState:M,children:a(j,i({completed:x,active:g,error:u,icon:I},$))}):null,R(lt,{className:F.labelContainer,ownerState:M,children:[s?a(at,i({ownerState:M},G,{className:w(F.label,G==null?void 0:G.className),children:s})):null,v]})]}))});te.muiName="StepLabel";const it=te;function ct(e){return z("MuiStepConnector",e)}_("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const dt=["className"],pt=e=>{const{classes:t,orientation:o,alternativeLabel:n,active:r,completed:s,disabled:c}=e,l={root:["root",o,n&&"alternativeLabel",r&&"active",s&&"completed",c&&"disabled"],line:["line",`line${B(o)}`]};return U(l,ct,t)},ut=b("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel,o.completed&&t.completed]}})(({ownerState:e})=>i({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),vt=b("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.line,t[`line${B(o.orientation)}`]]}})(({ownerState:e,theme:t})=>{const o=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return i({display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:o},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),ft=d.forwardRef(function(t,o){const n=P({props:t,name:"MuiStepConnector"}),{className:r}=n,s=k(n,dt),{alternativeLabel:c,orientation:l="horizontal"}=d.useContext(V),{active:u,disabled:f,completed:v}=d.useContext(T),p=i({},n,{alternativeLabel:c,orientation:l,active:u,completed:v,disabled:f}),m=pt(p);return a(ut,i({className:w(m.root,r),ref:o,ownerState:p},s,{children:a(vt,{className:m.line,ownerState:p})}))}),mt=ft;function St(e){return z("MuiStepper",e)}_("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const bt=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],Ct=e=>{const{orientation:t,alternativeLabel:o,classes:n}=e;return U({root:["root",t,o&&"alternativeLabel"]},St,n)},ht=b("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation],o.alternativeLabel&&t.alternativeLabel]}})(({ownerState:e})=>i({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),gt=a(mt,{}),xt=d.forwardRef(function(t,o){const n=P({props:t,name:"MuiStepper"}),{activeStep:r=0,alternativeLabel:s=!1,children:c,className:l,component:u="div",connector:f=gt,nonLinear:v=!1,orientation:p="horizontal"}=n,m=k(n,bt),$=i({},n,{alternativeLabel:s,orientation:p,component:u}),h=Ct($),C=d.Children.toArray(c).filter(Boolean),S=C.map((L,x)=>d.cloneElement(L,i({index:x,last:x+1===C.length},L.props))),g=d.useMemo(()=>({activeStep:r,alternativeLabel:s,connector:f,nonLinear:v,orientation:p}),[r,s,f,v,p]);return a(V.Provider,{value:g,children:a(ht,i({as:u,ownerState:$,className:w(h.root,l),ref:o},m,{children:S}))})}),Lt=xt;var A={},Rt=Q;Object.defineProperty(A,"__esModule",{value:!0});var oe=A.default=void 0,$t=Rt(K()),yt=X,It=(0,$t.default)((0,yt.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");oe=A.default=It;var H={},Mt=Q;Object.defineProperty(H,"__esModule",{value:!0});var ne=H.default=void 0,Nt=Mt(K()),wt=X,kt=(0,Nt.default)((0,wt.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");ne=H.default=kt;const Et=({wordData:e,deleteWord:t,editWordHandler:o,singleWordStyle:n})=>{var s;let r=null;return e.imageUrl?r="https://gamebasedlearning-ot4m.onrender.com/"+e.imageUrl:r=e.previewImage,R("div",{className:`single-word ${n?"bg-slate-200  dark:bg-darkBody hover:bg-slate-300 dark:hover:bg-darkHover  shadow-md border":" bg-none hover:bg-none"} `,children:[R("div",{className:"info",children:[a("img",{src:r,alt:""}),a("span",{children:e.definitionInEn}),a("span",{children:e.definitionInAc}),a("span",{children:(s=e.sentence)==null?void 0:s.slice(0,20)})]}),!e.imageUrl&&R("div",{className:"controlBTN",children:[a("span",{onClick:c=>o(e._id,c),children:a(oe,{})}),a("span",{onClick:c=>t(e._id),children:a(ne,{})})]})]})},Vt=({steps:e,activeStep:t})=>a(Lt,{activeStep:t,alternativeLabel:!0,sx:{my:5},children:e.map(o=>a(Ae,{color:"primary",children:a(it,{children:o})},o))});const Wt=({setChildGrade:e,setSubjectName:t,selectGrade:o})=>{const[n,r]=d.useState("english"),s=l=>{t(l),r(l)},c=({title:l,img:u})=>a("div",{onClick:()=>s(l),className:n===l?" outline-4 outline-[#ff5c0b] outline":"",children:a("img",{src:`/assets/images/${u}`,alt:""})});return R("div",{className:"select-subject",children:[o&&a(fe,{setChildGrade:e}),R("div",{className:"wrapper",id:"subjects",children:[a(c,{title:"arabic",img:"arabic.jpg"}),a(c,{title:"english",img:"english.jpg"}),a(c,{title:"math",img:"maths.avif"})]})]})};export{Vt as I,Bt as R,Et as S,Gt as a,Wt as b};
