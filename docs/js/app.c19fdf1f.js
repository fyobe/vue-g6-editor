(function(t){function e(e){for(var o,i,l=e[0],r=e[1],d=e[2],p=0,u=[];p<l.length;p++)i=l[p],n[i]&&u.push(n[i][0]),n[i]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);c&&c(e);while(u.length)u.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,l=1;l<a.length;l++){var r=a[l];0!==n[r]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},s=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4ebb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var o=a("2b0e"),n=a("5c96"),s=a.n(n),i=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Flow",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),l=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editor"},[a("div",{staticClass:"top-container"},[a("div",{ref:"toolbar",staticClass:"toolbar"},[a("link",{attrs:{rel:"stylesheet",type:"text/css",href:"//at.alicdn.com/t/font_598462_3xve1872wizzolxr.css"}}),a("i",{staticClass:"command iconfont icon-undo",attrs:{"data-command":"undo",title:"撤销"}}),a("i",{staticClass:"command iconfont icon-redo disable",attrs:{"data-command":"redo",title:"重做"}}),a("span",{staticClass:"separator"}),a("i",{staticClass:"command iconfont icon-copy-o",attrs:{"data-command":"copy",title:"复制"}}),a("i",{staticClass:"command iconfont icon-paster-o disable",attrs:{"data-command":"paste",title:"粘贴"}}),a("i",{staticClass:"command iconfont icon-delete-o",attrs:{"data-command":"delete",title:"删除"}}),a("span",{staticClass:"separator"}),a("i",{staticClass:"command iconfont icon-zoom-in-o",attrs:{"data-command":"zoomIn",title:"放大"}}),a("i",{staticClass:"command iconfont icon-zoom-out-o",attrs:{"data-command":"zoomOut",title:"缩小"}}),a("i",{staticClass:"command iconfont icon-fit",attrs:{"data-command":"autoZoom",title:"适应画布"}}),a("i",{staticClass:"command iconfont icon-actual-size-o",attrs:{"data-command":"resetZoom",title:"实际尺寸"}}),a("span",{staticClass:"separator"}),a("i",{staticClass:"command iconfont icon-to-back",attrs:{"data-command":"toBack",title:"层级后置"}}),a("i",{staticClass:"command iconfont icon-to-front",attrs:{"data-command":"toFront",title:"层级前置"}}),a("span",{staticClass:"separator"}),a("i",{staticClass:"command iconfont icon-select",attrs:{"data-command":"multiSelect",title:"多选"}}),a("i",{staticClass:"command iconfont icon-group disable",attrs:{"data-command":"addGroup",title:"成组"}}),a("i",{staticClass:"command iconfont icon-ungroup disable",attrs:{"data-command":"unGroup",title:"解组"}})]),a("div",{staticClass:"data-opt"},[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.saveFlow}},[t._v("保存")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.downloadFlow}},[t._v("下载")])],1)]),a("div",{staticClass:"bottom-container"},[a("div",{staticClass:"left-pannel"},[a("div",{ref:"itempannel",staticClass:"itempannel-container"},[a("img",{staticClass:"getItem",attrs:{draggable:"false",src:"https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg","data-type":"node","data-shape":"flow-circle","data-size":"72*72","data-color":"#FA8C16","data-label":"起止节点"}}),a("img",{staticClass:"getItem",attrs:{draggable:"false",src:"https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg","data-type":"node","data-shape":"flow-rect","data-size":"80*48","data-color":"#1890FF","data-label":"常规节点"}}),a("img",{staticClass:"getItem",attrs:{draggable:"false",src:"https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg","data-type":"node","data-shape":"flow-rhombus","data-size":"80*72","data-color":"#13C2C2","data-label":"分叉节点"}}),a("img",{staticClass:"getItem",attrs:{draggable:"false",src:"https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg","data-type":"node","data-shape":"flow-capsule","data-size":"80*48","data-color":"#722ED1","data-label":"模型节点"}})])]),a("div",{staticClass:"center-pannel"},[a("div",{ref:"flow",staticClass:"flow"}),a("div",{ref:"contextmenu",staticClass:"contextmenu",staticStyle:{position:"absolute","z-index":"2"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4)])]),a("div",{staticClass:"right-pannel"},[a("div",{staticClass:"detail-pannel"},[a("div",{ref:"detailpannel"},[a("div",{staticClass:"pannel",staticStyle:{display:"none"},attrs:{"data-status":"node-selected"}},[a("div",{staticClass:"pannel-title"},[t._v("节点")]),a("div",{staticClass:"block-container"},[a("div",{staticClass:"p name"},[t._v("名称：\n                "),a("el-input",{attrs:{size:"mini"},model:{value:t.nodeName,callback:function(e){t.nodeName=e},expression:"nodeName"}})],1),a("div",{staticClass:"p size"},[t._v("尺寸：\n                "),a("el-input",{attrs:{size:"mini"},model:{value:t.nodeWidth,callback:function(e){t.nodeWidth=e},expression:"nodeWidth"}}),a("el-input",{attrs:{size:"mini"},model:{value:t.nodeHeight,callback:function(e){t.nodeHeight=e},expression:"nodeHeight"}})],1),a("div",{staticClass:"p color"},[t._v("颜色：\n                "),a("el-color-picker",{attrs:{size:"mini"},model:{value:t.nodeColor,callback:function(e){t.nodeColor=e},expression:"nodeColor"}})],1)])]),a("div",{staticClass:"pannel",staticStyle:{display:"none"},attrs:{"data-status":"edge-selected",id:"edge_detailpannel"}},[a("div",{staticClass:"pannel-title"},[t._v("边")]),a("div",{staticClass:"block-container"},[a("div",{staticClass:"p name"},[t._v("名称：\n                "),a("el-input",{attrs:{size:"mini"},model:{value:t.edgeName,callback:function(e){t.edgeName=e},expression:"edgeName"}})],1)])]),a("div",{staticClass:"pannel",staticStyle:{display:"none"},attrs:{"data-status":"group-selected",id:"group_detailpannel"}},[a("div",{staticClass:"pannel-title"},[t._v("组")]),a("div",{staticClass:"block-container"},[a("div",{staticClass:"p name"},[t._v("名称：\n                "),a("el-input",{attrs:{size:"mini"},model:{value:t.groupName,callback:function(e){t.groupName=e},expression:"groupName"}})],1),a("div",{staticClass:"p color"},[t._v("颜色：\n                "),a("el-color-picker",{attrs:{size:"mini"},model:{value:t.groupColor,callback:function(e){t.groupColor=e},expression:"groupColor"}})],1)])]),a("div",{staticClass:"pannel",staticStyle:{display:"none"},attrs:{"data-status":"canvas-selected",id:"canvas_detailpannel"}},[a("div",{staticClass:"pannel-title"},[t._v("画布")]),a("div",{staticClass:"block-container"},[a("el-checkbox",{model:{value:t.gridCheck,callback:function(e){t.gridCheck=e},expression:"gridCheck"}},[t._v("网格对齐")])],1)]),a("div",{staticClass:"pannel",staticStyle:{display:"block"},attrs:{"data-status":"multi-selected",id:"multi_detailpannel"}},[a("div",{staticClass:"pannel-title"},[t._v("多选")]),a("div",{staticClass:"block-container"},[a("div",{staticClass:"p color"},[t._v("颜色：\n                "),a("el-color-picker",{attrs:{size:"mini"},model:{value:t.multiColor,callback:function(e){t.multiColor=e},expression:"multiColor"}})],1)])])])]),a("div",{staticClass:"navigator"},[a("span",{staticClass:"pannel-title"},[t._v("导航器")]),a("div",{ref:"minimap",staticClass:"mini-map"})]),a("div",{staticClass:"zoom-slider"},[a("el-slider",{attrs:{"show-input":"","input-size":"mini",max:200,"format-tooltip":t.formatTooltip},model:{value:t.zoomRatio,callback:function(e){t.zoomRatio=e},expression:"zoomRatio"}})],1)])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu",staticStyle:{display:"none"},attrs:{"data-status":"node-selected"}},[a("div",{staticClass:"command disable",attrs:{"data-command":"copy"}},[a("span",[t._v("复制")]),a("span",[t._v("copy")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"delete"}},[a("span",[t._v("删除")]),a("span",[t._v("delete")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu",staticStyle:{display:"none"},attrs:{"data-status":"edge-selected"}},[a("div",{staticClass:"command disable",attrs:{"data-command":"delete"}},[a("span",[t._v("删除")]),a("span",[t._v("delete")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu",staticStyle:{display:"none"},attrs:{"data-status":"group-selected"}},[a("div",{staticClass:"command disable",attrs:{"data-command":"copy"}},[a("span",[t._v("复制")]),a("span",[t._v("copy")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"delete"}},[a("span",[t._v("删除")]),a("span",[t._v("delete")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"unGroup"}},[a("span",[t._v("解组")]),a("span",[t._v("unGroup")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu",staticStyle:{display:"block"},attrs:{"data-status":"canvas-selected"}},[a("div",{staticClass:"command disable",attrs:{"data-command":"undo"}},[a("span",[t._v("撤销")]),a("span",[t._v("undo")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"redo"}},[a("span",[t._v("重做")]),a("span",[t._v("redo")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"pasteHere"}},[a("span",[t._v("粘贴")]),a("span",[t._v("pasteHere")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu",staticStyle:{display:"none"},attrs:{"data-status":"multi-selected"}},[a("div",{staticClass:"command disable",attrs:{"data-command":"copy"}},[a("span",[t._v("复制")]),a("span",[t._v("copy")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"paste"}},[a("span",[t._v("粘贴")]),a("span",[t._v("paste")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"addGroup"}},[a("span",[t._v("归组")]),a("span",[t._v("addGroup")])]),a("div",{staticClass:"command disable",attrs:{"data-command":"delete"}},[a("span",[t._v("删除")]),a("span",[t._v("delete")])])])}],c=(a("6b54"),a("4917"),a("a481"),a("28a5"),a("3835")),p=(a("7f7f"),a("ac6a"),a("1688")),u=a.n(p),m=a("9818"),f={name:"Flow",components:{},data:function(){return{page:null,flow:null,graph:null,nodeId:null,nodeName:null,nodeWidth:null,nodeHeight:null,nodeColor:null,groupId:null,groupName:null,groupColor:null,edgeId:null,edgeName:null,multiId:[],multiColor:null,isMultiSelect:!1,gridCheck:!1,zoomRatio:100}},mounted:function(){this.initEditor()},watch:{nodeName:function(t){this.flow.update(this.nodeId,{label:t})},nodeWidth:function(t){this.flow.update(this.nodeId,{size:"".concat(t,"*").concat(this.nodeHeight)})},nodeHeight:function(t){this.flow.update(this.nodeId,{size:"".concat(this.nodeWidth,"*").concat(t)})},multiColor:function(t){var e=this;this.multiId.forEach(function(a){e.flow.update(a,{color:t})})},nodeColor:function(t,e){null!==e&&this.flow.update(this.nodeId,{color:t})},edgeName:function(t){null!==t&&this.flow.update(this.edgeId,{label:{text:t}})},groupName:function(t){null!==t&&this.flow.update(this.groupId,{label:t})},groupColor:function(t){null!==t&&this.flow.update(this.groupId,{color:t})},gridCheck:function(t){t?this.page.showGrid():this.page.hideGrid()},zoomRatio:function(t){this.graph.zoom(t/100)}},methods:{initEditor:function(){var t=this,e=new u.a;u.a.track(!1),this.flow=new u.a.Flow({graph:{container:this.$refs.flow},align:{grid:!0},shortcut:{zoomIn:!0,zoomOut:!0}}),this.itempannel=new u.a.Itempannel({container:this.$refs.itempannel}),this.minimap=new u.a.Minimap({container:this.$refs.minimap}),this.toolbar=new u.a.Toolbar({container:this.$refs.toolbar}),this.contextmenu=new u.a.Contextmenu({container:this.$refs.contextmenu}),this.detailpannel=new u.a.Detailpannel({container:this.$refs.detailpannel}),e.add(this.flow),e.add(this.itempannel),e.add(this.minimap),e.add(this.toolbar),e.add(this.contextmenu),e.add(this.detailpannel),e.on("aftercommandexecute",function(e){switch(e.command.name){case"multiSelect":t.multiId=[],t.isMultiSelect=!0;break;case"undo":t.isMultiSelect=!1;break;default:break}}),this.flow.read(m),this.graph=this.flow.getGraph(),this.graph.setFitView("cc"),this.graph.edge({shape:"flow-polyline-round",labelRectStyle:{fill:"#ffffff"}}),this.page=e.getCurrentPage(),this.page.hideGrid(),this.page.changeAddEdgeModel({shape:"flow-polyline-round"}),this.page.on("afteritemselected",function(e){switch(e.item.type){case"node":if(t.isMultiSelect)t.multiId.push(e.item.model.id),t.multiColor=e.item.model.color;else{t.nodeId=e.item.model.id,t.nodeName=e.item.model.label;var a=e.item.model.size.split("*"),o=Object(c["a"])(a,2);t.nodeWidth=o[0],t.nodeHeight=o[1],t.nodeColor=e.item.model.color}console.log(t.multiId);break;case"edge":t.edgeId=e.item.model.id,t.edgeName=e.item.model.label?e.item.model.label.text:null;break;case"group":t.groupId=e.item.model.id,t.groupName=e.item.model.label?e.item.model.label:null,t.groupColor=e.item.model.color?e.item.model.color:"#f2f4f5";break;default:break}}),this.page.on("beforeitemunselected",function(){t.isMultiSelect=!1}),this.graph.on("afterchangesize",function(){t.graph.update()})},getDarkColor:function(t,e){for(var a=this.HexToRgb(t),o=0;o<3;o++)a[o]=Math.floor(a[o]*(1-e));return this.RgbToHex(a[0],a[1],a[2])},getLightColor:function(t,e){for(var a=this.HexToRgb(t),o=0;o<3;o++)a[o]=Math.floor((255-a[o])*e+a[o]);return this.RgbToHex(a[0],a[1],a[2])},HexToRgb:function(t){for(var e=t.replace("#",""),a=e.match(/../g),o=0;o<3;o++)a[o]=parseInt(a[o],16);return a},RgbToHex:function(t,e,a){for(var o=[t.toString(16),e.toString(16),a.toString(16)],n=0;n<3;n++)1===o[n].length&&(o[n]="0".concat(o[n]));return"#".concat(o.join(""))},saveFlow:function(){var t=this.flow.save();console.log(JSON.stringify(t))},downloadFlow:function(){},formatTooltip:function(t){return"".concat(t,"%")}}},g=f,h=(a("e355"),a("2877")),v=Object(h["a"])(g,r,d,!1,null,"d59c9186",null);v.options.__file="Flow.vue";var b=v.exports,y={name:"app",components:{Flow:b}},C=y,x=(a("5c0b"),Object(h["a"])(C,i,l,!1,null,null,null));x.options.__file="App.vue";var w=x.exports;o["default"].config.productionTip=!1,o["default"].use(s.a),new o["default"]({render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("5e27"),n=a.n(o);n.a},"5e27":function(t,e,a){},9818:function(t){t.exports={nodes:[{id:"node1",x:50,y:100,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签1",parent:"group1",index:1},{id:"node2",x:50,y:200,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签2",parent:"group1",index:1},{id:"node3",x:50,y:300,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签3",parent:"group1",index:1},{id:"node4",x:200,y:150,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签4",parent:"group1",index:1},{id:"node5",x:200,y:250,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签5",parent:"group1",index:1},{id:"node6",x:350,y:150,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签6",parent:"group1",index:1},{id:"node7",x:350,y:250,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签7",parent:"group1",index:1},{id:"node8",x:500,y:50,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签8",parent:"group1",index:1},{id:"node9",x:500,y:150,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签9",parent:"group1",index:1},{id:"node10",x:500,y:250,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签10",parent:"group1",index:1},{id:"node11",x:500,y:350,color:"#1890FF",size:"80*48",shape:"rect",label:"文本标签11",parent:"group1",index:1}],edges:[{id:"edge1",source:"node1",target:"node4",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge2",source:"node2",target:"node4",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge3",source:"node2",target:"node5",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge4",source:"node3",target:"node5",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge5",source:"node4",target:"node6",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge6",source:"node5",target:"node7",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge7",source:"node6",target:"node9",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge8",source:"node7",target:"node10",controlPoints:[{x:10,y:10}],sourceAnchor:1,targetAnchor:3,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge9",source:"node8",target:"node9",controlPoints:[{x:10,y:10}],sourceAnchor:2,targetAnchor:0,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge10",source:"node9",target:"node10",controlPoints:[{x:10,y:10}],sourceAnchor:2,targetAnchor:0,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#515759"},parent:"group1",index:1},{id:"edge11",source:"node10",target:"node11",controlPoints:[{x:100,y:100}],sourceAnchor:2,targetAnchor:0,shape:"flow-polyline-round",style:{stroke:"#d5dbe2"},labelRectStyle:{fill:"#ffffff"},label:{text:"边名称"},parent:"group1",index:1}]}},e355:function(t,e,a){"use strict";var o=a("4ebb"),n=a.n(o);n.a}});
//# sourceMappingURL=app.c19fdf1f.js.map