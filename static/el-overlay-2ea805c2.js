import{b as e,a as o,d as l,a9 as a,y as t,aL as n,r as s,bI as u,f as c,h as d,w as r,a6 as p,x as f,bJ as i,a0 as y,aG as v}from"./index-c93c7ca7.js";import{U as m}from"./event-538c9b76.js";import{u as C}from"./index-7cc03888.js";import{a as b}from"./index-f1a1c631.js";const B=e({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:o},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),g={close:()=>!0},x=e({...B,appendToBody:{type:Boolean,default:!1},beforeClose:{type:l(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),D={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[m]:e=>a(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},F=(e,o)=>{const l=t().emit,{nextZIndex:a}=n();let B="";const g=C(),x=C(),D=s(!1),F=s(!1),I=s(!1),S=s(e.zIndex||a());let h,O;const w=u("namespace",i),A=c((()=>{const o={},l=`--${w.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=d(e.width))),o})),k=c((()=>e.alignCenter?{display:"flex"}:{}));function j(){null==O||O(),null==h||h(),e.openDelay&&e.openDelay>0?({stop:h}=y((()=>E()),e.openDelay)):E()}function z(){null==h||h(),null==O||O(),e.closeDelay&&e.closeDelay>0?({stop:O}=y((()=>L()),e.closeDelay)):L()}function N(){e.beforeClose?e.beforeClose((function(e){e||(F.value=!0,D.value=!1)})):z()}function E(){v&&(D.value=!0)}function L(){D.value=!1}return e.lockScroll&&b(D),r((()=>e.modelValue),(t=>{t?(F.value=!1,j(),I.value=!0,S.value=e.zIndex?S.value++:a(),p((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):D.value&&z()})),r((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),f((()=>{e.modelValue&&(D.value=!0,I.value=!0,j())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(m,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){l("close")},handleClose:N,onModalClick:function(){e.closeOnClickModal&&N()},close:z,doClose:L,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&N()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:x,closed:F,style:A,overlayDialogStyle:k,rendered:I,visible:D,zIndex:S}};export{D as a,B as b,g as c,x as d,F as u};
