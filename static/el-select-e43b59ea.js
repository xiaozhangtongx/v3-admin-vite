import{c1 as e,b9 as t,b8 as l,ba as o,bb as n,c2 as a,aG as s,aV as i,z as r,f as u,y as p,bo as c,bg as d,w as v,k as h,e as f,u as m,X as b,A as g,Y as y,a6 as C,_ as S,L as O,O as x,o as w,j as L,q as T,B as I,C as M,s as E,M as _,r as V,x as P,a2 as k,n as B,I as z,aN as A,bM as j,c3 as D,i as q,c4 as W,a5 as F,g as H,Q as K,E as R,a as $,b_ as N,V as Q,v as G,J as U,by as J,K as X,m as Y,l as Z,T as ee,$ as te,aj as le,N as oe,ab as ne,c0 as ae,ay as se,p as ie,t as re,D as ue}from"./index-c93c7ca7.js";import{b as pe,E as ce,a as de,e as ve}from"./el-scrollbar-a05a1e50.js";import{a as he,E as fe}from"./index-075cf729.js";import{E as me,t as be}from"./el-tag-ee036534.js";import{e as ge}from"./strings-7c4080ef.js";import{u as ye}from"./index-4c9f552f.js";import{u as Ce,a as Se}from"./use-form-item-fbe684d2.js";import{d as Oe,U as xe,C as we}from"./event-538c9b76.js";import{s as Le}from"./focus-trap-93d8bcee.js";import{U as Te,q as Ie,m as Me,e as Ee,S as _e,f as Ve,d as Pe}from"./el-input-1e11baf2.js";import{i as ke}from"./validator-5f3d05a8.js";var Be="__lodash_hash_undefined__";function ze(t){var l=-1,o=null==t?0:t.length;for(this.__data__=new e;++l<o;)this.add(t[l])}function Ae(e,t){for(var l=-1,o=null==e?0:e.length;++l<o;)if(t(e[l],l,e))return!0;return!1}ze.prototype.add=ze.prototype.push=function(e){return this.__data__.set(e,Be),this},ze.prototype.has=function(e){return this.__data__.has(e)};var je=1,De=2;function qe(e,t,l,o,n,a){var s=l&je,i=e.length,r=t.length;if(i!=r&&!(s&&r>i))return!1;var u=a.get(e),p=a.get(t);if(u&&p)return u==t&&p==e;var c=-1,d=!0,v=l&De?new ze:void 0;for(a.set(e,t),a.set(t,e);++c<i;){var h=e[c],f=t[c];if(o)var m=s?o(f,h,c,t,e,a):o(h,f,c,e,t,a);if(void 0!==m){if(m)continue;d=!1;break}if(v){if(!Ae(t,(function(e,t){if(s=t,!v.has(s)&&(h===e||n(h,e,l,o,a)))return v.push(t);var s}))){d=!1;break}}else if(h!==f&&!n(h,f,l,o,a)){d=!1;break}}return a.delete(e),a.delete(t),d}function We(e){var t=-1,l=Array(e.size);return e.forEach((function(e,o){l[++t]=[o,e]})),l}function Fe(e){var t=-1,l=Array(e.size);return e.forEach((function(e){l[++t]=e})),l}var He=1,Ke=2,Re="[object Boolean]",$e="[object Date]",Ne="[object Error]",Qe="[object Map]",Ge="[object Number]",Ue="[object RegExp]",Je="[object Set]",Xe="[object String]",Ye="[object Symbol]",Ze="[object ArrayBuffer]",et="[object DataView]",tt=t?t.prototype:void 0,lt=tt?tt.valueOf:void 0;var ot=1,nt=Object.prototype.hasOwnProperty;var at=1,st="[object Arguments]",it="[object Array]",rt="[object Object]",ut=Object.prototype.hasOwnProperty;function pt(e,t,n,a,s,i){var r=o(e),u=o(t),p=r?it:Me(e),c=u?it:Me(t),d=(p=p==st?rt:p)==rt,v=(c=c==st?rt:c)==rt,h=p==c;if(h&&Ee(e)){if(!Ee(t))return!1;r=!0,d=!1}if(h&&!d)return i||(i=new _e),r||Ve(e)?qe(e,t,n,a,s,i):function(e,t,o,n,a,s,i){switch(o){case et:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ze:return!(e.byteLength!=t.byteLength||!s(new Te(e),new Te(t)));case Re:case $e:case Ge:return l(+e,+t);case Ne:return e.name==t.name&&e.message==t.message;case Ue:case Xe:return e==t+"";case Qe:var r=We;case Je:var u=n&He;if(r||(r=Fe),e.size!=t.size&&!u)return!1;var p=i.get(e);if(p)return p==t;n|=Ke,i.set(e,t);var c=qe(r(e),r(t),n,a,s,i);return i.delete(e),c;case Ye:if(lt)return lt.call(e)==lt.call(t)}return!1}(e,t,p,n,a,s,i);if(!(n&at)){var f=d&&ut.call(e,"__wrapped__"),m=v&&ut.call(t,"__wrapped__");if(f||m){var b=f?e.value():e,g=m?t.value():t;return i||(i=new _e),s(b,g,n,a,i)}}return!!h&&(i||(i=new _e),function(e,t,l,o,n,a){var s=l&ot,i=Ie(e),r=i.length;if(r!=Ie(t).length&&!s)return!1;for(var u=r;u--;){var p=i[u];if(!(s?p in t:nt.call(t,p)))return!1}var c=a.get(e),d=a.get(t);if(c&&d)return c==t&&d==e;var v=!0;a.set(e,t),a.set(t,e);for(var h=s;++u<r;){var f=e[p=i[u]],m=t[p];if(o)var b=s?o(m,f,p,t,e,a):o(f,m,p,e,t,a);if(!(void 0===b?f===m||n(f,m,l,o,a):b)){v=!1;break}h||(h="constructor"==p)}if(v&&!h){var g=e.constructor,y=t.constructor;g==y||!("constructor"in e)||!("constructor"in t)||"function"==typeof g&&g instanceof g&&"function"==typeof y&&y instanceof y||(v=!1)}return a.delete(e),a.delete(t),v}(e,t,n,a,s,i))}function ct(e,t,l,o,a){return e===t||(null==e||null==t||!n(e)&&!n(t)?e!=e&&t!=t:pt(e,t,l,o,ct,a))}function dt(e,t){return ct(e,t)}const vt=new Map;let ht;function ft(e,t){let l=[];return Array.isArray(t.arg)?l=t.arg:i(t.arg)&&l.push(t.arg),function(o,n){const a=t.instance.popperRef,s=o.target,i=null==n?void 0:n.target,r=!t||!t.instance,u=!s||!i,p=e.contains(s)||e.contains(i),c=e===s,d=l.length&&l.some((e=>null==e?void 0:e.contains(s)))||l.length&&l.includes(i),v=a&&(a.contains(s)||a.contains(i));r||u||p||c||d||v||t.value(o,n)}}s&&(document.addEventListener("mousedown",(e=>ht=e)),document.addEventListener("mouseup",(e=>{for(const t of vt.values())for(const{documentHandler:l}of t)l(e,ht)})));const mt={beforeMount(e,t){vt.has(e)||vt.set(e,[]),vt.get(e).push({documentHandler:ft(e,t),bindingFn:t.value})},updated(e,t){vt.has(e)||vt.set(e,[]);const l=vt.get(e),o=l.findIndex((e=>e.bindingFn===t.oldValue)),n={documentHandler:ft(e,t),bindingFn:t.value};o>=0?l.splice(o,1,n):l.push(n)},unmounted(e){vt.delete(e)}},bt=Symbol("ElSelectGroup"),gt=Symbol("ElSelect");var yt=S(f({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const t=m("select"),l=b({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:o,itemSelected:n,isDisabled:a,select:s,hoverItem:i}=function(e,t){const l=r(gt),o=r(bt,{disabled:!1}),n=u((()=>"[object object]"===Object.prototype.toString.call(e.value).toLowerCase())),a=u((()=>l.props.multiple?g(l.props.modelValue,e.value):y(e.value,l.props.modelValue))),s=u((()=>{if(l.props.multiple){const e=l.props.modelValue||[];return!a.value&&e.length>=l.props.multipleLimit&&l.props.multipleLimit>0}return!1})),i=u((()=>e.label||(n.value?"":e.value))),f=u((()=>e.value||e.label||"")),m=u((()=>e.disabled||t.groupDisabled||s.value)),b=p(),g=(e=[],t)=>{if(n.value){const o=l.props.valueKey;return e&&e.some((e=>c(d(e,o))===d(t,o)))}return e&&e.includes(t)},y=(e,t)=>{if(n.value){const{valueKey:o}=l.props;return d(e,o)===d(t,o)}return e===t};v((()=>i.value),(()=>{e.created||l.props.remote||l.setSelected()})),v((()=>e.value),((t,o)=>{const{remote:n,valueKey:a}=l.props;if(Object.is(t,o)||(l.onOptionDestroy(o,b.proxy),l.onOptionCreate(b.proxy)),!e.created&&!n){if(a&&"object"==typeof t&&"object"==typeof o&&t[a]===o[a])return;l.setSelected()}})),v((()=>o.disabled),(()=>{t.groupDisabled=o.disabled}),{immediate:!0});const{queryChange:C}=c(l);return v(C,(o=>{const{query:n}=h(o),a=new RegExp(ge(n),"i");t.visible=a.test(i.value)||e.created,t.visible||l.filteredOptionsCount--}),{immediate:!0}),{select:l,currentLabel:i,currentValue:f,itemSelected:a,isDisabled:m,hoverItem:()=>{e.disabled||o.disabled||(l.hoverIndex=l.optionsArray.indexOf(b.proxy))}}}(e,l),{visible:f,hover:S}=g(l),O=p().proxy;return s.onOptionCreate(O),y((()=>{const e=O.value,{selected:t}=s,l=(s.props.multiple?t:[t]).some((e=>e.value===O.value));C((()=>{s.cachedOptions.get(e)!==O||l||s.cachedOptions.delete(e)})),s.onOptionDestroy(e,O)})),{ns:t,currentLabel:o,itemSelected:n,isDisabled:a,select:s,hoverItem:i,visible:f,hover:S,selectOptionClick:function(){!0!==e.disabled&&!0!==l.groupDisabled&&s.handleOptionSelect(O,!0)},states:l}}}),[["render",function(e,t,l,o,n,a){return O((w(),L("li",{class:E([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:t[0]||(t[0]=(...t)=>e.hoverItem&&e.hoverItem(...t)),onClick:t[1]||(t[1]=_(((...t)=>e.selectOptionClick&&e.selectOptionClick(...t)),["stop"]))},[T(e.$slots,"default",{},(()=>[I("span",null,M(e.currentLabel),1)]))],34)),[[x,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);var Ct=S(f({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=r(gt),t=m("select"),l=u((()=>e.props.popperClass)),o=u((()=>e.props.multiple)),n=u((()=>e.props.fitInputWidth)),a=V("");function s(){var t;a.value=`${null==(t=e.selectWrapper)?void 0:t.offsetWidth}px`}return P((()=>{s(),k(e.selectWrapper,s)})),{ns:t,minWidth:a,popperClass:l,isMultiple:o,isFitInputWidth:n}}}),[["render",function(e,t,l,o,n,a){return w(),L("div",{class:E([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:B({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[T(e.$slots,"default")],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);const St=(e,t,l)=>{const{t:o}=z(),n=m("select");ye({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},u((()=>!1===e.suffixTransition)));const i=V(null),r=V(null),p=V(null),h=V(null),f=V(null),b=V(null),g=V(-1),y=A({query:""}),S=A(""),O=V([]);let x=0;const{form:w,formItem:L}=Ce(),T=u((()=>!e.filterable||e.multiple||!t.visible)),I=u((()=>e.disabled||(null==w?void 0:w.disabled))),M=u((()=>{const l=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:void 0!==e.modelValue&&null!==e.modelValue&&""!==e.modelValue;return e.clearable&&!I.value&&t.inputHovering&&l})),E=u((()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon)),_=u((()=>n.is("reverse",E.value&&t.visible&&e.suffixTransition))),P=u((()=>e.remote?300:0)),k=u((()=>e.loading?e.loadingText||o("el.select.loading"):(!e.remote||""!==t.query||0!==t.options.size)&&(e.filterable&&t.query&&t.options.size>0&&0===t.filteredOptionsCount?e.noMatchText||o("el.select.noMatch"):0===t.options.size?e.noDataText||o("el.select.noData"):null))),B=u((()=>{const e=Array.from(t.options.values()),l=[];return O.value.forEach((t=>{const o=e.findIndex((e=>e.currentLabel===t));o>-1&&l.push(e[o])})),l.length?l:e})),R=u((()=>Array.from(t.cachedOptions.values()))),$=u((()=>{const l=B.value.filter((e=>!e.created)).some((e=>e.currentLabel===t.query));return e.filterable&&e.allowCreate&&""!==t.query&&!l})),N=Se(),Q=u((()=>["small"].includes(N.value)?"small":"default")),G=u({get:()=>t.visible&&!1!==k.value,set(e){t.visible=e}});v([()=>I.value,()=>N.value,()=>null==w?void 0:w.size],(()=>{C((()=>{U()}))})),v((()=>e.placeholder),(e=>{t.cachedPlaceHolder=t.currentPlaceholder=e})),v((()=>e.modelValue),((l,o)=>{e.multiple&&(U(),l&&l.length>0||r.value&&""!==t.query?t.currentPlaceholder="":t.currentPlaceholder=t.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(t.query="",J(t.query))),Z(),e.filterable&&!e.multiple&&(t.inputLength=20),!dt(l,o)&&e.validateEvent&&(null==L||L.validate("change").catch((e=>Oe())))}),{flush:"post",deep:!0}),v((()=>t.visible),(o=>{var n,a,s;o?(null==(a=null==(n=p.value)?void 0:n.updatePopper)||a.call(n),e.filterable&&(t.filteredOptionsCount=t.optionsCount,t.query=e.remote?"":t.selectedLabel,e.multiple?null==(s=r.value)||s.focus():t.selectedLabel&&(t.currentPlaceholder=`${t.selectedLabel}`,t.selectedLabel=""),J(t.query),e.multiple||e.remote||(y.value.query="",D(y),D(S)))):(e.filterable&&(j(e.filterMethod)&&e.filterMethod(""),j(e.remoteMethod)&&e.remoteMethod("")),r.value&&r.value.blur(),t.query="",t.previousQuery=null,t.selectedLabel="",t.inputLength=20,t.menuVisibleOnFocus=!1,te(),C((()=>{r.value&&""===r.value.value&&0===t.selected.length&&(t.currentPlaceholder=t.cachedPlaceHolder)})),e.multiple||(t.selected&&(e.filterable&&e.allowCreate&&t.createdSelected&&t.createdLabel?t.selectedLabel=t.createdLabel:t.selectedLabel=t.selected.currentLabel,e.filterable&&(t.query=t.selectedLabel)),e.filterable&&(t.currentPlaceholder=t.cachedPlaceHolder))),l.emit("visible-change",o)})),v((()=>t.options.entries()),(()=>{var l,o,n;if(!s)return;null==(o=null==(l=p.value)?void 0:l.updatePopper)||o.call(l),e.multiple&&U();const a=(null==(n=f.value)?void 0:n.querySelectorAll("input"))||[];Array.from(a).includes(document.activeElement)||Z(),e.defaultFirstOption&&(e.filterable||e.remote)&&t.filteredOptionsCount&&Y()}),{flush:"post"}),v((()=>t.hoverIndex),(e=>{q(e)&&e>-1?g.value=B.value[e]||{}:g.value={},B.value.forEach((e=>{e.hover=g.value===e}))}));const U=()=>{C((()=>{var e,l;if(!i.value)return;const o=i.value.$el.querySelector("input");x=x||(o.clientHeight>0?o.clientHeight+2:0);const n=h.value,s=(r=N.value||(null==w?void 0:w.size),a[r||"default"]);var r;const u=s===x||x<=0?s:x;!(null===o.offsetParent)&&(o.style.height=(0===t.selected.length?u:Math.max(n?n.clientHeight+(n.clientHeight>u?6:0):0,u))-2+"px"),t.tagInMultiLine=Number.parseFloat(o.style.height)>=u,t.visible&&!1!==k.value&&(null==(l=null==(e=p.value)?void 0:e.updatePopper)||l.call(e))}))},J=async l=>{t.previousQuery===l||t.isOnComposition||(null!==t.previousQuery||!j(e.filterMethod)&&!j(e.remoteMethod)?(t.previousQuery=l,C((()=>{var e,l;t.visible&&(null==(l=null==(e=p.value)?void 0:e.updatePopper)||l.call(e))})),t.hoverIndex=-1,e.multiple&&e.filterable&&C((()=>{const l=15*r.value.value.length+20;t.inputLength=e.collapseTags?Math.min(50,l):l,X(),U()})),e.remote&&j(e.remoteMethod)?(t.hoverIndex=-1,e.remoteMethod(l)):j(e.filterMethod)?(e.filterMethod(l),D(S)):(t.filteredOptionsCount=t.optionsCount,y.value.query=l,D(y),D(S)),e.defaultFirstOption&&(e.filterable||e.remote)&&t.filteredOptionsCount&&(await C(),Y())):t.previousQuery=l)},X=()=>{""!==t.currentPlaceholder&&(t.currentPlaceholder=r.value.value?"":t.cachedPlaceHolder)},Y=()=>{const e=B.value.filter((e=>e.visible&&!e.disabled&&!e.states.groupDisabled)),l=e.find((e=>e.created)),o=e[0];t.hoverIndex=re(B.value,l||o)},Z=()=>{var l;if(!e.multiple){const o=ee(e.modelValue);return(null==(l=o.props)?void 0:l.created)?(t.createdLabel=o.props.value,t.createdSelected=!0):t.createdSelected=!1,t.selectedLabel=o.currentLabel,t.selected=o,void(e.filterable&&(t.query=t.selectedLabel))}t.selectedLabel="";const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach((e=>{o.push(ee(e))})),t.selected=o,C((()=>{U()}))},ee=l=>{let o;const n="object"===W(l).toLowerCase(),a="null"===W(l).toLowerCase(),s="undefined"===W(l).toLowerCase();for(let r=t.cachedOptions.size-1;r>=0;r--){const t=R.value[r];if(n?d(t.value,e.valueKey)===d(l,e.valueKey):t.value===l){o={value:l,currentLabel:t.currentLabel,isDisabled:t.isDisabled};break}}if(o)return o;const i={value:l,currentLabel:n?l.label:a||s?"":l};return e.multiple&&(i.hitState=!1),i},te=()=>{setTimeout((()=>{const l=e.valueKey;e.multiple?t.selected.length>0?t.hoverIndex=Math.min.apply(null,t.selected.map((e=>B.value.findIndex((t=>d(t,l)===d(e,l)))))):t.hoverIndex=-1:t.hoverIndex=B.value.findIndex((e=>ve(e)===ve(t.selected)))}),300)},le=()=>{var e;t.inputWidth=null==(e=i.value)?void 0:e.$el.offsetWidth},oe=Pe((()=>{e.filterable&&t.query!==t.selectedLabel&&(t.query=t.selectedLabel,J(t.query))}),P.value),ne=Pe((e=>{J(e.target.value)}),P.value),ae=t=>{dt(e.modelValue,t)||l.emit(we,t)},se=o=>{o.stopPropagation();const n=e.multiple?[]:"";if(!H(n))for(const e of t.selected)e.isDisabled&&n.push(e.value);l.emit(xe,n),ae(n),t.hoverIndex=-1,t.visible=!1,l.emit("clear")},ie=(o,n)=>{var a;if(e.multiple){const n=(e.modelValue||[]).slice(),s=re(n,o.value);s>-1?n.splice(s,1):(e.multipleLimit<=0||n.length<e.multipleLimit)&&n.push(o.value),l.emit(xe,n),ae(n),o.created&&(t.query="",J(""),t.inputLength=20),e.filterable&&(null==(a=r.value)||a.focus())}else l.emit(xe,o.value),ae(o.value),t.visible=!1;t.isSilentBlur=n,ue(),t.visible||C((()=>{pe(o)}))},re=(t=[],l)=>{if(!F(l))return t.indexOf(l);const o=e.valueKey;let n=-1;return t.some(((e,t)=>c(d(e,o))===d(l,o)&&(n=t,!0))),n},ue=()=>{t.softFocus=!0;const e=r.value||i.value;e&&(null==e||e.focus())},pe=e=>{var t,l,o,a,s;const i=Array.isArray(e)?e[0]:e;let r=null;if(null==i?void 0:i.value){const e=B.value.filter((e=>e.value===i.value));e.length>0&&(r=e[0].$el)}if(p.value&&r){const e=null==(a=null==(o=null==(l=null==(t=p.value)?void 0:t.popperRef)?void 0:l.contentRef)?void 0:o.querySelector)?void 0:a.call(o,`.${n.be("dropdown","wrap")}`);e&&Le(e,r)}null==(s=b.value)||s.handleScroll()},ce=e=>{if(!Array.isArray(t.selected))return;const l=t.selected[t.selected.length-1];return l?!0===e||!1===e?(l.hitState=e,e):(l.hitState=!l.hitState,l.hitState):void 0},de=e=>{var l;e&&!t.mouseEnter||I.value||(t.menuVisibleOnFocus?t.menuVisibleOnFocus=!1:p.value&&p.value.isFocusInsideContent()||(t.visible=!t.visible),t.visible&&(null==(l=r.value||i.value)||l.focus()))},ve=t=>F(t.value)?d(t.value,e.valueKey):t.value,fe=u((()=>B.value.filter((e=>e.visible)).every((e=>e.disabled)))),me=u((()=>t.selected.slice(0,e.maxCollapseTags))),be=u((()=>t.selected.slice(e.maxCollapseTags))),ge=e=>{if(t.visible){if(0!==t.options.size&&0!==t.filteredOptionsCount&&!t.isOnComposition&&!fe.value){"next"===e?(t.hoverIndex++,t.hoverIndex===t.options.size&&(t.hoverIndex=0)):"prev"===e&&(t.hoverIndex--,t.hoverIndex<0&&(t.hoverIndex=t.options.size-1));const l=B.value[t.hoverIndex];!0!==l.disabled&&!0!==l.states.groupDisabled&&l.visible||ge(e),C((()=>pe(g.value)))}}else t.visible=!0};return{optionList:O,optionsArray:B,selectSize:N,handleResize:()=>{var t,l;le(),null==(l=null==(t=p.value)?void 0:t.updatePopper)||l.call(t),e.multiple&&U()},debouncedOnInputChange:oe,debouncedQueryChange:ne,deletePrevTag:o=>{if(o.target.value.length<=0&&!ce()){const t=e.modelValue.slice();t.pop(),l.emit(xe,t),ae(t)}1===o.target.value.length&&0===e.modelValue.length&&(t.currentPlaceholder=t.cachedPlaceHolder)},deleteTag:(o,n)=>{const a=t.selected.indexOf(n);if(a>-1&&!I.value){const t=e.modelValue.slice();t.splice(a,1),l.emit(xe,t),ae(t),l.emit("remove-tag",n.value)}o.stopPropagation()},deleteSelected:se,handleOptionSelect:ie,scrollToOption:pe,readonly:T,resetInputHeight:U,showClose:M,iconComponent:E,iconReverse:_,showNewOption:$,collapseTagSize:Q,setSelected:Z,managePlaceholder:X,selectDisabled:I,emptyText:k,toggleLastOptionHitState:ce,resetInputState:e=>{e.code!==K.backspace&&ce(!1),t.inputLength=15*r.value.value.length+20,U()},handleComposition:e=>{const l=e.target.value;if("compositionend"===e.type)t.isOnComposition=!1,C((()=>J(l)));else{const e=l[l.length-1]||"";t.isOnComposition=!he(e)}},onOptionCreate:e=>{t.optionsCount++,t.filteredOptionsCount++,t.options.set(e.value,e),t.cachedOptions.set(e.value,e)},onOptionDestroy:(e,l)=>{t.options.get(e)===l&&(t.optionsCount--,t.filteredOptionsCount--,t.options.delete(e))},handleMenuEnter:()=>{C((()=>pe(t.selected)))},handleFocus:o=>{t.softFocus?t.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!t.visible&&(t.menuVisibleOnFocus=!0),t.visible=!0),l.emit("focus",o))},blur:()=>{var e;t.visible=!1,null==(e=i.value)||e.blur()},handleBlur:e=>{C((()=>{t.isSilentBlur?t.isSilentBlur=!1:l.emit("blur",e)})),t.softFocus=!1},handleClearClick:e=>{se(e)},handleClose:()=>{t.visible=!1},handleKeydownEscape:e=>{t.visible&&(e.preventDefault(),e.stopPropagation(),t.visible=!1)},toggleMenu:de,selectOption:()=>{t.visible?B.value[t.hoverIndex]&&ie(B.value[t.hoverIndex],void 0):de()},getValueKey:ve,navigateOptions:ge,dropMenuVisible:G,queryChange:y,groupQueryChange:S,showTagList:me,collapseTagList:be,reference:i,input:r,tooltipRef:p,tags:h,selectWrapper:f,scrollbar:b,handleMouseEnter:()=>{t.mouseEnter=!0},handleMouseLeave:()=>{t.mouseEnter=!1}}};var Ot=f({name:"ElOptions",emits:["update-options"],setup(e,{slots:t,emit:l}){let o=[];return()=>{var e,n;const a=null==(e=t.default)?void 0:e.call(t),s=[];return a.length&&function e(t){Array.isArray(t)&&t.forEach((t=>{var l,o,n,a;const i=null==(l=(null==t?void 0:t.type)||{})?void 0:l.name;"ElOptionGroup"===i?e(H(t.children)||Array.isArray(t.children)||!j(null==(o=t.children)?void 0:o.default)?t.children:null==(n=t.children)?void 0:n.default()):"ElOption"===i?s.push(null==(a=t.props)?void 0:a.label):Array.isArray(t.children)&&e(t.children)}))}(null==(n=a[0])?void 0:n.children),function(e,t){if(e.length!==t.length)return!1;for(const[l]of e.entries())if(e[l]!=t[l])return!1;return!0}(s,o)||(o=s,l("update-options",s)),a}}});const xt="ElSelect",wt=f({name:xt,componentName:xt,components:{ElInput:fe,ElSelectMenu:Ct,ElOption:yt,ElOptions:Ot,ElTag:me,ElScrollbar:pe,ElTooltip:ce,ElIcon:R},directives:{ClickOutside:mt},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:ke},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},popperOptions:{type:Object,default:()=>({})},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},maxCollapseTags:{type:Number,default:1},teleported:de.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:$,default:N},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:$,default:Q},tagType:{...be.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:ve,default:"bottom-start"}},emits:[xe,we,"remove-tag","clear","visible-change","focus","blur"],setup(e,t){const l=m("select"),o=m("input"),{t:n}=z(),a=function(e){const{t:t}=z();return b({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:t("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}(e),{optionList:s,optionsArray:i,selectSize:r,readonly:p,handleResize:c,collapseTagSize:d,debouncedOnInputChange:v,debouncedQueryChange:f,deletePrevTag:y,deleteTag:S,deleteSelected:O,handleOptionSelect:x,scrollToOption:w,setSelected:L,resetInputHeight:T,managePlaceholder:I,showClose:M,selectDisabled:E,iconComponent:_,iconReverse:V,showNewOption:B,emptyText:A,toggleLastOptionHitState:j,resetInputState:D,handleComposition:q,onOptionCreate:W,onOptionDestroy:F,handleMenuEnter:H,handleFocus:K,blur:R,handleBlur:$,handleClearClick:N,handleClose:Q,handleKeydownEscape:U,toggleMenu:J,selectOption:X,getValueKey:Y,navigateOptions:Z,dropMenuVisible:ee,reference:te,input:le,tooltipRef:oe,tags:ne,selectWrapper:ae,scrollbar:se,queryChange:ie,groupQueryChange:re,handleMouseEnter:ue,handleMouseLeave:pe,showTagList:ce,collapseTagList:de}=St(e,a,t),{focus:ve}=(he=te,{focus:()=>{var e,t;null==(t=null==(e=he.value)?void 0:e.focus)||t.call(e)}});var he;const{inputWidth:fe,selected:me,inputLength:be,filteredOptionsCount:ge,visible:ye,softFocus:Ce,selectedLabel:Se,hoverIndex:Oe,query:we,inputHovering:Le,currentPlaceholder:Te,menuVisibleOnFocus:Ie,isOnComposition:Me,isSilentBlur:Ee,options:_e,cachedOptions:Ve,optionsCount:Pe,prefixWidth:ke,tagInMultiLine:Be}=g(a),ze=u((()=>{const t=[l.b()],o=h(r);return o&&t.push(l.m(o)),e.disabled&&t.push(l.m("disabled")),t})),Ae=u((()=>({maxWidth:h(fe)-32+"px",width:"100%"}))),je=u((()=>({maxWidth:`${h(fe)>123?h(fe)-123:h(fe)-75}px`})));G(gt,b({props:e,options:_e,optionsArray:i,cachedOptions:Ve,optionsCount:Pe,filteredOptionsCount:ge,hoverIndex:Oe,handleOptionSelect:x,onOptionCreate:W,onOptionDestroy:F,selectWrapper:ae,selected:me,setSelected:L,queryChange:ie,groupQueryChange:re})),P((()=>{a.cachedPlaceHolder=Te.value=e.placeholder||(()=>n("el.select.placeholder")),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(Te.value=""),k(ae,c),e.remote&&e.multiple&&T(),C((()=>{const e=te.value&&te.value.$el;if(e&&(fe.value=e.getBoundingClientRect().width,t.slots.prefix)){const t=e.querySelector(`.${o.e("prefix")}`);ke.value=Math.max(t.getBoundingClientRect().width+5,30)}})),L()})),e.multiple&&!Array.isArray(e.modelValue)&&t.emit(xe,[]),!e.multiple&&Array.isArray(e.modelValue)&&t.emit(xe,"");const De=u((()=>{var e,t;return null==(t=null==(e=oe.value)?void 0:e.popperRef)?void 0:t.contentRef}));return{onOptionsRendered:e=>{s.value=e},tagInMultiLine:Be,prefixWidth:ke,selectSize:r,readonly:p,handleResize:c,collapseTagSize:d,debouncedOnInputChange:v,debouncedQueryChange:f,deletePrevTag:y,deleteTag:S,deleteSelected:O,handleOptionSelect:x,scrollToOption:w,inputWidth:fe,selected:me,inputLength:be,filteredOptionsCount:ge,visible:ye,softFocus:Ce,selectedLabel:Se,hoverIndex:Oe,query:we,inputHovering:Le,currentPlaceholder:Te,menuVisibleOnFocus:Ie,isOnComposition:Me,isSilentBlur:Ee,options:_e,resetInputHeight:T,managePlaceholder:I,showClose:M,selectDisabled:E,iconComponent:_,iconReverse:V,showNewOption:B,emptyText:A,toggleLastOptionHitState:j,resetInputState:D,handleComposition:q,handleMenuEnter:H,handleFocus:K,blur:R,handleBlur:$,handleClearClick:N,handleClose:Q,handleKeydownEscape:U,toggleMenu:J,selectOption:X,getValueKey:Y,navigateOptions:Z,dropMenuVisible:ee,focus:ve,reference:te,input:le,tooltipRef:oe,popperPaneRef:De,tags:ne,selectWrapper:ae,scrollbar:se,wrapperKls:ze,selectTagsStyle:Ae,nsSelect:l,tagTextStyle:je,handleMouseEnter:ue,handleMouseLeave:pe,showTagList:ce,collapseTagList:de}}}),Lt=["disabled","autocomplete"],Tt={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};var It=S(wt,[["render",function(e,t,l,o,n,a){const s=U("el-tag"),i=U("el-tooltip"),r=U("el-icon"),u=U("el-input"),p=U("el-option"),c=U("el-options"),d=U("el-scrollbar"),v=U("el-select-menu"),h=J("click-outside");return O((w(),L("div",{ref:"selectWrapper",class:E(e.wrapperKls),onMouseenter:t[21]||(t[21]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:t[22]||(t[22]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:t[23]||(t[23]=_(((...t)=>e.toggleMenu&&e.toggleMenu(...t)),["stop"]))},[X(i,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:Y((()=>[I("div",{class:"select-trigger",onMouseenter:t[19]||(t[19]=t=>e.inputHovering=!0),onMouseleave:t[20]||(t[20]=t=>e.inputHovering=!1)},[e.multiple?(w(),L("div",{key:0,ref:"tags",class:E(e.nsSelect.e("tags")),style:B(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(w(),Z(ee,{key:0,onAfterLeave:e.resetInputHeight},{default:Y((()=>[I("span",{class:E([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(w(!0),L(te,null,le(e.showTagList,(t=>(w(),Z(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:l=>e.deleteTag(l,t)},{default:Y((()=>[I("span",{class:E(e.nsSelect.e("tags-text")),style:B(e.tagTextStyle)},M(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128)),e.selected.length>e.maxCollapseTags?(w(),Z(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:Y((()=>[e.collapseTagsTooltip?(w(),Z(i,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:Y((()=>[I("span",{class:E(e.nsSelect.e("tags-text"))},"+ "+M(e.selected.length-e.maxCollapseTags),3)])),content:Y((()=>[I("div",{class:E(e.nsSelect.e("collapse-tags"))},[(w(!0),L(te,null,le(e.collapseTagList,(t=>(w(),L("div",{key:e.getValueKey(t),class:E(e.nsSelect.e("collapse-tag"))},[X(s,{class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:l=>e.deleteTag(l,t)},{default:Y((()=>[I("span",{class:E(e.nsSelect.e("tags-text")),style:B({maxWidth:e.inputWidth-75+"px"})},M(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])],2)))),128))],2)])),_:1},8,["disabled","effect","teleported"])):(w(),L("span",{key:1,class:E(e.nsSelect.e("tags-text"))},"+ "+M(e.selected.length-e.maxCollapseTags),3))])),_:1},8,["size","type"])):oe("v-if",!0)],2)])),_:1},8,["onAfterLeave"])):oe("v-if",!0),e.collapseTags?oe("v-if",!0):(w(),Z(ee,{key:1,onAfterLeave:e.resetInputHeight},{default:Y((()=>[I("span",{class:E([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(w(!0),L(te,null,le(e.selected,(t=>(w(),Z(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:l=>e.deleteTag(l,t)},{default:Y((()=>[I("span",{class:E(e.nsSelect.e("tags-text")),style:B({maxWidth:e.inputWidth-75+"px"})},M(t.currentLabel),7)])),_:2},1032,["closable","size","hit","type","onClose"])))),128))],2)])),_:1},8,["onAfterLeave"])),e.filterable?O((w(),L("input",{key:2,ref:"input","onUpdate:modelValue":t[0]||(t[0]=t=>e.query=t),type:"text",class:E([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:B({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:e.inputLength/(e.inputWidth-32)+"%",maxWidth:e.inputWidth-42+"px"}),onFocus:t[1]||(t[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:t[2]||(t[2]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:t[3]||(t[3]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[t[4]||(t[4]=(...t)=>e.resetInputState&&e.resetInputState(...t)),t[5]||(t[5]=ne(_((t=>e.navigateOptions("next")),["prevent"]),["down"])),t[6]||(t[6]=ne(_((t=>e.navigateOptions("prev")),["prevent"]),["up"])),t[7]||(t[7]=ne(((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t)),["esc"])),t[8]||(t[8]=ne(_(((...t)=>e.selectOption&&e.selectOption(...t)),["stop","prevent"]),["enter"])),t[9]||(t[9]=ne(((...t)=>e.deletePrevTag&&e.deletePrevTag(...t)),["delete"])),t[10]||(t[10]=ne((t=>e.visible=!1),["tab"]))],onCompositionstart:t[11]||(t[11]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:t[12]||(t[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:t[13]||(t[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:t[14]||(t[14]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,Lt)),[[ae,e.query]]):oe("v-if",!0)],6)):oe("v-if",!0),X(u,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":t[15]||(t[15]=t=>e.selectedLabel=t),type:"text",placeholder:"function"==typeof e.currentPlaceholder?e.currentPlaceholder():e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:E([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[t[16]||(t[16]=ne(_((t=>e.navigateOptions("next")),["stop","prevent"]),["down"])),t[17]||(t[17]=ne(_((t=>e.navigateOptions("prev")),["stop","prevent"]),["up"])),ne(_(e.selectOption,["stop","prevent"]),["enter"]),ne(e.handleKeydownEscape,["esc"]),t[18]||(t[18]=ne((t=>e.visible=!1),["tab"]))]},se({suffix:Y((()=>[e.iconComponent&&!e.showClose?(w(),Z(r,{key:0,class:E([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:Y((()=>[(w(),Z(ie(e.iconComponent)))])),_:1},8,["class"])):oe("v-if",!0),e.showClose&&e.clearIcon?(w(),Z(r,{key:1,class:E([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:Y((()=>[(w(),Z(ie(e.clearIcon)))])),_:1},8,["class","onClick"])):oe("v-if",!0)])),_:2},[e.$slots.prefix?{name:"prefix",fn:Y((()=>[I("div",Tt,[T(e.$slots,"prefix")])]))}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)])),content:Y((()=>[X(v,null,{default:Y((()=>[O(X(d,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:E([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&0===e.filteredOptionsCount)])},{default:Y((()=>[e.showNewOption?(w(),Z(p,{key:0,value:e.query,created:!0},null,8,["value"])):oe("v-if",!0),X(c,{onUpdateOptions:e.onOptionsRendered},{default:Y((()=>[T(e.$slots,"default")])),_:3},8,["onUpdateOptions"])])),_:3},8,["wrap-class","view-class","class"]),[[x,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&0===e.options.size)?(w(),L(te,{key:0},[e.$slots.empty?T(e.$slots,"empty",{key:0}):(w(),L("p",{key:1,class:E(e.nsSelect.be("dropdown","empty"))},M(e.emptyText),3))],64)):oe("v-if",!0)])),_:3})])),_:3},8,["visible","placement","teleported","popper-class","popper-options","effect","transition","persistent","onShow"])],34)),[[h,e.handleClose,e.popperPaneRef]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);var Mt=S(f({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const t=m("select"),l=V(!0),o=p(),n=V([]);G(bt,b({...g(e)}));const a=r(gt);P((()=>{n.value=s(o.subTree)}));const s=e=>{const t=[];return Array.isArray(e.children)&&e.children.forEach((e=>{var l;e.type&&"ElOption"===e.type.name&&e.component&&e.component.proxy?t.push(e.component.proxy):(null==(l=e.children)?void 0:l.length)&&t.push(...s(e))})),t},{groupQueryChange:i}=c(a);return v(i,(()=>{l.value=n.value.some((e=>!0===e.visible))}),{flush:"post"}),{visible:l,ns:t}}}),[["render",function(e,t,l,o,n,a){return O((w(),L("ul",{class:E(e.ns.be("group","wrap"))},[I("li",{class:E(e.ns.be("group","title"))},M(e.label),3),I("li",null,[I("ul",{class:E(e.ns.b("group"))},[T(e.$slots,"default")],2)])],2)),[[x,e.visible]])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Et=re(It,{Option:yt,OptionGroup:Mt}),_t=ue(yt);ue(Mt);export{mt as C,_t as E,Et as a,ct as b,dt as i};
