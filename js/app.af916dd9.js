(function(e){function t(t){for(var n,i,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dragon-valley-edit/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"27a5":function(e,t,a){},"553b":function(e,t,a){e.exports=a.p+"img/copy.e07bf646.svg"},"793c":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");t["default"]={eagle:{label:"夜鹰",mark:"拔剑最快 & 职业电灯泡",uid:"eagle"},eleven:{label:"十一",mark:"神勇爆头男",uid:"eleven"},dove:{label:"白鸽",mark:"双节棍公主",uid:"dove"},fire:{label:"黑火",mark:"托尼贾",uid:"fire"},sky:{label:"天啸",mark:"从事辞职事业多年",uid:"sky"},falcon:{label:"夜隼",mark:"夜鹰小徒弟 & 专业拆台",uid:"falcon"},swallow:{label:"夜燕",mark:"除了张敬轩，我还爱C罗",uid:"swallow"},leopard:{label:"青豹",mark:"有空一起做俯卧撑啊",uid:"leopard"},master:{label:"黄药师",mark:"大家吃好喝好，喝好吃好",uid:"master"},leaf:{label:"木叶",mark:"吉祥物",uid:"leaf"}}},"7adf":function(e,t,a){"use strict";var n=a("27a5"),r=a.n(n);r.a},"7c55":function(e,t,a){"use strict";var n=a("d3dd"),r=a.n(n);r.a},cd49:function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Main")],1)},s=[],i=a("c665"),o=a("dc0a"),c=a("d328"),l=a("11d9"),u=a("9ab4"),d=a("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content"},[n("section",{staticClass:"edit-content"},[e._l(e.data,function(t,r){return n("div",{key:r,staticClass:"edit-list"},[n("h3",{on:{click:function(t){e.copy(r)}}},[e._v("场景编号："+e._s(r))]),e._l(t.res,function(s,i){return n("div",{key:i+"res",staticClass:"res"},[n("span",{on:{click:function(t){e.changeUser(t,r,i)}}},[e._v("【"+e._s(s.label)+"】—— "+e._s(s.mark))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:s.value,expression:"res.value"}],attrs:{type:"text",id:r+"res"+i,oninput:"this.style.height = this.scrollHeight+'px'"},domProps:{value:s.value},on:{keydown:function(a){e.addConversation(a,r,"res",i===t.res.length-1)},input:function(t){t.target.composing||e.$set(s,"value",t.target.value)}}}),n("img",{staticClass:"delete-icon",attrs:{src:a("d739"),alt:""},on:{click:function(t){e.deleteConversation(r,"res",i)}}}),i===t.res.length-1?n("i",{on:{click:function(t){e.addConversation(null,r,"res",!0)}}},[e._v("Ctrl / Cmd + Enter 键添加对话")]):e._e()])}),e._l(t.req,function(s,i){return n("div",{key:i+"req",staticClass:"req"},[n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:s.value,expression:"req.value"}],attrs:{type:"text",oninput:"this.style.height = this.scrollHeight+'px'"},domProps:{value:s.value},on:{keydown:function(a){e.addConversation(a,r,"req",i===t.req.length-1)},input:function(t){t.target.composing||e.$set(s,"value",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:s.next,expression:"req.next"}],attrs:{type:"text"},domProps:{value:s.next},on:{input:function(t){t.target.composing||e.$set(s,"next",t.target.value)}}}),n("img",{staticClass:"delete-icon",attrs:{src:a("d739"),alt:""},on:{click:function(t){e.deleteConversation(r,"req",i)}}})]),i===t.req.length-1?n("i",{on:{click:function(t){e.addConversation(null,r,"req",!0)}}},[e._v("Ctrl / Cmd + Enter 键添加对话")]):e._e()])})],2)}),n("button",{staticClass:"add-btn",attrs:{type:"button"},on:{click:function(t){e.createScenes()}}},[n("img",{attrs:{src:a("eef4")}}),e._v("添加场景")])],2),n("section",{staticClass:"show-content"},[n("pre",[e._v("export default "+e._s(e.data))]),n("button",{staticClass:"copy-btn",attrs:{stype:"button"},on:{click:function(t){e.copy(e.data)}}},[n("img",{attrs:{src:a("553b")}}),e._v("复制代码")])]),n("textarea",{ref:"copy",staticClass:"copy",attrs:{type:"text"}}),n("transition",{attrs:{name:"slide-fade"}},[e.toastStatus?n("span",{staticClass:"toast"},[e._v("复制成功")]):e._e()]),n("section",{directives:[{name:"show",rawName:"v-show",value:e.switchModal,expression:"switchModal"}],staticClass:"selectUser",on:{click:function(t){e.switchModal=!1}}},[n("ul",e._l(e.selectData,function(t,a){return n("li",{key:a,on:{click:function(t){e.hanldeSelect(t,a)}}},[n("span",[e._v(e._s(t.label)+" —— "+e._s(t.mark))])])}))])],1)},p=[],v=a("6bde"),h=(a("6b54"),a("f751"),a("aa9a")),b=a("793c").default,m=function(){return{label:"夜鹰",mark:"拔剑最快 & 职业电灯泡",uid:"eagle",value:""}},y=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.data={},e.toastStatus=!1,e.changeData={},e.switchModal=!1,e.selectData={},e}return Object(h["a"])(t,[{key:"mounted",value:function(){this.createScenes(),this.selectData=Object.assign({},b)}},{key:"createTime",value:function(){return(new Date).valueOf().toString()}},{key:"copy",value:function(e){var t=this,a=null;a="object"===Object(v["a"])(e)?"export default "+JSON.stringify(e):e;var n=this.$refs.copy;n.value=a,n.select(),document.execCommand("copy"),this.toastStatus=!0,setTimeout(function(){t.toastStatus=!1},600)}},{key:"addConversation",value:function(e,t,a,n){var r=this.data;if(this.updateData(r),n&&(!e||e.metaKey&&13===e.keyCode||e.ctrlKey&&13===e.keyCode)){switch(a){case"res":r[t].res.push(m());break;case"req":r[t].req.push({value:"",next:t});default:break}this.updateData(r)}}},{key:"deleteConversation",value:function(e,t,a){var n=this.data;switch(t){case"res":n[e].res.splice(a,1);break;case"req":n[e].req.splice(a,1);break;default:break}this.updateData(n)}},{key:"createScenes",value:function(){var e=this.data,t=this.createTime();e[t]={res:[],req:[]},this.updateData(e),this.addConversation(null,t,"res",!0),this.addConversation(null,t,"req",!0)}},{key:"changeUser",value:function(e,t,a){this.changeData={x:e.clientX,y:e.clientY,key:t,index:a,data:this.data},this.switchModal=!0}},{key:"hanldeSelect",value:function(e,t){e.stopPropagation();var a=this.data,n=this.changeData,r=n.key,s=n.index,i=this.selectData[t],o=a[r].res[s];Object.assign(o,i),this.updateData(a),this.switchModal=!1}},{key:"updateData",value:function(e){this.data={},this.data=e}}]),Object(o["a"])(t,e),t}(d["b"]);y=u["a"]([Object(d["a"])({components:{}})],y);var g=y,k=g,_=(a("7adf"),a("2877")),x=Object(_["a"])(k,f,p,!1,null,"3cae5b98",null);x.options.__file="Main.vue";var w=x.exports,C=function(e){function t(){return Object(i["a"])(this,t),Object(c["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),t}(d["b"]);C=u["a"]([Object(d["a"])({components:{Main:w}})],C);var O=C,j=O,q=(a("7c55"),Object(_["a"])(j,r,s,!1,null,null,null));q.options.__file="App.vue";var S=q.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(S)}}).$mount("#app")},d3dd:function(e,t,a){},d739:function(e,t,a){e.exports=a.p+"img/delete.f1890805.svg"},eef4:function(e,t,a){e.exports=a.p+"img/add.d0b4750c.svg"}});
//# sourceMappingURL=app.af916dd9.js.map