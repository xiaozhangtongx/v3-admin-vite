import{K as e,e as t,r,X as a,a6 as o,aq as l,j as n,m as i,F as s,J as d,o as u,a8 as m}from"./index-c93c7ca7.js";import{E as c}from"./el-button-64bfd0ca.js";import{g as p,E as f,d as g}from"./index-f1471001.js";import"./index-4c9f552f.js";import"./use-form-item-fbe684d2.js";import"./index-7cc03888.js";import"./index-075cf729.js";import"./event-538c9b76.js";import"./focus-trap-93d8bcee.js";import"./index-f1a1c631.js";import"./vnode-03157b3f.js";import"./validator-5f3d05a8.js";const v={default:({row:t,column:r})=>{const a=t[r.field];return[e("span",{class:`el-tag el-tag--${"admin"===a?"":"warning"} el-tag--plain`},[a])]}},h={default:({row:t,column:r})=>{let a="danger",o="禁用";return t[r.field]&&(a="success",o="启用"),[e("span",{class:`el-tag el-tag--${a} el-tag--plain`},[o])]}},x={class:"app-container"},y=t({name:"VxeTable"}),b=t({...y,setup(t){const y=r(),b=r(),w=r(),C=a({title:"",showClose:!0,escClosable:!0,maskClosable:!0,beforeHideMethod:()=>{var e;return null==(e=b.value)||e.clearValidate(),Promise.resolve()}}),k=a({loading:!0,autoResize:!0,pagerConfig:{align:"right"},formConfig:{items:[{field:"username",itemRender:{name:"$input",props:{placeholder:"用户名",clearable:!0}}},{field:"phone",itemRender:{name:"$input",props:{placeholder:"手机号",clearable:!0}}},{itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"查询",status:"primary"}},{props:{type:"reset",content:"重置"}}]}}]},toolbarConfig:{refresh:!0,custom:!0,slots:{buttons:"toolbar-btns"}},customConfig:{checkMethod:({column:e})=>!["username"].includes(e.field)},columns:[{type:"checkbox",width:"50px"},{field:"username",title:"用户名"},{field:"roles",title:"角色",slots:v},{field:"phone",title:"手机号"},{field:"email",title:"邮箱"},{field:"status",title:"状态",slots:h},{field:"createTime",title:"创建时间"},{title:"操作",width:"150px",fixed:"right",showOverflow:!1,slots:{default:"row-operate"}}],proxyConfig:{seq:!0,form:!0,props:{total:"total"},ajax:{query:({page:e,form:t})=>(k.loading=!0,P.clearTable(),new Promise((r=>{let a=0,o=[];const l=e=>{if(e&&e.data){const t=e.data;Number.isInteger(t.total)&&(a=t.total),Array.isArray(t.list)&&(o=t.list)}k.loading=!1,r({total:a,result:o})},n={username:t.username||void 0,phone:t.phone||void 0,size:e.pageSize,currentPage:e.currentPage};p(n).then(l).catch(l)})))}}}),j=a({span:24,titleWidth:"100px",loading:!1,titleColon:!1,data:{username:"",password:""},items:[{field:"username",title:"用户名",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{field:"password",title:"密码",itemRender:{name:"$input",props:{placeholder:"请输入"}}},{align:"right",itemRender:{name:"$buttons",children:[{props:{content:"取消"},events:{click:()=>{var e;return null==(e=w.value)?void 0:e.close()}}},{props:{type:"submit",content:"确定",status:"primary"},events:{click:()=>P.onSubmitForm()}}]}}],rules:{username:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入")}],password:[{required:!0,validator:({itemValue:e})=>e?e.trim()?void 0:new Error("空格无效"):new Error("请输入")}]}}),P=a({isUpdate:!0,commitQuery:()=>{var e;return null==(e=y.value)?void 0:e.commitProxy("query")},clearTable:()=>{var e;return null==(e=y.value)?void 0:e.reloadData([])},onShowModal:e=>{var t,r,a;e?(P.isUpdate=!0,C.title="修改用户",j.data.username=e.username):(P.isUpdate=!1,C.title="新增用户"),j.items&&(null==(r=null==(t=j.items[0])?void 0:t.itemRender)?void 0:r.props)&&(j.items[0].itemRender.props.disabled=P.isUpdate),null==(a=w.value)||a.open(),o((()=>{var e,t;!P.isUpdate&&(null==(e=b.value)||e.reset()),null==(t=b.value)||t.clearValidate()}))},onSubmitForm:()=>{var e;j.loading||null==(e=b.value)||e.validate((e=>{if(e)return;j.loading=!0;const t=e=>{var t;j.loading=!1,e||(null==(t=w.value)||t.close(),l.success("操作成功"),!P.isUpdate&&P.afterInsert(),P.commitQuery())};P.isUpdate,setTimeout((()=>t()),1e3)}))},afterInsert:()=>{var e,t;const r=null==(t=null==(e=y.value)?void 0:e.getProxyInfo())?void 0:t.pager;if(r){r.currentPage*r.pageSize===r.total&&++r.currentPage}},onDelete:e=>{const t=`确定 <strong style='color:red;'>删除</strong> 用户 <strong style='color:#409eff;'>${e.username}</strong> ？`;f.confirm(t,"提示",{type:"warning",showClose:!0,closeOnClickModal:!0,closeOnPressEscape:!0,cancelButtonText:"取消",confirmButtonText:"确定",dangerouslyUseHTMLString:!0}).then((()=>{g(e.id).then((()=>{l.success("删除成功"),P.afterDelete(),P.commitQuery()})).catch((()=>1))})).catch((()=>1))},afterDelete:()=>{var e,t;const r=y.value.getData(),a=null==(t=null==(e=y.value)?void 0:e.getProxyInfo())?void 0:t.pager;a&&a.currentPage>1&&1===r.length&&--a.currentPage},moreFunc:()=>{}});return(t,r)=>{const a=d("vxe-button"),o=c,l=d("vxe-grid"),p=d("vxe-form"),f=d("vxe-modal");return u(),n("div",x,[e(l,s({ref_key:"xGridDom",ref:y},k),{"toolbar-btns":i((()=>[e(a,{status:"primary",icon:"vxe-icon-add",onClick:r[0]||(r[0]=e=>P.onShowModal())},{default:i((()=>[m(" 新增用户 ")])),_:1}),e(a,{status:"danger",icon:"vxe-icon-delete"},{default:i((()=>[m(" 批量删除 ")])),_:1})])),"row-operate":i((({row:t})=>[e(o,{link:"",type:"primary",onClick:e=>P.onShowModal(t)},{default:i((()=>[m(" 修改 ")])),_:2},1032,["onClick"]),e(o,{link:"",type:"danger",onClick:e=>P.onDelete(t)},{default:i((()=>[m(" 删除 ")])),_:2},1032,["onClick"])])),_:1},16),e(f,s({ref_key:"xModalDom",ref:w},C),{default:i((()=>[e(p,s({ref_key:"xFormDom",ref:b},j),null,16)])),_:1},16)])}}});export{b as default};
