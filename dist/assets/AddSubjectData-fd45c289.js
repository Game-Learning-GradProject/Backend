import{r as u,i as x,d as zt,g as Et,p as xe,a as i,j as a,e as ue,f as oe,t as Rt,v as Vt,A as it,B as ft,n as Ft,o as Mt,q as Ot,F as bt,C as Ht,D as Qe,b as Dt,u as Bt,L as Ut}from"./index-e1864906.js";import{v as Ze}from"./v4-a960c1f4.js";import{S as Wt,R as qt,a as Gt,I as Xt,b as Yt}from"./SelectSubject-e86a277d.js";import{u as Jt,a as Kt,b as ct,c as Qt,d as Je,o as ze,r as gt,i as vt}from"./createSvgIcon-ab29d6c3.js";import{r as xt}from"./jsx-runtime_commonjs-proxy-bf607921.js";import{L as Zt}from"./FullLoading-f3564e03.js";import{i as Ee,u as re,F as yt,a as jt,I as ea,S as ta,M as Ie}from"./Select-e17bbf50.js";import{F as aa}from"./FormControlLabel-d36b6985.js";import{S as na}from"./SimpleNav-2f232c7f.js";import{u as ra}from"./useTheme-eaa82510.js";import{M as oa,a as la}from"./TextField-5bc998bc.js";import"./SelectGrade-9f49404b.js";/* empty css                */import"./assertThisInitialized-4a893623.js";import"./useDispatch-a9907bee.js";const sa={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},ia=sa,ca=2;function kt(e,t){return e-t}function ke(e,t,n){return e==null?t:Math.min(Math.max(t,e),n)}function dt(e,t){var n;const{index:r}=(n=e.reduce((s,p,d)=>{const b=Math.abs(t-p);return s===null||b<s.distance||b===s.distance?{distance:b,index:d}:s},null))!=null?n:{};return r}function Pe(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let r=0;r<n.changedTouches.length;r+=1){const s=n.changedTouches[r];if(s.identifier===t.current)return{x:s.clientX,y:s.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function ut(e,t,n){return(e-t)*100/(n-t)}function da(e,t,n){return(n-t)*e+t}function ua(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function pa(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(ua(t)))}function pt({values:e,newValue:t,index:n}){const r=e.slice();return r[n]=t,r.sort(kt)}function $e({sliderRef:e,activeIndex:t,setActive:n}){var r,s;const p=ze(e.current);if(!((r=e.current)!=null&&r.contains(p.activeElement))||Number(p==null||(s=p.activeElement)==null?void 0:s.getAttribute("data-index"))!==t){var d;(d=e.current)==null||d.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}const ma={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},ha=e=>e;let Te;function Ke(){return Te===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Te=CSS.supports("touch-action","none"):Te=!0),Te}function fa(e){const{"aria-labelledby":t,defaultValue:n,disabled:r=!1,disableSwap:s=!1,isRtl:p=!1,marks:d=!1,max:b=100,min:m=0,name:_,onChange:C,onChangeCommitted:k,orientation:N="horizontal",ref:S,scale:z=ha,step:P=1,tabIndex:F,value:y}=e,h=u.useRef(),[A,l]=u.useState(-1),[f,M]=u.useState(-1),[q,J]=u.useState(!1),K=u.useRef(0),[Q,H]=Jt({controlled:y,default:n??m,name:"Slider"}),ae=C&&((o,c,g)=>{const v=o.nativeEvent||o,V=new v.constructor(v.type,v);Object.defineProperty(V,"target",{writable:!0,value:{value:c,name:_}}),C(V,c,g)}),le=Array.isArray(Q);let E=le?Q.slice().sort(kt):[Q];E=E.map(o=>ke(o,m,b));const pe=d===!0&&P!==null?[...Array(Math.floor((b-m)/P)+1)].map((o,c)=>({value:m+P*c})):d||[],Z=pe.map(o=>o.value),{isFocusVisibleRef:Se,onBlur:j,onFocus:ee,ref:Re}=Kt(),[Ne,me]=u.useState(-1),D=u.useRef(),we=ct(Re,D),_e=ct(S,we),Ce=o=>c=>{var g;const v=Number(c.currentTarget.getAttribute("data-index"));ee(c),Se.current===!0&&me(v),M(v),o==null||(g=o.onFocus)==null||g.call(o,c)},Ve=o=>c=>{var g;j(c),Se.current===!1&&me(-1),M(-1),o==null||(g=o.onBlur)==null||g.call(o,c)};Qt(()=>{if(r&&D.current.contains(document.activeElement)){var o;(o=document.activeElement)==null||o.blur()}},[r]),r&&A!==-1&&l(-1),r&&Ne!==-1&&me(-1);const he=o=>c=>{var g;(g=o.onChange)==null||g.call(o,c);const v=Number(c.currentTarget.getAttribute("data-index")),V=E[v],U=Z.indexOf(V);let I=c.target.valueAsNumber;if(pe&&P==null&&(I=I<V?Z[U-1]:Z[U+1]),I=ke(I,m,b),pe&&P==null){const B=Z.indexOf(E[v]);I=I<E[v]?Z[B-1]:Z[B+1]}if(le){s&&(I=ke(I,E[v-1]||-1/0,E[v+1]||1/0));const B=I;I=pt({values:E,newValue:I,index:v});let w=v;s||(w=I.indexOf(B)),$e({sliderRef:D,activeIndex:w})}H(I),me(v),ae&&ae(c,I,v),k&&k(c,I)},se=u.useRef();let fe=N;p&&N==="horizontal"&&(fe+="-reverse");const be=({finger:o,move:c=!1})=>{const{current:g}=D,{width:v,height:V,bottom:U,left:I}=g.getBoundingClientRect();let B;fe.indexOf("vertical")===0?B=(U-o.y)/V:B=(o.x-I)/v,fe.indexOf("-reverse")!==-1&&(B=1-B);let w;if(w=da(B,m,b),P)w=pa(w,P,m);else{const ye=dt(Z,w);w=Z[ye]}w=ke(w,m,b);let te=0;if(le){c?te=se.current:te=dt(E,w),s&&(w=ke(w,E[te-1]||-1/0,E[te+1]||1/0));const ye=w;w=pt({values:E,newValue:w,index:te}),s&&c||(te=w.indexOf(ye),se.current=te)}return{newValue:w,activeIndex:te}},ie=Je(o=>{const c=Pe(o,h);if(!c)return;if(K.current+=1,o.type==="mousemove"&&o.buttons===0){G(o);return}const{newValue:g,activeIndex:v}=be({finger:c,move:!0});$e({sliderRef:D,activeIndex:v,setActive:l}),H(g),!q&&K.current>ca&&J(!0),ae&&g!==Q&&ae(o,g,v)}),G=Je(o=>{const c=Pe(o,h);if(J(!1),!c)return;const{newValue:g}=be({finger:c,move:!0});l(-1),o.type==="touchend"&&M(-1),k&&k(o,g),h.current=void 0,L()}),$=Je(o=>{if(r)return;Ke()||o.preventDefault();const c=o.changedTouches[0];c!=null&&(h.current=c.identifier);const g=Pe(o,h);if(g!==!1){const{newValue:V,activeIndex:U}=be({finger:g});$e({sliderRef:D,activeIndex:U,setActive:l}),H(V),ae&&ae(o,V,U)}K.current=0;const v=ze(D.current);v.addEventListener("touchmove",ie),v.addEventListener("touchend",G)}),L=u.useCallback(()=>{const o=ze(D.current);o.removeEventListener("mousemove",ie),o.removeEventListener("mouseup",G),o.removeEventListener("touchmove",ie),o.removeEventListener("touchend",G)},[G,ie]);u.useEffect(()=>{const{current:o}=D;return o.addEventListener("touchstart",$,{passive:Ke()}),()=>{o.removeEventListener("touchstart",$,{passive:Ke()}),L()}},[L,$]),u.useEffect(()=>{r&&L()},[r,L]);const ge=o=>c=>{var g;if((g=o.onMouseDown)==null||g.call(o,c),r||c.defaultPrevented||c.button!==0)return;c.preventDefault();const v=Pe(c,h);if(v!==!1){const{newValue:U,activeIndex:I}=be({finger:v});$e({sliderRef:D,activeIndex:I,setActive:l}),H(U),ae&&ae(c,U,I)}K.current=0;const V=ze(D.current);V.addEventListener("mousemove",ie),V.addEventListener("mouseup",G)},ce=ut(le?E[0]:m,m,b),de=ut(E[E.length-1],m,b)-ce,Fe=(o={})=>{const c={onMouseDown:ge(o||{})},g=x({},o,c);return x({ref:_e},g)},O=o=>c=>{var g;(g=o.onMouseOver)==null||g.call(o,c);const v=Number(c.currentTarget.getAttribute("data-index"));M(v)},ve=o=>c=>{var g;(g=o.onMouseLeave)==null||g.call(o,c),M(-1)};return{active:A,axis:fe,axisProps:ma,dragging:q,focusedThumbIndex:Ne,getHiddenInputProps:(o={})=>{var c;const g={onChange:he(o||{}),onFocus:Ce(o||{}),onBlur:Ve(o||{})},v=x({},o,g);return x({tabIndex:F,"aria-labelledby":t,"aria-orientation":N,"aria-valuemax":z(b),"aria-valuemin":z(m),name:_,type:"range",min:e.min,max:e.max,step:(c=e.step)!=null?c:void 0,disabled:r},v,{style:x({},ia,{direction:p?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:Fe,getThumbProps:(o={})=>{const c={onMouseOver:O(o||{}),onMouseLeave:ve(o||{})};return x({},o,c)},marks:pe,open:f,range:le,trackLeap:de,trackOffset:ce,values:E}}const ba=e=>!e||!Ee(e),ga=ba;function va(e){return Et("MuiSlider",e)}const xa=zt("MuiSlider",["root","active","colorPrimary","colorSecondary","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),Y=xa,ya=e=>{const{open:t}=e;return{offset:xe(t&&Y.valueLabelOpen),circle:Y.valueLabelCircle,label:Y.valueLabelLabel}};function ka(e){const{children:t,className:n,value:r}=e,s=ya(e);return t?u.cloneElement(t,{className:xe(t.props.className)},i(u.Fragment,{children:[t.props.children,a("span",{className:xe(s.offset,n),"aria-hidden":!0,children:a("span",{className:s.circle,children:a("span",{className:s.label,children:r})})})]})):null}const Sa=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"],mt=(e,t,n)=>(e-t)*100/(n-t);function ht(e){return e}const Na=ue("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${oe(n.color)}`],n.size!=="medium"&&t[`size${oe(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>x({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&x({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&x({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${Y.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${Y.dragging}`]:{[`& .${Y.thumb}, & .${Y.track}`]:{transition:"none"}}})),wa=ue("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>x({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),_a=ue("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?Rt(e.palette[t.color].main,.62):Vt(e.palette[t.color].main,.5);return x({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n})}),Ca=ue("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${oe(n.color)}`],n.size!=="medium"&&t[`thumbSize${oe(n.size)}`]]}})(({theme:e,ownerState:t})=>x({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":x({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${Y.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:it(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${Y.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:it(e.palette[t.color].main,.16)}`},[`&.${Y.disabled}`]:{"&:hover":{boxShadow:"none"}}})),La=ue(ka,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>x({[`&.${Y.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:"30px",top:"24px",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"25%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),Ia=ue("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>ft(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e,ownerState:t,markActive:n})=>x({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),Pa=ue("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>ft(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:n})=>x({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),$a=e=>{const{disabled:t,dragging:n,marked:r,orientation:s,track:p,classes:d,color:b,size:m}=e,_={root:["root",t&&"disabled",n&&"dragging",r&&"marked",s==="vertical"&&"vertical",p==="inverted"&&"trackInverted",p===!1&&"trackFalse",b&&`color${oe(b)}`,m&&`size${oe(m)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",m&&`thumbSize${oe(m)}`,b&&`thumbColor${oe(b)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Ot(_,va,d)},Ta=({children:e})=>e,Aa=u.forwardRef(function(t,n){var r,s,p,d,b,m,_,C,k,N,S,z,P,F,y,h,A,l,f,M,q,J,K,Q;const H=Ft({props:t,name:"MuiSlider"}),le=ra().direction==="rtl",{"aria-label":E,"aria-valuetext":pe,"aria-labelledby":Z,component:Se="span",components:j={},componentsProps:ee={},color:Re="primary",classes:Ne,className:me,disableSwap:D=!1,disabled:we=!1,getAriaLabel:_e,getAriaValueText:Ce,marks:Ve=!1,max:he=100,min:se=0,orientation:fe="horizontal",size:be="medium",step:ie=1,scale:G=ht,slotProps:$,slots:L,track:ge="normal",valueLabelDisplay:ce="off",valueLabelFormat:de=ht}=H,Fe=Mt(H,Sa),O=x({},H,{isRtl:le,max:he,min:se,classes:Ne,disabled:we,disableSwap:D,orientation:fe,marks:Ve,color:Re,size:be,step:ie,scale:G,track:ge,valueLabelDisplay:ce,valueLabelFormat:de}),{axisProps:ve,getRootProps:tt,getHiddenInputProps:at,getThumbProps:o,open:c,active:g,axis:v,focusedThumbIndex:V,range:U,dragging:I,marks:B,values:w,trackOffset:te,trackLeap:ye}=fa(x({},O,{ref:n}));O.marked=B.length>0&&B.some(T=>T.label),O.dragging=I,O.focusedThumbIndex=V;const X=$a(O),Me=(r=(s=L==null?void 0:L.root)!=null?s:j.Root)!=null?r:Na,nt=(p=(d=L==null?void 0:L.rail)!=null?d:j.Rail)!=null?p:wa,rt=(b=(m=L==null?void 0:L.track)!=null?m:j.Track)!=null?b:_a,ot=(_=(C=L==null?void 0:L.thumb)!=null?C:j.Thumb)!=null?_:Ca,lt=(k=(N=L==null?void 0:L.valueLabel)!=null?N:j.ValueLabel)!=null?k:La,Oe=(S=(z=L==null?void 0:L.mark)!=null?z:j.Mark)!=null?S:Ia,He=(P=(F=L==null?void 0:L.markLabel)!=null?F:j.MarkLabel)!=null?P:Pa,st=(y=(h=L==null?void 0:L.input)!=null?h:j.Input)!=null?y:"input",De=(A=$==null?void 0:$.root)!=null?A:ee.root,wt=(l=$==null?void 0:$.rail)!=null?l:ee.rail,Be=(f=$==null?void 0:$.track)!=null?f:ee.track,Ue=(M=$==null?void 0:$.thumb)!=null?M:ee.thumb,We=(q=$==null?void 0:$.valueLabel)!=null?q:ee.valueLabel,_t=(J=$==null?void 0:$.mark)!=null?J:ee.mark,Ct=(K=$==null?void 0:$.markLabel)!=null?K:ee.markLabel,Lt=(Q=$==null?void 0:$.input)!=null?Q:ee.input,It=re({elementType:Me,getSlotProps:tt,externalSlotProps:De,externalForwardedProps:Fe,additionalProps:x({},ga(Me)&&{as:Se}),ownerState:x({},O,De==null?void 0:De.ownerState),className:[X.root,me]}),Pt=re({elementType:nt,externalSlotProps:wt,ownerState:O,className:X.rail}),$t=re({elementType:rt,externalSlotProps:Be,additionalProps:{style:x({},ve[v].offset(te),ve[v].leap(ye))},ownerState:x({},O,Be==null?void 0:Be.ownerState),className:X.track}),qe=re({elementType:ot,getSlotProps:o,externalSlotProps:Ue,ownerState:x({},O,Ue==null?void 0:Ue.ownerState)}),Tt=re({elementType:lt,externalSlotProps:We,ownerState:x({},O,We==null?void 0:We.ownerState),className:X.valueLabel}),Ge=re({elementType:Oe,externalSlotProps:_t,ownerState:O,className:X.mark}),Xe=re({elementType:He,externalSlotProps:Ct,ownerState:O}),At=re({elementType:st,getSlotProps:at,externalSlotProps:Lt,ownerState:O});return i(Me,x({},It,{children:[a(nt,x({},Pt)),a(rt,x({},$t)),B.filter(T=>T.value>=se&&T.value<=he).map((T,R)=>{const Ye=mt(T.value,se,he),Le=ve[v].offset(Ye);let ne;return ge===!1?ne=w.indexOf(T.value)!==-1:ne=ge==="normal"&&(U?T.value>=w[0]&&T.value<=w[w.length-1]:T.value<=w[0])||ge==="inverted"&&(U?T.value<=w[0]||T.value>=w[w.length-1]:T.value>=w[0]),i(u.Fragment,{children:[a(Oe,x({"data-index":R},Ge,!Ee(Oe)&&{markActive:ne},{style:x({},Le,Ge.style),className:xe(Ge.className,ne&&X.markActive)})),T.label!=null?a(He,x({"aria-hidden":!0,"data-index":R},Xe,!Ee(He)&&{markLabelActive:ne},{style:x({},Le,Xe.style),className:xe(X.markLabel,Xe.className,ne&&X.markLabelActive),children:T.label})):null]},R)}),w.map((T,R)=>{const Ye=mt(T,se,he),Le=ve[v].offset(Ye),ne=ce==="off"?Ta:lt;return a(u.Fragment,{children:a(ne,x({},!Ee(ne)&&{valueLabelFormat:de,valueLabelDisplay:ce,value:typeof de=="function"?de(G(T),R):de,index:R,open:c===R||g===R||ce==="on",disabled:we},Tt,{children:a(ot,x({"data-index":R,"data-focusvisible":V===R},qe,{className:xe(X.thumb,qe.className,g===R&&X.active,V===R&&X.focusVisible),style:x({},Le,{pointerEvents:D&&g!==R?"none":void 0},qe.style),children:a(st,x({"data-index":R,"aria-label":_e?_e(R):E,"aria-valuenow":G(T),"aria-labelledby":Z,"aria-valuetext":Ce?Ce(G(T),R):pe,value:w[R]},At))}))}))},R)})]}))}),za=Aa;const Ae=({type:e,label:t,value:n,setValue:r})=>{const s=p=>{r(p)};return i("div",{className:"flex  flex-col gap-1 w-full ",children:[a("label",{htmlFor:"word",className:"font-semibold text-neutral-600 capitalize",children:t}),a("input",{type:e,name:"",value:n,onChange:p=>s(p.target.value),className:"p-2 focus:outline-none rounded-md bg-gray-200 dark:bg-darkBody"})]})},Ea="_SubjectData_z7hmm_1",Ra="_wrapper_z7hmm_11",Va="_word_z7hmm_17",Fa="_gradeNum_z7hmm_23",Ma="_addWord_z7hmm_31",Oa="_image_z7hmm_39",Ha="_inputs_z7hmm_73",Da="_input_z7hmm_73",Ba="_data_z7hmm_105",Ua="_enteredData_z7hmm_117",Wa="_loading_z7hmm_129",qa="_info_z7hmm_155",Ga="_controlBTN_z7hmm_167",W={SubjectData:Ea,wrapper:Ra,word:Va,gradeNum:Fa,addWord:Ma,image:Oa,inputs:Ha,input:Da,data:Ba,enteredData:Ua,loading:Wa,info:qa,controlBTN:Ga},Xa=({subjectData:e,setSubjectData:t})=>{const[n,r]=u.useState(""),[s,p]=u.useState(""),[d,b]=u.useState(""),[m,_]=u.useState(""),[C,k]=u.useState(""),[N,S]=u.useState(""),z=()=>{if(N){const l={_id:N,sentence:n,choices:[s,d,m]};t(e.map(f=>f._id===N?l:f)),P();return}const h={_id:Ze(),sentence:n,choices:[s,d,m]};let A=h.choices.some(l=>n.includes(l));n&&s&&d&&m&&A?(t(l=>[...l,h]),k(""),r(""),P()):k(A?"All fields are required":"Sentencs must include one of the choices")},P=()=>{r(""),p(""),b(""),_(""),S("")},F=h=>{const A=e.find(l=>l._id===h);r(A.sentence),p(A.choices[0]),b(A.choices[1]),_(A.choices[2]),S(h)},y=h=>{t(e.filter(A=>A._id!==h)),P(),S("")};return a("div",{className:" w-full flex flex-col items-center justify-center mb-12",children:i("div",{className:" w-full lg:w-9/12 flex flex-col justify-center items-center mt-3 gap-6",children:[i("div",{className:"flex flex-col justify-center items-center w-full gap-4 ",children:[a(Ae,{setValue:h=>r(h),value:n,type:"text",label:" sentence"}),a(Ae,{value:s,setValue:h=>p(h),type:"text",label:"choices one"}),a(Ae,{value:d,setValue:h=>b(h),type:"text",label:"choices two"}),a(Ae,{value:m,setValue:h=>_(h),type:"text",label:"choices three"}),i("div",{children:[a("button",{onClick:z,className:"text-white py-2 px-20 bg-green-600 rounded-md mt-4 hover:bg-green-500 ",children:N?"Update":"Add"}),C&&a("span",{className:"text-red-600 ml-3",children:C})]})]}),i("div",{className:`${W.data}`,children:[i("span",{children:[e==null?void 0:e.length," Sentence"]}),i("div",{className:`${W.enteredData} dark:border-darkSText gap-4`,id:"words",children:[(e==null?void 0:e.length)==0&&a("p",{className:" capitalize text-center mt-4",children:"entered data will be here"}),e==null?void 0:e.map(h=>i("div",{className:"flex justify-between items-center  p-2 bg-neutral-100 rounded-md",children:[i("div",{className:" flex flex-col",children:[a("p",{children:h.sentence}),i("div",{className:"flex",children:[a("span",{children:h.choices[0]}),"-",a("span",{children:h.choices[1]}),"-",a("span",{children:h.choices[2]})]})]}),i("div",{className:"flex gap-4",children:[a("button",{onClick:()=>F(h._id),className:"text-white py-1 px-2 bg-green-600 font-light rounded-md",children:"Edit"}),a("button",{onClick:()=>y(h._id),className:"text-white py-1 px-2 bg-red-600 rounded-md font-light",children:"Delete"})]})]},h._id))]})]})]})})};var je={},Ya=vt;Object.defineProperty(je,"__esModule",{value:!0});var St=je.default=void 0,Ja=Ya(gt()),Ka=xt,Qa=(0,Ja.default)((0,Ka.jsx)("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");St=je.default=Qa;const Za=({setSubjectData:e})=>{const[t,n]=u.useState({state:!1,_id:""}),[r,s]=u.useState([]),[p,d]=u.useState(null),[b,m]=u.useState(null),[_,C]=u.useState(""),[k,N]=u.useState(""),[S,z]=u.useState(""),P=l=>{if(l.length>0){m(l[0]);const f=new FileReader;f.onload=M=>{d(M.target.result)},f.readAsDataURL(l[0])}},F=()=>{N(""),C(""),z(""),m(null),d("")},y=()=>{if(t.state){const l={_id:Ze(),wordImage:b,previewImage:p,definitionInEn:_,sentence:S,definitionInAc:k};s(r.map(f=>f._id===t._id?l:f)),e(r.map(f=>f._id===t._id?l:f)),n({state:!1,_id:""}),F()}else{const l={_id:Ze(),wordImage:b,previewImage:p,definitionInEn:_,definitionInAc:k,sentence:S};s([...r,l]),e([...r,l]),F()}},h=(l,f)=>{document.querySelectorAll("#words div").forEach(H=>{H.style.border="none"}),f.target.parentElement.parentElement.style.border="1px solid black",n({state:!0,_id:l});const{definitionInEn:M,definitionInAc:q,sentence:J,wordImage:K}=r.find(H=>H._id===l);N(q),C(M),z(J),m(K);const Q=new FileReader;Q.onload=H=>{d(H.target.result)},Q.readAsDataURL(K)},A=l=>{s(r.filter(f=>f._id!==l)),e(r.filter(f=>f._id!==l))};return a("div",{className:W.SubjectData,children:i("div",{className:W.wrapper,children:[a("div",{className:W.word,children:i("div",{className:W.addWord,children:[i("div",{className:`${W.image}  dark:border-darkSText`,children:[p&&a("img",{src:p,alt:""}),!p&&a("label",{htmlFor:"file",children:i("span",{children:[a(St,{color:"orange"})," Upload Img"]})}),a("input",{type:"file",name:"",id:"file",onChange:l=>P(l.target.files)})]}),i("div",{className:`${W.inputs}`,children:[i("div",{className:`${W.input}`,children:[a("label",{htmlFor:"word",children:"word"}),a("input",{type:"text",name:"",id:"word",value:_,onChange:l=>C(l.target.value),className:"bg-gray-200 dark:bg-darkBody"})]}),i("div",{className:`${W.input}`,children:[a("label",{htmlFor:"meaning",children:"المعني"}),a("input",{type:"text",id:"meaning",value:k,onChange:l=>N(l.target.value),className:"bg-gray-200 dark:bg-darkBody"})]}),i("div",{className:`${W.input}`,children:[a("label",{htmlFor:"sentence",children:"sentence"}),a("input",{type:"text",id:"sentence",value:S,onChange:l=>z(l.target.value),className:"bg-gray-200 dark:bg-darkBody"})]}),a("button",{onClick:y,className:"text-white",children:t.state?"Update":"Add"})]})]})}),i("div",{className:`${W.data}`,children:[i("span",{children:[r.length," words"]}),a("div",{className:`${W.enteredData} dark:border-darkSText`,id:"words",children:r.length==0?a("p",{className:" capitalize text-center mt-4",children:"entered data will be here"}):r.map(l=>a(Wt,{wordData:l,deleteWord:A,editWordHandler:h},l._id))})]})]})})};function ja({title:e,setChooseValue:t,choose:n}){return u.useEffect(()=>{t(n[0].value)},[n]),i(yt,{sx:{p:2,mb:3},children:[a(jt,{id:"demo-radio-buttons-group-label",color:"primary",children:e}),a(qt,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:n[0].value,name:"radio-buttons-group",onChange:r=>t(r.target.value),children:n==null?void 0:n.map(({label:r,value:s})=>a(aa,{value:s,control:a(Gt,{color:"primary"}),label:r},r))})]})}const en=async(e,t)=>{try{const n=new FormData,r={};e.image?(n.append("type",e.type),n.append("grade",e.stadge),n.append("subject",e.subjectName),n.append("wordar",e.definitionInAc),n.append("worden",e.definitionInEn),n.append("image",e.image,e.image.name),n.append("sentence",e.sentence)):(r.type=e.type,r.grade=e.stadge,r.subject=e.subjectName,r.wordar=e.definitionInAc,r.worden=e.definitionInEn,r.sentence=e.sentence,r.choices=e.choices,r.number=e.number);const s=`http://localhost:8080/FSE/InsertData/${t}`,p=Object.keys(r).length>0?{method:"POST",headers:{"content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)}:{method:"POST",body:n,redirect:"follow"};return await fetch(s,p)}catch(n){throw console.log(n),new Error(n)}},tn=({num1:e,num2:t,operator:n,choices:r,handleNum1Change:s,handleNum2Change:p,handleOperatorChange:d,setChoices:b,editIndex:m,addHandler:_,subjectData:C})=>i(bt,{children:[i("div",{className:"mb-4",children:[a("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"num1",children:"Number 1"}),a("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"num1",type:"number",placeholder:"Enter first number",value:e,onChange:s})]}),i("div",{className:"mb-4",children:[a("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"operator",children:"Operator"}),a("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"operator",type:"text",placeholder:"Enter operator (+, -, *)",value:n,onChange:d})]}),i("div",{className:"mb-4",children:[a("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"num2",children:"Number 2"}),a("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"num2",type:"number",placeholder:"Enter second number",value:t,onChange:p})]}),i("div",{className:"mb-4",children:[a("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"operator",children:"choices"}),i("div",{className:"flex  flex-row items-center",children:[a("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"number",type:"number",placeholder:"Enter option one",value:r[0],onChange:k=>b(r.map((N,S)=>S===0?k.target.value:N))}),a("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"number",type:"number",placeholder:"Enter option two",value:r[1],onChange:k=>b(r.map((N,S)=>S===1?k.target.value:N))}),a("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"number",type:"number",placeholder:"Enter option three",value:r[2],onChange:k=>b(r.map((N,S)=>S===2?k.target.value:N))})]})]}),i("div",{className:"flex items-center justify-between",children:[a("button",{className:" bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:_,children:m!==null?"Update":"Add"}),i("div",{className:"text-gray-700 font-bold",children:[C.length," Entered"]})]})]}),an=async(e,t,n,r)=>{const s=e==="math"?` Generate with out explain json array for ${t} ${r} problems within the range of ${n[0]} to ${n[1]}, each with three options, in the format: "{number: {num1: <num1>, num2: <num2>, operator: '<operator>'}, choices: [<choice1>, <choice2>, <choice3>]}" all problems inside one array.`:"",p={method:"POST",url:"https://chatgpt-api8.p.rapidapi.com/",headers:{"content-type":"application/json","X-RapidAPI-Key":"30a778433amsh44ef6344d5a0937p1ca66cjsn5fdd378a630a","X-RapidAPI-Host":"chatgpt-api8.p.rapidapi.com"},data:[{content:s,role:"user"}]};try{const d=await Ht.request(p);return console.log(d.data),d.data.text}catch(d){console.error(d)}};function nn({setSubjectData:e}){const[t,n]=u.useState([20,37]),[r,s]=u.useState(""),[p,d]=u.useState(6),[b,m]=u.useState(!1),[_,C]=u.useState(!1),k=async()=>{C(!1),m(!0);let S=[];try{const z=await an("math",p,t,r);S=JSON.parse(z)}catch{C(!0),e([])}m(!1),S.length>0&&e(S)},N=S=>{n(S.target.value)};return i("div",{className:" w-full flex flex-col gap-10 items-center justify-center     mb-4",children:[a("div",{children:"Enter Number Range"}),i("div",{div:!0,className:" w-full md:w-[320px] flex items-center gap-4",children:[a("span",{children:t[0]}),a(za,{value:t,onChange:N}),a("span",{children:t[1]})]}),i(yt,{className:"w-full md:w-[60%]",children:[a(ea,{id:"demo-simple-select-label",children:"operator"}),i(ta,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:r,label:"operator",onChange:S=>s(S.target.value),children:[a(Ie,{value:"+",children:"+"}),a(Ie,{value:"-",children:"-"}),a(Ie,{value:"*",children:"*"}),a(Ie,{value:"/",children:"/"})]}),a(oa,{id:"outlined-number",value:p,onChange:S=>d(S.target.value),label:"Amount",type:"number",InputLabelProps:{shrink:!0},sx:{marginTop:"35px"}})]}),a(la,{variant:"contained",onClick:k,disabled:b,children:b?"Loading...":"Generate"}),_&&a("div",{children:"Try one more time.."})]})}function rn({subjectData:e,setSubjectData:t,dataType:n}){const[r,s]=u.useState(""),[p,d]=u.useState(""),[b,m]=u.useState(""),[_,C]=u.useState(["","",""]),[k,N]=u.useState(null),S=l=>{s(l.target.value)},z=l=>{d(l.target.value)},P=l=>{m(l.target.value)},F=()=>{if(r===""||p===""||b===""||_[0]===""||_[1]===""||_[2]===""){Qe.error("Please fill all the fields");return}if(k!==null){y();return}t(l=>[...l,{number:{num1:r,num2:p,operator:b},choices:_}]),s(""),d(""),m(""),C(["","",""])},y=()=>{t(l=>{const f=[...l];return f[k]={number:{num1:r,num2:p,operator:b},choices:_},f}),s(""),d(""),m(""),C(["","",""]),N(null)},h=l=>{var M,q,J;const f=e[l];N(l),s((M=f==null?void 0:f.number)==null?void 0:M.num1),d((q=f==null?void 0:f.number)==null?void 0:q.num2),m((J=f==null?void 0:f.number)==null?void 0:J.operator),C(f==null?void 0:f.choices)},A=l=>{t(f=>f.filter((M,q)=>q!==l))};return a("div",{className:"flex justify-center items-center  mb-10 ",children:i("div",{className:"bg-white w-full  rounded px-2 lg:px-8 pt-6 pb-8 mb-4 flex flex-col",children:[n==="customed"?a(tn,{num1:r,num2:p,operator:b,choices:_,handleNum1Change:S,handleNum2Change:z,handleOperatorChange:P,setChoices:C,addHandler:F,editIndex:k,subjectData:e}):a(nn,{setSubjectData:t}),a("div",{className:"mt-6",children:e.length===0?a("div",{className:" w-full p-4 border",children:a("p",{className:"text-gray-700 text-center",children:"No Data yet"})}):i("table",{className:"table-auto w-full",children:[a("thead",{children:i("tr",{children:[a("th",{className:"px-4 py-2",children:"Number 1"}),a("th",{className:"px-4 py-2",children:"Operator"}),a("th",{className:"px-4 py-2",children:"Number 2"}),a("th",{className:"px-4 py-2",children:"control"})]})}),a("tbody",{children:e.map(({number:l},f)=>i("tr",{children:[a("td",{className:"border px-4 py-2 text-center",children:l==null?void 0:l.num1}),a("td",{className:"border px-4 py-2 text-center",children:l==null?void 0:l.operator}),a("td",{className:"border px-4 py-2 text-center",children:l==null?void 0:l.num2}),i("td",{className:"border px-4 py-2 text-center flex justify-center gap-2",children:[a("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:()=>h(f),children:"Edit"}),a("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",onClick:()=>A(f),children:"Delete"})]})]},f))})]})})]})})}var et={},on=vt;Object.defineProperty(et,"__esModule",{value:!0});var Nt=et.default=void 0,ln=on(gt()),sn=xt,cn=(0,ln.default)((0,sn.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");Nt=et.default=cn;const dn=({setSubjectData:e,subjectData:t,dataType:n})=>a("div",{children:"AddArabicData"}),un=[{label:"word",value:"word"},{label:"sentence",value:"sentence"}],pn=[{label:"Random Numbers",value:"random"},{label:"Customed Numbers",value:"customed"}],In=()=>{Dt();const{_id:e}=Bt(F=>F.userSlice),[t,n]=u.useState(0),r=["Subject","type","Data"],[s,p]=u.useState(!1),[d,b]=u.useState("english"),[m,_]=u.useState(""),[C,k]=u.useState([]),[N,S]=u.useState(1);u.useEffect(()=>{k([])},[d]);const z=()=>{if(t===0&&d==="arabic"){n(2);return}t===2?C.map(y=>({_id:y==null?void 0:y._id,type:m,subjectName:d,stadge:N,number:(y==null?void 0:y.number)||0,choices:(y==null?void 0:y.choices)||[],image:y==null?void 0:y.wordImage,definitionInEn:(y==null?void 0:y.definitionInEn)||"",definitionInAc:(y==null?void 0:y.definitionInAc)||"",sentence:(y==null?void 0:y.sentence)||""})).forEach(y=>{p(!0),en(y,e).then(h=>{p(!1),Qe.success("data added successfully")}).catch(h=>{p(!1),console.log(h),h.response&&(console.log(h.response.data),console.log(h.response.status),console.log(h.response.headers)),Qe.error("something went wrong")})}):n(t<2?t+1:t)},P=()=>{if(t===2&&d==="arabic"){n(0);return}n(t!==0?t-1:t)};return i("div",{className:"add-data",children:[a(na,{}),i("div",{className:"add-data-wrapper",children:[i("div",{className:`flex ${t===2?" justify-between":" justify-center"} items-center px-2 md:px-10 flex-col md:flex-row   font-bold capitalize`,children:[i("div",{children:[a("span",{className:" font-semibold",children:"Add Subject Data"}),d&&i("span",{children:[" - ",d]}),N&&i("span",{children:[" - Grade : ",N]})]}),t===2&&i(Ut,{to:"/parent/asigntask",className:"flex rounded-md mt-2 md:mt-0 py-2  items-center flex-row  gap-2 bg-backBtnColor  font-normal  hover:bg-backBtnColorHoner cursor-pointer",children:[a(Nt,{fontSize:"small"})," Asign Task"]})]}),a(Xt,{steps:r,activeStep:t}),i("div",{className:"page",children:[a("div",{className:t===0?" block":"hidden",children:a(Yt,{setChildGrade:S,setSubjectName:b,selectGrade:!0})}),a("div",{className:t===1?" block":"hidden",children:a(ja,{title:"Choose type",setChooseValue:F=>_(F),choose:d==="english"?un:pn})}),a("div",{className:t===2?" block":"hidden",children:i(bt,{children:[d==="english"&&(m==="word"?a(Za,{setSubjectData:k}):a(Xa,{subjectData:C,setSubjectData:k})),d==="math"&&a(rn,{setSubjectData:k,subjectData:C,dataType:m}),d==="arabic"&&a(dn,{setSubjectData:k,subjectData:C,dataType:m})]})}),i("div",{className:"btns",children:[t>0&&a("button",{className:"previous",onClick:P,children:a("span",{children:"Previous"})}),a("button",{onClick:z,children:a("span",{children:t===2?"Submit":"Next"})})]})]})]}),s&&a(Zt,{})]})};export{In as default};
