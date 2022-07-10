(function(){"use strict";var e={8383:function(e,t,a){var l=a(9963),n=a(309),o=a.n(n),i=a(6252);const r=(0,i.Uk)(" 模板管理 "),u=(0,i.Uk)(" 字段管理 "),m=(0,i.Uk)(" 在线生成 "),d=(0,i.Uk)(" 全局变量 ");function s(e,t,a,l,n,o){const s=(0,i.up)("Icon"),p=(0,i.up)("MenuItem"),c=(0,i.up)("Menu"),h=(0,i.up)("Col"),f=(0,i.up)("Row"),g=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(f,{gutter:20,style:{"margin-bottom":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{span:18,offset:2},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{mode:"horizontal",theme:e.theme,"active-name":n.activeName,onOnSelect:o.changeRouter},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{name:"tpl",to:"tpl"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{type:"ios-paper"}),r])),_:1}),(0,i.Wm)(p,{name:"tableColumn",to:"tableColumn"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{type:"md-planet"}),u])),_:1}),(0,i.Wm)(p,{name:"online",to:"online"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{type:"md-send"}),m])),_:1}),(0,i.Wm)(p,{name:"global",to:"global"},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{type:"md-settings"}),d])),_:1})])),_:1},8,["theme","active-name","onOnSelect"])])),_:1})])),_:1}),(0,i.Wm)(f,{gutter:20},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{span:18,offset:2,style:{background:"#f5f5f5",padding:"10px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((({Component:t})=>["/tableColumn"!==e.$route.path?((0,i.wg)(),(0,i.j4)(i.Ob,{key:0},[((0,i.wg)(),(0,i.j4)((0,i.LL)(t)))],1024)):((0,i.wg)(),(0,i.j4)((0,i.LL)(t),{key:1}))])),_:1})])),_:1})])),_:1})],64)}var p={name:"App",data(){return{routerKey:"1",activeName:"/tpl"}},mounted(){let e=this.$route.path;this.activeName=e.slice(1),console.log(e,this.$route,this.activeName)},methods:{changeRouter(e){this.routerKey=e,console.log(this.$route)},toPage(e){this.$router.push(e)}}},c=a(3744);const h=(0,c.Z)(p,[["render",s]]);var f=h,g=a(2201);var w=a(3577);const b=(0,i.Uk)("新增模板"),y=(0,i._)("span",null,"开启",-1),k=(0,i._)("span",null,"关闭",-1),v=(0,i.Uk)("查看模板"),C=(0,i.Uk)("复制"),_=(0,i.Uk)("编辑"),N=(0,i.Uk)("删除"),W={style:{float:"right"}},O=(0,i.Uk)("保存");function T(e,t,a,l,n,o){const r=(0,i.up)("Input"),u=(0,i.up)("Col"),m=(0,i.up)("Button"),d=(0,i.up)("Row"),s=(0,i.up)("Card"),p=(0,i.up)("Switch"),c=(0,i.up)("Poptip"),h=(0,i.up)("Option"),f=(0,i.up)("Select"),g=(0,i.up)("FormItem"),T=(0,i.up)("Form"),V=(0,i.up)("Drawer"),I=(0,i.up)("Table");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{gutter:18},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{span:"12"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:n.queryParam.tplName,"onUpdate:modelValue":t[0]||(t[0]=e=>n.queryParam.tplName=e),placeholder:"请输入模板名称或模板组名查询",search:!0,onOnEnter:o.getData},null,8,["modelValue","onOnEnter"])])),_:1}),(0,i.Wm)(u,{span:"12"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{type:"primary",onClick:o.add},{default:(0,i.w5)((()=>[b])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,i.Wm)(I,{border:"",columns:n.columns,data:n.data},{name:(0,i.w5)((({row:e})=>[(0,i._)("strong",null,(0,w.zw)(e.name),1)])),status:(0,i.w5)((({row:e,index:t})=>[(0,i.Wm)(p,{size:"large",modelValue:e.status,"onUpdate:modelValue":t=>e.status=t,"true-value":"1",onOnChange:t=>o.changeStatus(t,e)},{open:(0,i.w5)((()=>[y])),close:(0,i.w5)((()=>[k])),_:2},1032,["modelValue","onUpdate:modelValue","onOnChange"])])),action:(0,i.w5)((({row:a,index:l})=>[(0,i.Wm)(m,{type:"info",size:"small",style:{"margin-right":"5px"},onClick:t[1]||(t[1]=t=>e.$router.push("/online"))},{default:(0,i.w5)((()=>[v])),_:1}),(0,i.Wm)(m,{type:"primary",size:"small",style:{"margin-right":"5px"},onClick:e=>o.copyOk(a)},{default:(0,i.w5)((()=>[C])),_:2},1032,["onClick"]),(0,i.Wm)(m,{type:"warning",size:"small",style:{"margin-right":"5px"},onClick:e=>o.edit(a)},{default:(0,i.w5)((()=>[_])),_:2},1032,["onClick"]),(0,i.Wm)(c,{confirm:"",width:"300px",title:"是否删除？",onOnOk:e=>o.remove(a.id),"word-wrap":""},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{type:"error",size:"small",style:{"margin-right":"5px"}},{default:(0,i.w5)((()=>[N])),_:1})])),_:2},1032,["onOnOk"]),(0,i.Wm)(V,{title:"模板编辑",closable:!1,modelValue:n.editDrawerStatus,"onUpdate:modelValue":t[8]||(t[8]=e=>n.editDrawerStatus=e),placement:"bottom",height:"60"},{default:(0,i.w5)((()=>[(0,i.Wm)(T,{model:n.formItem,"label-width":180},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{label:"模板组名"},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{modelValue:n.formItem.groupName,"onUpdate:modelValue":t[2]||(t[2]=e=>n.formItem.groupName=e),"allow-create":"",onOnCreate:o.handleCreate,filterable:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.groupOptions,((e,t)=>((0,i.wg)(),(0,i.j4)(h,{key:t,value:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,w.zw)(e),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["modelValue","onOnCreate"])])),_:2},1024),(0,i.Wm)(g,{label:"模板名称"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:n.formItem.tplName,"onUpdate:modelValue":t[3]||(t[3]=e=>n.formItem.tplName=e),placeholder:"请输入模板名称"},{append:(0,i.w5)((()=>[(0,i._)("span",null,(0,w.zw)(n.randomAppend),1)])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(g,{label:"模板类型"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:n.formItem.tplType,"onUpdate:modelValue":t[4]||(t[4]=e=>n.formItem.tplType=e),placeholder:"请输入模板类型"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(g,{label:"生成文件路径"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:n.formItem.filePath,"onUpdate:modelValue":t[5]||(t[5]=e=>n.formItem.filePath=e),placeholder:"请输入生成文件路径（本地绝对路径，支持变量）"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(g,{label:"生成文件名"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:n.formItem.fileName,"onUpdate:modelValue":t[6]||(t[6]=e=>n.formItem.fileName=e),placeholder:"请输入生成文件名（支持变量）"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(g,{label:"备注"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,{modelValue:n.formItem.remark,"onUpdate:modelValue":t[7]||(t[7]=e=>n.formItem.remark=e),type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入备注"},null,8,["modelValue"])])),_:1})])),_:2},1032,["model"]),(0,i._)("div",W,[(0,i.Wm)(m,{type:"primary",onClick:o.saveOk},{default:(0,i.w5)((()=>[O])),_:1},8,["onClick"])])])),_:2},1032,["modelValue"])])),_:1},8,["columns","data"])],64)}var V=a(9669),I=a.n(V);const D=I().create({timeout:6e3}),U=e=>(e.response&&console.log(e.response),Promise.reject(e));D.interceptors.request.use((e=>e),U),D.interceptors.response.use((e=>{if("blob"===e.request.responseType)return e;console.log(e);let t=["/tpl/list"];return 200==e.data.code&&"get"!=e.config.method&&-1==t.indexOf(e.config.url)&&n.Message.success(e.data.message),500==e.data.code&&n.Message.error(e.data.message),e.data}),U);var x=D;function S(e={}){return x.post("/tpl/list",e)}function j(e){return x.post("/tpl/update",e)}function q(e){return x.get("/tpl/remove",{params:e})}function P(){return x.get("/tpl//group/list")}var E={data(){return{columns:[{title:"模板组名",key:"groupName"},{title:"模板名称",key:"tplName"},{title:"状态",slot:"status",width:"100px"},{title:"模板类型",key:"tplType",width:"100px"},{title:"生成文件路径",key:"filePath"},{title:"生成文件名",key:"fileName"},{title:"备注",key:"remark"},{title:"创建时间",key:"createTime"},{title:"更新时间",key:"updateTime"},{title:"操作",slot:"action",width:350,align:"center"}],data:[],editDrawerStatus:!1,groupOptions:[],formItem:{groupName:"",tplName:"",tplType:"",remark:""},queryParam:{},randomAppend:Math.random(1).toString(16).slice(2)+".enjoy"}},mounted(){this.getData(),this.getGroupName()},methods:{getGroupName(){P().then((e=>{this.groupOptions=e.data}))},handleCreate(e){this.groupOptions.push(e)},getData(){S({...this.queryParam}).then((e=>{this.data=e.data}))},changeStatus(e,t){console.log(e,t);let a={...t};console.log(e,t),a.status=e?1:0,j(a).then((e=>{}))},remove(e){q({id:e}).then((e=>{this.getData()}))},edit(e){this.editDrawerStatus=!0,this.randomAppend="."+Math.random(1).toString(16).slice(2)+".enjoy",this.formItem={...e},this.formItem.tplName=this.formItem.tplName.split(".")[0]},add(){this.editDrawerStatus=!0,this.formItem={}},saveOk(){this.formItem.tplName=this.formItem.tplName+this.randomAppend,j(this.formItem).then((e=>{this.editDrawerStatus=!1,this.getData()}))},copyOk(e){this.formItem={...e},this.randomAppend="."+Math.random(1).toString(16).slice(2)+".enjoy",this.formItem.tplName=this.formItem.tplName.split(".")[0]+this.randomAppend,this.formItem.id=null,j(this.formItem).then((e=>{this.getData()}))}}};const z=(0,c.Z)(E,[["render",T]]);var G=z;const A=(0,i.Uk)("预览状态"),F=(0,i.Uk)("编辑状态"),L=(0,i.Uk)("保存模板"),M=(0,i._)("br",null,null,-1),R=(0,i._)("br",null,null,-1),$=(0,i.Uk)(" Enjoy 模板引擎语法：https://jfinal.com/doc/6-1 ");function H(e,t,a,n,o,r){const u=(0,i.up)("Option"),m=(0,i.up)("Select"),d=(0,i.up)("Button"),s=(0,i.up)("Card"),p=(0,i.up)("Editor"),c=(0,i.up)("Col"),h=(0,i.up)("Row");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{modelValue:o.selectTpl,"onUpdate:modelValue":t[0]||(t[0]=e=>o.selectTpl=e),filterable:"",clearable:"",style:{width:"300px","margin-right":"10px"},placeholder:"请选择模板",onOnChange:r.changeTpl},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.tplOptions,(e=>((0,i.wg)(),(0,i.j4)(u,{value:e.value,key:e.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,w.zw)(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onOnChange"]),(0,i.Wm)(m,{modelValue:o.tableName,"onUpdate:modelValue":t[1]||(t[1]=e=>o.tableName=e),filterable:"",clearable:"",style:{width:"250px","margin-right":"10px"},onOnChange:r.queryTableColumn,placeholder:"请选择数据库表"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.tableNameOptions,((e,t)=>((0,i.wg)(),(0,i.j4)(u,{key:t,value:e.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,w.zw)(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onOnChange"]),o.showTpl?((0,i.wg)(),(0,i.j4)(d,{key:1,shape:"circle",type:"warning",onClick:t[3]||(t[3]=e=>{o.showTpl=!1,r.submit(!0)}),icon:"ios-create",style:{"margin-right":"10px"}},{default:(0,i.w5)((()=>[F])),_:1})):((0,i.wg)(),(0,i.j4)(d,{key:0,shape:"circle",onClick:t[2]||(t[2]=e=>{o.showTpl=!0,r.submit(!1)}),icon:"ios-eye",style:{"margin-right":"10px"},type:"success"},{default:(0,i.w5)((()=>[A])),_:1})),(0,i.Wm)(d,{shape:"circle",onClick:r.saveTplContent,disabled:!o.selectTplItem},{default:(0,i.w5)((()=>[L])),_:1},8,["onClick","disabled"]),M,R,$])),_:1}),(0,i.Wm)(s,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(h,{gutter:16},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(c,{span:"24"},{default:(0,i.w5)((()=>[o.tplStatus?((0,i.wg)(),(0,i.j4)(p,{key:0,ref:"myEditor",content:o.tplContent,onGetData:r.getTplContentData},null,8,["content","onGetData"])):(0,i.kq)("",!0)])),_:1},512),[[l.F8,o.showTpl]]),(0,i.wy)((0,i.Wm)(c,{span:"24"},{default:(0,i.w5)((()=>[o.showView?((0,i.wg)(),(0,i.j4)(p,{key:0,ref:"myEditor2",content:o.viewContent},null,8,["content"])):(0,i.kq)("",!0)])),_:1},512),[[l.F8,!o.showTpl]])])),_:1})])),_:1})])}function J(e,t,a,l,n,o){const r=(0,i.up)("Editor",!0);return(0,i.wg)(),(0,i.j4)(r,{ref:"editor",height:"70vh",theme:"light",defaultLanguage:a.language,defaultValue:a.content,onChange:o.changeContent},null,8,["defaultLanguage","defaultValue","onChange"])}var K=a(9180),Y={data(){return{data:""}},props:{language:{type:String,default:"java"},content:{type:String,default:""}},components:{Editor:K.ZP},created(){},methods:{changeContent(e,t){this.data=e,this.$emit("getData",e)}}};const B=(0,c.Z)(Y,[["render",J]]);var Z=B;function Q(){return x.get("/table-info-list")}function X(e){return x.get("/table-columns",{params:{...e}})}function ee(e,t){return x.put("/table-columns?tableName="+e,t)}function te(e){return x.post("/code/gen",e)}function ae(e){return x.post("/code/local-code-gen",e)}function le(e){return x.post("/code/download-code-gen",e)}var ne={data(){return{showTpl:!0,tplContent:"",viewContent:"",showView:!0,tplStatus:!0,tplOptions:[],selectTpl:void 0,selectTplItem:void 0,tableList:[],tableName:"",tableColumnData:[]}},components:{Editor:Z},created(){this.initTplList(),this.queryTableName()},methods:{saveTplContent(){this.selectTplItem.content=this.tplContent,j(this.selectTplItem),this.initTplList()},changeTpl(e){e||(e={content:""}),this.tplStatus=!1,this.showTpl=!0,this.tplContent=e.content,this.$nextTick((()=>{this.tplStatus=!0})),this.selectTplItem=e},initTplList(){S().then((e=>{this.tplOptions=e.data.map((e=>({label:e.tplName,value:e})))}))},getTplContentData(e){console.log("=====!",e),this.tplContent=e},submit(e){e&&(this.showView=!1,te({content:this.tplContent,data:{columns:this.tableColumnData},tableName:this.tableName}).then((e=>{let t=e.data;this.viewContent=t,this.$nextTick((()=>{this.showView=!0}))})))},queryTableName(){Q().then((e=>{this.tableNameOptions=e.data.map((e=>({label:e.tableName+"（"+e.tableComment+"）",value:e.tableName})))}))},queryTableColumn(e){console.log(e),e?X({tableName:e}).then((e=>{this.tableColumnData=e.data})):this.data=[]}}};const oe=(0,c.Z)(ne,[["render",H]]);var ie=oe;const re=(0,i.Uk)("鼠标双击行编辑，即时修改保存"),ue=(0,i.Uk)("字段保存"),me=(0,i.Uk)("本地生成"),de=(0,i.Uk)("打包下载"),se=(0,i.Uk)("编辑");function pe(e,t,a,n,o,r){const u=(0,i.up)("Alert"),m=(0,i.up)("Option"),d=(0,i.up)("Select"),s=(0,i.up)("Button"),p=(0,i.up)("ButtonGroup"),c=(0,i.up)("Card"),h=(0,i.up)("Table"),f=(0,i.up)("Input"),g=(0,i.up)("FormItem"),b=(0,i.up)("Form"),y=(0,i.up)("Drawer");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{"show-icon":""},{default:(0,i.w5)((()=>[re])),_:1}),(0,i.Wm)(d,{modelValue:o.tableName,"onUpdate:modelValue":t[0]||(t[0]=e=>o.tableName=e),filterable:"",clearable:"",placeholder:"请选择表名",style:{width:"250px","margin-right":"20px"},onOnChange:r.queryTableColumn},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.tableNameOptions,((e,t)=>((0,i.wg)(),(0,i.j4)(m,{key:t,value:e.value},{default:(0,i.w5)((()=>[(0,i.Uk)((0,w.zw)(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue","onOnChange"]),(0,i.Wm)(d,{modelValue:o.groupName,"onUpdate:modelValue":t[1]||(t[1]=e=>o.groupName=e),filterable:"",placeholder:"请选择模板组",style:{width:"250px","margin-right":"20px"}},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.groupOptions,((e,t)=>((0,i.wg)(),(0,i.j4)(m,{key:t,value:e},{default:(0,i.w5)((()=>[(0,i.Uk)((0,w.zw)(e),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i.Wm)(s,{type:"primary",onClick:r.saveOk,disabled:!o.tableName},{default:(0,i.w5)((()=>[ue])),_:1},8,["onClick","disabled"]),(0,i.Wm)(s,{type:"warning",onClick:r.localGen,disabled:!o.tableName||!o.groupName},{default:(0,i.w5)((()=>[me])),_:1},8,["onClick","disabled"]),(0,i.Wm)(s,{type:"dashed",disabled:!o.tableName||!o.groupName,onClick:r.download},{default:(0,i.w5)((()=>[de])),_:1},8,["disabled","onClick"])])),_:1})])),_:1}),(0,i.Wm)(h,{border:"",columns:o.columns,data:o.data,onOnRowDblclick:r.updateRow},{action:(0,i.w5)((({row:e,index:t})=>[(0,i.Wm)(s,{type:"warning",size:"small",style:{"margin-right":"5px"},onClick:t=>r.edit(e)},{default:(0,i.w5)((()=>[se])),_:2},1032,["onClick"])])),_:1},8,["columns","data","onOnRowDblclick"]),(0,i.Wm)(y,{title:"编辑",closable:!1,modelValue:o.editDrawerStatus,"onUpdate:modelValue":t[2]||(t[2]=e=>o.editDrawerStatus=e),placement:"bottom",height:"80",onOnClose:r.editOk},{default:(0,i.w5)((()=>[(0,i.Wm)(b,{model:o.formItem,"label-width":180},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.columns,((e,t)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(g,{label:e["title"],key:t},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{modelValue:o.formItem[e["key"]],"onUpdate:modelValue":t=>o.formItem[e["key"]]=t,onOnChange:r.changeOk},null,8,["modelValue","onUpdate:modelValue","onOnChange"])])),_:2},1032,["label"])),[[l.F8,e["key"]]]))),128))])),_:1},8,["model"])])),_:1},8,["modelValue","onOnClose"])])}function ce(){return x.get("/global-variable")}function he(e){return x.put("/global-variable",e)}a(3162);var fe={data(){return{tableName:"",tableNameOptions:[],columns:[{title:"字段排序",key:"sort",fixed:"left",width:100},{title:"字段名",key:"columnName",width:200},{title:"字段类型",key:"columnType",minWidth:100},{title:"字段描述",key:"columnComment",minWidth:100},{title:"主键",key:"isPk",minWidth:100},{title:"自增",key:"isIncrement",minWidth:100},{title:"必填",key:"isRequired",minWidth:100},{title:"Java字段",key:"javaField",minWidth:100},{title:"Java类型",key:"javaType",minWidth:100},{title:"字段查询",key:"isQuery",minWidth:100},{title:"查询方式",key:"queryType",minWidth:100}],data:[],tableNameOptions:[],groupName:"",tplGenFileName:"",editDrawerStatus:!1,formItem:{}}},created(){this.initPage()},methods:{initPage(){this.queryTableName(),this.getGroupName(),this.getDynamicColumn()},queryTableName(){Q().then((e=>{this.tableNameOptions=e.data.map((e=>({label:e.tableName+"（"+e.tableComment+"）",value:e.tableName})))}))},queryTableColumn(e){e?(this.tplGenFileName=this.formatToHump(e),console.log(this.tplGenFileName),X({tableName:e}).then((e=>{this.data=e.data}))):this.data=[]},getGroupName(){P().then((e=>{this.groupOptions=e.data}))},localGen(){ae({data:{columns:this.data},groupName:this.groupName,tableName:this.tableName}).then((e=>{200==e.code&&this.$Message.success({content:e.data,duration:10,closable:!0})}))},download(){le({data:{columns:this.data},groupName:this.groupName,tableName:this.tableName}).then((e=>{200==e.code&&(window.location.href="/api/temp/"+e.data)}))},saveOk(){ee(this.tableName,this.data)},getDynamicColumn(){ce().then((e=>{let t=JSON.parse(e.data.globalJson),a=t.dynamicColumn;for(let l of a)console.log(l),this.columns.push({...l,minWidth:100})}))},formatToHump(e){return console.log(e),e.replace(/\_(\w)/g,((e,t)=>t.toUpperCase()))},edit(e){this.editDrawerStatus=!0,this.formItem={...e}},changeOk(){console.log(this.formItem),this.data[this.formItem["_index"]]=this.formItem,console.log(this.data)},editOk(){console.log(this.formItem),this.data[this.formItem["_index"]]=this.formItem,this.editDrawerStatus=!1,this.saveOk()},updateRow(e,t){this.edit({...e,_index:t})}}};const ge=(0,c.Z)(fe,[["render",pe]]);var we=ge;const be=(0,i.Uk)(" 全局变量管理 "),ye=(0,i.Uk)(" 1、全局变量使用JSON格式，用于模板管理、字段管理、在线生成，部分字段支持动态配置属性"),ke=(0,i._)("br",null,null,-1),ve=(0,i.Uk)(" 2、编辑器使用monaco-editor，鼠标右键可以在线格式化JSON，或者使用快键键Shift + Alt + F "),Ce=(0,i.Uk)("保存");function _e(e,t,a,l,n,o){const r=(0,i.up)("Icon"),u=(0,i.up)("Alert"),m=(0,i.up)("Card"),d=(0,i.up)("Button"),s=(0,i.up)("Editor");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(m,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{"show-icon":""},{icon:(0,i.w5)((()=>[(0,i.Wm)(r,{type:"ios-bulb-outline"})])),desc:(0,i.w5)((()=>[ye,ke,ve])),default:(0,i.w5)((()=>[be])),_:1})])),_:1}),(0,i.Wm)(d,{type:"primary",onClick:o.saveOk,style:{"margin-bottom":"10px"}},{default:(0,i.w5)((()=>[Ce])),_:1},8,["onClick"]),n.tplStatus?((0,i.wg)(),(0,i.j4)(s,{key:0,ref:"myEditor",content:n.tplContent,language:"json",onGetData:o.getTplContentData},null,8,["content","onGetData"])):(0,i.kq)("",!0)])}var Ne={data(){return{tplContent:"",data:{},tplStatus:!1}},components:{Editor:Z},created(){this.getData()},methods:{getTplContentData(e){console.log("=====!",e),this.tplContent=e},saveOk(){he({id:this.data.id,globalJson:this.tplContent})},getData(){ce().then((e=>{this.data=e.data,this.tplContent=e.data.globalJson,this.tplStatus=!1,this.$nextTick((()=>{this.tplStatus=!0}))}))}}};const We=(0,c.Z)(Ne,[["render",_e]]);var Oe=We;const Te=[{path:"/",name:"home",component:G},{path:"/tpl",name:"tpl",component:G},{path:"/online",name:"online",component:ie},{path:"/tableColumn",name:"tableColumn",component:we},{path:"/global",name:"Global",component:Oe}],Ve=(0,g.p7)({routes:Te,history:(0,g.r5)("/"),scrollBehavior(){return{top:0}}});var Ie=Ve,De=a(3907),Ue=(0,De.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),xe=a(9781);K._m.config({monaco:xe});const Se=(0,l.ri)(f);Se.use(Ue).use(Ie).use(o()).mount("#app")}},t={};function a(l){var n=t[l];if(void 0!==n)return n.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){a.amdO={}}(),function(){var e=[];a.O=function(t,l,n,o){if(!l){var i=1/0;for(d=0;d<e.length;d++){l=e[d][0],n=e[d][1],o=e[d][2];for(var r=!0,u=0;u<l.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](l[u])}))?l.splice(u--,1):(r=!1,o<i&&(i=o));if(r){e.splice(d--,1);var m=n();void 0!==m&&(t=m)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,l){return a.f[l](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{3:"081a38e2",180:"e6837d11",249:"fd7ca438",525:"583172dc",848:"f86acc14",854:"dbaebf5c",911:"7c4d6deb",996:"be304787",1065:"3f80160b",1134:"61c362c7",1147:"b9d92305",1156:"eea2fe89",1259:"56b0f621",1448:"8636a33c",1471:"c99fcfc9",1597:"e983ff9a",1886:"400837f7",1960:"d50ea571",1961:"1fc83415",2060:"31c38210",2075:"eece340d",2140:"a416d736",2240:"990c8761",2450:"183edae9",2571:"cc9138cf",2798:"b19de417",2814:"8925b061",2892:"c54e8a2c",2911:"06434854",2954:"0b05fe6a",3036:"d45a8aac",3585:"0ac2ae93",3632:"9cbd43e8",3919:"3b07e167",4028:"3ce02d67",4129:"33f55b1c",4368:"1ee8a460",4386:"f4e20f7a",4407:"1f3df5c3",4902:"c653383c",4912:"3498b3a7",4946:"ac4b13cc",5062:"b5a0a3c2",5593:"a1643bd4",5703:"c186438a",5849:"4abacd36",5962:"509c5f6f",6082:"f7657281",6241:"dd9c7e3f",6424:"d23f0d0e",6449:"9a08717f",6489:"2207ef00",6587:"7896771b",6717:"93ac2008",7043:"bc5d1764",7131:"ee6789d3",7287:"f2958fc1",7562:"7eda6427",7637:"efef18a5",7778:"99b65fb4",7835:"4af9e088",8070:"99f902d0",8084:"5a0c1023",8180:"a031f5a8",8424:"f2d9c069",8670:"b0bee021",8715:"a987b2b1",8719:"4eaa5bfe",8906:"92c34ac9",8946:"2241ba95",9343:"57f9d639",9398:"706b1340",9400:"7fad0a0c",9537:"6ea9f07e",9667:"0f4e94b5",9684:"5185df7a",9907:"2ecbba07"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="online-code-gen-ui:";a.l=function(l,n,o,i){if(e[l])e[l].push(n);else{var r,u;if(void 0!==o)for(var m=document.getElementsByTagName("script"),d=0;d<m.length;d++){var s=m[d];if(s.getAttribute("src")==l||s.getAttribute("data-webpack")==t+o){r=s;break}}r||(u=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+o),r.src=l),e[l]=[n];var p=function(t,a){r.onerror=r.onload=null,clearTimeout(c);var n=e[l];if(delete e[l],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(e){return e(a)})),t)return t(a)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),u&&document.head.appendChild(r)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var e={2143:0};a.f.j=function(t,l){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)l.push(n[2]);else{var o=new Promise((function(a,l){n=e[t]=[a,l]}));l.push(n[2]=o);var i=a.p+a.u(t),r=new Error,u=function(l){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=l&&("load"===l.type?"missing":l.type),i=l&&l.target&&l.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",r.name="ChunkLoadError",r.type=o,r.request=i,n[1](r)}};a.l(i,u,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,o,i=l[0],r=l[1],u=l[2],m=0;if(i.some((function(t){return 0!==e[t]}))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(u)var d=u(a)}for(t&&t(l);m<i.length;m++)o=i[m],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},l=self["webpackChunkonline_code_gen_ui"]=self["webpackChunkonline_code_gen_ui"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[4998],(function(){return a(8383)}));l=a.O(l)})();
//# sourceMappingURL=app.59eb77b7.js.map