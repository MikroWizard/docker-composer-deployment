"use strict";(self.webpackChunkmikrowizard=self.webpackChunkmikrowizard||[]).push([[385],{385:(J,g,p)=>{p.r(g),p.d(g,{SnippetsModule:()=>Q});var h=p(177),m=p(9417),c=p(8921),_=p(7062),u=p(7390),f=p(9130),e=p(4438),M=p(9492),S=p(1170),C=p(1626);const j=["nameSummaryCell"];function k(i,a){1&i&&e.nrm(0,"img",55)}function E(i,a){1&i&&e.nrm(0,"i",56)}function F(i,a){1&i&&e.nrm(0,"i",57)}function v(i,a){if(1&i&&(e.DNE(0,k,1,0,"img",52)(1,E,1,0,"i",53)(2,F,1,0,"i",54),e.EFF(3)),2&i){const n=a.item.name,o=a.item;e.Y8G("ngIf","updating"==o.status),e.R7$(),e.Y8G("ngIf","updated"==o.status),e.R7$(),e.Y8G("ngIf","failed"==o.status),e.R7$(),e.SpI(" ",n," ")}}function R(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" ",a.item.description," ")}function I(i,a){if(1&i&&(e.j41(0,"div"),e.EFF(1),e.k0s()),2&i){const n=a.item.created;e.R7$(),e.JRh(n)}}function T(i,a){if(1&i){const n=e.RV6();e.j41(0,"button",58),e.bIt("click",function(){const t=e.eBV(n).item,l=e.XpG();return e.Njj(l.Edit_Snippet(t,"edit"))}),e.nrm(1,"i",59),e.EFF(2,"Edit"),e.k0s(),e.j41(3,"button",60),e.bIt("click",function(){const t=e.eBV(n).item,l=e.XpG();return e.Njj(l.Run_Snippet(t,"exec"))}),e.nrm(4,"i",61),e.EFF(5,"Execute"),e.k0s(),e.j41(6,"button",62),e.bIt("click",function(){const t=e.eBV(n).item,l=e.XpG();return e.Njj(l.show_exec(t))}),e.nrm(7,"i",61),e.EFF(8,"Data"),e.k0s(),e.j41(9,"button",63),e.bIt("click",function(){const t=e.eBV(n).item,l=e.XpG();return e.Njj(l.confirm_delete(t,!1))}),e.nrm(10,"i",64),e.EFF(11,"Delete"),e.k0s()}}function w(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" \xa0 ",a.item.name," ")}function N(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" ",a.item.mac," ")}function V(i,a){1&i&&(e.j41(0,"gui-grid-column",65),e.DNE(1,N,1,1,"ng-template"),e.k0s())}function D(i,a){if(1&i){const n=e.RV6();e.j41(0,"button",66),e.bIt("click",function(){const t=e.eBV(n).item,l=e.XpG();return e.Njj(l.remove_member(t))}),e.nrm(1,"i",67),e.k0s()}}function y(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" \xa0 ",a.item.name," ")}function G(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" ",a.item.ip," ")}function B(i,a){1&i&&(e.j41(0,"gui-grid-column",72),e.DNE(1,G,1,1,"ng-template"),e.k0s())}function z(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" ",a.item.mac," ")}function Y(i,a){1&i&&(e.j41(0,"gui-grid-column",73),e.DNE(1,z,1,1,"ng-template"),e.k0s())}function x(i,a){if(1&i){const n=e.RV6();e.j41(0,"gui-grid",68),e.bIt("selectedRows",function(t){e.eBV(n);const l=e.XpG();return e.Njj(l.onSelectedRowsNewMembers(t))}),e.j41(1,"gui-grid-column",69),e.DNE(2,y,1,1,"ng-template"),e.k0s(),e.DNE(3,B,2,0,"gui-grid-column",70)(4,Y,2,0,"gui-grid-column",71),e.k0s()}if(2&i){const n=e.XpG();e.Y8G("autoResizeWidth",!0)("searching",n.searching)("source",n.availbleMembers)("columnMenu",n.columnMenu)("sorting",n.sorting)("infoPanel",n.infoPanel)("rowSelection",n.rowSelection)("autoResizeWidth",!0)("paging",n.paging),e.R7$(3),e.Y8G("ngIf","devices"==n.current_snippet.selection_type),e.R7$(),e.Y8G("ngIf","devices"==n.current_snippet.selection_type)}}function A(i,a){if(1&i){const n=e.RV6();e.j41(0,"button",31),e.bIt("click",function(){e.eBV(n);const t=e.XpG();return e.Njj(t.add_new_members())}),e.EFF(1),e.k0s()}if(2&i){const n=e.XpG();e.R7$(),e.SpI("Add ",n.NewMemberRows.length,"")}}function X(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" \xa0 ",a.item.started," ")}function $(i,a){1&i&&e.EFF(0),2&i&&e.SpI(" ",a.item.ended," ")}function P(i,a){if(1&i){const n=e.RV6();e.j41(0,"button",78),e.bIt("click",function(){const t=e.eBV(n).item.result,l=e.XpG(2);return e.Njj(l.exportToCsv(t))}),e.EFF(1,"download"),e.k0s()}}function H(i,a){if(1&i&&(e.j41(0,"gui-grid",74)(1,"gui-grid-column",75),e.DNE(2,X,1,1,"ng-template"),e.k0s(),e.j41(3,"gui-grid-column",76),e.DNE(4,$,1,1,"ng-template"),e.k0s(),e.j41(5,"gui-grid-column",77),e.DNE(6,P,2,0,"ng-template"),e.k0s()()),2&i){const n=e.XpG();e.Y8G("autoResizeWidth",!0)("searching",n.searching)("source",n.ExecutedData)("columnMenu",n.columnMenu)("sorting",n.sorting)("infoPanel",n.infoPanel)("autoResizeWidth",!0)("paging",n.paging)}}function W(i,a){1&i&&(e.j41(0,"h6",17),e.EFF(1,"Add New Snippet"),e.k0s())}function U(i,a){if(1&i&&(e.j41(0,"h6",17),e.EFF(1),e.k0s()),2&i){const n=e.XpG();e.R7$(),e.SpI("Editing snippet ",n.current_snippet.name,"")}}const L=[{path:"",component:(()=>{class i{constructor(n,o,t,l,r){this.data_provider=n,this.router=o,this.login_checker=t,this.renderer=l,this.httpClient=r,this.source=[],this.columns=[],this.loading=!0,this.rows=[],this.EditModalVisible=!1,this.ModalAction="checkfirm",this.lineNum=0,this.DeleteConfirmModalVisible=!1,this.ExecSnipetModalVisible=!1,this.NewMemberModalVisible=!1,this.ExecutedDataModalVisible=!1,this.ExecutedData=[],this.SelectedSnippet={name:""},this.SelectedMembers=[],this.SelectedTaskItems="",this.availbleMembers=[],this.NewMemberRows=[],this.current_snippet={content:"",created:"",description:"",id:0,name:""},this.default_snippet={content:"",created:"",description:"",id:0,name:""},this.sorting={enabled:!0,multiSorting:!0},this.searching={enabled:!0,placeholder:"Search Devices"},this.paging={enabled:!0,page:1,pageSize:10,pageSizes:[5,10,25,50],display:u.sE.ADVANCED},this.columnMenu={enabled:!0,sort:!0,columnsManager:!0},this.infoPanel={enabled:!0,infoDialog:!1,columnsManager:!0,schemaManager:!0},this.rowSelection={enabled:!0,type:u.AU.CHECKBOX,mode:u.fL.MULTIPLE};var s=this;this.login_checker.isLoggedIn(),this.data_provider.getSessionInfo().then(d=>{s.uid=d.uid,s.uname=d.name,s.tz=d.tz,"admin"!=d.role&&setTimeout(function(){s.router.navigate(["/user/dashboard"])},100)})}ngOnInit(){this.initGridTable()}confirm_delete(n="",o=!1){if(o){var t=this;this.data_provider.delete_snippet(t.SelectedSnippet.id).then(l=>{t.initGridTable(),t.DeleteConfirmModalVisible=!1})}else this.SelectedSnippet={...n},this.DeleteConfirmModalVisible=!0,console.dir(this.SelectedSnippet)}Edit_Snippet(n,o="showadd"){"showadd"==o?(this.current_snippet={...this.default_snippet},this.EditModalVisible=!0,this.ModalAction="add"):(this.current_snippet=n,this.EditModalVisible=!0,this.lineNum=this.current_snippet.content.match(/\n/g).length,this.ModalAction="edit")}show_exec(n){var o=this;this.SelectedSnippet=n,this.ExecutedDataModalVisible=!0,this.data_provider.get_executed_snipet(o.SelectedSnippet.id).then(t=>{let l=1;o.ExecutedData=t.map(r=>(r.index=l,r.ended=(0,f.qD)(r.created.split(".")[0]+".000Z",o.tz,"yyyy-MM-dd HH:mm:ss XXX"),r.started=(0,f.qD)(r.info.created.split(".")[0]+".000Z",o.tz,"yyyy-MM-dd HH:mm:ss XXX"),l+=1,r)),o.DeleteConfirmModalVisible=!1})}form_changed(){this.SelectedMembers=[],this.SelectedTaskItems=[]}remove_member(n){var o=this;o.SelectedMembers=o.SelectedMembers.filter(t=>t.id!=n.id),o.SelectedTaskItems=o.SelectedMembers.map(t=>t.id)}show_new_member_form(){this.NewMemberModalVisible=!0;var n=this;n.availbleMembers=[],this.SelectedNewMemberRows=[],this.NewMemberRows=[],"devices"==this.current_snippet.selection_type?n.data_provider.get_dev_list({group_id:!1,search:!1,page:!1,size:1e4}).then(t=>{n.availbleMembers=t.filter(l=>!n.SelectedTaskItems.includes(l.id)),n.NewMemberModalVisible=!0}):n.data_provider.get_devgroup_list().then(t=>{n.availbleMembers=t.filter(l=>!n.SelectedTaskItems.includes(l.id)),n.NewMemberModalVisible=!0})}onSelectedRowsNewMembers(n){this.NewMemberRows=n,this.SelectedNewMemberRows=n.map(o=>o.source)}add_new_members(){var n=this;n.SelectedMembers=[...new Set(n.SelectedMembers.concat(n.SelectedNewMemberRows))],n.SelectedTaskItems=n.SelectedMembers.map(o=>o.id),this.NewMemberModalVisible=!1}submit(n){var o=this;this.data_provider.Exec_snipet(o.current_snippet,o.SelectedTaskItems).then(t=>{o.initGridTable()}),this.ExecSnipetModalVisible=!1}Run_Snippet(n,o="showadd"){this.current_snippet=n,this.current_snippet.task_type="snipet_exec",this.current_snippet.selection_type="devices",this.form_changed(),this.ExecSnipetModalVisible=!0,this.ModalAction="exec"}calcline(n){this.lineNum=n?n.match(/\n/g).length:0}save_snippet(){this.data_provider.save_snippet(this.current_snippet).then(n=>{this.EditModalVisible=!1,this.initGridTable()})}onSelectedRows(n){this.rows=n,this.Selectedrows=n.map(o=>o.source.id)}remove(n){console.dir(n)}logger(n){console.dir(n)}initGridTable(){var n=this;n.data_provider.get_snippets("","","",0,1e3).then(o=>{n.source=o.map(t=>(t.created=[t.created.split("T")[0],t.created.split("T")[1].split(".")[0]].join(" "),t)),n.loading=!1})}sanitizeString(n){return n?n.toString().replace(/"/g,'"').replace(/'/g,"'"):""}exportToCsv(n){const o=n,t=this.getColumns(o),l=this.convertToCsv(o,t);this.downloadFile(l,"data.csv","text/csv")}getColumns(n){const o=[];return n.forEach(t=>{Object.keys(t).forEach(l=>{o.includes(l)||o.push(l)})}),o}convertToCsv(n,o){var t=this;let l="";return l+=o.join(",")+"\n",n.forEach(r=>{const s=[];o.forEach(b=>{s.push('"'+t.sanitizeString(r[b])+'"')}),l+=s.join(",")+"\n"}),l}downloadFile(n,o,t){const l=new Blob([n],{type:t}),r=window.navigator;if(r.msSaveOrOpenBlob)r.msSaveBlob(l,o);else{const s=document.createElement("a");s.setAttribute("href",URL.createObjectURL(l)),s.setAttribute("download",o),s.style.visibility="hidden",document.body.appendChild(s),s.click(),document.body.removeChild(s)}}ngOnDestroy(){}static#e=this.\u0275fac=function(o){return new(o||i)(e.rXU(M.C),e.rXU(_.Ix),e.rXU(S.T),e.rXU(e.sFG),e.rXU(C.Qq))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["ng-component"]],viewQuery:function(o,t){if(1&o&&e.GBs(j,5),2&o){let l;e.mGM(l=e.lsd())&&(t.nameSummaryCell=l.first)}},decls:162,vars:50,consts:[["ExecSnipetModal",""],["NewMemberModal",""],["ExecutedDataModal",""],["EditModal",""],["DeleteConfirmModal",""],["xs",""],[1,"mb-4"],["xs","",3,"lg"],[2,"text-align","right"],["cButton","","color","dark","size","sm",1,"mx-1",2,"color","#fff",3,"click"],[1,"fa-solid","fa-plus"],[3,"selectedRows","source","searching","paging","columnMenu","sorting","infoPanel","rowSelection","autoResizeWidth"],["header","Name","field","name"],["header","Description","field","description"],["header","Created","field","created"],["header","Actions","field","action","align","center"],["backdrop","static","size","xl","id","ExecSnipetModal",3,"visibleChange","visible"],["cModalTitle",""],["cButtonClose","",3,"cModalToggle"],[1,"mb-3",3,"cFormFloating"],["cFormControl","","id","floatingInput","placeholder","current_snippet['name']","disabled","true",3,"ngModelChange","ngModel"],["cLabel","","for","floatingInput"],["cFormControl","","id","floatingInput","placeholder","current_snippet['description']",3,"ngModelChange","ngModel"],[1,"mb-3"],["cInputGroupText","","for","inputGroupSelect01"],["cSelect","","id","inputGroupSelect01",3,"change","ngModelChange","ngModel"],["value","devices"],["value","groups"],[3,"autoResizeWidth","source","columnMenu","sorting","infoPanel","rowSelection","paging"],["header","MAC","field","mac",4,"ngIf"],["header","Actions","width","120","field","action"],["cButton","","color","primary",3,"click"],["cButton","","color","secondary",3,"cModalToggle"],["backdrop","static","size","lg","id","NewMemberModal",3,"visibleChange","visible"],["cButtonClose","",3,"click"],[3,"autoResizeWidth","searching","source","columnMenu","sorting","infoPanel","rowSelection","paging","selectedRows",4,"ngIf"],["cButton","","color","primary",3,"click",4,"ngIf"],["cButton","","color","secondary",3,"click"],["backdrop","static","size","lg","id","ExecutedDataModal",3,"visibleChange","visible"],[3,"autoResizeWidth","searching","source","columnMenu","sorting","infoPanel","paging",4,"ngIf"],["backdrop","static","id","runEditModal",3,"visibleChange","visible"],["cModalTitle","",4,"ngIf"],["cFormControl","","id","floatingInput","placeholder","Snippet Name",3,"ngModelChange","ngModel"],["cFormControl","","id","floatingInput","placeholder","Snippet Description",3,"ngModelChange","ngModel"],["cFormControl","","id","floatingInput","placeholder","Snippet code",3,"ngModelChange","ngModel"],[1,"col-sm-12","c-d-block","c-text-truncate"],[2,"padding","0!important"],["cButton","","color","danger",3,"click"],["cButton","","color","info",3,"cModalToggle"],["backdrop","static","id","DeleteConfirmModal",3,"visibleChange","visible"],[2,"width","100%"],["position","fixed","placement","top-end"],["width","20px","src","assets/img/loading.svg",4,"ngIf"],["style","color: green;margin: 5px;","class","fa-solid fa-check",4,"ngIf"],["style","color: red;margin: 5px;","class","fa-solid fa-x",4,"ngIf"],["width","20px","src","assets/img/loading.svg"],[1,"fa-solid","fa-check",2,"color","green","margin","5px"],[1,"fa-solid","fa-x",2,"color","red","margin","5px"],["cButton","","color","primary","size","sm",1,"",3,"click"],[1,"fa-regular","fa-pen-to-square","mx-1"],["cButton","","color","warning","size","sm",1,"mx-1",3,"click"],[1,"fa-solid","fa-bolt","mx-1"],["cButton","","color","info","size","sm",1,"mx-1",3,"click"],["cButton","","color","danger","size","sm",1,"",3,"click"],[1,"fa-regular","fa-trash-can","mx-1"],["header","MAC","field","mac"],["cButton","","color","danger","size","sm",3,"click"],[1,"fa-regular","fa-trash-can"],[3,"selectedRows","autoResizeWidth","searching","source","columnMenu","sorting","infoPanel","rowSelection","paging"],["header","Member Name","field","name"],["header","IP Address","field","ip",4,"ngIf"],["header","MAC Address","field","mac",4,"ngIf"],["header","IP Address","field","ip"],["header","MAC Address","field","mac"],[3,"autoResizeWidth","searching","source","columnMenu","sorting","infoPanel","paging"],["header","Start time","field","start"],["header","End time","field","end"],["header","info","field","mac","align","center"],["color","primary","cButton","",3,"click"]],template:function(o,t){if(1&o){const l=e.RV6();e.j41(0,"c-row")(1,"c-col",5)(2,"c-card",6)(3,"c-card-header")(4,"c-row")(5,"c-col",7),e.EFF(6," Devices "),e.k0s(),e.j41(7,"c-col",7)(8,"h6",8)(9,"button",9),e.bIt("click",function(){return e.eBV(l),e.Njj(t.Edit_Snippet("","showadd"))}),e.nrm(10,"i",10),e.k0s()()()()(),e.j41(11,"c-card-body")(12,"gui-grid",11),e.bIt("selectedRows",function(s){return e.eBV(l),e.Njj(t.onSelectedRows(s))}),e.j41(13,"gui-grid-column",12),e.DNE(14,v,4,4,"ng-template"),e.k0s(),e.j41(15,"gui-grid-column",13),e.DNE(16,R,1,1,"ng-template"),e.k0s(),e.j41(17,"gui-grid-column",14),e.DNE(18,I,2,1,"ng-template"),e.k0s(),e.j41(19,"gui-grid-column",15),e.DNE(20,T,12,0,"ng-template"),e.k0s()()()()()(),e.j41(21,"c-modal",16,0),e.mxI("visibleChange",function(s){return e.eBV(l),e.DH7(t.ExecSnipetModalVisible,s)||(t.ExecSnipetModalVisible=s),e.Njj(s)}),e.j41(23,"c-modal-header")(24,"h5",17),e.EFF(25,"Exec Snipet"),e.k0s(),e.nrm(26,"button",18),e.k0s(),e.j41(27,"c-modal-body")(28,"div",19)(29,"input",20),e.mxI("ngModelChange",function(s){return e.eBV(l),e.DH7(t.current_snippet.name,s)||(t.current_snippet.name=s),e.Njj(s)}),e.k0s(),e.j41(30,"label",21),e.EFF(31,"Snipet Name"),e.k0s()(),e.j41(32,"div",19)(33,"input",22),e.mxI("ngModelChange",function(s){return e.eBV(l),e.DH7(t.current_snippet.description,s)||(t.current_snippet.description=s),e.Njj(s)}),e.k0s(),e.j41(34,"label",21),e.EFF(35,"Description"),e.k0s()(),e.j41(36,"c-input-group",23)(37,"label",24),e.EFF(38," Member type "),e.k0s(),e.j41(39,"select",25),e.bIt("change",function(){return e.eBV(l),e.Njj(t.form_changed())}),e.mxI("ngModelChange",function(s){return e.eBV(l),e.DH7(t.current_snippet.selection_type,s)||(t.current_snippet.selection_type=s),e.Njj(s)}),e.j41(40,"option",26),e.EFF(41,"Devices"),e.k0s(),e.j41(42,"option",27),e.EFF(43,"Groups"),e.k0s()()(),e.j41(44,"h5"),e.EFF(45,"Members :"),e.k0s(),e.j41(46,"gui-grid",28)(47,"gui-grid-column",12),e.DNE(48,w,1,1,"ng-template"),e.k0s(),e.DNE(49,V,2,0,"gui-grid-column",29),e.j41(50,"gui-grid-column",30),e.DNE(51,D,2,0,"ng-template"),e.k0s()(),e.nrm(52,"hr"),e.j41(53,"button",31),e.bIt("click",function(){return e.eBV(l),e.Njj(t.show_new_member_form())}),e.EFF(54,"+ Add new Members"),e.k0s()(),e.j41(55,"c-modal-footer")(56,"button",31),e.bIt("click",function(){return e.eBV(l),e.Njj(t.submit("exec"))}),e.EFF(57,"Execute"),e.k0s(),e.j41(58,"button",32),e.EFF(59," Close "),e.k0s()()(),e.j41(60,"c-modal",33,1),e.mxI("visibleChange",function(s){return e.eBV(l),e.DH7(t.NewMemberModalVisible,s)||(t.NewMemberModalVisible=s),e.Njj(s)}),e.j41(62,"c-modal-header")(63,"h5",17),e.EFF(64,"Editing Group "),e.k0s(),e.j41(65,"button",34),e.bIt("click",function(){return e.eBV(l),e.Njj(t.NewMemberModalVisible=!t.NewMemberModalVisible)}),e.k0s()(),e.j41(66,"c-modal-body")(67,"c-input-group",23)(68,"h5"),e.EFF(69,"Group Members :"),e.k0s(),e.DNE(70,x,5,11,"gui-grid",35),e.nrm(71,"br"),e.k0s(),e.nrm(72,"hr"),e.k0s(),e.j41(73,"c-modal-footer"),e.DNE(74,A,2,1,"button",36),e.j41(75,"button",37),e.bIt("click",function(){return e.eBV(l),e.Njj(t.NewMemberModalVisible=!t.NewMemberModalVisible)}),e.EFF(76," Close "),e.k0s()()(),e.j41(77,"c-modal",38,2),e.mxI("visibleChange",function(s){return e.eBV(l),e.DH7(t.ExecutedDataModalVisible,s)||(t.ExecutedDataModalVisible=s),e.Njj(s)}),e.j41(79,"c-modal-header")(80,"h5",17),e.EFF(81,"Editing Group "),e.k0s(),e.j41(82,"button",34),e.bIt("click",function(){return e.eBV(l),e.Njj(t.ExecutedDataModalVisible=!t.ExecutedDataModalVisible)}),e.k0s()(),e.j41(83,"c-modal-body")(84,"c-input-group",23)(85,"h5"),e.EFF(86,"Group Members :"),e.k0s(),e.DNE(87,H,7,8,"gui-grid",39),e.nrm(88,"br"),e.k0s(),e.nrm(89,"hr"),e.k0s(),e.j41(90,"c-modal-footer")(91,"button",37),e.bIt("click",function(){return e.eBV(l),e.Njj(t.ExecutedDataModalVisible=!t.ExecutedDataModalVisible)}),e.EFF(92," Close "),e.k0s()()(),e.j41(93,"c-modal",40,3),e.mxI("visibleChange",function(s){return e.eBV(l),e.DH7(t.EditModalVisible,s)||(t.EditModalVisible=s),e.Njj(s)}),e.j41(95,"c-modal-header"),e.DNE(96,W,2,0,"h6",41)(97,U,2,1,"h6",41),e.nrm(98,"button",18),e.k0s(),e.j41(99,"c-modal-body")(100,"c-input-group",23)(101,"div",19)(102,"input",42),e.mxI("ngModelChange",function(s){return e.eBV(l),e.DH7(t.current_snippet.name,s)||(t.current_snippet.name=s),e.Njj(s)}),e.k0s(),e.j41(103,"label",21),e.EFF(104,"Name"),e.k0s()()(),e.j41(105,"c-input-group",23)(106,"div",19)(107,"input",43),e.mxI("ngModelChange",function(s){return e.eBV(l),e.DH7(t.current_snippet.description,s)||(t.current_snippet.description=s),e.Njj(s)}),e.k0s(),e.j41(108,"label",21),e.EFF(109,"Description"),e.k0s()()(),e.j41(110,"c-input-group",23)(111,"div",19)(112,"textarea",44),e.bIt("ngModelChange",function(s){return e.eBV(l),e.Njj(t.calcline(s))}),e.mxI("ngModelChange",function(s){return e.eBV(l),e.DH7(t.current_snippet.content,s)||(t.current_snippet.content=s),e.Njj(s)}),e.k0s(),e.j41(113,"label",21),e.EFF(114,"Code"),e.k0s(),e.j41(115,"div",45),e.EFF(116,"Note : In case of multiple IP addresses for the MikroWizard server, use"),e.j41(117,"code",46),e.EFF(118,"[mikrowizard]"),e.k0s(),e.EFF(119," instead of the MikroWizard server IP."),e.k0s()()(),e.nrm(120,"br"),e.k0s(),e.j41(121,"c-modal-footer")(122,"button",47),e.bIt("click",function(){return e.eBV(l),e.Njj(t.save_snippet())}),e.EFF(123,"save"),e.k0s(),e.j41(124,"button",48),e.EFF(125,"Close"),e.k0s()()(),e.j41(126,"c-modal",49,4),e.mxI("visibleChange",function(s){return e.eBV(l),e.DH7(t.DeleteConfirmModalVisible,s)||(t.DeleteConfirmModalVisible=s),e.Njj(s)}),e.j41(128,"c-modal-header")(129,"h5",17),e.EFF(130),e.k0s(),e.nrm(131,"button",18),e.k0s(),e.j41(132,"c-modal-body"),e.EFF(133," Are you sure that You want to delete following Snippet ? "),e.nrm(134,"br")(135,"br"),e.j41(136,"table",50)(137,"tr")(138,"td")(139,"b"),e.EFF(140,"Snippet name : "),e.k0s(),e.EFF(141),e.k0s()(),e.nrm(142,"tr"),e.j41(143,"tr")(144,"td")(145,"p")(146,"code",46)(147,"b"),e.EFF(148,"Warning:"),e.k0s(),e.EFF(149," ALL "),e.j41(150,"b"),e.EFF(151,"Tasks"),e.k0s(),e.EFF(152," related to this snippet Will be "),e.j41(153,"b"),e.EFF(154,"modifed or deleted"),e.k0s(),e.EFF(155," and stop working!"),e.k0s()()()()()(),e.j41(156,"c-modal-footer")(157,"button",47),e.bIt("click",function(){return e.eBV(l),e.Njj(t.confirm_delete("",!0))}),e.EFF(158," Yes,Delete! "),e.k0s(),e.j41(159,"button",48),e.EFF(160," Close "),e.k0s()()(),e.nrm(161,"c-toaster",51)}if(2&o){const l=e.sdS(22),r=e.sdS(94),s=e.sdS(127);e.R7$(5),e.Y8G("lg",3),e.R7$(2),e.Y8G("lg",9),e.R7$(5),e.Y8G("source",t.source)("searching",t.searching)("paging",t.paging)("columnMenu",t.columnMenu)("sorting",t.sorting)("infoPanel",t.infoPanel)("rowSelection",t.rowSelection)("autoResizeWidth",!0),e.R7$(9),e.R50("visible",t.ExecSnipetModalVisible),e.R7$(5),e.Y8G("cModalToggle",l.id),e.R7$(2),e.Y8G("cFormFloating",!0),e.R7$(),e.R50("ngModel",t.current_snippet.name),e.R7$(3),e.Y8G("cFormFloating",!0),e.R7$(),e.R50("ngModel",t.current_snippet.description),e.R7$(6),e.R50("ngModel",t.current_snippet.selection_type),e.R7$(7),e.Y8G("autoResizeWidth",!0)("source",t.SelectedMembers)("columnMenu",t.columnMenu)("sorting",t.sorting)("infoPanel",t.infoPanel)("rowSelection",t.rowSelection)("autoResizeWidth",!0)("paging",t.paging),e.R7$(3),e.Y8G("ngIf","devices"==t.current_snippet.selection_type),e.R7$(9),e.Y8G("cModalToggle",l.id),e.R7$(2),e.R50("visible",t.NewMemberModalVisible),e.R7$(10),e.Y8G("ngIf",t.NewMemberModalVisible),e.R7$(4),e.Y8G("ngIf",0!=t.NewMemberRows.length),e.R7$(3),e.R50("visible",t.ExecutedDataModalVisible),e.R7$(10),e.Y8G("ngIf",t.ExecutedDataModalVisible),e.R7$(6),e.R50("visible",t.EditModalVisible),e.R7$(3),e.Y8G("ngIf","add"==t.ModalAction),e.R7$(),e.Y8G("ngIf","edit"==t.ModalAction),e.R7$(),e.Y8G("cModalToggle",r.id),e.R7$(3),e.Y8G("cFormFloating",!0),e.R7$(),e.R50("ngModel",t.current_snippet.name),e.R7$(4),e.Y8G("cFormFloating",!0),e.R7$(),e.R50("ngModel",t.current_snippet.description),e.R7$(4),e.Y8G("cFormFloating",!0),e.R7$(),e.xc7("height",50+23*t.lineNum,"px"),e.R50("ngModel",t.current_snippet.content),e.R7$(12),e.Y8G("cModalToggle",r.id),e.R7$(2),e.R50("visible",t.DeleteConfirmModalVisible),e.R7$(4),e.SpI("Confirm delete ",t.SelectedSnippet.name,""),e.R7$(),e.Y8G("cModalToggle",s.id),e.R7$(10),e.SpI("",t.SelectedSnippet.name," "),e.R7$(18),e.Y8G("cModalToggle",s.id)}},dependencies:[c.iby,c.qHy,c.lMi,h.bT,c.gLf,c.oMR,c.l_X,c.e$m,c.YJZ,c.wPz,c.fvw,c.ISP,c._fv,c.UjT,u.V1,u.fz,c.Jyz,c.zfW,c.s$3,c.epl,c.L$K,c.VtU,c.E0T,m.xH,m.y7,m.me,m.wz,m.BC,m.vS],encapsulation:2})}return i})(),data:{title:$localize`Snippets`}}];let O=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[_.iI.forChild(L),_.iI]})}return i})(),Q=(()=>{class i{static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275mod=e.$C({type:i});static#n=this.\u0275inj=e.G2t({imports:[O,c.Dw2,h.MD,c.pc9,c.tHK,c.tmq,c.ayw,u.uM,c.Q_q,c.MBE,m.YN]})}return i})()}}]);