(function(){"use strict";var t={28383:function(t,e,n){n(66992),n(88674),n(19601),n(17727);var a=n(49963),o=n(70309),u=n.n(o),l=n(66252),r=(0,l.Uk)(" 模板管理 "),i=(0,l.Uk)(" 字段管理 "),c=(0,l.Uk)(" 在线生成 "),m=(0,l.Uk)(" 全局变量 ");function d(t,e,n,a,o,u){var d=(0,l.up)("Icon"),f=(0,l.up)("MenuItem"),s=(0,l.up)("Menu"),p=(0,l.up)("Col"),h=(0,l.up)("Row"),g=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(h,{gutter:20,style:{"margin-bottom":"20px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{span:18,offset:2},{default:(0,l.w5)((function(){return[(0,l.Wm)(s,{mode:"horizontal",theme:t.theme,"active-name":o.activeName,onOnSelect:u.changeRouter},{default:(0,l.w5)((function(){return[(0,l.Wm)(f,{name:"tpl",to:"tpl"},{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{type:"ios-paper"}),r]})),_:1}),(0,l.Wm)(f,{name:"tableColumn",to:"tableColumn"},{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{type:"md-planet"}),i]})),_:1}),(0,l.Wm)(f,{name:"online",to:"online"},{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{type:"md-send"}),c]})),_:1}),(0,l.Wm)(f,{name:"global",to:"global"},{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{type:"md-settings"}),m]})),_:1})]})),_:1},8,["theme","active-name","onOnSelect"])]})),_:1})]})),_:1}),(0,l.Wm)(h,{gutter:20},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{span:18,offset:2,style:{background:"#f5f5f5",padding:"10px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(g,null,{default:(0,l.w5)((function(e){var n=e.Component;return["/tableColumn"!==t.$route.path?((0,l.wg)(),(0,l.j4)(l.Ob,{key:0},[((0,l.wg)(),(0,l.j4)((0,l.LL)(n)))],1024)):((0,l.wg)(),(0,l.j4)((0,l.LL)(n),{key:1}))]})),_:1})]})),_:1})]})),_:1})],64)}n(47042);var f={name:"App",data:function(){return{routerKey:"1",activeName:"/tpl"}},mounted:function(){var t=this.$route.path;this.activeName=t.slice(1),console.log(t,this.$route,this.activeName)},methods:{changeRouter:function(t){this.routerKey=t,console.log(this.$route)},toPage:function(t){this.$router.push(t)}}},s=n(83744);const p=(0,s.Z)(f,[["render",d]]);var h=p,g=n(22201);n(68309);var b=n(3577),w=(0,l.Uk)("新增模板"),v=(0,l._)("span",null,"开启",-1),y=(0,l._)("span",null,"关闭",-1),k=(0,l.Uk)("查看模板"),C=(0,l.Uk)("复制"),_=(0,l.Uk)("编辑"),N=(0,l.Uk)("删除"),W={style:{float:"right"}},O=(0,l.Uk)("保存");function T(t,e,n,a,o,u){var r=(0,l.up)("Input"),i=(0,l.up)("Col"),c=(0,l.up)("Button"),m=(0,l.up)("Row"),d=(0,l.up)("Card"),f=(0,l.up)("Switch"),s=(0,l.up)("Poptip"),p=(0,l.up)("Option"),h=(0,l.up)("Select"),g=(0,l.up)("FormItem"),T=(0,l.up)("Form"),V=(0,l.up)("Drawer"),I=(0,l.up)("Table");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(d,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(m,{gutter:18},{default:(0,l.w5)((function(){return[(0,l.Wm)(i,{span:"12"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r,{modelValue:o.queryParam.tplName,"onUpdate:modelValue":e[0]||(e[0]=function(t){return o.queryParam.tplName=t}),placeholder:"请输入模板名称或模板组名查询",search:!0,onOnEnter:u.getData},null,8,["modelValue","onOnEnter"])]})),_:1}),(0,l.Wm)(i,{span:"12"},{default:(0,l.w5)((function(){return[(0,l.Wm)(c,{type:"primary",onClick:u.add},{default:(0,l.w5)((function(){return[w]})),_:1},8,["onClick"])]})),_:1})]})),_:1})]})),_:1}),(0,l.Wm)(I,{border:"",columns:o.columns,data:o.data},{name:(0,l.w5)((function(t){var e=t.row;return[(0,l._)("strong",null,(0,b.zw)(e.name),1)]})),status:(0,l.w5)((function(t){var e=t.row;t.index;return[(0,l.Wm)(f,{size:"large",modelValue:e.status,"onUpdate:modelValue":function(t){return e.status=t},"true-value":"1",onOnChange:function(t){return u.changeStatus(t,e)}},{open:(0,l.w5)((function(){return[v]})),close:(0,l.w5)((function(){return[y]})),_:2},1032,["modelValue","onUpdate:modelValue","onOnChange"])]})),action:(0,l.w5)((function(n){var a=n.row;n.index;return[(0,l.Wm)(c,{type:"info",size:"small",style:{"margin-right":"5px"},onClick:e[1]||(e[1]=function(e){return t.$router.push("/online")})},{default:(0,l.w5)((function(){return[k]})),_:1}),(0,l.Wm)(c,{type:"primary",size:"small",style:{"margin-right":"5px"},onClick:function(t){return u.copyOk(a)}},{default:(0,l.w5)((function(){return[C]})),_:2},1032,["onClick"]),(0,l.Wm)(c,{type:"warning",size:"small",style:{"margin-right":"5px"},onClick:function(t){return u.edit(a)}},{default:(0,l.w5)((function(){return[_]})),_:2},1032,["onClick"]),(0,l.Wm)(s,{confirm:"",width:"300px",title:"是否删除？",onOnOk:function(t){return u.remove(a.id)},"word-wrap":""},{default:(0,l.w5)((function(){return[(0,l.Wm)(c,{type:"error",size:"small",style:{"margin-right":"5px"}},{default:(0,l.w5)((function(){return[N]})),_:1})]})),_:2},1032,["onOnOk"]),(0,l.Wm)(V,{title:"模板编辑",closable:!1,modelValue:o.editDrawerStatus,"onUpdate:modelValue":e[8]||(e[8]=function(t){return o.editDrawerStatus=t}),placement:"bottom",height:"60"},{default:(0,l.w5)((function(){return[(0,l.Wm)(T,{model:o.formItem,"label-width":180},{default:(0,l.w5)((function(){return[(0,l.Wm)(g,{label:"模板组名"},{default:(0,l.w5)((function(){return[(0,l.Wm)(h,{modelValue:o.formItem.groupName,"onUpdate:modelValue":e[2]||(e[2]=function(t){return o.formItem.groupName=t}),"allow-create":"",onOnCreate:u.handleCreate,filterable:""},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.groupOptions,(function(t,e){return(0,l.wg)(),(0,l.j4)(p,{key:e,value:t},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,b.zw)(t),1)]})),_:2},1032,["value"])})),128))]})),_:2},1032,["modelValue","onOnCreate"])]})),_:2},1024),(0,l.Wm)(g,{label:"模板名称"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r,{modelValue:o.formItem.tplName,"onUpdate:modelValue":e[3]||(e[3]=function(t){return o.formItem.tplName=t}),placeholder:"请输入模板名称"},{append:(0,l.w5)((function(){return[(0,l._)("span",null,(0,b.zw)(o.randomAppend),1)]})),_:1},8,["modelValue"])]})),_:1}),(0,l.Wm)(g,{label:"模板类型"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r,{modelValue:o.formItem.tplType,"onUpdate:modelValue":e[4]||(e[4]=function(t){return o.formItem.tplType=t}),placeholder:"请输入模板类型"},null,8,["modelValue"])]})),_:1}),(0,l.Wm)(g,{label:"生成文件路径"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r,{modelValue:o.formItem.filePath,"onUpdate:modelValue":e[5]||(e[5]=function(t){return o.formItem.filePath=t}),placeholder:"请输入生成文件路径（本地绝对路径，支持变量）"},null,8,["modelValue"])]})),_:1}),(0,l.Wm)(g,{label:"生成文件名"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r,{modelValue:o.formItem.fileName,"onUpdate:modelValue":e[6]||(e[6]=function(t){return o.formItem.fileName=t}),placeholder:"请输入生成文件名（支持变量）"},null,8,["modelValue"])]})),_:1}),(0,l.Wm)(g,{label:"备注"},{default:(0,l.w5)((function(){return[(0,l.Wm)(r,{modelValue:o.formItem.remark,"onUpdate:modelValue":e[7]||(e[7]=function(t){return o.formItem.remark=t}),type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入备注"},null,8,["modelValue"])]})),_:1})]})),_:2},1032,["model"]),(0,l._)("div",W,[(0,l.Wm)(c,{type:"primary",onClick:u.saveOk},{default:(0,l.w5)((function(){return[O]})),_:1},8,["onClick"])])]})),_:2},1032,["modelValue"])]})),_:1},8,["columns","data"])],64)}var V=n(95082),I=(n(41539),n(39714),n(74916),n(23123),n(9669)),D=n.n(I),U=D().create({timeout:6e3}),x=function(t){return t.response&&console.log(t.response),Promise.reject(t)};U.interceptors.request.use((function(t){return t}),x),U.interceptors.response.use((function(t){if("blob"===t.request.responseType)return t;console.log(t);var e=["/tpl/list"];return 200==t.data.code&&"get"!=t.config.method&&-1==e.indexOf(t.config.url)&&o.Message.success(t.data.message),500==t.data.code&&o.Message.error(t.data.message),t.data}),x);var S=U;function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S.post("/tpl/list",t)}function Z(t){return S.post("/tpl/update",t)}function q(t){return S.get("/tpl/remove",{params:t})}function P(){return S.get("/tpl//group/list")}var E={data:function(){return{columns:[{title:"模板组名",key:"groupName"},{title:"模板名称",key:"tplName"},{title:"状态",slot:"status",width:"100px"},{title:"模板类型",key:"tplType",width:"100px"},{title:"生成文件路径",key:"filePath"},{title:"生成文件名",key:"fileName"},{title:"备注",key:"remark"},{title:"创建时间",key:"createTime"},{title:"更新时间",key:"updateTime"},{title:"操作",slot:"action",width:350,align:"center"}],data:[],editDrawerStatus:!1,groupOptions:[],formItem:{groupName:"",tplName:"",tplType:"",remark:""},queryParam:{},randomAppend:Math.random(1).toString(16).slice(2)+".enjoy"}},mounted:function(){this.getData(),this.getGroupName()},methods:{getGroupName:function(){var t=this;P().then((function(e){t.groupOptions=e.data}))},handleCreate:function(t){this.groupOptions.push(t)},getData:function(){var t=this;j((0,V.Z)({},this.queryParam)).then((function(e){t.data=e.data}))},changeStatus:function(t,e){console.log(t,e);var n=(0,V.Z)({},e);console.log(t,e),n.status=t?1:0,Z(n).then((function(t){}))},remove:function(t){var e=this;q({id:t}).then((function(t){e.getData()}))},edit:function(t){this.editDrawerStatus=!0,this.randomAppend="."+Math.random(1).toString(16).slice(2)+".enjoy",this.formItem=(0,V.Z)({},t),this.formItem.tplName=this.formItem.tplName.split(".")[0]},add:function(){this.editDrawerStatus=!0,this.formItem={}},saveOk:function(){var t=this;this.formItem.tplName=this.formItem.tplName+this.randomAppend,Z(this.formItem).then((function(e){t.editDrawerStatus=!1,t.getData()}))},copyOk:function(t){var e=this;this.formItem=(0,V.Z)({},t),this.randomAppend="."+Math.random(1).toString(16).slice(2)+".enjoy",this.formItem.tplName=this.formItem.tplName.split(".")[0]+this.randomAppend,this.formItem.id=null,Z(this.formItem).then((function(t){e.getData()}))}}};const z=(0,s.Z)(E,[["render",T]]);var G=z,A=(0,l.Uk)("预览状态"),F=(0,l.Uk)("编辑状态"),L=(0,l.Uk)("保存模板"),M=(0,l._)("br",null,null,-1),R=(0,l._)("br",null,null,-1),$=(0,l.Uk)(" Enjoy 模板引擎语法：https://jfinal.com/doc/6-1 ");function H(t,e,n,o,u,r){var i=(0,l.up)("Option"),c=(0,l.up)("Select"),m=(0,l.up)("Button"),d=(0,l.up)("Card"),f=(0,l.up)("Editor"),s=(0,l.up)("Col"),p=(0,l.up)("Row");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(d,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(c,{modelValue:u.selectTpl,"onUpdate:modelValue":e[0]||(e[0]=function(t){return u.selectTpl=t}),filterable:"",clearable:"",style:{width:"300px","margin-right":"10px"},placeholder:"请选择模板",onOnChange:r.changeTpl},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.tplOptions,(function(t){return(0,l.wg)(),(0,l.j4)(i,{value:t.value,key:t.value},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,b.zw)(t.label),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue","onOnChange"]),(0,l.Wm)(c,{modelValue:u.tableName,"onUpdate:modelValue":e[1]||(e[1]=function(t){return u.tableName=t}),filterable:"",clearable:"",style:{width:"250px","margin-right":"10px"},onOnChange:r.queryTableColumn,placeholder:"请选择数据库表"},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.tableNameOptions,(function(t,e){return(0,l.wg)(),(0,l.j4)(i,{key:e,value:t.value},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,b.zw)(t.label),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue","onOnChange"]),u.showTpl?((0,l.wg)(),(0,l.j4)(m,{key:1,shape:"circle",type:"warning",onClick:e[3]||(e[3]=function(t){u.showTpl=!1,r.submit(!0)}),icon:"ios-create",style:{"margin-right":"10px"}},{default:(0,l.w5)((function(){return[F]})),_:1})):((0,l.wg)(),(0,l.j4)(m,{key:0,shape:"circle",onClick:e[2]||(e[2]=function(t){u.showTpl=!0,r.submit(!1)}),icon:"ios-eye",style:{"margin-right":"10px"},type:"success"},{default:(0,l.w5)((function(){return[A]})),_:1})),(0,l.Wm)(m,{shape:"circle",onClick:r.saveTplContent,disabled:!u.selectTplItem},{default:(0,l.w5)((function(){return[L]})),_:1},8,["onClick","disabled"]),M,R,$]})),_:1}),(0,l.Wm)(d,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(p,{gutter:16},{default:(0,l.w5)((function(){return[(0,l.wy)((0,l.Wm)(s,{span:"24"},{default:(0,l.w5)((function(){return[u.tplStatus?((0,l.wg)(),(0,l.j4)(f,{key:0,ref:"myEditor",content:u.tplContent,onGetData:r.getTplContentData},null,8,["content","onGetData"])):(0,l.kq)("",!0)]})),_:1},512),[[a.F8,u.showTpl]]),(0,l.wy)((0,l.Wm)(s,{span:"24"},{default:(0,l.w5)((function(){return[u.showView?((0,l.wg)(),(0,l.j4)(f,{key:0,ref:"myEditor2",content:u.viewContent},null,8,["content"])):(0,l.kq)("",!0)]})),_:1},512),[[a.F8,!u.showTpl]])]})),_:1})]})),_:1})])}n(21249);function J(t,e,n,a,o,u){var r=(0,l.up)("Editor",!0);return(0,l.wg)(),(0,l.j4)(r,{ref:"editor",height:"70vh",theme:"light",defaultLanguage:n.language,defaultValue:n.content,onChange:u.changeContent},null,8,["defaultLanguage","defaultValue","onChange"])}var K=n(19180),Y={data:function(){return{data:""}},props:{language:{type:String,default:"java"},content:{type:String,default:""}},components:{Editor:K.ZP},created:function(){},methods:{changeContent:function(t,e){this.data=t,this.$emit("getData",t)}}};const B=(0,s.Z)(Y,[["render",J]]);var Q=B;function X(){return S.get("/table-info-list")}function tt(t){return S.get("/table-columns",{params:(0,V.Z)({},t)})}function et(t,e){return S.put("/table-columns?tableName="+t,e)}function nt(t){return S.post("/code/gen",t)}function at(t){return S.post("/code/local-code-gen",t)}function ot(t){return S.post("/code/download-code-gen",t)}var ut={data:function(){return{showTpl:!0,tplContent:"",viewContent:"",showView:!0,tplStatus:!0,tplOptions:[],selectTpl:void 0,selectTplItem:void 0,tableList:[],tableName:"",tableColumnData:[]}},components:{Editor:Q},created:function(){this.initTplList(),this.queryTableName()},methods:{saveTplContent:function(){this.selectTplItem.content=this.tplContent,Z(this.selectTplItem),this.initTplList()},changeTpl:function(t){var e=this;t||(t={content:""}),this.tplStatus=!1,this.showTpl=!0,this.tplContent=t.content,this.$nextTick((function(){e.tplStatus=!0})),this.selectTplItem=t},initTplList:function(){var t=this;j().then((function(e){t.tplOptions=e.data.map((function(t){return{label:t.tplName,value:t}}))}))},getTplContentData:function(t){console.log("=====!",t),this.tplContent=t},submit:function(t){var e=this;t&&(this.showView=!1,nt({content:this.tplContent,data:{columns:this.tableColumnData},tableName:this.tableName}).then((function(t){var n=t.data;e.viewContent=n,e.$nextTick((function(){e.showView=!0}))})))},queryTableName:function(){var t=this;X().then((function(e){t.tableNameOptions=e.data.map((function(t){return{label:t.tableName+"（"+t.tableComment+"）",value:t.tableName}}))}))},queryTableColumn:function(t){var e=this;console.log(t),t?tt({tableName:t}).then((function(t){e.tableColumnData=t.data})):this.data=[]}}};const lt=(0,s.Z)(ut,[["render",H]]);var rt=lt,it=(0,l.Uk)("鼠标双击行编辑，即时修改保存"),ct=(0,l.Uk)("字段保存"),mt=(0,l.Uk)("本地生成"),dt=(0,l.Uk)("打包下载"),ft=(0,l.Uk)("编辑");function st(t,e,n,o,u,r){var i=(0,l.up)("Alert"),c=(0,l.up)("Option"),m=(0,l.up)("Select"),d=(0,l.up)("Button"),f=(0,l.up)("ButtonGroup"),s=(0,l.up)("Card"),p=(0,l.up)("Table"),h=(0,l.up)("Input"),g=(0,l.up)("FormItem"),w=(0,l.up)("Form"),v=(0,l.up)("Drawer");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(i,{"show-icon":""},{default:(0,l.w5)((function(){return[it]})),_:1}),(0,l.Wm)(m,{modelValue:u.tableName,"onUpdate:modelValue":e[0]||(e[0]=function(t){return u.tableName=t}),filterable:"",clearable:"",placeholder:"请选择表名",style:{width:"250px","margin-right":"20px"},onOnChange:r.queryTableColumn},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.tableNameOptions,(function(t,e){return(0,l.wg)(),(0,l.j4)(c,{key:e,value:t.value},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,b.zw)(t.label),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue","onOnChange"]),(0,l.Wm)(m,{modelValue:u.groupName,"onUpdate:modelValue":e[1]||(e[1]=function(t){return u.groupName=t}),filterable:"",placeholder:"请选择模板组",style:{width:"250px","margin-right":"20px"}},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.groupOptions,(function(t,e){return(0,l.wg)(),(0,l.j4)(c,{key:e,value:t},{default:(0,l.w5)((function(){return[(0,l.Uk)((0,b.zw)(t),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["modelValue"]),(0,l.Wm)(f,null,{default:(0,l.w5)((function(){return[(0,l.Wm)(d,{type:"primary",onClick:r.saveOk,disabled:!u.tableName},{default:(0,l.w5)((function(){return[ct]})),_:1},8,["onClick","disabled"]),(0,l.Wm)(d,{type:"warning",onClick:r.localGen,disabled:!u.tableName||!u.groupName},{default:(0,l.w5)((function(){return[mt]})),_:1},8,["onClick","disabled"]),(0,l.Wm)(d,{type:"dashed",disabled:!u.tableName||!u.groupName,onClick:r.download},{default:(0,l.w5)((function(){return[dt]})),_:1},8,["disabled","onClick"])]})),_:1})]})),_:1}),(0,l.Wm)(p,{border:"",columns:u.columns,data:u.data,onOnRowDblclick:r.updateRow},{action:(0,l.w5)((function(t){var e=t.row;t.index;return[(0,l.Wm)(d,{type:"warning",size:"small",style:{"margin-right":"5px"},onClick:function(t){return r.edit(e)}},{default:(0,l.w5)((function(){return[ft]})),_:2},1032,["onClick"])]})),_:1},8,["columns","data","onOnRowDblclick"]),(0,l.Wm)(v,{title:"编辑",closable:!1,modelValue:u.editDrawerStatus,"onUpdate:modelValue":e[2]||(e[2]=function(t){return u.editDrawerStatus=t}),placement:"bottom",height:"80",onOnClose:r.editOk},{default:(0,l.w5)((function(){return[(0,l.Wm)(w,{model:u.formItem,"label-width":180},{default:(0,l.w5)((function(){return[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.columns,(function(t,e){return(0,l.wy)(((0,l.wg)(),(0,l.j4)(g,{label:t["title"],key:e},{default:(0,l.w5)((function(){return[(0,l.Wm)(h,{modelValue:u.formItem[t["key"]],"onUpdate:modelValue":function(e){return u.formItem[t["key"]]=e},onOnChange:r.changeOk},null,8,["modelValue","onUpdate:modelValue","onOnChange"])]})),_:2},1032,["label"])),[[a.F8,t["key"]]])})),128))]})),_:1},8,["model"])]})),_:1},8,["modelValue","onOnClose"])])}var pt=n(68439),ht=n(82482);n(15306);function gt(){return S.get("/global-variable")}function bt(t){return S.put("/global-variable",t)}n(93162);var wt={data:function(){var t;return t={tableName:"",tableNameOptions:[],columns:[{title:"字段排序",key:"sort",fixed:"left",width:100},{title:"字段名",key:"columnName",width:200},{title:"字段类型",key:"columnType",minWidth:100},{title:"字段描述",key:"columnComment",minWidth:100},{title:"主键",key:"isPk",minWidth:100},{title:"自增",key:"isIncrement",minWidth:100},{title:"必填",key:"isRequired",minWidth:100},{title:"Java字段",key:"javaField",minWidth:100},{title:"Java类型",key:"javaType",minWidth:100},{title:"字段查询",key:"isQuery",minWidth:100},{title:"查询方式",key:"queryType",minWidth:100}],data:[]},(0,ht.Z)(t,"tableNameOptions",[]),(0,ht.Z)(t,"groupName",""),(0,ht.Z)(t,"tplGenFileName",""),(0,ht.Z)(t,"editDrawerStatus",!1),(0,ht.Z)(t,"formItem",{}),t},created:function(){this.initPage()},methods:{initPage:function(){this.queryTableName(),this.getGroupName(),this.getDynamicColumn()},queryTableName:function(){var t=this;X().then((function(e){t.tableNameOptions=e.data.map((function(t){return{label:t.tableName+"（"+t.tableComment+"）",value:t.tableName}}))}))},queryTableColumn:function(t){var e=this;t?(this.tplGenFileName=this.formatToHump(t),console.log(this.tplGenFileName),tt({tableName:t}).then((function(t){e.data=t.data}))):this.data=[]},getGroupName:function(){var t=this;P().then((function(e){t.groupOptions=e.data}))},localGen:function(){var t=this;at({data:{columns:this.data},groupName:this.groupName,tableName:this.tableName}).then((function(e){200==e.code&&t.$Message.success({content:e.data,duration:10,closable:!0})}))},download:function(){ot({data:{columns:this.data},groupName:this.groupName,tableName:this.tableName}).then((function(t){200==t.code&&(window.location.href="/api/temp/"+t.data)}))},saveOk:function(){et(this.tableName,this.data)},getDynamicColumn:function(){var t=this;gt().then((function(e){var n,a=JSON.parse(e.data.globalJson),o=a.dynamicColumn,u=(0,pt.Z)(o);try{for(u.s();!(n=u.n()).done;){var l=n.value;console.log(l),t.columns.push((0,V.Z)((0,V.Z)({},l),{},{minWidth:100}))}}catch(x){u.e(x)}finally{u.f()}}))},formatToHump:function(t){return console.log(t),t.replace(/\_(\w)/g,(function(t,e){return e.toUpperCase()}))},edit:function(t){this.editDrawerStatus=!0,this.formItem=(0,V.Z)({},t)},changeOk:function(){console.log(this.formItem),this.data[this.formItem["_index"]]=this.formItem,console.log(this.data)},editOk:function(){console.log(this.formItem),this.data[this.formItem["_index"]]=this.formItem,this.editDrawerStatus=!1,this.saveOk()},updateRow:function(t,e){this.edit((0,V.Z)((0,V.Z)({},t),{},{_index:e}))}}};const vt=(0,s.Z)(wt,[["render",st]]);var yt=vt,kt=(0,l.Uk)(" 全局变量管理 "),Ct=(0,l.Uk)(" 1、全局变量使用JSON格式，用于模板管理、字段管理、在线生成，部分字段支持动态配置属性"),_t=(0,l._)("br",null,null,-1),Nt=(0,l.Uk)(" 2、编辑器使用monaco-editor，鼠标右键可以在线格式化JSON，或者使用快键键Shift + Alt + F "),Wt=(0,l.Uk)("保存");function Ot(t,e,n,a,o,u){var r=(0,l.up)("Icon"),i=(0,l.up)("Alert"),c=(0,l.up)("Card"),m=(0,l.up)("Button"),d=(0,l.up)("Editor");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(c,{style:{width:"100%","margin-bottom":"20px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(i,{"show-icon":""},{icon:(0,l.w5)((function(){return[(0,l.Wm)(r,{type:"ios-bulb-outline"})]})),desc:(0,l.w5)((function(){return[Ct,_t,Nt]})),default:(0,l.w5)((function(){return[kt]})),_:1})]})),_:1}),(0,l.Wm)(m,{type:"primary",onClick:u.saveOk,style:{"margin-bottom":"10px"}},{default:(0,l.w5)((function(){return[Wt]})),_:1},8,["onClick"]),o.tplStatus?((0,l.wg)(),(0,l.j4)(d,{key:0,ref:"myEditor",content:o.tplContent,language:"json",onGetData:u.getTplContentData},null,8,["content","onGetData"])):(0,l.kq)("",!0)])}var Tt={data:function(){return{tplContent:"",data:{},tplStatus:!1}},components:{Editor:Q},created:function(){this.getData()},methods:{getTplContentData:function(t){console.log("=====!",t),this.tplContent=t},saveOk:function(){bt({id:this.data.id,globalJson:this.tplContent})},getData:function(){var t=this;gt().then((function(e){t.data=e.data,t.tplContent=e.data.globalJson,t.tplStatus=!1,t.$nextTick((function(){t.tplStatus=!0}))}))}}};const Vt=(0,s.Z)(Tt,[["render",Ot]]);var It=Vt,Dt=[{path:"/",name:"home",component:G},{path:"/tpl",name:"tpl",component:G},{path:"/online",name:"online",component:rt},{path:"/tableColumn",name:"tableColumn",component:yt},{path:"/global",name:"Global",component:It}],Ut=(0,g.p7)({routes:Dt,history:(0,g.r5)("/"),scrollBehavior:function(){return{top:0}}}),xt=Ut,St=n(33907),jt=(0,St.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),Zt=n(59781);K._m.config({monaco:Zt});var qt=(0,a.ri)(h);qt.use(jt).use(xt).use(u()).mount("#app")}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var u=e[a]={exports:{}};return t[a].call(u.exports,u,u.exports,n),u.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,a,o,u){if(!a){var l=1/0;for(m=0;m<t.length;m++){a=t[m][0],o=t[m][1],u=t[m][2];for(var r=!0,i=0;i<a.length;i++)(!1&u||l>=u)&&Object.keys(n.O).every((function(t){return n.O[t](a[i])}))?a.splice(i--,1):(r=!1,u<l&&(l=u));if(r){t.splice(m--,1);var c=o();void 0!==c&&(e=c)}}return e}u=u||0;for(var m=t.length;m>0&&t[m-1][2]>u;m--)t[m]=t[m-1];t[m]=[a,o,u]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{3:"e6196e2e",180:"77636a6a",249:"19645e8d",525:"f1452856",848:"e9940c93",854:"95696b8d",911:"0bb9bbf8",996:"25395481",1065:"cb654491",1134:"ff99ca11",1147:"44cc1c5f",1156:"294ad473",1259:"e78199db",1448:"1016b86e",1471:"c75a5530",1597:"33ce2b36",1886:"ca3bd98b",1960:"575b6ce2",1961:"212b6546",2060:"7821f791",2075:"4e9de5f7",2140:"e5b0e5bd",2240:"1f706d60",2450:"ceb462bf",2571:"a3f3ca57",2798:"a78f6048",2814:"65e13f83",2892:"7c4623ee",2911:"3c553894",2954:"fd2c749d",3036:"ab66be1e",3585:"83629891",3632:"f2cada9f",3919:"a5e6474b",4028:"82c2a4c8",4129:"78373f3c",4368:"7224d40f",4386:"ce6089f4",4407:"56962054",4902:"bdf1867a",4912:"342ea404",4946:"fb0f2df0",5062:"b8eb3354",5593:"a3af3595",5703:"eb94d55d",5849:"64a70df5",5962:"cc0f0491",6082:"5696911f",6241:"0150b762",6424:"4e80b7d2",6449:"9e83e7cc",6489:"14b9daae",6587:"2b21ccc2",6717:"cabfd7cc",7043:"2abb3463",7131:"d6ad64f4",7287:"4d86e01b",7562:"c4459859",7637:"456ea027",7778:"cbbfae9e",7835:"7beeccf0",8070:"99f902d0",8084:"3adb888d",8180:"1bb446dc",8424:"477c7ae0",8670:"c557c9e6",8715:"a987b2b1",8719:"ad32f3a7",8906:"02b485e8",8946:"cd0b62f7",9343:"ce71c5b6",9398:"a8b68f85",9400:"9bc85a4e",9537:"93c72465",9667:"25dae267",9684:"76726dd1",9907:"bb05491e"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="online-code-gen-ui:";n.l=function(a,o,u,l){if(t[a])t[a].push(o);else{var r,i;if(void 0!==u)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var d=c[m];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+u){r=d;break}}r||(i=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+u),r.src=a),t[a]=[o];var f=function(e,n){r.onerror=r.onload=null,clearTimeout(s);var o=t[a];if(delete t[a],r.parentNode&&r.parentNode.removeChild(r),o&&o.forEach((function(t){return t(n)})),e)return e(n)},s=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),i&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={2143:0};n.f.j=function(e,a){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var u=new Promise((function(n,a){o=t[e]=[n,a]}));a.push(o[2]=u);var l=n.p+n.u(e),r=new Error,i=function(a){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var u=a&&("load"===a.type?"missing":a.type),l=a&&a.target&&a.target.src;r.message="Loading chunk "+e+" failed.\n("+u+": "+l+")",r.name="ChunkLoadError",r.type=u,r.request=l,o[1](r)}};n.l(l,i,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var o,u,l=a[0],r=a[1],i=a[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(i)var m=i(n)}for(e&&e(a);c<l.length;c++)u=l[c],n.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return n.O(m)},a=self["webpackChunkonline_code_gen_ui"]=self["webpackChunkonline_code_gen_ui"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[4998],(function(){return n(28383)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.c1d7d4b8.js.map