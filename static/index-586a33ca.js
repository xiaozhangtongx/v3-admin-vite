import{d as e,i as a,j as s,s as l,b as r,e as o,z as d,w as i,a3 as t,a4 as n,r as u,H as p,I as m,o as c,h as f,a5 as g,a6 as _,a7 as v,a8 as x,a9 as h,m as w,A as b,D as y,_ as V}from"./index-1b14cce8.js";import{_ as z}from"./index.vue_vue_type_script_setup_true_lang-137d1865.js";const k={class:"login-container"},j={class:"login-card"},q=(e=>(p("data-v-42c3d1f6"),e=e(),m(),e))((()=>d("div",{class:"title"},[d("img",{src:"/v3-admin-vite/static/logo-text-2-eef467fb.png"})],-1))),C={class:"content"},M=V(e({__name:"index",setup(e){const p=a(),m=s(null),V=s(!1),M=s(""),U=l({username:"admin",password:"12345678",code:""}),I=()=>{U.code="",M.value="",n().then((e=>{M.value=e.data}))},K={username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:8,max:16,message:"长度在 8 到 16 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},A=()=>{var e;null==(e=m.value)||e.validate((e=>{if(!e)return!1;V.value=!0,y().login({username:U.username,password:U.password,code:U.code}).then((()=>{p.push({path:"/"})})).catch((()=>{I(),U.password=""})).finally((()=>{V.value=!1}))}))};return I(),(e,a)=>{const s=u("el-input"),l=u("el-form-item"),n=u("el-icon"),p=u("el-image"),y=u("el-button"),D=u("el-form");return c(),r("div",k,[o(z,{class:"theme-switch"}),d("div",j,[q,d("div",C,[o(D,{ref_key:"loginFormRef",ref:m,model:U,rules:K,onKeyup:t(A,["enter"])},{default:i((()=>[o(l,{prop:"username"},{default:i((()=>[o(s,{modelValue:U.username,"onUpdate:modelValue":a[0]||(a[0]=e=>U.username=e),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":f(g),size:"large"},null,8,["modelValue","prefix-icon"])])),_:1}),o(l,{prop:"password"},{default:i((()=>[o(s,{modelValue:U.password,"onUpdate:modelValue":a[1]||(a[1]=e=>U.password=e),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":f(_),size:"large","show-password":""},null,8,["modelValue","prefix-icon"])])),_:1}),o(l,{prop:"code"},{default:i((()=>[o(s,{modelValue:U.code,"onUpdate:modelValue":a[2]||(a[2]=e=>U.code=e),modelModifiers:{trim:!0},placeholder:"验证码",type:"text",tabindex:"3","prefix-icon":f(v),maxlength:"7",size:"large"},{append:i((()=>[o(p,{src:M.value,draggable:"false",onClick:I},{placeholder:i((()=>[o(n,null,{default:i((()=>[o(f(x))])),_:1})])),error:i((()=>[o(n,null,{default:i((()=>[o(f(h))])),_:1})])),_:1},8,["src"])])),_:1},8,["modelValue","prefix-icon"])])),_:1}),o(y,{loading:V.value,type:"primary",size:"large",onClick:w(A,["prevent"])},{default:i((()=>[b(" 登 录 ")])),_:1},8,["loading","onClick"])])),_:1},8,["model","onKeyup"])])])])}}}),[["__scopeId","data-v-42c3d1f6"]]);export{M as default};
