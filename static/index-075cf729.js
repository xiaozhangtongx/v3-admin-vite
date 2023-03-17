import{aG as e,f as a,y as t,cb as o,r as n,i as l,b as s,bm as i,d as r,a as u,a4 as p,g as d,e as c,aU as v,bp as f,u as m,aN as y,b$ as x,cj as b,ck as g,a2 as h,w,a6 as S,x as k,a7 as z,L as C,O as I,o as $,j as E,N as F,$ as j,s as P,k as B,q as M,B as _,l as N,m as V,p as A,E as O,F as R,K as H,b_ as K,M as T,bX as L,C as W,n as U,_ as q,a5 as D,t as G}from"./index-c93c7ca7.js";import{U as X,d as Z}from"./event-538c9b76.js";import{u as J,b as Q,a as Y,c as ee}from"./use-form-item-fbe684d2.js";import{i as ae}from"./focus-trap-93d8bcee.js";const te=()=>e&&/firefox/i.test(window.navigator.userAgent),oe=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),ne=["class","style"],le=/^on[A-Z]/,se=(e={})=>{const{excludeListeners:n=!1,excludeKeys:l}=e,s=a((()=>((null==l?void 0:l.value)||[]).concat(ne))),i=t();return a(i?()=>{var e;return o(Object.entries(null==(e=i.proxy)?void 0:e.$attrs).filter((([e])=>!(s.value.includes(e)||n&&le.test(e)))))}:()=>({}))};let ie;const re=`\n  height:0 !important;\n  visibility:hidden !important;\n  ${te()?"":"overflow:hidden !important;"}\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n`,ue=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function pe(e,a=1,t){var o;ie||(ie=document.createElement("textarea"),document.body.appendChild(ie));const{paddingSize:n,borderSize:s,boxSizing:i,contextStyle:r}=function(e){const a=window.getComputedStyle(e),t=a.getPropertyValue("box-sizing"),o=Number.parseFloat(a.getPropertyValue("padding-bottom"))+Number.parseFloat(a.getPropertyValue("padding-top")),n=Number.parseFloat(a.getPropertyValue("border-bottom-width"))+Number.parseFloat(a.getPropertyValue("border-top-width"));return{contextStyle:ue.map((e=>`${e}:${a.getPropertyValue(e)}`)).join(";"),paddingSize:o,borderSize:n,boxSizing:t}}(e);ie.setAttribute("style",`${r};${re}`),ie.value=e.value||e.placeholder||"";let u=ie.scrollHeight;const p={};"border-box"===i?u+=s:"content-box"===i&&(u-=n),ie.value="";const d=ie.scrollHeight-n;if(l(a)){let e=d*a;"border-box"===i&&(e=e+n+s),u=Math.max(e,u),p.minHeight=`${e}px`}if(l(t)){let e=d*t;"border-box"===i&&(e=e+n+s),u=Math.min(e,u)}return p.height=`${u}px`,null==(o=ie.parentNode)||o.removeChild(ie),ie=void 0,p}const de=s({id:{type:String,default:void 0},size:i,disabled:Boolean,modelValue:{type:r([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:r([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:u},prefixIcon:{type:u},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:r([Object,Array,String]),default:()=>p({})}}),ce={[X]:e=>d(e),input:e=>d(e),change:e=>d(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},ve=["role"],fe=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],me=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],ye=c({name:"ElInput",inheritAttrs:!1});const xe=G(q(c({...ye,props:de,emits:ce,setup(t,{expose:o,emit:l}){const s=t,i=v(),r=f(),u=a((()=>{const e={};return"combobox"===s.containerRole&&(e["aria-haspopup"]=i["aria-haspopup"],e["aria-owns"]=i["aria-owns"],e["aria-expanded"]=i["aria-expanded"]),e})),p=a((()=>["textarea"===s.type?re.b():ie.b(),ie.m(ne.value),ie.is("disabled",le.value),ie.is("exceed",Me.value),{[ie.b("group")]:r.prepend||r.append,[ie.bm("group","append")]:r.append,[ie.bm("group","prepend")]:r.prepend,[ie.m("prefix")]:r.prefix||s.prefixIcon,[ie.m("suffix")]:r.suffix||s.suffixIcon||s.clearable||s.showPassword,[ie.bm("suffix","password-clear")]:Fe.value&&je.value},i.class])),d=a((()=>[ie.e("wrapper"),ie.is("focus",ce.value)])),c=se({excludeKeys:a((()=>Object.keys(u.value)))}),{form:q,formItem:G}=J(),{inputId:te}=Q(s,{formItemContext:G}),ne=Y(),le=ee(),ie=m("input"),re=m("textarea"),ue=y(),de=y(),ce=n(!1),ye=n(!1),xe=n(!1),be=n(!1),ge=n(),he=y(s.inputStyle),we=a((()=>ue.value||de.value)),Se=a((()=>{var e;return null!=(e=null==q?void 0:q.statusIcon)&&e})),ke=a((()=>(null==G?void 0:G.validateState)||"")),ze=a((()=>ke.value&&x[ke.value])),Ce=a((()=>be.value?b:g)),Ie=a((()=>[i.style,s.inputStyle])),$e=a((()=>[s.inputStyle,he.value,{resize:s.resize}])),Ee=a((()=>ae(s.modelValue)?"":String(s.modelValue))),Fe=a((()=>s.clearable&&!le.value&&!s.readonly&&!!Ee.value&&(ce.value||ye.value))),je=a((()=>s.showPassword&&!le.value&&!s.readonly&&!!Ee.value&&(!!Ee.value||ce.value))),Pe=a((()=>s.showWordLimit&&!!c.value.maxlength&&("text"===s.type||"textarea"===s.type)&&!le.value&&!s.readonly&&!s.showPassword)),Be=a((()=>Ee.value.length)),Me=a((()=>!!Pe.value&&Be.value>Number(c.value.maxlength))),_e=a((()=>!!r.suffix||!!s.suffixIcon||Fe.value||s.showPassword||Pe.value||!!ke.value&&Se.value)),[Ne,Ve]=function(e){const a=n();return[function(){if(null==e.value)return;const{selectionStart:t,selectionEnd:o,value:n}=e.value;if(null==t||null==o)return;const l=n.slice(0,Math.max(0,t)),s=n.slice(Math.max(0,o));a.value={selectionStart:t,selectionEnd:o,value:n,beforeTxt:l,afterTxt:s}},function(){if(null==e.value||null==a.value)return;const{value:t}=e.value,{beforeTxt:o,afterTxt:n,selectionStart:l}=a.value;if(null==o||null==n||null==l)return;let s=t.length;if(t.endsWith(n))s=t.length-n.length;else if(t.startsWith(o))s=o.length;else{const e=o[l-1],a=t.indexOf(e,l-1);-1!==a&&(s=a+1)}e.value.setSelectionRange(s,s)}]}(ue);h(de,(e=>{if(!Pe.value||"both"!==s.resize)return;const a=e[0],{width:t}=a.contentRect;ge.value={right:`calc(100% - ${t+15+6}px)`}}));const Ae=()=>{const{type:a,autosize:t}=s;if(e&&"textarea"===a&&de.value)if(t){const e=D(t)?t.minRows:void 0,a=D(t)?t.maxRows:void 0;he.value={...pe(de.value,e,a)}}else he.value={minHeight:pe(de.value).minHeight}},Oe=()=>{const e=we.value;e&&e.value!==Ee.value&&(e.value=Ee.value)},Re=async e=>{Ne();let{value:a}=e.target;s.formatter&&(a=s.parser?s.parser(a):a,a=s.formatter(a)),xe.value||(a!==Ee.value?(l(X,a),l("input",a),await S(),Oe(),Ve()):Oe())},He=e=>{l("change",e.target.value)},Ke=e=>{l("compositionstart",e),xe.value=!0},Te=e=>{var a;l("compositionupdate",e);const t=null==(a=e.target)?void 0:a.value,o=t[t.length-1]||"";xe.value=!oe(o)},Le=e=>{l("compositionend",e),xe.value&&(xe.value=!1,Re(e))},We=()=>{be.value=!be.value,Ue()},Ue=async()=>{var e;await S(),null==(e=we.value)||e.focus()},qe=e=>{ce.value=!0,l("focus",e)},De=e=>{var a;ce.value=!1,l("blur",e),s.validateEvent&&(null==(a=null==G?void 0:G.validate)||a.call(G,"blur").catch((e=>Z())))},Ge=e=>{ye.value=!1,l("mouseleave",e)},Xe=e=>{ye.value=!0,l("mouseenter",e)},Ze=e=>{l("keydown",e)},Je=()=>{l(X,""),l("change",""),l("clear"),l("input","")};return w((()=>s.modelValue),(()=>{var e;S((()=>Ae())),s.validateEvent&&(null==(e=null==G?void 0:G.validate)||e.call(G,"change").catch((e=>Z())))})),w(Ee,(()=>Oe())),w((()=>s.type),(async()=>{await S(),Oe(),Ae()})),k((()=>{!s.formatter&&s.parser,Oe(),S(Ae)})),o({input:ue,textarea:de,ref:we,textareaStyle:$e,autosize:z(s,"autosize"),focus:Ue,blur:()=>{var e;return null==(e=we.value)?void 0:e.blur()},select:()=>{var e;null==(e=we.value)||e.select()},clear:Je,resizeTextarea:Ae}),(e,a)=>C(($(),E("div",R(B(u),{class:B(p),style:B(Ie),role:e.containerRole,onMouseenter:Xe,onMouseleave:Ge}),[F(" input "),"textarea"!==e.type?($(),E(j,{key:0},[F(" prepend slot "),e.$slots.prepend?($(),E("div",{key:0,class:P(B(ie).be("group","prepend"))},[M(e.$slots,"prepend")],2)):F("v-if",!0),_("div",{class:P(B(d))},[F(" prefix slot "),e.$slots.prefix||e.prefixIcon?($(),E("span",{key:0,class:P(B(ie).e("prefix"))},[_("span",{class:P(B(ie).e("prefix-inner")),onClick:Ue},[M(e.$slots,"prefix"),e.prefixIcon?($(),N(B(O),{key:0,class:P(B(ie).e("icon"))},{default:V((()=>[($(),N(A(e.prefixIcon)))])),_:1},8,["class"])):F("v-if",!0)],2)],2)):F("v-if",!0),_("input",R({id:B(te),ref_key:"input",ref:ue,class:B(ie).e("inner")},B(c),{type:e.showPassword?be.value?"text":"password":e.type,disabled:B(le),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:s.form,onCompositionstart:Ke,onCompositionupdate:Te,onCompositionend:Le,onInput:Re,onFocus:qe,onBlur:De,onChange:He,onKeydown:Ze}),null,16,fe),F(" suffix slot "),B(_e)?($(),E("span",{key:1,class:P(B(ie).e("suffix"))},[_("span",{class:P(B(ie).e("suffix-inner")),onClick:Ue},[B(Fe)&&B(je)&&B(Pe)?F("v-if",!0):($(),E(j,{key:0},[M(e.$slots,"suffix"),e.suffixIcon?($(),N(B(O),{key:0,class:P(B(ie).e("icon"))},{default:V((()=>[($(),N(A(e.suffixIcon)))])),_:1},8,["class"])):F("v-if",!0)],64)),B(Fe)?($(),N(B(O),{key:1,class:P([B(ie).e("icon"),B(ie).e("clear")]),onMousedown:T(B(L),["prevent"]),onClick:Je},{default:V((()=>[H(B(K))])),_:1},8,["class","onMousedown"])):F("v-if",!0),B(je)?($(),N(B(O),{key:2,class:P([B(ie).e("icon"),B(ie).e("password")]),onClick:We},{default:V((()=>[($(),N(A(B(Ce))))])),_:1},8,["class"])):F("v-if",!0),B(Pe)?($(),E("span",{key:3,class:P(B(ie).e("count"))},[_("span",{class:P(B(ie).e("count-inner"))},W(B(Be))+" / "+W(B(c).maxlength),3)],2)):F("v-if",!0),B(ke)&&B(ze)&&B(Se)?($(),N(B(O),{key:4,class:P([B(ie).e("icon"),B(ie).e("validateIcon"),B(ie).is("loading","validating"===B(ke))])},{default:V((()=>[($(),N(A(B(ze))))])),_:1},8,["class"])):F("v-if",!0)],2)],2)):F("v-if",!0)],2),F(" append slot "),e.$slots.append?($(),E("div",{key:1,class:P(B(ie).be("group","append"))},[M(e.$slots,"append")],2)):F("v-if",!0)],64)):($(),E(j,{key:1},[F(" textarea "),_("textarea",R({id:B(te),ref_key:"textarea",ref:de,class:B(re).e("inner")},B(c),{tabindex:e.tabindex,disabled:B(le),readonly:e.readonly,autocomplete:e.autocomplete,style:B($e),"aria-label":e.label,placeholder:e.placeholder,form:s.form,onCompositionstart:Ke,onCompositionupdate:Te,onCompositionend:Le,onInput:Re,onFocus:qe,onBlur:De,onChange:He,onKeydown:Ze}),null,16,me),B(Pe)?($(),E("span",{key:0,style:U(ge.value),class:P(B(ie).e("count"))},W(B(Be))+" / "+W(B(c).maxlength),7)):F("v-if",!0)],64))],16,ve)),[[I,"hidden"!==e.type]])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]));export{xe as E,oe as a,te as i,se as u};
